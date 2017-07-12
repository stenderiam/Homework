function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

var init = function() {
     var data = {};
     data = JSON.parse(dataCountries);
     autocomplete.init(data, "myInput");
     console.log(Object.values(data));
}
ready(init);


 


