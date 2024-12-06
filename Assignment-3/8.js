fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
.then(response => response.json())
.then(data => mealShow(data.meals)) ;

function mealShow(data) {    
    for (var i = 0 ; i < data.length ; i ++) {
        console.log(`Meal ID: ${data[i].idMeal}; Meal Name: ${data[i].strMeal}; Meal Category: ${data[i].strCategory}`) ;
    }
}