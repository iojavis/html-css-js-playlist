/*import { LoremIpsum } from "lorem-ipsum";
// const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});
console.log(LoremIpsum);
// Generate and log a single word
const singleWord = lorem.generateWords(1);
console.log(singleWord);
// Generate and log five sentences
const fiveSentences = lorem.generateSentences(5);
console.log(fiveSentences);
// Generate and log seven paragraphs
const sevenParagraphs = lorem.generateParagraphs(7);
console.log(sevenParagraphs); */
///////////////////////////////////////////////////////////////////
const btn = document.getElementById("btn");
const toast = document.getElementById("toasts");

const messages = [
  "Message 1",
  "Message 2",
  "Message 3",
  "Message 4",
  "Message 5",
];

btn.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.innerHTML = getRandomMessage();
  toast.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 4000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
