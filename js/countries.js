const loadData = () => {

    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => showData(data))
}
loadData()


const showData = data => {
    // for (const country of data) {
    //     console.log(country.name.official)

    // }
    // using forEach
    const countryFeild = document.getElementById('countries');

    data.forEach(country => {
        // console.log(country.name);

        const div = document.createElement('div')
        div.classList.add('country')

        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.name.official}</p>
        <img src="${country.flags.png}"><br>
        <button onclick="loadCountryDetail('${country.name.common}')">Details</button> 
        `
        countryFeild.appendChild(div);


    });

}

const loadCountryDetail = (country) => {
    const url = `https://restcountries.com/v3.1/name/${country}`
    fetch(url)
        .then(res => res.json())
        .then(data => showCountryData(data[0]))

}

const showCountryData = (data) => {

    console.log(data.flags.png);


    const showCountrydetails = document.getElementById('show-details');

    showCountrydetails.innerHTML = `
    <h1>${data.name.common}</h1>
    <img src="${data.flags.png}">
    `

}