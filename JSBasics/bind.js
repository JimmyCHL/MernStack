// bind: is the function present with each function which is used to change the context or hold the context
// for the time function gets executed.
// In other words this is similar to call and apply but doesn't execute the function immediately
// however becomes part of the same function by holding the new context supplied -
// example : Same way as parents or caretakers hold the money and give it to us when we need it

var index = 0
for (index = 0; index < 5; index++) {
  // setTimeout executes the callback function passed as first parameter
  // after the milliseconds passed as second param - for one time only
  setTimeout(function () {
    console.log(index)
  }, 1000)
}
console.log(index)

var User = {
  name: 'Jimmy',
  age: 18,
  address: 'Somewhere in USA',
  GetUserDetails: function () {
    console.log(this) // User object
    console.log(`
      ${this.name}
      ${this.age}
      ${this.address}
    `)

    setTimeout(
      function () {
        console.log(this) // Timeout object
        console.log(`
        ${this.name}
        ${this.age}
        ${this.address}
      `)
      }.bind(User), // bine(this) will hold the context of User object, both works
      2000
    )
  },
}

User.GetUserDetails()

// var hi = function () {
//   console.log(this) // Object [global] in Node.js, Window in browser
//   console.log(hi) // [Function: hi]
// }

// hi()

//an example on UI, by doing DOM manipulation
//html example
{
  /* <button id="newBtnBind">Practice Div</button> */
}
// var btn = document.getElementById("newBtnBind")
// var onclick = function(){alert("The name is "+ this.name)}
// btn.addEventListener("click", this.onclick.bind(user1), false) // changing context to user1 upon click
// btn.addEventListener("click", this.onclick, false) //without bind context remains global
// var user1 = {
//     name : "Micheal"
// }
// btn.removeEventListener("click",this.onclick)
// // second example
// // <button id=​"newBtnBind">​Practice Bind​</button>​
// var selectBtn = document.getElementById("newBtnBind")
// var info = {"Event" : "Click", "Topic" : "Bind"}
// var clickFunc = function(){alert(`The Event is ${this.Event} and topic is  ${this.Topic}`)}
// selectBtn.addEventListener("click", clickFunc.bind(info), false)
// var info2 = {"Event" : "Multiple Click", "Topic" : "UnderStood Bind Purpose"}
// selectBtn.addEventListener("click", clickFunc.bind(info2), false)
