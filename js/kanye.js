// fucntion using arrorw function


const loadQuotes = () => {

    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => showQuotes(data))
}

const showQuotes = (data) => {

    console.log(data.quote)

    const quoteField = document.getElementById('quote');
    quoteField.innerText = data.quote;

}



