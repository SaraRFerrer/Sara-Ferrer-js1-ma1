// Question 1

const cat = {
    complain: function() {
        console.log("Meow");
    }
    
}

// Question 2 and 3 and 4

const heading = document.querySelector("h3"); 
heading.innerHTML = "Updated Heading";
heading.style.fontSize = "2em";

heading.classList.add("subheading");


// Question 5 

const paragraphs = document.querySelectorAll("p");

console.dir(paragraphs);

for(let i = 0; i < paragraphs.length; i++) {
    console.dir(paragraphs[i].innerHTML);
    paragraphs[i].style.color = "red";
}


// Question 6 

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function createList (list) {
    for(var i = 0; i < cats.length; i++) {
        let name = cats[i].name;
        console.log(name);
    }
}

createList();

// Question 8

function createCats (cats){
    
}


