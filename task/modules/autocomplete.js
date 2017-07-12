export default class Autocomplete {

    constructor(data, inputId) {
        this.data = data;
        this.input = document.getElementById(inputId);
        this.input.insertAdjacentHTML('afterend', '<div id="results' + inputId + '" class="results" ></div>');
        this.results = document.getElementById('results' + inputId);
        this.liSelected = document.getElementsByClassName("results__line--selected")[0];
        this.init();
    }

    init() {
        this.showResults();
        this.onChange();
        this.keyNavigation();
    }

    generateList() {
        let newData = this.data;
        let backupData = this.data;
        if (this.input.value) {
            backupData = [];
            let temporaryArray = [];
            this.sortArray(newData, backupData, temporaryArray);
            backupData = backupData.slice(0, 5);
            newData = temporaryArray.slice(0, 5);
        }
        if (Object.keys(newData).length == 0) {
            this.onMatch();
        } else {
            this.printResults(newData, backupData);
        }
    }

    sortArray(newData, backupData, temporaryArray) {

        Object.keys(newData)

        .sort()
            .forEach(key => {
                let subStartAt = newData[key].toLowerCase().indexOf(this.input.value.toLowerCase());
                if (subStartAt > -1) {
                    let subEnd = subStartAt + this.input.value.length;
                    let start = newData[key].slice(0, subStartAt);
                    let middle = newData[key].slice(subStartAt, subEnd);
                    let end = newData[key].slice(subEnd, newData[key].lenght);
                    let joined = start + '<b>' + middle + '</b>' + end;
                    backupData.push(newData[key]);
                    temporaryArray.push(joined);
                }
            });

        return backupData, newData, temporaryArray;
    }

    onMatch() {
        let match = "no matches";
        this.results.innerHTML = '<div class="results__line">' + match + '</div>';
        this.onFocusAdd();
    }

    printResults(newData, backupData) {
        const lines = [];
        Object.keys(newData)
            .sort()
            .forEach(key => {
                lines.push('<div data-value="' + backupData[key] + '" class="results__line">' + newData[key] + '</div>');
            });
        this.results.innerHTML = lines.join('');
        this.onFocusDelete();
    }

    onFocusAdd() {
        if (this.input.classList) {
            this.input.classList.add("onFocus");
        }
    }
    onFocusDelete() {
        if (this.input.classList) {
            this.input.classList.remove("onFocus");
        }
    }

    fixScroll(elem) {
        const currentScrollTop = elem.getBoundingClientRect().top - this.results.getBoundingClientRect().top;
        this.results.scrollTop = currentScrollTop + this.results.scrollTop - 100;
    }

    showResults() {
        this.input.addEventListener("focus", () => {
            if (this.results.classList) {
                this.results.classList.add("results--visability");
                this.generateList();
            }
        });
    }

    onChange() {
        this.results.addEventListener('click', (event) => {
            let current = event.target;
            while (current.tagName.toLowerCase() !== 'body' && !current.classList.contains("results__line")) {
                current = current.parentNode;
            }
            let text = current.getAttribute("data-value");
            if (text) {
                this.alertEvent(text);
            }
        });
    }

    keyNavigation() {
        this.input.addEventListener("keyup", (event) => {
            if (event.which !== 40 && event.which !== 38 && event.which !== 13) {
                this.generateList();
            }
            if (event.which === 40) {
                if (this.liSelected) {
                    this.liSelected.classList.remove("results__line--selected");
                    var next = this.liSelected.nextElementSibling;
                    if (next) {
                        this.liSelected = next;
                        this.liSelected.classList.add("results__line--selected");
                    } else {
                        this.liSelected = this.results.firstElementChild;
                        this.liSelected.classList.add("results__line--selected");
                    }
                } else {
                    this.liSelected = this.results.firstElementChild;
                    this.liSelected.classList.add("results__line--selected");
                }
            } else if (event.which === 38) {
                if (this.liSelected) {
                    this.liSelected.classList.remove("results__line--selected");
                    let next = this.liSelected.previousElementSibling;
                    if (next) {
                        this.liSelected = next;
                        this.liSelected.classList.add("results__line--selected");
                    } else {
                        this.liSelected = this.results.lastElementChild;
                        this.liSelected.classList.add("results__line--selected");
                    }
                } else {
                    this.liSelected = this.results.lastElementChild;
                    this.liSelected.classList.add("results__line--selected");
                }
            }
            if ((event.which === 40 || event.which === 38) && this.liSelected) {
                this.fixScroll(this.liSelected);
            }
            if (event.which === 13) {
                if (this.liSelected) {
                    let text = this.liSelected.getAttribute("data-value");
                    if (text) {
                        this.alertEvent(text);
                    }
                }
            }
        });
    }

    alertEvent(text) {
        this.input.value = text;
        alert(text);
    }
}