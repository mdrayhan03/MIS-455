search() ;

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      search() ;
    }
  });

function search() {
    var name = document.getElementById("inp").value ;
    console.log(name) ;
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}` ;    
    fetch(url)
    .then(response => response.json())
    .then(data => display(data.meals))
}


var flag = true ;
var btn = document.getElementsByClassName("down")[0] ;
var text = document.getElementsByClassName("btn-text")[0] ;
function showmorefunction() {
    console.log("click") ;
    if (flag === false) {
        btn.style.transform = "rotate(0deg)" ;
        text.innerText = "more" ;
        flag = true ;
    }
    else if (flag === true) {
        btn.style.transform = "rotate(180deg)" ;
        text.innerText = "less" ;
        flag = false ;
    }
    search() ;
}

function display(data) {
    var output = document.getElementsByClassName("output")[0] ;
    output.replaceChildren()
    var len = 0 ;
    if (data) {
        if (flag === false) {
            len = data.length ;
        }
        else if (flag === true) {
            len = 5 ;
        }
        for (var i = 0; i < len; i++) {
            var newDiv = document.createElement("div") ;
            newDiv.className = "newDiv" ;
            newDiv.title = data[i].strMeal ;
            newDiv.innerHTML = `<h2>Meal Title: ${data[i].strMeal}</h2><img src="${data[i].strMealThumb}">` ;
            output.appendChild(newDiv) ;
            newDiv.addEventListener("click", (function(meal) {
                return function(event) {                
                    event.preventDefault();
                    localStorage.setItem('selectedMeal', JSON.stringify(meal));
                    window.location.href = "recipe.html";
                };
            })(data[i]));       
        }
    }
    else {
        output.innerHTML = "<h1>No recipe found of this name." ;
    }
}

function recipeShow(data) {
    console.log(data) ;
    var recipe = document.getElementsByClassName("recipeoutput")[0] ;
    recipe.innerHTML = `<h2>Meal Title: ${data.strMeal}</h2><img src="${data.strMealThumb}">` ;
}

var adDive = document.getElementsByClassName('ad')[0] ;
function adfunction() {
    adDive.style.display = "none" ;
}