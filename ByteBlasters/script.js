const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const questionSection = document.querySelector('.question-section');

// ChatBot 
const chatbot = document.querySelector('.chatbot');
const exitChatBtn = document.querySelector('.exit-chat-btn');
const chatInput = document.querySelector('.chat-input textarea')
const sendChatBtn = document.querySelector('.chat-input span')
const chatbox = document.querySelector('.chatbox')
const bubblesContainer = document.getElementById('bubbles-container');


// const quizBox = document.querySelector('.quiz-box');
// const resultBox = document.querySelector('.result-box');
// const tryAgainBtn = document.querySelector('.tryAgain-btn');
// const goHomeBtn = document.querySelector('.goHome-btn');

// Function to hide bubbles
function hideBubbles() {
    bubblesContainer.style.display = 'none';
}
  
  // Function to show bubbles
function showBubbles() {
    bubblesContainer.style.display = 'flex';
}

function openChatbot() {
    chatbot.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    hideBubbles();

    // Start the conversation (You may need to adjust this based on your chatbot setup)
    window.botpressWebChat.sendText('Hi there! How can I help you?');
}

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
    hideBubbles();
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    showBubbles(); 
}

continueBtn.onclick = () => {
    // questionSection.classList.add('active');
    // chatbot.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active'); // to remove the blur effect 
    hideBubbles();

    // ChatBot by Soham 
    const botpressScript = document.createElement('script');
    botpressScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    document.head.appendChild(botpressScript);

    // Initialize Botpress Web Chat
    const chatInitScript = document.createElement('script');
    chatInitScript.innerHTML = `
        window.botpressWebChat.init({
            "composerPlaceholder": "Chat with bot",
            "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
            "botId": "f01b5ec8-a4a8-4099-8594-79ec6776fabc",
            "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
            "messagingUrl": "https://messaging.botpress.cloud",
            "clientId": "f01b5ec8-a4a8-4099-8594-79ec6776fabc",
            "webhookId": "e772a6ff-acf8-4908-bc1d-06cb204d7431",
            "lazySocket": true,
            "themeName": "prism",
            "frontendVersion": "v1",
            "showPoweredBy": true,
            "theme": "prism",
            "themeColor": "#2563eb"
        });
    `;
    document.head.appendChild(chatInitScript);
}

// exitChatBtn.onclick = () => {
//     chatbot.classList.remove('active');
//     popupInfo.classList.remove('active');
//     main.classList.remove('active');
//     showBubbles(); 
// }

// let userMessage;

// const createChatLi = (message, className) => {
//     // Create a chat <li> element with passed message and className
//     const chatLi = document.createElement("li");
//     chatLi.classList.add("chat", className);
//     let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
//     chatLi.innerHTML = chatContent;
//     return chatLi;
// }

// const handleChat = ()  => {
//     userMessage = chatInput.value.trim();
//     if(!userMessage) return;

//     // Append the user's message to the chatbox
//     chatbox.appendChild(createChatLi(userMessage, "outgoing"));

//     setTimeout(() => {
//         // Display "Thinking..." message while waiting for the response
//         chatbox.appendChild(createChatLi("Thinking...", "incoming"));
//     }, 600);
// }

// sendChatBtn.addEventListener("click", handleChat);


