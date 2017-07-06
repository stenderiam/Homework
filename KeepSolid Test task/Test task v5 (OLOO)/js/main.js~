function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

let init = function() {
     let data = {};
     let test = {};
     data = JSON.parse(dataCountries);
     test = JSON.parse(dataTest);
     const autocompleteOne = Object.create(Autocomplete);
     const autocompleteTwo = Object.create(Autocomplete);
     autocompleteOne.init(data, "myInput");
     autocompleteTwo.init(test, "myInput2");
}
ready(init);


 


