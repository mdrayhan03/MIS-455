window.onload = function() {
     var mealData = localStorage.getItem('selectedMeal');

    if (mealData) {
        mealData = JSON.parse(mealData);
        document.title = `${mealData.strMeal} - Recipe Master` ;
        var recipeOutput = document.getElementsByClassName("recipeoutput")[0];

        var first = document.createElement('div') ;
        first.className = "first-part" ;
        first.innerHTML=`<img src="${mealData.strMealThumb}" title="${mealData.strMeal}" alt="${mealData.strMeal}">` ;

        var info = document.createElement('div') ;
        info.className = "info" ;

        var mealinfo = document.createElement("mealinfo") ;
        mealinfo.innerHTML = `<h1>Meal Title: ${mealData.strMeal}</h1><h3>Meal Category: ${mealData.strCategory}</h3><h3>Meal Area: ${mealData.strArea}</h3><h3>Meal ID: ${mealData.idMeal}</h3>` ;
        info.appendChild(mealinfo) ;

        var ingredienttable = document.createElement("div") ;
        ingredienttable.className = "ingredient-table" ;

        const ingredients = Object.keys(mealData)
        .filter(key => key.startsWith("strIngredient") && mealData[key]?.trim())
        .map(key => mealData[key]);

        const measures = Object.keys(mealData)
        .filter(key => key.startsWith("strMeasure") && mealData[key]?.trim())
        .map(key => mealData[key]);

        var ele = "" ;
        for (var i = 0; i< ingredients.length; i++) {            
            ele += `
                <tr>
                    <td>${ingredients[i]}</td>
                    <td>${measures[i]}</td>
                </tr>
            ` ;
        }

        ingredienttable.innerHTML = `<table>
                                        <tr>
                                            <th>Ingredient Name</th>
                                            <th>Measurement</th>
                                        </tr>
                                        ${ele}                 
                                     </table>` ;
        info.appendChild(ingredienttable) ;

        first.appendChild(info) ;

        var instruction = document.createElement("div") ;
        instruction.className = "instruction-part" ;

        var h = document.createElement("div") ;
        h.className = "ins"
        h.innerHTML = "<h2>Instruction</h2>" ;
        
        instruction.innerText = mealData.strInstructions ;

        recipeOutput.appendChild(first) ;
        recipeOutput.appendChild(h) ;
        recipeOutput.appendChild(instruction) ;

    } else {
        console.log("No meal data available.");
        var recipeOutput = document.getElementsByClassName("recipeoutput")[0];
        recipeOutput.innerHTML = "<p>No meal data available. Please go back and select a meal.</p>";
    }
};

var adDive = document.getElementsByClassName('ad')[0] ;
function adfunction() {
    adDive.style.display = "none" ;
}