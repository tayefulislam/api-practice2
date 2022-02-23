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
        // console.log(country.altSpellings);

        const div = document.createElement('div')
        div.classList.add('country')
        const h3 = document.createElement('h3');
        h3.innerText = country.name.common

        const p = document.createElement('p');
        p.innerText = country.name.official

        div.appendChild(h3);
        div.appendChild(p);

        countryFeild.appendChild(div);




    });

}