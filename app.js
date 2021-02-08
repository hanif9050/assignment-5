const inputGet = document.querySelector('.form-control')
const imgContainer = document.getElementById("img")
const details = document.querySelector(".details")
const searchBtn = document.querySelector(".btn")
const closedBtn = document.getElementById("closed-btn")


searchBtn.addEventListener('click', () => {

    let newInput = inputGet.value
        // console.log(newInput);
    console.log('clicked');

    if (details.innerHTML != '') {
        details.innerHTML = ''
        document.querySelector('.form-control').value = "";
    }
    if (details.innerHTML === '') {
        firstSearch(newInput)
        document.querySelector('.form-control').value = "";
    }


    // console.log(dataGet)
});



// closed button
closedBtn.addEventListener("click", () => {
    document.querySelector(".new").style.display = "none"

    window.location.reload();
})




function firstSearch(name) {

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`)
        .then(response => response.json())
        .then(data => {

            let allItems = ''
            let allImg = ''
            const dataGet = data.meals
            dataGet.forEach(index => {
                allItems = index.strMeal;
                const mealId = index.idMeal
                allImg = index.strMealThumb;
                const newDiv = document.createElement('div')
                newDiv.className = "imageBox"
                const newElement = document.createElement('h6')
                const newImg = document.createElement('img')
                newImg.src = allImg
                newImg.className = "singleImage"

                newImg.style.cursor = "pointer"
                    // new eventlistener for details about img
                newImg.addEventListener('click', () => {
                    newIngredients(mealId)
                    details.style.display = "none"
                    searchBtn.style.display = "none"
                    inputGet.style.display = "none"
                })


                newElement.innerHTML = allItems
                details.appendChild(newDiv)
                newDiv.appendChild(newImg)
                newDiv.appendChild(newElement);

            })


        }).catch(error => {
            alert("incorrect value")

        });
}



//////////////////////////////////
const newIngredients = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(response => response.json())
        .then(data => {
            const newData = data.meals
            newData.forEach(index => {
                const closed = document.querySelector('.closed')
                const pop = document.querySelector('.popup')

                closed.classList.add("closed-block")

                pop.style.display = "block"

                pop.innerHTML = `
                    
                    <img src="${index.strMealThumb}">
                    <h2>  ${index.strMeal}</h2>
                    <h6>Ingredient1 : ${index.strIngredient1}</h6>
                    <h6>Ingredient2 : ${index.strIngredient2}</h6>
                    <h6>Ingredient3 : ${index.strIngredient3}</h6>
                    <h6>Ingredient4 : ${index.strIngredient4}</h6>
                    <h6>Ingredient5 : ${index.strIngredient5}</h6>
                    <h6>Ingredient6 : ${index.strIngredient6}</h6>
                    <h6>Ingredient7 : ${index.strIngredient7}</h6>
                    <h6>Ingredient8 : ${index.strIngredient8}</h6>
                    <h6>Ingredient9 : ${index.strIngredient9}</h6>
                    <h6>Country Name : ${index.strArea}</h6>
                    `
                console.log("index", index.strMealThumb)
            })
        })

}