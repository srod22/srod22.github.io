/* Addng interactivity to the site with Javascript */

// Says Hello Everyone and let's them know that the dev tools console
console.log("Hello Everyone. Look! The Script is Running");

let textbox = document.querySelector("#userInput");
let picbox = document.querySelector("#pictureBox");
let message = document.querySelector("#message");
let namebox = document.querySelector("#nameBox");


console.log(textbox);
console.log(picbox);
console.log(message);

//Create a variable tha keeps track of the times user enters a guess so they won't repeat it
let count = 0
let count2 = 0
let count3 = 0
let count4 = 0
let count5 = 0
let count6 = 0
let count7 = 0
let count8 = 0
let count9 = 0
let cGuess = 0

function reload() {
  location.reload();
}

document.querySelector("button").addEventListener("click", reload);

textbox.addEventListener("input", e => {
  //console.log("Key pressed")
  console.log(textbox.value)
  let guess = textbox.value
  
  
  //*************************************************
  guess = textbox.value.toLowerCase()
  //*************************************************
  
  //JavaScript
  if (guess === "javascript" && count < 1) {
    console.log("You got JavaScript!")
    count += 1
    cGuess += 1;
    console.log(`Correct Guesses: ${cGuess}`)
    console.log(`JavaScript was entered ${count} time(s).`)
    picbox.innerHTML += `<img src="https://cdn.glitch.com/59c52e55-ce55-41c8-9aa5-fc8b34082d44%2Fjavascript.jpg?v=1624226399610" />`
    namebox.innerHTML += `JavaScript `
    textbox.value = ""
  } 
  //Swift
    else if (guess === "swift" && count2 < 1) {
    console.log("You got Swift!")
    count2 += 1
    cGuess += 1;
    console.log(`Correct Guesses: ${cGuess}`)
    console.log(`Swift was entered ${count2} time(s).`)
    picbox.innerHTML += `<img src="https://cdn.glitch.com/59c52e55-ce55-41c8-9aa5-fc8b34082d44%2Fswift.jpg?v=1624226400570"/>`
    namebox.innerHTML += `Swift `
    textbox.value = ""
  } 
  //Scala
    else if (guess === "scala" && count3 < 1) {
    console.log("You got Scala!")
    count3 += 1
    cGuess += 1;
    console.log(`Correct Guesses: ${cGuess}`)
    console.log(`Scala was entered ${count3} time(s).`)
    picbox.innerHTML += `<img src="https://cdn.glitch.com/59c52e55-ce55-41c8-9aa5-fc8b34082d44%2Fscala.jpg?v=1624226409379" />`
    namebox.innerHTML += `Scala  `
    textbox.value = ""
  } 
  //Go
    else if (guess === "go" && count4 < 1) {
    console.log("You got Go!")
    count4 += 1
    cGuess += 1;
    console.log(`Correct Guesses: ${cGuess}`)
    console.log(`Go was entered ${count4} time(s).`)
    picbox.innerHTML += `<img src="https://cdn.glitch.com/59c52e55-ce55-41c8-9aa5-fc8b34082d44%2Fgo.jpg?v=1624226400306" />`
    namebox.innerHTML += `Go ` 
    textbox.value = ""
  } 
  //Python
    else if (guess === "python" && count5 < 1) {
    console.log("You got Python!")
    count5 += 1
    cGuess += 1;
    console.log(`Correct Guesses: ${cGuess}`)
    console.log(`Python was entered ${count5} time(s).`)
    picbox.innerHTML += `<img src="https://cdn.glitch.com/59c52e55-ce55-41c8-9aa5-fc8b34082d44%2Fpython.jpg?v=1624226399993" />`
    namebox.innerHTML += `Python `
    textbox.value = ""
  } 
  //Elm
    else if (guess === "elm" && count6 < 1) {
    console.log("You got Elm!")
    count6 += 1
    cGuess += 1;
    console.log(`Correct Guesses: ${cGuess}`)
    console.log(`Elm was entered ${count6} time(s).`)
    picbox.innerHTML += `<img src="https://cdn.glitch.com/59c52e55-ce55-41c8-9aa5-fc8b34082d44%2Felm.jpg?v=1624226399740" />`
    namebox.innerHTML += `Elm `
    textbox.value = ""
  } 
  //Ruby
    else if (guess === "ruby" && count7 < 1) {
    console.log("You got Ruby!")
    count7 += 1
    cGuess += 1;
    console.log(`Correct Guesses: ${cGuess}`)
    console.log(`Ruby was entered ${count7} time(s).`)
    picbox.innerHTML += `<img src="https://cdn.glitch.com/59c52e55-ce55-41c8-9aa5-fc8b34082d44%2Fruby.jpg?v=1624226400272" />`
    namebox.innerHTML += `Ruby `
    textbox.value = ""
  } 
  //C#
    else if (guess === "c#" && count8 < 1) {
    console.log("You got C#!")
    count8 += 1
    cGuess += 1;
    console.log(`Correct Guesses: ${cGuess}`)
    console.log(`C# was entered ${count8} time(s).`)
    picbox.innerHTML += `<img src="https://cdn.glitch.com/59c52e55-ce55-41c8-9aa5-fc8b34082d44%2Fcsharp.jpg?v=1624226401429" />`
    namebox.innerHTML += `C#&nbsp`
    textbox.value = ""
  }
  //Rust
    else if (guess === "rust" && count9 < 1) {
    console.log("You got Rust!")
    count9 += 1
    cGuess += 1;
    console.log(`Correct Guesses: ${cGuess}`)
    console.log(`Rust was entered ${count9} time(s).`)
    picbox.innerHTML += `<img src="https://cdn.glitch.com/59c52e55-ce55-41c8-9aa5-fc8b34082d44%2Frust.jpg?v=1624226399243" />`
    namebox.innerHTML += `Rust `
    textbox.value = ""
  }
  
  //Message To Print When All Are Correct
  if (cGuess === 9) {
  console.log("You have 9 entries that are correct!")
  message.innerHTML += `You Did It! You Are Amazing!!`
  }
//}
  
});
