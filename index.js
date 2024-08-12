// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
let word = "musty"

// Create a new variable called attempts and set it to 0
let attempts = 0

// Prompt the user to guess a letter
let guess = prompt("Guess a letter: ")

// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word
if (word.includes(guess)) {
  console.log("\n\nYou guessed a letter!\n")
} else {
  console.log("\n\nThat letter is not in the word\n")
}

// Prompt the user to guess the word 
guess = prompt("Now guess the word")

// Increase attempts by 1
attempts++

// Write an if/else statement that checks if the user guess is equal to your word and tells the user
if (guess === word) {
  console.log("\n\nYou Guessed the word!\n")
} else {
  console.log("\n\nYou didn't guess the word correctly\n")
}

// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
// In the while loop, copy the prompt and if/else check for a letter
while (guess !== word) {
  guess = prompt("Guess a letter: ")
  if (word.includes(guess)) {
    console.log("\nYou guessed a letter!\n")
  } else {
    console.log("\nThat letter is not in the word\n")
  }
  guess = prompt("Now guess the word")
  if (guess === word) {
    console.log("\nYou Guessed the word!\n")
  } else {
    console.log("\nYou didn't guess the word correctly\n")
  }
  attempts++
}

// After the while loop, print "It took (attempts) attempts" 
console.log("It took", attempts, "attempts")