    
class Autocomplete {
        
        constructor(data, inputId) {
            this.data = data;
            this.input = document.getElementById(inputId);;
            this.input.insertAdjacentHTML('afterend', '<div id="results'+inputId+'" class="results" ></div>');
            this.results = document.getElementById('results'+inputId);
            this.init();
        }

        //method to generate an array of "lines" (strings) which contains a list of countries 
        generateArray() {
            const data = this.data;
            const input = this.input;
            const results = this.results;
            const value = input.value;
            let newData = data;
            let backupData = newData;
            const lines = [];
            //sort an array of lines relative to the entered values (substring)
            if (value) {
                //get list of countries from data object
                newData = JSON.parse(JSON.stringify(data));
                backupData = [];
                let temporaryArray = [];
                Object.keys(newData)
                    //alphabet order (loop through each line (sort by key of the object))
                    .sort()
                    .forEach(v => {
                        let subStartAt = newData[v].toLowerCase().indexOf(value.toLowerCase());
                        newData[v].indexOf(value);
                        //bold substring in the sort array
                        if (subStartAt > -1) {
                            let subEnd = subStartAt + value.length;
                            let start = newData[v].slice(0, subStartAt);
                            let middle = newData[v].slice(subStartAt, subEnd);
                            let end = newData[v].slice(subEnd, newData[v].lenght);
                            let joined = start + '<b>' + middle + '</b>' + end;
                            backupData.push(newData[v]);
                            temporaryArray.push(joined);
                        }
                    });
                //show first five lines
                backupData = backupData.slice(0, 5);
                newData = temporaryArray.slice(0, 5);

            }
            //in case if there's no matches make input outline red with notification
            if (Object.keys(newData).length == 0) {
                var match = "no matches";
                results.innerHTML = '<div class="results__line">' + match + '</div>';
                if (input.classList) {
                    input.classList.add("onFocus");
                }
            } else {
                //in case of matches with input value, print them or show the whole list
                Object.keys(newData)
                    .sort()
                    .forEach(v => {
                        lines.push('<div data-value="' + backupData[v] + '" class="results__line">' + newData[v] + '</div>');
                    });
                results.innerHTML = lines.join('');
                if (input.classList) {
                    input.classList.remove("onFocus");
                }
            }
        }
        //fix scroll for key press events
        fixScroll(elem) {
            const currentScrollTop = elem.getBoundingClientRect().top - this.results.getBoundingClientRect().top;
            this.results.scrollTop = currentScrollTop + this.results.scrollTop - 100;
        }
        //Initialization function of events
        init() {
            this.input.addEventListener("focus", () => {
                if (this.results.classList) {
                    this.results.classList.add("results--visability");
                    this.generateArray();
                }

            });
            this.input.addEventListener("keyup", (event) => {
                if (event.which !== 40 && event.which !== 38 && event.which !== 13) {
                    this.generateArray();
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
                    console.log('121323123');
                    this.fixScroll(liSelected);
                }

                if (event.which === 13) {
                    if (liSelected) {
                        var text = liSelected.getAttribute("data-value");
                        if (text) {
                            this.input.value = text
                            alert(text);
                        }
                    }
                }
            });
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
                    this.input.value = text
                    alert(text);
                }
            });
        }
    };

