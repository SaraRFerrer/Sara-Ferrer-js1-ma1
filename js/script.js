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

