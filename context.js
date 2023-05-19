var chatbox = document.getElementById('chatbox');
var messageInput = document.getElementById('message-input');
var sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', function() {
  var message = messageInput.value;

  if (message !== '') {
    var messageElement = createMessageElement('User', message);
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;

    messageInput.value = '';
  }
});

messageInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    sendButton.click();
  }
});

function createMessageElement(username, message) {
  var messageDiv = document.createElement('div');
  messageDiv.className = 'message';

  var usernameSpan = document.createElement('span');
  usernameSpan.className = 'username';
  usernameSpan.textContent = username;

  var messageTextSpan = document.createElement('span');
  messageTextSpan.textContent = message;

  var timestampSpan = document.createElement('span');
  timestampSpan.className = 'timestamp';
  timestampSpan.textContent = getCurrentTimestamp();

  messageDiv.appendChild(usernameSpan);
  messageDiv.appendChild(messageTextSpan);
  messageDiv.appendChild(timestampSpan);

  return messageDiv;
}

function getCurrentTimestamp() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return hours + ':' + minutes + ' ' + ampm;
}
