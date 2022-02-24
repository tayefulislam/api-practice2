// const notFound = document.getElementById('not-found').style.display = 'none'
// let empty = document.getElementById('empty').style.display = 'none';

let error = (id, value) => {
    document.getElementById(id).style.display = value;
}

error('not-found', 'none');
error('empty', 'none');

const setDetails = document.getElementById('show-details');


const searchFood = () => {
    const inputField = document.getElementById('input-data');
    const inputData = inputField.value;
    inputField.value = '';
    console.log(inputData);

    if (inputData == '') {
        error('empty', 'block');
        console.log('plase enter some thing')
    }

    else {
        error('empty', 'none');
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`)
            .then(response => response.json())
            .then(data => showData(data.meals))
    }



}

const showData = (meals) => {

    //  assing ass a grobal varable 
    console.log(meals == null)

    const showResults = document.getElementById('result');
    showResults.innerHTML = ``;
    setDetails.innerHTML = ``;



    if (meals == null) {

        error('not-found', 'block');
        console.log('nothinf')

    }
    else {

        error('not-found', 'none');

        meals.forEach(meal => {



            const div = document.createElement('div')
            div.classList = 'col';

            div.innerHTML = `
        <div onclick="showDetils(${meal.idMeal})" class="card">
                <img  width="40%" src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 100)}...</p>
                </div>
            </div>

        `
            showResults.appendChild(div);

        });

    }


}

const showDetils = (mealID) => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    // console.log(url)

    fetch(url)
        .then(response => response.json())
        .then(data => displayDetails(data.meals[0]))

}




const displayDetails = (data) => {

    // const setDetails = document.getElementById('show-details');
    setDetails.innerHTML = ``;
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card mx-auto" style="width: 18rem;">
                <img src="${data.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.strMeal}</h5>
                    <p class="card-text">${data.strInstructions.slice(0, 100)}</p>
                    <a href="${data.strYoutube}" class="btn btn-primary">See VIDEO</a>
                </div>
            </div>
    `

    setDetails.appendChild(div);
}