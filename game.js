"use strict";

/////////////////////////////
// The game itself:

const startStory = function () {
  pre.part1();
};

const askToRestart = function () {
  setTimeout(() => {
    restartMessage();
    setOpFn([restartGame]);
  }, 1000);
};

const pre = {
  part1: function () {
    npcName = "Anna";
    npcMessage(
      `Okay ${playerName}, so this is going to sound wierd but I'll just go for it`
    );
    npcMessage(
      "Just to start, I'm a poor-ish young girl (student-life yay) and I found this job but I would like some advice, okay?"
    );
    npcMessageAndSetOptText(
      "Ready to answer?",
      ["Of course", "Okay", "Not sure"],
      2000
    );
    setOpFn([pre.part2, pre.part2, pre.part2]);
    setOpNpcCom([
      "I'm so glad to hear that",
      "Thanks alot",
      "Okay, well, since you're responding I'm just gonna keep going",
    ]);
  },

  part2: function () {
    npcMessage("First some background");
    npcMessage(
      `So as I said, I’m a student and don’t have much money so naturally I needed to find work.`
    );
    npcMessage(
      `I’ve worked as a barista and as a fast-food staff, and it worked for the time being`
    );
    npcMessage(
      `But running back and forth, breaking my back for (some) screaming customers and coming home smelling like coffee or french fries gets a bit old`
    );
    npcMessage(
      `Especially those days I have to finish assignments later in the evening.`
    );
    npcMessage(`Sorry for the bible 😅`);
    npcMessageAndSetOptText(
      "And now I have actually found a really good gig, and I make decent money too, but there’s a catch",
      [
        "What catch?",
        "Well naturally since we’re texting",
        "Catch is selling your used socks?",
      ]
    );
    setOpFn([pre.part3, pre.part3, pre.part3]);
    setOpNpcCom([
      "Sounds so silly but…",
      "Mhm",
      `Ew no ${playerName}, now I know where your head is at`,
    ]);
  },

  part3: function () {
    npcMessageAndSetOptText(
      "The thing is I do certain tasks for this guy, usually just watching a house. Like just sitting in it.",
      ["Doesn’t sound too weird", "There must be more?", "Where do I sign up??"]
    );
    setOpFn([pre.part4, pre.part4, pre.part4]);
    setOpNpcCom([
      "Well yes, and no",
      "There is",
      "Haha, we don’t live in the same town. I checked 😉",
    ]);
  },

  part4: function () {
    npcMessage(
      "So when I watch his houses, because there seem to be a lot, there are almost always some sorts of rules I have to follow."
    );
    npcMessage(
      `Like “If the attic room is closed, you must also close the door to the cellar” or “check for milk in the refrigerator, if there is milk put on the kitchen sink, otherwise, leave it of for the rest of the stay”`
    );
    npcMessageAndSetOptText("The last one was actually during my last visit", [
      "Do you always follow the rules?",
      "Sounds silly",
      "I’m guessing you have more work planned?",
    ]);
    setOpFn([pre.part5, pre.part5, pre.part5]);
    setOpNpcCom([
      "Yes, always.",
      "Yeah haha, sure does, but I figured I need to follow them anyway",
      "That’s right!",
    ]);
  },

  part5: function () {
    npcMessage(
      "The thing is Mr. Whitaker (the guy), does not strike me as a person you want to disobey, and he has always paid me really good money for what seems to be easy work, although there are some strange rules."
    );
    npcMessageAndSetOptText(
      "And more importantly, he has never tried anything weird",
      [
        "How did you meet him?",
        "I’m sensing some red flags here!",
        "Okay but what’s up this time?",
      ]
    );
    setOpFn([pre.part6, pre.part6, pre.part7]);
    setOpNpcCom([
      "He posted a paper on like an notice board in my town. I just read it and called his number and that was it!",
      "I totally see where you are coming from, but I’ve done this like six times now, and he paid me an all is weel!",
      `I’ll tell you`,
    ]);
  },

  part6: function () {
    npcMessage(
      `I’ve only met Whitaker one time, otherwise he usually leaves the keys in the garden or something and tells me where to pick them up from.`
    );
    npcMessage(
      `This time I’m actually going to pick up the keys from one of Whitakers… Friends? Anyway I got some weird rules as per usual`
    );
    npcMessageAndSetOptText(
      `When I pull up on the driveway, I have to honk one time, wait in the car for four minutes and knock on the door eight times.`,
      ["Got it", "Are you gonna do it?", "Seems stupid this"]
    ),
      setOpFn([pre.part7, pre.part7, pre.part7]),
      setOpNpcCom([
        "Nice",
        "Ofc, and you are going to help me! 😀",
        "Do you think? Also...",
      ]);
  },

  part7: function () {
    npcMessage(
      "One thing that is out of the ordinary this time is that I’ve actually been ordered to stay over the night, which is my first time staying during nighttime"
    );
    npcMessage(
      "Whitaker expressed how sorry he is that I have to during the night, and says that I will never have to work at night again"
    );
    npcMessageAndSetOptText(
      "I'm getting paid 1000€ for just this night, good deal right?",
      [
        "Absolutely!",
        "Wow, good money!, But it sounds weird",
        "No, don’t do it",
      ]
    );
    setOpFn([story.part3, story.part3, story.part3]);
    setOpNpcCom([
      "Nice! I knew I got a good feeling from you!",
      "Right? But it seems a little wierd. Anyway it’s only one night and as you said, good money!",
      "Well… I really needed the cash since college expenses are piling up, and this job pays really well. Plus, it’s only one night.",
    ]);
  },

  part2b: function () {
    npcMessageAndSetOptText("How hard can it be?", [
      "Well, I got a bad feeling but okay",
      "How much does it pay?",
      "DON'T",
    ]);
    setOpNpcCom([
      "To be honest, me too, but if I'm on alert, and you'll help me, I'm sure it will be fine",
      "I told you, 1000 €! A night!",
    ]);
    setOpFn([pre.part3, pre.part3, pre.part2c]);
  },

  part2c: function () {
    npcMessageAndSetOptText("Weeell okay I won't I guess?", [
      "Well when I think about it. The money is pretty good...",
      "Just kidding, do it!",
      "Yes, absolutely do not do it",
    ]);
    setOpNpcCom([
      "It sure is!",
      "Mhm... I see you are quite the character. Anyway...",
    ]);
    setOpFn([pre.part3, pre.part3, pre.part2d]);
  },

  part2d: function () {
    npcMessageAndSetOptText("Are you sure?", [
      "Yes I am sure",
      "If you want to die then do it",
      "I mean it's your choice",
    ]);
    setOpNpcCom([
      "Okay, well then, I guess that's that then. Bye!",
      "Well argued, okay then I won't",
      "It sure is and you know what? I'll do it",
    ]);
    setOpFn([pre.part2eQuit, pre.part2eQuit, story.part2eContinue]);
  },

  part2eContinue() {
    npcMessage(
      "There’s just one weird rule. I can't open the door between midnight and 6 AM. No matter what. He was really serious about it. Kind of spooky, right? But hey, rules are rules."
    );
    story.part3();
  },

  part2eQuit: function () {
    npcMessageAndSetOptText("I hope you have a great day then. Bye!", [
      "Bye!",
      "See ya!",
      "Good riddance...",
    ]);
  },
};

/////////////////////////////////////////////////////////////////////////////////////////

const story = {
  part3: function () {
    npcMessage(
      "The place itself is an old, kind of creepy house on the outskirts of town."
    );
    npcMessageAndSetOptText(
      "The owner, Mr. Whitaker told me to pull up by his sons house, honk the horn one time, wait for four minutes and then go to the front door and knock eight times.",
      [
        "A bit weird but okay",
        "Just do it, it will be fine",
        "This is how horror movies begin",
      ]
    );
    setOpNpcCom([
      "Sure is, but I’m sure it will be fine",
      "I'm sure of it, but I do feel it's a bit wierd",
      hours > 7 && hours < 20
        ? `Chillout ${playerName}, it’s not even dark yet :)`
        : `Chillout ${playerName}, it will be fine :)`,
    ]);
    setOpFn([story.part4pre]);
  },

  part4pre: function () {
    if (hours > 19) {
      npcMessage("I'll text you tomorrow when I'm at the house!");
    } else if (hours < 19 && hours >= 17) {
      npcMessage("I'm actually there soon, text you in a bit!");
    } else if (hours < 17 && hours > 12) {
      npcMessage(
        "I'll be there this eevening at around 18. I'll text you when I'm there"
      );
    } else if (hours < 6) {
      npcMessage(
        "Sorry for keeping you up at this hour. I'll text you at about 18 when I'm picking up the keys"
      );
    } else {
      npcMessage("I'll text you at about 18 when I'm picking up the keys");
    }
    npcMessage("😉");
    fastForwardClock("18:23", story.part4);
  },

  part4: function () {
    npcMessage("Okay there we go... What a wierd house"); //TODO: Maybe insert a picture of a house?
    npcMessage(
      "So we where suppose to honk right. Hope the police is not around haha 😅"
    );
    npcMessageAndSetOptText("Okay so let’s honk. How many times?", [
      "One time",
      "Two times",
      "Three times",
    ]);
    setOpFn([story.part4b, story.part4b, story.part4b]);
    setOpNpcCom(["Okay, done"], "Hope that it was the right amount");
  },

  succes: true,

  part4b: function () {
    opt.userChoice === 0 ? (story.succes = true) : (story.succes = true);
    npcMessageAndSetOptText(
      "Sooo should we wait in the car or just head out?",
      [
        "Just head out",
        "Wait four minutes in the car",
        "Wait nine minutes in the car",
      ]
    );
    //FIXME:FIXME:FIXME:FIXME:FIXME: If one of the functions doesn't work. Does that mean no the function will be the previous function??
    setOpFn([story.part4c, story.part4c, story.part4c]);
    setOpNpcCom([
      "No time to waste!",
      "You'll be hearing from me in four minutes then!",
      "You'll be hearing from me in nine minutes then!",
    ]);
  },

  part4c: function () {
    opt.userChoice[1] && story.succes
      ? (story.succes = true)
      : (story.succes = false);
    if (opt.userChoice[0]) {
      story.part4d();
    } else if (opt.userChoice[1]) {
      fastForwardClock(`${hours}:${minutes + 4}`, story.part4d);
    } else if (opt.userChoice[2]) {
      fastForwardClock(`${hours}:${minutes + 9}`, story.part4d);
    }
  },

  part4d: function () {
    if (opt.userChoice[1] || opt.userChoice[2]) {
      npcMessage("Done with that then!");
    }
    npcMessage("Heading towards the front door now!");
    npcMessage(
      "Seems like an odd place to have a house but the house is even weirder. Or it’s actually really nice. Like an well-kept 1800-house with two stories. But it doesn't all fit the… shady neighborhood."
    );
    npcMessage(`<img src="images/entre.png" alt="">`),
      npcMessageAndSetOptText(
        "Anyway, let’s knock?",
        [
          "Yes, go right ahead for a knock",
          "Knock four times!",
          "Remember to knock eight times",
        ],
        2000
      );
    setOpFn([story.part4e]);
    setOpNpcCom([
      "Let's!",
      "Okedoke",
      story.succes === true
        ? " Thank god you helped me, I don't think I would have remembered all of this otherwise"
        : " Right, eight times...",
    ]);
  },

  part4e: function () {
    opt.userChoice[2] && story.succes
      ? (story.succes = true)
      : (story.succes = false);
    if (story.succes) {
      npcMessage("Someone is coming towards the door!");
      npcMessage("Whoever it is, is enormous. The ground here almost quakes");
      // Maybe insert a picture of a huge guy in doorway?
      npcMessage("He's at the door, hold on...");
      fastForwardClock(`${hours}:${minutes + 2}`, story.part5);
    } else {
      npcMessage("No answer, maybe we have to wait a minute or two...");
      fastForwardClock(`${hours}:${minutes + 3}`, storyFail.part4f);
    }
  },

  part5: function () {
    npcMessage(
      `Okay so there was this huge dude, he asked me some questions about my contacts with Whitaker and now hes about to get the key`
    );
    //TODO: Have a picture of a key in a female hand
    npcMessageAndSetOptText(
      `Okay I got it! Let's go to the house!`,
      [
        "Wait, what happened with the guy?",
        "I'm not too sure about this...",
        "Nice, let's go!",
      ],
      2000
    );
    setOpFn([story.part5b]);
    setOpNpcCom(
      [
        "Yeah that was strange, he was like super big and asked loads of questions, and then all of a sudden he stopped and just went away and came back with the key. I guess he got happy with the answers",
        "Haha I'd be lying if I said it feels super great, but we're in this now 😉",
        "😁",
      ],
      "Oh I almost forgot"
    );
  },

  part5b: function () {
    npcMessageAndSetOptText("I got a note, must be from Whitaker", [
      "Probably wierd rules again",
      "Let's just go",
      "What does it say?",
    ]);
    setOpFn([story.part5c, story.part5c, story.part5cOff]);
    setOpNpcCom([
      "Probably",
      "I think this is worth checking out",
      "One second...",
    ]);
  },

  part5cOff: function () {
    npcMessageAndSetOptText("Could be those wierd rules", [
      "Okay, what does it say?",
      "Well if you must...",
      "No just skip it, let's go",
    ]),
      setOpFn([story.part5c, story.part5c, story.part6]);
    setOpNpcCom([
      "I think so too",
      "Then I really 'must'",
      "This is pretty dumb, but okay",
    ]);
  },

  part5c: function () {
    npcMessage("Yup, there are some rules");
    npcMessage("It says: 1, Close all windows and doors");
  },

  // FIXME:FIXME:FIXME:
  part5d: function () {
    npcMessage("I'll get back to you in about half an hour");
    fastForwardClock(`${hours}:${minutes + 29}`, story.part6);
  },

  part6: function () {
    npcMessage("All right, here we are.");
    npcMessage("What do you think?");
    npcMessageAndSetOptText(`<img src="images/house.png" alt="">`, [
      "Be careful!",
      "Wouldn't enter it for even a million €",
      "Looks great, easy money!",
    ]);
    setOpFn([story.part6b, story.part6b, story.part6b]),
      setOpNpcCom([
        "I will",
        "Haha, good thing you won't have too 😉",
        "In less then 24h I'll be rich! (not really, but a tid bit less poor 🥳)",
      ]);
  },

  part6b: function () {
    npcMessage("Let's get inside!");
    fastForwardClock(`${hours}:${minutes + 2}`, story.part7);
  },

  part7: function () {
    npcMessage("Okay inside!");
    npcMessageAndSetOptText(
      "I don't know what I expected but there is a certain atmoshpere in here",
      ["Can I see?", "What do you mean?", "It's the smell of easy money!"]
    );
    setOpFn([story.part7b, story.part7b, story.part8]);
    setOpNpcCom([
      "Of course, just hold on one second",
      "Well, It's not necessarily bad, but messy and there is a certain smell. I can show you in a minute",
      "I'm pretty sure there is another smell as well 😅",
    ]);
  },

  part7b: function () {
    fastForwardClock(`${hours}:${minutes + 3}`, story.part8);
  },

  part8: function () {
    npcMessage(`<img src="images/inside-soffa-room.png" alt="">`, undefined, 0);
    npcMessage("Room upstairs", undefined, 0);
    npcMessage(
      `<img src="images/grandfather-clock-room.jpeg" alt="">`,
      undefined,
      4000
    );
    npcMessage("Room downstairs", undefined, 0);
    npcMessage(
      `<img src="images/door-from-inside-house.jpeg" alt="">`,
      undefined,
      4000
    );
    npcMessage("Front door from inside", undefined, 0);
    npcMessageAndSetOptText("So what do you think?", [
      "Looks nice enough",
      "Bad vibes, don't like it",
      "Needs cleaning!",
    ]);
    setOpFn([story.part8, story.part8, story.part8]);
    setOpNpcCom([
      "Yeah, could be better but it worse",
      "Well, I wasn't really expecting a five star hotell standard so this is nice enough IMO",
      "Yeah, maybe I get paid extra if I help with the cleaning ;)",
    ]);
    npcMessage("THE LIMIT HAS BEEN REACHED");
  },
};

///////////////////////////////////////////////////////////////////
const storyFail = {
  part4f: function () {
    npcMessage("Still no answer...", 2000);
    npcMessageAndSetOptText(
      "WAIT, I here something!",
      ["Finally", "Okay, but be careful", "Nice"],
      1000
    );
    setOpFn([storyFail.part4g, storyFail.part4g, storyFail.part4g]);
  },
  part4g: function () {
    btnOpHide();
    fastForwardClock(`${hours}:${minutes + 3}`, storyFail.part4h);
  },
  part4h: function () {
    btnOpHide();
    setOpFn([storyFail.part4h1, storyFail.part4h1, storyFail.part4h1]);
    setTimeout(() => {
      btnOpShow([`${npcName}?`, `What's happening?`, "All good?"]);
    }, 3000);
  },

  part4h1: function () {
    btnOpHide();
    setOpFn([storyFail.part4i, storyFail.part4i, storyFail.part4i]);
    setTimeout(() => {
      btnOpShow([`${npcName}??`, `${npcName}, what's happening?`, "Hellooooo"]);
    }, 7000);
  },

  part4i: function () {
    btnOpHide();
    setTimeout(() => {
      fastForwardClock(`${hours}:${minutes + 6}`, storyFail.part4j);
    }, 3000);
  },

  part4j: function () {
    btnOpHide();
    setOpFn([storyFail.part4k, storyFail.part4k, storyFail.part4k]);
    btnOpShow([`${npcName} please answer!!`, `HELLO!?`, "What's going on!?"]);
  },

  part4k: function () {
    opt.func.length = 0;
    fastForwardClock(`${hours}:${minutes + 3}`, storyFail.part4l);
  },
  part4l: function () {
    btnOpHide();
    npcMessage(`You won't be hearing from ${npcName} anymore`);
  },
};
