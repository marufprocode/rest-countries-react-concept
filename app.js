const loadCountries = () => {
    fetch ('https://restcountries.com/v3.1/all')
    .then (res => res.json())
    .then (data => displayCountries(data));
}

loadCountries();

const displayCountries = countries => {
    const countryHTML = countries.map(country => getCountryHTML(country));
    const countriesDiv = document.getElementById('countries');
    countriesDiv.innerHTML = countryHTML.join("");
}

const getCountryHTML = ({continents, region, name, flags}) => {
    const {common: CountryName} = name;
    const {png: flag} = flags;
    return `
        <div class="country">
            <img src="${flag}" alt="flag-img">
            <p>Name: ${CountryName}</p>
            <p>Continent: ${continents}</p>
            <p>Region: ${region}</p>
        </div>
    `
}

