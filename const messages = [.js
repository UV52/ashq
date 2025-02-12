const messages = [
    "Are you sure?",
    "Very sure??",
    "Are you 100% sure?",
    "Come on, say yes",
    "Think about it again",
    "If you say no, I'm going to be sad",
    "Very, very sad",
    "I'm going to be very, very, very sad",
    "Well then",
    "SAY YES NOW"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
