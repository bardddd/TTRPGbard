let attributes = [];

function getAllAttributes() {
    const divs = document.querySelectorAll(".attribute_level");

    divs.forEach((div) => {
        attributes.push(div.id);
    });
}

function randomizeStatsNoMinimum() {
    console.log(attributes.length);
    attributes.forEach((attribute) => {
        document.getElementById(attribute).innerHTML = "Level: " + (Math.floor(Math.random() * 15) + 6); //random number 6-20. WHY IS IT SO UGLY???
    });
}

getAllAttributes(); 
randomizeStatsNoMinimum(); 
