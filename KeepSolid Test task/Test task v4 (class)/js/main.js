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
     const autocompleteOne = new Autocomplete();
     const autocompleteTwo = new Autocomplete();
     autocompleteOne.init(data, "myInput");
     autocompleteTwo.init(test, "myInput2");
}
ready(init);


 


