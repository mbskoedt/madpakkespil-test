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

// Refresh page hvis der ikke er nogen aktivitet

let tim = 0;

function reload() {
    tim = setTimeout("location.reload(true);", 60000); // 1 minute
}

function canceltimer() {
    window.clearTimeout(tim); // cancel the timer on each mousemove/click
    reload(); // and restart it

}


// global variabel

let aladin = 0;
let madvarerArray = [];
let i = 0;

// de nye madkassearrays

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
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
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
    console.log(madvarerArray);
    if (i < madvarerArray.length) {
        document.getElementById('madvare').innerHTML = `
  <img src="${madvarerArray[i].imgurl}" draggable="true" ondragstart="drag(event)" alt="${madvarerArray[i].name}" id="draggable">
  `;
        document.getElementById('resultatTale').innerHTML = `
<p id="forklaring">${madvarerArray[i].besked}</p>
`;
        document.getElementById('tavleTekst').innerHTML = `
<p id="madvareTekst">${madvarerArray[i].name}</p>
`;
        document.getElementById('antalMadvarer').innerHTML = i + 1 + '/20';

        let draggable = document.getElementById('madvare');

        draggable.addEventListener('touchmove', function (event) {
            let touch = event.targetTouches[0];

            // Place element where the finger is
            draggable.style.left = touch.pageX - 600 + 'px';
            draggable.style.top = touch.pageY - 200 + 'px';
            event.preventDefault();
        }, false);

    };
    if (i == madvarerArray.length) {
        document.getElementById('madvare').classList.add("display-none");
        document.getElementById('forklaring').classList.add("display-none");
        document.getElementById('resultatTale').innerHTML = `
    <p id="forklaring">Nu har jeg ikke flere råvarer i min butik.<br>Klik på knappen for at se resultatet </p>
    <a onclick="showPage('resultat'); showHalvfjerdserMadkasseArray(); showSundMadkasseArray(); showUsundMadkasseArray(); tale();" class="resultatknap">Se resultat</a>`;
        document.getElementById('madvareTekst').innerHTML = `
    <p>Udsolgt</p>`;
    };
    displayFinger();
};

// drag and drop og push madvare til nyt array

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
    halvfjerdserMadkasseArray.push(madvarerArray[i]);
    console.log(halvfjerdserMadkasseArray);
    i++;
    showMadvare();
}

function dropSund(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("image");
    ev.target.appendChild(document.getElementById(data));
    sundMadkasseArray.push(madvarerArray[i]);
    console.log(sundMadkasseArray);
    i++;
    showMadvare();
}

function dropUsund(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("image");
    ev.target.appendChild(document.getElementById(data));
    usundMadkasseArray.push(madvarerArray[i]);
    console.log(usundMadkasseArray);
    i++;
    showMadvare();
}

// Vis madvarer i deres respektive arrays og sammenlign

function showHalvfjerdserMadkasseArray() {
    for (let halvfjerdserMadCompare of halvfjerdserMadkasseCompare) {
        document.getElementById('halvfjerdserMadGrid').innerHTML += `
    <img src="${halvfjerdserMadCompare.imgurl}" alt="${halvfjerdserMadCompare.name}" id="${halvfjerdserMadCompare.name}" class="mad opacity">
    `;
        for (let halvfjerdserMad of halvfjerdserMadkasseArray) {
            if (halvfjerdserMad) {
                if (halvfjerdserMadCompare.name === halvfjerdserMad.name) {
                    document.getElementById(`${halvfjerdserMadCompare.name}`).classList.add("show");
                    aladin++;
                }
            }
        }
    }
};

function showSundMadkasseArray(sundMadCompare) {
    for (sundMadCompare of sundMadkasseCompare) {
        document.getElementById('sundMadGrid').innerHTML += `
    <img src="${sundMadCompare.imgurl}" alt="${sundMadCompare.name}" id="${sundMadCompare.name}" class="mad opacity">
    `;
        for (let sundMad of sundMadkasseArray) {
            if (sundMad) {
                if (sundMadCompare.name === sundMad.name) {
                    document.getElementById(`${sundMadCompare.name}`).classList.add("show");
                    aladin++;
                    console.log(aladin);
                }
            }
        }
    }
}

function showUsundMadkasseArray(usundMadCompare) {
    for (usundMadCompare of usundMadkasseCompare) {
        document.getElementById('usundMadGrid').innerHTML += `
    <img src="${usundMadCompare.imgurl}" alt="${usundMadCompare.name}" id="${usundMadCompare.name}" class="mad opacity">
    `;
        for (let usundMad of usundMadkasseArray) {
            if (usundMad) {
                if (usundMadCompare.name === usundMad.name) {
                    document.getElementById(`${usundMadCompare.name}`).classList.add("show");
                    aladin++
                }
            }
        }
    }
}

/* giv resultat efter antal rigtige under vægt */
/* afgør hvilken feedback slagteren giver, på baggrund af score */

function tale() {
    let score = document.querySelector('#score');
    score.innerHTML = '<p> Dit resultat:</P>' + aladin + '<p>/20 Rigtige</p>';
    if (aladin < 7) {
        document.getElementById('feedback').innerHTML = aladin + '<p> /20 Rigtige,<br><br> det kan du helt sikkert gøre bedre! <br><br> Lad os støve historiebøgerne af, og prøve en gang til!</p>';
    } else if (aladin <= 14) {
        document.getElementById('feedback').innerHTML = aladin + '<p> /20 Rigtige,<br><br> Det var flot, men der er plads til forbedringer <br><br> Lad os støve historiebøgerne af, og prøve en gang til!</p>';
    } else if (aladin > 14) {
        document.getElementById('feedback').innerHTML = aladin + '<p> /20 Rigtige,<br><br> Hold da op!<br><br> Der er vist en slagter gemt i dig! <br><br> Tryk på knappen for at prøve igen </p>';
    }
}




function displayFinger() {

    if (madvarerArray[i].name === 'Agurk') {
        document.getElementById('finger').style.display = "inline";
    } else {
        document.getElementById('finger').style.display = "none";

    }

}
