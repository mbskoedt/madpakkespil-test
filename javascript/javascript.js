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

let halvfjerdserMadkasseArray = [];
let sundMadkasseArray = [];
let usundMadkasseArray = [];

// sammenlignings arrays

let halvfjerdserMadkasseCompare = [];
let sundMadkasseCompare = [];
let usundMadkasseCompare = [];

// fetch

fetch('json/madvarer.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendMadvarer(json.madvarer);
    appendHalvfjerdserMadkasseCompare(json.halvfjerdserMadkasseCompare);
    appendSundMadkasseCompare(json.sundMadkasseCompare);
    appendUsundMadkasseCompare(json.usundMadkasseCompare);
  });

// skubber fetchet data ind i nyt array

function appendMadvarer(madvarer) {
  for (let madvare of madvarer) {
    madvarerArray.push(madvare);
  };
};

function appendHalvfjerdserMadkasseCompare(halvfjerdserMadkasseCompare) {
  for (let madvareHalvfjerdserMadkasse of halvfjerdserMadkasseCompare) {
    halvfjerdserMadkasseCompare.push(madvareHalvfjerdserMadkasse);
  };
  console.log(halvfjerdserMadkasseCompare);
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

// viser ny madvare ved hver drop

function showMadvare() {
  console.log(i);
  document.getElementById('madvare').innerHTML += `
  <img src="${madvarerArray[i].imgurl}" draggable="true" ondragstart="drag(event)" alt="${madvarerArray[i].name}" id="${madvarerArray[i].name}">
  `;
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
  document.getElementById(data).classList.add("display-none");
  halvfjerdserMadkasseArray.push(document.getElementById(data));
  console.log(halvfjerdserMadkasseArray);
  showMadvare();
}

function dropSund(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("image");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById(data).classList.add("display-none");
  sundMadkasseArray.push(document.getElementById(data));
  console.log(sundMadkasseArray);
  showMadvare();
}

function dropUsund(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("image");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById(data).classList.add("display-none");
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

tale();
