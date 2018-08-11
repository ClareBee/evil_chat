import { setCallback } from "client/chat";
import "components/message/message";
import "./messages.css";

function scrollToBottom(element) {
  // eslint-disable-next-line
  element.scrollTop = element.scrollHeight;
}

const messages = document.querySelector(".js-messages");

if (messages) {
  const content = messages.querySelector(".js-messages--content");

  scrollToBottom(content);

  // `chat.js` calls this whenever new message received
  // over ActionCable
  setCallback(message => {
    // i.e. after last child
    content.insertAdjacentHTML("beforeend", message);

    scrollToBottom(content);
  });
}
