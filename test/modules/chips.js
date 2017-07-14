import Autocomplete from '././autocomplete.js';

export default class Chips extends Autocomplete {

    constructor(data, inputId) {
        super(data, inputId);
        this.chipsArray = [];
    }

    handleResultSelected(countryValue) {
        this.addChip(countryValue);

        return this.filterChipArray(countryValue);
    }

    addChip(countryValue) {
        if (this.chipsArray.includes(countryValue)) {
            return;
        }
        this.createChip(countryValue);
        this.deleteChip();
    }

    createChip(countryValue) {
        this.chipsArray.push(countryValue);
        let chipDivStart = '<div class="chips"><div class="chip container__chip">';
        let chipDivEnd = '<div class="chip__icon"><img src="./icons/delete.png" alt="delete icon"></div></div></div>';
        this.results.insertAdjacentHTML('afterbegin', chipDivStart + countryValue + chipDivEnd);

        // just to check the filter 
        console.log(this.filterChipArray(this.chipsArray));
    }

    // filter to push unique chips into array
    filterChipArray() {
        let obj = {};
        for (let i = 0; i < this.chipsArray.length; i++) {
            let str = this.chipsArray[i];
            obj[str] = true;
        }

        // more efficient is way to use objects
        return Object.keys(obj);
    }


    deleteChip() {
        let del = document.querySelectorAll('.chip__icon');
        del.forEach((key) => {
            key.addEventListener('click', () => {
                key.parentNode.remove();
            })
        })
    }

}