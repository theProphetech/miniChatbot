"use strict";
const chatbotCon = document.querySelector(".chatbot--con");
const displayCon = document.querySelector(".chatdisplay--con");
const userInput = document.getElementById("user--input");
const sendBtn = document.querySelector(".send--btn");
const startNowBtn = document.querySelector(".start--btn");
const closeBtn = document.querySelector(".close--btn");
function sendMessage() {
  let inputValue = userInput.value;
  console.log(inputValue);
  if (inputValue.trim() !== "") {
    appendMessage("user", inputValue, "user--con");
    processTask(inputValue);
    userInput.value = "";
  }
}
function appendMessage(sender, message, objCon) {
  let messageElementCon = document.createElement("div");
  let messageElement = document.createElement("div");
  messageElement.innerHTML = message;
  messageElementCon.classList.add(objCon);
  messageElement.classList.add(sender);
  displayCon.append(messageElementCon);
  messageElementCon.append(messageElement);
}

function processTask(userInput) {
  let botResponse = "";
  if (userInput.toLowerCase().includes("hello")) {
    botResponse = "Hello! How can i assist you?";
  } else if (userInput.toLowerCase().includes("goodbye")) {
    botResponse = "Goodbye! Have a great day!";
  } else if (
    userInput.toLowerCase().includes("hi") &&
    userInput.toLowerCase().includes("book")
  ) {
    botResponse = "Sure, can i know your connection Limit";
  } else if (
    userInput.toLowerCase().includes("hello") &&
    userInput.toLowerCase().includes("book")
  ) {
    botResponse = "Sure, can i know your connection Limit";
  } else if (userInput.toLowerCase().includes("book")) {
    botResponse = "Sure, can i know your connection Limit";
  } else if (userInput.toLowerCase().includes("connection")) {
    botResponse = "Please let me know your boarding and landing points";
  } else if (userInput.toLowerCase().includes("codes")) {
    botResponse =
      "Kindly share your planned travelling dates to proceed further.";
  } else if (userInput.toLowerCase().includes("date")) {
    botResponse = `
      We found a frontier airline matching your essential details with one connection
      can I proceed with the booking?
      `;
  } else if (userInput.toLowerCase().include("proceed")) {
    botResponse = "your booking has been processed";
  } else {
    botResponse =
      "I'm sorry, I didn't understand that. Can you please clarify?";
  }
  appendMessage("bot", "Bot: " + botResponse, "bot--con");
}
sendBtn.addEventListener("click", sendMessage);

startNowBtn.addEventListener("click", function () {
  document.querySelector(".home--page").classList.add("hidden");
  document.querySelector(".chatbot--section").style.display = "block";
});

closeBtn.addEventListener("click", function () {
  document.querySelector(".chatbot--section").classList.add("hidden");
  document.querySelector(".home--page").className = "home--page";
});
