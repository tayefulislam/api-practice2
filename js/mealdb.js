const searchFood = () => {
    const inputField = document.getElementById('input-data');
    const inputData = inputField.value;
    inputField.value = '';
    console.log(inputData);

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`)
        .then(response => response.json())
        .then(data => showData(data.meals))

}

const showData = (meals) => {

    meals.forEach(meal => {

        console.log(meal.strMeal)



    });
}