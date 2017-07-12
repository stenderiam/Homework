import Autocomplete from '././autocomplete.js';

export default class Chips extends Autocomplete {

    constructor(data, inputId) {
        super(data, inputId);
        this.chipsArray = [];

    }

    alertEvent(text) {
        this.input.value = text;
        this.addChips(text);

    }

    addChips(text) {
        let chipsDivStart = '<div class="chips"><div class="chip container__chip">';
        let chipsDivEnd = '<div class="chip__icon"><img src="./icons/delete.png" alt="delete icon"></div></div></div>';
        const chip = this.input.insertAdjacentHTML('afterend', chipsDivStart + text + chipsDivEnd);
        this.chipsArray.push(text);
        this.deleteChips();
    }

    deleteChips() {
        let del = document.querySelectorAll('.chip__icon');
        del.forEach((key) => {
            key.addEventListener('click', () => {
                key.parentNode.remove();
            })
        })
    }
}