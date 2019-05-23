// global variabel

let madvarerArray = [];
let i = 0;

let halvfjerdserMadkasseArray = [];
let sundMadkasseArray = [];
let usundMadkasseArray = [];

// fetch

fetch('json/madvarer.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendMadvarer(json.madvarer);
  });

// skubber fetchet data ind i nyt array

function appendMadvarer(madvarer) {
  for (let madvare of madvarer) {
    madvarerArray.push(madvare);
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
  console.log(halvfjerdserMadkasseArray);
  showMadvare();
}

function dropUsund(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("image");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById(data).classList.add("display-none");
  usundMadkasseArray.push(document.getElementById(data));
  console.log(halvfjerdserMadkasseArray);
  showMadvare();
}
