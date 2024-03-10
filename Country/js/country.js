fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(res => printConutry(res))


function printConutry(country) {
    const root = document.getElementById("root");
    let htmlcode = "";
    country.forEach(country => {
        htmlcode += makeHTML(country);
    });

    root.innerHTML = htmlcode;
}


function makeHTML(country) {
    const { name, flags, area, capital,
        languages } = country;

        const lang = JSON.stringify(language);
        console.log(lang);
        // const {} = languages;

    // const propertyValues = Object.values(languages);

    // // console.log(propertyValues);

    // let modifiedArr = propertyValues.map(function (language) {
    //     return language;
    // });


    console.log(languages);


    const html = `
        <div class="detalis">
            <img src="${flags.png}"/>
            <h3>${name.common}</h3>
            <p> Area: ${area}</p>
            <p>Capital: ${capital}</p>
            <p>Languages </p>
        </div>
    `;

    return html;
}

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = e.target.searchBox.value;

    const searchText = text.toLowerCase();
    console.log(searchText);

    fetch(`https://restcountries.com/v3.1/name/${searchText}`)

    .then(res => res.json())
    .then(res => printConutry(res))
});