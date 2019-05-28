"use strict";

// SINGLEPAGE FUNCTION

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";

}

// set default page
function setDefaultPage() {
  let page = "home";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

setDefaultPage();

// global variabel

let madvarerArray = [];
let i = 0;

// sammenlignings array

let halvfjerdserMadkasseArray = [];
let sundMadkasseArray = [];
let usundMadkasseArray = [];

// sammenlignings arrays

let halvfjerdserMadkasseCompare = [{
    "name": "Agurk",
    "madpakke": ["1970", "Den sunde"],
    "imgurl": "https://i.imgur.com/W07QaXJ.png"
  },
  {
    "name": "Gulerod",
    "madpakke": ["1970", "Den sunde"],
    "imgurl": "https://i.imgur.com/ET7cLkH.png"
  },
  {
    "name": "Hamburgerryg",
    "madpakke": ["1970", "Den sunde"],
    "imgurl": "https://i.imgur.com/SX3ZaGC.png"
  },
  {
    "name": "Leverpostej",
    "madpakke": ["1970"],
    "imgurl": "https://i.imgur.com/eoWEt7G.png"
  },
  {
    "name": "Rugbrød",
    "madpakke": ["1970", "Den sunde"],
    "imgurl": "https://i.imgur.com/hmFjpPR.png"
  },
  {
    "name": "Rullepølse",
    "madpakke": ["1970"],
    "imgurl": "https://i.imgur.com/t5x6WpK.png"
  },
  {
    "name": "Spegepølse",
    "madpakke": ["1970"],
    "imgurl": "https://i.imgur.com/Uu7q4uZ.png"
  },
  {
    "name": "Røde pølser",
    "madpakke": ["1970", "Den usunde"],
    "imgurl": "https://i.imgur.com/J3VyVFX.png"
  },
  {
    "name": "Kartoffel",
    "madpakke": ["1970", "Den usunde"],
    "imgurl": "https://i.imgur.com/ghKnKtD.png"
  },
  {
    "name": "Æg",
    "madpakke": ["1970", "Den sunde"],
    "imgurl": "https://i.imgur.com/3iGLhc9.png"
  }
];

let sundMadkasseCompare = [{
    "name": "Agurk",
    "madpakke": ["1970", "Den sunde"],
    "imgurl": "https://i.imgur.com/W07QaXJ.png"
  },
  {
    "name": "Banan",
    "madpakke": ["Den sunde"],
    "imgurl": "https://i.imgur.com/YODd2B1.png"
  },
  {
    "name": "Falafel",
    "madpakke": ["Den sunde"],
    "imgurl": "https://i.imgur.com/n3NdIWq.png"
  },
  {
    "name": "Gulerod",
    "madpakke": ["1970", "Den sunde"],
    "imgurl": "https://i.imgur.com/ET7cLkH.png"
  },
  {
    "name": "Hamburgerryg",
    "madpakke": ["1970", "Den sunde"],
    "imgurl": "https://i.imgur.com/SX3ZaGC.png"
  },
  {
    "name": "Peberfrugt",
    "madpakke": ["Den sunde"],
    "imgurl": "https://i.imgur.com/vuw5KZP.png"
  },
  {
    "name": "Pære",
    "madpakke": ["Den sunde"],
    "imgurl": "https://i.imgur.com/6BNv8MF.png"
  },
  {
    "name": "Rugbrød",
    "madpakke": ["1970", "Den sunde"],
    "imgurl": "https://i.imgur.com/hmFjpPR.png"
  },
  {
    "name": "Æble",
    "madpakke": ["Den sunde"],
    "imgurl": "https://i.imgur.com/A4JQSKi.png"
  },
  {
    "name": "Æg",
    "madpakke": ["1970", "Den sunde"],
    "imgurl": "https://i.imgur.com/3iGLhc9.png"
  }
];

let usundMadkasseCompare = [{
    "name": "Yoghurt",
    "madpakke": ["Den usunde"],
    "imgurl": "https://i.imgur.com/rRYA9rC.png"
  },
  {
    "name": "Ostehaps",
    "madpakke": ["Den usunde"],
    "imgurl": "https://i.imgur.com/8zKZkvl.png"
  },
  {
    "name": "Mælkesnitte",
    "madpakke": ["Den usunde"],
    "imgurl": "https://i.imgur.com/Zzmt4g3.png"
  },
  {
    "name": "Cheez Dippers",
    "madpakke": ["Den usunde"],
    "imgurl": "https://i.imgur.com/icswEPy.png"
  },
  {
    "name": "Toast brød",
    "madpakke": ["Den usunde"],
    "imgurl": "https://i.imgur.com/ojTElwE.png"
  },
  {
    "name": "Røde pølser",
    "madpakke": ["1970", "Den usunde"],
    "imgurl": "https://i.imgur.com/J3VyVFX.png"
  },
  {
    "name": "Kartoffel",
    "madpakke": ["1970", "Den usunde"],
    "imgurl": "https://i.imgur.com/ghKnKtD.png"
  }
];

// fetch

fetch('json/madvarer.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendMadvarer(json.madvarer);
    /*
    appendHalvfjerdserMadkasseCompare(json.halvfjerdserMadkasseCompare);
    appendSundMadkasseCompare(json.sundMadkasseCompare);
    appendUsundMadkasseCompare(json.usundMadkasseCompare);
    */
  });

// skubber fetchet data ind i nyt array

function appendMadvarer(madvarer) {
  for (let madvare of madvarer) {
    madvarerArray.push(madvare);
  };
};

/*
function appendHalvfjerdserMadkasseCompare(halvfjerdserMadkasseCompare) {
  for (let madvareHalvfjerdserMadkasse of halvfjerdserMadkasseCompare) {
    halvfjerdserMadkasseCompare.push(madvareHalvfjerdserMadkasse);
  };
};

function appendSundMadkasseCompare(sundMadkasseCompare) {
  for (let madvareSundMadkasseCompare of sundMadkasseCompare) {
    sundMadkasseCompare.push(madvareSundMadkasseCompare);
  };
};

function appendUsundMadkasseCompare(usundMadkasseCompare) {
  for (let madvareUsundMadkasseCompare of usundMadkasseCompare) {
    usundMadkasseCompare.push(madvareUsundMadkasseCompare);
  };
};
*/

// viser ny madvare ved hver drop

function showMadvare() {
  console.log(madvarerArray);
  if (i < madvarerArray.length) {
    document.getElementById('madvare').innerHTML = `
  <img src="${madvarerArray[i].imgurl}" draggable="true" ondragstart="drag(event)" alt="${madvarerArray[i].name}" id="${madvarerArray[i].name}" class="draggable">
  `;
    document.getElementById('resultatTale').innerHTML = `
<p id="forklaring">${madvarerArray[i].besked}</p>
`;
    document.getElementById('tavleTekst').innerHTML = `
<p id="madvareTekst">${madvarerArray[i].name}</p>
`;
    let draggable = document.getElementsByClassName('draggable');

    draggable.addEventListener('touchmove', function(event) {
      let touch = event.targetTouches[0];

      // Place element where the finger is
      draggable.style.left = touch.pageX - 25 + 'px';
      draggable.style.top = touch.pageY - 25 + 'px';
      event.preventDefault();
    }, false);
  };
  if (i == madvarerArray.length) {
    document.getElementById('madvare').classList.add("display-none");
    document.getElementById('forklaring').classList.add("display-none");
    document.getElementById('resultatTale').innerHTML = `
    <p id="forklaring">Nu har jeg ikke flere råvarer i min butik.<br>Klik på knappen for at se resultatet </p>
    <a onclick="showPage('resultat')" class="slutspil">Se resultat</a>`;
    document.getElementById('madvareTekst').innerHTML = `
    <p id="madvareTekst">Udsolgt</p>`;
  };
  i++;
};

// drag and drop

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("image", ev.target.id);
}

function dropHalvfjerdser(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("image");
  ev.target.appendChild(document.getElementById(data));
  halvfjerdserMadkasseArray.push(document.getElementById(data));
  console.log(halvfjerdserMadkasseArray);
  showMadvare();
}

function dropSund(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("image");
  ev.target.appendChild(document.getElementById(data));
  sundMadkasseArray.push(document.getElementById(data));
  console.log(sundMadkasseArray);
  showMadvare();
}

function dropUsund(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("image");
  ev.target.appendChild(document.getElementById(data));
  usundMadkasseArray.push(document.getElementById(data));
  console.log(usundMadkasseArray);
  showMadvare();
}

// vis nyt array efter sortering

function appendHalvfjerdserMadkasseArray(item) {
  for (let item of halvfjerdserMadkasseArray) {
    item.classList.remove("display-none");
    console.log(item);
    document.getElementById('slagterOleContainer').innerHTML +=
      `<img src="${item.currentSrc}" width="300px"; z-index="10";>`;
  };
};

/* giv resultat efter antal rigtige under vægt */

let score = document.querySelector('#score');
let aladin = 7;
score.innerHTML = '<p> Dit resultat:</P>' + aladin + '<p>/10 Rigtige</p>';



/* afgør hvilken feedback slagteren giver, på baggrund af score */


function tale() {

  if (aladin < 5) {
    feedback.innerHTML = aladin + '<p> /10 Rigtige,<br><br> det kan du helt sikkert gøre bedre! <br><br> lad os støve historie bøgerne af, og prøve en gang til!</p>';
  } else if (aladin <= 10) {
    feedback.innerHTML = aladin + '<p> /10 Rigtige,<br><br> Det var flot, men der er plads til forbedringer <br><br> lad os støve historie bøgerne af, og prøve en gang til!</p>';
  } else if (aladin > 10) {
    feedback.innerHTML = aladin + '<p> /10 Rigtige,<br><br> Hold da op!<br><br> Der er vist en slagter gemt i dig! <br><br> Tryk på knappen for at prøve igen </p>';
  }
}
