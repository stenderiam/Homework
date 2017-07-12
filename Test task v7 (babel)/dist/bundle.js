(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var countries = exports.countries = '{ "BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Barthelemy", "BM": "Bermuda", "BN": "Brunei", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BQ": "Bonaire, Saint Eustatius and Saba ", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "BZ": "Belize", "RU": "Russia", "RW": "Rwanda", "RS": "Serbia", "TL": "East Timor", "RE": "Reunion", "TM": "Turkmenistan", "TJ": "Tajikistan", "RO": "Romania", "TK": "Tokelau", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "PG": "Papua New Guinea", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "EE": "Estonia", "EG": "Egypt", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands", "FM": "Micronesia", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "XK": "Kosovo", "CI": "Ivory Coast", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos Islands", "CA": "Canada", "CG": "Republic of the Congo", "CF": "Central African Republic", "CD": "Democratic Republic of the Congo", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CW": "Curacao", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syria", "SX": "Sint Maarten", "KG": "Kyrgyzstan", "KE": "Kenya", "SS": "South Sudan", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "South Korea", "SI": "Slovenia", "KP": "North Korea", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "British Virgin Islands", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Laos", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "LV": "Latvia", "TO": "Tonga", "LT": "Lithuania", "LU": "Luxembourg", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libya", "VA": "Vatican", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "U.S. Virgin Islands", "IS": "Iceland", "IR": "Iran", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AQ": "Antarctica", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique" }';

},{}],2:[function(require,module,exports){
'use strict';

var _countries = require('/home/ilais/Desktop/KeepSolid/task/data/countries.js');

var _chips = require('/home/ilais/Desktop/KeepSolid/task/modules/chips.js');

var _chips2 = _interopRequireDefault(_chips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

var init = function init() {
    var data = {};
    //    let test = {};

    data = JSON.parse(_countries.countries);
    // test = JSON.parse(dataTest);

    //   const autocompleteOne = new Autocomplete(data, "myInput");
    //    const autocompleteTwo = new Autocomplete(test, "myInput2");

    var autocompleteOne = new _chips2.default(data, "myInput");
    //    const autocompleteThree = new Chips(test, "myInput2");
};
ready(init);

},{"/home/ilais/Desktop/KeepSolid/task/data/countries.js":1,"/home/ilais/Desktop/KeepSolid/task/modules/chips.js":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Autocomplete = function () {
    function Autocomplete(data, inputId) {
        _classCallCheck(this, Autocomplete);

        this.data = data;
        this.input = document.getElementById(inputId);
        this.input.insertAdjacentHTML('afterend', '<div id="results' + inputId + '" class="results" ></div>');
        this.results = document.getElementById('results' + inputId);
        this.liSelected = document.getElementsByClassName("results__line--selected")[0];
        this.init();
    }

    _createClass(Autocomplete, [{
        key: 'init',
        value: function init() {
            this.showResults();
            this.onChange();
            this.keyNavigation();
        }
    }, {
        key: 'generateList',
        value: function generateList() {
            var newData = this.data;
            var backupData = this.data;
            if (this.input.value) {
                backupData = [];
                var temporaryArray = [];
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
    }, {
        key: 'sortArray',
        value: function sortArray(newData, backupData, temporaryArray) {
            var _this = this;

            Object.keys(newData).sort().forEach(function (key) {
                var subStartAt = newData[key].toLowerCase().indexOf(_this.input.value.toLowerCase());
                if (subStartAt > -1) {
                    var subEnd = subStartAt + _this.input.value.length;
                    var start = newData[key].slice(0, subStartAt);
                    var middle = newData[key].slice(subStartAt, subEnd);
                    var end = newData[key].slice(subEnd, newData[key].lenght);
                    var joined = start + '<b>' + middle + '</b>' + end;
                    backupData.push(newData[key]);
                    temporaryArray.push(joined);
                }
            });

            return backupData, newData, temporaryArray;
        }
    }, {
        key: 'onMatch',
        value: function onMatch() {
            var match = "no matches";
            this.results.innerHTML = '<div class="results__line">' + match + '</div>';
            this.onFocusAdd();
        }
    }, {
        key: 'printResults',
        value: function printResults(newData, backupData) {
            var lines = [];
            Object.keys(newData).sort().forEach(function (key) {
                lines.push('<div data-value="' + backupData[key] + '" class="results__line">' + newData[key] + '</div>');
            });
            this.results.innerHTML = lines.join('');
            this.onFocusDelete();
        }
    }, {
        key: 'onFocusAdd',
        value: function onFocusAdd() {
            if (this.input.classList) {
                this.input.classList.add("onFocus");
            }
        }
    }, {
        key: 'onFocusDelete',
        value: function onFocusDelete() {
            if (this.input.classList) {
                this.input.classList.remove("onFocus");
            }
        }
    }, {
        key: 'fixScroll',
        value: function fixScroll(elem) {
            var currentScrollTop = elem.getBoundingClientRect().top - this.results.getBoundingClientRect().top;
            this.results.scrollTop = currentScrollTop + this.results.scrollTop - 100;
        }
    }, {
        key: 'showResults',
        value: function showResults() {
            var _this2 = this;

            this.input.addEventListener("focus", function () {
                if (_this2.results.classList) {
                    _this2.results.classList.add("results--visability");
                    _this2.generateList();
                }
            });
        }
    }, {
        key: 'onChange',
        value: function onChange() {
            var _this3 = this;

            this.results.addEventListener('click', function (event) {
                var current = event.target;
                while (current.tagName.toLowerCase() !== 'body' && !current.classList.contains("results__line")) {
                    current = current.parentNode;
                }
                var text = current.getAttribute("data-value");
                if (text) {
                    _this3.alertEvent(text);
                }
            });
        }
    }, {
        key: 'keyNavigation',
        value: function keyNavigation() {
            var _this4 = this;

            this.input.addEventListener("keyup", function (event) {
                if (event.which !== 40 && event.which !== 38 && event.which !== 13) {
                    _this4.generateList();
                }
                if (event.which === 40) {
                    if (_this4.liSelected) {
                        _this4.liSelected.classList.remove("results__line--selected");
                        var next = _this4.liSelected.nextElementSibling;
                        if (next) {
                            _this4.liSelected = next;
                            _this4.liSelected.classList.add("results__line--selected");
                        } else {
                            _this4.liSelected = _this4.results.firstElementChild;
                            _this4.liSelected.classList.add("results__line--selected");
                        }
                    } else {
                        _this4.liSelected = _this4.results.firstElementChild;
                        _this4.liSelected.classList.add("results__line--selected");
                    }
                } else if (event.which === 38) {
                    if (_this4.liSelected) {
                        _this4.liSelected.classList.remove("results__line--selected");
                        var _next = _this4.liSelected.previousElementSibling;
                        if (_next) {
                            _this4.liSelected = _next;
                            _this4.liSelected.classList.add("results__line--selected");
                        } else {
                            _this4.liSelected = _this4.results.lastElementChild;
                            _this4.liSelected.classList.add("results__line--selected");
                        }
                    } else {
                        _this4.liSelected = _this4.results.lastElementChild;
                        _this4.liSelected.classList.add("results__line--selected");
                    }
                }
                if ((event.which === 40 || event.which === 38) && _this4.liSelected) {
                    _this4.fixScroll(_this4.liSelected);
                }
                if (event.which === 13) {
                    if (_this4.liSelected) {
                        var text = _this4.liSelected.getAttribute("data-value");
                        if (text) {
                            _this4.alertEvent(text);
                        }
                    }
                }
            });
        }
    }, {
        key: 'alertEvent',
        value: function alertEvent(text) {
            this.input.value = text;
            alert(text);
        }
    }]);

    return Autocomplete;
}();

exports.default = Autocomplete;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _autocomplete = require('././autocomplete.js');

var _autocomplete2 = _interopRequireDefault(_autocomplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chips = function (_Autocomplete) {
    _inherits(Chips, _Autocomplete);

    function Chips(data, inputId) {
        _classCallCheck(this, Chips);

        var _this = _possibleConstructorReturn(this, (Chips.__proto__ || Object.getPrototypeOf(Chips)).call(this, data, inputId));

        _this.chipsArray = [];

        return _this;
    }

    _createClass(Chips, [{
        key: 'alertEvent',
        value: function alertEvent(text) {
            this.input.value = text;
            this.addChips(text);
        }
    }, {
        key: 'addChips',
        value: function addChips(text) {
            var chipsDivStart = '<div class="chips"><div class="chip container__chip">';
            var chipsDivEnd = '<div class="chip__icon"><img src="./icons/delete.png" alt="delete icon"></div></div></div>';
            var chip = this.input.insertAdjacentHTML('afterend', chipsDivStart + text + chipsDivEnd);
            this.chipsArray.push(text);
            this.deleteChips();
            // return text;
        }
    }, {
        key: 'deleteChips',
        value: function deleteChips() {
            var del = document.querySelectorAll('.chip__icon');
            del.forEach(function (key) {
                key.addEventListener('click', function () {
                    key.parentNode.remove();
                });
            });
        }
    }]);

    return Chips;
}(_autocomplete2.default);

exports.default = Chips;

},{"././autocomplete.js":3}]},{},[2]);
