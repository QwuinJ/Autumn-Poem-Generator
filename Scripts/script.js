// object which holds each poem as an array
let poetryLibrary = {
  poem1: [
    "Fall, leaves, fall: die, flowers, away",
    "Lengthen night and shorten day",
    "Every leaf speaks bliss to me",
    "Fluttering from the autumn tree",
    "I shall smile when wreathes of snow",
    "Blossom where the rose should grow",
    "I shall sing when night's decay",
    "Ushers in a drearer day",
  ],
  poem2: [
    "into the coppery halls",
    "of beech and intricate oak",
    "to be close to the trees",
    "as they whisper together",
    "let fall their leaves",
    "and we die for the winter",
  ],
  poem3: [
    "In the other gardens",
    "And all up in the vale",
    "From the autumn bonfires",
    "See the smoke trail!",
    "Pleasant summer over,",
    "And all the summer flowers",
    "The red fire blazes",
    "The grey smoke towers",
    "Sing a song of seasons!",
    "Something bright in all!",
    "Flowers in the summer",
    "Fires in the fall!",
  ],
  poem4: [
    "Nature's first green is gold",
    "Her hardest hue to hold",
    "Her early leaf's a flower;",
    "But only so to an hour.",
    "Then leaf subsides to leaf.",
    "So Eden sank to grief",
    "So dawn goes down to day.",
    "Nothing gold can stay.",
  ],
  poem5: [
    "A touch of cold in the Autumn night--",
    "I walked abroad",
    "And saw the ruddy moon lean over a hedge",
    "Like a red-faced farmer.",
    "I did not stop to speak, but nodded",
    "And round about were the wistful stars",
    "With white faces like town children.",
  ],
  poem6: [
    "Know'st thou not at the fall of the leaf",
    "How the heart feels a languid grief",
    "Laid on it for a covering",
    "And how sleep seems a godly thing",
    "In Autumn at the fall of the leaf?",
    "And how the swift beat of the brain",
    "Falters because it is in vain",
    "In Autumn at the fall of the leaf",
    "Knowest thou not? and how the chief",
    "Of joys seems -- not to suffer pain?",
    "Know'st thou not at the fall of the leaf",
    "How the soul feels like a dried sheaf",
    "Bound up at length for harvesting",
    "And how death seems a comely thing",
    "In Autumn at the fall of the leaf?",
  ],
  poem7: [
    "That time of year thou mayst in me behold",
    "When yellow leaves, or none, or few, do hang",
    "Upon these boughs which shake against the cold",
    "Bare ruin'd choirs, where late the sweet birds sang.",
    "In me thou see'st the twilight of such day",
    "As after sunset fadeth in the west",
    "Which by and by black night doth take away",
    "Death's second self, that seals up all in rest.",
    "In me thou see'st the glowing of such fire",
    "That on the ashes of his youth doth lie",
    "As the death-bed whereon it must expire",
    "Consum's with that which it was nourish'd by",
    "This thou perceiv'st, which makes thy love more strong,",
    "To love that well which thou must leave ere long.",
  ],
  poem8: [
    "Go from me, summer friends, and tarry not:",
    "I am no summer friend, but wintry cold",
    "A silly sheep benighted from the fold",
    "A sluggard with a thorn-choked garden plot.",
    "Take counsel, sever from my lot your lot",
    "Dwell in your pleasant places, hoard your gold:",
    "lest you with me should shiver on the wold,",
    "Athirst and hungering on a barren spot",
    "For I have hedged me with a thorny hedge",
    "I live alone, I look to die alone:",
    "Yet sometimes, when a wind sighs through the sedge",
    "Ghosts of my buried years, and friends come back",
    "My heart goes sighing after swallows flown",
    "On sometime summer's unreturning track.",
  ],
};

let poemList = [];
let newPoem = [];

let userName = [];
let userAge = [];

function start() {
  makeNameBox();
  makeButton();
}

function makeNameBox() {
  let x = document.getElementById("placeholder");
  x.innerHTML = "";
  let nameBox = document.createElement("input");
  let ageBox = document.createElement("input");
  nameBox.placeholder = "Name...";
  nameBox.id = "name";
  ageBox.placeholder = "Age...";
  ageBox.id = "age";
  x.appendChild(nameBox);
  x.appendChild(ageBox);
}

function makeButton() {
  let x = document.getElementById("placeholder");
  let nextButton = document.createElement("button");
  nextButton.innerHTML = "Press here to generate a poem";
  nextButton.onclick = insert;
  x.appendChild(nextButton);
}

// function to clear place for poem
function empty() {
  document.getElementById("poem").innerHTML = "";
}

function emptyInput() {
  document.getElementById("name").innerText = "";
  document.getElementById("age").innerText = "";
}

// Function to store variables from form

function insert() {
  userAge = [];
  userName = [];
  poemList = [];
  newPoem = [];
  let nameInput = document.getElementById("name");
  let ageInput = document.getElementById("age");
  userAge.push(ageInput.value);
  userName.push(nameInput.value);
  getVar();
}
// Function to determine second set of variables
// Function to determine poems used

function getVar() {
  let n1 = userName[0].length % 2;
  let n2 = userAge % 2;
  if (n1 == 0) {
    poemList.push(poetryLibrary.poem2.flat());
    poemList.push(poetryLibrary.poem4.flat());
  } else {
    poemList.push(poetryLibrary.poem1.flat());
    poemList.push(poetryLibrary.poem3.flat());
  }
  if (n2 == 0) {
    poemList.push(poetryLibrary.poem6.flat());
    poemList.push(poetryLibrary.poem8.flat());
  } else {
    poemList.push(poetryLibrary.poem5.flat());
    poemList.push(poetryLibrary.poem7.flat());
  }
  makePoem();
}

// function to shuffle lines of poetry

function makePoem() {
  let randPoem = poemList.flat();
  let x = 0;
  while (x < 8) {
    x++;
    let randomLine = randPoem[Math.floor(Math.random() * randPoem.length)];
    newPoem.push(`${randomLine}`);
  }
  console.log(newPoem);
  newScreen();
}

function newScreen() {
  let leftHeader = document.getElementById("left-header");
  let leftContent = document.getElementById("left-content");
  let x = document.getElementById("placeholder");
  let startButton = document.getElementById("start-button");
  x.innerHTML = "";
  leftHeader.innerHTML = "List of Poems";
  leftContent.innerHTML =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur labore velit error accusantium dicta voluptas quia ipsam, quibusdam at architecto ipsa, nostrum, magni tempora? Odio non labore facere atque dolore?";
  startButton.innerHTML = "Click here to restart";
  startButton.onclick = firstPage;
  newP();
}

function firstPage() {
  let leftHeader = document.getElementById("left-header");
  let leftContent = document.getElementById("left-content");
  let startButton = document.getElementById("start-button");
  let poembox = document.getElementById("poembox");
  poembox.innerHTML = "";
  leftHeader.innerHTML = "Intro to the poem";
  leftContent.innerHTML =
    "Welcome to the poem generator. This will generate a poem for you, based on your name and age. It will shuffle a selection of autumn poems, and return the result. Click the button on the right to get started.";
  startButton.innerHTML = "Click here to start";
  startButton.onclick = start;
}

// function to return new poem

function newP() {
  let poembox = document.getElementById("poembox");
  let poemHeader = document.createElement("h2");
  poemHeader.innerHTML = "Generated Poem";
  let poemHolder = document.createElement("p");
  for (let value of newPoem) {
    line = document.createElement("p");
    line.innerHTML = value;
    poemHolder.append(line);
  }
  poembox.appendChild(poemHeader);
  poembox.appendChild(poemHolder);
}
