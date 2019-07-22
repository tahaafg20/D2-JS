/* eslint-disable no-multiple-empty-lines */

const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
    return Math.random() < 0.2;
};

const newMessage = () => {
  // TODO: return a random message as an object with two keys, subject and sender
  senderArray = ["Selena Gomez", "James Bond", "C.Ronaldo", "Salman Khan", "Ibrahimovich"];
  subjectArray= ["Please come to my concert", "I played in a new movie, let's watch it together", "Dont you want to train me?", "I fell in love with you let's have a date", "Man I have a problem need your consultant"];
  var emailSender = senderArray[Math.floor(Math.random()*senderArray.length)];
  var emailSubject = subjectArray[Math.floor(Math.random()*subjectArray.length)];
  return {
    sender: emailSender,
    subject: emailSubject
  };
};

const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  var senderDiv = document.createElement("div");
  var messageDiv = document.createElement("div");
  var messageConditionDiv = document.createElement("div");
  var messageDetails = Object.values(message);
  var boldSenderText = document.createElement("H1");
  var boldSubjectText = document.createElement("H1");
  // boldSenderText.innerHTML = `<h1>${messageDetails[0]}</h1>`;
  // boldSubjectText.innerHTML = `<h1>${messageDetails[1]}</h1>`;
  // senderDiv.appendChild(boldSenderText);
  // messageDiv.appendChild(boldSubjectText);
  // senderDiv.innerHTML = `<h1>${messageDetails[0]}</h1>`;
  // messageDiv.innerHTML = `<h1>${messageDetails[1]}</h1>`;
  var senderText = document.createTextNode(`${message["sender"]}`);
  var subjectText = document.createTextNode(`${message["subject"]}`);
  // senderDiv.appendChild(senderText);
  // messageDiv.appendChild(subjectText);
  senderDiv.innerHTML = `${senderText}`;
  messageDiv.innerHTML = `${subjectText}`;
  messageConditionDiv.appendChild(senderDiv);
  messageConditionDiv.appendChild(messageDiv);
  messageConditionDiv.classList.add("row");
  messageConditionDiv.classList.add("message");
  messageConditionDiv.classList.add("unread");
  var inboxRow = document.querySelector("#inbox");
  inboxRow.insertBefore(messageConditionDiv, inboxRow.childNodes[0]);
  senderDiv.classList.add("col-3");
  messageDiv.classList.add("col-9");
  senderDiv.innerHTML = messageDetails[0];
  messageDiv.innerHTML = messageDetails[1];
};

const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
  if (hasNewMessage()){
    appendMessageToDom(newMessage());
    document.querySelector("#count").innerHTML;
    var unreadMessagesCounter = document.querySelectorAll(".unread").length;
    document.querySelector("#count").innerHTML = `(${unreadMessagesCounter})`;
    document.title = "You Have A New Message";
    alert(document.title);
  }
};

















// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

module.exports = { hasNewMessage, newMessage };
