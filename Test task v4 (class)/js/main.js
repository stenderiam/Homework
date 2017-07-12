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
     const autocompleteOne = new Autocomplete(data, "myInput");
     const autocompleteTwo = new Autocomplete(test, "myInput2");

}
ready(init);


 
