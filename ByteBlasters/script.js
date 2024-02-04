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


// Function to hide bubbles
function hideBubbles() {
    bubblesContainer.style.display = 'none';
}
  
  // Function to show bubbles
function showBubbles() {
    bubblesContainer.style.display = 'flex';
}



startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
    hideBubbles();
}




