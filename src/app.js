let clickUpgrades = [
  { name: 'pickaxe', price: 10, quantity: 0, multiplier: 5 },
  { name: 'megapickaxe', price: 1000, quantity: 0, multiplier: 100 },
  { name: 'ultrapickaxe', price: 5000, quantity: 0, multiplier: 1000 },
  { name: 'makeADeal', price: 100000, quantity: 0, multiplier: 2000 },
];

let automaticUpgrades = [
  { name: 'laser', price: 100, quantity: 0, multiplier: 25 },
  { name: 'megalaser', price: 500, quantity: 0, multiplier: 75 },
  { name: 'ultralaser', price: 1000, quantity: 0, multiplier: 100 },
  { name: 'specialGun', price: 10000, quantity: 0, multiplier: 1000 },
  { name: 'callForHelp', price: 25000, quantity: 0, multiplier: 2000 },
];

// --------------------------------------------------------------

// -----------ToolTip-----------------------------------------------
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// GLOBAL VARIABLES]
// TOTAL RESOURCES
let totalOrbsOverTime = 0;
let orbs = 0;
let laserCountBonus = 0;
let clickCountBonus = 1;
// --------------------------

// ----------------
let orbDOM = document.getElementById('orb-amount');
let totalOrbsDOM = document.getElementById('totalOrb-amount');
let atomOrbDOM = document.getElementById('atomOrb');
let clickCountBonusDOM = document.getElementById('clickCount-bonus');
let laserCountBonusDOM = document.getElementById('autoClickCount-bonus');
// -----------------------------------

let pickaxeCountDOM = document.getElementById('pickaxe-count');
let pickaxeCostDOM = document.getElementById('pickaxe-cost');
let pickAxeMultiplierDOM = document.getElementById('pickAxeMultiplier');
let megaPickaxeCountDOM = document.getElementById('megapickaxe-count');
let MegaPickAxeCostDOM = document.getElementById('megapickaxe-cost');
let megaPickMultiplierDOM = document.getElementById('megaPickAxe-Multiplier');
let ultraPickaxeCountDOM = document.getElementById('ultraPickaxe-count');
let ultraPickAxeCostDOM = document.getElementById('ultrapickaxe-cost');
let ultraPickAxeMultiplierDOM = document.getElementById(
  'ultraPickAxe-Multiplier'
);
// -----------------------------------------------------
let laserCountDOM = document.getElementById('laser-count');
let laserCostDOM = document.getElementById('laser-cost');
let laserMultiplierDOM = document.getElementById('laser-Multiplier');
let megaLaserMultiplierDOM = document.getElementById('megaLaser-Multiplier');
let ultraLaserMultiplierDOM = document.getElementById('ultraLaser-Multiplier');
let megaLaserCountDOM = document.getElementById('megalaser-count');
let megaLaserCostDOM = document.getElementById('megalaser-cost');
let ultraLaserCountDOM = document.getElementById('ultralaser-count');
let ultraLaserCostDOM = document.getElementById('ultralaser-cost');
// -----------------------------
let pickaxe = clickUpgrades.find((pickle) => pickle.name == 'pickaxe');
let megaPickAxe = clickUpgrades.find((pickle) => pickle.name == 'megapickaxe');
let ultraPickAxe = clickUpgrades.find(
  (pickle) => pickle.name == 'ultrapickaxe'
);
// ------------------------------------------------
let laser = automaticUpgrades.find((pickle) => pickle.name == 'laser');
let megaLaser = automaticUpgrades.find((pickle) => pickle.name == 'megalaser');
let ultraLaser = automaticUpgrades.find(
  (pickle) => pickle.name == 'ultralaser'
);
// ----------------------------------------------------------------
let callForHelpz = automaticUpgrades.find(
  (bananaWord) => bananaWord.name == 'callForHelp'
);
let atomGun = automaticUpgrades.find(
  (bananaWord) => bananaWord.name == 'specialGun'
);
let sellYourSoul = clickUpgrades.find(
  (bananaWord) => bananaWord.name == 'makeADeal'
);
// -------------------------------------------------------------------------
let specialGunID = document.getElementById('special1');
let callForHelpID = document.getElementById('special2');
let makeADealID = document.getElementById('special3');
// STUB FOR TIMER
let timerSeconds = 1;
const audio = new Audio();
audio.src = './resources/ClickSound.wav';
// ------------------------------------------------------
loadProfile()
// -----------------------------------------------------------
function getStarted() {
  let beginning = document.getElementById('welcomeCard');
  let game = document.getElementById('game');
  beginning.classList.add('visually-hidden');
  game.classList.add('fade-in');
  game.classList.remove('visually-hidden');
  badgeTemplate()
}
// ------------------------------------------------------------------

function mine() {
  orbs += clickCountBonus;
  totalOrbsOverTime += clickCountBonus;
  audio.play();

 
  colorchange();
  unhide();
  drawCounts();
  changeImage();
}
// ---------------------------------------------------------------------

function unhide() {
  let pickIcon1 = document.getElementById('pickaxeIcon');
  let megaPickIcon = document.getElementById('megaPickAxeIcon');
  let ultraPickIcon = document.getElementById('ultraPickAxeIcon');
  let laserIcon = document.getElementById('laserIcon');
  let megaLaserIcon = document.getElementById('megaLaserIcon');
  let ultraLaserIcon = document.getElementById('ultraLaserIcon');
  if (orbs >= pickaxe.price) {
    pickIcon1.classList.remove('cannotPurchase');
    pickIcon1.classList.add('bounce');
  } else {
    pickIcon1.classList.add('cannotPurchase');
    pickIcon1.classList.remove('bounce');
  }
  if (orbs >= megaPickAxe.price) {
    megaPickIcon.classList.remove('cannotPurchase');
    megaPickIcon.classList.add('bounce');
  } else {
    megaPickIcon.classList.add('cannotPurchase');
    megaPickIcon.classList.remove('bounce');
  }

  if (orbs >= ultraPickAxe.price) {
    ultraPickIcon.classList.remove('cannotPurchase');
    ultraPickIcon.classList.add('bounce');
  } else {
    ultraPickIcon.classList.add('cannotPurchase');
    ultraPickIcon.classList.remove('bounce');
  }
  if (orbs >= atomGun.price) {
    specialGunID.classList.remove('cannotPurchase');
    specialGunID.classList.add('bounce');
  } else {
    specialGunID.classList.add('cannotPurchase');
    specialGunID.classList.remove('bounce');
  }
  if (orbs >= callForHelpz.price) {
    callForHelpID.classList.remove('cannotPurchase');
    callForHelpID.classList.add('bounce');
  } else {
    callForHelpID.classList.add('cannotPurchase');
    callForHelpID.classList.remove('bounce');
  }
  if (orbs >= sellYourSoul.price) {
    makeADealID.classList.remove('cannotPurchase');
    makeADealID.classList.add('bounce');
  } else {
    makeADealID.classList.add('cannotPurchase');
    makeADealID.classList.remove('bounce');
  }
  if (orbs >= laser.price) {
    laserIcon.classList.remove('cannotPurchase');
    laserIcon.classList.remove('bounce');
  } else {
    laserIcon.classList.add('cannotPurchase');
    laserIcon.classList.remove('bounce');
  }
  if (orbs >= megaLaser.price) {
    megaLaserIcon.classList.remove('cannotPurchase');
    megaLaserIcon.classList.add('bounce');
  } else {
    megaLaserIcon.classList.add('cannotPurchase');
    megaLaserIcon.classList.remove('bounce');
  }
  if (orbs >= ultraLaser.price) {
    ultraLaserIcon.classList.remove('cannotPurchase');
    ultraLaserIcon.classList.add('bounce');
  } else {
    ultraLaserIcon.classList.add('cannotPurchase');
    ultraLaserIcon.classList.remove('bounce');
  }
}

function drawCounts() {
  // ---- PickAxes
  pickaxeCountDOM.innerText = pickaxe.quantity;
  megaPickaxeCountDOM.innerText = megaPickAxe.quantity;
  ultraPickaxeCountDOM.innerText = ultraPickAxe.quantity;
  pickaxeCostDOM.innerText = pickaxe.price;
  MegaPickAxeCostDOM.innerText = megaPickAxe.price;
  ultraPickAxeCostDOM.innerText = ultraPickAxe.price;
  clickCountBonusDOM.innerText = clickCountBonus;
  // -------------multiplies
  pickAxeMultiplierDOM.innerText = pickaxe.multiplier * pickaxe.quantity;
  megaPickMultiplierDOM.innerText =
    megaPickAxe.multiplier * megaPickAxe.quantity;
  ultraPickAxeMultiplierDOM.innerText =
    ultraPickAxe.multiplier * ultraPickAxe.quantity;
  laserMultiplierDOM.innerText = laser.multiplier * laser.quantity;
  megaLaserMultiplierDOM.innerText = megaLaser.multiplier * megaLaser.quantity;
  ultraLaserMultiplierDOM.innerText =
    ultraLaser.multiplier * ultraLaser.quantity;
  // ----LASERS
  laserCountDOM.innerText = laser.quantity;
  megaLaserCountDOM.innerText = megaLaser.quantity;
  ultraLaserCountDOM.innerText = ultraLaser.quantity;
  laserCountBonusDOM.innerText = laserCountBonus;
  laserCostDOM.innerText = laser.price;
  megaLaserCostDOM.innerText = megaLaser.price;
  ultraLaserCostDOM.innerText = ultraLaser.price;

  // ------TOTAL ORBS----
  orbDOM.innerText = orbs;
  totalOrbsDOM.innerText = totalOrbsOverTime;
  badgeReveal();
  changeImage();
  save();
}
// ----------------Saving and Load to local Storage
function save() {
  window.localStorage.setItem('Orbs', orbs);
  window.localStorage.setItem('totalOrbsOverTime', totalOrbsOverTime);
  window.localStorage.setItem('ClickUpgrades', JSON.stringify(clickUpgrades));
  window.localStorage.setItem(
    'AutomaticUpgrades',
    JSON.stringify(automaticUpgrades)
  );
  window.localStorage.setItem('ClickCountBonus', clickCountBonus);
  window.localStorage.setItem('LaserCountBonus', laserCountBonus);

  // Don't put DrawCounts here crashes my server or loadProfile()
}

function loadProfile() {
  let orbData = JSON.parse(window.localStorage.getItem('Orbs'));
  let totalOrbData = JSON.parse(
    window.localStorage.getItem('totalOrbsOverTime')
  );
  // let cUpgradesData = JSON.parse(window.localStorage.getItem('ClickUpgrades'));
  // let aUpgradesData=JSON.parse(window.localStorage.getItem('AutomaticUpgrades'))
  let clickCountBonusData = JSON.parse(
    window.localStorage.getItem('ClickCountBonus')
  );
  let laserCountBonusData = JSON.parse(
    window.localStorage.getItem('LaserCountBonus')
  );

  if (orbData) {
    orbs = orbData;
  }
  if (totalOrbData) {
    totalOrbsOverTime = totalOrbData;
  }
  if (clickCountBonusData) {
    clickCountBonus = clickCountBonusData;
  }
  if (laserCountBonusData) {
    laserCountBonus = laserCountBonusData;
  }
  // if (cUpgradesData) {
  //   storageClickUpgrades = cUpgradesData;
  // }
  // if (aUpgradesData) {
  //  automaticUpgrades = aUpgradesData
  // }
}
// ----------------------------------------------
// ----Click Upgrade
function upgrade(name) {
  let picks = clickUpgrades.find((upgrade) => upgrade.name == name);

  if (orbs >= picks.price) {
    orbs -= picks.price;
    picks.quantity++;
    clickCountBonus += picks.multiplier;
    picks.price += picks.quantity * 3;
  }

  drawCounts();
}

//----Auto Upgrade
function autoUpgradesLaser(name) {
  let laser = automaticUpgrades.find((laser) => laser.name == name);
  if (orbs >= laser.price) {
    orbs -= laser.price;

    laser.quantity++;

    laserCountBonus += laser.multiplier;
    laser.price += laser.quantity*3
  }

  drawCounts();
}
//-------------------

// -----------------------------
function specialGun(name) {
  let specialGun = automaticUpgrades.find((gun) => gun.name == name);
  let specialGunBadge = document.getElementById('specialGunBadge');

  let gunThingy = document.getElementById('gunBeam');
  let gunGun = document.getElementById('gunGun');
  clearInterval(collectAutoUpgrades);
   specialGunID.classList.add('cannotPurchase')
  if (specialGun.quantity >= 1) {
    specialGun.price = 0;
    specialGun.multiplier = 0;
 
  }
  if (orbs > specialGun.price) {
    orbs -= specialGun.price;
    specialGun.quantity++;
    laserCountBonus += specialGun.multiplier;
    specialGunBadge.className -= 'visually-hidden';
    gunThingy.className -= 'visually-hidden';
    gunGun.className -= 'visually-hidden';
  }

  drawCounts();
}
// ----------------------
// -----------------------------

function callForHelp(name) {
  let callForHelp = automaticUpgrades.find((help) => help.name == name);
  let callForHelpBadge = document.getElementById('callForHelpBadge');
  
  if (callForHelp.quantity >= 5) {
    callForHelp.multiplier = 0;
    callForHelp.price = 0;
  callForHelpID.classList.add('cannotPurchase')
  }
  if (orbs > callForHelp.price) {
    orbs -= callForHelp.price;
    callForHelp.quantity++;
    laserCountBonus += callForHelp.multiplier;
    callForHelpBadge.className -= 'visually-hidden';
    addAlien();
    addLaser();
  }

  drawCounts();
}
// ----------------------
function makeADeal(name) {
  let makeADeal = clickUpgrades.find((deal) => deal.name == name);
  let makeADealBadge = document.getElementById('makeADealBadge');
 makeADealID.classList.add('cannotPurchase')
  if (makeADeal.quantity >= 1) {
    makeADeal.multiplier = 0;
    makeADeal.price = 0;
   
  }
  if (orbs > makeADeal.price) {
    orbs -= makeADeal.price;
    makeADeal.quantity++;
    clickCountBonus += makeADeal.multiplier;
    makeADealBadge.className -= 'visually-hidden';
  }

  drawCounts();
}

// -------------------------------------------------------------

// ------------------------------------------------
function timing() {
   let timerDOM = document.getElementById('timer'); 
   timerSeconds--; 
  if (timerSeconds < 0) {
    timerSeconds = 1;
  }
  timerDOM.innerText = timerSeconds;

}

// -----------------------------------------

function collectAutoUpgrades() {

  totalOrbsOverTime += laserCountBonus;
  orbs += laserCountBonus;
  setTimeout(timing);
 
  drawCounts();
}

// -----------------------------------------------------------
// function timer() {
//   let timerDOM = document.getElementById('timer');
//   timerSeconds--;
//   if (timerSeconds < 0) {
//     timerSeconds = 3;
//   }
//   timerDOM.innerText = timerSeconds;
// }
// ----------------------------------------------------

// --------Cool Cursor Animation I decided to leave out----------------------------------------
// function click(event) {
//   const template = document
//     .getElementByID('#floating-text-template')
//     .content.cloneNode(true);
//   const element = template.querySelector('cookie'); //replace class with yours
//   element.style.left = `${event.clientX}px`;
//   element.style.top = `${event.clientY}px`;
//   document.appendChild(element);
// }

// -----------------------------------------------------
function colorchange() {
  let orbElem = document.getElementById('atomOrb');
  let rNum = Math.floor(Math.random() * 360);
  orbElem.style.filter = 'hue-rotate(' + rNum + 'deg)';
}

// ------------------------------------------------
function addAlien() {
  let thing = automaticUpgrades.find((item1) => item1.name == 'callForHelp');
  let alienMarquee = document.getElementById('alienmarquee');

  let template = `<img src="./resources/Alien1.png" alt="" srcset="" style="width: 2rem;">`;

  if (thing.quantity > 5) {
    return;
  }
  alienMarquee.innerHTML += template;
}
// --------------------------------------------------------
function addLaser() {
  let laserMarquee = document.getElementById('lasermarquee');
  let template = ` <img src="https://media2.giphy.com/media/1rOy1l3mulySaqilto/giphy.gif?cid=ecf05e47oc9d0htfhowppmrlwdqgkhipbq2wuokomsbcvi6f&rid=giphy.gif&ct=s" alt="" srcset="" style="width: 2rem;">`;
  if (callForHelpz.quantity > 5) {
    return;
  }
  laserMarquee.innerHTML += template;
}

// --------------------------------------------------------------------------------


function changeImage() {
  if (orbs >= 8500) {
    atomOrbDOM.src = 'https://i.giphy.com/media/dkPXar0zpixmA1Pqw0/giphy.webp';
  
  }
  if (orbs >= 20000) {
    atomOrbDOM.src = 'https://i.giphy.com/media/5Rg9bh6LyLKuY/giphy.webp';
  }
  if (orbs >= 44000) {
    atomOrbDOM.src =
      'https://media1.giphy.com/media/dkPXar0zpixmA1Pqw0/giphy.gif?cid=ecf05e47k15dvss3xmpuj6gftxjj4i9peyuhmidcpvhldp4p&rid=giphy.gif&ct=g';
  }
  if (orbs >= 70000) {
    atomOrbDOM.src =
      'https://media3.giphy.com/media/GLIjqI7Q7aha81olc5/giphy.gif?cid=790b7611db710ec442cc6c216c9a31585ab6b66bc47fea5e&rid=giphy.gif&ct=g';
  }
  if (orbs >= 100000) {
    atomOrbDOM.src = 'https://i.giphy.com/media/vCIKY5e444uNi5VFT2/giphy.webp';
  }
  if (orbs >= 200000) {
    atomOrbDOM.src = 'https://i.giphy.com/media/otzvbOMu2qSVMOoTTX/giphy.webp';
  }
  if (orbs >= 300000) {
    atomOrbDOM.src = 'https://i.giphy.com/media/l41m5M6KnkGywFyXS/giphy.webp';
  }
  if (orbs >= 400000) {
    atomOrbDOM.src = 'https://i.giphy.com/media/hq64aPc8ExJpiXgRtR/giphy.webp';
  }
  if (orbs >= 500000) {
    atomOrbDOM.src = 'https://i.giphy.com/media/GRmgmqEbC3oMRL2uQq/giphy.webp';
  }
  if (orbs >= 600000) {
    atomOrbDOM.src = 'https://i.giphy.com/media/s5arkl7ICEsyMsyUXA/giphy.webp';
  }
  if (orbs >= 750000) {
    atomOrbDOM.src = 'https://i.giphy.com/media/fdS69MmVdRN5hE1Lv7/giphy.webp';
  }
  if (orbs >= 900000) {
    atomOrbDOM.src = 'https://i.giphy.com/media/fjxtT75gj7LrN3AHT3/giphy.webp';
  }
  if (orbs >= 1000000) {
    atomOrbDOM.src = 'https://i.giphy.com/media/fjxtT75gj7LrN3AHT3/giphy.webp';
  }
  if (orbs >= 1125000) {
    atomOrbDOM.src = 'https://i.giphy.com/media/7SKOwf1nD6j6XhfLMG/giphy.webp';
  }
  if (orbs >= 1500000) {
    atomOrbDOM.src = 'https://i.giphy.com/media/kAQmvq1JXvca8fdGf4/giphy.webp';
  }
  
  if (orbs >= 2000000) {
    atomOrbDOM.src = 'https://i.giphy.com/media/xaQGyMzdEoWoGBs0ow/giphy.webp';
  }
  if (orbs >= 3000000) {
    atomOrbDOM.src = 'https://i.giphy.com/media/3PUzAcNsqoaDjXW3Pn/giphy.webp';
   
  }
}

// -----------------------------------------------------------------------
// const badges = [
//   {
//     name: 'ghostBadge',
//     title: "Badge:IDK, It's a Ghibili Icon",
//     src: './resources/ghost.png',
    
//   },
//   {
//     name: 'badge1',
//     title: 'Badge: beat phase-1',
//     src: './resources/AlienMedal4.png',
//   },
//   {
//     name: 'badge2',
//     title: 'Badge: beat phase-1',
//     src: './resources/AlienMedal2.png',
//   },
//   {
//     name: 'badge3',
//     title: 'Badge: beat phase-1',
//     src: './resources/AlienMedal3.png',
//   },
//   {
//     name: 'badge4',
//     title: 'Badge: beat phase-1',
//     src: './resources/AlienMedal1.png',
//   },
//   {
//     name: 'pickBadge',
//     title: 'Badge: beat phase-1',
//     src: './resources/pickaxebadge.png',
//   },
//   {
//     name: 'laserBadge',
//     title: 'Badge: beat phase-1',
//     src: './resources/laser.png',
//   },
//   {
//     name: 'specialGunBadge',
//     title: 'Badge: beat phase-1',
//     src: 'https://i.giphy.com/media/L2UHsn6f4Vmw4Dt8p3/giphy.webp',
//   },
//   {
//     name: 'callForHelpBadge',
//     title: 'Badge: beat phase-1',
//     src: './resources/Alien1.png',
//   },
//   {
//     name: 'makeADealBadge',
//     title: 'Badge: beat phase-1',
//     src: 'https://media1.giphy.com/media/GE5LUTVEdH5LrvIppa/giphy.gif',
//   },

//   // ------------------------------BOSSES-----------------------------------------------
//   {
//     name: 'boss1',
//     title: 'Badge: beat phase-1',
//     src: 'https://i.giphy.com/media/5Rg9bh6LyLKuY/giphy.webp',
//   },
//   {
//     name: 'boss2',
//     title: 'Badge: beat phase-2',
//     src: 'https://media3.giphy.com/media/GLIjqI7Q7aha81olc5/giphy.gif?cid=790b7611db710ec442cc6c216c9a31585ab6b66bc47fea5e&rid=giphy.gif&ct=g',
//   },
//   {
//     name: 'boss3',
//     title: 'Badge: beat phase-3',
//     src: 'https://i.giphy.com/media/otzvbOMu2qSVMOoTTX/giphy.webp',
//   },
//   {
//     name: 'boss4',
//     title: 'Badge: beat phase-4',
//     src: 'https://i.giphy.com/media/hq64aPc8ExJpiXgRtR/giphy.webp',
//   },
//   {
//     name: 'boss5',
//     title: 'Badge: beat phase-5',
//     src: 'https://i.giphy.com/media/s5arkl7ICEsyMsyUXA/giphy.webp',
//   },
//   {
//     name: 'boss6',
//     title: 'Badge: beat phase-6',
//     src: 'https://i.giphy.com/media/fjxtT75gj7LrN3AHT3/giphy.webp',
//   },
//   {
//     name: 'boss7',
//     title: 'Badge:',
//     src: 'https://i.giphy.com/media/kAQmvq1JXvca8fdGf4/giphy.webp',
//   },
//   {
//     name: 'theGirl',
//     title: 'Badge:Liberator, freed the girl from her prison.',
//     src: 'https://i.giphy.com/media/3PUzAcNsqoaDjXW3Pn/giphy.webp',
//   },
// ];
// ----------------------------------------------------------------------------
// Tried doing template for badges, it worked but ultimatley when they come onto the page the tool-top doesn't show up.

// function badgeTemplate() {
//   let spot = document.getElementById('badgeSpot');
//   let template = '';
//   badges.forEach((badge) => {
//     template += `<span
//   id="${badge.name}" class="visually-hidden "><img
//    src="${badge.src}"
//    class=" heart rounded-circle shadow-filter  "
//    style="width: 3rem"
//    data-bs-toggle="tooltip" data-bs-placement="bottom"
//    data-bs-title="${badge.title}"/>
// </span>`;
//   });
//   spot.innerHTML += template;
// }
// -----------------------------------------------------------------------------

function badgeReveal() {
  let badge1 = document.getElementById('badge1');
  let badge2 = document.getElementById('badge2');
  let badge3 = document.getElementById('badge3');
  let badge4 = document.getElementById('badge4');
  let pickBadge = document.getElementById('pickBadge');
  let laserBadge = document.getElementById('laserBadge');
  let ghostBadge = document.getElementById('ghostBadge');
  let boss1 = document.getElementById('boss1');
  let boss2 = document.getElementById('boss2');
  let boss3 = document.getElementById('boss3');
  let boss4 = document.getElementById('boss4');
  let boss5 = document.getElementById('boss5');
  let boss6 = document.getElementById('boss6');
  let boss7 = document.getElementById('boss7');
  let theGirl = document.getElementById('theGirl');
  if (orbs >= 100000) {
    badge1.classList.remove('visually-hidden');
    badge1.classList.add('bounce');
  }
  if (orbs >= 500000) {
    badge2.classList.remove('visually-hidden');
    badge2.classList.add('bounce');
  }
  if (orbs >= 1000000) {
    badge3.classList.remove('visually-hidden');
    badge3.classList.add('bounce');
  }
  if (orbs >= 100000) {
    badge4.classList.remove('visually-hidden');
    badge4.classList.add('bounce');
  }
  if (clickCountBonus >= 5000) {
    pickBadge.classList.remove('visually-hidden');
    pickBadge.classList.add('bounce');
  }

  if (laserCountBonus >= 10000) {
    laserBadge.classList.remove('visually-hidden');
    laserBadge.classList.add('bounce');
  }
  if (orbs >= 20000) {
    boss1.classList.remove('visually-hidden');
    boss1.classList.add('bounce');
  }
  if (orbs >= 70000) {
    boss2.classList.remove('visually-hidden');
    boss2.classList.add('bounce');
  }
  if (orbs >= 200000) {
    boss3.classList.remove('visually-hidden');
    boss3.classList.add('bounce');
  }
  if (orbs >= 400000) {
    boss4.classList.remove('visually-hidden');
    boss4.classList.add('bounce');
  }
  if (orbs >= 600000 ){
    boss5.classList.remove('visually-hidden');
    boss5.classList.add('bounce');
  }
  if (orbs >= 900000) {
    boss6.classList.remove('visually-hidden');
    boss6.classList.add('bounce');
  }
  if (orbs >=  1125000) {
    boss7.classList.remove('visually-hidden');
    boss7.classList.add('bounce');
  }
  if (orbs >=3000000) {
    theGirl.classList.remove('visually-hidden');
    theGirl.classList.add('bounce');
  }
  if (orbs >= 100) {
    ghostBadge.classList.remove('visually-hidden');
    ghostBadge.classList.add('bounce');
  }
}

setInterval(collectAutoUpgrades, 1000);
// setInterval(timer, 1000);

drawCounts();
