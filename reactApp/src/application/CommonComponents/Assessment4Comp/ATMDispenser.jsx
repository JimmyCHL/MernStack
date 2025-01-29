import { useCallback, useState } from 'react'

export default function ATMDispenser() {
  const [amount, setAmount] = useState(0)
  const [dispenser, setDispenser] = useState({})
  const [totalNotes, setTotalNotes] = useState(0)

  const withdraw = useCallback(() => {
    if (amount <= 0) {
      setDispenser({})
    } else {
      const denominations = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
      let balance = amount
      const notes = {}
      let totalNotes = 0
      denominations.forEach((denomination) => {
        notes[denomination] = Math.floor(balance / denomination)
        totalNotes += notes[denomination]
        balance = balance % denomination
      })
      setDispenser(notes)
      setTotalNotes(totalNotes)
    }
  }, [amount])

  return (
    <div>
      <h1>ATM Dispenser</h1>
      <input type="number" placeholder="Enter amount" onChange={(e) => setAmount(parseInt(e.target.value, 10))} />
      <button onClick={withdraw}>Withdraw</button>
      {Object.entries(dispenser).map(([denomination, count]) => (
        <p key={denomination}>
          {' '}
          {count} notes of Rs {denomination}
        </p>
      ))}
      <p>Total notes dispensed: {totalNotes}</p>
    </div>
  )
}
