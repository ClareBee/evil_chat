import { sendMessage } from "client/chat";
import "./message-form.css";

function submitMessage(input) {
  // Invokes js sendMessage fn which invokes ruby send_message method
  // that will create a Message instance with ActiveRecord
  sendMessage(input.value);

  // eslint-disable-next-line
  input.value = "";
  input.focus();
}

const form = document.querySelector(".js-message-form");

if (form) {
  const input = form.querySelector(".js-message-form--input");
  const submit = form.querySelector(".js-message-form--submit");

  // Send message with cmd/ctrl+enter
  input.addEventListener("keydown", event => {
    if (event.keyCode === 13 && event.metaKey) {
      event.preventDefault();
      submitMessage(input);
    }
  });

  // Or w button click
  submit.addEventListener("click", event => {
    event.preventDefault();
    submitMessage(input);
  });
}
