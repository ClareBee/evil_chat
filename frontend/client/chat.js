// client-side js counterpart to server-side Ruby chat_channel.rb
import createChannel from "client/cable";

let callback;

//  args are name of channel and an ActionCable callback (received/disconnected/connected)
const chat = createChannel("ChatChannel", {
  received({ message }) {
    if (callback) callback.call(null, message);
  }
});

// Sending a message: "perform" method calls a respective method
// defined in chat_channel.rb. Connects ruby + js
function sendMessage(message) {
  chat.perform("send_message", { message });
}

// Getting a message: generic callback invoked when sth received
// over ChatChannel
function setCallback(fn) {
  callback = fn;
}

// export functions to be used in components
export { sendMessage, setCallback };
