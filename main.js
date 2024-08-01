"use strict";
//This is just the form that the player uses to write their name in the beginning of the game. It should dissappear later

const submitNameForm = document.querySelector(".submit-name-form");
const btnEnterName = document.querySelector(".btn-enter-name");
const inputUserName = document.querySelector(".input-user-name");

const chatInputForm = document.querySelector(".chat-input-form");

//Here are the options that the player are going to chose from.
const option0El = document.querySelector("#option0");
const option1El = document.querySelector("#option1");
const option2El = document.querySelector("#option2");
const btnOptionList = document.querySelectorAll(".btn-option");

const chatHeaderName = document.querySelector(".chat-header-name");
const chatMessages = document.querySelector(".chat-messages");

const btnStartOver = document.querySelector("#start-over");

const bloop = document.querySelector("#bloop-2");
bloop.volume = 0.1;
const textingSound = document.querySelector("#textingsound");
textingSound.volume = 0.1;
const happyPop = document.querySelector("#happy-pop-2");
happyPop.volume = 0.1;
const ticTac = document.querySelector("#tic-tac");
ticTac.volume = 0.3;

let playerName = "Player";
let npcName = "Unknown";
let npcTextsInProgress = 0;

const createChatMessagesElement = (message) => `        
<div class="message ${message.npc === true ? "blue-bg" : "grey-bg"}">
<div class="message-sender">${message.sender}</div>
<div class="message-text">${message.text}</div>
<div class="message-timestamp">${message.timestamp}</div>
</div>`;

const sendMessage = (text, sender = playerName, npc) => {
  const timestamp = clock;

  const message = {
    sender,
    text,
    timestamp,
    npc,
  };

  chatMessages.innerHTML += createChatMessagesElement(message);
  // Scroll the new message into view
  chatMessages.lastElementChild.scrollIntoView({ behavior: "smooth" });
};

const btnOpHide = function () {
  btnOptionList.forEach((buttonEl) => buttonEl.classList.add("hidden"));
};

const btnOpShow = function (opTextArr) {
  btnOptionList.forEach((buttonEl, i) => {
    buttonEl.classList.remove("hidden"),
      (btnOptionList[i].textContent = opTextArr[i]);
  });
};

const clearOptText = function () {
  btnOptionList.forEach((button) => (button.textContent = ""));
};

// "delay is the delay before the npc starts 'texting', and "textingDelay" is the delay that changes the DOM to "xxx texting..." before the text is sent. "currTextDelayTotal" is the combined (total) delay of a message before it is sent
let currTextDelayTotal = 0;
const npcMessage = (
  text,
  beforeTextingDelay = 500,
  textingDelay,
  opTextArr
) => {
  // Hides the option-buttons
  btnOpHide();

  npcTextsInProgress++;
  // If the npc is already texting. The next message should take a while before being sent
  currTextDelayTotal > 0
    ? (beforeTextingDelay = currTextDelayTotal + 200)
    : currTextDelayTotal;
  // The variable that holds the amount of time the npc is "texting" before the npc "sends" the text
  textingDelay = textingDelay ? textingDelay : text.length * 100;
  currTextDelayTotal = textingDelay + beforeTextingDelay;

  ///////////////////////////////////////////////////////////
  //FIXME:FIXME:FIXME: THIS PIECE OF CODE IS USED FOR DEVELOPMENT. TO SEND THE NPC TEXT WITHOUT ANY DELAY
  // currTextDelayTotal = textingDelay = 0;
  ////////////////////////////////////////////////////////

  setTimeout(() => {
    // Plays a texting sound when the npc starts texting
    textingSound.play();
    let dots = ".";
    const dotsInterval = setInterval(() => {
      dots = dots + ".";
      if (dots.length > 3) dots = "";
      chatHeaderName.textContent = `${npcName} is typing${dots}`;
    }, 500);

    setTimeout(() => {
      sendMessage(text, npcName, true);
      chatHeaderName.textContent = npcName;
      // Sets the npcTextInProgress to one less. When the npc has 0 texts in progress the player can respond
      npcTextsInProgress--;
      //Stops the interval that makes the dots-animation
      clearInterval(dotsInterval);
      // Resets the variable that hold the delay for the npc's messeges to be sent
      currTextDelayTotal = 0;

      // Plays a sound when the npc sends a text
      bloop.play();

      // If the npc has sent their last message and the function is called that sets the new text of the options button, then the optionsbuttons new text is shown
      if (
        // Checks if there is an option-text-array
        opTextArr
      ) {
        btnOpShow(opTextArr);
      }
    }, textingDelay);
  }, beforeTextingDelay);
};

const npcMessageAndSetOptText = function (
  text,
  opTextArr,
  beforeTextingDelay,
  textingDelay
) {
  npcMessage(text, beforeTextingDelay, textingDelay, opTextArr);
};

const playerMessage = (text, sender = playerName) => {
  //Checks that the user doesn't interupt the npc while it's typing
  if (npcTextsInProgress === 0) {
    sendMessage(text, sender);
  }
};

const validateUsername = function (userInput) {
  //Extracts the username
  let username = extractUsername(userInput);
  // Username must be 3-15 characters long
  const lengthCheck = /^[\w-]{3,15}$/;
  // Username can only contain alphanumeric characters
  const contentCheck = /^[a-zA-Z]+$/;
  // Username cannot start or end with underscores or hyphens
  const edgeCheck = /^(?![_-])(?!.*[_-]$)/;
  // Username cannot start with underscores or hyphens
  const startCheck = /^(?![_-])/;
  // Username cannot end with underscores or hyphensc
  const endCheck = /(?![_-])$/;

  if (
    !username ||
    !lengthCheck.test(username) ||
    !contentCheck.test(username) ||
    !edgeCheck.test(username)
  ) {
    npcMessage("Really, is that your name?");
    if (!lengthCheck.test(username))
      npcMessage(
        "Usually a name is between three to about fiften letters long"
      );
    if (!contentCheck.test(username))
      npcMessage("Some wierd signs in there but ok");
    if (!startCheck.test(username))
      npcMessage(
        "Sorry but how can your name start with that sign? Impossible"
      );
    if (!endCheck.test(username))
      npcMessage("Your name can't possibly end with that");
    npcMessage(
      "Please It's important that I learn your name. Write it once again, your name in one word, and nothing else"
    );
  } else {
    playerName = username;
    npcName = "Anna";

    npcMessage(`Nice to meet you ${username}! I'm Anna`);
    // If the user has inputed a valid username, the text input field is removed and replaced by the options-button
    replaceUserInputs();
    // Here should the call go to the rest of the story
    /////////
    startStory();
  }
};

const opt = {
  comment: [undefined, undefined, undefined],
  afterOptionsComment: undefined,
  func: [undefined, undefined, undefined],
  userChoice: [false, false, false],
};
opt.comment.forEach((comment) => console.log(comment));
/////////////////

const commentAfterOption = function () {
  if (opt.afterOptionsComment) {
    npcMessage(opt.afterOptionsComment);
    opt.afterOptionsComment = undefined;
  }
};

// Event-listener for the options-button
btnOptionList.forEach((btnOption, i) =>
  btnOption.addEventListener("click", (e) => {
    e.preventDefault();
    if (npcTextsInProgress === 0) {
      happyPop.play();
      sendMessage(btnOption.textContent, playerName, btnOption.id);
      opt.userChoice.forEach((userChoice, i) => {
        opt.userChoice[i] = false;
      });
      opt.userChoice[i] = true;
      console.log(opt.userChoice);
      if (opt.comment[i]) npcMessage(opt.comment[i]);
      opt.comment.length = 0;
      commentAfterOption();
      opt.func[i]();
    }
  })
);

submitNameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputUserNameText = inputUserName.value.trim();
  if (npcTextsInProgress === 0 && inputUserNameText.length > 0) {
    happyPop.play();
    playerMessage(inputUserNameText);
    validateUsername(inputUserNameText);
  }
  inputUserName.blur();
  inputUserName.value = "";
});

const replaceUserInputs = function () {
  submitNameForm.classList.add("hidden");
  setTimeout(() => {
    chatInputForm.classList.add("visible");
    setTimeout(() => chatInputForm.classList.remove("hidden"), 500);
  }, 1000);
};

const askPlayerName = function () {
  npcMessage("Hi, it's very pleasant to meet you. What's your name?", 2000);
};
askPlayerName();

const setOpFn = function (optFnArr) {
  opt.func.length = 0;
  for (let i = 0; i < btnOptionList.length; i++) {
    opt.func[i] = optFnArr[i] ? optFnArr[i] : optFnArr[0];
  }
};

const setOpNpcCom = function (opCommentArr, afterOpCom) {
  for (let i = 0; i < btnOptionList.length; i++) {
    opt.comment[i] = opCommentArr[i];
  }
  opt.afterOptionsComment = afterOpCom;
};

const clearChat = function () {
  while (chatMessages.firstChild) {
    chatMessages.removeChild(chatMessages.firstChild);
  }
};

const restartGame = function () {
  clearChat();
  askPlayerName();
  submitNameForm.classList.remove("hidden");
  chatInputForm.classList.remove("visible");
  chatInputForm.classList.add("hidden");
  setOpFn([undefined]);
};

//FIXME: Developer prompt. If a function needs to be tested, put it here and press the chat header name (the npc name)
chatHeaderName.addEventListener("click", () => {});
