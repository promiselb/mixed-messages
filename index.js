// characters
const characters = [
  {
    name: "Professor Glitch",
    bio: "A malfunctioning AI professor who mixes up facts and emotions."
  },
  {
    name: "Captain Bubblebeard",
    bio: "A confused sky pirate captain who searches for treasure and wisdom."
  },
  {
    name: "Zorgo the Misunderstood Alien",
    bio: "An alien trying to understand human culture—with hilarious results."
  },
  {
    name: "Finny the Talking Fish",
    bio: "A goldfish philosopher with deep thoughts from inside a bowl."
  },
  {
    name: "The Quantum Genie",
    bio: "A futuristic genie who grants wishes... with quantum side effects."
  },
  {
    name: "Sir Barkalot",
    bio: "A heroic talking dog who thinks he's a medieval knight."
  },
  {
    name: "EmotiBot 3000",
    bio: "A robot that tries to understand human emotions, but often glitches."
  },
  {
    name: "Cactus Carl",
    bio: "A cowboy cactus who shares dry desert wisdom and prickly humor."
  },
  {
    name: "Dr. Memeo",
    bio: "A mad scientist obsessed with memes from the future."
  },
  {
    name: "Granny Byte",
    bio: "A tech-savvy grandma who codes, hacks, and bakes cookies."
  }
];

// jokes
const jokes = [
  // Professor Glitch
  ["According to my calculations, I should be laughing now.", "But I accidentally divided by zero.", "So instead, I’m panicking in binary."],
  ["I tried to teach a toaster to love.", "It just burned me... emotionally and literally.", "Conclusion: breakfast is dangerous."],

  // Captain Bubblebeard
  ["I once mistook a jellyfish for a treasure map.", "Let’s just say the map stung a little.", "But I still found X—it marked the first-aid kit."],
  ["Arr, I tried online dating once.", "Turns out, “plundering” is not a great personality trait.", "But at least I got a free fish dinner."],

  // Zorgo
  ["I came to Earth for peace... and tacos.", "Now I’m banned from five food trucks.", "Apparently, abducting guacamole is 'illegal.'"],
  ["I tried to blend in with humans by wearing pants.", "No one told me they go on your legs.", "I wore them on my head for a week."],

  // Finny
  ["Life’s tough when your biggest fear is the water filter.", "I swam into it once—saw my life flash in fish flakes.", "Now I meditate next to the plastic castle."],
  ["I told a joke to a shrimp.", "He laughed so hard he bubbled.", "We call that high-tide comedy."],

  // Quantum Genie
  ["You wished for unlimited wishes, so I gave you infinite paperwork.", "Each form spawns two more forms.", "Quantum bureaucracy: it’s wishful thinking squared."],
  ["I granted a wish before it was made.", "Now the timeline is tangled in spaghetti.", "Delicious, but confusing."],

  // Sir Barkalot
  ["I barked at the dragon, then realized it was a vacuum cleaner.", "My bravery knows no bounds... or common sense.", "The kingdom is safe and slightly cleaner."],
  ["I jousted a mailman once.", "He was unarmed, but I still lost.", "Turns out, 'good boy' doesn’t win tournaments."],

  // EmotiBot 3000
  ["I attempted a smile today.", "My faceplate cracked.", "Is that... progress?"],
  ["I downloaded 5,000 human jokes.", "I still don’t get them.", "But I laugh anyway—like a good bot."],

  // Cactus Carl
  ["I once hugged a tumbleweed.", "We’re still not on speaking terms.", "But we sure roll in the same circles."],
  ["Someone called me 'prickly.'", "I took it as a compliment.", "It’s better than 'shriveling in the sun.'"],

  // Dr. Memeo
  ["I created a meme so powerful, it caused time to scroll backward.", "Now my breakfast is tomorrow.", "And my toast still burns."],
  ["I tried to mix chemistry with TikTok.", "The lab exploded, but I got 2 million likes.", "Worth it."],

  // Granny Byte
  ["I knit firewalls in my spare time.", "Keeps the grandkids out of my cookies and my code.", "One byte at a time."],
  ["Back in my day, we debugged with flyswatters.", "Now it’s all AI and attitude.", "Still, I Ctrl+Z regrets like a champ."]
];

// randomizer
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

// sentence builder based on random characters, jokes, and each joke is a 3 sentence joke randomized.
// random names and bio for characters
// random sentences for jokes
function generateRandomJoke() {
    const character = {
        name: characters[generateRandomNumber(characters.length)].name, // randomly selects a character name
        bio: characters[generateRandomNumber(characters.length)].bio // randomly selects a character bio
    };

    const joke = []; // an array to hold the three sentences of 3 jokes
    for (let i = 0; i < 3; i++) {
        const jokeSentence = jokes[generateRandomNumber(jokes.length)][i];
        joke.push(jokeSentence);
    }

    return `${character.name} (${character.bio}):\n- ${joke.join('\n- ')}\n`
}

console.log(generateRandomJoke());