class Autocomplete {

    constructor(data, inputId) {
        this.data = data;
        this.input = document.getElementById(inputId);;
        this.input.insertAdjacentHTML('afterend', '<div id="results' + inputId + '" class="results" ></div>');
        this.results = document.getElementById('results' + inputId);
        this.init();
    }

    init() {
        this.arrayOnClick();
        this.showResults();
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

        // alphabet order (loop through each line (sort by key of the object))
        .sort()
            .forEach(key => {
                let subStartAt = newData[key].toLowerCase().indexOf(this.input.value.toLowerCase());
                // bold substring in the sort array
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

    //fix scroll for key press events
    fixScroll(elem) {
        const currentScrollTop = elem.getBoundingClientRect().top - this.results.getBoundingClientRect().top;
        this.results.scrollTop = currentScrollTop + this.results.scrollTop - 100;
    }

    arrayOnClick() {
        this.input.addEventListener("focus", () => {
            if (this.results.classList) {
                this.results.classList.add("results--visability");
                this.generateList();
            }
        });
    }
    showResults() {
        //on click event to get value on click for alert and input
        this.results.addEventListener('click', (event) => {
            var current = event.target;
            //while is true in case it doesnt have a line and it isn't a tag of the body 
            while (current.tagName.toLowerCase() !== 'body' && !current.classList.contains("results__line")) {
                current = current.parentNode;
            }
            //gets a data-value of the current (clicked) line
            var text = current.getAttribute("data-value");
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

            var liSelected = document.getElementsByClassName("results__line--selected")[0];
            if (event.which === 40) {
                if (liSelected) {
                    liSelected.classList.remove("results__line--selected");
                    var next = liSelected.nextElementSibling;
                    if (next) {
                        liSelected = next;
                        liSelected.classList.add("results__line--selected");
                    } else {
                        liSelected = this.results.firstElementChild;
                        liSelected.classList.add("results__line--selected");
                    }
                } else {
                    liSelected = this.results.firstElementChild;
                    liSelected.classList.add("results__line--selected");
                }
            } else if (event.which === 38) {
                if (liSelected) {
                    liSelected.classList.remove("results__line--selected");
                    var next = liSelected.previousElementSibling;
                    if (next) {
                        liSelected = next;
                        liSelected.classList.add("results__line--selected");
                    } else {
                        liSelected = this.results.lastElementChild;
                        liSelected.classList.add("results__line--selected");
                    }
                } else {
                    liSelected = this.results.lastElementChild;
                    liSelected.classList.add("results__line--selected");
                }
            }
            if ((event.which === 40 || event.which === 38) && liSelected) {

                this.fixScroll(liSelected);
            }

            if (event.which === 13) {
                if (liSelected) {
                    var text = liSelected.getAttribute("data-value");
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
