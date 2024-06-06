// Get elements
const chatbotContainer = document.getElementById('chatbot-container');
const chatbot = document.getElementById('chatbot');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Function to add chat message
function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatbot.appendChild(messageElement);
}

// Function to handle user input
function handleUserInput() {
    const message = userInput.value.trim();
    if (message !== '') {
        addMessage(message, 'user');
        // You can handle user input here and send responses from the chatbot
        // For simplicity, let's just echo the user's message as a response
        setTimeout(() => addMessage(message, 'bot'), 500);
        userInput.value = ''; // Clear input field
    }
}

// Event listener for Send button click
sendBtn.addEventListener('click', handleUserInput);

// Event listener for Enter key press
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

