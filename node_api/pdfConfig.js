const PDFDocument = require('pdfkit')
const { PassThrough } = require('stream')
const s3 = require('./awsConfig')

/** create PDF and save in S3 bucket */
const createPDF = async (order) => {
  const doc = new PDFDocument({
    margins: { top: 10, bottom: 10, left: 10, right: 10 },
    autoFirstPage: false,
    bufferPages: true,
  })
  const PassThroughStream = new PassThrough()
  doc.pipe(PassThroughStream)

  doc.addPage()

  doc.fontSize(20).text('Order Details', { align: 'center' })
  doc.moveDown()
  doc.rect(10, doc.y, doc.page.width - 20, 2).stroke('black')
  doc.moveDown()
  doc.fontSize(14).text(`Order Number: ${order.orderNumber}`)
  doc.moveDown()
  doc.fontSize(14).text(`Order Date: ${order.orderDate}`)
  doc.moveDown()
  doc.fontSize(14).text(`Status: ${order.status}`)
  doc.moveDown()
  doc.fontSize(14).text(`Total Amount: ${order.totalAmount}`)
  doc.moveDown()
  doc.fontSize(14).text(`Discount: ${order.discount}`)
  doc.moveDown()
  doc.fontSize(14).text('User Details:')
  doc.moveDown()
  doc.fontSize(14).text(`User Name: ${order.user.userName}`)
  doc.moveDown()
  doc.fontSize(14).text(`Mobile: ${order.user.mobile}`)
  doc.moveDown()
  doc.fontSize(14).text(`Street: ${order.user.street}`)
  doc.moveDown()
  doc.fontSize(14).text('Items:')
  doc.moveDown()
  doc.fontSize(14).text('Item Name | Quantity | Price | Status')
  doc.moveDown()
  order.items.forEach((item) => {
    doc.fontSize(14).text(`${item.item.name} | ${item.quantity} | ${item.price} | ${item.status}`)
    doc.moveDown()
  })

  doc.flushPages()
  doc.end()

  try {
    const buffer = await streamToBuffer(PassThroughStream)

    const params = {
      Bucket: process.env.BucketName,
      Key: `order_${order.orderNumber}.pdf`,
      Body: buffer,
      ContentType: 'application/pdf', // Set the appropriate content type for the file
    }

    const data = await s3.upload(params).promise()
    console.log('File uploaded successfully:', data)
  } catch (err) {
    console.log(err)
    throw err
  }
}

// Function to convert a stream to a buffer
function streamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const chunks = []
    stream.on('data', (chunk) => {
      chunks.push(chunk) // Collect chunks
    })

    stream.on('end', () => {
      resolve(Buffer.concat(chunks)) // Combine the chunks into a single buffer
    })

    stream.on('error', (err) => {
      reject(err) // If there's an error, reject the promise
    })
  })
}

module.exports = createPDF
