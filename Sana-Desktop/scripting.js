const motivationalQuotes = [
  "Owning our story and loving ourselves through that process is the bravest thing we’ll ever do.",
  "You are enough just as you are.",
  "Believe in yourself — even when it's hard.",
  "Small steps every day lead to big change.",
  "You've survived 100% of your worst days.",
  "Progress, not perfection.",
  "Your feelings are valid.",
  "It's okay to rest. Healing is not linear."
];

document.getElementById("user-input").addEventListener("keydown", function (e) {
  if (e.key === "Enter" && this.value.trim() !== "") {
    const userText = this.value.trim();
    this.value = "";

    // Show user message (optional)
    const userMessage = document.createElement("div");
    userMessage.className = "chat-message";
    userMessage.innerHTML = `<div class="bubble">${userText}</div>`;
    document.getElementById("chat-log").appendChild(userMessage);

    // Sana's reply
    const sanaMessage = document.createElement("div");
    sanaMessage.className = "chat-message sana";
    sanaMessage.innerHTML = `
      <img src="images/sanaa.jpeg" alt="Sana" class="avatar">
      <div class="bubble">${getRandomQuote()}</div>
      <span class="time">${getTime()}</span>
    `;
    document.getElementById("chat-log").appendChild(sanaMessage);
  }
});

function getRandomQuote() {
  return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
}

function getTime() {
  const now = new Date();
  return now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
}
