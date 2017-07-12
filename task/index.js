import { countries } from '/home/ilais/Desktop/KeepSolid/task/data/countries.js';
import Chips from '/home/ilais/Desktop/KeepSolid/task/modules/chips.js';


function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

let init = function() {
    let data = {};
    //    let test = {};

    data = JSON.parse(countries);
    // test = JSON.parse(dataTest);

    //   const autocompleteOne = new Autocomplete(data, "myInput");
    //    const autocompleteTwo = new Autocomplete(test, "myInput2");

    const autocompleteOne = new Chips(data, "myInput");
    //    const autocompleteThree = new Chips(test, "myInput2");
}
ready(init);