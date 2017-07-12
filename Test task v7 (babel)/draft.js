/*

const init = function() {
    //let data = {};
    //    let test = {};


    let data = {};
    //   let cities = [];
    let xhr = new XMLHttpRequest(); //вытягиваю джсон файл
    xhr.open('GET', 'https://crossorigin.me/http://country.io/names.json', true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            data = JSON.parse(xhr.responseText);
        }
    };

    xhr.send();

    //   data = JSON.parse(dataCountries);
    // test = JSON.parse(dataTest);
    //   const autocompleteOne = new Autocomplete(data, "myInput");
    //    const autocompleteTwo = new Autocomplete(test, "myInput2");

    const autocompleteOne = new Chips(data, "myInput");
    //    const autocompleteThree = new Chips(test, "myInput2");
}
ready(init);


function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
*/