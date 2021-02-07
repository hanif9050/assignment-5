const inputGet = document.querySelector('.form-control')
const imgContainer = document.getElementById("img")
const details = document.querySelector(".details")
const searchBtn = document.querySelector(".btn")
const closedBtn = document.getElementById("closed-btn")


searchBtn.addEventListener('click', () => {

    let newInput = inputGet.value
        // console.log(newInput);
    console.log('clicked');
    const isEmpty = document.getElementById('isEmpty').innerHTML === "";

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
    details.style.display = "grid"
    searchBtn.style.display = "block"
    inputGet.style.display = "block"
})


//first try not necesseryy

// fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
//     .then(response => response.json())
//     .then(data => {


//         let getMeal = data.meals[0]
//             // console.log(getMeal.strMealThumb)
//         imgContainer.src = getMeal.strMealThumb
//     });



// second tryimportant
// fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
//     .then(response => response.json())
//     .then(data => {
//         let allItems = ''
//         let allImg = ''
//         const dataGet = data.meals
//         dataGet.forEach(index => {
//                 // console.log(index)
//                 allItems = index.strMeal;
//                 allImg = index.strMealThumb;
//                 // console.log(index.strMealThumb)
//                 const newDiv = document.createElement('div')
//                 newDiv.className = "imageBox"
//                     // newDiv.innerHTML = `<img src=${allImg}>`
//                     // newDiv.innerHTML = `<p>${allItems}</p>`
//                 const newElement = document.createElement('p')
//                 const newImg = document.createElement('img')
//                 newImg.src = allImg
//                 newElement.innerHTML = allItems
//                 details.appendChild(newDiv)
//                 newDiv.appendChild(newImg)
//                 newDiv.appendChild(newElement);
//             })
//             // console.log(dataGet)
//     });
// function of search

function firstSearch(name) {

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`)
        .then(response => response.json())
        .then(data => {

            let allItems = ''
            let allImg = ''
            const dataGet = data.meals
            dataGet.forEach(index => {
                    // console.log(index)
                    allItems = index.strMeal;
                    console.log("meal", allItems);
                    const mealId = index.idMeal
                    console.log("meal id", mealId);
                    allImg = index.strMealThumb;
                    // console.log(index.strMealThumb)
                    const newDiv = document.createElement('div')
                    newDiv.className = "imageBox"
                        // newDiv.innerHTML = `<img src=${allImg}>`
                        // newDiv.innerHTML = `<p>${allItems}</p>`
                    const newElement = document.createElement('p')
                    const newImg = document.createElement('img')
                    newImg.src = allImg
                    newImg.className = "singleImage"
                    const imgSeletor = document.querySelectorAll('.singleImage')
                    newImg.style.cursor = "pointer"
                    newImg.addEventListener('click', () => {
                        newIngredients(mealId)
                        details.style.display = "none"
                        searchBtn.style.display = "none"
                        inputGet.style.display = "none"
                    })
                    console.log(newImg)
                        // imgSeletor.forEach(index => {
                        //     console.log("idex", index);
                        //     index.addEventListener("clicked", () => {
                        //         console.log("each clicked");
                        //     })
                        // })
                    newElement.innerHTML = allItems
                    details.appendChild(newDiv)
                    newDiv.appendChild(newImg)
                    newDiv.appendChild(newElement);

                })
                // console.log(dataGet)

        }).catch(error => {
            alert("incorrect value")
            console.log("incorrect value")
        });
}


// on click
// const newIngredients = () => {
//         fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
//             .then(response => response.json())
//             .then(data => {
//                 const newData = data.meals
//                 newData.forEach(index => {
//                     const pop = document.querySelector('.popup')
//                     pop.innerHTML = `<h1> Name: ${index.strCategory}</h1>
//     <h6>Ingredient1: ${index.strIngredient1}</h6>
//     <h6>Ingredient2: ${index.strIngredient2}</h6>
//     <h6>Ingredient3: ${index.strIngredient3}</h6>
//     <h6>Ingredient4: ${index.strIngredient4}</h6>
//     <h6>Country Name: ${index.strArea}</h6>
//     `
//                     console.log("index", index.strArea)
//                 })
//             })
//             //  {
//             //     const ingData = data.meals
//             //     const ingDataArr = ingData.map(index => {
//             //         console.log("index: ", index)
//             //         return index;
//             //     })
//             //     ingDataArr.forEach((tem) => {
//             //         console.log(tem.strMeal)
//             //     })
//             // })
//}
//////////////////////////////////
const newIngredients = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(response => response.json())
        .then(data => {
            const newData = data.meals
            newData.forEach(index => {
                const closed = document.querySelector('.closed')
                const pop = document.querySelector('.popup')
                closed.classList = "closed-block"

                pop.style.display = "block"

                pop.innerHTML = `
                    
                    <img src="${index.strMealThumb}">
                    <h2>  ${index.strMeal}</h2>
                    <h6>Ingredient1: ${index.strIngredient1}</h6>
                    <h6>Ingredient2: ${index.strIngredient2}</h6>
                    <h6>Ingredient3: ${index.strIngredient3}</h6>
                    <h6>Ingredient4: ${index.strIngredient4}</h6>
                    <h6>Country Name: ${index.strArea}</h6>
                    `
                console.log("index", index.strMealThumb)
            })
        })
        //  {
        //     const ingData = data.meals
        //     const ingDataArr = ingData.map(index => {
        //         console.log("index: ", index)
        //         return index;
        //     })
        //     ingDataArr.forEach((tem) => {
        //         console.log(tem.strMeal)
        //     })
        // })
}