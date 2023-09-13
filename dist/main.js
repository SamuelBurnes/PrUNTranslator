/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ModuleRunner__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Translator__ = __webpack_require__(2);


mainRun();
function mainRun() {
    const runner = new __WEBPACK_IMPORTED_MODULE_0__ModuleRunner__["a" /* ModuleRunner */]([
        new __WEBPACK_IMPORTED_MODULE_1__Translator__["a" /* Translator */](),
    ]);
    (function () {
        runner.loop();
    })();
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ModuleRunner {
    constructor(modules) {
        this.modules = modules.map(m => this.moduleToME(m));
    }
    moduleToME(module) {
        return {
            module,
            name: module.constructor.name,
            enabled: true,
            count: 0,
            cleanupTime: 0,
            runTime: 0
        };
    }
    loop() {
        this.modules.map(entry => {
            if (entry.enabled) {
                const t0 = performance.now();
                entry.module.cleanup();
                const cleanupTime = performance.now() - t0;
                const t1 = performance.now();
                entry.module.run();
                const runTime = performance.now() - t1;
                entry.count++;
                entry.cleanupTime += cleanupTime;
                entry.runTime += runTime;
            }
        });
        window.setTimeout(() => this.loop(), 250);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ModuleRunner;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TranslationMatrix_ts__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Selector_ts__ = __webpack_require__(4);



class Translator {
    constructor() {
        this.tag = "pt-translator";
    }
    cleanup() {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* genericCleanup */])(this.tag);
    }
    run() {
        const buttons = document.querySelectorAll("button");
        buttons.forEach(button => {
            if (button.textContent && __WEBPACK_IMPORTED_MODULE_1__TranslationMatrix_ts__["a" /* TranslationMatrix */][button.textContent.toLowerCase()]) {
                button.textContent = __WEBPACK_IMPORTED_MODULE_1__TranslationMatrix_ts__["a" /* TranslationMatrix */][button.textContent];
            }
        });
        const headers = document.querySelectorAll(__WEBPACK_IMPORTED_MODULE_2__Selector_ts__["a" /* Selector */].HeadItem);
        headers.forEach(header => {
            if (header.textContent) {
                if (header.firstChild && header.firstChild.textContent && header.firstChild.textContent.includes("LIC")) {
                    header.firstChild.textContent = header.firstChild.textContent.replace(/LIC/, __WEBPACK_IMPORTED_MODULE_1__TranslationMatrix_ts__["a" /* TranslationMatrix */]["license"]);
                }
                else if (header.firstChild && header.firstChild.textContent && header.firstChild.textContent.includes("HELP")) {
                    header.firstChild.textContent = header.firstChild.textContent.replace(/HELP/, __WEBPACK_IMPORTED_MODULE_1__TranslationMatrix_ts__["a" /* TranslationMatrix */]["help"]);
                }
                else if (header.firstChild && header.firstChild.textContent && header.firstChild.textContent.includes("NOTS")) {
                    header.firstChild.textContent = header.firstChild.textContent.replace(/NOTS/, __WEBPACK_IMPORTED_MODULE_1__TranslationMatrix_ts__["a" /* TranslationMatrix */]["notifications"]);
                }
                else if (header.firstChild && header.firstChild.textContent && header.firstChild.textContent.includes("Audio")) {
                    header.firstChild.textContent = header.firstChild.textContent.replace(/Audio/, __WEBPACK_IMPORTED_MODULE_1__TranslationMatrix_ts__["a" /* TranslationMatrix */]["audio"]);
                }
                else if (header.firstChild && header.firstChild.textContent && header.firstChild.textContent.includes("Logout")) {
                    header.firstChild.textContent = header.firstChild.textContent.replace(/Logout/, __WEBPACK_IMPORTED_MODULE_1__TranslationMatrix_ts__["a" /* TranslationMatrix */]["logout"]);
                }
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Translator;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export downloadFile */
/* unused harmony export createNode */
/* unused harmony export createSelectOption */
/* unused harmony export convertDurationToETA */
/* unused harmony export parseDuration */
/* unused harmony export createTextSpan */
/* unused harmony export createTextDiv */
/* unused harmony export createFinancialTextBox */
/* unused harmony export findInventoryAmount */
/* unused harmony export findBurnAmount */
/* unused harmony export CategorySort */
/* unused harmony export findCorrespondingPlanet */
/* unused harmony export parseBaseName */
/* unused harmony export parseInvName */
/* unused harmony export parsePlanetName */
/* unused harmony export getLocalStorage */
/* unused harmony export clearChildren */
/* unused harmony export setSettings */
/* unused harmony export XITWebRequest */
/* unused harmony export createMaterialElement */
/* unused harmony export createLink */
/* unused harmony export showBuffer */
/* unused harmony export changeValue */
/* harmony export (immutable) */ __webpack_exports__["a"] = genericCleanup;
/* unused harmony export genericUnhide */
/* unused harmony export targetedCleanup */
/* unused harmony export getBuffers */
/* unused harmony export getElementsByXPath */
/* unused harmony export sortTable */
/* unused harmony export createTable */
/* unused harmony export createToolTip */
/* unused harmony export makePopupSpacer */
/* unused harmony export createPopupInputRow */
/* unused harmony export createPopupCheckboxRow */
/* unused harmony export getValueOfPopupRow */
/* unused harmony export getCheckOfPopupRow */
/* unused harmony export createSmallButton */
/* unused harmony export createContractDict */
/* unused harmony export calculateBurn */
/* unused harmony export showWarningDialog */
/* unused harmony export drawLineChart */
/* unused harmony export drawPieChart */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Selector__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GameProperties__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Style__ = __webpack_require__(6);



function downloadFile(fileData, fileName, isJSON = true) {
    const blob = new Blob([isJSON ? JSON.stringify(fileData) : fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const urlElement = document.createElement("a");
    urlElement.setAttribute("download", fileName);
    urlElement.href = url;
    urlElement.setAttribute("target", "_blank");
    urlElement.click();
    URL.revokeObjectURL(url);
    return;
}
function createNode(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}
function createSelectOption(optionLabel, optionValue, rightAlign) {
    const option = document.createElement("option");
    option.value = optionValue;
    option.textContent = optionLabel;
    if (rightAlign) {
        option.style.direction = "rtl";
    }
    return option;
}
function convertDurationToETA(parsedSeconds) {
    const eta = new Date();
    const now = new Date();
    eta.setSeconds(eta.getSeconds() + parsedSeconds);
    const diffTime = Math.abs(eta.getTime() - now.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    let ret = eta.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (diffDays > 0) {
        ret += ` +${diffDays}d`;
    }
    return ret;
}
function parseDuration(duration) {
    const days = duration.match(/(\d+)\s*d/);
    const hours = duration.match(/(\d+)\s*h/);
    const minutes = duration.match(/(\d+)\s*m/);
    const seconds = duration.match(/(\d+)\s*s/);
    let parsedSeconds = 0;
    if (days) {
        parsedSeconds += parseInt(days[1]) * 86400;
    }
    if (hours) {
        parsedSeconds += parseInt(hours[1]) * 3600;
    }
    if (minutes) {
        parsedSeconds += parseInt(minutes[1]) * 60;
    }
    if (seconds) {
        parsedSeconds += parseInt(seconds[1]);
    }
    return parsedSeconds;
}
function createTextSpan(text, className = "prun-remove-js") {
    const newSpan = document.createElement("span");
    newSpan.classList.add(className);
    newSpan.textContent = text;
    return newSpan;
}
function createTextDiv(text, className = "prun-remove-js") {
    const newSpan = document.createElement("div");
    newSpan.classList.add(className);
    newSpan.textContent = text;
    return newSpan;
}
function createFinancialTextBox(primaryText, secondaryText, primaryTextColor, className = "prun-remove-js") {
    const box = document.createElement("div");
    box.classList.add(className);
    box.classList.add("fin-box");
    const primaryTextSpan = document.createElement("span");
    primaryTextSpan.style.fontSize = "12px";
    primaryTextSpan.style.lineHeight = "1.1";
    primaryTextSpan.style.color = primaryTextColor;
    primaryTextSpan.textContent = primaryText;
    box.appendChild(primaryTextSpan);
    const secondaryTextDiv = document.createElement("div");
    secondaryTextDiv.textContent = secondaryText;
    secondaryTextDiv.style.fontSize = "10px";
    secondaryTextDiv.style.lineHeight = "1.1";
    secondaryTextDiv.style.marginTop = "2px";
    secondaryTextDiv.style.color = "#999";
    box.appendChild(secondaryTextDiv);
    return box;
}
function findInventoryAmount(ticker, inventory) {
    for (var i = 0; i < inventory["Inventory"].length; i++) {
        if (inventory["Inventory"][i]["MaterialTicker"] == ticker) {
            return inventory["Inventory"][i]["MaterialAmount"];
        }
    }
    return 0;
}
function findBurnAmount(ticker, inventory) {
    for (var i = 0; i < inventory["WorkforceConsumption"].length; i++) {
        if (inventory["WorkforceConsumption"][i]["MaterialTicker"] == ticker) {
            return inventory["WorkforceConsumption"][i]["DailyAmount"];
        }
    }
    return 0;
}
function CategorySort(a, b) {
    if (!__WEBPACK_IMPORTED_MODULE_1__GameProperties__["a" /* MaterialNames */][a] || !__WEBPACK_IMPORTED_MODULE_1__GameProperties__["a" /* MaterialNames */][b]) {
        return 0;
    }
    return __WEBPACK_IMPORTED_MODULE_1__GameProperties__["a" /* MaterialNames */][a][1].localeCompare(__WEBPACK_IMPORTED_MODULE_1__GameProperties__["a" /* MaterialNames */][b][1]);
}
function findCorrespondingPlanet(planet, data, needBase) {
    if (!data || !planet) {
        return undefined;
    }
    for (var i = 0; i < data.length; i++) {
        if (planet && data[i]["PlanetNaturalId"] && data[i]["PlanetNaturalId"].toLowerCase() == planet.toLowerCase() && (!needBase || data[i]["type"] == "STORE")) {
            return data[i];
        }
        else if (planet && data[i]["PlanetName"] && data[i]["PlanetName"].toLowerCase() == planet.toLowerCase() && (!needBase || data[i]["type"] == "STORE")) {
            return data[i];
        }
        else if (planet && data[i]["PlanetNaturalId"] && __WEBPACK_IMPORTED_MODULE_1__GameProperties__["b" /* PlanetNames */][planet] && __WEBPACK_IMPORTED_MODULE_1__GameProperties__["b" /* PlanetNames */][planet].toLowerCase() == data[i]["PlanetNaturalId"].toLowerCase() && (!needBase || data[i]["type"] == "STORE")) {
            return data[i];
        }
    }
    return undefined;
}
function parseBaseName(text) {
    try {
        var match = text.match(/@ ([A-Z]{2}-[0-9]{3} [a-z]) Base/);
        if (match && match[1]) {
            return match[1].replace(" ", "");
        }
        match = text.match(/@ ([A-z ]*) - ([A-z ]*) Base/);
        if (match && match[1] && match[2]) {
            return match[2];
        }
        match = text.match(/@ ([A-z ]*) ([A-z]) Base/);
        if (match && match[1] && match[2] && __WEBPACK_IMPORTED_MODULE_1__GameProperties__["c" /* SystemNames */][match[1].toUpperCase()]) {
            return __WEBPACK_IMPORTED_MODULE_1__GameProperties__["c" /* SystemNames */][match[1].toUpperCase()] + match[2].toLowerCase();
        }
        match = text.match(/@ [A-Z]{2}-[0-9]{3} - ([A-z ]*) Base/);
        if (match && match[1]) {
            return match[1];
        }
        return null;
    }
    catch (TypeError) {
        return text;
    }
}
function parseInvName(text) {
    try {
        const match = text.split(" ");
        if (match && match[1]) {
            return match[1];
        }
        return null;
    }
    catch (TypeError) {
        return null;
    }
}
function parsePlanetName(text) {
    try {
        const match = text.match(/\((.*?)\)/);
        if (match && match[1]) {
            return match[1];
        }
        return null;
    }
    catch (TypeError) {
        return null;
    }
}
function getLocalStorage(storageName, callbackFunction, params) {
    try {
        browser.storage.local.get(storageName).then(function (result) {
            callbackFunction(result, params);
        });
    }
    catch (err) {
        chrome.storage.local.get([storageName], function (result) {
            callbackFunction(result, params);
        });
    }
}
function clearChildren(elem) {
    elem.textContent = "";
    while (elem.children[0]) {
        elem.removeChild(elem.children[0]);
    }
    return;
}
function setSettings(result) {
    try {
        browser.storage.local.set(result);
    }
    catch (err) {
        chrome.storage.local.set(result, function () {
        });
    }
    return;
}
function XITWebRequest(tile, parameters, callbackFunction, url, requestType = "GET", header, content) {
    var xhr = new XMLHttpRequest();
    xhr.ontimeout = function () {
        tile.textContent = "Error! Data Could Not Be Loaded! Timed Out!";
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            callbackFunction(tile, parameters, xhr.responseText);
        }
        return;
    };
    xhr.timeout = 10000;
    xhr.open(requestType, url, true);
    if (header) {
        xhr.setRequestHeader(header[0], header[1]);
    }
    if (content) {
        xhr.send(content);
    }
    else {
        xhr.send(null);
    }
    return;
}
function createMaterialElement(ticker, className = "prun-remove-js", amount = "none", text = false, small = false) {
    if (!__WEBPACK_IMPORTED_MODULE_1__GameProperties__["a" /* MaterialNames */][ticker] && ticker != "SHPT") {
        return null;
    }
    const name = (__WEBPACK_IMPORTED_MODULE_1__GameProperties__["a" /* MaterialNames */][ticker] || ["Shipment"])[0];
    const category = (__WEBPACK_IMPORTED_MODULE_1__GameProperties__["a" /* MaterialNames */][ticker] || [undefined, "shipment"])[1];
    const matText = createTextSpan(ticker, className);
    matText.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2__Style__["d" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].MatText));
    const matTextWrapper = document.createElement("div");
    matTextWrapper.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2__Style__["d" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].MatTextWrapper));
    matTextWrapper.appendChild(matText);
    const material = document.createElement("div");
    material.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2__Style__["d" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].MaterialElement));
    material.appendChild(matTextWrapper);
    material.style.background = __WEBPACK_IMPORTED_MODULE_2__Style__["a" /* CategoryColors */][category][0];
    material.style.color = __WEBPACK_IMPORTED_MODULE_2__Style__["a" /* CategoryColors */][category][1];
    material.title = name;
    material.addEventListener("click", function () {
        showBuffer("MAT " + ticker.toUpperCase());
    });
    const materialWrapper = document.createElement("div");
    materialWrapper.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2__Style__["d" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].MaterialWrapper));
    materialWrapper.appendChild(material);
    const materialWrapperWrapper = document.createElement("div");
    materialWrapperWrapper.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2__Style__["d" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].MaterialWrapperWrapper));
    materialWrapperWrapper.appendChild(materialWrapper);
    const outerLayer = document.createElement("div");
    outerLayer.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2__Style__["d" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].MaterialOuter));
    outerLayer.classList.add(className);
    outerLayer.appendChild(materialWrapperWrapper);
    if (amount && amount != "none") {
        const materialNumberWrapper = document.createElement("div");
        materialNumberWrapper.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2__Style__["d" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].MaterialNumberWrapper));
        materialWrapper.appendChild(materialNumberWrapper);
        const materialNumber = createTextDiv(amount, className);
        materialNumber.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2__Style__["d" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].MaterialNumber));
        materialNumberWrapper.appendChild(materialNumber);
    }
    if (text) {
        const textElemWrapper = document.createElement("span");
        textElemWrapper.classList.add(...Object(__WEBPACK_IMPORTED_MODULE_2__Style__["d" /* WithStyles */])(__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].MaterialNameText));
        const textElem = createTextSpan(name, className);
        textElemWrapper.appendChild(textElem);
        outerLayer.appendChild(textElemWrapper);
    }
    if (small) {
        materialWrapper.classList.add("mat-element-small");
        return materialWrapper;
    }
    else {
        materialWrapper.classList.add("mat-element-large");
    }
    return outerLayer;
}
function createLink(text, command) {
    const link = document.createElement("span");
    link.textContent = text;
    link.addEventListener("click", function () { showBuffer(command); });
    const linkDiv = document.createElement("div");
    linkDiv.classList.add("link");
    linkDiv.appendChild(link);
    return linkDiv;
}
function showBuffer(command) {
    const button = document.getElementById(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].NewBFRButton);
    if (button == null) {
        return false;
    }
    const addSubmitCommand = (input, cmd) => {
        changeValue(input, cmd);
        input.parentElement.parentElement.requestSubmit();
    };
    monitorOnElementCreated(__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].BufferTextField, (elem) => addSubmitCommand(elem, command));
    button.click();
    return true;
}
function changeValue(input, value) {
    var propDescriptor = Object.getOwnPropertyDescriptor(window["HTMLInputElement"].prototype, "value");
    if (propDescriptor == undefined) {
        return;
    }
    var nativeInputValueSetter = propDescriptor.set;
    if (nativeInputValueSetter == undefined) {
        return;
    }
    nativeInputValueSetter.call(input, value);
    var inputEvent = document.createEvent('Event');
    inputEvent.initEvent('input', true, true);
    input.dispatchEvent(inputEvent);
}
function monitorOnElementCreated(selector, callback, onlyOnce = true) {
    const getElementsFromNodes = (nodes) => (Array.from(nodes)).flatMap(node => node.nodeType === 3 ? null : Array.from(node.querySelectorAll(selector))).filter(item => item !== null);
    let onMutationsObserved = function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.addedNodes.length) {
                var elements = getElementsFromNodes(mutation.addedNodes);
                for (var i = 0, len = elements.length; i < len; i++) {
                    callback(elements[i]);
                    if (onlyOnce)
                        observer.disconnect();
                }
            }
        });
    };
    let containerSelector = 'body';
    let target = document.querySelector(containerSelector);
    if (!target) {
        return;
    }
    let config = { childList: true, subtree: true };
    let MutationObserver = window["MutationObserver"] || window["WebKitMutationObserver"];
    let observer = new MutationObserver(onMutationsObserved);
    observer.observe(target, config);
    return;
}
function genericCleanup(className = "prun-remove-js") {
    Array.from(document.getElementsByClassName(className)).forEach((elem) => {
        elem.parentNode && elem.parentNode.removeChild(elem);
        return;
    });
    return;
}
function genericUnhide(className = "prun-remove-js") {
    Array.from(document.getElementsByClassName(className + "-hidden")).forEach((elem) => {
        elem.style.display = "";
        elem.classList.remove(className + "-hidden");
        return;
    });
    return;
}
function targetedCleanup(className, element) {
    Array.from(element.getElementsByClassName(className)).forEach((elem) => {
        elem.parentNode && elem.parentNode.removeChild(elem);
        return;
    });
    return;
}
function getBuffers(bufferCode) {
    const nodes = document.evaluate(`//div[@class='${__WEBPACK_IMPORTED_MODULE_0__Selector__["a" /* Selector */].BufferHeader}'][starts-with(translate(., 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), '${bufferCode}')]/../..`, document, null, XPathResult.ANY_TYPE, null);
    var buffers = [];
    var node;
    while (node = nodes.iterateNext()) {
        buffers.push(node);
    }
    return buffers;
}
function getElementsByXPath(xpath) {
    const result = document.evaluate(xpath, document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null);
    const output = [];
    try {
        let node = result.iterateNext();
        while (node) {
            output.push(node);
            node = result.iterateNext();
        }
    }
    catch (e) {
    }
    return output;
}
function sortTable(table, column, sortType) {
    var sorter = [];
    if (table.children[1] == null) {
        return;
    }
    const rows = Array.from(table.children[1].children);
    for (var i = 0; i < rows.length; i++) {
        var item = rows[i].children[column];
        if (item == null || item.firstChild == null) {
            break;
        }
        sorter.push([item.firstChild.textContent, rows[i]]);
    }
    if (sortType == "alph") {
        sorter.sort(tableSortAlph);
    }
    sorter.forEach(item => {
        table.children[1].insertBefore(table.children[1].children[0], item[1]);
    });
}
function tableSortAlph(a, b) {
    return a[0].localeCompare(b[0]);
}
function createTable(tile, headers) {
    let table = document.createElement("table");
    tile.appendChild(table);
    const thead = document.createElement("thead");
    table.appendChild(thead);
    const headerRow = document.createElement("tr");
    thead.appendChild(headerRow);
    for (let title of headers) {
        const header = document.createElement("th");
        header.textContent = title;
        header.style.paddingTop = "0";
        headerRow.appendChild(header);
    }
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    return tbody;
}
function createToolTip(text, position) {
    const tooltip = document.createElement("span");
    tooltip.innerHTML = `<span data-tooltip="${text}" data-tooltip-position="${position}" class="kfU78EaaOVbQR2YM0eeGew==" style="float: revert;font-size: 12px;margin-top:-4px;">ⓘ</span>`;
    return tooltip.firstChild || tooltip;
}
function makePopupSpacer(tile, toRemove) {
    const spacer = document.createElement("div");
    spacer.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].Spacer);
    spacer.addEventListener("click", function () {
        tile.removeChild(toRemove);
        return;
    });
    return spacer;
}
function createPopupInputRow(label, text = "", tooltip = "") {
    const inputRow = document.createElement("div");
    inputRow.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].FormRow);
    const inputLabel = document.createElement("label");
    inputLabel.textContent = label;
    if (tooltip != "") {
        inputLabel.appendChild(createToolTip(tooltip, "right"));
    }
    inputLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].FormLabel);
    inputRow.appendChild(inputLabel);
    const inputInputDiv = document.createElement("div");
    inputInputDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].FormInput);
    inputRow.appendChild(inputInputDiv);
    const inputInput = document.createElement("input");
    inputInput.style.width = "80%";
    inputInputDiv.appendChild(inputInput);
    inputInput.value = text;
    return inputRow;
}
function createPopupCheckboxRow(label, enabled = false, tooltip = "") {
    const inputRow = document.createElement("div");
    inputRow.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].FormRow);
    const inputLabel = document.createElement("label");
    inputLabel.textContent = label;
    if (tooltip != "") {
        inputLabel.appendChild(createToolTip(tooltip, "right"));
    }
    inputLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].FormLabel);
    inputRow.appendChild(inputLabel);
    const inputInputDiv = document.createElement("div");
    inputInputDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].FormInput);
    inputRow.appendChild(inputInputDiv);
    const inputInput = document.createElement("input");
    inputInput.type = "checkbox";
    inputInputDiv.appendChild(inputInput);
    inputInput.checked = enabled;
    return inputRow;
}
function getValueOfPopupRow(row) {
    if (!row || !row.children[1] || !row.children[1].firstChild) {
        return "";
    }
    else {
        return row.children[1].firstChild.value || "";
    }
}
function getCheckOfPopupRow(row) {
    if (!row || !row.children[1] || !row.children[1].firstChild) {
        return false;
    }
    else {
        return row.children[1].firstChild.checked || false;
    }
}
function createSmallButton(label, clickFunction, parameters) {
    const button = document.createElement("button");
    button.textContent = label;
    button.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].SmallButton);
    button.addEventListener("click", function () { clickFunction(...parameters); });
    return button;
}
function createContractDict(contracts, contractdict) {
    for (let i = 0; i < contracts.length; i++) {
        const element = contracts[i];
        contractdict[element['localId']] = element;
    }
}
function calculateBurn(production, workforce, inventory) {
    const burnDict = {};
    if (production && production.lines) {
        production.lines.forEach(line => {
            const numLines = line.capacity;
            var hasRecurring = false;
            var totalDuration = 0;
            line.orders.forEach(order => {
                if (!order.started) {
                    hasRecurring = hasRecurring || order.recurring;
                }
            });
            line.orders.forEach(order => {
                if (!order.started && (!hasRecurring || order.recurring)) {
                    totalDuration += order.duration;
                }
            });
            totalDuration /= 86400000;
            line.orders.forEach(order => {
                if (!order.started && (!hasRecurring || order.recurring)) {
                    order.outputs.forEach(mat => {
                        if (burnDict[mat["MaterialTicker"]]) {
                            burnDict[mat["MaterialTicker"]]["DailyAmount"] += mat["Amount"] * numLines / totalDuration;
                        }
                        else {
                            burnDict[mat["MaterialTicker"]] = { "DailyAmount": mat["Amount"] * numLines / totalDuration, "Inventory": 0, "DaysLeft": 0, "Type": "output" };
                        }
                    });
                    order.inputs.forEach(mat => {
                        if (burnDict[mat["MaterialTicker"]]) {
                            burnDict[mat["MaterialTicker"]]["DailyAmount"] -= mat["Amount"] * numLines / totalDuration;
                            if (burnDict[mat["MaterialTicker"]]["Type"] == "output") {
                                burnDict[mat["MaterialTicker"]]["Type"] = "input";
                            }
                        }
                        else {
                            burnDict[mat["MaterialTicker"]] = { "DailyAmount": -mat["Amount"] * numLines / totalDuration, "Inventory": 0, "DaysLeft": 0, "Type": "input" };
                        }
                    });
                }
            });
        });
    }
    if (workforce && workforce.workforce) {
        workforce.workforce.forEach(tier => {
            if (tier.population > 1) {
                tier.needs.forEach(need => {
                    const ticker = need.material.ticker;
                    if (burnDict[ticker]) {
                        burnDict[ticker]["DailyAmount"] -= need.unitsPerInterval;
                        burnDict[ticker]["Type"] = "workforce";
                    }
                    else {
                        burnDict[ticker] = { "DailyAmount": -need.unitsPerInterval, "Inventory": 0, "DaysLeft": 0, "Type": "workforce" };
                    }
                });
            }
        });
    }
    if (inventory && inventory.items) {
        inventory.items.forEach(item => {
            if (burnDict[item.MaterialTicker]) {
                burnDict[item.MaterialTicker]["Inventory"] = item.Amount;
                if (item.Amount != 0) {
                    burnDict[item.MaterialTicker]["DaysLeft"] = burnDict[item.MaterialTicker]["DailyAmount"] > 0 ? 1000 : Math.floor(-item.Amount / burnDict[item.MaterialTicker]["DailyAmount"]);
                }
            }
        });
    }
    return burnDict;
}
function showWarningDialog(tile, message = "Are you sure?", confirmButtonText = "Confirm", callbackFunction, parameters) {
    const displayTile = tile.parentElement.parentElement.parentElement;
    const overlay = document.createElement("div");
    displayTile.appendChild(overlay);
    overlay.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].ActionOverlay);
    const centerInterface = document.createElement("div");
    overlay.appendChild(centerInterface);
    centerInterface.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].ActionCenterInterface);
    const confirm = document.createElement("span");
    centerInterface.appendChild(confirm);
    confirm.textContent = "Confirmation Required";
    confirm.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].ActionConfirm);
    const confirmMessage = document.createElement("span");
    centerInterface.appendChild(confirmMessage);
    confirmMessage.textContent = message;
    confirmMessage.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].ActionConfirmMessage);
    const buttonDiv = document.createElement("div");
    centerInterface.appendChild(buttonDiv);
    buttonDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].ActionButtons);
    const cancelButton = document.createElement("button");
    cancelButton.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].Button);
    cancelButton.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].ButtonNeutral);
    cancelButton.textContent = "Cancel";
    buttonDiv.appendChild(cancelButton);
    const confirmButton = document.createElement("button");
    confirmButton.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].Button);
    confirmButton.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].ButtonDanger);
    confirmButton.textContent = confirmButtonText;
    buttonDiv.appendChild(confirmButton);
    cancelButton.addEventListener("click", function () {
        displayTile.removeChild(overlay);
        return;
    });
    confirmButton.addEventListener("click", function () {
        displayTile.removeChild(overlay);
        if (parameters) {
            callbackFunction(parameters);
        }
        else {
            callbackFunction();
        }
        return;
    });
    return;
}
function drawLineChart(xData, yData, xSize, ySize, xLabel, yLabel, lineColor, isDates, currencySymbol) {
    const canvas = document.createElement("canvas");
    canvas.height = ySize;
    canvas.width = xSize;
    const context = canvas.getContext("2d");
    if (!context) {
        return null;
    }
    const minX = Math.min(...xData);
    const maxX = Math.max(...xData);
    const minY = Math.min(...yData);
    const maxY = Math.max(...yData);
    const zeroX = (xLabel ? 25 : 0) + context.measureText((maxY).toLocaleString(undefined, { "maximumFractionDigits": 0 })).width;
    const zeroY = yLabel ? ySize - 23 : ySize;
    if (xLabel) {
        const xLabelInfo = context.measureText(xLabel);
        context.font = "12px Droid Sans";
        context.fillStyle = "#eee";
        context.fillText(xLabel, xSize / 2 + zeroX / 2 - xLabelInfo.width / 2, ySize);
    }
    if (yLabel) {
        context.save();
        context.font = "12px Droid Sans";
        context.fillStyle = "#eee";
        context.translate(10, ySize / 2 + 10);
        context.rotate(-Math.PI / 2);
        context.fillText(yLabel, 0, 0);
        context.restore();
    }
    const scaleX = (xSize - zeroX) / (maxX - minX);
    const scaleY = (zeroY) / (maxY - minY);
    for (var i = 0; i < xData.length - 1; i++) {
        context.beginPath();
        context.moveTo((xData[i] - minX) * scaleX + zeroX, zeroY - (yData[i] - minY) * scaleY);
        context.lineTo((xData[i + 1] - minX) * scaleX + zeroX, zeroY - (yData[i + 1] - minY) * scaleY);
        context.strokeStyle = lineColor ? lineColor : "#f7a600";
        context.stroke();
    }
    context.beginPath();
    context.strokeStyle = "#bbb";
    context.moveTo(zeroX, zeroY);
    context.lineTo(xSize, zeroY);
    context.stroke();
    context.beginPath();
    context.moveTo(zeroX, zeroY);
    context.lineTo(zeroX, 0);
    context.stroke();
    for (i = 0; i < 10; i++) {
        const text = isDates ? (new Date((maxX - minX) * i / 10 + minX)).toLocaleDateString(undefined, { month: "2-digit", day: "2-digit" }) : ((maxX - minX) * i / 10 + minX).toLocaleString(undefined, { maximumFractionDigits: 2 });
        context.font = "10px Droid Sans";
        context.fillStyle = "#999";
        context.fillText(text, (xSize - zeroX) * i / 10 + zeroX, ySize - 12);
    }
    for (i = 0; i <= 5; i++) {
        var value = (maxY - minY) * i / 5 + minY;
        value = Math.round(value / Math.pow(10, Math.floor(Math.log10(value)) - 3)) * Math.pow(10, Math.floor(Math.log10(value)) - 3);
        const text = (currencySymbol ? currencySymbol : "") + (value).toLocaleString(undefined, { "maximumFractionDigits": 0 });
        const textInfo = context.measureText(text);
        context.font = "10px Droid Sans";
        context.fillStyle = "#999";
        context.fillText(text, zeroX - textInfo.width - 2, -(zeroY - 8) * i / 5 + zeroY);
    }
    return canvas;
}
function drawPieChart(data, size, text, colors) {
    const pieSize = size / 2 - 12;
    const centerX = size * 1.5;
    const centerY = size / 2 + 12;
    var angle = 0;
    var sum = 0;
    data.forEach(point => {
        sum += point;
    });
    const canvas = document.createElement("canvas");
    canvas.height = size + 24;
    canvas.width = size * 3;
    const context = canvas.getContext("2d");
    if (!context) {
        return null;
    }
    for (var i = 0; i < data.length; i++) {
        const pieAngle = data[i] / sum * 2 * Math.PI;
        context.beginPath();
        context.arc(centerX, centerY, pieSize, angle, angle + pieAngle);
        context.stroke();
        angle += pieAngle;
        context.lineTo(centerX, centerY);
        if (colors) {
            context.fillStyle = colors[i] || "#00ff00";
        }
        else {
            context.fillStyle = i == data.length - 1 && data.length % __WEBPACK_IMPORTED_MODULE_2__Style__["b" /* DefaultColors */].length == 1 && data.length > 1 ? __WEBPACK_IMPORTED_MODULE_2__Style__["b" /* DefaultColors */][1] : __WEBPACK_IMPORTED_MODULE_2__Style__["b" /* DefaultColors */][i % __WEBPACK_IMPORTED_MODULE_2__Style__["b" /* DefaultColors */].length];
        }
        context.fill();
    }
    if (!text) {
        return canvas;
    }
    angle = 0;
    var minX = centerX - pieSize;
    var maxX = centerX + pieSize;
    for (var i = 0; i < data.length; i++) {
        const pieAngle = data[i] / sum * 2 * Math.PI;
        const percent = " - " + (data[i] / sum * 100).toLocaleString(undefined, { "maximumFractionDigits": 0 }) + "%";
        const textInfo = context.measureText(text[i] + percent);
        if (pieAngle < 0.3 && data.length > 5) {
            continue;
        }
        var startX = centerX + Math.cos(angle + pieAngle / 2) * size / 2;
        var startY = centerY + Math.sin(angle + pieAngle / 2) * size / 2 + 4;
        if (startX - textInfo.width < minX) {
            minX = startX - textInfo.width;
        }
        else if (startX + textInfo.width > maxX) {
            maxX = startX + textInfo.width;
        }
        if (angle + pieAngle / 2 > Math.PI / 2 && angle + pieAngle / 2 < Math.PI * 3 / 2) {
            startX -= textInfo.width;
        }
        context.font = "12px Droid Sans";
        context.fillStyle = "#eee";
        context.fillText(text[i] + percent, startX, startY);
        angle += pieAngle;
    }
    canvas.style.marginLeft = (minX > 0 ? -minX + 5 : 5).toString() + "px";
    canvas.style.marginRight = (maxX - 2 * size + 5).toString() + "px";
    return canvas;
}
class Popup {
    constructor(tile, name) {
        this.rows = [];
        this.tile = tile;
        this.overlapDiv = document.createElement("div");
        this.overlapDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].OverlappingDiv);
        const greyStripes = document.createElement("div");
        greyStripes.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].GreyStripes);
        this.overlapDiv.appendChild(greyStripes);
        tile.insertBefore(this.overlapDiv, tile.firstChild);
        greyStripes.appendChild(makePopupSpacer(tile, this.overlapDiv));
        const popupInterfaceWrapper = document.createElement("div");
        popupInterfaceWrapper.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].CenterInterface);
        greyStripes.appendChild(popupInterfaceWrapper);
        const popupInterface = document.createElement("div");
        popupInterface.classList.add("DraftConditionEditor__form___fF72bJM");
        popupInterfaceWrapper.appendChild(popupInterface);
        const header = document.createElement("h3");
        header.appendChild(document.createTextNode(name));
        header.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].SidebarSectionHead);
        popupInterface.appendChild(header);
        header.style.margin = "0.5em 0 0.5em";
        this.form = document.createElement("div");
        popupInterface.appendChild(this.form);
        greyStripes.appendChild(makePopupSpacer(tile, this.overlapDiv));
    }
    addPopupRow(rowType, label, inputText, tooltip, callback, params) {
        const newRow = new PopupRow(rowType, label, inputText, tooltip, callback, params);
        this.rows.push(newRow);
        this.form.appendChild(newRow.row);
    }
    removePopupRow(rowIndex) {
        const toDelete = this.rows.splice(rowIndex, 1)[0];
        this.form.removeChild(toDelete.row);
    }
    getRowByName(name) {
        var selectedRow;
        this.rows.forEach(row => {
            if (row.rowLabel == name) {
                selectedRow = row;
                return;
            }
        });
        return selectedRow;
    }
    destroy() {
        this.tile.removeChild(this.overlapDiv);
    }
    moveRowToBottom(rowIndex) {
        const movingRow = this.rows[rowIndex];
        this.removePopupRow(rowIndex);
        this.rows.push(movingRow);
        this.form.appendChild(movingRow.row);
    }
}
/* unused harmony export Popup */

class PopupRow {
    constructor(rowType, label, inputText, tooltip, callback, params) {
        this.rowType = rowType;
        this.rowLabel = label;
        if (rowType == "text" || rowType == "date" || rowType == "number") {
            this.row = document.createElement("div");
            this.row.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].FormRow);
            const rowLabel = document.createElement("label");
            rowLabel.textContent = label;
            if (tooltip) {
                rowLabel.appendChild(createToolTip(tooltip, "right"));
            }
            rowLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].FormLabel);
            this.row.appendChild(rowLabel);
            const inputInputDiv = document.createElement("div");
            inputInputDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].FormInput);
            this.row.appendChild(inputInputDiv);
            this.rowInput = document.createElement("input");
            inputInputDiv.appendChild(this.rowInput);
            if (inputText) {
                this.rowInput.value = inputText;
            }
            if (rowType == "date") {
                this.rowInput.type = "datetime-local";
            }
            else if (rowType == "number") {
                this.rowInput.type = "number";
            }
            this.rowInput.style.width = "80%";
            if (callback) {
                const rowInput = this.rowInput;
                this.rowInput.addEventListener("input", function () {
                    callback(rowInput.value, params);
                });
            }
        }
        else if (rowType == "dropdown") {
            this.row = document.createElement("div");
            this.row.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].FormRow);
            const rowLabel = document.createElement("label");
            rowLabel.textContent = label;
            if (tooltip) {
                rowLabel.appendChild(createToolTip(tooltip, "right"));
            }
            rowLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].FormLabel);
            this.row.appendChild(rowLabel);
            const inputDiv = document.createElement("div");
            inputDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].FormInput);
            this.row.appendChild(inputDiv);
            this.rowInput = document.createElement("select");
            this.rowInput.classList.add("select");
            this.rowInput.style.width = "80%";
            this.rowInput.style.textAlignLast = "right";
            this.rowInput.name = "popup-dropdown" + Math.floor(Math.random() * 10000).toString();
            this.rowInput.id = "popup-dropdown" + Math.floor(Math.random() * 10000).toString();
            const selectedIndex = inputText[inputText.length - 1];
            inputText = inputText.slice(0, -1);
            inputText.forEach(text => {
                this.rowInput.appendChild(createSelectOption(text, text));
            });
            if (this.rowInput.children[selectedIndex]) {
                this.rowInput.children[selectedIndex].selected = true;
                this.rowInput.selectedIndex = selectedIndex;
            }
            inputDiv.appendChild(this.rowInput);
            if (callback) {
                const rowInput = this.rowInput;
                this.rowInput.addEventListener("change", function () {
                    callback(rowInput.selectedOptions[0].value, params);
                });
            }
        }
        else if (rowType == "button") {
            this.row = document.createElement("div");
            this.row.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].FormSaveRow);
            const rowLabel = document.createElement("label");
            rowLabel.textContent = label;
            rowLabel.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].FormSaveLabel);
            this.row.appendChild(rowLabel);
            const inputDiv = document.createElement("div");
            inputDiv.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].FormSaveInput);
            this.row.appendChild(inputDiv);
            this.rowInput = document.createElement("button");
            this.rowInput.textContent = inputText;
            this.rowInput.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].Button);
            this.rowInput.classList.add(...__WEBPACK_IMPORTED_MODULE_2__Style__["c" /* Style */].ButtonPrimary);
            inputDiv.appendChild(this.rowInput);
            if (callback) {
                this.rowInput.addEventListener("click", function () {
                    callback(params);
                });
            }
        }
    }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Selector = {
    LMCommodityAdText: "div[class~='CommodityAd__text___xJQmJNa']",
    LMCommodityAdPriceSpan: "div[class~='CommodityAd__text___xJQmJNa'] > span",
    ProdItem: "OrderSlot__container___YFyk8a7",
    ProdQueueTable: "table[class~='ProductionQueue__table___jHQGyUI']",
    BufferHeader: 'TileFrame__cmd___ScBYW0n type__type-very-small___HaVMqrE',
    Sidebar: "div#TOUR_TARGET_SIDEBAR_RIGHT",
    LMPostForm: "form[class~='LocalMarketPost__form___CAVPdDE']",
    WorkforceConsumptionTable: "div[class~='TileFrame__title___xRcZCPx']",
    XITTile: "div[class~='ScrollView__view___ovf59Tk'] > div",
    BufferTitle: "div[class~='TileFrame__title___xRcZCPx']",
    Notification: "div[class~='AlertListItem__content___XYebR1E']",
    ProdQueue: "div[class~='SiteProductionLines__column____s3cTk7']",
    BufferPanel: "div[class~='ScrollView__view___ovf59Tk']",
    NewBFRButton: "TOUR_TARGET_BUTTON_BUFFER_NEW",
    WholeWindow: "#container",
    BufferTextField: "input[class~='PanelSelector__input___wUstHrO']",
    BufferList: "#container > div > div > div > div:nth-child(3)",
    ScreenControls: "TOUR_TARGET_SCREEN_CONTROLS",
    LeftSidebar: "TOUR_TARGET_SIDEBAR_LEFT_02",
    BufferArea: "div[class~='Tile__selector___HYMmNEO']",
    ScreenName: "span[class~='ScreenControls__currentScreenName___I2sIYag']",
    MaterialIcon: "GridItemView__image___yMoKOZV",
    ChatLink: "span[class~='Link__link___fa4mmMA']",
    InventoryName: "span[class~='Link__link___fa4mmMA']",
    FullMaterialIcon: "div[class~='GridItemView__container___xP2uJz8']",
    Inventory: "div[class~='InventoryView__grid___UyRQSX8']",
    MaterialText: "span[class~='ColoredIcon__label___OU1I4oP']",
    InventorySortOptions: "div[class~='InventorySortControls__controls___qk5heAZ']",
    ChatArea: "div[class~='Channel__messageAndUserList___NCgQAtW']",
    MaterialQuantity: "div[class~='MaterialIcon__indicator___SHwlndJ']",
    HeaderRow: "div[class~='FormComponent__containerPassive___FrBdyGU']",
    FormInputRow: "div[class~='FormComponent__containerActive___HZv9jHd']",
    ContDForm: "div[class~='DraftConditionEditor__form___fF72bJM'] > form",
    ContDConditionsTable: "div[class~='Draft__conditions___bcIUndH'] > table > tbody",
    ContDFormLabel: "label[class~='FormComponent__label___aQB15eB']",
    ContDFormRowSpacer: "div[class~='DynamicInput__dynamic___Cd4Gkbz']",
    ContDFormInput: "div[class~='FormComponent__input___ZnI8mYi']",
    SidebarContract: "div[class~='Sidebar__contract___J0gmlzN']",
    SidebarContractId: "span[class~='Sidebar__contractId___Lg85TRZ']",
    BuildingList: "div[class~='SectionList__container___EtUzWyi']",
    Divider: "div[class~='SectionList__divider___cwWO45v']",
    HeadItem: "span[class~='HeadItem__label___tlXE4qZ']"
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Selector;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CurrencySymbols = {
    "CIS": "₡",
    "AIC": "₳",
    "NCC": "₦",
    "ICA": "ǂ",
    "ECD": "€",
};
/* unused harmony export CurrencySymbols */

const FactionHeaders = {
    "Castillo-Ito": "CI",
    "Insitor": "IC",
    "Antares": "AI",
    "NEO Charter": "NC"
};
/* unused harmony export FactionHeaders */

const RatingColors = {
    "P": "#1b6b9c",
    "U": "#8b211e",
    "F": "#e26c37",
    "E": "#e7782b",
    "D": "#e87d28",
    "C": "#ed891c",
    "B": "#f19510",
    "A": "#f6a204"
};
/* unused harmony export RatingColors */

const FriendlyNames = {
    "LocalMarketAds": "LM Unit Prices",
    "OrderETAs": "Order ETAs",
    "FlightETAs": "Flight Planning ETAs",
    "ShippingAds": "LM Shipping Rates",
    "PostLM": "LM Posting Unit Price",
    "ContractDrafts": "CONTD Unit Prices",
    "QueueLoad": "Queue Percent Display",
    "ConsumableTimers": "Workforce Consumable Burn",
    "FleetETAs": "Fleet ETAs",
    "Notifications": "Notifications",
    "ScreenUnpack": "Screen Unpack",
    "ImageCreator": "Chat Image Creator",
    "InventoryOrganizer": "Inventory Sorting",
    "CommandCorrecter": "Command Correcter",
    "CalculatorButton": "Calculator Button",
    "Sidebar": "Sidebar",
    "HeaderMinimizer": "Minimize Headers (Master)",
    "PendingContracts": "Pending Contracts",
    "CompactUI": "Compact UI"
};
/* unused harmony export FriendlyNames */

const SortingTriangleHTML = `
<div title=""><svg aria-hidden="true" width="10" height="10" role="img" version="1.1" fill="currentcolor" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="vertical-align: middle;"><g><path d="M.88681 1.097752l12.13774 21.02318L25.422964 1.105446z"></path></g></svg></div>`;
/* unused harmony export SortingTriangleHTML */

const PlanetCommands = ["ADM", "BSC", "COGC", "COGCPEX", "COGCU", "FLTP", "LR", "LMP", "LM", "PLI", "POPI", "POPR", "PPS", "SHY", "WAR", "BS"];
/* unused harmony export PlanetCommands */

const SystemNames = {
    "ARCLIGHT": "AM-783",
    "FORGE-KEEP": "FK-371",
    "MOUNT OLYMPUS": "HM-049",
    "GATEWAY": "HM-223",
    "NEO EDEN": "JS-299",
    "EBISU": "JS-952",
    "BASTABLON": "KW-020",
    "DOLZENA": "LG-418",
    "TRINITY": "OF-259",
    "MORIA": "OT-580",
    "OUTER HEAVEN": "PG-899",
    "AURUM": "QJ-650",
    "ACETARES": "QJ-684",
    "HUBUR": "TD-203",
    "HOTEI": "UV-135",
    "BENTEN": "UV-351",
    "DAIKOKU": "UV-796",
    "HORTUS": "VH-331",
    "MIDWAY": "WB-675",
    "ANTARES III": "ZV-194",
    "ANTARES I": "ZV-307",
    "ANTARES II": "ZV-759"
};
/* harmony export (immutable) */ __webpack_exports__["c"] = SystemNames;

const PlanetNames = {
    "LEMURIA": "AJ-768a",
    "GALLUS": "AM-783b",
    "EMENTIOR": "AM-783c",
    "TYPHON": "AU-522b",
    "NOVA HONSHU": "BS-788c",
    "TACOTOPIA": "CB-045b",
    "PYRGOS": "CH-771a",
    "TALOSIA": "DC-823b",
    "ORM": "DW-456g",
    "MANIFOLD": "EL-179b",
    "NOVA UNALASKA": "EZ-476b",
    "TOKTU": "FK-037f",
    "LA FORGE": "FK-371b",
    "BOUCHER": "FK-794b",
    "VAULT": "GC-645b",
    "CHU": "GY-110c",
    "POSEIDON": "HM-049b",
    "APOTHECARY": "IA-603b",
    "ELECTRONICA": "IY-028c",
    "NEMESIS": "JS-299a",
    "GIBSON": "JS-952c",
    "AUSTRALIA": "KI-446a",
    "DEMETER": "KI-446b",
    "HERMES": "KI-448b",
    "ROCK": "KQ-966b",
    "MILLIWAYS": "KW-020c",
    "GIEDI PRIME": "KW-358b",
    "ETHERWIND": "KW-688c",
    "KINZA": "LG-418b",
    "PLANET MC PLANETFACE": "LG-913e",
    "ARATORA": "LS-231b",
    "GRIFFONSTONE": "LS-300c",
    "JURA": "OF-259d",
    "BERTHIER": "OF-375b",
    "ADALINA": "OF-375c",
    "DANAKIL": "OT-442b",
    "IIRON": "OT-580a",
    "MONTEM": "OT-580b",
    "VALLIS": "OT-580c",
    "PALLADA": "OT-580d",
    "PRISM": "OT-889a",
    "JEETIYU": "OT-889b",
    "SALADIN": "PG-899b",
    "NASCENT": "QJ-149c",
    "ELON": "QJ-650c",
    "LOM PALANKA": "QJ-684a",
    "ACELAND": "QJ-684b",
    "CIRCA": "QQ-001a",
    "CIRCE": "QQ-001b",
    "CELEBDIL": "QQ-645b",
    "MALAHAT": "RC-040b",
    "IRONFORGE": "RC-040c",
    "ICE STATION ALPHA": "SE-110c",
    "SHEOL": "TD-203b",
    "RHAZES": "TD-228b",
    "ASBESTOS LEAD ASBESTOS": "UV-072c",
    "KATOA": "UV-351a",
    "YANNICK": "UV-351b",
    "UMBRA": "UV-351c",
    "BIOGENESIS": "UV-351d",
    "PROXION": "UV-796b",
    "PHANTASM": "VH-043a",
    "PROMITOR": "VH-331a",
    "HELION PRIME": "VH-331d",
    "ODYSSEUS": "VH-331f",
    "AVALON": "VH-331g",
    "HYDRON": "VH-331i",
    "GASWORLD": "WB-675i",
    "MIMAR": "WC-702b",
    "MAGUS": "XD-354b",
    "UPONOR": "XH-329a",
    "LIBERTAS": "XH-594a",
    "KIRUNA": "XH-594b",
    "CORTEZ": "XH-594c",
    "KUB": "YI-059f",
    "HARPINA": "YI-209h",
    "ARCADIA": "YI-683c",
    "VERDANT": "YI-715b",
    "NORWICK": "YK-649b",
    "NIKE": "ZV-194a",
    "HEPHAESTUS": "ZV-307c",
    "PHOBOS": "ZV-307d",
    "VULCAN": "ZV-759b",
    "DEIMOS": "ZV-759c",
    "HARMONIA": "ZV-896b"
};
/* harmony export (immutable) */ __webpack_exports__["b"] = PlanetNames;

const MaterialNames = {
    "AAR": ["Antenna Array", "electronic devices"],
    "ABH": ["Advanced Bulkhead", "construction prefabs"],
    "ACS": ["Automated Cooling System", "electronic systems"],
    "ADE": ["Advanced Deck Elements", "construction prefabs"],
    "ADR": ["Auto-Doc", "medical equipment"],
    "ADS": ["Audio Distribution System", "electronic systems"],
    "AEF": ["Aerostat Foundation", "construction parts"],
    "AEN": ["Advanced STL Engine", "ship engines"],
    "AFP": ["Advanced Fuel Pump", "ship engines"],
    "AFR": ["Advanced Fuel Rod", "ship engines"],
    "AGS": ["Advanced High-G Seats", "ship parts"],
    "AHP": ["Advanced Hull Plate", "ship parts"],
    "AIR": ["Air Scrubber", "construction parts"],
    "AL": ["Aluminium", "metals"],
    "ALE": ["Stellar Pale Ale", "consumables (luxury)"],
    "ALG": ["Protein-Rich Algae", "agricultural products"],
    "ALO": ["Aluminium Ore", "ores"],
    "AMM": ["Ammonia", "gases"],
    "ANZ": ["Advanced Nozzle", "ship engines"],
    "APT": ["Advanced Thermal Protection Tile", "ship shields"],
    "AR": ["Argon", "gases"],
    "ARP": ["Advanced Anti-rad Plate", "ship shields"],
    "ASE": ["Advanced Structural Elements", "construction prefabs"],
    "AST": ["Alpha-Stabilized Titanium", "alloys"],
    "ATA": ["Advanced Transparent Aperture", "construction prefabs"],
    "ATP": ["Advanced Thermal Protection Material", "ship parts"],
    "AU": ["Gold", "metals"],
    "AUO": ["Gold Ore", "ores"],
    "AWF": ["Active Water Filter", "electronic devices"],
    "AWH": ["Advanced Whipple Shielding", "ship shields"],
    "BAC": ["Helpful Bacteria", "chemicals"],
    "BAI": ["Basic AI Framework", "software components"],
    "BBH": ["Basic Bulkhead", "construction prefabs"],
    "BCO": ["Budget Connectors", "electronic pieces"],
    "BDE": ["Basic Deck Elements", "construction prefabs"],
    "BE": ["Beryllium", "elements"],
    "BEA": ["Protein-Rich Beans", "agricultural products"],
    "BER": ["Beryl Crystals", "minerals"],
    "BFP": ["Basic Fuel Pump", "ship engines"],
    "BFR": ["Basic Fuel Rod", "ship engines"],
    "BGC": ["Shielded Connectors", "electronic pieces"],
    "BGO": ["Blue Gold", "alloys"],
    "BGS": ["Basic High-G Seats", "ship parts"],
    "BHP": ["Basic Hull Plate", "ship parts"],
    "BID": ["Full-Body Interaction Device", "electronic devices"],
    "BL": ["Breathable Liquid", "chemicals"],
    "BLE": ["Desaturation Agent", "chemicals"],
    "BMF": ["Basic Mainframe", "electronic devices"],
    "BND": ["Bandages", "medical equipment"],
    "BOR": ["Boron Crystals", "minerals"],
    "BOS": ["Borosilicate", "alloys"],
    "BPT": ["Basic Thermal Protection Tile", "ship shields"],
    "BR1": ["Command Bridge MK1", "unit prefabs"],
    "BR2": ["Command Bridge MK2", "unit prefabs"],
    "BRM": ["Bioreactive Minerals", "minerals"],
    "BRO": ["Bronze", "alloys"],
    "BRP": ["Basic Anti-rad Plate", "ship shields"],
    "BRS": ["Short-distance Command Bridge", "unit prefabs"],
    "BSC": ["Body Scanner", "electronic devices"],
    "BSE": ["Basic Structural Elements", "construction prefabs"],
    "BTA": ["Basic Transparent Aperture", "construction prefabs"],
    "BTS": ["Bacterial Tungsten Solution", "liquids"],
    "BWH": ["Basic Whipple Shielding", "ship shields"],
    "BWS": ["Basic Workstation", "electronic devices"],
    "C": ["Carbon", "elements"],
    "CA": ["Calcium", "elements"],
    "CAF": ["Caffeinated Beans", "agricultural products"],
    "CAP": ["Electric Field Capacitor", "electronic pieces"],
    "CBL": ["Large Capacitor Bank", "energy systems"],
    "CBM": ["Medium Capacitor Bank", "energy systems"],
    "CBS": ["Small Capacitor Bank", "energy systems"],
    "CC": ["Climate Controller", "electronic systems"],
    "CCD": ["Crowd Control Drone", "drones"],
    "CD": ["Capacitive Display", "electronic parts"],
    "CF": ["Ceramic Fabric", "textiles"],
    "CHA": ["Combustion Chamber", "ship engines"],
    "CL": ["Chlorine", "elements"],
    "CLI": ["Caliche Rock", "minerals"],
    "CMK": ["", "construction materials"],
    "COF": ["Caffeinated Infusion", "consumables (luxury)"],
    "COM": ["Communication System", "electronic systems"],
    "COT": ["Cotton Fabric", "textiles"],
    "CQL": ["Crew Quarters (Large)", "unit prefabs"],
    "CQM": ["Crew Quarters (Medium)", "unit prefabs"],
    "CQS": ["Crew Quarters (Small)", "unit prefabs"],
    "CQT": ["Crew Quarters (Tiny)", "unit prefabs"],
    "CRU": ["Cryogenic Unit", "electronic systems"],
    "CST": ["Cryogenic Stabilizer", "chemicals"],
    "CTF": ["Ceramic-Tungsten Fabric", "textiles"],
    "CU": ["Copper", "metals"],
    "CUO": ["Copper Ore", "ores"],
    "DA": ["Data Analyzer", "software tools"],
    "DCH": ["Drone Chassis", "drones"],
    "DCL": ["Durable Casing L", "plastics"],
    "DCM": ["Durable Casing M", "plastics"],
    "DCS": ["Durable Casing S", "plastics"],
    "DD": ["Distributed Database", "software tools"],
    "DDT": ["DDT Plant Agent", "chemicals"],
    "DEC": ["Decorative Elements", "construction parts"],
    "DIS": ["Information Display", "electronic parts"],
    "DOU": ["Drone Operations Unit", "unit prefabs"],
    "DRF": ["Drone Frame", "drones"],
    "DV": ["Data Visualizer", "software tools"],
    "DW": ["Drinking Water", "consumables (basic)"],
    "EDC": ["Entertainment Data Core", "software tools"],
    "EES": ["Enriched Einsteinium", "chemicals"],
    "ENG": ["Standard STL Engine", "ship engines"],
    "EPO": ["Epoxy Resin", "construction materials"],
    "ES": ["Einsteinium", "elements"],
    "ETC": ["Enriched Technetium", "chemicals"],
    "EXO": ["Exoskeleton Work Suit", "consumables (basic)"],
    "F": ["Fluorine", "gases"],
    "FAL": ["Ferrominium", "alloys"],
    "FAN": ["Active Cooling Device", "electronic parts"],
    "FC": ["Flow Control Device", "construction parts"],
    "FE": ["Iron", "metals"],
    "FEO": ["Iron Ore", "ores"],
    "FET": ["Ferro-Titanium", "alloys"],
    "FF": ["FTL Fuel", "fuels"],
    "FFC": ["FTL Field Controller", "electronic systems"],
    "FIM": ["Flavoured Insta-Meal", "consumables (basic)"],
    "FIR": ["Fission Reactor", "ship engines"],
    "FLO": ["Floating Tank", "construction parts"],
    "FLP": ["Fluid Piping", "construction parts"],
    "FLX": ["Flux", "chemicals"],
    "FOD": ["All-Purpose Fodder", "agricultural products"],
    "FSE": ["Fuel-saving STL Engine", "ship engines"],
    "FUN": ["Entertainment Unit", "unit prefabs"],
    "GAL": ["Galerite Rock", "minerals"],
    "GC": ["Cylindrical Gas Container", "construction parts"],
    "GCH": ["Glass Combustion Chamber", "ship engines"],
    "GEN": ["Glass-based STL Engine", "ship engines"],
    "GIN": ["Einsteinium-Infused Gin", "consumables (luxury)"],
    "GL": ["Glass", "construction materials"],
    "GNZ": ["Glass Nozzle", "ship engines"],
    "GRA": ["Wine-Quality Grapes", "agricultural products"],
    "GRN": ["High-Carb Grains", "agricultural products"],
    "GV": ["Gas Vent", "construction parts"],
    "H": ["Hydrogen", "gases"],
    "H2O": ["Water", "liquids"],
    "HAB": ["Habitat Unit", "unit prefabs"],
    "HAL": ["Halite Crystals", "minerals"],
    "HCC": ["High-Capacity Connectors", "electronic pieces"],
    "HCP": ["Hydrocarbon Plants", "agricultural products"],
    "HD": ["Holographic Display", "electronic devices"],
    "HE": ["Helium", "gases"],
    "HE3": ["Helium-3 Isotope", "gases"],
    "HER": ["Spicy Herbs", "agricultural products"],
    "HEX": ["Heliotrope Extract", "liquids"],
    "HHP": ["Hardened Hull Plate", "ship parts"],
    "HMS": ["HazMat Work Suit", "consumables (basic)"],
    "HNZ": ["Hyperthrust Nozzle", "ship engines"],
    "HOG": ["Holographic Glasses", "electronic devices"],
    "HOP": ["Flowery Hops", "agricultural products"],
    "HPC": ["Handheld Personal Console", "electronic devices"],
    "HPR": ["High-power FTL Reactor", "ship engines"],
    "HSE": ["Hardened Structural Elements", "construction prefabs"],
    "HSS": ["Smart Space Suit", "consumables (basic)"],
    "HTE": ["Hyperthrust STL Engine", "ship engines"],
    "HYR": ["Hyper-power Reactor", "ship engines"],
    "I": ["Iodine", "elements"],
    "IDC": ["Information Data Core", "software systems"],
    "IMM": ["Information Management System", "software systems"],
    "IND": ["Indigo Colorant", "chemicals"],
    "INS": ["InsuFoam", "construction materials"],
    "JUI": ["Sedative Substance", "chemicals"],
    "KOM": ["Kombucha", "consumables (luxury)"],
    "KV": ["Kevlar Fabric", "textiles"],
    "LBH": ["Lightweight Bulkhead", "construction prefabs"],
    "LC": ["AI-Assisted Lab Coat", "consumables (basic)"],
    "LCB": ["Large Cargo Bay Kit", "ship kits"],
    "LCR": ["Liquid Crystals", "chemicals"],
    "LD": ["Local Database", "software components"],
    "LDE": ["Lightweight Deck Elements", "construction prefabs"],
    "LDI": ["Laser Diodes", "electronic pieces"],
    "LES": ["Liquid Einsteinium", "liquids"],
    "LFE": ["Large FTL Emitter", "ship engines"],
    "LFL": ["Large FTL Fuel Tank Kit", "ship kits"],
    "LFP": ["Low-heat Fuel Pump", "ship engines"],
    "LHP": ["Lightweight Hull Plate", "ship parts"],
    "LI": ["Lithium", "metals"],
    "LIO": ["Lithium Ore", "ores"],
    "LIS": ["Life Support System", "electronic systems"],
    "LIT": ["Neon Lighting System", "construction parts"],
    "LOG": ["Logistics System", "electronic systems"],
    "LSE": ["Lightweight Structural Elements", "construction prefabs"],
    "LSL": ["Large STL Fuel Tank Kit", "ship kits"],
    "LST": ["Limestone", "minerals"],
    "LTA": ["Lightweight Transparent Aperture", "construction prefabs"],
    "LU": ["Laboratory Unit", "unit prefabs"],
    "MAG": ["Magnetite", "minerals"],
    "MAI": ["High-Carb Maize", "agricultural products"],
    "MB": ["Motherboard", "electronic parts"],
    "MCB": ["Medium Cargo Bay Kit", "ship kits"],
    "MCG": ["Mineral Construction Granulate", "construction materials"],
    "MEA": ["Quality Meat Meal", "consumables (basic)"],
    "MED": ["Basic Medical Kit", "consumables (basic)"],
    "MFE": ["Medium FTL Emitter", "ship engines"],
    "MFK": ["Medium Fastener Kit", "electronic pieces"],
    "MFL": ["Medium FTL Fuel Tank Kit", "ship kits"],
    "MG": ["Magnesium", "elements"],
    "MGC": ["Magnetic Ground Cover", "construction parts"],
    "MGS": ["Magnesite", "minerals"],
    "MHL": ["Metal-Halide Lighting System", "construction parts"],
    "MHP": ["Micro Headphones", "electronic devices"],
    "MLI": ["Machine Learning Interface", "software components"],
    "MPC": ["Micro-Processor", "electronic parts"],
    "MSL": ["Medium STL Fuel Tank Kit", "ship kits"],
    "MTC": ["MegaTube Coating", "construction materials"],
    "MTP": ["Meat Tissue Patties", "agricultural products"],
    "MUS": ["Protein-Rich Mushrooms", "agricultural products"],
    "MWF": ["Medium Wafer", "electronic pieces"],
    "N": ["Nitrogen", "gases"],
    "NA": ["Sodium", "elements"],
    "NAB": ["Sodium Borohydride", "chemicals"],
    "NCS": ["Nano-Carbon Sheeting", "construction materials"],
    "NE": ["Neon", "gases"],
    "NF": ["Networking Framework", "software components"],
    "NFI": ["Nano Fiber", "construction materials"],
    "NG": ["Nano-Coated Glass", "construction materials"],
    "NL": ["Nylon Fabric", "textiles"],
    "NN": ["Neural Network", "software tools"],
    "NOZ": ["Basic Nozzle", "ship engines"],
    "NR": ["Nano-Enhanced Resin", "chemicals"],
    "NS": ["Nutrient Solution", "chemicals"],
    "NST": ["NeuroStimulants", "consumables (luxury)"],
    "NUT": ["Triglyceride Nuts", "agricultural products"],
    "NV1": ["Navigation Module MK1", "ship parts"],
    "NV2": ["Navigation Module MK2", "ship parts"],
    "O": ["Oxygen", "gases"],
    "OFF": ["Office Supplies", "utility"],
    "OLF": ["Olfactory Substances", "chemicals"],
    "OS": ["Operating System", "software tools"],
    "OVE": ["Basic Overalls", "consumables (basic)"],
    "PCB": ["Printed Circuit Board", "electronic parts"],
    "PDA": ["Personal Data Assistant", "consumables (basic)"],
    "PE": ["Poly-Ethylene", "plastics"],
    "PFE": ["Premium Fertilizer", "chemicals"],
    "PG": ["Polymer Granulate", "plastics"],
    "PIB": ["Pineberries", "agricultural products"],
    "PK": ["Painkillers", "medical equipment"],
    "POW": ["Power Cell", "energy systems"],
    "PPA": ["Protein Paste", "agricultural products"],
    "PSH": ["Pressure Shielding", "construction parts"],
    "PSL": ["Polymer Sheet Type L", "plastics"],
    "PSM": ["Polymer Sheet Type M", "plastics"],
    "PSS": ["Polymer Sheet Type S", "plastics"],
    "PT": ["Power Tools", "consumables (basic)"],
    "PWO": ["Padded Work Overall", "consumables (luxury)"],
    "QCR": ["Quick-charge FTL Reactor", "ship engines"],
    "RAD": ["Radio Device", "electronic devices"],
    "RAG": ["Radioisotope Generator", "ship engines"],
    "RAM": ["Memory Bank", "electronic parts"],
    "RAT": ["Basic Rations", "consumables (basic)"],
    "RBH": ["Reinforced Bulkhead", "construction prefabs"],
    "RCO": ["Raw Cotton Fiber", "agricultural products"],
    "RCS": ["Reactor Control System", "ship engines"],
    "RCT": ["Standard FTL Reactor", "ship engines"],
    "RDE": ["Reinforced Deck Elements", "construction prefabs"],
    "RDL": ["Large Ship-Repair Drone Operations Unit", "unit prefabs"],
    "RDS": ["Small Ship-Repair Drone Operations Unit", "unit prefabs"],
    "REA": ["Chemical Reagents", "chemicals"],
    "RED": ["Rescue Drone", "drones"],
    "REP": ["Repair Kit", "consumables (luxury)"],
    "RG": ["Reinforced Glass", "construction materials"],
    "RGO": ["Red Gold", "alloys"],
    "RHP": ["Reinforced Hull Plate", "ship parts"],
    "ROM": ["Non-Volatile Memory", "electronic parts"],
    "RSE": ["Reinforced Structural Elements", "construction prefabs"],
    "RSH": ["Radiation Shielding", "construction parts"],
    "RSI": ["Raw Silk Strains", "agricultural products"],
    "RTA": ["Reinforced Transparent Aperture", "construction prefabs"],
    "S": ["Sulfur", "elements"],
    "SA": ["Search Algorithm", "software components"],
    "SAL": ["Sorting Algorithm", "software components"],
    "SAR": ["Sensor Array", "electronic devices"],
    "SC": ["Stem Cell Treatment", "consumables (luxury)"],
    "SCB": ["Small Cargo Bay Kit", "ship kits"],
    "SCN": ["Multi-Purpose Scanner", "consumables (basic)"],
    "SCR": ["Sulfur Crystals", "minerals"],
    "SDR": ["Surgical Drone", "drones"],
    "SEA": ["Poly-Sulfite Sealant", "construction materials"],
    "SEN": ["Sensor", "electronic parts"],
    "SEQ": ["Surgical Equipment", "medical equipment"],
    "SF": ["STL Fuel", "fuels"],
    "SFE": ["Small FTL Emitter", "ship engines"],
    "SFK": ["Small Fastener Kit", "electronic pieces"],
    "SFL": ["Small FTL Fuel Tank Kit", "ship kits"],
    "SI": ["Silicon", "metals"],
    "SIL": ["Silken Fabric", "textiles"],
    "SIO": ["Silicon Ore", "ores"],
    "SNM": ["Spatial Navigation Map", "software systems"],
    "SOI": ["Artificial Soil", "chemicals"],
    "SOL": ["Solar Cell", "energy systems"],
    "SP": ["Solar Panel", "energy systems"],
    "SRD": ["Ship-Repair Drone", "drones"],
    "SRP": ["Specialized Anti-rad Plate", "ship shields"],
    "SSC": ["Structural Spacecraft Component", "ship parts"],
    "SSL": ["Small STL Fuel Tank Kit", "ship kits"],
    "STL": ["Steel", "metals"],
    "STR": ["Medical Stretcher", "medical equipment"],
    "STS": ["Stability Support System", "electronic systems"],
    "SU": ["Surgery Unit", "unit prefabs"],
    "SUD": ["Surveillance Drone", "drones"],
    "SUN": ["Safety Uniform", "utility"],
    "SWF": ["Small Wafer", "electronic pieces"],
    "TA": ["Tantalum", "elements"],
    "TAC": ["Targeting Computer", "electronic systems"],
    "TAI": ["Tantalite Rock", "minerals"],
    "TC": ["Technetium", "elements"],
    "TCB": ["Tiny Cargo Bay Kit", "ship kits"],
    "TCL": ["TCL Acid", "chemicals"],
    "TCO": ["Technetium Oxide", "minerals"],
    "TCS": ["Stabilized Technetium", "construction parts"],
    "TCU": ["Trauma Care Unit", "unit prefabs"],
    "THF": ["ThermoFluid", "chemicals"],
    "THP": ["Basic Thermal Protection Material", "ship parts"],
    "TI": ["Titanium", "metals"],
    "TIO": ["Titanium Ore", "ores"],
    "TK": ["TechnoKevlar Fabric", "textiles"],
    "TPU": ["Tensor Processing Unit", "electronic parts"],
    "TRA": ["Audio Transmitter", "electronic parts"],
    "TRN": ["Advanced Transistor", "electronic pieces"],
    "TRU": ["Truss", "construction parts"],
    "TS": ["Tectosilisite", "minerals"],
    "TSH": ["Thermal Shielding", "construction parts"],
    "TUB": ["Test Tubes", "medical equipment"],
    "UTS": ["Universal Toolset", "utility"],
    "VCB": ["High-volume Cargo Bay Kit", "ship kits"],
    "VEG": ["Triglyceride Fruits", "agricultural products"],
    "VG": ["VitaGel", "consumables (luxury)"],
    "VIT": ["Vita Essence", "agricultural products"],
    "VSC": ["Very Small Cargo Bay Kit", "ship kits"],
    "W": ["Tungsten", "metals"],
    "WAI": ["Weak Artificial Intelligence", "software systems"],
    "WAL": ["Alpha-Stabilized Tungsten", "alloys"],
    "WCB": ["High-load Cargo Bay Kit", "ship kits"],
    "WIN": ["Smart Zinfandel", "consumables (luxury)"],
    "WM": ["Window Manager", "software components"],
    "WOR": ["Handcraft Workshop Unit", "unit prefabs"],
    "WR": ["Water Reclaimer", "electronic systems"],
    "WS": ["Scientific Work Station", "consumables (basic)"],
    "ZIR": ["Zircon Crystals", "minerals"],
    "ZR": ["Zirconium", "elements"],
};
/* harmony export (immutable) */ __webpack_exports__["a"] = MaterialNames;

const Materials = {
    "Antenna Array": ["AAR", 0.78, 0.5],
    "Advanced Bulkhead": ["ABH", 0.6, 0.9],
    "Automated Cooling System": ["ACS", 0.3, 0.2],
    "Advanced Deck Elements": ["ADE", 0.4, 1.5],
    "Auto-Doc": ["ADR", 0.1, 0.1],
    "Audio Distribution System": ["ADS", 0.7, 2],
    "Aerostat Foundation": ["AEF", 2, 5],
    "Advanced STL Engine": ["AEN", 14, 7],
    "Advanced Fuel Pump": ["AFP", 1, 0.25],
    "Advanced Fuel Rod": ["AFR", 0.4, 0.1],
    "Advanced High-G Seats": ["AGS", 30, 5],
    "Advanced Hull Plate": ["AHP", 20, 10],
    "Air Scrubber": ["AIR", 1.7, 3],
    "Aluminium": ["AL", 2.7, 1],
    "Stellar Pale Ale": ["ALE", 0.1, 0.1],
    "Protein-Rich Algae": ["ALG", 0.7, 1],
    "Aluminium Ore": ["ALO", 1.35, 1],
    "Ammonia": ["AMM", 0.86, 1],
    "Advanced Nozzle": ["ANZ", 6, 3],
    "Advanced Thermal Protection Tile": ["APT", 0.03, 0.3],
    "Argon": ["AR", 1.784, 1],
    "Advanced Anti-rad Plate": ["ARP", 0.04, 0.2],
    "Advanced Structural Elements": ["ASE", 0.5, 0.6],
    "Alpha-Stabilized Titanium": ["AST", 4.98, 1],
    "Advanced Transparent Aperture": ["ATA", 0.3, 0.4],
    "Advanced Thermal Protection Material": ["ATP", 2.9, 1],
    "Gold": ["AU", 19.32, 1],
    "Gold Ore": ["AUO", 3.86, 1],
    "Active Water Filter": ["AWF", 0.8, 1.2],
    "Advanced Whipple Shielding": ["AWH", 0.12, 1],
    "Helpful Bacteria": ["BAC", 0.15, 0.15],
    "Basic AI Framework": ["BAI", 0.001, 0.01],
    "Basic Bulkhead": ["BBH", 0.5, 0.8],
    "Budget Connectors": ["BCO", 0.005, 0.002],
    "Basic Deck Elements": ["BDE", 0.1, 1.5],
    "Beryllium": ["BE", 1.84, 1],
    "Protein-Rich Beans": ["BEA", 0.8, 1],
    "Beryl Crystals": ["BER", 1.92, 1],
    "Basic Fuel Pump": ["BFP", 0.8, 0.2],
    "Basic Fuel Rod": ["BFR", 0.3, 0.1],
    "Shielded Connectors": ["BGC", 0.01, 0.002],
    "Blue Gold": ["BGO", 19.32, 1],
    "Basic High-G Seats": ["BGS", 20, 3],
    "Basic Hull Plate": ["BHP", 10, 10],
    "Full-Body Interaction Device": ["BID", 0.05, 0.05],
    "Breathable Liquid": ["BL", 1.12, 1],
    "Desaturation Agent": ["BLE", 0.5, 0.5],
    "Basic Mainframe": ["BMF", 0.8, 1.2],
    "Bandages": ["BND", 0.001, 0.005],
    "Boron Crystals": ["BOR", 1.8, 1],
    "Borosilicate": ["BOS", 1.5, 1],
    "Basic Thermal Protection Tile": ["BPT", 0.02, 0.3],
    "Command Bridge MK1": ["BR1", 180, 300],
    "Command Bridge MK2": ["BR2", 280, 400],
    "Bioreactive Minerals": ["BRM", 2.5, 1],
    "Bronze": ["BRO", 8.73, 1],
    "Basic Anti-rad Plate": ["BRP", 0.03, 0.2],
    "Short-distance Command Bridge": ["BRS", 150, 200],
    "Body Scanner": ["BSC", 0.1, 0.1],
    "Basic Structural Elements": ["BSE", 0.3, 0.5],
    "Basic Transparent Aperture": ["BTA", 0.3, 0.4],
    "Bacterial Tungsten Solution": ["BTS", 1.05, 1],
    "Basic Whipple Shielding": ["BWH", 0.1, 1],
    "Basic Workstation": ["BWS", 0.05, 0.1],
    "Carbon": ["C", 2.25, 1],
    "Calcium": ["CA", 1.54, 1],
    "Caffeinated Beans": ["CAF", 0.86, 1],
    "Electric Field Capacitor": ["CAP", 0.001, 0.001],
    "Large Capacitor Bank": ["CBL", 5.4, 2.4],
    "Medium Capacitor Bank": ["CBM", 3.6, 1.6],
    "Small Capacitor Bank": ["CBS", 1.8, 0.8],
    "Climate Controller": ["CC", 0.5, 1],
    "Crowd Control Drone": ["CCD", 0.3, 0.05],
    "Capacitive Display": ["CD", 0.004, 0.002],
    "Ceramic Fabric": ["CF", 2.82, 1],
    "Combustion Chamber": ["CHA", 1.2, 0.7],
    "Chlorine": ["CL", 3.2, 1],
    "Caliche Rock": ["CLI", 2.42, 1],
    "": ["CMK", 4.56, 33.2],
    "Caffeinated Infusion": ["COF", 0.1, 0.1],
    "Communication System": ["COM", 0.5, 1.5],
    "Cotton Fabric": ["COT", 0.77, 1],
    "Crew Quarters (Large)": ["CQL", 75, 150],
    "Crew Quarters (Medium)": ["CQM", 50, 100],
    "Crew Quarters (Small)": ["CQS", 25, 50],
    "Crew Quarters (Tiny)": ["CQT", 12.5, 25],
    "Cryogenic Unit": ["CRU", 2.2, 2],
    "Cryogenic Stabilizer": ["CST", 1.14, 1],
    "Ceramic-Tungsten Fabric": ["CTF", 4.32, 1],
    "Copper": ["CU", 8.92, 1],
    "Copper Ore": ["CUO", 4.01, 1],
    "Data Analyzer": ["DA", 0.001, 0.01],
    "Drone Chassis": ["DCH", 0.2, 0.03],
    "Durable Casing L": ["DCL", 0.08, 0.8],
    "Durable Casing M": ["DCM", 0.04, 0.4],
    "Durable Casing S": ["DCS", 0.01, 0.1],
    "Distributed Database": ["DD", 0.001, 0.01],
    "DDT Plant Agent": ["DDT", 0.11, 0.1],
    "Decorative Elements": ["DEC", 0.5, 2],
    "Information Display": ["DIS", 0.02, 0.02],
    "Drone Operations Unit": ["DOU", 5, 4],
    "Drone Frame": ["DRF", 0.1, 0.02],
    "Data Visualizer": ["DV", 0.001, 0.01],
    "Drinking Water": ["DW", 0.1, 0.1],
    "Entertainment Data Core": ["EDC", 0.001, 0.01],
    "Enriched Einsteinium": ["EES", 9.2, 1],
    "Standard STL Engine": ["ENG", 8, 4],
    "Epoxy Resin": ["EPO", 0.04, 0.02],
    "Einsteinium": ["ES", 0.88, 0.1],
    "Enriched Technetium": ["ETC", 4.1, 1],
    "Exoskeleton Work Suit": ["EXO", 0.1, 0.05],
    "Fluorine": ["F", 1.696, 1],
    "Ferrominium": ["FAL", 3.22, 1],
    "Active Cooling Device": ["FAN", 0.1, 0.1],
    "Flow Control Device": ["FC", 0.5, 0.25],
    "Iron": ["FE", 7.874, 1],
    "Iron Ore": ["FEO", 5.9, 1],
    "Ferro-Titanium": ["FET", 6.85, 1],
    "FTL Fuel": ["FF", 0.05, 0.01],
    "FTL Field Controller": ["FFC", 50, 16],
    "Flavoured Insta-Meal": ["FIM", 0.55, 0.5],
    "Fission Reactor": ["FIR", 7, 4.9],
    "Floating Tank": ["FLO", 1, 2],
    "Fluid Piping": ["FLP", 0.3, 2],
    "Flux": ["FLX", 0.25, 0.1],
    "All-Purpose Fodder": ["FOD", 1.2, 1],
    "Fuel-saving STL Engine": ["FSE", 6, 3],
    "Entertainment Unit": ["FUN", 5, 4],
    "Galerite Rock": ["GAL", 2.51, 1],
    "Cylindrical Gas Container": ["GC", 0.05, 0.1],
    "Glass Combustion Chamber": ["GCH", 1, 0.6],
    "Glass-based STL Engine": ["GEN", 5, 3],
    "Einsteinium-Infused Gin": ["GIN", 0.1, 0.1],
    "Glass": ["GL", 0.016, 0.01],
    "Glass Nozzle": ["GNZ", 1.5, 1],
    "Wine-Quality Grapes": ["GRA", 1.1, 1],
    "High-Carb Grains": ["GRN", 0.9, 1],
    "Gas Vent": ["GV", 0.25, 0.15],
    "Hydrogen": ["H", 0.07, 1],
    "Water": ["H2O", 0.2, 0.2],
    "Habitat Unit": ["HAB", 10, 8],
    "Halite Crystals": ["HAL", 2.17, 1],
    "High-Capacity Connectors": ["HCC", 0.01, 0.002],
    "Hydrocarbon Plants": ["HCP", 0.8, 1],
    "Holographic Display": ["HD", 0.05, 2],
    "Helium": ["HE", 0.145, 1],
    "Helium-3 Isotope": ["HE3", 0.145, 1],
    "Spicy Herbs": ["HER", 0.4, 1],
    "Heliotrope Extract": ["HEX", 1.1, 1],
    "Hardened Hull Plate": ["HHP", 15, 10],
    "HazMat Work Suit": ["HMS", 0.05, 0.05],
    "Hyperthrust Nozzle": ["HNZ", 6, 12],
    "Holographic Glasses": ["HOG", 0.01, 0.01],
    "Flowery Hops": ["HOP", 0.35, 1],
    "Handheld Personal Console": ["HPC", 0.003, 0.003],
    "High-power FTL Reactor": ["HPR", 18, 15],
    "Hardened Structural Elements": ["HSE", 3.1, 0.7],
    "Smart Space Suit": ["HSS", 0.05, 0.05],
    "Hyperthrust STL Engine": ["HTE", 20, 10],
    "Hyper-power Reactor": ["HYR", 35, 25],
    "Iodine": ["I", 4.93, 1],
    "Information Data Core": ["IDC", 0.001, 0.01],
    "Information Management System": ["IMM", 0.001, 0.01],
    "Indigo Colorant": ["IND", 0.21, 0.2],
    "InsuFoam": ["INS", 0.06, 0.1],
    "Sedative Substance": ["JUI", 1.2, 1],
    "Kombucha": ["KOM", 0.1, 0.1],
    "Kevlar Fabric": ["KV", 1.65, 1],
    "Lightweight Bulkhead": ["LBH", 0.2, 0.6],
    "AI-Assisted Lab Coat": ["LC", 0.05, 0.05],
    "Large Cargo Bay Kit": ["LCB", 200, 200],
    "Liquid Crystals": ["LCR", 0.15, 0.1],
    "Local Database": ["LD", 0.001, 0.01],
    "Lightweight Deck Elements": ["LDE", 0.1, 1.2],
    "Laser Diodes": ["LDI", 0.001, 0.001],
    "Liquid Einsteinium": ["LES", 8.84, 1],
    "Large FTL Emitter": ["LFE", 0.4, 1.6],
    "Large FTL Fuel Tank Kit": ["LFL", 60, 10],
    "Low-heat Fuel Pump": ["LFP", 0.5, 0.1],
    "Lightweight Hull Plate": ["LHP", 5, 10],
    "Lithium": ["LI", 0.55, 1],
    "Lithium Ore": ["LIO", 2.75, 1],
    "Life Support System": ["LIS", 5.6, 7],
    "Neon Lighting System": ["LIT", 1, 2],
    "Logistics System": ["LOG", 0.5, 1.5],
    "Lightweight Structural Elements": ["LSE", 0.3, 1.2],
    "Large STL Fuel Tank Kit": ["LSL", 125, 100],
    "Limestone": ["LST", 2.73, 1],
    "Lightweight Transparent Aperture": ["LTA", 0.3, 0.5],
    "Laboratory Unit": ["LU", 8, 6],
    "Magnetite": ["MAG", 5.15, 1],
    "High-Carb Maize": ["MAI", 1.3, 1],
    "Motherboard": ["MB", 0.075, 0.075],
    "Medium Cargo Bay Kit": ["MCB", 100, 100],
    "Mineral Construction Granulate": ["MCG", 0.24, 0.1],
    "Quality Meat Meal": ["MEA", 0.6, 0.5],
    "Basic Medical Kit": ["MED", 0.3, 0.1],
    "Medium FTL Emitter": ["MFE", 0.2, 0.8],
    "Medium Fastener Kit": ["MFK", 0.1, 0.05],
    "Medium FTL Fuel Tank Kit": ["MFL", 24, 4],
    "Magnesium": ["MG", 0.27, 0.16],
    "Magnetic Ground Cover": ["MGC", 0.6, 0.9],
    "Magnesite": ["MGS", 1.73, 1],
    "Metal-Halide Lighting System": ["MHL", 0.1, 0.05],
    "Micro Headphones": ["MHP", 0.001, 0.001],
    "Machine Learning Interface": ["MLI", 0.001, 0.01],
    "Micro-Processor": ["MPC", 0.001, 0.001],
    "Medium STL Fuel Tank Kit": ["MSL", 50, 50],
    "MegaTube Coating": ["MTC", 0.032, 0.01],
    "Meat Tissue Patties": ["MTP", 0.7, 1],
    "Protein-Rich Mushrooms": ["MUS", 0.8, 1],
    "Medium Wafer": ["MWF", 0.008, 0.008],
    "Nitrogen": ["N", 0.807, 1],
    "Sodium": ["NA", 0.97, 1],
    "Sodium Borohydride": ["NAB", 0.1, 0.05],
    "Nano-Carbon Sheeting": ["NCS", 0.028, 0.01],
    "Neon": ["NE", 0.9, 1],
    "Networking Framework": ["NF", 0.001, 0.01],
    "Nano Fiber": ["NFI", 0.032, 0.01],
    "Nano-Coated Glass": ["NG", 0.022, 0.01],
    "Nylon Fabric": ["NL", 1.13, 1],
    "Neural Network": ["NN", 0.001, 0.01],
    "Basic Nozzle": ["NOZ", 3, 1.5],
    "Nano-Enhanced Resin": ["NR", 0.05, 0.05],
    "Nutrient Solution": ["NS", 0.6, 0.5],
    "NeuroStimulants": ["NST", 0.05, 0.05],
    "Triglyceride Nuts": ["NUT", 0.9, 1],
    "Navigation Module MK1": ["NV1", 4.2, 2],
    "Navigation Module MK2": ["NV2", 6.7, 3],
    "Oxygen": ["O", 1.141, 1],
    "Office Supplies": ["OFF", 0.02, 0.2],
    "Olfactory Substances": ["OLF", 0.01, 0.001],
    "Operating System": ["OS", 0.001, 0.01],
    "Basic Overalls": ["OVE", 0.02, 0.025],
    "Printed Circuit Board": ["PCB", 0.05, 0.05],
    "Personal Data Assistant": ["PDA", 0.002, 0.002],
    "Poly-Ethylene": ["PE", 0.01, 0.01],
    "Premium Fertilizer": ["PFE", 0.9, 1],
    "Polymer Granulate": ["PG", 0.002, 0.001],
    "Pineberries": ["PIB", 0.3, 1],
    "Painkillers": ["PK", 0.001, 0.001],
    "Power Cell": ["POW", 0.05, 0.1],
    "Protein Paste": ["PPA", 2, 1],
    "Pressure Shielding": ["PSH", 4.2, 0.8],
    "Polymer Sheet Type L": ["PSL", 0.08, 0.8],
    "Polymer Sheet Type M": ["PSM", 0.04, 0.4],
    "Polymer Sheet Type S": ["PSS", 0.01, 0.1],
    "Power Tools": ["PT", 0.25, 0.2],
    "Padded Work Overall": ["PWO", 0.05, 0.05],
    "Quick-charge FTL Reactor": ["QCR", 14, 10],
    "Radio Device": ["RAD", 0.003, 0.005],
    "Radioisotope Generator": ["RAG", 5, 3.4],
    "Memory Bank": ["RAM", 0.001, 0.001],
    "Basic Rations": ["RAT", 0.21, 0.1],
    "Reinforced Bulkhead": ["RBH", 2.4, 0.9],
    "Raw Cotton Fiber": ["RCO", 0.95, 1],
    "Reactor Control System": ["RCS", 0.67, 0.5],
    "Standard FTL Reactor": ["RCT", 7, 4],
    "Reinforced Deck Elements": ["RDE", 1.4, 1.5],
    "Large Ship-Repair Drone Operations Unit": ["RDL", 150, 30],
    "Small Ship-Repair Drone Operations Unit": ["RDS", 50, 10],
    "Chemical Reagents": ["REA", 0.05, 0.05],
    "Rescue Drone": ["RED", 0.3, 0.05],
    "Repair Kit": ["REP", 0.006, 0.002],
    "Reinforced Glass": ["RG", 0.032, 0.01],
    "Red Gold": ["RGO", 19.32, 1],
    "Reinforced Hull Plate": ["RHP", 12, 10],
    "Non-Volatile Memory": ["ROM", 0.001, 0.001],
    "Reinforced Structural Elements": ["RSE", 1.9, 0.7],
    "Radiation Shielding": ["RSH", 3.7, 0.8],
    "Raw Silk Strains": ["RSI", 1.1, 1],
    "Reinforced Transparent Aperture": ["RTA", 1.5, 0.5],
    "Sulfur": ["S", 0.52, 0.25],
    "Search Algorithm": ["SA", 0.001, 0.01],
    "Sorting Algorithm": ["SAL", 0.001, 0.01],
    "Sensor Array": ["SAR", 1.7, 2],
    "Stem Cell Treatment": ["SC", 0.04, 0.01],
    "Small Cargo Bay Kit": ["SCB", 50, 50],
    "Multi-Purpose Scanner": ["SCN", 0.001, 0.001],
    "Sulfur Crystals": ["SCR", 2.05, 1],
    "Surgical Drone": ["SDR", 0.3, 0.05],
    "Poly-Sulfite Sealant": ["SEA", 0.15, 0.07],
    "Sensor": ["SEN", 0.001, 0.001],
    "Surgical Equipment": ["SEQ", 0.001, 0.01],
    "STL Fuel": ["SF", 0.06, 0.06],
    "Small FTL Emitter": ["SFE", 0.1, 0.4],
    "Small Fastener Kit": ["SFK", 0.04, 0.02],
    "Small FTL Fuel Tank Kit": ["SFL", 9, 1.5],
    "Silicon": ["SI", 2.329, 1],
    "Silken Fabric": ["SIL", 1.21, 1],
    "Silicon Ore": ["SIO", 1.79, 1],
    "Spatial Navigation Map": ["SNM", 0.001, 0.01],
    "Artificial Soil": ["SOI", 0.9, 1],
    "Solar Cell": ["SOL", 0.015, 0.01],
    "Solar Panel": ["SP", 0.15, 0.1],
    "Ship-Repair Drone": ["SRD", 0.3, 0.05],
    "Specialized Anti-rad Plate": ["SRP", 0.1, 0.2],
    "Structural Spacecraft Component": ["SSC", 1, 1],
    "Small STL Fuel Tank Kit": ["SSL", 20, 20],
    "Steel": ["STL", 7.85, 1],
    "Medical Stretcher": ["STR", 0.01, 1],
    "Stability Support System": ["STS", 0.1, 0.1],
    "Surgery Unit": ["SU", 6, 5],
    "Surveillance Drone": ["SUD", 0.3, 0.05],
    "Safety Uniform": ["SUN", 0.05, 0.05],
    "Small Wafer": ["SWF", 0.003, 0.003],
    "Tantalum": ["TA", 16.65, 1],
    "Targeting Computer": ["TAC", 0.15, 1],
    "Tantalite Rock": ["TAI", 7.94, 1],
    "Technetium": ["TC", 11.8, 1],
    "Tiny Cargo Bay Kit": ["TCB", 20, 20],
    "TCL Acid": ["TCL", 0.09, 0.1],
    "Technetium Oxide": ["TCO", 9.8, 1],
    "Stabilized Technetium": ["TCS", 3.4, 1.2],
    "Trauma Care Unit": ["TCU", 5, 4],
    "ThermoFluid": ["THF", 0.6, 0.35],
    "Basic Thermal Protection Material": ["THP", 2.2, 1],
    "Titanium": ["TI", 4.5, 1],
    "Titanium Ore": ["TIO", 1.58, 1],
    "TechnoKevlar Fabric": ["TK", 1.89, 1],
    "Tensor Processing Unit": ["TPU", 0.002, 0.002],
    "Audio Transmitter": ["TRA", 0.005, 0.002],
    "Advanced Transistor": ["TRN", 0.001, 0.001],
    "Truss": ["TRU", 0.1, 1.5],
    "Tectosilisite": ["TS", 2.4, 1],
    "Thermal Shielding": ["TSH", 2.4, 1.5],
    "Test Tubes": ["TUB", 0.002, 0.002],
    "Universal Toolset": ["UTS", 0.05, 0.05],
    "High-volume Cargo Bay Kit": ["VCB", 200, 200],
    "Triglyceride Fruits": ["VEG", 1.1, 1],
    "VitaGel": ["VG", 0.21, 0.1],
    "Vita Essence": ["VIT", 0.9, 1],
    "Very Small Cargo Bay Kit": ["VSC", 35, 35],
    "Tungsten": ["W", 7.519, 1],
    "Weak Artificial Intelligence": ["WAI", 0.001, 0.01],
    "Alpha-Stabilized Tungsten": ["WAL", 6.25, 1],
    "High-load Cargo Bay Kit": ["WCB", 200, 200],
    "Smart Zinfandel": ["WIN", 0.1, 0.1],
    "Window Manager": ["WM", 0.001, 0.01],
    "Handcraft Workshop Unit": ["WOR", 5, 5],
    "Water Reclaimer": ["WR", 6.4, 5],
    "Scientific Work Station": ["WS", 0.05, 0.5],
    "Zircon Crystals": ["ZIR", 4.85, 1],
    "Zirconium": ["ZR", 6.53, 1],
};
/* unused harmony export Materials */



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Style = {
    Button: ["Button__btn___UJGZ1b7"],
    ButtonPrimary: ["Button__primary____lObPiw"],
    ButtonSuccess: ["Button__success___bCiIVXw"],
    ButtonDisabled: ["Button__disabled____x8i7XF"],
    ButtonEnabled: ["Button__primary____lObPiw"],
    ButtonDanger: ["Button__danger___S2rSOES"],
    ButtonNeutral: ["Button__neutral___OAFOaNs"],
    SmallButton: ["Button__darkInline___z_YKa91", "Button__dark___vdJbcc8", "Button__btn___UJGZ1b7", "Button__inline___Ffw9bbn"],
    SidebarSectionHead: ["Sidebar__sectionHead____NHLKDT", "fonts__font-regular___Sxp1xjo"],
    SidebarSectionContent: ["Sidebar__sectionContent___wgGYFop", "fonts__font-regular___Sxp1xjo"],
    SidebarLine: ["Sidebar__contract___J0gmlzN", "Sidebar__sidebar-line___bE2rbRb"],
    FontsRegular: ["fonts__font-regular___Sxp1xjo"],
    SidebarText: ["Frame__toggleLabel___BTFce8H", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
    SidebarSliver: ["Frame__toggleIndicatorSecondary___frX4CGi", "Frame__toggleIndicator___ZKQQgAL"],
    SidebarButton: ["Frame__toggle___V3iHpB7"],
    ContractLine: ["y84EUI8gCP-SV91X7vIihQ==", "fVd3aYJhFY-uuaH+QTByhA=="],
    ContractName: ["zhixp408YF082IzA5KPvfA=="],
    ContractView: ["kq5BrGKnTUTqCDYMpLQ90g=="],
    RadioButton: ["RadioItem__container___CSczqmG"],
    SettingsButton: ["RadioItem__container___CSczqmG", "RadioItem__containerHorizontal____trlXDo"],
    RadioButtonUnToggled: ["RadioItem__indicator___QzQtjhA"],
    SettingsBarUntoggled: ["RadioItem__indicator___QzQtjhA", "RadioItem__indicatorHorizontal___SwtwTIh"],
    RadioButtonToggled: ["RadioItem__indicator___QzQtjhA", "RadioItem__active___CDscOQV", "effects__shadowPrimary___EbXJQor"],
    SettingsBarToggled: ["RadioItem__indicator___QzQtjhA", "RadioItem__indicatorHorizontal___SwtwTIh", "RadioItem__active___CDscOQV", "effects__shadowPrimary___EbXJQor"],
    RadioButtonValue: ["RadioItem__value___Yd1Gt1T", "fonts__font-regular___Sxp1xjo", "type__type-small___pMQhMQO"],
    SettingsText: ["RadioItem__value___Yd1Gt1T", "fonts__font-regular___Sxp1xjo", "type__type-small___pMQhMQO", "RadioItem__valueHorizontal___D5AXJ9P"],
    OverlappingDiv: ["Overlay__overlay___NA9HV8y"],
    GreyStripes: ["Overlay__background___ieZpHiF", "Overlay__overlay___NA9HV8y"],
    Spacer: ["Overlay__close___bxGoMIl"],
    ProgressBar: ["ProgressBar__primary___O30jBqq", "ProgressBar__progress___eb4KhuW"],
    ProgressBarColors: ["ProgressBar__primary___O30jBqq", "grey-progress-bar", "good-progress-bar", "warning-progress-bar", "danger-progress-bar"],
    ProgressBarGood: ["good-progress-bar"],
    ProgressBarWarning: ["warning-progress-bar"],
    ProgressBarDanger: ["danger-progress-bar"],
    CenterInterface: ["Overlay__children___rgtVaxc"],
    FormRow: ["FormComponent__containerActive___HZv9jHd", "forms__active___wn9KQTZ", "forms__form-component___yTgP_Qa"],
    HeaderRow: ["FormComponent__containerPassive___FrBdyGU", "forms__passive___biRUiE5", "forms__form-component___yTgP_Qa"],
    FormLabel: ["FormComponent__label___aQB15eB", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
    FormInput: ["FormComponent__input___ZnI8mYi", "forms__input___A92_N4J"],
    FormSaveRow: ["FormComponent__containerCommand___B4XLERf", "forms__cmd___IMzt7Ug", "forms__form-component___yTgP_Qa"],
    FormSaveLabel: ["FormComponent__label___aQB15eB", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
    FormSaveInput: ["FormComponent__input___ZnI8mYi", "forms__input___A92_N4J"],
    ActionOverlay: ["ActionConfirmationOverlay__container___A05Ts1g", "ActionFeedback__overlay___NNDPRrV"],
    ActionCenterInterface: ["ActionConfirmationOverlay__message___OajoGeh", "ActionFeedback__message___G2Sz4bw", "fonts__font-regular___Sxp1xjo", "type__type-larger___VdpJIb1"],
    ActionConfirm: ["ActionConfirmationOverlay__message___OajoGeh", "ActionFeedback__message___G2Sz4bw", "fonts__font-regular___Sxp1xjo", "type__type-larger___VdpJIb1"],
    ActionConfirmMessage: ["ActionConfirmationOverlay__text___qkKzVK0", "ActionFeedback__text___YQjjibG", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
    ActionButtons: ["ActionConfirmationOverlay__buttons___sE7CNVe"],
    MatText: ["ColoredIcon__label___OU1I4oP"],
    MatTextWrapper: ["ColoredIcon__labelContainer___YVfgzOk"],
    MaterialElement: ["ColoredIcon__container___djaR4r2"],
    MaterialWrapper: ["MaterialIcon__container___q8gKIx8"],
    MaterialNumberWrapper: ["MaterialIcon__indicatorContainer___Cqtax_Y"],
    MaterialNumber: ["MaterialIcon__indicator___SHwlndJ", "MaterialIcon__type-very-small___UMzQ3ir", "MaterialIcon__neutral___SYsHXAa"],
    MaterialWrapperWrapper: ["GridItemView__image___yMoKOZV"],
    MaterialOuter: ["GridItemView__container___xP2uJz8"],
    MaterialNameText: ["GridItemView__name___h3yX9Lm", "fonts__font-regular___Sxp1xjo", "type__type-regular___k8nHUfI"],
};
/* harmony export (immutable) */ __webpack_exports__["c"] = Style;

const WithStyles = (...style) => {
    return style.reduce(((previousValue, currentValue) => previousValue.concat(currentValue)));
};
/* harmony export (immutable) */ __webpack_exports__["d"] = WithStyles;

const TextColors = {
    Failure: "#d9534f",
    Success: "#5cb85c",
    Standard: "#bbbbbb",
    Yellow: "#f7a600"
};
/* unused harmony export TextColors */

const DefaultColors = [
    "#004564",
    "#005b76",
    "#007079",
    "#00846c",
    "#009552",
    "#67a22e",
    "#ada900",
    "#f7a600"
];
/* harmony export (immutable) */ __webpack_exports__["b"] = DefaultColors;

const CategoryColors = {
    "electronic devices": ["linear-gradient(135deg, rgb(86, 20, 147), rgb(111, 45, 172))", "rgb(213, 147, 255)"],
    "construction prefabs": ["linear-gradient(135deg, rgb(15, 30, 98), rgb(40, 55, 123))", "rgb(142, 157, 225)"],
    "electronic systems": ["linear-gradient(135deg, rgb(51, 26, 76), rgb(76, 51, 101))", "rgb(178, 153, 203)"],
    "medical equipment": ["linear-gradient(135deg, rgb(85, 170, 85), rgb(110, 195, 110))", "rgb(212, 255, 212)"],
    "construction parts": ["linear-gradient(135deg, rgb(41, 77, 107), rgb(66, 102, 132))", "rgb(168, 204, 234)"],
    "ship engines": ["linear-gradient(135deg, rgb(153, 41, 0), rgb(178, 66, 25))", "rgb(255, 168, 127)"],
    "ship parts": ["linear-gradient(135deg, rgb(153, 99, 0), rgb(178, 124, 25))", "rgb(255, 226, 127)"],
    "metals": ["linear-gradient(135deg, rgb(54, 54, 54), rgb(79, 79, 79))", "rgb(181, 181, 181)"],
    "consumables (luxury)": ["linear-gradient(135deg, rgb(136, 24, 39), rgb(161, 49, 64))", "rgb(255, 151, 166)"],
    "agricultural products": ["linear-gradient(135deg, rgb(92, 18, 18), rgb(117, 43, 43))", "rgb(219, 145, 145)"],
    "ores": ["linear-gradient(135deg, rgb(82, 87, 97), rgb(107, 112, 122))", "rgb(209, 214, 224)"],
    "gases": ["linear-gradient(135deg, rgb(0, 105, 107), rgb(25, 130, 132))", "rgb(127, 232, 234)"],
    "ship shields": ["linear-gradient(135deg, rgb(224, 131, 0), rgb(249, 156, 25))", "rgb(230 230,127)"],
    "alloys": ["linear-gradient(135deg, rgb(123, 76, 30), rgb(148, 101, 55))", "rgb(250, 203, 157)"],
    "chemicals": ["linear-gradient(135deg, rgb(183, 46, 91), rgb(208, 71, 116))", "rgb(255, 173, 218)"],
    "software components": ["linear-gradient(135deg, rgb(136, 121, 47), rgb(161, 146, 72))", "rgb(255, 248, 174)"],
    "electronic pieces": ["linear-gradient(135deg, rgb(119, 82, 189), rgb(144, 107, 214))", "rgb(246, 209, 255)"],
    "elements": ["linear-gradient(135deg, rgb(61, 46, 32), rgb(86, 71, 57))", "rgb(188, 173, 159)"],
    "minerals": ["linear-gradient(135deg, rgb(153, 113, 73), rgb(178, 138, 98))", "rgb(255, 240, 200)"],
    "unit prefabs": ["linear-gradient(135deg, rgb(29, 27, 28), rgb(54, 52, 53))", "rgb(156, 154, 155)"],
    "liquids": ["linear-gradient(135deg, rgb(114, 164, 202), rgb(139, 189, 227))", "rgb(241, 255, 255)"],
    "energy systems": ["linear-gradient(135deg, rgb(21, 62, 39), rgb(46, 87, 64))", "rgb(148, 189, 166)"],
    "drones": ["linear-gradient(135deg, rgb(140, 52, 18), rgb(165, 77, 43))", "rgb(255, 179, 145)"],
    "electronic parts": ["linear-gradient(135deg, rgb(91, 46, 183), rgb(116, 71, 208))", "rgb(218, 173, 255)"],
    "textiles": ["linear-gradient(135deg, rgb(82, 90, 33), rgb(107, 115, 58))", "rgb(209, 217, 160)"],
    "construction materials": ["linear-gradient(135deg, rgb(24, 91, 211), rgb(49, 116, 236))", "rgb(151, 218, 255)"],
    "software tools": ["linear-gradient(135deg, rgb(129, 98, 19), rgb(154, 123, 44))", "rgb(255, 255, 146)"],
    "plastics": ["linear-gradient(135deg, rgb(121, 31, 60), rgb(146, 56, 85))", "rgb(248, 158, 187)"],
    "consumables (basic)": ["linear-gradient(135deg, rgb(149, 46, 46), rgb(174, 71, 71))", "rgb(255, 173, 173)"],
    "fuels": ["linear-gradient(135deg, rgb(30, 123, 30), rgb(55, 148, 55))", "rgb(157, 250, 157)"],
    "software systems": ["linear-gradient(135deg, rgb(60, 53, 5), rgb(85, 78, 30))", "rgb(187, 180, 132)"],
    "ship kits": ["linear-gradient(135deg, rgb(154, 84, 0), rgb(178, 109, 25))", "rgb(255, 211, 127)"],
    "utility": ["linear-gradient(135deg, rgb(161, 148, 136), rgb(186, 173, 161))", "rgb(255, 255, 255)"],
    "shipment": ["linear-gradient(135deg, #030303, #181818)", "#7f7f7f"]
};
/* harmony export (immutable) */ __webpack_exports__["a"] = CategoryColors;

const PMMGStyle = `
.pb-minimize {
	font-size: 14px;
	font-weight: bold;
	margin-left: auto;
	margin-right: 3px;
	margin-top: 1px;
	text-align: center;
	width: 18px;
	cursor: pointer;
}
.pb-minimize-cx:hover {
	color: #26353e;
	background-color: #3fa2de;
}
.pb-minimize-cx {
	background-color: #26353e;
	color: #3fa2de;
}
.pb-minimize-settings:hover {
	color: #ddd;
}
.mat-element-large {
	height: 48px;
	width: 48px;
}
.mat-element-large div.ColoredIcon__container___djaR4r2 {
	height: 48px;
	width: 48px;
	font-size: 15.84px;
	cursor: pointer;
}
.mat-element-small {
	height: 32px;
	width: 32px;
}
.check-time-complete {
	text-decoration: line-through;
}
.check-time-overdue {
	color: #d9534f;
}
.check-time {
	color: rgb(153, 153, 153)
}
.check-item {
	border-bottom: solid 1px #555;
}
.checked-text {
	text-decoration: line-through;
	color: rgb(153, 153, 153)
}
.delete-button {
	background-color: #d9534f;
	border: none;
	color: #fff;
	line-height: 17px;
	font-weight: bold;
	outline: none;
	padding: 0 8px;
	font-size: 11px;
	cursor: pointer;
}
.delete-button:hover {
	color: #222;
}
.notes-wrapper textarea{
	resize: none;
	padding: 5px;
    margin: 5px;
	background-color: #42361d;
	border-width: 0px;
	color: #cccccc;
	font-family: "Open Sans",sans-serif;
	font-size: 12px;
	width: 100%;
	height: 93%;
}
.notes-wrapper{
	width: 100%;
	height: 93%;
	display: flex;
}
.notes-wrapper textarea:focus{
	outline: none;
}
.check-wrapper {
	margin: 5px;
}
.tooltip-base{
	display:flex;
	position:absolute!important;
	font-family:"Droid Sans",sans-serif;
	font-size:10px;
	color:#bbb
}
.tooltip
{
	display: none;
	margin-left: 100px;
}
.tooltip-base:hover .tooltip
{
	display: block;
	background-color: #23282b;
	position: absolute;
}
.select {
	border: 0px;
	border-bottom: 1px solid #8d6411;
	background-color: #42361d;
	color: #bbb;
	outline: none;
}

.title {
	font-weight: bold;
	display: block;
	font-size: 16px;
	padding-left: 5px;
}
.flex-table {
	width: 100%;
	display: flex;
	flex: 1;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: left;
	align-items: left;
}
.list {
	display: block;
	padding: 5px;
}
.chat-line {
	width: 100%;
	display: grid;
	grid-template-columns: minmax(8em, 1fr) minmax(8em, 4fr) minmax(8em, 15fr);
	grid-column-gap: 1px;
	font-size: 11px;
	line-height: 1.1;
}
.time-date {
	color: #444444;
	display: inline-block;
	padding: 2px 5px;
	padding-right: 0px;
	text-align: left;
	white-space: nowrap;
	overflow: hidden;
}
.chat-name {
	display: inline-block;
	text-align: right;
	color: #999999;
	text-overflow: ellipsis;
	padding: 2px 5px;
	border-right: 1px solid #999999;
}
.chat-message {
	display: inline-block;
	text-align: left;
	color: #bbbbbb;
	word-break: break-word;
	padding: 2px 5px;
}
.fin-title {
	display: block;
	font-size: 12px;
	margin-bottom: 0px;
	padding: 6px 4px 2px;
	background-color: rgba(63, 162, 222, 0.15);
}
td.burn-green {
	background-color: #345034 !important;
	color: #9fbb9f;
}
tr:hover td.burn-green {
	background-color: #506c50 !important;
}
td.burn-yellow {
	background-color: #836e24 !important;
	color: #f6df94;
}
tr:hover td.burn-yellow {
	background-color: #9f8a40 !important;
}
td.burn-red {
	background-color: #5a3130 !important;
	color: #c59c9b;
}
tr:hover td.burn-red {
	background-color: #764d4c !important;
}
.inv-header {
	display: inline;
	padding: 2px 8px;
	color: #3fa2de;
}
.inv-body {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: stretch;
	margin-bottom: 23px;
	padding: 5px 8px;
}
.progress-bar {
	width: 30px;
	height: 9px;
	border: 1px solid #999;
	margin: 1px 2px;
}
.progress-bar::-webkit-progress-value {background: #f7a600;}

.grey-progress-bar::-webkit-progress-value {background: #d9534f;}
.good-progress-bar::-webkit-progress-value {background: #5cb85c;}
.warning-progress-bar::-webkit-progress-value {background: #ffc856;}
.danger-progress-bar::-webkit-progress-value {background: #d9534f;}

.xit-tile {
	background-color: #222222 !important;
	padding-top: 4px;
	display: flex;
	flex-flow: column;
}
.refresh-button {
	background-color: #f7a600;
	color: #eee;
	border-width: 0px;
	padding: 0px 8px;
	display: block;
	font-weight: bold;
	font-size: 11px;
	cursor: pointer;
	margin: 4px 8px;
}
.refresh-button:hover {
	color: #1e1e1e;
}
.notification {
	display: inline-block;
	min-width: 62px;
	max-width: 62px;
}
.fin-box {
	margin: 1px;
	min-width: 100px;
	width: calc(33% - 2px);
	max-width: 150px;
	padding: 4px;
	background-color: #23282b;
	display: inline-block;
}
.link {
	color: #3fa2de;
	cursor: pointer;
	display: block;
}
.link:hover {
	color: #f7a600 !important;
}
.chat-image {
	max-height: 300px;
	max-width: 90%;
}
.input-text{
    padding: 0px 5px;
    margin: 5px;
	background-color: #42361d;
	border-width: 0px;
	border-bottom: 1px solid #8d6411;
	color: #cccccc;
	
}
.input-text:focus{
	outline: none;
}
.hidden-element{
	display: none !important;
	visibility: false !important;
	max-height: 0 !important;
	padding: 0 !important;
	margin: 0 !important;
	font-size: 0px !important;
}
.button-upper-right{
	background-color: transparent;
	color: #bbb;
	fill: #bbb;
	cursor: pointer;
	display: block;
	font-size: 24px;
	margin-top: -8px;
}
.button-upper-right:hover{
	color: #000 !important;
	fill: #000;
	background-color: rgb(247, 166, 0);
}`;
/* unused harmony export PMMGStyle */

const EnhancedColors = `/* consumables (luxury) */
div[title="Stellar Pale Ale"],
div[data-tooltip-content="#tooltip_ALE"],
.tooltip_ALE,
div[title="Caffeinated Infusion"],
div[data-tooltip-content="#tooltip_COF"],
.tooltip_COF,
div[title="Einsteinium-Infused Gin"],
div[data-tooltip-content="#tooltip_GIN"],
.tooltip_GIN,
div[title="Kombucha"],
div[data-tooltip-content="#tooltip_KOM"],
.tooltip_KOM,
div[title="NeuroStimulants"],
div[data-tooltip-content="#tooltip_NST"],
.tooltip_NST,
div[title="Padded Work Overall"],
div[data-tooltip-content="#tooltip_PWO"],
.tooltip_PWO,
div[title="Repair Kit"],
div[data-tooltip-content="#tooltip_REP"],
.tooltip_REP,
div[title="Stem Cell Treatment"],
div[data-tooltip-content="#tooltip_SC"],
.tooltip_SC,
div[title="VitaGel"],
div[data-tooltip-content="#tooltip_VG"],
.tooltip_VG,
.tooltip_WIN,
div[title="Smart Zinfandel"],
div[data-tooltip-content="#tooltip_WIN"]
{
background: linear-gradient(135deg, #680000, #7b0012) !important;
color: #db9191 !important;
}
/* agricultural products */
.tooltip_FOD,
.tooltip_CAF,
.tooltip_HOP,
.tooltip_GRN,
.tooltip_MAI,
.tooltip_HCP,
.tooltip_MTP,
.tooltip_PIB,
.tooltip_PPA,
.tooltip_ALG,
.tooltip_BEA,
.tooltip_MUS,
.tooltip_RCO,
.tooltip_RSI,
.tooltip_HER,
.tooltip_VEG,
.tooltip_NUT,
.tooltip_VIT,
.tooltip_GRA,
div[title="Protein-Rich Algae"],
div[data-tooltip-content="#tooltip_ALG"],
div[title="Protein-Rich Beans"],
div[data-tooltip-content="#tooltip_BEA"],
div[title="Caffeinated Beans"],
div[data-tooltip-content="#tooltip_CAF"],
div[title="All-Purpose Fodder"],
div[data-tooltip-content="#tooltip_FOD"],
div[title="Wine-Quality Grapes"],
div[data-tooltip-content="#tooltip_GRA"],
div[title="High-Carb Grains"],
div[data-tooltip-content="#tooltip_GRN"],
div[title="Hydrocarbon Plants"],
div[data-tooltip-content="#tooltip_HCP"],
div[title="Spicy Herbs"],
div[data-tooltip-content="#tooltip_HER"],
div[title="Flowery Hops"],
div[data-tooltip-content="#tooltip_HOP"],
div[title="High-Carb Maize"],
div[data-tooltip-content="#tooltip_MAI"],
div[title="Meat Tissue Patties"],
div[data-tooltip-content="#tooltip_MTP"],
div[title="Protein-Rich Mushrooms"],
div[data-tooltip-content="#tooltip_MUS"],
div[title="Triglyceride Nuts"],
div[data-tooltip-content="#tooltip_NUT"],
div[title="Pineberries"],
div[data-tooltip-content="#tooltip_PIB"],
div[title="Protein Paste"],
div[data-tooltip-content="#tooltip_PPA"],
div[title="Raw Cotton Fiber"],
div[data-tooltip-content="#tooltip_RCO"],
div[title="Raw Silk Strains"],
div[data-tooltip-content="#tooltip_RSI"],
div[title="Triglyceride Fruits"],
div[data-tooltip-content="#tooltip_VEG"],
div[title="Vita Essence"],
div[data-tooltip-content="#tooltip_VIT"]
{
background: linear-gradient(135deg, #003800, #0a4708) !important;
color: #8bb37b !important;
}
/* plastics */
.tooltip_DCL,
.tooltip_DCM,
.tooltip_DCS,
.tooltip_PE,
.tooltip_PG,
.tooltip_PSL,
.tooltip_PSM,
.tooltip_PSS,
div[title="Durable Casing L"],
div[data-tooltip-content="#tooltip_DCL"],
div[title="Durable Casing M"],
div[data-tooltip-content="#tooltip_DCM"],
div[title="Durable Casing S"],
div[data-tooltip-content="#tooltip_DCS"],
div[title="Poly-Ethylene"],
div[data-tooltip-content="#tooltip_PE"],
div[title="Polymer Granulate"],
div[data-tooltip-content="#tooltip_PG"],
div[title="Polymer Sheet Type L"],
div[data-tooltip-content="#tooltip_PSL"],
div[title="Polymer Sheet Type M"],
div[data-tooltip-content="#tooltip_PSM"],
div[title="Polymer Sheet Type S"],
div[data-tooltip-content="#tooltip_PSS"]
{
background: linear-gradient(135deg, #791f62, #92387b) !important;
color: #f89ee1 !important;
}
/* consumables (basic) */
.tooltip_DW,
.tooltip_EXO,
.tooltip_FIM,
.tooltip_HMS,
.tooltip_HSS,
.tooltip_LC,
.tooltip_MEA,
.tooltip_MED,
.tooltip_OVE,
.tooltip_PDA,
.tooltip_PT,
.tooltip_RAT,
.tooltip_SCN,
.tooltip_WS,

div[title="Drinking Water"],
div[data-tooltip-content="#tooltip_DW"],
div[title="Exoskeleton Work Suit"],
div[data-tooltip-content="#tooltip_EXO"],
div[title="Flavoured Insta-Meal"],
div[data-tooltip-content="#tooltip_FIM"],
div[title="HazMat Work Suit"],
div[data-tooltip-content="#tooltip_HMS"],
div[title="Smart Space Suit"],
div[data-tooltip-content="#tooltip_HSS"],
div[title="AI-Assisted Lab Coat"],
div[data-tooltip-content="#tooltip_LC"],
div[title="Quality Meat Meal"],
div[data-tooltip-content="#tooltip_MEA"],
div[title="Basic Medical Kit"],
div[data-tooltip-content="#tooltip_MED"],
div[title="Basic Overalls"],
div[data-tooltip-content="#tooltip_OVE"],
div[title="Personal Data Assistant"],
div[data-tooltip-content="#tooltip_PDA"],
div[title="Power Tools"],
div[data-tooltip-content="#tooltip_PT"],
div[title="Basic Rations"],
div[data-tooltip-content="#tooltip_RAT"],
div[title="Multi-Purpose Scanner"],
div[data-tooltip-content="#tooltip_SCN"],
div[title="Scientific Work Station"],
div[data-tooltip-content="#tooltip_WS"]
{
background: linear-gradient(135deg, #a62c2a, #ba363c) !important;
color: #ff989e !important;
}
/* fuels */
.tooltip_SF,
.tooltip_FF,
div[title="FTL Fuel"],
div[data-tooltip-content="#tooltip_FF"],
div[title="STL Fuel"],
div[data-tooltip-content="#tooltip_SF"]
{
background: linear-gradient(135deg, #548d22, #6ba23c) !important;
color: #cbfaa3 !important;
}
/* liquids */
.tooltip_HEX,
.tooltip_LES,
.tooltip_BTS,
.tooltip_H2O,
div[title="Heliotrope Extract"],
div[data-tooltip-content="#tooltip_HEX"],
div[title="Liquid Einsteinium"],
div[data-tooltip-content="#tooltip_LES"],
div[title="Bacterial Tungsten Solution"],
div[data-tooltip-content="#tooltip_BTS"],
div[title="Water"],
div[data-tooltip-content="#tooltip_H2O"]
{
background: linear-gradient(135deg, #67a8da, #6098c3) !important;
color: #f1ffff !important;
}
div.GridItemView__container___xP2uJz8 {
	background-color: #222;
}
/* full item name centering */
span.GridItemView__name___h3yX9Lm {
  display: block;
  text-align: center;
  padding-top: 1px;
  width: 100%;
}`;
/* unused harmony export EnhancedColors */

const IconStyle = `
 /* PrUnIcon v0.90
* ===============
*
* Install Chrome addon: StyleBot 
* goto: apex.prosperousuniverse.com
* right-click anywhere, select: StyleBot -> Style Element
* Copy&Paste this file into the StyleBot window
*
* CSS script to give icons to all commodities and some other UI color and layout changes.
*/
 
/* controversial UI changes and colors */
/* (comment/delete if not desired)
/* ----------------------------------- */

 
/* item ticker color */
.ColoredIcon__label___OU1I4oP {
    color: #cccccc;
}
 
 
/* full item name centering */
.GridItemView__name___h3yX9Lm  {
  display: block;
  text-align: center;
  padding-top: 1px;
  width: 100%;
}
 
/* table color */
table tbody td:nth-child(odd)
{
  background-color: #21252e;
}
 
/* end UI changes -------------------- */
 
/* items in production view and market view */
div.MaterialInformation__recipeInputs___eLvfoop div.BuildingIcon__container___jF5GUsz div.BuildingIcon__tickerContainer___NZx3G8C
{
  height: 36px;
  width: 36px;
}
 
/* items in planet view */
div.ResourceTable__gridContainer___ymrzTcD div.MaterialIcon__container___q8gKIx8 div.ColoredIcon__container___djaR4r2:before
{
  height: 20px;
  width: 20px;
  font-size: 20px;
}
 
/*
GridItemView__container___xP2uJz8
GridItemView__image___yMoKOZV
MaterialIcon__container___q8gKIx8
ColoredIcon__container___djaR4r2
ColoredIcon__labelContainer___YVfgzOk
*/
 
/* default :before element to prepare for new icon*/
div.ColoredIcon__container___djaR4r2:before
{
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  content: "";
  
  /*while it is icon*/
  opacity: .3;
  font-size: 30px;
}
*/
 
/* colored overlay icon */
div.ColoredIcon__labelContainer___YVfgzOk:before
{
  position: absolute;
  content: ""; /* will become icon */
 
  opacity: 0.1;
  z-index: -1;
  font-size: 30px;
  color: rgba(100%, 0%, 0%, 0);
}
 
div[title="gold ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 gold;
}
 
div[title="iron ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 aqua;
}
 
div[title="aluminium ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 grey;
}
 
div[title="silicon ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 white;
}
 
div[title="titanium ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 blue;
}
 
div[title="lithium ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 green;
}
 
div[title="copper ore"i] div:before 
{
  content: "🥔";
  text-shadow: 0 0 0 red;
}
 
div[title="ferro-titanium"i] div:before 
{
  content: "🟦";
  font-size: 15px;
  color: rgba(1,1,1,1);
  opacity: 0.3;
}
 
div[title="alpha-stabilized titanium"i] div:before 
{
  content: "⬜";
  font-size: 15px;
  color: rgba(1,1,1,1);
  opacity: 0.3;
}
 
div[title="ferrominium"i] div:before 
{
  content: "⬜";
  font-size: 15px;
  color: rgba(1,1,1,1);
  opacity: 0.3;
}
 
div[title="alpha-stabilized tungsten"i] div:before 
{
  content: "⬜";
  font-size: 15px;
  color: rgba(1,1,1,1);
  opacity: 0.3;
}
 
div[title^="Basic Thermal"i] div:before 
{
  content: "🔥";
  font-size: 20px;
  color: rgba(1,1,1,1);
  opacity: 0.2;
}
 
div[title^="Advanced Thermal"i] div:before 
{
  content: "🔥";
  font-size: 25px;
  color: rgba(1,1,1,1);
  opacity: 0.2;
}
 
div[title*="Anti-Rad"i] div:before 
{
  content: "⚛";
  font-size: 25px;
  color: rgba(1,1,1,1);
  opacity: 0.4;
}
 
div[title^="Advanced Anti-Rad"i] div:before 
{
  font-size: 30px;
}
 
div[title^="Specialized Anti-Rad"i] div:before 
{
  font-size: 35px;
}
 
div[title*="High-Capacity C"i] div:before 
{
  content: "🔌";
  font-size: 30px;
  text-shadow: 0 0 0 gold;
  opacity: .25;
}
 
div[title*="Shielded C"i] div:before 
{
  content: "🔌";
  font-size: 30px;
  text-shadow: 0 0 0 blue;
  opacity: .01;
}
 
div[title*="Budget C"i] div:before 
{
  content: "🔌";
  font-size: 30px;
  text-shadow: 0 0 0 chocolate;
  opacity: .2;
}
 
div[title*="raw "i] div:before 
{
  content: "🧶";
  font-size: 30px;
}
 
div[title*="raw cotton"i] div:before 
{
  text-shadow: 0 0 0 grey;
  opacity: .2;
}
 
div[title*="raw silk"i] div:before 
{
  text-shadow: 0 0 0 plum;
  opacity: .3;
}
 
div[title*=" fabric"i] div:before 
{
  content: "🧵";
  font-size: 30px;
}
 
div[title*="kevlar fabric"i] div:before 
{
  text-shadow: 0 0 0 green;
  opacity: .15;
}
 
 
div[title*="technokevlar fabric"i] div:before 
{
  text-shadow: 0 0 0 blueviolet;
  opacity: .2;
}
 
div[title*="nylon fabric"i] div:before 
{
  text-shadow: 0 0 0 black;
  opacity: .1;
}
 
div[title*="cotton fabric"i] div:before 
{
  text-shadow: 0 0 0 grey;
  opacity: .2;
}
 
div[title*="silken fabric"i] div:before 
{
  text-shadow: 0 0 0 plum;
  opacity: .3;
}
 
div[title*="ceramic fabric"i] div:before 
{
  text-shadow: 0 0 0 orangered;
  opacity: .15;
}
 
div[title*="ceramic-tungsten fabric"i] div:before 
{
  text-shadow: 0 0 0 brown;
  opacity: .3;
}
 
div[title="nutrient solution"i] div:before 
{
  content: "🧪";
  text-shadow: 0 0 0 green;
  opacity: .3;
}
 
div[title="nano-enhanced resin"i] div:before 
{
  content: "🧪";
  text-shadow: 0 0 0 blueviolet;
  opacity: .3;
  font-size: 32px;
}
 
div[title="flux"i] div:before 
{
  content: "🧪";
  text-shadow: 0 0 0 yellow;
  opacity: .15;
}
 
div[title="indigo colorant"i] div:before 
{
  content: "🧪";
  text-shadow: 0 0 0 indigo;
  opacity: .3;
}
 
div[title="Olfactory Substances"i] div:before 
{
  content: "🧪";
  text-shadow: 0 0 0 olive;
  opacity: .3;
}
 
div[title="DDT Plant Agent"i] div:before 
{
  content: "🧪";
  text-shadow: 0 0 0 red;
  opacity: .3;
}
 
div[title="Sedative Substance"i] div:before 
{
  content: "🧪";
  text-shadow: 0 0 0 orange;
  opacity: .3;
}
 
div[title="desaturation agent"i] div:before 
{
  content: "🧪";
  text-shadow: 0 0 0 white;
  opacity: .1;
}
 
div[title="breathable liquid"i] div:before 
{
  content: "💧";
  text-shadow: 0 0 0 aquamarine;
  opacity: .25;
}
 
div[title="thermofluid"i] div:before 
{
  content: "💧";
  text-shadow: 0 0 0 orange;
  opacity: .5;
}
 
div[title*="fertilizer"i] div:before 
{
  content: "⛰";
  text-shadow: 0 0 0 yellowgreen;
  opacity: .3;
}
 
div[title*="acid"i] div:before 
{
  content: "☣";
  text-shadow: 0 0 0 greenyellow;
  opacity: .1;
  font-size: 40px;
}
 
/*
 
div[title*="solar"i] div:before 
{
  content: "🌞";
  opacity: .1;
  font-size: 30px;
  text-shadow: 0 0 0 yellow;
  color: rgba(1,1,1,1);
}
 
div[title="large cargo bay kit"i] div:before 
{
  content: "⚖"; opacity: 0.6; font-size: 20px;
}
 
div[title="high-load cargo bay kit"i] div:before 
{
  content: "🔔";
}
 
div[title="high-volume cargo bay kit"i] div:before 
{
  content: "🎈";
}
 
div[title="gold ore"i] div:before 
{
  content: "🟨";
}
 
div[title="iron ore"i] div:before 
{
  content: "🟦";
}
 
div[title="aluminium ore"i] div:before 
{
  content: "⬜";
}
*/
 
/* non-category color special hacks*/
 
div[title="High-Capacity Connectors"],
div[title="Red Gold"]
{
  -background: linear-gradient(135deg, rgb(145 129 43), rgb(120 72 7))
}
 
div[title="Shielded Connectors"],
div[title="Blue Gold"]
{
  -background: linear-gradient(135deg, rgb(145 129 43), rgb(70 72 200))
}
 
div[title="Air Scrubber"]
{
  background: linear-gradient(135deg, rgb(30 96 58),  rgb(51, 26, 76));
}
 
/* dw and all consumables */
 
/* "normal" icons and colors */
/* ------------------------- */
 
/* RAT inputs */
div[title^="High-Carb"],
div[title^="Protein-Rich"],
div[title^="Triglyceride"]
{
  background: linear-gradient(135deg, rgb(145 129 43), rgb(70 72 7))
}
 
div[content="Io-dine"]
{
  background: linear-gradient(135deg, rgb(153 87 1), rgb(86 40 0))
}
 
/* other Argriculture */
div[title="Hydrocarbon Plants"],
div[title="Spicy Herbs"],
div[title="All-Purpose Fodder"],
div[title="Flowery Hops"],
div[title="Caffeinated Beans"],
div[title="Raw Cotton Fiber"],
div[title="Wine-Quality Grapes"],
div[title="Meat Tissue Patties"],
div[title="Pineberries"],
div[title="Raw Silk Strains"],
div[title="Vita Essence"],
div[title="Protein Paste"] {
  background: linear-gradient(135deg, rgb(153 87 1), rgb(86 40 0))
}
 
div[title^="Drink"],
div[title^="Basic Ra"] {
  background: linear-gradient(135deg, rgb(71 126 174), rgb(46 66 149))
}
 
/* liquids */
div[title*="Heliotrope"],
div[title*="Liquid Eins"],
div[title*="Bacterial Tun"],
div[title^="Water"] {
  background: linear-gradient(135deg, rgb(122 80 55), rgb(18 74 124))
}
 
/* chemicals bg colors */
div[title*="Substance"], 
div[title*="Chemical"], 
div[title="Liquid Crystals"], 
div[title*="Breathable Liquid"], 
div[title*="Agent"], 
div[title*="Flux"], 
div[title*="Resin"], 
div[title*="Colorant"],
div[title*="Acid"], 
div[title*=" Bacteria"], 
div[title*="Soil"],
div[title*="Stabilizer"],
div[title*="Fertilizer"],
div[title*="ThermoFluid"],
div[title*="Enriched"],
div[title*="Nutrient"] {
  background: linear-gradient(135deg, rgb(183, 46, 91), rgb(114 37 62))
}
 
/* prefabs */
div[title^="Basic Str"],
div[title^="Basic Deck"],
div[title^="Basic Bulk"],
div[title^="Basic Trans"] {
  background: linear-gradient(135deg, rgb(51 54 66 ), rgb(15, 30, 98))
}
div[title^="Lightweight"] {
  background: linear-gradient(135deg, rgb(85 94 35), rgb(15, 30, 98))
}
div[title^="Hardened"], 
div[title^="Reinforced"] {
  background: linear-gradient(135deg, rgb(78 44 27), rgb(15, 30, 98))
}
div[title^="Advanced Deck"],
div[title^="Advanced Transp"],
div[title^="Advanced Str"],
div[title^="Advanced Bulk"] {
  background: linear-gradient(135deg, rgb(71 35 94), rgb(15, 30, 98))
}
 
/* construction bg colors */
div[title="InsuFoam"],
div[title="Epoxy Resin"],
div[title="MegaTube Coating"],
div[title="Nano-Carbon Sheeting"],
div[title="Nano Fiber"],
div[title="Nano-Coated Glass"],
div[title="Reinforced Glass"],
div[title="Poly-Sulfite Sealant"],
div[title="Glass"],
div[title="Mineral Construction Granulate"] {
  background: linear-gradient(135deg, rgb(72 125 221), rgb(0 64 179))
}
 
/* construction parts */
div[title="Aerostat Foundation"],
div[title="Air Scrubber"],
div[title="Decorative Elements"],
div[title="Floating Tank"],
div[title="Flow Control Device"],
div[title="Fluid Piping"],
div[title="Cylindrical Gas Container"],
div[title="Gas Vent"],
div[title="Magnetic Ground Cover"],
div[title="Metal-Halide Lighting System"],
div[title="Neon Lighting System"],
div[title="Pressure Shielding"],
div[title="Radiation Shielding"],
div[title="Stabilized Technetium"],
div[title="Thermal Shielding"],
div[title="Truss"] {
  background: linear-gradient(135deg, rgb(66, 102, 132), rgb(41, 77, 107))
}
 
div[title="STL Fuel"],
div[title="FTL Fuel"] {
  background: linear-gradient(135deg, rgb(30, 123, 30), rgb(32 90 32))
}
 
 
/* electronic systems bg color */
div[title="Audio Distribution System"],
div[title="Automated Cooling System"],
div[title="Climate Controller"],
div[title="Communication System"],
div[title="FTL Field Controller"],
div[title="Life Support System"],
div[title="Logistics System"],
div[title="Stability Support System"],
div[title="Targeting Computer"],
div[title="Cryogenic Unit"]
{
  background: linear-gradient(135deg, rgb(76, 51, 141),  rgb(51, 26, 76));
}
 
/* life related electronics systems bg color*/
div[title="Water Reclaimer"],
div[title="Life Support System"]
{
  background: linear-gradient(135deg, rgb(30 96 58),  rgb(51, 26, 76));
}
 
div[title*="ium"]:before, 
div[title*="site"]:before, 
div[title*="mineral"i]:before {
  content: "⛰"; opacity: 0.4
}
div[title*="controller"i]:before {
  content: "🎛"; opacity: 0.6
}
div[title*="filter"i]:before,
div[title*="device"i]:before,
div[title*=" MK"i]:before {
  content: "📻";
}
/* 🛹🚿⛲ */
div[title*="flow control device"i]:before {
  content: "🚿";
}
div[title*="glass"i]:before {
  content: "🔲";
  font-size: 25px;
}
div[title*="headphone"i]:before {
  content: "🎧";
}
div[title*="holographic glasses"i]:before {
  content: "👓";
}
div[title*="diode"i]:before {
  content: "▶";
}
div[data-tooltip-content*="SAR"i]:before,
div[title*="scanner"i]:before,
div[title*="sensor"i]:before {
  content: "🔭";
}
div[title*="Foundation"]:before {
  content: "🧇";
}
/* 🧮🎫🎟🎞 */
div[title*="memory"i]:before,
div[title*="process"i]:before,
div[title*="transistor"i]:before,
div[title*="circuit"i]:before {
  content: "🎟";
}
div[title*="tensor"i]:before {
  content: "🧮";
}
div[title="memory bank"i]:before {
  content: "🎞";
}
div[title*="circuit"i]:before {
  content: "🎫";
}
/*🧧🎟💿📼🎞*/
div[title="Non-Volatile Memory"i]:before
{
  content: "📀";
}
div[title*="system"i]:before,
div[title*="computer"i]:before,
div[title*="mainframe"i]:before {
  content: "🖥"; 
  opacity: 0.6
}
/* 🎛🎚💾💽💿📀 */
div[title*="Navigation"]:before,
div[title*="Artificial"]:before,
div[title*="Data"]:before,
div[title*="Network"]:before,
div[title*="Database"]:before,
div[title*="Framework"]:before,
div[title*="Management"]:before,
div[title*="Operating"]:before,
div[title*="Interface"]:before,
div[title*="Algorithm"]:before,
div[title*="Manager"]:before {
  content: "💾";
  opacity: 0.3; /* system override*/
}
div[title*="motherboard"i]:before,
div[title*="wafer"i]:before {
  content: "🎫";
}
div[title*="broadcasting"i]:before,
div[title*="antenna"i]:before,
div[title*="emitter"i]:before {
  content: "📡";
}
div[title*="library"i]:before {
  content: "📖";
}
div[title*="Workstation"]:before,
div[title*="Display"]:before {
  content: "💻";
}
div[title*="Light"]:before {
  content: "💡";
}
div[title*="Rock"]:before {
  content: "🥯";
}
div[title*="Liquid"]:before, 
div[title*="Fluid"]:before {
  content: "💧";
}
div[title*="Air"]:before, 
div[title*="Gas"]:before,
 div[title*="Aero"]:before {
  content: "☁";
}
div[title*="Audio"]:before {
  content: "🔊";
  opacity: 0.3; /* system override */
}
div[title*="Power"]:before, 
div[title*="Capacitor"]:before {
  content: "🔋";
}
div[title*="Power Cell"]:before
{
  font-size: 20px;
}
/* 🔨⛏⚒🛠🔧🔩⚙🗜🧰 */
div[title*="Fastener Kit"]:before {
  content: "🔧";
  font-size: 35px;
}
div[title*="Repair Kit"]:before {
  content: "🧰";
  font-size: 35px;
}
div[title*="Tank"]:before {
  content: "🛢";
  font-size: 35px;
}
div[title*="FTL Fuel Tank"i]:before {
  content: "🧳";
  font-size: 35px;
}
div[title*="Protection"]:before,
div[title*="Plate"]:before,
div[title*="Shield"]:before {
  content: "🛡";
  font-size: 40px;
}
div[title*="Protection Material"]:before {
  content: "🧱";
  font-size: 30px;
}
div[title*="Connectors"]:before {
  content: "🔌";
  font-size: 30px;
  opacity: 0.4
}
div[title*="Seats"]:before {
  content: "🪑";
}
div[title*="Substance"]:before, 
div[title*="Chemical"]:before, 
div[title*="Agent"]:before, 
div[title*="Flux"]:before, 
div[title*="Resin"]:before, 
div[title*="Colorant"]:before {
  content: "🧪";
}
div[title*="Acid"]:before {
  content: "☣";
  font-size: 40px;
}
div[title*="Bacteria"]:before {
  content: "🧫";
}
div[title*="Cryo"]:before {
  content: "❄";
  font-size: 40px;
}
div[title*="Soil"]:before {
  content: "🥔";
}
/* 🧰🔪🩺 */
div[title*="Surgical"i]:before {
  content: "🩺";
  font-size: 30px;
}
/* 🎞🛏🛌 */
div[title*="Medical stretcher"i]:before {
  content: "🎞";
  font-size: 35px;
}
/* 🧰🔪🩺💊 */
div[title*="Medical kit"i]:before {
  content: "🩺";
}
div[title*="Magnet"]:before {
  content: "🧲";
}
/* 🗿🖼 */
div[title*="Deco"]:before {
  content: "🖼";
}
div[title*="Solar"]:before {
  content: "⚡";
}
div[title*="Solar Cell"]:before {
  font-size: 20px;
}
 
/* alloys ♒ 🟪*/
div[title*="-Titanium"]::before,
div[title*=" Titanium"]::before
{
  content: "🟪";
  font-size: 25px;
}
 
div[title="Ferrominium"]::before
{
  content: "🟦";
  font-size: 25px;
}
 
 
/* ---- Medical ------ */
div[title="Auto-Doc"],
div[title="Bandages"],
div[title="Medical Stretcher"],
div[title="Painkillers"],
div[title="Surgical Equipment"],
div[title="Test Tubes"]
{
  background: linear-gradient(135deg, rgb(64 133 64), rgb(48 86 48))
}
 
div[title="Auto-Doc"]:before {
  content: "👨‍⚕️";
}
div[title="Bandages"]:before {
  content: "🧻";
}
div[title="Painkillers"]:before {
  content: "💊";
}
div[title="Surgical Equipment"]:before {
  content: "🩺";
}
div[title*="Tube"]:before {
  content: "🧪";
}
/* 🛌🛏⚕ */
div[title*="Crew Quarters"]:before,
div[title*="Trauma Care"]:before {
  content: "🛏";
  font-size: 40px;
}
/* ---------- */
 
div[title*="Iodine"]:before {
  content: "🩸";
}
div[title*="Sodium"]:before {
  content: "🧂";
}
div[title*="Carbon"]:before {
  content: "🎩";
}
/* 🧂💿🍙🍥⛰🏔 */
div[title="Chlorine"]:before {
  content: "🍥";
}
div[title="Sulfur"]:before {
  content: "🟡";
}
div[title="Tantalum"]:before {
  content: "🔘";
}
div[title="Calcium"]:before {
  content: "⛰";
}
div[title="Beryllium"]:before {
  content: "⛰";
}
div[title="Magnesium"]:before {
  content: "⛰";
}
 
div[title="Gold"]:before {
  content: "🟨";
  font-size: 25px;
}
 
/* 〰🧈🧊🟤🟦 */
 
div[title="Aluminium"]:before {
  content: "⬜";
  font-size: 25px; opacity: 0.2
}
 
div[title="Steel"]:before {
  content: "🧊";
  font-size: 25px; opacity: 0.2
}
 
div[title="Titanium"]:before {
  content: "🟪";
  font-size: 25px; opacity: 0.2
}
 
div[title~="Tungsten"]:before
{
  content: "🟫";
  font-size: 25px; opacity: 0.2
}
 
div[title="Silicon"]:before{
  content: "〰"; opacity: 0.2
}
 
div[title="Copper"]:before {
  content: "🟧";
  font-size: 25px; opacity: 0.2
}
/* 🟥 */
div[title="Iron"]:before {
  content: "🟦";
  font-size: 25px; opacity: 0.2
}
 
/* alloys */
 
div[title="Red Gold"]:before {
  content: "🔶";
  font-size: 25px;
}
 
div[title="Blue Gold"]:before {
  content: "🔷";
  font-size: 25px;
}
 
div[title="Bronze"]:before {
  content: "🔺";
  font-size: 25px;
}
 
div[title="Borosilicate"]:before {
  content: "〰";
}
 
/* ---- */
 
/* 🖊❗➖💈 🌠🥖🍡🧨 */
div[title*="fuel rod"i]:before {
  content: "🧨";
}
div[title="basic fuel rod"i]:before {
  content: "➖";
}
div[title*=" reactor"i]:before,
div[title*=" generator"i]:before {
  content: "🎆";
}
div[title*="fission reactor"i]:before {
  font-size: 20px;
}
div[title*="radioisotope generator"i]:before {
  font-size: 20px;
}
 
/* ---- */
 
div[title="Limestone"]:before {
  content: "🥯";
}
 
div[title*="Drone"]:before {
  content: "✈";
}
 
div[title*="Ore"]:before {
  content: "🥔";
}
 
div[title*="Crystals"]:before {
  content: "💎";
}
 
/* ---------- */
 
div[title$="Grains"]:before {
  content: "🌾";
}
 
div[title$="Maize"]:before {
  content: "🌽";
}
 
div[title^="Drink"]:before {
  content: "🧃";
}
 
div[title^="Protein-Rich Beans"]:before {
  content: "🥒";
}
 
div[title^="Basic Ra"]:before {
  content: "🥫";
}
 
div[title$="Nuts"]:before {
  content: "🥜";
}
 
div[title$="Fruits"]:before {
  content: "🍅";
}
 
div[title$="Plants"]:before {
  content: "🌲";
}
 
div[title^="Caffeinated Beans"]:before {
  content: "🌿";
}
 
div[title$="Algae"]:before {
  content: "🍃";
}
 
div[title$="Grapes"]:before {
  content: "🍇";
}
 
div[title$="Herbs"]:before {
  content: "🌶";
}
 
div[title$="Fodder"]:before {
  content: "💊";
}
 
div[title$="Hops"]:before {
  content: "🌾";
}
 
div[title$="Cotton Fiber"]:before {
  content: "🧶";
}
 
div[title$="Patties"]:before {
  content: "🧫";
}
 
div[title$="Mushrooms"]:before {
  content: "🍄";
}
 
div[title$="Pineberries"]:before {
  content: "🍓";
}
 
div[title$="Paste"]:before {
  content: "🥣";
}
 
div[title$="Solution"]:before {
  content: "🧪";
}
 
div[title^="Vita Essence"]:before {
  content: "🍶";
}
 
/* liquids */
div[title^="Water"]:before {
  content: "💧";
}
div[title*="Heliotrope"]:before {
  content: "🥃";
}
div[title*="Liquid Eins"]:before {
  content: "🥛";
}
 
/* 🎨🏀🏐⚾ */
div[title="Polymer Granulate"]:before {
  content: "🏐";
}
 
div[title$="Poly-Ethylene"]:before {
  content: "⚾";
}
 
div[title*="Sheet Type"]:before {
  content: "🧻";
}
 
div[title*="Foam"]:before,
div[title*="Seal"]:before {
  content: "🌫";
}
div[title*="Fiber"]:before,
div[title*="Fabric"]:before {
  content: "🧵";
}
div[title="Raw Silk Strains"]:before,
div[title="Raw Cotton Fiber"]:before {
  content: "🧶";
}
 
div[title$="Supplies"]:before {
  content: "📠";
}
div[title$="Uniform"]:before {
  content: "👖";
}
div[title$="Toolset"]:before {
  content: "🛠"; opacity: 0.4
}
 
div[title^="FTL"]:before {
  content: "☀";
  font-size: 40px; opacity: 0.5
}
 
div[title^="STL"]:before {
  content: "🛢";
  font-size: 40px; opacity: 0.5
}
 
div[title$="Construction Granulate"]:before {
  content: "🧱";
}
 
div[title*="Casing"]:before {
  content: "🧊";
}
 
div[title$="Deck Elements"]:before {
  content: "🎞";
  font-size: 40px;
}
div[title$="Structural Elements"]:before {
  content: "⛓";
}
/* 🛎 */
div[title$="Bulkhead"]:before {
  content: "🛸";
}
/* 🏗🧭🌫☀🌀 */
div[title$="Aperture"]:before {
  content: "🏗";
}
div[title="Truss"]:before {
  content: "🗼";
}
 
/* ----- gasses------ */
/* 💨🕳〰🌊🌫💥🛢🧳🧴☄ */
 
div[title="Ammonia"]:before {
  content: "🩸";
}
div[title="Argon"]:before {
  content: "☁";
}
div[title="Fluorine"]:before {
  content: "☁";
}
div[title="Neon"]:before {
  content: "☁";
}
div[title="Nitrogen"]:before {
  content: "💧";
}
div[title="Oxygen"]:before {
  content: "💨";
}
div[title*="Helium"]:before {
  content: "🌌";
}
div[title^="Hydrogen"]:before {
  content: "💫";
}
div[title="Helium-3 Isotope"]:before {
  content: "💦";
}
 
div[title="Caffeinated Infusion"]:before {
  content: "☕"; opacity: 0.2
}
div[title="Basic Overalls"]:before {
  content: "🧥"; opacity: 0.2
}
div[title$="Work Overall"]:before {
  content: "🦺"; opacity: 0.2
}
div[title="Basic Overalls"] { background: linear-gradient(135deg, rgb(64 97 104), rgb(57 73 147)) }
div[title="Caffeinated Infusion"], 
div[title$="Work Overall"] { background: linear-gradient(135deg, rgb(64 97 104), rgb(105 30 145)) }
 
div[title="Kombucha"]:before {
  content: "🍯"; opacity: 0.2
}
div[title^="Exos"]:before {
  content: "👷‍♀️"; opacity: 0.2
}
div[title^="Power Tools"]:before {
  content: "🔌"; opacity: 0.2
}
div[title^="Exos"], 
div[title="Power Tools"] { background: linear-gradient(135deg, rgb(42 122 54), rgb(57 73 147)) }
div[title="Kombucha"],
div[title="Repair Kit"] { background: linear-gradient(135deg, rgb(42 122 54), rgb(105 30 145)) }
 
div[title$="Ale"]:before {
  content: "🍺"; opacity: 0.2
}
div[title="Stem Cell Treatment"]:before {
  content: "💉"; opacity: 0.2
}
div[title="HazMat Work Suit"]:before {
  content: "👩‍🚒"; opacity: 0.2
}
div[title="Multi-Purpose Scanner"]:before {
  content: "🔭"; opacity: 0.2
}
div[title="Basic Medical Kit"], 
div[title="HazMat Work Suit"], 
div[title="Multi-Purpose Scanner"] { background: linear-gradient(135deg, rgb(116 124 27), rgb(57 73 147)) 
}
div[title$="Ale"], 
div[title="Stem Cell Treatment"] { background: linear-gradient(135deg, rgb(116 124 27), rgb(105 30 145)) 
}
 
div[title$="Gin"]:before {
  content: "🥃"; opacity: 0.2
}
div[title$="Meal"]:before {
  content: "🥡"; opacity: 0.2
}
div[title="VitaGel"]:before {
  content: "🧪"; opacity: 0.2
}
div[title="Smart Space Suit"]:before {
  content: "👨‍🚀"; opacity: 0.2
}
div[title*="personal"i]:before {
  content: "📱"; opacity: 0.2
}
div[title="Flavoured Insta-Meal"], 
div[title="Personal Data Assistant"], 
div[title="Smart Space Suit"] { background: linear-gradient(135deg, rgb(52 93 159), rgb(57 73 147)) }
div[title$="Gin"], 
div[title="VitaGel"] { background: linear-gradient(135deg, rgb(52 93 159), rgb(105 30 145)) }
 
 
div[title="Smart Zinfandel"]:before {
  content: "🍷"; opacity: 0.2
}
div[title$="Meat Meal"]:before {
  content: "🍱"; opacity: 0.2
}
div[title="NeuroStimulants"]:before {
  content: "💊"; opacity: 0.2
}
div[title="AI-Assisted Lab Coat"]:before {
  content: "🥼"; opacity: 0.2
}
div[title="Scientific Work Station"]:before {
  content: "🔬"; opacity: 0.2
}
div[title$="Meat Meal"], 
div[title="AI-Assisted Lab Coat"], 
div[title="Scientific Work Station"] { background: linear-gradient(135deg, rgb(155 92 169), rgb(57 73 147)) }
div[title="Smart Zinfandel"], 
div[title="NeuroStimulants"] { background: linear-gradient(135deg, rgb(155 92 169), rgb(105 30 145)) }
 
/* 🕹☎📞 */
div[title*="command bridge"i]:before {
  content: "☎"; opacity: 0.4
}
 
/* ⛰☢⚙🚰🌡 */
div[title*="engine"i]:before {
  content: "🚀"; opacity: 0.4
}
 
div[title*="nozzle"i]:before {
  content: "⛰"; opacity: 0.4
}
 
/* 🧨🌟🧳🛎 */
div[title*="combustion chamber"i]:before {
  content: "🧳"; opacity: 0.4
}
 
div[title*="pump"i]:before,
div[title*="pipe"i]:before,
div[title*="piping"i]:before
{
  content: "🚰"; opacity: 0.4
}
 
div[title*="vent"i]:before {
  content: "♨";
  font-size: 40px; opacity: 0.4
}
 
/* 🗼🧇🔗⛓🛡📎🖇 */ 
div[title*="structural space"i]:before {
  content: "⛓"; opacity: 0.4
}
 
/* 🧊📦 */ 
div[title*="cargo bay"i]:before {
  content: "📦"; opacity: 0.4
}
 
div[title*="habitat"i]:before {
  content: "🏠"; opacity: 0.4
}
 
div[title*="surgery unit"i]:before {
  content: "⚕"; opacity: 0.4
}
 
/*🗄🎯🎡*/
div[title*="entertainment unit"i]:before {
  content: "🎡"; opacity: 0.4
}
 
/* 🎨 */
div[title*="workshop unit"i]:before {
  content: "🎨"; opacity: 0.4
}
 
/* sizes */
 
div[title*="small"i]:before,
div[title*="tiny"i]:before,
div[title$=" s"i]:before 
{
  font-size: 20px; opacity: 0.4
}
 
div[title*="medium"i]:before,
div[title$=" m"i]:before 
{
  font-size: 25px; opacity: 0.4
}
 
div[title*="transistor"i]:before 
{
  font-size: 25px; opacity: 0.4
}
 
 
/* buildings - kill stray icons */
div.BuildingIcon__container___jF5GUsz:before
{
  content: "";
}
    
    /* items in market view */
table.BrokerList__table___ylgeiyg >
tbody >
tr >
td >
div.MaterialIcon__container___q8gKIx8 >
div.ColoredIcon__container___djaR4r2:before 
{
  font-size: 24px;
}

/* items in building view */
div.BuildingInformation__recipe___uzanxXw >
div >
div.MaterialIcon__container___q8gKIx8 >
div.ColoredIcon__container___djaR4r2:before
{
  font-size: 26px;
}

/* items in recipe view */
div.MaterialInformation__recipeInputs___eLvfoop >
div.MaterialIcon__container___q8gKIx8 >
div.ColoredIcon__container___djaR4r2:before
{
  font-size: 26px;
}

/* items in planet view */
div.ResourceTable__gridContainer___ymrzTcD >
div.MaterialIcon__container___q8gKIx8 >
div.ColoredIcon__container___djaR4r2:before
{
  font-size: 18px;
}`;
/* unused harmony export IconStyle */



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const TranslationMatrix = {
    "view": "查看",
    "delete": "删除",
    "fly": "航行",
    "cargo": "货物",
    "fuel": "燃料",
    "license": "执照",
    "help": "帮助",
    "notifications": "通知",
    "audio": "声音的",
    "logout": "登出"
};
/* harmony export (immutable) */ __webpack_exports__["a"] = TranslationMatrix;

const MaterialTranslationMatrix = {
    "RAT": "口粮"
};
/* unused harmony export MaterialTranslationMatrix */



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGNlMmZhZjhiNzI4MDRhNGEzM2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vZHVsZVJ1bm5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJhbnNsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVQcm9wZXJ0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9TdHlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJhbnNsYXRpb25NYXRyaXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBOEM7QUFDSjtBQUMxQztBQUNBO0FBQ0EsdUJBQXVCLG1FQUFZO0FBQ25DLFlBQVksK0RBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7OztBQ1ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDOUJEO0FBQUE7QUFBQTtBQUF3QztBQUNtQjtBQUNsQjtBQUNsQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnRkFBaUI7QUFDdkQscUNBQXFDLGdGQUFpQjtBQUN0RDtBQUNBLFNBQVM7QUFDVCxrREFBa0QsOERBQVE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsaUdBQWlHLGdGQUFpQjtBQUNsSDtBQUNBO0FBQ0Esa0dBQWtHLGdGQUFpQjtBQUNuSDtBQUNBO0FBQ0Esa0dBQWtHLGdGQUFpQjtBQUNuSDtBQUNBO0FBQ0EsbUdBQW1HLGdGQUFpQjtBQUNwSDtBQUNBO0FBQ0Esb0dBQW9HLGdGQUFpQjtBQUNySDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDdENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNxQztBQUNBO0FBQ3BFO0FBQ1AsMkVBQTJFLHFCQUFxQjtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHFDQUFxQztBQUMvRTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLG1CQUFtQiw4Q0FBOEM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxTQUFTLHNFQUFhLFFBQVEsc0VBQWE7QUFDM0M7QUFDQTtBQUNBLFdBQVcsc0VBQWEscUJBQXFCLHNFQUFhO0FBQzFEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxvRUFBVyxZQUFZLG9FQUFXO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EseUNBQXlDLEVBQUUsT0FBTyxFQUFFO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsb0VBQVc7QUFDeEQsbUJBQW1CLG9FQUFXO0FBQzlCO0FBQ0Esb0NBQW9DLEVBQUUsT0FBTyxFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLFNBQVMsc0VBQWE7QUFDdEI7QUFDQTtBQUNBLGtCQUFrQixzRUFBYTtBQUMvQixzQkFBc0Isc0VBQWE7QUFDbkM7QUFDQSw2QkFBNkIsa0VBQVUsQ0FBQyxxREFBSztBQUM3QztBQUNBLG9DQUFvQyxrRUFBVSxDQUFDLHFEQUFLO0FBQ3BEO0FBQ0E7QUFDQSw4QkFBOEIsa0VBQVUsQ0FBQyxxREFBSztBQUM5QztBQUNBLGdDQUFnQyw4REFBYztBQUM5QywyQkFBMkIsOERBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EscUNBQXFDLGtFQUFVLENBQUMscURBQUs7QUFDckQ7QUFDQTtBQUNBLDRDQUE0QyxrRUFBVSxDQUFDLHFEQUFLO0FBQzVEO0FBQ0E7QUFDQSxnQ0FBZ0Msa0VBQVUsQ0FBQyxxREFBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrRUFBVSxDQUFDLHFEQUFLO0FBQy9EO0FBQ0E7QUFDQSx3Q0FBd0Msa0VBQVUsQ0FBQyxxREFBSztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxrRUFBVSxDQUFDLHFEQUFLO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsZ0RBQWdELHFCQUFxQixFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDJDQUEyQywyREFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyREFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFNBQVM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUCxxREFBcUQsMkRBQVEsY0FBYyw0RkFBNEYsV0FBVztBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLCtDQUErQyxLQUFLLDJCQUEyQixTQUFTLHdEQUF3RCxnQkFBZ0IsZ0JBQWdCO0FBQ2hMO0FBQ0E7QUFDTztBQUNQO0FBQ0EsNEJBQTRCLHFEQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUDtBQUNBLDhCQUE4QixxREFBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFEQUFLO0FBQ3JDO0FBQ0E7QUFDQSxtQ0FBbUMscURBQUs7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsOEJBQThCLHFEQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscURBQUs7QUFDckM7QUFDQTtBQUNBLG1DQUFtQyxxREFBSztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsNEJBQTRCLHFEQUFLO0FBQ2pDLGtEQUFrRCw4QkFBOEIsRUFBRTtBQUNsRjtBQUNBO0FBQ087QUFDUCxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFEQUFLO0FBQ2xDO0FBQ0E7QUFDQSxxQ0FBcUMscURBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFEQUFLO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxREFBSztBQUN6QztBQUNBO0FBQ0EsK0JBQStCLHFEQUFLO0FBQ3BDO0FBQ0Esa0NBQWtDLHFEQUFLO0FBQ3ZDLGtDQUFrQyxxREFBSztBQUN2QztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMscURBQUs7QUFDeEMsbUNBQW1DLHFEQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEYsNkJBQTZCO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLHdHQUF3RyxtQ0FBbUMsK0RBQStELDJCQUEyQjtBQUNyTztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0EsaUdBQWlHLDZCQUE2QjtBQUM5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLDZEQUFhLGtDQUFrQyw2REFBYSxNQUFNLDZEQUFhLEtBQUssNkRBQWE7QUFDdks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBLGlGQUFpRiw2QkFBNkI7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxxREFBSztBQUM5QztBQUNBLHFDQUFxQyxxREFBSztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxxREFBSztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscURBQUs7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQTtBQUFBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHFEQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscURBQUs7QUFDM0M7QUFDQTtBQUNBLDJDQUEyQyxxREFBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHFEQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscURBQUs7QUFDM0M7QUFDQTtBQUNBLHNDQUFzQyxxREFBSztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxxREFBSztBQUMzQztBQUNBO0FBQ0Esc0NBQXNDLHFEQUFLO0FBQzNDO0FBQ0E7QUFDQSxzQ0FBc0MscURBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHFEQUFLO0FBQ2hELDJDQUEyQyxxREFBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6NEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7Ozs7Ozs7O0FDM0NLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQLGdNQUFnTSwrRkFBK0Y7QUFBQTtBQUFBO0FBQ3hSLCtJQUErSTtBQUFBO0FBQUE7QUFDL0k7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQUE7QUFBQTs7Ozs7Ozs7QUNqMUJLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQUE7QUFDSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2Qyw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDLCtDQUErQztBQUMvQyw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFBQTtBQUFBO0FBQ0k7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUFBO0FBQUE7QUFDSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLHNCQUFzQjs7O0FBR3RCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0EsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFBQTtBQUFBOzs7Ozs7OztBQzM5REk7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQTtBQUFBO0FBQ0s7QUFDUDtBQUNBLEVBQUU7QUFBQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwY2UyZmFmOGI3MjgwNGE0YTMzYiIsImltcG9ydCB7IE1vZHVsZVJ1bm5lciB9IGZyb20gXCIuL01vZHVsZVJ1bm5lclwiO1xuaW1wb3J0IHsgVHJhbnNsYXRvciB9IGZyb20gXCIuL1RyYW5zbGF0b3JcIjtcbm1haW5SdW4oKTtcbmZ1bmN0aW9uIG1haW5SdW4oKSB7XG4gICAgY29uc3QgcnVubmVyID0gbmV3IE1vZHVsZVJ1bm5lcihbXG4gICAgICAgIG5ldyBUcmFuc2xhdG9yKCksXG4gICAgXSk7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcnVubmVyLmxvb3AoKTtcbiAgICB9KSgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi50c1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgTW9kdWxlUnVubmVyIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGVzKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG1vZHVsZXMubWFwKG0gPT4gdGhpcy5tb2R1bGVUb01FKG0pKTtcbiAgICB9XG4gICAgbW9kdWxlVG9NRShtb2R1bGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZHVsZSxcbiAgICAgICAgICAgIG5hbWU6IG1vZHVsZS5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgY2xlYW51cFRpbWU6IDAsXG4gICAgICAgICAgICBydW5UaW1lOiAwXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxvb3AoKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcy5tYXAoZW50cnkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgICAgIGVudHJ5Lm1vZHVsZS5jbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW51cFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHQwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHQxID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICAgICAgZW50cnkubW9kdWxlLnJ1bigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJ1blRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHQxO1xuICAgICAgICAgICAgICAgIGVudHJ5LmNvdW50Kys7XG4gICAgICAgICAgICAgICAgZW50cnkuY2xlYW51cFRpbWUgKz0gY2xlYW51cFRpbWU7XG4gICAgICAgICAgICAgICAgZW50cnkucnVuVGltZSArPSBydW5UaW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb29wKCksIDI1MCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTW9kdWxlUnVubmVyLnRzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGdlbmVyaWNDbGVhbnVwIH0gZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25NYXRyaXggfSBmcm9tIFwiLi9UcmFuc2xhdGlvbk1hdHJpeC50c1wiO1xuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3Rvci50c1wiO1xuZXhwb3J0IGNsYXNzIFRyYW5zbGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhZyA9IFwicHQtdHJhbnNsYXRvclwiO1xuICAgIH1cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICBnZW5lcmljQ2xlYW51cCh0aGlzLnRhZyk7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCAmJiBUcmFuc2xhdGlvbk1hdHJpeFtidXR0b24udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKV0pIHtcbiAgICAgICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBUcmFuc2xhdGlvbk1hdHJpeFtidXR0b24udGV4dENvbnRlbnRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuSGVhZEl0ZW0pO1xuICAgICAgICBoZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgICAgIGlmIChoZWFkZXIudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGVhZGVyLmZpcnN0Q2hpbGQgJiYgaGVhZGVyLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgJiYgaGVhZGVyLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQuaW5jbHVkZXMoXCJMSUNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBoZWFkZXIuZmlyc3RDaGlsZC50ZXh0Q29udGVudC5yZXBsYWNlKC9MSUMvLCBUcmFuc2xhdGlvbk1hdHJpeFtcImxpY2Vuc2VcIl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChoZWFkZXIuZmlyc3RDaGlsZCAmJiBoZWFkZXIuZmlyc3RDaGlsZC50ZXh0Q29udGVudCAmJiBoZWFkZXIuZmlyc3RDaGlsZC50ZXh0Q29udGVudC5pbmNsdWRlcyhcIkhFTFBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBoZWFkZXIuZmlyc3RDaGlsZC50ZXh0Q29udGVudC5yZXBsYWNlKC9IRUxQLywgVHJhbnNsYXRpb25NYXRyaXhbXCJoZWxwXCJdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaGVhZGVyLmZpcnN0Q2hpbGQgJiYgaGVhZGVyLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgJiYgaGVhZGVyLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQuaW5jbHVkZXMoXCJOT1RTXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5maXJzdENoaWxkLnRleHRDb250ZW50ID0gaGVhZGVyLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQucmVwbGFjZSgvTk9UUy8sIFRyYW5zbGF0aW9uTWF0cml4W1wibm90aWZpY2F0aW9uc1wiXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGhlYWRlci5maXJzdENoaWxkICYmIGhlYWRlci5maXJzdENoaWxkLnRleHRDb250ZW50ICYmIGhlYWRlci5maXJzdENoaWxkLnRleHRDb250ZW50LmluY2x1ZGVzKFwiQXVkaW9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBoZWFkZXIuZmlyc3RDaGlsZC50ZXh0Q29udGVudC5yZXBsYWNlKC9BdWRpby8sIFRyYW5zbGF0aW9uTWF0cml4W1wiYXVkaW9cIl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChoZWFkZXIuZmlyc3RDaGlsZCAmJiBoZWFkZXIuZmlyc3RDaGlsZC50ZXh0Q29udGVudCAmJiBoZWFkZXIuZmlyc3RDaGlsZC50ZXh0Q29udGVudC5pbmNsdWRlcyhcIkxvZ291dFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXIuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGhlYWRlci5maXJzdENoaWxkLnRleHRDb250ZW50LnJlcGxhY2UoL0xvZ291dC8sIFRyYW5zbGF0aW9uTWF0cml4W1wibG9nb3V0XCJdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1RyYW5zbGF0b3IudHNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWxlY3RvclwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxOYW1lcywgUGxhbmV0TmFtZXMsIFN5c3RlbU5hbWVzIH0gZnJvbSBcIi4vR2FtZVByb3BlcnRpZXNcIjtcbmltcG9ydCB7IFN0eWxlLCBDYXRlZ29yeUNvbG9ycywgV2l0aFN0eWxlcywgRGVmYXVsdENvbG9ycyB9IGZyb20gXCIuL1N0eWxlXCI7XG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRGaWxlKGZpbGVEYXRhLCBmaWxlTmFtZSwgaXNKU09OID0gdHJ1ZSkge1xuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbaXNKU09OID8gSlNPTi5zdHJpbmdpZnkoZmlsZURhdGEpIDogZmlsZURhdGFdLCB7IHR5cGU6IFwidGV4dC9wbGFpblwiIH0pO1xuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgY29uc3QgdXJsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHVybEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgZmlsZU5hbWUpO1xuICAgIHVybEVsZW1lbnQuaHJlZiA9IHVybDtcbiAgICB1cmxFbGVtZW50LnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgICB1cmxFbGVtZW50LmNsaWNrKCk7XG4gICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlKGh0bWxTdHJpbmcpIHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWxTdHJpbmcudHJpbSgpO1xuICAgIHJldHVybiBkaXYuZmlyc3RDaGlsZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWxlY3RPcHRpb24ob3B0aW9uTGFiZWwsIG9wdGlvblZhbHVlLCByaWdodEFsaWduKSB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25MYWJlbDtcbiAgICBpZiAocmlnaHRBbGlnbikge1xuICAgICAgICBvcHRpb24uc3R5bGUuZGlyZWN0aW9uID0gXCJydGxcIjtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RHVyYXRpb25Ub0VUQShwYXJzZWRTZWNvbmRzKSB7XG4gICAgY29uc3QgZXRhID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGV0YS5zZXRTZWNvbmRzKGV0YS5nZXRTZWNvbmRzKCkgKyBwYXJzZWRTZWNvbmRzKTtcbiAgICBjb25zdCBkaWZmVGltZSA9IE1hdGguYWJzKGV0YS5nZXRUaW1lKCkgLSBub3cuZ2V0VGltZSgpKTtcbiAgICBjb25zdCBkaWZmRGF5cyA9IE1hdGguZmxvb3IoZGlmZlRpbWUgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgIGxldCByZXQgPSBldGEudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7XG4gICAgaWYgKGRpZmZEYXlzID4gMCkge1xuICAgICAgICByZXQgKz0gYCArJHtkaWZmRGF5c31kYDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgY29uc3QgZGF5cyA9IGR1cmF0aW9uLm1hdGNoKC8oXFxkKylcXHMqZC8pO1xuICAgIGNvbnN0IGhvdXJzID0gZHVyYXRpb24ubWF0Y2goLyhcXGQrKVxccypoLyk7XG4gICAgY29uc3QgbWludXRlcyA9IGR1cmF0aW9uLm1hdGNoKC8oXFxkKylcXHMqbS8pO1xuICAgIGNvbnN0IHNlY29uZHMgPSBkdXJhdGlvbi5tYXRjaCgvKFxcZCspXFxzKnMvKTtcbiAgICBsZXQgcGFyc2VkU2Vjb25kcyA9IDA7XG4gICAgaWYgKGRheXMpIHtcbiAgICAgICAgcGFyc2VkU2Vjb25kcyArPSBwYXJzZUludChkYXlzWzFdKSAqIDg2NDAwO1xuICAgIH1cbiAgICBpZiAoaG91cnMpIHtcbiAgICAgICAgcGFyc2VkU2Vjb25kcyArPSBwYXJzZUludChob3Vyc1sxXSkgKiAzNjAwO1xuICAgIH1cbiAgICBpZiAobWludXRlcykge1xuICAgICAgICBwYXJzZWRTZWNvbmRzICs9IHBhcnNlSW50KG1pbnV0ZXNbMV0pICogNjA7XG4gICAgfVxuICAgIGlmIChzZWNvbmRzKSB7XG4gICAgICAgIHBhcnNlZFNlY29uZHMgKz0gcGFyc2VJbnQoc2Vjb25kc1sxXSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRTZWNvbmRzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHRTcGFuKHRleHQsIGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIikge1xuICAgIGNvbnN0IG5ld1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBuZXdTcGFuLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBuZXdTcGFuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gbmV3U3Bhbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXh0RGl2KHRleHQsIGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIikge1xuICAgIGNvbnN0IG5ld1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1NwYW4uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIG5ld1NwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBuZXdTcGFuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbmFuY2lhbFRleHRCb3gocHJpbWFyeVRleHQsIHNlY29uZGFyeVRleHQsIHByaW1hcnlUZXh0Q29sb3IsIGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIikge1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm94LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBib3guY2xhc3NMaXN0LmFkZChcImZpbi1ib3hcIik7XG4gICAgY29uc3QgcHJpbWFyeVRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJpbWFyeVRleHRTcGFuLnN0eWxlLmZvbnRTaXplID0gXCIxMnB4XCI7XG4gICAgcHJpbWFyeVRleHRTcGFuLnN0eWxlLmxpbmVIZWlnaHQgPSBcIjEuMVwiO1xuICAgIHByaW1hcnlUZXh0U3Bhbi5zdHlsZS5jb2xvciA9IHByaW1hcnlUZXh0Q29sb3I7XG4gICAgcHJpbWFyeVRleHRTcGFuLnRleHRDb250ZW50ID0gcHJpbWFyeVRleHQ7XG4gICAgYm94LmFwcGVuZENoaWxkKHByaW1hcnlUZXh0U3Bhbik7XG4gICAgY29uc3Qgc2Vjb25kYXJ5VGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2Vjb25kYXJ5VGV4dERpdi50ZXh0Q29udGVudCA9IHNlY29uZGFyeVRleHQ7XG4gICAgc2Vjb25kYXJ5VGV4dERpdi5zdHlsZS5mb250U2l6ZSA9IFwiMTBweFwiO1xuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUubGluZUhlaWdodCA9IFwiMS4xXCI7XG4gICAgc2Vjb25kYXJ5VGV4dERpdi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjJweFwiO1xuICAgIHNlY29uZGFyeVRleHREaXYuc3R5bGUuY29sb3IgPSBcIiM5OTlcIjtcbiAgICBib3guYXBwZW5kQ2hpbGQoc2Vjb25kYXJ5VGV4dERpdik7XG4gICAgcmV0dXJuIGJveDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW52ZW50b3J5QW1vdW50KHRpY2tlciwgaW52ZW50b3J5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnZlbnRvcnlbXCJJbnZlbnRvcnlcIl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGludmVudG9yeVtcIkludmVudG9yeVwiXVtpXVtcIk1hdGVyaWFsVGlja2VyXCJdID09IHRpY2tlcikge1xuICAgICAgICAgICAgcmV0dXJuIGludmVudG9yeVtcIkludmVudG9yeVwiXVtpXVtcIk1hdGVyaWFsQW1vdW50XCJdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRCdXJuQW1vdW50KHRpY2tlciwgaW52ZW50b3J5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaW52ZW50b3J5W1wiV29ya2ZvcmNlQ29uc3VtcHRpb25cIl1baV1bXCJNYXRlcmlhbFRpY2tlclwiXSA9PSB0aWNrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnZlbnRvcnlbXCJXb3JrZm9yY2VDb25zdW1wdGlvblwiXVtpXVtcIkRhaWx5QW1vdW50XCJdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIENhdGVnb3J5U29ydChhLCBiKSB7XG4gICAgaWYgKCFNYXRlcmlhbE5hbWVzW2FdIHx8ICFNYXRlcmlhbE5hbWVzW2JdKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gTWF0ZXJpYWxOYW1lc1thXVsxXS5sb2NhbGVDb21wYXJlKE1hdGVyaWFsTmFtZXNbYl1bMV0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDb3JyZXNwb25kaW5nUGxhbmV0KHBsYW5ldCwgZGF0YSwgbmVlZEJhc2UpIHtcbiAgICBpZiAoIWRhdGEgfHwgIXBsYW5ldCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHBsYW5ldCAmJiBkYXRhW2ldW1wiUGxhbmV0TmF0dXJhbElkXCJdICYmIGRhdGFbaV1bXCJQbGFuZXROYXR1cmFsSWRcIl0udG9Mb3dlckNhc2UoKSA9PSBwbGFuZXQudG9Mb3dlckNhc2UoKSAmJiAoIW5lZWRCYXNlIHx8IGRhdGFbaV1bXCJ0eXBlXCJdID09IFwiU1RPUkVcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhW2ldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBsYW5ldCAmJiBkYXRhW2ldW1wiUGxhbmV0TmFtZVwiXSAmJiBkYXRhW2ldW1wiUGxhbmV0TmFtZVwiXS50b0xvd2VyQ2FzZSgpID09IHBsYW5ldC50b0xvd2VyQ2FzZSgpICYmICghbmVlZEJhc2UgfHwgZGF0YVtpXVtcInR5cGVcIl0gPT0gXCJTVE9SRVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFbaV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGxhbmV0ICYmIGRhdGFbaV1bXCJQbGFuZXROYXR1cmFsSWRcIl0gJiYgUGxhbmV0TmFtZXNbcGxhbmV0XSAmJiBQbGFuZXROYW1lc1twbGFuZXRdLnRvTG93ZXJDYXNlKCkgPT0gZGF0YVtpXVtcIlBsYW5ldE5hdHVyYWxJZFwiXS50b0xvd2VyQ2FzZSgpICYmICghbmVlZEJhc2UgfHwgZGF0YVtpXVtcInR5cGVcIl0gPT0gXCJTVE9SRVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJhc2VOYW1lKHRleHQpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9AIChbQS1aXXsyfS1bMC05XXszfSBbYS16XSkgQmFzZS8pO1xuICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaFsxXS5yZXBsYWNlKFwiIFwiLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICBtYXRjaCA9IHRleHQubWF0Y2goL0AgKFtBLXogXSopIC0gKFtBLXogXSopIEJhc2UvKTtcbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdICYmIG1hdGNoWzJdKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hbMl07XG4gICAgICAgIH1cbiAgICAgICAgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9AIChbQS16IF0qKSAoW0Etel0pIEJhc2UvKTtcbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdICYmIG1hdGNoWzJdICYmIFN5c3RlbU5hbWVzW21hdGNoWzFdLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgICAgICByZXR1cm4gU3lzdGVtTmFtZXNbbWF0Y2hbMV0udG9VcHBlckNhc2UoKV0gKyBtYXRjaFsyXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIG1hdGNoID0gdGV4dC5tYXRjaCgvQCBbQS1aXXsyfS1bMC05XXszfSAtIChbQS16IF0qKSBCYXNlLyk7XG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjYXRjaCAoVHlwZUVycm9yKSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUludk5hbWUodGV4dCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGV4dC5zcGxpdChcIiBcIik7XG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjYXRjaCAoVHlwZUVycm9yKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBsYW5ldE5hbWUodGV4dCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGV4dC5tYXRjaCgvXFwoKC4qPylcXCkvKTtcbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hbMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNhdGNoIChUeXBlRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZShzdG9yYWdlTmFtZSwgY2FsbGJhY2tGdW5jdGlvbiwgcGFyYW1zKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChzdG9yYWdlTmFtZSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9uKHJlc3VsdCwgcGFyYW1zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtzdG9yYWdlTmFtZV0sIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrRnVuY3Rpb24ocmVzdWx0LCBwYXJhbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDaGlsZHJlbihlbGVtKSB7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgd2hpbGUgKGVsZW0uY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgZWxlbS5yZW1vdmVDaGlsZChlbGVtLmNoaWxkcmVuWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFNldHRpbmdzKHJlc3VsdCkge1xuICAgIHRyeSB7XG4gICAgICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQocmVzdWx0KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQocmVzdWx0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm47XG59XG5leHBvcnQgZnVuY3Rpb24gWElUV2ViUmVxdWVzdCh0aWxlLCBwYXJhbWV0ZXJzLCBjYWxsYmFja0Z1bmN0aW9uLCB1cmwsIHJlcXVlc3RUeXBlID0gXCJHRVRcIiwgaGVhZGVyLCBjb250ZW50KSB7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIkVycm9yISBEYXRhIENvdWxkIE5vdCBCZSBMb2FkZWQhIFRpbWVkIE91dCFcIjtcbiAgICB9O1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9uKHRpbGUsIHBhcmFtZXRlcnMsIHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIHhoci50aW1lb3V0ID0gMTAwMDA7XG4gICAgeGhyLm9wZW4ocmVxdWVzdFR5cGUsIHVybCwgdHJ1ZSk7XG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXJbMF0sIGhlYWRlclsxXSk7XG4gICAgfVxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgIHhoci5zZW5kKGNvbnRlbnQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYXRlcmlhbEVsZW1lbnQodGlja2VyLCBjbGFzc05hbWUgPSBcInBydW4tcmVtb3ZlLWpzXCIsIGFtb3VudCA9IFwibm9uZVwiLCB0ZXh0ID0gZmFsc2UsIHNtYWxsID0gZmFsc2UpIHtcbiAgICBpZiAoIU1hdGVyaWFsTmFtZXNbdGlja2VyXSAmJiB0aWNrZXIgIT0gXCJTSFBUXCIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG5hbWUgPSAoTWF0ZXJpYWxOYW1lc1t0aWNrZXJdIHx8IFtcIlNoaXBtZW50XCJdKVswXTtcbiAgICBjb25zdCBjYXRlZ29yeSA9IChNYXRlcmlhbE5hbWVzW3RpY2tlcl0gfHwgW3VuZGVmaW5lZCwgXCJzaGlwbWVudFwiXSlbMV07XG4gICAgY29uc3QgbWF0VGV4dCA9IGNyZWF0ZVRleHRTcGFuKHRpY2tlciwgY2xhc3NOYW1lKTtcbiAgICBtYXRUZXh0LmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5NYXRUZXh0KSk7XG4gICAgY29uc3QgbWF0VGV4dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1hdFRleHRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5NYXRUZXh0V3JhcHBlcikpO1xuICAgIG1hdFRleHRXcmFwcGVyLmFwcGVuZENoaWxkKG1hdFRleHQpO1xuICAgIGNvbnN0IG1hdGVyaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYXRlcmlhbC5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuTWF0ZXJpYWxFbGVtZW50KSk7XG4gICAgbWF0ZXJpYWwuYXBwZW5kQ2hpbGQobWF0VGV4dFdyYXBwZXIpO1xuICAgIG1hdGVyaWFsLnN0eWxlLmJhY2tncm91bmQgPSBDYXRlZ29yeUNvbG9yc1tjYXRlZ29yeV1bMF07XG4gICAgbWF0ZXJpYWwuc3R5bGUuY29sb3IgPSBDYXRlZ29yeUNvbG9yc1tjYXRlZ29yeV1bMV07XG4gICAgbWF0ZXJpYWwudGl0bGUgPSBuYW1lO1xuICAgIG1hdGVyaWFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dCdWZmZXIoXCJNQVQgXCIgKyB0aWNrZXIudG9VcHBlckNhc2UoKSk7XG4gICAgfSk7XG4gICAgY29uc3QgbWF0ZXJpYWxXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYXRlcmlhbFdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLk1hdGVyaWFsV3JhcHBlcikpO1xuICAgIG1hdGVyaWFsV3JhcHBlci5hcHBlbmRDaGlsZChtYXRlcmlhbCk7XG4gICAgY29uc3QgbWF0ZXJpYWxXcmFwcGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWF0ZXJpYWxXcmFwcGVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLldpdGhTdHlsZXMoU3R5bGUuTWF0ZXJpYWxXcmFwcGVyV3JhcHBlcikpO1xuICAgIG1hdGVyaWFsV3JhcHBlcldyYXBwZXIuYXBwZW5kQ2hpbGQobWF0ZXJpYWxXcmFwcGVyKTtcbiAgICBjb25zdCBvdXRlckxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdXRlckxheWVyLmNsYXNzTGlzdC5hZGQoLi4uV2l0aFN0eWxlcyhTdHlsZS5NYXRlcmlhbE91dGVyKSk7XG4gICAgb3V0ZXJMYXllci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgb3V0ZXJMYXllci5hcHBlbmRDaGlsZChtYXRlcmlhbFdyYXBwZXJXcmFwcGVyKTtcbiAgICBpZiAoYW1vdW50ICYmIGFtb3VudCAhPSBcIm5vbmVcIikge1xuICAgICAgICBjb25zdCBtYXRlcmlhbE51bWJlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXRlcmlhbE51bWJlcldyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLk1hdGVyaWFsTnVtYmVyV3JhcHBlcikpO1xuICAgICAgICBtYXRlcmlhbFdyYXBwZXIuYXBwZW5kQ2hpbGQobWF0ZXJpYWxOdW1iZXJXcmFwcGVyKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxOdW1iZXIgPSBjcmVhdGVUZXh0RGl2KGFtb3VudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgbWF0ZXJpYWxOdW1iZXIuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLk1hdGVyaWFsTnVtYmVyKSk7XG4gICAgICAgIG1hdGVyaWFsTnVtYmVyV3JhcHBlci5hcHBlbmRDaGlsZChtYXRlcmlhbE51bWJlcik7XG4gICAgfVxuICAgIGlmICh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IHRleHRFbGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB0ZXh0RWxlbVdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5XaXRoU3R5bGVzKFN0eWxlLk1hdGVyaWFsTmFtZVRleHQpKTtcbiAgICAgICAgY29uc3QgdGV4dEVsZW0gPSBjcmVhdGVUZXh0U3BhbihuYW1lLCBjbGFzc05hbWUpO1xuICAgICAgICB0ZXh0RWxlbVdyYXBwZXIuYXBwZW5kQ2hpbGQodGV4dEVsZW0pO1xuICAgICAgICBvdXRlckxheWVyLmFwcGVuZENoaWxkKHRleHRFbGVtV3JhcHBlcik7XG4gICAgfVxuICAgIGlmIChzbWFsbCkge1xuICAgICAgICBtYXRlcmlhbFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1hdC1lbGVtZW50LXNtYWxsXCIpO1xuICAgICAgICByZXR1cm4gbWF0ZXJpYWxXcmFwcGVyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbWF0ZXJpYWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtYXQtZWxlbWVudC1sYXJnZVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dGVyTGF5ZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGluayh0ZXh0LCBjb21tYW5kKSB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgc2hvd0J1ZmZlcihjb21tYW5kKTsgfSk7XG4gICAgY29uc3QgbGlua0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGlua0Rpdi5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcbiAgICBsaW5rRGl2LmFwcGVuZENoaWxkKGxpbmspO1xuICAgIHJldHVybiBsaW5rRGl2O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3dCdWZmZXIoY29tbWFuZCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNlbGVjdG9yLk5ld0JGUkJ1dHRvbik7XG4gICAgaWYgKGJ1dHRvbiA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgYWRkU3VibWl0Q29tbWFuZCA9IChpbnB1dCwgY21kKSA9PiB7XG4gICAgICAgIGNoYW5nZVZhbHVlKGlucHV0LCBjbWQpO1xuICAgICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVxdWVzdFN1Ym1pdCgpO1xuICAgIH07XG4gICAgbW9uaXRvck9uRWxlbWVudENyZWF0ZWQoU2VsZWN0b3IuQnVmZmVyVGV4dEZpZWxkLCAoZWxlbSkgPT4gYWRkU3VibWl0Q29tbWFuZChlbGVtLCBjb21tYW5kKSk7XG4gICAgYnV0dG9uLmNsaWNrKCk7XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVmFsdWUoaW5wdXQsIHZhbHVlKSB7XG4gICAgdmFyIHByb3BEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3dbXCJIVE1MSW5wdXRFbGVtZW50XCJdLnByb3RvdHlwZSwgXCJ2YWx1ZVwiKTtcbiAgICBpZiAocHJvcERlc2NyaXB0b3IgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG5hdGl2ZUlucHV0VmFsdWVTZXR0ZXIgPSBwcm9wRGVzY3JpcHRvci5zZXQ7XG4gICAgaWYgKG5hdGl2ZUlucHV0VmFsdWVTZXR0ZXIgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmF0aXZlSW5wdXRWYWx1ZVNldHRlci5jYWxsKGlucHV0LCB2YWx1ZSk7XG4gICAgdmFyIGlucHV0RXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBpbnB1dEV2ZW50LmluaXRFdmVudCgnaW5wdXQnLCB0cnVlLCB0cnVlKTtcbiAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KGlucHV0RXZlbnQpO1xufVxuZnVuY3Rpb24gbW9uaXRvck9uRWxlbWVudENyZWF0ZWQoc2VsZWN0b3IsIGNhbGxiYWNrLCBvbmx5T25jZSA9IHRydWUpIHtcbiAgICBjb25zdCBnZXRFbGVtZW50c0Zyb21Ob2RlcyA9IChub2RlcykgPT4gKEFycmF5LmZyb20obm9kZXMpKS5mbGF0TWFwKG5vZGUgPT4gbm9kZS5ub2RlVHlwZSA9PT0gMyA/IG51bGwgOiBBcnJheS5mcm9tKG5vZGUucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpKS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKTtcbiAgICBsZXQgb25NdXRhdGlvbnNPYnNlcnZlZCA9IGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICAgICAgICBpZiAobXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBnZXRFbGVtZW50c0Zyb21Ob2RlcyhtdXRhdGlvbi5hZGRlZE5vZGVzKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAob25seU9uY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGxldCBjb250YWluZXJTZWxlY3RvciA9ICdib2R5JztcbiAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgY29uZmlnID0geyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcbiAgICBsZXQgTXV0YXRpb25PYnNlcnZlciA9IHdpbmRvd1tcIk11dGF0aW9uT2JzZXJ2ZXJcIl0gfHwgd2luZG93W1wiV2ViS2l0TXV0YXRpb25PYnNlcnZlclwiXTtcbiAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvbk11dGF0aW9uc09ic2VydmVkKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgY29uZmlnKTtcbiAgICByZXR1cm47XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJpY0NsZWFudXAoY2xhc3NOYW1lID0gXCJwcnVuLXJlbW92ZS1qc1wiKSB7XG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSkpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlICYmIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmljVW5oaWRlKGNsYXNzTmFtZSA9IFwicHJ1bi1yZW1vdmUtanNcIikge1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUgKyBcIi1oaWRkZW5cIikpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSArIFwiLWhpZGRlblwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRlZENsZWFudXAoY2xhc3NOYW1lLCBlbGVtZW50KSB7XG4gICAgQXJyYXkuZnJvbShlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKSkuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgcmV0dXJuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1ZmZlcnMoYnVmZmVyQ29kZSkge1xuICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQuZXZhbHVhdGUoYC8vZGl2W0BjbGFzcz0nJHtTZWxlY3Rvci5CdWZmZXJIZWFkZXJ9J11bc3RhcnRzLXdpdGgodHJhbnNsYXRlKC4sICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicsICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicpLCAnJHtidWZmZXJDb2RlfScpXS8uLi8uLmAsIGRvY3VtZW50LCBudWxsLCBYUGF0aFJlc3VsdC5BTllfVFlQRSwgbnVsbCk7XG4gICAgdmFyIGJ1ZmZlcnMgPSBbXTtcbiAgICB2YXIgbm9kZTtcbiAgICB3aGlsZSAobm9kZSA9IG5vZGVzLml0ZXJhdGVOZXh0KCkpIHtcbiAgICAgICAgYnVmZmVycy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVycztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50c0J5WFBhdGgoeHBhdGgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5ldmFsdWF0ZSh4cGF0aCwgZG9jdW1lbnQsIG51bGwsIFhQYXRoUmVzdWx0LkFOWV9VTk9SREVSRURfTk9ERV9UWVBFLCBudWxsKTtcbiAgICBjb25zdCBvdXRwdXQgPSBbXTtcbiAgICB0cnkge1xuICAgICAgICBsZXQgbm9kZSA9IHJlc3VsdC5pdGVyYXRlTmV4dCgpO1xuICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgb3V0cHV0LnB1c2gobm9kZSk7XG4gICAgICAgICAgICBub2RlID0gcmVzdWx0Lml0ZXJhdGVOZXh0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzb3J0VGFibGUodGFibGUsIGNvbHVtbiwgc29ydFR5cGUpIHtcbiAgICB2YXIgc29ydGVyID0gW107XG4gICAgaWYgKHRhYmxlLmNoaWxkcmVuWzFdID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByb3dzID0gQXJyYXkuZnJvbSh0YWJsZS5jaGlsZHJlblsxXS5jaGlsZHJlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gcm93c1tpXS5jaGlsZHJlbltjb2x1bW5dO1xuICAgICAgICBpZiAoaXRlbSA9PSBudWxsIHx8IGl0ZW0uZmlyc3RDaGlsZCA9PSBudWxsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzb3J0ZXIucHVzaChbaXRlbS5maXJzdENoaWxkLnRleHRDb250ZW50LCByb3dzW2ldXSk7XG4gICAgfVxuICAgIGlmIChzb3J0VHlwZSA9PSBcImFscGhcIikge1xuICAgICAgICBzb3J0ZXIuc29ydCh0YWJsZVNvcnRBbHBoKTtcbiAgICB9XG4gICAgc29ydGVyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHRhYmxlLmNoaWxkcmVuWzFdLmluc2VydEJlZm9yZSh0YWJsZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXSwgaXRlbVsxXSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiB0YWJsZVNvcnRBbHBoKGEsIGIpIHtcbiAgICByZXR1cm4gYVswXS5sb2NhbGVDb21wYXJlKGJbMF0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhYmxlKHRpbGUsIGhlYWRlcnMpIHtcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgdGlsZS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgY29uc3QgdGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGhlYWQpO1xuICAgIGNvbnN0IGhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICB0aGVhZC5hcHBlbmRDaGlsZChoZWFkZXJSb3cpO1xuICAgIGZvciAobGV0IHRpdGxlIG9mIGhlYWRlcnMpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcbiAgICAgICAgaGVhZGVyUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuICAgIGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcbiAgICByZXR1cm4gdGJvZHk7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9vbFRpcCh0ZXh0LCBwb3NpdGlvbikge1xuICAgIGNvbnN0IHRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0b29sdGlwLmlubmVySFRNTCA9IGA8c3BhbiBkYXRhLXRvb2x0aXA9XCIke3RleHR9XCIgZGF0YS10b29sdGlwLXBvc2l0aW9uPVwiJHtwb3NpdGlvbn1cIiBjbGFzcz1cImtmVTc4RWFhT1ZiUVIyWU0wZWVHZXc9PVwiIHN0eWxlPVwiZmxvYXQ6IHJldmVydDtmb250LXNpemU6IDEycHg7bWFyZ2luLXRvcDotNHB4O1wiPuKTmDwvc3Bhbj5gO1xuICAgIHJldHVybiB0b29sdGlwLmZpcnN0Q2hpbGQgfHwgdG9vbHRpcDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUG9wdXBTcGFjZXIodGlsZSwgdG9SZW1vdmUpIHtcbiAgICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNwYWNlci5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNwYWNlcik7XG4gICAgc3BhY2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbGUucmVtb3ZlQ2hpbGQodG9SZW1vdmUpO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgcmV0dXJuIHNwYWNlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb3B1cElucHV0Um93KGxhYmVsLCB0ZXh0ID0gXCJcIiwgdG9vbHRpcCA9IFwiXCIpIHtcbiAgICBjb25zdCBpbnB1dFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5wdXRSb3cuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtUm93KTtcbiAgICBjb25zdCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgICBpZiAodG9vbHRpcCAhPSBcIlwiKSB7XG4gICAgICAgIGlucHV0TGFiZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVG9vbFRpcCh0b29sdGlwLCBcInJpZ2h0XCIpKTtcbiAgICB9XG4gICAgaW5wdXRMYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1MYWJlbCk7XG4gICAgaW5wdXRSb3cuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XG4gICAgY29uc3QgaW5wdXRJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5wdXRJbnB1dERpdi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1JbnB1dCk7XG4gICAgaW5wdXRSb3cuYXBwZW5kQ2hpbGQoaW5wdXRJbnB1dERpdik7XG4gICAgY29uc3QgaW5wdXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dElucHV0LnN0eWxlLndpZHRoID0gXCI4MCVcIjtcbiAgICBpbnB1dElucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0SW5wdXQpO1xuICAgIGlucHV0SW5wdXQudmFsdWUgPSB0ZXh0O1xuICAgIHJldHVybiBpbnB1dFJvdztcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb3B1cENoZWNrYm94Um93KGxhYmVsLCBlbmFibGVkID0gZmFsc2UsIHRvb2x0aXAgPSBcIlwiKSB7XG4gICAgY29uc3QgaW5wdXRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlucHV0Um93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVJvdyk7XG4gICAgY29uc3QgaW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgaWYgKHRvb2x0aXAgIT0gXCJcIikge1xuICAgICAgICBpbnB1dExhYmVsLmFwcGVuZENoaWxkKGNyZWF0ZVRvb2xUaXAodG9vbHRpcCwgXCJyaWdodFwiKSk7XG4gICAgfVxuICAgIGlucHV0TGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtTGFiZWwpO1xuICAgIGlucHV0Um93LmFwcGVuZENoaWxkKGlucHV0TGFiZWwpO1xuICAgIGNvbnN0IGlucHV0SW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlucHV0SW5wdXREaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtSW5wdXQpO1xuICAgIGlucHV0Um93LmFwcGVuZENoaWxkKGlucHV0SW5wdXREaXYpO1xuICAgIGNvbnN0IGlucHV0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRJbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGlucHV0SW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXRJbnB1dCk7XG4gICAgaW5wdXRJbnB1dC5jaGVja2VkID0gZW5hYmxlZDtcbiAgICByZXR1cm4gaW5wdXRSb3c7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVPZlBvcHVwUm93KHJvdykge1xuICAgIGlmICghcm93IHx8ICFyb3cuY2hpbGRyZW5bMV0gfHwgIXJvdy5jaGlsZHJlblsxXS5maXJzdENoaWxkKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJvdy5jaGlsZHJlblsxXS5maXJzdENoaWxkLnZhbHVlIHx8IFwiXCI7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENoZWNrT2ZQb3B1cFJvdyhyb3cpIHtcbiAgICBpZiAoIXJvdyB8fCAhcm93LmNoaWxkcmVuWzFdIHx8ICFyb3cuY2hpbGRyZW5bMV0uZmlyc3RDaGlsZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcm93LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQuY2hlY2tlZCB8fCBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU21hbGxCdXR0b24obGFiZWwsIGNsaWNrRnVuY3Rpb24sIHBhcmFtZXRlcnMpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLlNtYWxsQnV0dG9uKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgY2xpY2tGdW5jdGlvbiguLi5wYXJhbWV0ZXJzKTsgfSk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250cmFjdERpY3QoY29udHJhY3RzLCBjb250cmFjdGRpY3QpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRyYWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY29udHJhY3RzW2ldO1xuICAgICAgICBjb250cmFjdGRpY3RbZWxlbWVudFsnbG9jYWxJZCddXSA9IGVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUJ1cm4ocHJvZHVjdGlvbiwgd29ya2ZvcmNlLCBpbnZlbnRvcnkpIHtcbiAgICBjb25zdCBidXJuRGljdCA9IHt9O1xuICAgIGlmIChwcm9kdWN0aW9uICYmIHByb2R1Y3Rpb24ubGluZXMpIHtcbiAgICAgICAgcHJvZHVjdGlvbi5saW5lcy5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICAgICAgY29uc3QgbnVtTGluZXMgPSBsaW5lLmNhcGFjaXR5O1xuICAgICAgICAgICAgdmFyIGhhc1JlY3VycmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHRvdGFsRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgbGluZS5vcmRlcnMuZm9yRWFjaChvcmRlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFvcmRlci5zdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1JlY3VycmluZyA9IGhhc1JlY3VycmluZyB8fCBvcmRlci5yZWN1cnJpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsaW5lLm9yZGVycy5mb3JFYWNoKG9yZGVyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW9yZGVyLnN0YXJ0ZWQgJiYgKCFoYXNSZWN1cnJpbmcgfHwgb3JkZXIucmVjdXJyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbER1cmF0aW9uICs9IG9yZGVyLmR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG90YWxEdXJhdGlvbiAvPSA4NjQwMDAwMDtcbiAgICAgICAgICAgIGxpbmUub3JkZXJzLmZvckVhY2gob3JkZXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghb3JkZXIuc3RhcnRlZCAmJiAoIWhhc1JlY3VycmluZyB8fCBvcmRlci5yZWN1cnJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyLm91dHB1dHMuZm9yRWFjaChtYXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1cm5EaWN0W21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1cm5EaWN0W21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXVtcIkRhaWx5QW1vdW50XCJdICs9IG1hdFtcIkFtb3VudFwiXSAqIG51bUxpbmVzIC8gdG90YWxEdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1cm5EaWN0W21hdFtcIk1hdGVyaWFsVGlja2VyXCJdXSA9IHsgXCJEYWlseUFtb3VudFwiOiBtYXRbXCJBbW91bnRcIl0gKiBudW1MaW5lcyAvIHRvdGFsRHVyYXRpb24sIFwiSW52ZW50b3J5XCI6IDAsIFwiRGF5c0xlZnRcIjogMCwgXCJUeXBlXCI6IFwib3V0cHV0XCIgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyLmlucHV0cy5mb3JFYWNoKG1hdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnVybkRpY3RbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVybkRpY3RbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dW1wiRGFpbHlBbW91bnRcIl0gLT0gbWF0W1wiQW1vdW50XCJdICogbnVtTGluZXMgLyB0b3RhbER1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidXJuRGljdFttYXRbXCJNYXRlcmlhbFRpY2tlclwiXV1bXCJUeXBlXCJdID09IFwib3V0cHV0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVybkRpY3RbbWF0W1wiTWF0ZXJpYWxUaWNrZXJcIl1dW1wiVHlwZVwiXSA9IFwiaW5wdXRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXJuRGljdFttYXRbXCJNYXRlcmlhbFRpY2tlclwiXV0gPSB7IFwiRGFpbHlBbW91bnRcIjogLW1hdFtcIkFtb3VudFwiXSAqIG51bUxpbmVzIC8gdG90YWxEdXJhdGlvbiwgXCJJbnZlbnRvcnlcIjogMCwgXCJEYXlzTGVmdFwiOiAwLCBcIlR5cGVcIjogXCJpbnB1dFwiIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHdvcmtmb3JjZSAmJiB3b3JrZm9yY2Uud29ya2ZvcmNlKSB7XG4gICAgICAgIHdvcmtmb3JjZS53b3JrZm9yY2UuZm9yRWFjaCh0aWVyID0+IHtcbiAgICAgICAgICAgIGlmICh0aWVyLnBvcHVsYXRpb24gPiAxKSB7XG4gICAgICAgICAgICAgICAgdGllci5uZWVkcy5mb3JFYWNoKG5lZWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXIgPSBuZWVkLm1hdGVyaWFsLnRpY2tlcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1cm5EaWN0W3RpY2tlcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1cm5EaWN0W3RpY2tlcl1bXCJEYWlseUFtb3VudFwiXSAtPSBuZWVkLnVuaXRzUGVySW50ZXJ2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXJuRGljdFt0aWNrZXJdW1wiVHlwZVwiXSA9IFwid29ya2ZvcmNlXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXJuRGljdFt0aWNrZXJdID0geyBcIkRhaWx5QW1vdW50XCI6IC1uZWVkLnVuaXRzUGVySW50ZXJ2YWwsIFwiSW52ZW50b3J5XCI6IDAsIFwiRGF5c0xlZnRcIjogMCwgXCJUeXBlXCI6IFwid29ya2ZvcmNlXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGludmVudG9yeSAmJiBpbnZlbnRvcnkuaXRlbXMpIHtcbiAgICAgICAgaW52ZW50b3J5Lml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoYnVybkRpY3RbaXRlbS5NYXRlcmlhbFRpY2tlcl0pIHtcbiAgICAgICAgICAgICAgICBidXJuRGljdFtpdGVtLk1hdGVyaWFsVGlja2VyXVtcIkludmVudG9yeVwiXSA9IGl0ZW0uQW1vdW50O1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLkFtb3VudCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1cm5EaWN0W2l0ZW0uTWF0ZXJpYWxUaWNrZXJdW1wiRGF5c0xlZnRcIl0gPSBidXJuRGljdFtpdGVtLk1hdGVyaWFsVGlja2VyXVtcIkRhaWx5QW1vdW50XCJdID4gMCA/IDEwMDAgOiBNYXRoLmZsb29yKC1pdGVtLkFtb3VudCAvIGJ1cm5EaWN0W2l0ZW0uTWF0ZXJpYWxUaWNrZXJdW1wiRGFpbHlBbW91bnRcIl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBidXJuRGljdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93V2FybmluZ0RpYWxvZyh0aWxlLCBtZXNzYWdlID0gXCJBcmUgeW91IHN1cmU/XCIsIGNvbmZpcm1CdXR0b25UZXh0ID0gXCJDb25maXJtXCIsIGNhbGxiYWNrRnVuY3Rpb24sIHBhcmFtZXRlcnMpIHtcbiAgICBjb25zdCBkaXNwbGF5VGlsZSA9IHRpbGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGlzcGxheVRpbGUuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkFjdGlvbk92ZXJsYXkpO1xuICAgIGNvbnN0IGNlbnRlckludGVyZmFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5hcHBlbmRDaGlsZChjZW50ZXJJbnRlcmZhY2UpO1xuICAgIGNlbnRlckludGVyZmFjZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkFjdGlvbkNlbnRlckludGVyZmFjZSk7XG4gICAgY29uc3QgY29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNlbnRlckludGVyZmFjZS5hcHBlbmRDaGlsZChjb25maXJtKTtcbiAgICBjb25maXJtLnRleHRDb250ZW50ID0gXCJDb25maXJtYXRpb24gUmVxdWlyZWRcIjtcbiAgICBjb25maXJtLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQWN0aW9uQ29uZmlybSk7XG4gICAgY29uc3QgY29uZmlybU1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjZW50ZXJJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoY29uZmlybU1lc3NhZ2UpO1xuICAgIGNvbmZpcm1NZXNzYWdlLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICBjb25maXJtTWVzc2FnZS5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkFjdGlvbkNvbmZpcm1NZXNzYWdlKTtcbiAgICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNlbnRlckludGVyZmFjZS5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xuICAgIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkFjdGlvbkJ1dHRvbnMpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25OZXV0cmFsKTtcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbmZpcm1CdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b24pO1xuICAgIGNvbmZpcm1CdXR0b24uY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25EYW5nZXIpO1xuICAgIGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSBjb25maXJtQnV0dG9uVGV4dDtcbiAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY29uZmlybUJ1dHRvbik7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc3BsYXlUaWxlLnJlbW92ZUNoaWxkKG92ZXJsYXkpO1xuICAgICAgICByZXR1cm47XG4gICAgfSk7XG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBkaXNwbGF5VGlsZS5yZW1vdmVDaGlsZChvdmVybGF5KTtcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrRnVuY3Rpb24ocGFyYW1ldGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkcmF3TGluZUNoYXJ0KHhEYXRhLCB5RGF0YSwgeFNpemUsIHlTaXplLCB4TGFiZWwsIHlMYWJlbCwgbGluZUNvbG9yLCBpc0RhdGVzLCBjdXJyZW5jeVN5bWJvbCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLmhlaWdodCA9IHlTaXplO1xuICAgIGNhbnZhcy53aWR0aCA9IHhTaXplO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbWluWCA9IE1hdGgubWluKC4uLnhEYXRhKTtcbiAgICBjb25zdCBtYXhYID0gTWF0aC5tYXgoLi4ueERhdGEpO1xuICAgIGNvbnN0IG1pblkgPSBNYXRoLm1pbiguLi55RGF0YSk7XG4gICAgY29uc3QgbWF4WSA9IE1hdGgubWF4KC4uLnlEYXRhKTtcbiAgICBjb25zdCB6ZXJvWCA9ICh4TGFiZWwgPyAyNSA6IDApICsgY29udGV4dC5tZWFzdXJlVGV4dCgobWF4WSkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IFwibWF4aW11bUZyYWN0aW9uRGlnaXRzXCI6IDAgfSkpLndpZHRoO1xuICAgIGNvbnN0IHplcm9ZID0geUxhYmVsID8geVNpemUgLSAyMyA6IHlTaXplO1xuICAgIGlmICh4TGFiZWwpIHtcbiAgICAgICAgY29uc3QgeExhYmVsSW5mbyA9IGNvbnRleHQubWVhc3VyZVRleHQoeExhYmVsKTtcbiAgICAgICAgY29udGV4dC5mb250ID0gXCIxMnB4IERyb2lkIFNhbnNcIjtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcIiNlZWVcIjtcbiAgICAgICAgY29udGV4dC5maWxsVGV4dCh4TGFiZWwsIHhTaXplIC8gMiArIHplcm9YIC8gMiAtIHhMYWJlbEluZm8ud2lkdGggLyAyLCB5U2l6ZSk7XG4gICAgfVxuICAgIGlmICh5TGFiZWwpIHtcbiAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgIGNvbnRleHQuZm9udCA9IFwiMTJweCBEcm9pZCBTYW5zXCI7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCIjZWVlXCI7XG4gICAgICAgIGNvbnRleHQudHJhbnNsYXRlKDEwLCB5U2l6ZSAvIDIgKyAxMCk7XG4gICAgICAgIGNvbnRleHQucm90YXRlKC1NYXRoLlBJIC8gMik7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoeUxhYmVsLCAwLCAwKTtcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgfVxuICAgIGNvbnN0IHNjYWxlWCA9ICh4U2l6ZSAtIHplcm9YKSAvIChtYXhYIC0gbWluWCk7XG4gICAgY29uc3Qgc2NhbGVZID0gKHplcm9ZKSAvIChtYXhZIC0gbWluWSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4RGF0YS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29udGV4dC5tb3ZlVG8oKHhEYXRhW2ldIC0gbWluWCkgKiBzY2FsZVggKyB6ZXJvWCwgemVyb1kgLSAoeURhdGFbaV0gLSBtaW5ZKSAqIHNjYWxlWSk7XG4gICAgICAgIGNvbnRleHQubGluZVRvKCh4RGF0YVtpICsgMV0gLSBtaW5YKSAqIHNjYWxlWCArIHplcm9YLCB6ZXJvWSAtICh5RGF0YVtpICsgMV0gLSBtaW5ZKSAqIHNjYWxlWSk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBsaW5lQ29sb3IgPyBsaW5lQ29sb3IgOiBcIiNmN2E2MDBcIjtcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCIjYmJiXCI7XG4gICAgY29udGV4dC5tb3ZlVG8oemVyb1gsIHplcm9ZKTtcbiAgICBjb250ZXh0LmxpbmVUbyh4U2l6ZSwgemVyb1kpO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0Lm1vdmVUbyh6ZXJvWCwgemVyb1kpO1xuICAgIGNvbnRleHQubGluZVRvKHplcm9YLCAwKTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBpc0RhdGVzID8gKG5ldyBEYXRlKChtYXhYIC0gbWluWCkgKiBpIC8gMTAgKyBtaW5YKSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyBtb250aDogXCIyLWRpZ2l0XCIsIGRheTogXCIyLWRpZ2l0XCIgfSkgOiAoKG1heFggLSBtaW5YKSAqIGkgLyAxMCArIG1pblgpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSk7XG4gICAgICAgIGNvbnRleHQuZm9udCA9IFwiMTBweCBEcm9pZCBTYW5zXCI7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCIjOTk5XCI7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQodGV4dCwgKHhTaXplIC0gemVyb1gpICogaSAvIDEwICsgemVyb1gsIHlTaXplIC0gMTIpO1xuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDw9IDU7IGkrKykge1xuICAgICAgICB2YXIgdmFsdWUgPSAobWF4WSAtIG1pblkpICogaSAvIDUgKyBtaW5ZO1xuICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyBNYXRoLnBvdygxMCwgTWF0aC5mbG9vcihNYXRoLmxvZzEwKHZhbHVlKSkgLSAzKSkgKiBNYXRoLnBvdygxMCwgTWF0aC5mbG9vcihNYXRoLmxvZzEwKHZhbHVlKSkgLSAzKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IChjdXJyZW5jeVN5bWJvbCA/IGN1cnJlbmN5U3ltYm9sIDogXCJcIikgKyAodmFsdWUpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBcIm1heGltdW1GcmFjdGlvbkRpZ2l0c1wiOiAwIH0pO1xuICAgICAgICBjb25zdCB0ZXh0SW5mbyA9IGNvbnRleHQubWVhc3VyZVRleHQodGV4dCk7XG4gICAgICAgIGNvbnRleHQuZm9udCA9IFwiMTBweCBEcm9pZCBTYW5zXCI7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCIjOTk5XCI7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQodGV4dCwgemVyb1ggLSB0ZXh0SW5mby53aWR0aCAtIDIsIC0oemVyb1kgLSA4KSAqIGkgLyA1ICsgemVyb1kpO1xuICAgIH1cbiAgICByZXR1cm4gY2FudmFzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdQaWVDaGFydChkYXRhLCBzaXplLCB0ZXh0LCBjb2xvcnMpIHtcbiAgICBjb25zdCBwaWVTaXplID0gc2l6ZSAvIDIgLSAxMjtcbiAgICBjb25zdCBjZW50ZXJYID0gc2l6ZSAqIDEuNTtcbiAgICBjb25zdCBjZW50ZXJZID0gc2l6ZSAvIDIgKyAxMjtcbiAgICB2YXIgYW5nbGUgPSAwO1xuICAgIHZhciBzdW0gPSAwO1xuICAgIGRhdGEuZm9yRWFjaChwb2ludCA9PiB7XG4gICAgICAgIHN1bSArPSBwb2ludDtcbiAgICB9KTtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplICsgMjQ7XG4gICAgY2FudmFzLndpZHRoID0gc2l6ZSAqIDM7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcGllQW5nbGUgPSBkYXRhW2ldIC8gc3VtICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQuYXJjKGNlbnRlclgsIGNlbnRlclksIHBpZVNpemUsIGFuZ2xlLCBhbmdsZSArIHBpZUFuZ2xlKTtcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgYW5nbGUgKz0gcGllQW5nbGU7XG4gICAgICAgIGNvbnRleHQubGluZVRvKGNlbnRlclgsIGNlbnRlclkpO1xuICAgICAgICBpZiAoY29sb3JzKSB7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yc1tpXSB8fCBcIiMwMGZmMDBcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gaSA9PSBkYXRhLmxlbmd0aCAtIDEgJiYgZGF0YS5sZW5ndGggJSBEZWZhdWx0Q29sb3JzLmxlbmd0aCA9PSAxICYmIGRhdGEubGVuZ3RoID4gMSA/IERlZmF1bHRDb2xvcnNbMV0gOiBEZWZhdWx0Q29sb3JzW2kgJSBEZWZhdWx0Q29sb3JzLmxlbmd0aF07XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgfVxuICAgIGlmICghdGV4dCkge1xuICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgIH1cbiAgICBhbmdsZSA9IDA7XG4gICAgdmFyIG1pblggPSBjZW50ZXJYIC0gcGllU2l6ZTtcbiAgICB2YXIgbWF4WCA9IGNlbnRlclggKyBwaWVTaXplO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwaWVBbmdsZSA9IGRhdGFbaV0gLyBzdW0gKiAyICogTWF0aC5QSTtcbiAgICAgICAgY29uc3QgcGVyY2VudCA9IFwiIC0gXCIgKyAoZGF0YVtpXSAvIHN1bSAqIDEwMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IFwibWF4aW11bUZyYWN0aW9uRGlnaXRzXCI6IDAgfSkgKyBcIiVcIjtcbiAgICAgICAgY29uc3QgdGV4dEluZm8gPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRleHRbaV0gKyBwZXJjZW50KTtcbiAgICAgICAgaWYgKHBpZUFuZ2xlIDwgMC4zICYmIGRhdGEubGVuZ3RoID4gNSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0YXJ0WCA9IGNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSArIHBpZUFuZ2xlIC8gMikgKiBzaXplIC8gMjtcbiAgICAgICAgdmFyIHN0YXJ0WSA9IGNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSArIHBpZUFuZ2xlIC8gMikgKiBzaXplIC8gMiArIDQ7XG4gICAgICAgIGlmIChzdGFydFggLSB0ZXh0SW5mby53aWR0aCA8IG1pblgpIHtcbiAgICAgICAgICAgIG1pblggPSBzdGFydFggLSB0ZXh0SW5mby53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydFggKyB0ZXh0SW5mby53aWR0aCA+IG1heFgpIHtcbiAgICAgICAgICAgIG1heFggPSBzdGFydFggKyB0ZXh0SW5mby53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYW5nbGUgKyBwaWVBbmdsZSAvIDIgPiBNYXRoLlBJIC8gMiAmJiBhbmdsZSArIHBpZUFuZ2xlIC8gMiA8IE1hdGguUEkgKiAzIC8gMikge1xuICAgICAgICAgICAgc3RhcnRYIC09IHRleHRJbmZvLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuZm9udCA9IFwiMTJweCBEcm9pZCBTYW5zXCI7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCIjZWVlXCI7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQodGV4dFtpXSArIHBlcmNlbnQsIHN0YXJ0WCwgc3RhcnRZKTtcbiAgICAgICAgYW5nbGUgKz0gcGllQW5nbGU7XG4gICAgfVxuICAgIGNhbnZhcy5zdHlsZS5tYXJnaW5MZWZ0ID0gKG1pblggPiAwID8gLW1pblggKyA1IDogNSkudG9TdHJpbmcoKSArIFwicHhcIjtcbiAgICBjYW52YXMuc3R5bGUubWFyZ2luUmlnaHQgPSAobWF4WCAtIDIgKiBzaXplICsgNSkudG9TdHJpbmcoKSArIFwicHhcIjtcbiAgICByZXR1cm4gY2FudmFzO1xufVxuZXhwb3J0IGNsYXNzIFBvcHVwIHtcbiAgICBjb25zdHJ1Y3Rvcih0aWxlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xuICAgICAgICB0aGlzLnRpbGUgPSB0aWxlO1xuICAgICAgICB0aGlzLm92ZXJsYXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm92ZXJsYXBEaXYuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5PdmVybGFwcGluZ0Rpdik7XG4gICAgICAgIGNvbnN0IGdyZXlTdHJpcGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZ3JleVN0cmlwZXMuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5HcmV5U3RyaXBlcyk7XG4gICAgICAgIHRoaXMub3ZlcmxhcERpdi5hcHBlbmRDaGlsZChncmV5U3RyaXBlcyk7XG4gICAgICAgIHRpbGUuaW5zZXJ0QmVmb3JlKHRoaXMub3ZlcmxhcERpdiwgdGlsZS5maXJzdENoaWxkKTtcbiAgICAgICAgZ3JleVN0cmlwZXMuYXBwZW5kQ2hpbGQobWFrZVBvcHVwU3BhY2VyKHRpbGUsIHRoaXMub3ZlcmxhcERpdikpO1xuICAgICAgICBjb25zdCBwb3B1cEludGVyZmFjZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwb3B1cEludGVyZmFjZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5DZW50ZXJJbnRlcmZhY2UpO1xuICAgICAgICBncmV5U3RyaXBlcy5hcHBlbmRDaGlsZChwb3B1cEludGVyZmFjZVdyYXBwZXIpO1xuICAgICAgICBjb25zdCBwb3B1cEludGVyZmFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHBvcHVwSW50ZXJmYWNlLmNsYXNzTGlzdC5hZGQoXCJEcmFmdENvbmRpdGlvbkVkaXRvcl9fZm9ybV9fX2ZGNzJiSk1cIik7XG4gICAgICAgIHBvcHVwSW50ZXJmYWNlV3JhcHBlci5hcHBlbmRDaGlsZChwb3B1cEludGVyZmFjZSk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5hbWUpKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuU2lkZWJhclNlY3Rpb25IZWFkKTtcbiAgICAgICAgcG9wdXBJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgaGVhZGVyLnN0eWxlLm1hcmdpbiA9IFwiMC41ZW0gMCAwLjVlbVwiO1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwb3B1cEludGVyZmFjZS5hcHBlbmRDaGlsZCh0aGlzLmZvcm0pO1xuICAgICAgICBncmV5U3RyaXBlcy5hcHBlbmRDaGlsZChtYWtlUG9wdXBTcGFjZXIodGlsZSwgdGhpcy5vdmVybGFwRGl2KSk7XG4gICAgfVxuICAgIGFkZFBvcHVwUm93KHJvd1R5cGUsIGxhYmVsLCBpbnB1dFRleHQsIHRvb2x0aXAsIGNhbGxiYWNrLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgbmV3Um93ID0gbmV3IFBvcHVwUm93KHJvd1R5cGUsIGxhYmVsLCBpbnB1dFRleHQsIHRvb2x0aXAsIGNhbGxiYWNrLCBwYXJhbXMpO1xuICAgICAgICB0aGlzLnJvd3MucHVzaChuZXdSb3cpO1xuICAgICAgICB0aGlzLmZvcm0uYXBwZW5kQ2hpbGQobmV3Um93LnJvdyk7XG4gICAgfVxuICAgIHJlbW92ZVBvcHVwUm93KHJvd0luZGV4KSB7XG4gICAgICAgIGNvbnN0IHRvRGVsZXRlID0gdGhpcy5yb3dzLnNwbGljZShyb3dJbmRleCwgMSlbMF07XG4gICAgICAgIHRoaXMuZm9ybS5yZW1vdmVDaGlsZCh0b0RlbGV0ZS5yb3cpO1xuICAgIH1cbiAgICBnZXRSb3dCeU5hbWUobmFtZSkge1xuICAgICAgICB2YXIgc2VsZWN0ZWRSb3c7XG4gICAgICAgIHRoaXMucm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBpZiAocm93LnJvd0xhYmVsID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJvdyA9IHJvdztcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2VsZWN0ZWRSb3c7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudGlsZS5yZW1vdmVDaGlsZCh0aGlzLm92ZXJsYXBEaXYpO1xuICAgIH1cbiAgICBtb3ZlUm93VG9Cb3R0b20ocm93SW5kZXgpIHtcbiAgICAgICAgY29uc3QgbW92aW5nUm93ID0gdGhpcy5yb3dzW3Jvd0luZGV4XTtcbiAgICAgICAgdGhpcy5yZW1vdmVQb3B1cFJvdyhyb3dJbmRleCk7XG4gICAgICAgIHRoaXMucm93cy5wdXNoKG1vdmluZ1Jvdyk7XG4gICAgICAgIHRoaXMuZm9ybS5hcHBlbmRDaGlsZChtb3ZpbmdSb3cucm93KTtcbiAgICB9XG59XG5jbGFzcyBQb3B1cFJvdyB7XG4gICAgY29uc3RydWN0b3Iocm93VHlwZSwgbGFiZWwsIGlucHV0VGV4dCwgdG9vbHRpcCwgY2FsbGJhY2ssIHBhcmFtcykge1xuICAgICAgICB0aGlzLnJvd1R5cGUgPSByb3dUeXBlO1xuICAgICAgICB0aGlzLnJvd0xhYmVsID0gbGFiZWw7XG4gICAgICAgIGlmIChyb3dUeXBlID09IFwidGV4dFwiIHx8IHJvd1R5cGUgPT0gXCJkYXRlXCIgfHwgcm93VHlwZSA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLnJvdy5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1Sb3cpO1xuICAgICAgICAgICAgY29uc3Qgcm93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICByb3dMYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgICAgICAgICAgaWYgKHRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICByb3dMYWJlbC5hcHBlbmRDaGlsZChjcmVhdGVUb29sVGlwKHRvb2x0aXAsIFwicmlnaHRcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93TGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtTGFiZWwpO1xuICAgICAgICAgICAgdGhpcy5yb3cuYXBwZW5kQ2hpbGQocm93TGFiZWwpO1xuICAgICAgICAgICAgY29uc3QgaW5wdXRJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpbnB1dElucHV0RGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybUlucHV0KTtcbiAgICAgICAgICAgIHRoaXMucm93LmFwcGVuZENoaWxkKGlucHV0SW5wdXREaXYpO1xuICAgICAgICAgICAgdGhpcy5yb3dJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGlucHV0SW5wdXREaXYuYXBwZW5kQ2hpbGQodGhpcy5yb3dJbnB1dCk7XG4gICAgICAgICAgICBpZiAoaW5wdXRUZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dJbnB1dC52YWx1ZSA9IGlucHV0VGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb3dUeXBlID09IFwiZGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dJbnB1dC50eXBlID0gXCJkYXRldGltZS1sb2NhbFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocm93VHlwZSA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dJbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucm93SW5wdXQuc3R5bGUud2lkdGggPSBcIjgwJVwiO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93SW5wdXQgPSB0aGlzLnJvd0lucHV0O1xuICAgICAgICAgICAgICAgIHRoaXMucm93SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socm93SW5wdXQudmFsdWUsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocm93VHlwZSA9PSBcImRyb3Bkb3duXCIpIHtcbiAgICAgICAgICAgIHRoaXMucm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMucm93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVJvdyk7XG4gICAgICAgICAgICBjb25zdCByb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIHJvd0xhYmVsLnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgICAgICAgICBpZiAodG9vbHRpcCkge1xuICAgICAgICAgICAgICAgIHJvd0xhYmVsLmFwcGVuZENoaWxkKGNyZWF0ZVRvb2xUaXAodG9vbHRpcCwgXCJyaWdodFwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb3dMYWJlbC5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1MYWJlbCk7XG4gICAgICAgICAgICB0aGlzLnJvdy5hcHBlbmRDaGlsZChyb3dMYWJlbCk7XG4gICAgICAgICAgICBjb25zdCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpbnB1dERpdi5jbGFzc0xpc3QuYWRkKC4uLlN0eWxlLkZvcm1JbnB1dCk7XG4gICAgICAgICAgICB0aGlzLnJvdy5hcHBlbmRDaGlsZChpbnB1dERpdik7XG4gICAgICAgICAgICB0aGlzLnJvd0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgICAgIHRoaXMucm93SW5wdXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdFwiKTtcbiAgICAgICAgICAgIHRoaXMucm93SW5wdXQuc3R5bGUud2lkdGggPSBcIjgwJVwiO1xuICAgICAgICAgICAgdGhpcy5yb3dJbnB1dC5zdHlsZS50ZXh0QWxpZ25MYXN0ID0gXCJyaWdodFwiO1xuICAgICAgICAgICAgdGhpcy5yb3dJbnB1dC5uYW1lID0gXCJwb3B1cC1kcm9wZG93blwiICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnJvd0lucHV0LmlkID0gXCJwb3B1cC1kcm9wZG93blwiICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gaW5wdXRUZXh0W2lucHV0VGV4dC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlucHV0VGV4dCA9IGlucHV0VGV4dC5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICBpbnB1dFRleHQuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd0lucHV0LmFwcGVuZENoaWxkKGNyZWF0ZVNlbGVjdE9wdGlvbih0ZXh0LCB0ZXh0KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnJvd0lucHV0LmNoaWxkcmVuW3NlbGVjdGVkSW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dJbnB1dC5jaGlsZHJlbltzZWxlY3RlZEluZGV4XS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dJbnB1dC5zZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKHRoaXMucm93SW5wdXQpO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93SW5wdXQgPSB0aGlzLnJvd0lucHV0O1xuICAgICAgICAgICAgICAgIHRoaXMucm93SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJvd0lucHV0LnNlbGVjdGVkT3B0aW9uc1swXS52YWx1ZSwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyb3dUeXBlID09IFwiYnV0dG9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMucm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMucm93LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVSb3cpO1xuICAgICAgICAgICAgY29uc3Qgcm93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICByb3dMYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgICAgICAgICAgcm93TGFiZWwuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5Gb3JtU2F2ZUxhYmVsKTtcbiAgICAgICAgICAgIHRoaXMucm93LmFwcGVuZENoaWxkKHJvd0xhYmVsKTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGlucHV0RGl2LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuRm9ybVNhdmVJbnB1dCk7XG4gICAgICAgICAgICB0aGlzLnJvdy5hcHBlbmRDaGlsZChpbnB1dERpdik7XG4gICAgICAgICAgICB0aGlzLnJvd0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIHRoaXMucm93SW5wdXQudGV4dENvbnRlbnQgPSBpbnB1dFRleHQ7XG4gICAgICAgICAgICB0aGlzLnJvd0lucHV0LmNsYXNzTGlzdC5hZGQoLi4uU3R5bGUuQnV0dG9uKTtcbiAgICAgICAgICAgIHRoaXMucm93SW5wdXQuY2xhc3NMaXN0LmFkZCguLi5TdHlsZS5CdXR0b25QcmltYXJ5KTtcbiAgICAgICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKHRoaXMucm93SW5wdXQpO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhwYXJhbXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdXRpbC50c1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgTE1Db21tb2RpdHlBZFRleHQ6IFwiZGl2W2NsYXNzfj0nQ29tbW9kaXR5QWRfX3RleHRfX194SlFtSk5hJ11cIixcbiAgICBMTUNvbW1vZGl0eUFkUHJpY2VTcGFuOiBcImRpdltjbGFzc349J0NvbW1vZGl0eUFkX190ZXh0X19feEpRbUpOYSddID4gc3BhblwiLFxuICAgIFByb2RJdGVtOiBcIk9yZGVyU2xvdF9fY29udGFpbmVyX19fWUZ5azhhN1wiLFxuICAgIFByb2RRdWV1ZVRhYmxlOiBcInRhYmxlW2NsYXNzfj0nUHJvZHVjdGlvblF1ZXVlX190YWJsZV9fX2pIUUd5VUknXVwiLFxuICAgIEJ1ZmZlckhlYWRlcjogJ1RpbGVGcmFtZV9fY21kX19fU2NCWVcwbiB0eXBlX190eXBlLXZlcnktc21hbGxfX19IYVZNcXJFJyxcbiAgICBTaWRlYmFyOiBcImRpdiNUT1VSX1RBUkdFVF9TSURFQkFSX1JJR0hUXCIsXG4gICAgTE1Qb3N0Rm9ybTogXCJmb3JtW2NsYXNzfj0nTG9jYWxNYXJrZXRQb3N0X19mb3JtX19fQ0FWUGRERSddXCIsXG4gICAgV29ya2ZvcmNlQ29uc3VtcHRpb25UYWJsZTogXCJkaXZbY2xhc3N+PSdUaWxlRnJhbWVfX3RpdGxlX19feFJjWkNQeCddXCIsXG4gICAgWElUVGlsZTogXCJkaXZbY2xhc3N+PSdTY3JvbGxWaWV3X192aWV3X19fb3ZmNTlUayddID4gZGl2XCIsXG4gICAgQnVmZmVyVGl0bGU6IFwiZGl2W2NsYXNzfj0nVGlsZUZyYW1lX190aXRsZV9fX3hSY1pDUHgnXVwiLFxuICAgIE5vdGlmaWNhdGlvbjogXCJkaXZbY2xhc3N+PSdBbGVydExpc3RJdGVtX19jb250ZW50X19fWFllYlIxRSddXCIsXG4gICAgUHJvZFF1ZXVlOiBcImRpdltjbGFzc349J1NpdGVQcm9kdWN0aW9uTGluZXNfX2NvbHVtbl9fX19zM2NUazcnXVwiLFxuICAgIEJ1ZmZlclBhbmVsOiBcImRpdltjbGFzc349J1Njcm9sbFZpZXdfX3ZpZXdfX19vdmY1OVRrJ11cIixcbiAgICBOZXdCRlJCdXR0b246IFwiVE9VUl9UQVJHRVRfQlVUVE9OX0JVRkZFUl9ORVdcIixcbiAgICBXaG9sZVdpbmRvdzogXCIjY29udGFpbmVyXCIsXG4gICAgQnVmZmVyVGV4dEZpZWxkOiBcImlucHV0W2NsYXNzfj0nUGFuZWxTZWxlY3Rvcl9faW5wdXRfX193VXN0SHJPJ11cIixcbiAgICBCdWZmZXJMaXN0OiBcIiNjb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDMpXCIsXG4gICAgU2NyZWVuQ29udHJvbHM6IFwiVE9VUl9UQVJHRVRfU0NSRUVOX0NPTlRST0xTXCIsXG4gICAgTGVmdFNpZGViYXI6IFwiVE9VUl9UQVJHRVRfU0lERUJBUl9MRUZUXzAyXCIsXG4gICAgQnVmZmVyQXJlYTogXCJkaXZbY2xhc3N+PSdUaWxlX19zZWxlY3Rvcl9fX0hZTW1ORU8nXVwiLFxuICAgIFNjcmVlbk5hbWU6IFwic3BhbltjbGFzc349J1NjcmVlbkNvbnRyb2xzX19jdXJyZW50U2NyZWVuTmFtZV9fX0kyc0lZYWcnXVwiLFxuICAgIE1hdGVyaWFsSWNvbjogXCJHcmlkSXRlbVZpZXdfX2ltYWdlX19feU1vS09aVlwiLFxuICAgIENoYXRMaW5rOiBcInNwYW5bY2xhc3N+PSdMaW5rX19saW5rX19fZmE0bW1NQSddXCIsXG4gICAgSW52ZW50b3J5TmFtZTogXCJzcGFuW2NsYXNzfj0nTGlua19fbGlua19fX2ZhNG1tTUEnXVwiLFxuICAgIEZ1bGxNYXRlcmlhbEljb246IFwiZGl2W2NsYXNzfj0nR3JpZEl0ZW1WaWV3X19jb250YWluZXJfX194UDJ1Sno4J11cIixcbiAgICBJbnZlbnRvcnk6IFwiZGl2W2NsYXNzfj0nSW52ZW50b3J5Vmlld19fZ3JpZF9fX1V5UlFTWDgnXVwiLFxuICAgIE1hdGVyaWFsVGV4dDogXCJzcGFuW2NsYXNzfj0nQ29sb3JlZEljb25fX2xhYmVsX19fT1UxSTRvUCddXCIsXG4gICAgSW52ZW50b3J5U29ydE9wdGlvbnM6IFwiZGl2W2NsYXNzfj0nSW52ZW50b3J5U29ydENvbnRyb2xzX19jb250cm9sc19fX3FrNWhlQVonXVwiLFxuICAgIENoYXRBcmVhOiBcImRpdltjbGFzc349J0NoYW5uZWxfX21lc3NhZ2VBbmRVc2VyTGlzdF9fX05DZ1FBdFcnXVwiLFxuICAgIE1hdGVyaWFsUXVhbnRpdHk6IFwiZGl2W2NsYXNzfj0nTWF0ZXJpYWxJY29uX19pbmRpY2F0b3JfX19TSHdsbmRKJ11cIixcbiAgICBIZWFkZXJSb3c6IFwiZGl2W2NsYXNzfj0nRm9ybUNvbXBvbmVudF9fY29udGFpbmVyUGFzc2l2ZV9fX0ZyQmR5R1UnXVwiLFxuICAgIEZvcm1JbnB1dFJvdzogXCJkaXZbY2xhc3N+PSdGb3JtQ29tcG9uZW50X19jb250YWluZXJBY3RpdmVfX19IWnY5akhkJ11cIixcbiAgICBDb250REZvcm06IFwiZGl2W2NsYXNzfj0nRHJhZnRDb25kaXRpb25FZGl0b3JfX2Zvcm1fX19mRjcyYkpNJ10gPiBmb3JtXCIsXG4gICAgQ29udERDb25kaXRpb25zVGFibGU6IFwiZGl2W2NsYXNzfj0nRHJhZnRfX2NvbmRpdGlvbnNfX19iY0lVbmRIJ10gPiB0YWJsZSA+IHRib2R5XCIsXG4gICAgQ29udERGb3JtTGFiZWw6IFwibGFiZWxbY2xhc3N+PSdGb3JtQ29tcG9uZW50X19sYWJlbF9fX2FRQjE1ZUInXVwiLFxuICAgIENvbnRERm9ybVJvd1NwYWNlcjogXCJkaXZbY2xhc3N+PSdEeW5hbWljSW5wdXRfX2R5bmFtaWNfX19DZDRHa2J6J11cIixcbiAgICBDb250REZvcm1JbnB1dDogXCJkaXZbY2xhc3N+PSdGb3JtQ29tcG9uZW50X19pbnB1dF9fX1puSThtWWknXVwiLFxuICAgIFNpZGViYXJDb250cmFjdDogXCJkaXZbY2xhc3N+PSdTaWRlYmFyX19jb250cmFjdF9fX0owZ21sek4nXVwiLFxuICAgIFNpZGViYXJDb250cmFjdElkOiBcInNwYW5bY2xhc3N+PSdTaWRlYmFyX19jb250cmFjdElkX19fTGc4NVRSWiddXCIsXG4gICAgQnVpbGRpbmdMaXN0OiBcImRpdltjbGFzc349J1NlY3Rpb25MaXN0X19jb250YWluZXJfX19FdFV6V3lpJ11cIixcbiAgICBEaXZpZGVyOiBcImRpdltjbGFzc349J1NlY3Rpb25MaXN0X19kaXZpZGVyX19fY3dXTzQ1diddXCIsXG4gICAgSGVhZEl0ZW06IFwic3BhbltjbGFzc349J0hlYWRJdGVtX19sYWJlbF9fX3RsWEU0cVonXVwiXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2VsZWN0b3IudHNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IEN1cnJlbmN5U3ltYm9scyA9IHtcbiAgICBcIkNJU1wiOiBcIuKCoVwiLFxuICAgIFwiQUlDXCI6IFwi4oKzXCIsXG4gICAgXCJOQ0NcIjogXCLigqZcIixcbiAgICBcIklDQVwiOiBcIseCXCIsXG4gICAgXCJFQ0RcIjogXCLigqxcIixcbn07XG5leHBvcnQgY29uc3QgRmFjdGlvbkhlYWRlcnMgPSB7XG4gICAgXCJDYXN0aWxsby1JdG9cIjogXCJDSVwiLFxuICAgIFwiSW5zaXRvclwiOiBcIklDXCIsXG4gICAgXCJBbnRhcmVzXCI6IFwiQUlcIixcbiAgICBcIk5FTyBDaGFydGVyXCI6IFwiTkNcIlxufTtcbmV4cG9ydCBjb25zdCBSYXRpbmdDb2xvcnMgPSB7XG4gICAgXCJQXCI6IFwiIzFiNmI5Y1wiLFxuICAgIFwiVVwiOiBcIiM4YjIxMWVcIixcbiAgICBcIkZcIjogXCIjZTI2YzM3XCIsXG4gICAgXCJFXCI6IFwiI2U3NzgyYlwiLFxuICAgIFwiRFwiOiBcIiNlODdkMjhcIixcbiAgICBcIkNcIjogXCIjZWQ4OTFjXCIsXG4gICAgXCJCXCI6IFwiI2YxOTUxMFwiLFxuICAgIFwiQVwiOiBcIiNmNmEyMDRcIlxufTtcbmV4cG9ydCBjb25zdCBGcmllbmRseU5hbWVzID0ge1xuICAgIFwiTG9jYWxNYXJrZXRBZHNcIjogXCJMTSBVbml0IFByaWNlc1wiLFxuICAgIFwiT3JkZXJFVEFzXCI6IFwiT3JkZXIgRVRBc1wiLFxuICAgIFwiRmxpZ2h0RVRBc1wiOiBcIkZsaWdodCBQbGFubmluZyBFVEFzXCIsXG4gICAgXCJTaGlwcGluZ0Fkc1wiOiBcIkxNIFNoaXBwaW5nIFJhdGVzXCIsXG4gICAgXCJQb3N0TE1cIjogXCJMTSBQb3N0aW5nIFVuaXQgUHJpY2VcIixcbiAgICBcIkNvbnRyYWN0RHJhZnRzXCI6IFwiQ09OVEQgVW5pdCBQcmljZXNcIixcbiAgICBcIlF1ZXVlTG9hZFwiOiBcIlF1ZXVlIFBlcmNlbnQgRGlzcGxheVwiLFxuICAgIFwiQ29uc3VtYWJsZVRpbWVyc1wiOiBcIldvcmtmb3JjZSBDb25zdW1hYmxlIEJ1cm5cIixcbiAgICBcIkZsZWV0RVRBc1wiOiBcIkZsZWV0IEVUQXNcIixcbiAgICBcIk5vdGlmaWNhdGlvbnNcIjogXCJOb3RpZmljYXRpb25zXCIsXG4gICAgXCJTY3JlZW5VbnBhY2tcIjogXCJTY3JlZW4gVW5wYWNrXCIsXG4gICAgXCJJbWFnZUNyZWF0b3JcIjogXCJDaGF0IEltYWdlIENyZWF0b3JcIixcbiAgICBcIkludmVudG9yeU9yZ2FuaXplclwiOiBcIkludmVudG9yeSBTb3J0aW5nXCIsXG4gICAgXCJDb21tYW5kQ29ycmVjdGVyXCI6IFwiQ29tbWFuZCBDb3JyZWN0ZXJcIixcbiAgICBcIkNhbGN1bGF0b3JCdXR0b25cIjogXCJDYWxjdWxhdG9yIEJ1dHRvblwiLFxuICAgIFwiU2lkZWJhclwiOiBcIlNpZGViYXJcIixcbiAgICBcIkhlYWRlck1pbmltaXplclwiOiBcIk1pbmltaXplIEhlYWRlcnMgKE1hc3RlcilcIixcbiAgICBcIlBlbmRpbmdDb250cmFjdHNcIjogXCJQZW5kaW5nIENvbnRyYWN0c1wiLFxuICAgIFwiQ29tcGFjdFVJXCI6IFwiQ29tcGFjdCBVSVwiXG59O1xuZXhwb3J0IGNvbnN0IFNvcnRpbmdUcmlhbmdsZUhUTUwgPSBgXHJcbjxkaXYgdGl0bGU9XCJcIj48c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHJvbGU9XCJpbWdcIiB2ZXJzaW9uPVwiMS4xXCIgZmlsbD1cImN1cnJlbnRjb2xvclwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj48Zz48cGF0aCBkPVwiTS44ODY4MSAxLjA5Nzc1MmwxMi4xMzc3NCAyMS4wMjMxOEwyNS40MjI5NjQgMS4xMDU0NDZ6XCI+PC9wYXRoPjwvZz48L3N2Zz48L2Rpdj5gO1xuZXhwb3J0IGNvbnN0IFBsYW5ldENvbW1hbmRzID0gW1wiQURNXCIsIFwiQlNDXCIsIFwiQ09HQ1wiLCBcIkNPR0NQRVhcIiwgXCJDT0dDVVwiLCBcIkZMVFBcIiwgXCJMUlwiLCBcIkxNUFwiLCBcIkxNXCIsIFwiUExJXCIsIFwiUE9QSVwiLCBcIlBPUFJcIiwgXCJQUFNcIiwgXCJTSFlcIiwgXCJXQVJcIiwgXCJCU1wiXTtcbmV4cG9ydCBjb25zdCBTeXN0ZW1OYW1lcyA9IHtcbiAgICBcIkFSQ0xJR0hUXCI6IFwiQU0tNzgzXCIsXG4gICAgXCJGT1JHRS1LRUVQXCI6IFwiRkstMzcxXCIsXG4gICAgXCJNT1VOVCBPTFlNUFVTXCI6IFwiSE0tMDQ5XCIsXG4gICAgXCJHQVRFV0FZXCI6IFwiSE0tMjIzXCIsXG4gICAgXCJORU8gRURFTlwiOiBcIkpTLTI5OVwiLFxuICAgIFwiRUJJU1VcIjogXCJKUy05NTJcIixcbiAgICBcIkJBU1RBQkxPTlwiOiBcIktXLTAyMFwiLFxuICAgIFwiRE9MWkVOQVwiOiBcIkxHLTQxOFwiLFxuICAgIFwiVFJJTklUWVwiOiBcIk9GLTI1OVwiLFxuICAgIFwiTU9SSUFcIjogXCJPVC01ODBcIixcbiAgICBcIk9VVEVSIEhFQVZFTlwiOiBcIlBHLTg5OVwiLFxuICAgIFwiQVVSVU1cIjogXCJRSi02NTBcIixcbiAgICBcIkFDRVRBUkVTXCI6IFwiUUotNjg0XCIsXG4gICAgXCJIVUJVUlwiOiBcIlRELTIwM1wiLFxuICAgIFwiSE9URUlcIjogXCJVVi0xMzVcIixcbiAgICBcIkJFTlRFTlwiOiBcIlVWLTM1MVwiLFxuICAgIFwiREFJS09LVVwiOiBcIlVWLTc5NlwiLFxuICAgIFwiSE9SVFVTXCI6IFwiVkgtMzMxXCIsXG4gICAgXCJNSURXQVlcIjogXCJXQi02NzVcIixcbiAgICBcIkFOVEFSRVMgSUlJXCI6IFwiWlYtMTk0XCIsXG4gICAgXCJBTlRBUkVTIElcIjogXCJaVi0zMDdcIixcbiAgICBcIkFOVEFSRVMgSUlcIjogXCJaVi03NTlcIlxufTtcbmV4cG9ydCBjb25zdCBQbGFuZXROYW1lcyA9IHtcbiAgICBcIkxFTVVSSUFcIjogXCJBSi03NjhhXCIsXG4gICAgXCJHQUxMVVNcIjogXCJBTS03ODNiXCIsXG4gICAgXCJFTUVOVElPUlwiOiBcIkFNLTc4M2NcIixcbiAgICBcIlRZUEhPTlwiOiBcIkFVLTUyMmJcIixcbiAgICBcIk5PVkEgSE9OU0hVXCI6IFwiQlMtNzg4Y1wiLFxuICAgIFwiVEFDT1RPUElBXCI6IFwiQ0ItMDQ1YlwiLFxuICAgIFwiUFlSR09TXCI6IFwiQ0gtNzcxYVwiLFxuICAgIFwiVEFMT1NJQVwiOiBcIkRDLTgyM2JcIixcbiAgICBcIk9STVwiOiBcIkRXLTQ1NmdcIixcbiAgICBcIk1BTklGT0xEXCI6IFwiRUwtMTc5YlwiLFxuICAgIFwiTk9WQSBVTkFMQVNLQVwiOiBcIkVaLTQ3NmJcIixcbiAgICBcIlRPS1RVXCI6IFwiRkstMDM3ZlwiLFxuICAgIFwiTEEgRk9SR0VcIjogXCJGSy0zNzFiXCIsXG4gICAgXCJCT1VDSEVSXCI6IFwiRkstNzk0YlwiLFxuICAgIFwiVkFVTFRcIjogXCJHQy02NDViXCIsXG4gICAgXCJDSFVcIjogXCJHWS0xMTBjXCIsXG4gICAgXCJQT1NFSURPTlwiOiBcIkhNLTA0OWJcIixcbiAgICBcIkFQT1RIRUNBUllcIjogXCJJQS02MDNiXCIsXG4gICAgXCJFTEVDVFJPTklDQVwiOiBcIklZLTAyOGNcIixcbiAgICBcIk5FTUVTSVNcIjogXCJKUy0yOTlhXCIsXG4gICAgXCJHSUJTT05cIjogXCJKUy05NTJjXCIsXG4gICAgXCJBVVNUUkFMSUFcIjogXCJLSS00NDZhXCIsXG4gICAgXCJERU1FVEVSXCI6IFwiS0ktNDQ2YlwiLFxuICAgIFwiSEVSTUVTXCI6IFwiS0ktNDQ4YlwiLFxuICAgIFwiUk9DS1wiOiBcIktRLTk2NmJcIixcbiAgICBcIk1JTExJV0FZU1wiOiBcIktXLTAyMGNcIixcbiAgICBcIkdJRURJIFBSSU1FXCI6IFwiS1ctMzU4YlwiLFxuICAgIFwiRVRIRVJXSU5EXCI6IFwiS1ctNjg4Y1wiLFxuICAgIFwiS0lOWkFcIjogXCJMRy00MThiXCIsXG4gICAgXCJQTEFORVQgTUMgUExBTkVURkFDRVwiOiBcIkxHLTkxM2VcIixcbiAgICBcIkFSQVRPUkFcIjogXCJMUy0yMzFiXCIsXG4gICAgXCJHUklGRk9OU1RPTkVcIjogXCJMUy0zMDBjXCIsXG4gICAgXCJKVVJBXCI6IFwiT0YtMjU5ZFwiLFxuICAgIFwiQkVSVEhJRVJcIjogXCJPRi0zNzViXCIsXG4gICAgXCJBREFMSU5BXCI6IFwiT0YtMzc1Y1wiLFxuICAgIFwiREFOQUtJTFwiOiBcIk9ULTQ0MmJcIixcbiAgICBcIklJUk9OXCI6IFwiT1QtNTgwYVwiLFxuICAgIFwiTU9OVEVNXCI6IFwiT1QtNTgwYlwiLFxuICAgIFwiVkFMTElTXCI6IFwiT1QtNTgwY1wiLFxuICAgIFwiUEFMTEFEQVwiOiBcIk9ULTU4MGRcIixcbiAgICBcIlBSSVNNXCI6IFwiT1QtODg5YVwiLFxuICAgIFwiSkVFVElZVVwiOiBcIk9ULTg4OWJcIixcbiAgICBcIlNBTEFESU5cIjogXCJQRy04OTliXCIsXG4gICAgXCJOQVNDRU5UXCI6IFwiUUotMTQ5Y1wiLFxuICAgIFwiRUxPTlwiOiBcIlFKLTY1MGNcIixcbiAgICBcIkxPTSBQQUxBTktBXCI6IFwiUUotNjg0YVwiLFxuICAgIFwiQUNFTEFORFwiOiBcIlFKLTY4NGJcIixcbiAgICBcIkNJUkNBXCI6IFwiUVEtMDAxYVwiLFxuICAgIFwiQ0lSQ0VcIjogXCJRUS0wMDFiXCIsXG4gICAgXCJDRUxFQkRJTFwiOiBcIlFRLTY0NWJcIixcbiAgICBcIk1BTEFIQVRcIjogXCJSQy0wNDBiXCIsXG4gICAgXCJJUk9ORk9SR0VcIjogXCJSQy0wNDBjXCIsXG4gICAgXCJJQ0UgU1RBVElPTiBBTFBIQVwiOiBcIlNFLTExMGNcIixcbiAgICBcIlNIRU9MXCI6IFwiVEQtMjAzYlwiLFxuICAgIFwiUkhBWkVTXCI6IFwiVEQtMjI4YlwiLFxuICAgIFwiQVNCRVNUT1MgTEVBRCBBU0JFU1RPU1wiOiBcIlVWLTA3MmNcIixcbiAgICBcIktBVE9BXCI6IFwiVVYtMzUxYVwiLFxuICAgIFwiWUFOTklDS1wiOiBcIlVWLTM1MWJcIixcbiAgICBcIlVNQlJBXCI6IFwiVVYtMzUxY1wiLFxuICAgIFwiQklPR0VORVNJU1wiOiBcIlVWLTM1MWRcIixcbiAgICBcIlBST1hJT05cIjogXCJVVi03OTZiXCIsXG4gICAgXCJQSEFOVEFTTVwiOiBcIlZILTA0M2FcIixcbiAgICBcIlBST01JVE9SXCI6IFwiVkgtMzMxYVwiLFxuICAgIFwiSEVMSU9OIFBSSU1FXCI6IFwiVkgtMzMxZFwiLFxuICAgIFwiT0RZU1NFVVNcIjogXCJWSC0zMzFmXCIsXG4gICAgXCJBVkFMT05cIjogXCJWSC0zMzFnXCIsXG4gICAgXCJIWURST05cIjogXCJWSC0zMzFpXCIsXG4gICAgXCJHQVNXT1JMRFwiOiBcIldCLTY3NWlcIixcbiAgICBcIk1JTUFSXCI6IFwiV0MtNzAyYlwiLFxuICAgIFwiTUFHVVNcIjogXCJYRC0zNTRiXCIsXG4gICAgXCJVUE9OT1JcIjogXCJYSC0zMjlhXCIsXG4gICAgXCJMSUJFUlRBU1wiOiBcIlhILTU5NGFcIixcbiAgICBcIktJUlVOQVwiOiBcIlhILTU5NGJcIixcbiAgICBcIkNPUlRFWlwiOiBcIlhILTU5NGNcIixcbiAgICBcIktVQlwiOiBcIllJLTA1OWZcIixcbiAgICBcIkhBUlBJTkFcIjogXCJZSS0yMDloXCIsXG4gICAgXCJBUkNBRElBXCI6IFwiWUktNjgzY1wiLFxuICAgIFwiVkVSREFOVFwiOiBcIllJLTcxNWJcIixcbiAgICBcIk5PUldJQ0tcIjogXCJZSy02NDliXCIsXG4gICAgXCJOSUtFXCI6IFwiWlYtMTk0YVwiLFxuICAgIFwiSEVQSEFFU1RVU1wiOiBcIlpWLTMwN2NcIixcbiAgICBcIlBIT0JPU1wiOiBcIlpWLTMwN2RcIixcbiAgICBcIlZVTENBTlwiOiBcIlpWLTc1OWJcIixcbiAgICBcIkRFSU1PU1wiOiBcIlpWLTc1OWNcIixcbiAgICBcIkhBUk1PTklBXCI6IFwiWlYtODk2YlwiXG59O1xuZXhwb3J0IGNvbnN0IE1hdGVyaWFsTmFtZXMgPSB7XG4gICAgXCJBQVJcIjogW1wiQW50ZW5uYSBBcnJheVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcbiAgICBcIkFCSFwiOiBbXCJBZHZhbmNlZCBCdWxraGVhZFwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxuICAgIFwiQUNTXCI6IFtcIkF1dG9tYXRlZCBDb29saW5nIFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcbiAgICBcIkFERVwiOiBbXCJBZHZhbmNlZCBEZWNrIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXG4gICAgXCJBRFJcIjogW1wiQXV0by1Eb2NcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcbiAgICBcIkFEU1wiOiBbXCJBdWRpbyBEaXN0cmlidXRpb24gU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxuICAgIFwiQUVGXCI6IFtcIkFlcm9zdGF0IEZvdW5kYXRpb25cIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXG4gICAgXCJBRU5cIjogW1wiQWR2YW5jZWQgU1RMIEVuZ2luZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIkFGUFwiOiBbXCJBZHZhbmNlZCBGdWVsIFB1bXBcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJBRlJcIjogW1wiQWR2YW5jZWQgRnVlbCBSb2RcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJBR1NcIjogW1wiQWR2YW5jZWQgSGlnaC1HIFNlYXRzXCIsIFwic2hpcCBwYXJ0c1wiXSxcbiAgICBcIkFIUFwiOiBbXCJBZHZhbmNlZCBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcbiAgICBcIkFJUlwiOiBbXCJBaXIgU2NydWJiZXJcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXG4gICAgXCJBTFwiOiBbXCJBbHVtaW5pdW1cIiwgXCJtZXRhbHNcIl0sXG4gICAgXCJBTEVcIjogW1wiU3RlbGxhciBQYWxlIEFsZVwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxuICAgIFwiQUxHXCI6IFtcIlByb3RlaW4tUmljaCBBbGdhZVwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIkFMT1wiOiBbXCJBbHVtaW5pdW0gT3JlXCIsIFwib3Jlc1wiXSxcbiAgICBcIkFNTVwiOiBbXCJBbW1vbmlhXCIsIFwiZ2FzZXNcIl0sXG4gICAgXCJBTlpcIjogW1wiQWR2YW5jZWQgTm96emxlXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiQVBUXCI6IFtcIkFkdmFuY2VkIFRoZXJtYWwgUHJvdGVjdGlvbiBUaWxlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxuICAgIFwiQVJcIjogW1wiQXJnb25cIiwgXCJnYXNlc1wiXSxcbiAgICBcIkFSUFwiOiBbXCJBZHZhbmNlZCBBbnRpLXJhZCBQbGF0ZVwiLCBcInNoaXAgc2hpZWxkc1wiXSxcbiAgICBcIkFTRVwiOiBbXCJBZHZhbmNlZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXG4gICAgXCJBU1RcIjogW1wiQWxwaGEtU3RhYmlsaXplZCBUaXRhbml1bVwiLCBcImFsbG95c1wiXSxcbiAgICBcIkFUQVwiOiBbXCJBZHZhbmNlZCBUcmFuc3BhcmVudCBBcGVydHVyZVwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxuICAgIFwiQVRQXCI6IFtcIkFkdmFuY2VkIFRoZXJtYWwgUHJvdGVjdGlvbiBNYXRlcmlhbFwiLCBcInNoaXAgcGFydHNcIl0sXG4gICAgXCJBVVwiOiBbXCJHb2xkXCIsIFwibWV0YWxzXCJdLFxuICAgIFwiQVVPXCI6IFtcIkdvbGQgT3JlXCIsIFwib3Jlc1wiXSxcbiAgICBcIkFXRlwiOiBbXCJBY3RpdmUgV2F0ZXIgRmlsdGVyXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxuICAgIFwiQVdIXCI6IFtcIkFkdmFuY2VkIFdoaXBwbGUgU2hpZWxkaW5nXCIsIFwic2hpcCBzaGllbGRzXCJdLFxuICAgIFwiQkFDXCI6IFtcIkhlbHBmdWwgQmFjdGVyaWFcIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJCQUlcIjogW1wiQmFzaWMgQUkgRnJhbWV3b3JrXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcbiAgICBcIkJCSFwiOiBbXCJCYXNpYyBCdWxraGVhZFwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxuICAgIFwiQkNPXCI6IFtcIkJ1ZGdldCBDb25uZWN0b3JzXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXG4gICAgXCJCREVcIjogW1wiQmFzaWMgRGVjayBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxuICAgIFwiQkVcIjogW1wiQmVyeWxsaXVtXCIsIFwiZWxlbWVudHNcIl0sXG4gICAgXCJCRUFcIjogW1wiUHJvdGVpbi1SaWNoIEJlYW5zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiQkVSXCI6IFtcIkJlcnlsIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXG4gICAgXCJCRlBcIjogW1wiQmFzaWMgRnVlbCBQdW1wXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiQkZSXCI6IFtcIkJhc2ljIEZ1ZWwgUm9kXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiQkdDXCI6IFtcIlNoaWVsZGVkIENvbm5lY3RvcnNcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcbiAgICBcIkJHT1wiOiBbXCJCbHVlIEdvbGRcIiwgXCJhbGxveXNcIl0sXG4gICAgXCJCR1NcIjogW1wiQmFzaWMgSGlnaC1HIFNlYXRzXCIsIFwic2hpcCBwYXJ0c1wiXSxcbiAgICBcIkJIUFwiOiBbXCJCYXNpYyBIdWxsIFBsYXRlXCIsIFwic2hpcCBwYXJ0c1wiXSxcbiAgICBcIkJJRFwiOiBbXCJGdWxsLUJvZHkgSW50ZXJhY3Rpb24gRGV2aWNlXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxuICAgIFwiQkxcIjogW1wiQnJlYXRoYWJsZSBMaXF1aWRcIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJCTEVcIjogW1wiRGVzYXR1cmF0aW9uIEFnZW50XCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiQk1GXCI6IFtcIkJhc2ljIE1haW5mcmFtZVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcbiAgICBcIkJORFwiOiBbXCJCYW5kYWdlc1wiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxuICAgIFwiQk9SXCI6IFtcIkJvcm9uIENyeXN0YWxzXCIsIFwibWluZXJhbHNcIl0sXG4gICAgXCJCT1NcIjogW1wiQm9yb3NpbGljYXRlXCIsIFwiYWxsb3lzXCJdLFxuICAgIFwiQlBUXCI6IFtcIkJhc2ljIFRoZXJtYWwgUHJvdGVjdGlvbiBUaWxlXCIsIFwic2hpcCBzaGllbGRzXCJdLFxuICAgIFwiQlIxXCI6IFtcIkNvbW1hbmQgQnJpZGdlIE1LMVwiLCBcInVuaXQgcHJlZmFic1wiXSxcbiAgICBcIkJSMlwiOiBbXCJDb21tYW5kIEJyaWRnZSBNSzJcIiwgXCJ1bml0IHByZWZhYnNcIl0sXG4gICAgXCJCUk1cIjogW1wiQmlvcmVhY3RpdmUgTWluZXJhbHNcIiwgXCJtaW5lcmFsc1wiXSxcbiAgICBcIkJST1wiOiBbXCJCcm9uemVcIiwgXCJhbGxveXNcIl0sXG4gICAgXCJCUlBcIjogW1wiQmFzaWMgQW50aS1yYWQgUGxhdGVcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXG4gICAgXCJCUlNcIjogW1wiU2hvcnQtZGlzdGFuY2UgQ29tbWFuZCBCcmlkZ2VcIiwgXCJ1bml0IHByZWZhYnNcIl0sXG4gICAgXCJCU0NcIjogW1wiQm9keSBTY2FubmVyXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxuICAgIFwiQlNFXCI6IFtcIkJhc2ljIFN0cnVjdHVyYWwgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcbiAgICBcIkJUQVwiOiBbXCJCYXNpYyBUcmFuc3BhcmVudCBBcGVydHVyZVwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxuICAgIFwiQlRTXCI6IFtcIkJhY3RlcmlhbCBUdW5nc3RlbiBTb2x1dGlvblwiLCBcImxpcXVpZHNcIl0sXG4gICAgXCJCV0hcIjogW1wiQmFzaWMgV2hpcHBsZSBTaGllbGRpbmdcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXG4gICAgXCJCV1NcIjogW1wiQmFzaWMgV29ya3N0YXRpb25cIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXG4gICAgXCJDXCI6IFtcIkNhcmJvblwiLCBcImVsZW1lbnRzXCJdLFxuICAgIFwiQ0FcIjogW1wiQ2FsY2l1bVwiLCBcImVsZW1lbnRzXCJdLFxuICAgIFwiQ0FGXCI6IFtcIkNhZmZlaW5hdGVkIEJlYW5zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiQ0FQXCI6IFtcIkVsZWN0cmljIEZpZWxkIENhcGFjaXRvclwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxuICAgIFwiQ0JMXCI6IFtcIkxhcmdlIENhcGFjaXRvciBCYW5rXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXG4gICAgXCJDQk1cIjogW1wiTWVkaXVtIENhcGFjaXRvciBCYW5rXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXG4gICAgXCJDQlNcIjogW1wiU21hbGwgQ2FwYWNpdG9yIEJhbmtcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcbiAgICBcIkNDXCI6IFtcIkNsaW1hdGUgQ29udHJvbGxlclwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcbiAgICBcIkNDRFwiOiBbXCJDcm93ZCBDb250cm9sIERyb25lXCIsIFwiZHJvbmVzXCJdLFxuICAgIFwiQ0RcIjogW1wiQ2FwYWNpdGl2ZSBEaXNwbGF5XCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcbiAgICBcIkNGXCI6IFtcIkNlcmFtaWMgRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXG4gICAgXCJDSEFcIjogW1wiQ29tYnVzdGlvbiBDaGFtYmVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiQ0xcIjogW1wiQ2hsb3JpbmVcIiwgXCJlbGVtZW50c1wiXSxcbiAgICBcIkNMSVwiOiBbXCJDYWxpY2hlIFJvY2tcIiwgXCJtaW5lcmFsc1wiXSxcbiAgICBcIkNNS1wiOiBbXCJcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxuICAgIFwiQ09GXCI6IFtcIkNhZmZlaW5hdGVkIEluZnVzaW9uXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXG4gICAgXCJDT01cIjogW1wiQ29tbXVuaWNhdGlvbiBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXG4gICAgXCJDT1RcIjogW1wiQ290dG9uIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxuICAgIFwiQ1FMXCI6IFtcIkNyZXcgUXVhcnRlcnMgKExhcmdlKVwiLCBcInVuaXQgcHJlZmFic1wiXSxcbiAgICBcIkNRTVwiOiBbXCJDcmV3IFF1YXJ0ZXJzIChNZWRpdW0pXCIsIFwidW5pdCBwcmVmYWJzXCJdLFxuICAgIFwiQ1FTXCI6IFtcIkNyZXcgUXVhcnRlcnMgKFNtYWxsKVwiLCBcInVuaXQgcHJlZmFic1wiXSxcbiAgICBcIkNRVFwiOiBbXCJDcmV3IFF1YXJ0ZXJzIChUaW55KVwiLCBcInVuaXQgcHJlZmFic1wiXSxcbiAgICBcIkNSVVwiOiBbXCJDcnlvZ2VuaWMgVW5pdFwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcbiAgICBcIkNTVFwiOiBbXCJDcnlvZ2VuaWMgU3RhYmlsaXplclwiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIkNURlwiOiBbXCJDZXJhbWljLVR1bmdzdGVuIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxuICAgIFwiQ1VcIjogW1wiQ29wcGVyXCIsIFwibWV0YWxzXCJdLFxuICAgIFwiQ1VPXCI6IFtcIkNvcHBlciBPcmVcIiwgXCJvcmVzXCJdLFxuICAgIFwiREFcIjogW1wiRGF0YSBBbmFseXplclwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxuICAgIFwiRENIXCI6IFtcIkRyb25lIENoYXNzaXNcIiwgXCJkcm9uZXNcIl0sXG4gICAgXCJEQ0xcIjogW1wiRHVyYWJsZSBDYXNpbmcgTFwiLCBcInBsYXN0aWNzXCJdLFxuICAgIFwiRENNXCI6IFtcIkR1cmFibGUgQ2FzaW5nIE1cIiwgXCJwbGFzdGljc1wiXSxcbiAgICBcIkRDU1wiOiBbXCJEdXJhYmxlIENhc2luZyBTXCIsIFwicGxhc3RpY3NcIl0sXG4gICAgXCJERFwiOiBbXCJEaXN0cmlidXRlZCBEYXRhYmFzZVwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxuICAgIFwiRERUXCI6IFtcIkREVCBQbGFudCBBZ2VudFwiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIkRFQ1wiOiBbXCJEZWNvcmF0aXZlIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxuICAgIFwiRElTXCI6IFtcIkluZm9ybWF0aW9uIERpc3BsYXlcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxuICAgIFwiRE9VXCI6IFtcIkRyb25lIE9wZXJhdGlvbnMgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcbiAgICBcIkRSRlwiOiBbXCJEcm9uZSBGcmFtZVwiLCBcImRyb25lc1wiXSxcbiAgICBcIkRWXCI6IFtcIkRhdGEgVmlzdWFsaXplclwiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxuICAgIFwiRFdcIjogW1wiRHJpbmtpbmcgV2F0ZXJcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxuICAgIFwiRURDXCI6IFtcIkVudGVydGFpbm1lbnQgRGF0YSBDb3JlXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXG4gICAgXCJFRVNcIjogW1wiRW5yaWNoZWQgRWluc3RlaW5pdW1cIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJFTkdcIjogW1wiU3RhbmRhcmQgU1RMIEVuZ2luZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIkVQT1wiOiBbXCJFcG94eSBSZXNpblwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXG4gICAgXCJFU1wiOiBbXCJFaW5zdGVpbml1bVwiLCBcImVsZW1lbnRzXCJdLFxuICAgIFwiRVRDXCI6IFtcIkVucmljaGVkIFRlY2huZXRpdW1cIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJFWE9cIjogW1wiRXhvc2tlbGV0b24gV29yayBTdWl0XCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcbiAgICBcIkZcIjogW1wiRmx1b3JpbmVcIiwgXCJnYXNlc1wiXSxcbiAgICBcIkZBTFwiOiBbXCJGZXJyb21pbml1bVwiLCBcImFsbG95c1wiXSxcbiAgICBcIkZBTlwiOiBbXCJBY3RpdmUgQ29vbGluZyBEZXZpY2VcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxuICAgIFwiRkNcIjogW1wiRmxvdyBDb250cm9sIERldmljZVwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcbiAgICBcIkZFXCI6IFtcIklyb25cIiwgXCJtZXRhbHNcIl0sXG4gICAgXCJGRU9cIjogW1wiSXJvbiBPcmVcIiwgXCJvcmVzXCJdLFxuICAgIFwiRkVUXCI6IFtcIkZlcnJvLVRpdGFuaXVtXCIsIFwiYWxsb3lzXCJdLFxuICAgIFwiRkZcIjogW1wiRlRMIEZ1ZWxcIiwgXCJmdWVsc1wiXSxcbiAgICBcIkZGQ1wiOiBbXCJGVEwgRmllbGQgQ29udHJvbGxlclwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcbiAgICBcIkZJTVwiOiBbXCJGbGF2b3VyZWQgSW5zdGEtTWVhbFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXG4gICAgXCJGSVJcIjogW1wiRmlzc2lvbiBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiRkxPXCI6IFtcIkZsb2F0aW5nIFRhbmtcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXG4gICAgXCJGTFBcIjogW1wiRmx1aWQgUGlwaW5nXCIsIFwiY29uc3RydWN0aW9uIHBhcnRzXCJdLFxuICAgIFwiRkxYXCI6IFtcIkZsdXhcIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJGT0RcIjogW1wiQWxsLVB1cnBvc2UgRm9kZGVyXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiRlNFXCI6IFtcIkZ1ZWwtc2F2aW5nIFNUTCBFbmdpbmVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJGVU5cIjogW1wiRW50ZXJ0YWlubWVudCBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxuICAgIFwiR0FMXCI6IFtcIkdhbGVyaXRlIFJvY2tcIiwgXCJtaW5lcmFsc1wiXSxcbiAgICBcIkdDXCI6IFtcIkN5bGluZHJpY2FsIEdhcyBDb250YWluZXJcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXG4gICAgXCJHQ0hcIjogW1wiR2xhc3MgQ29tYnVzdGlvbiBDaGFtYmVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiR0VOXCI6IFtcIkdsYXNzLWJhc2VkIFNUTCBFbmdpbmVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJHSU5cIjogW1wiRWluc3RlaW5pdW0tSW5mdXNlZCBHaW5cIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcbiAgICBcIkdMXCI6IFtcIkdsYXNzXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcbiAgICBcIkdOWlwiOiBbXCJHbGFzcyBOb3p6bGVcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJHUkFcIjogW1wiV2luZS1RdWFsaXR5IEdyYXBlc1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIkdSTlwiOiBbXCJIaWdoLUNhcmIgR3JhaW5zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiR1ZcIjogW1wiR2FzIFZlbnRcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXG4gICAgXCJIXCI6IFtcIkh5ZHJvZ2VuXCIsIFwiZ2FzZXNcIl0sXG4gICAgXCJIMk9cIjogW1wiV2F0ZXJcIiwgXCJsaXF1aWRzXCJdLFxuICAgIFwiSEFCXCI6IFtcIkhhYml0YXQgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcbiAgICBcIkhBTFwiOiBbXCJIYWxpdGUgQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcbiAgICBcIkhDQ1wiOiBbXCJIaWdoLUNhcGFjaXR5IENvbm5lY3RvcnNcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcbiAgICBcIkhDUFwiOiBbXCJIeWRyb2NhcmJvbiBQbGFudHNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJIRFwiOiBbXCJIb2xvZ3JhcGhpYyBEaXNwbGF5XCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxuICAgIFwiSEVcIjogW1wiSGVsaXVtXCIsIFwiZ2FzZXNcIl0sXG4gICAgXCJIRTNcIjogW1wiSGVsaXVtLTMgSXNvdG9wZVwiLCBcImdhc2VzXCJdLFxuICAgIFwiSEVSXCI6IFtcIlNwaWN5IEhlcmJzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiSEVYXCI6IFtcIkhlbGlvdHJvcGUgRXh0cmFjdFwiLCBcImxpcXVpZHNcIl0sXG4gICAgXCJISFBcIjogW1wiSGFyZGVuZWQgSHVsbCBQbGF0ZVwiLCBcInNoaXAgcGFydHNcIl0sXG4gICAgXCJITVNcIjogW1wiSGF6TWF0IFdvcmsgU3VpdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXG4gICAgXCJITlpcIjogW1wiSHlwZXJ0aHJ1c3QgTm96emxlXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiSE9HXCI6IFtcIkhvbG9ncmFwaGljIEdsYXNzZXNcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXG4gICAgXCJIT1BcIjogW1wiRmxvd2VyeSBIb3BzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiSFBDXCI6IFtcIkhhbmRoZWxkIFBlcnNvbmFsIENvbnNvbGVcIiwgXCJlbGVjdHJvbmljIGRldmljZXNcIl0sXG4gICAgXCJIUFJcIjogW1wiSGlnaC1wb3dlciBGVEwgUmVhY3RvclwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIkhTRVwiOiBbXCJIYXJkZW5lZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXG4gICAgXCJIU1NcIjogW1wiU21hcnQgU3BhY2UgU3VpdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXG4gICAgXCJIVEVcIjogW1wiSHlwZXJ0aHJ1c3QgU1RMIEVuZ2luZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIkhZUlwiOiBbXCJIeXBlci1wb3dlciBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiSVwiOiBbXCJJb2RpbmVcIiwgXCJlbGVtZW50c1wiXSxcbiAgICBcIklEQ1wiOiBbXCJJbmZvcm1hdGlvbiBEYXRhIENvcmVcIiwgXCJzb2Z0d2FyZSBzeXN0ZW1zXCJdLFxuICAgIFwiSU1NXCI6IFtcIkluZm9ybWF0aW9uIE1hbmFnZW1lbnQgU3lzdGVtXCIsIFwic29mdHdhcmUgc3lzdGVtc1wiXSxcbiAgICBcIklORFwiOiBbXCJJbmRpZ28gQ29sb3JhbnRcIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJJTlNcIjogW1wiSW5zdUZvYW1cIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxuICAgIFwiSlVJXCI6IFtcIlNlZGF0aXZlIFN1YnN0YW5jZVwiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIktPTVwiOiBbXCJLb21idWNoYVwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxuICAgIFwiS1ZcIjogW1wiS2V2bGFyIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxuICAgIFwiTEJIXCI6IFtcIkxpZ2h0d2VpZ2h0IEJ1bGtoZWFkXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXG4gICAgXCJMQ1wiOiBbXCJBSS1Bc3Npc3RlZCBMYWIgQ29hdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXG4gICAgXCJMQ0JcIjogW1wiTGFyZ2UgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcbiAgICBcIkxDUlwiOiBbXCJMaXF1aWQgQ3J5c3RhbHNcIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJMRFwiOiBbXCJMb2NhbCBEYXRhYmFzZVwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXG4gICAgXCJMREVcIjogW1wiTGlnaHR3ZWlnaHQgRGVjayBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxuICAgIFwiTERJXCI6IFtcIkxhc2VyIERpb2Rlc1wiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxuICAgIFwiTEVTXCI6IFtcIkxpcXVpZCBFaW5zdGVpbml1bVwiLCBcImxpcXVpZHNcIl0sXG4gICAgXCJMRkVcIjogW1wiTGFyZ2UgRlRMIEVtaXR0ZXJcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJMRkxcIjogW1wiTGFyZ2UgRlRMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXG4gICAgXCJMRlBcIjogW1wiTG93LWhlYXQgRnVlbCBQdW1wXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiTEhQXCI6IFtcIkxpZ2h0d2VpZ2h0IEh1bGwgUGxhdGVcIiwgXCJzaGlwIHBhcnRzXCJdLFxuICAgIFwiTElcIjogW1wiTGl0aGl1bVwiLCBcIm1ldGFsc1wiXSxcbiAgICBcIkxJT1wiOiBbXCJMaXRoaXVtIE9yZVwiLCBcIm9yZXNcIl0sXG4gICAgXCJMSVNcIjogW1wiTGlmZSBTdXBwb3J0IFN5c3RlbVwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcbiAgICBcIkxJVFwiOiBbXCJOZW9uIExpZ2h0aW5nIFN5c3RlbVwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcbiAgICBcIkxPR1wiOiBbXCJMb2dpc3RpY3MgU3lzdGVtXCIsIFwiZWxlY3Ryb25pYyBzeXN0ZW1zXCJdLFxuICAgIFwiTFNFXCI6IFtcIkxpZ2h0d2VpZ2h0IFN0cnVjdHVyYWwgRWxlbWVudHNcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcbiAgICBcIkxTTFwiOiBbXCJMYXJnZSBTVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcbiAgICBcIkxTVFwiOiBbXCJMaW1lc3RvbmVcIiwgXCJtaW5lcmFsc1wiXSxcbiAgICBcIkxUQVwiOiBbXCJMaWdodHdlaWdodCBUcmFuc3BhcmVudCBBcGVydHVyZVwiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxuICAgIFwiTFVcIjogW1wiTGFib3JhdG9yeSBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxuICAgIFwiTUFHXCI6IFtcIk1hZ25ldGl0ZVwiLCBcIm1pbmVyYWxzXCJdLFxuICAgIFwiTUFJXCI6IFtcIkhpZ2gtQ2FyYiBNYWl6ZVwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIk1CXCI6IFtcIk1vdGhlcmJvYXJkXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcbiAgICBcIk1DQlwiOiBbXCJNZWRpdW0gQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcbiAgICBcIk1DR1wiOiBbXCJNaW5lcmFsIENvbnN0cnVjdGlvbiBHcmFudWxhdGVcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxuICAgIFwiTUVBXCI6IFtcIlF1YWxpdHkgTWVhdCBNZWFsXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcbiAgICBcIk1FRFwiOiBbXCJCYXNpYyBNZWRpY2FsIEtpdFwiLCBcImNvbnN1bWFibGVzIChiYXNpYylcIl0sXG4gICAgXCJNRkVcIjogW1wiTWVkaXVtIEZUTCBFbWl0dGVyXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiTUZLXCI6IFtcIk1lZGl1bSBGYXN0ZW5lciBLaXRcIiwgXCJlbGVjdHJvbmljIHBpZWNlc1wiXSxcbiAgICBcIk1GTFwiOiBbXCJNZWRpdW0gRlRMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXG4gICAgXCJNR1wiOiBbXCJNYWduZXNpdW1cIiwgXCJlbGVtZW50c1wiXSxcbiAgICBcIk1HQ1wiOiBbXCJNYWduZXRpYyBHcm91bmQgQ292ZXJcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXG4gICAgXCJNR1NcIjogW1wiTWFnbmVzaXRlXCIsIFwibWluZXJhbHNcIl0sXG4gICAgXCJNSExcIjogW1wiTWV0YWwtSGFsaWRlIExpZ2h0aW5nIFN5c3RlbVwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcbiAgICBcIk1IUFwiOiBbXCJNaWNybyBIZWFkcGhvbmVzXCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxuICAgIFwiTUxJXCI6IFtcIk1hY2hpbmUgTGVhcm5pbmcgSW50ZXJmYWNlXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcbiAgICBcIk1QQ1wiOiBbXCJNaWNyby1Qcm9jZXNzb3JcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxuICAgIFwiTVNMXCI6IFtcIk1lZGl1bSBTVEwgRnVlbCBUYW5rIEtpdFwiLCBcInNoaXAga2l0c1wiXSxcbiAgICBcIk1UQ1wiOiBbXCJNZWdhVHViZSBDb2F0aW5nXCIsIFwiY29uc3RydWN0aW9uIG1hdGVyaWFsc1wiXSxcbiAgICBcIk1UUFwiOiBbXCJNZWF0IFRpc3N1ZSBQYXR0aWVzXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiTVVTXCI6IFtcIlByb3RlaW4tUmljaCBNdXNocm9vbXNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJNV0ZcIjogW1wiTWVkaXVtIFdhZmVyXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXG4gICAgXCJOXCI6IFtcIk5pdHJvZ2VuXCIsIFwiZ2FzZXNcIl0sXG4gICAgXCJOQVwiOiBbXCJTb2RpdW1cIiwgXCJlbGVtZW50c1wiXSxcbiAgICBcIk5BQlwiOiBbXCJTb2RpdW0gQm9yb2h5ZHJpZGVcIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJOQ1NcIjogW1wiTmFuby1DYXJib24gU2hlZXRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxuICAgIFwiTkVcIjogW1wiTmVvblwiLCBcImdhc2VzXCJdLFxuICAgIFwiTkZcIjogW1wiTmV0d29ya2luZyBGcmFtZXdvcmtcIiwgXCJzb2Z0d2FyZSBjb21wb25lbnRzXCJdLFxuICAgIFwiTkZJXCI6IFtcIk5hbm8gRmliZXJcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxuICAgIFwiTkdcIjogW1wiTmFuby1Db2F0ZWQgR2xhc3NcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxuICAgIFwiTkxcIjogW1wiTnlsb24gRmFicmljXCIsIFwidGV4dGlsZXNcIl0sXG4gICAgXCJOTlwiOiBbXCJOZXVyYWwgTmV0d29ya1wiLCBcInNvZnR3YXJlIHRvb2xzXCJdLFxuICAgIFwiTk9aXCI6IFtcIkJhc2ljIE5venpsZVwiLCBcInNoaXAgZW5naW5lc1wiXSxcbiAgICBcIk5SXCI6IFtcIk5hbm8tRW5oYW5jZWQgUmVzaW5cIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJOU1wiOiBbXCJOdXRyaWVudCBTb2x1dGlvblwiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIk5TVFwiOiBbXCJOZXVyb1N0aW11bGFudHNcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcbiAgICBcIk5VVFwiOiBbXCJUcmlnbHljZXJpZGUgTnV0c1wiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIk5WMVwiOiBbXCJOYXZpZ2F0aW9uIE1vZHVsZSBNSzFcIiwgXCJzaGlwIHBhcnRzXCJdLFxuICAgIFwiTlYyXCI6IFtcIk5hdmlnYXRpb24gTW9kdWxlIE1LMlwiLCBcInNoaXAgcGFydHNcIl0sXG4gICAgXCJPXCI6IFtcIk94eWdlblwiLCBcImdhc2VzXCJdLFxuICAgIFwiT0ZGXCI6IFtcIk9mZmljZSBTdXBwbGllc1wiLCBcInV0aWxpdHlcIl0sXG4gICAgXCJPTEZcIjogW1wiT2xmYWN0b3J5IFN1YnN0YW5jZXNcIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJPU1wiOiBbXCJPcGVyYXRpbmcgU3lzdGVtXCIsIFwic29mdHdhcmUgdG9vbHNcIl0sXG4gICAgXCJPVkVcIjogW1wiQmFzaWMgT3ZlcmFsbHNcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxuICAgIFwiUENCXCI6IFtcIlByaW50ZWQgQ2lyY3VpdCBCb2FyZFwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXG4gICAgXCJQREFcIjogW1wiUGVyc29uYWwgRGF0YSBBc3Npc3RhbnRcIiwgXCJjb25zdW1hYmxlcyAoYmFzaWMpXCJdLFxuICAgIFwiUEVcIjogW1wiUG9seS1FdGh5bGVuZVwiLCBcInBsYXN0aWNzXCJdLFxuICAgIFwiUEZFXCI6IFtcIlByZW1pdW0gRmVydGlsaXplclwiLCBcImNoZW1pY2Fsc1wiXSxcbiAgICBcIlBHXCI6IFtcIlBvbHltZXIgR3JhbnVsYXRlXCIsIFwicGxhc3RpY3NcIl0sXG4gICAgXCJQSUJcIjogW1wiUGluZWJlcnJpZXNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJQS1wiOiBbXCJQYWlua2lsbGVyc1wiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxuICAgIFwiUE9XXCI6IFtcIlBvd2VyIENlbGxcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcbiAgICBcIlBQQVwiOiBbXCJQcm90ZWluIFBhc3RlXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiUFNIXCI6IFtcIlByZXNzdXJlIFNoaWVsZGluZ1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcbiAgICBcIlBTTFwiOiBbXCJQb2x5bWVyIFNoZWV0IFR5cGUgTFwiLCBcInBsYXN0aWNzXCJdLFxuICAgIFwiUFNNXCI6IFtcIlBvbHltZXIgU2hlZXQgVHlwZSBNXCIsIFwicGxhc3RpY3NcIl0sXG4gICAgXCJQU1NcIjogW1wiUG9seW1lciBTaGVldCBUeXBlIFNcIiwgXCJwbGFzdGljc1wiXSxcbiAgICBcIlBUXCI6IFtcIlBvd2VyIFRvb2xzXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcbiAgICBcIlBXT1wiOiBbXCJQYWRkZWQgV29yayBPdmVyYWxsXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXG4gICAgXCJRQ1JcIjogW1wiUXVpY2stY2hhcmdlIEZUTCBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiUkFEXCI6IFtcIlJhZGlvIERldmljZVwiLCBcImVsZWN0cm9uaWMgZGV2aWNlc1wiXSxcbiAgICBcIlJBR1wiOiBbXCJSYWRpb2lzb3RvcGUgR2VuZXJhdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiUkFNXCI6IFtcIk1lbW9yeSBCYW5rXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcbiAgICBcIlJBVFwiOiBbXCJCYXNpYyBSYXRpb25zXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcbiAgICBcIlJCSFwiOiBbXCJSZWluZm9yY2VkIEJ1bGtoZWFkXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXG4gICAgXCJSQ09cIjogW1wiUmF3IENvdHRvbiBGaWJlclwiLCBcImFncmljdWx0dXJhbCBwcm9kdWN0c1wiXSxcbiAgICBcIlJDU1wiOiBbXCJSZWFjdG9yIENvbnRyb2wgU3lzdGVtXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiUkNUXCI6IFtcIlN0YW5kYXJkIEZUTCBSZWFjdG9yXCIsIFwic2hpcCBlbmdpbmVzXCJdLFxuICAgIFwiUkRFXCI6IFtcIlJlaW5mb3JjZWQgRGVjayBFbGVtZW50c1wiLCBcImNvbnN0cnVjdGlvbiBwcmVmYWJzXCJdLFxuICAgIFwiUkRMXCI6IFtcIkxhcmdlIFNoaXAtUmVwYWlyIERyb25lIE9wZXJhdGlvbnMgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcbiAgICBcIlJEU1wiOiBbXCJTbWFsbCBTaGlwLVJlcGFpciBEcm9uZSBPcGVyYXRpb25zIFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXG4gICAgXCJSRUFcIjogW1wiQ2hlbWljYWwgUmVhZ2VudHNcIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJSRURcIjogW1wiUmVzY3VlIERyb25lXCIsIFwiZHJvbmVzXCJdLFxuICAgIFwiUkVQXCI6IFtcIlJlcGFpciBLaXRcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcbiAgICBcIlJHXCI6IFtcIlJlaW5mb3JjZWQgR2xhc3NcIiwgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCJdLFxuICAgIFwiUkdPXCI6IFtcIlJlZCBHb2xkXCIsIFwiYWxsb3lzXCJdLFxuICAgIFwiUkhQXCI6IFtcIlJlaW5mb3JjZWQgSHVsbCBQbGF0ZVwiLCBcInNoaXAgcGFydHNcIl0sXG4gICAgXCJST01cIjogW1wiTm9uLVZvbGF0aWxlIE1lbW9yeVwiLCBcImVsZWN0cm9uaWMgcGFydHNcIl0sXG4gICAgXCJSU0VcIjogW1wiUmVpbmZvcmNlZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCIsIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIl0sXG4gICAgXCJSU0hcIjogW1wiUmFkaWF0aW9uIFNoaWVsZGluZ1wiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcbiAgICBcIlJTSVwiOiBbXCJSYXcgU2lsayBTdHJhaW5zXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiUlRBXCI6IFtcIlJlaW5mb3JjZWQgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIiwgXCJjb25zdHJ1Y3Rpb24gcHJlZmFic1wiXSxcbiAgICBcIlNcIjogW1wiU3VsZnVyXCIsIFwiZWxlbWVudHNcIl0sXG4gICAgXCJTQVwiOiBbXCJTZWFyY2ggQWxnb3JpdGhtXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcbiAgICBcIlNBTFwiOiBbXCJTb3J0aW5nIEFsZ29yaXRobVwiLCBcInNvZnR3YXJlIGNvbXBvbmVudHNcIl0sXG4gICAgXCJTQVJcIjogW1wiU2Vuc29yIEFycmF5XCIsIFwiZWxlY3Ryb25pYyBkZXZpY2VzXCJdLFxuICAgIFwiU0NcIjogW1wiU3RlbSBDZWxsIFRyZWF0bWVudFwiLCBcImNvbnN1bWFibGVzIChsdXh1cnkpXCJdLFxuICAgIFwiU0NCXCI6IFtcIlNtYWxsIENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXG4gICAgXCJTQ05cIjogW1wiTXVsdGktUHVycG9zZSBTY2FubmVyXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcbiAgICBcIlNDUlwiOiBbXCJTdWxmdXIgQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcbiAgICBcIlNEUlwiOiBbXCJTdXJnaWNhbCBEcm9uZVwiLCBcImRyb25lc1wiXSxcbiAgICBcIlNFQVwiOiBbXCJQb2x5LVN1bGZpdGUgU2VhbGFudFwiLCBcImNvbnN0cnVjdGlvbiBtYXRlcmlhbHNcIl0sXG4gICAgXCJTRU5cIjogW1wiU2Vuc29yXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcbiAgICBcIlNFUVwiOiBbXCJTdXJnaWNhbCBFcXVpcG1lbnRcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcbiAgICBcIlNGXCI6IFtcIlNUTCBGdWVsXCIsIFwiZnVlbHNcIl0sXG4gICAgXCJTRkVcIjogW1wiU21hbGwgRlRMIEVtaXR0ZXJcIiwgXCJzaGlwIGVuZ2luZXNcIl0sXG4gICAgXCJTRktcIjogW1wiU21hbGwgRmFzdGVuZXIgS2l0XCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXG4gICAgXCJTRkxcIjogW1wiU21hbGwgRlRMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXG4gICAgXCJTSVwiOiBbXCJTaWxpY29uXCIsIFwibWV0YWxzXCJdLFxuICAgIFwiU0lMXCI6IFtcIlNpbGtlbiBGYWJyaWNcIiwgXCJ0ZXh0aWxlc1wiXSxcbiAgICBcIlNJT1wiOiBbXCJTaWxpY29uIE9yZVwiLCBcIm9yZXNcIl0sXG4gICAgXCJTTk1cIjogW1wiU3BhdGlhbCBOYXZpZ2F0aW9uIE1hcFwiLCBcInNvZnR3YXJlIHN5c3RlbXNcIl0sXG4gICAgXCJTT0lcIjogW1wiQXJ0aWZpY2lhbCBTb2lsXCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiU09MXCI6IFtcIlNvbGFyIENlbGxcIiwgXCJlbmVyZ3kgc3lzdGVtc1wiXSxcbiAgICBcIlNQXCI6IFtcIlNvbGFyIFBhbmVsXCIsIFwiZW5lcmd5IHN5c3RlbXNcIl0sXG4gICAgXCJTUkRcIjogW1wiU2hpcC1SZXBhaXIgRHJvbmVcIiwgXCJkcm9uZXNcIl0sXG4gICAgXCJTUlBcIjogW1wiU3BlY2lhbGl6ZWQgQW50aS1yYWQgUGxhdGVcIiwgXCJzaGlwIHNoaWVsZHNcIl0sXG4gICAgXCJTU0NcIjogW1wiU3RydWN0dXJhbCBTcGFjZWNyYWZ0IENvbXBvbmVudFwiLCBcInNoaXAgcGFydHNcIl0sXG4gICAgXCJTU0xcIjogW1wiU21hbGwgU1RMIEZ1ZWwgVGFuayBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXG4gICAgXCJTVExcIjogW1wiU3RlZWxcIiwgXCJtZXRhbHNcIl0sXG4gICAgXCJTVFJcIjogW1wiTWVkaWNhbCBTdHJldGNoZXJcIiwgXCJtZWRpY2FsIGVxdWlwbWVudFwiXSxcbiAgICBcIlNUU1wiOiBbXCJTdGFiaWxpdHkgU3VwcG9ydCBTeXN0ZW1cIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXG4gICAgXCJTVVwiOiBbXCJTdXJnZXJ5IFVuaXRcIiwgXCJ1bml0IHByZWZhYnNcIl0sXG4gICAgXCJTVURcIjogW1wiU3VydmVpbGxhbmNlIERyb25lXCIsIFwiZHJvbmVzXCJdLFxuICAgIFwiU1VOXCI6IFtcIlNhZmV0eSBVbmlmb3JtXCIsIFwidXRpbGl0eVwiXSxcbiAgICBcIlNXRlwiOiBbXCJTbWFsbCBXYWZlclwiLCBcImVsZWN0cm9uaWMgcGllY2VzXCJdLFxuICAgIFwiVEFcIjogW1wiVGFudGFsdW1cIiwgXCJlbGVtZW50c1wiXSxcbiAgICBcIlRBQ1wiOiBbXCJUYXJnZXRpbmcgQ29tcHV0ZXJcIiwgXCJlbGVjdHJvbmljIHN5c3RlbXNcIl0sXG4gICAgXCJUQUlcIjogW1wiVGFudGFsaXRlIFJvY2tcIiwgXCJtaW5lcmFsc1wiXSxcbiAgICBcIlRDXCI6IFtcIlRlY2huZXRpdW1cIiwgXCJlbGVtZW50c1wiXSxcbiAgICBcIlRDQlwiOiBbXCJUaW55IENhcmdvIEJheSBLaXRcIiwgXCJzaGlwIGtpdHNcIl0sXG4gICAgXCJUQ0xcIjogW1wiVENMIEFjaWRcIiwgXCJjaGVtaWNhbHNcIl0sXG4gICAgXCJUQ09cIjogW1wiVGVjaG5ldGl1bSBPeGlkZVwiLCBcIm1pbmVyYWxzXCJdLFxuICAgIFwiVENTXCI6IFtcIlN0YWJpbGl6ZWQgVGVjaG5ldGl1bVwiLCBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiXSxcbiAgICBcIlRDVVwiOiBbXCJUcmF1bWEgQ2FyZSBVbml0XCIsIFwidW5pdCBwcmVmYWJzXCJdLFxuICAgIFwiVEhGXCI6IFtcIlRoZXJtb0ZsdWlkXCIsIFwiY2hlbWljYWxzXCJdLFxuICAgIFwiVEhQXCI6IFtcIkJhc2ljIFRoZXJtYWwgUHJvdGVjdGlvbiBNYXRlcmlhbFwiLCBcInNoaXAgcGFydHNcIl0sXG4gICAgXCJUSVwiOiBbXCJUaXRhbml1bVwiLCBcIm1ldGFsc1wiXSxcbiAgICBcIlRJT1wiOiBbXCJUaXRhbml1bSBPcmVcIiwgXCJvcmVzXCJdLFxuICAgIFwiVEtcIjogW1wiVGVjaG5vS2V2bGFyIEZhYnJpY1wiLCBcInRleHRpbGVzXCJdLFxuICAgIFwiVFBVXCI6IFtcIlRlbnNvciBQcm9jZXNzaW5nIFVuaXRcIiwgXCJlbGVjdHJvbmljIHBhcnRzXCJdLFxuICAgIFwiVFJBXCI6IFtcIkF1ZGlvIFRyYW5zbWl0dGVyXCIsIFwiZWxlY3Ryb25pYyBwYXJ0c1wiXSxcbiAgICBcIlRSTlwiOiBbXCJBZHZhbmNlZCBUcmFuc2lzdG9yXCIsIFwiZWxlY3Ryb25pYyBwaWVjZXNcIl0sXG4gICAgXCJUUlVcIjogW1wiVHJ1c3NcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXG4gICAgXCJUU1wiOiBbXCJUZWN0b3NpbGlzaXRlXCIsIFwibWluZXJhbHNcIl0sXG4gICAgXCJUU0hcIjogW1wiVGhlcm1hbCBTaGllbGRpbmdcIiwgXCJjb25zdHJ1Y3Rpb24gcGFydHNcIl0sXG4gICAgXCJUVUJcIjogW1wiVGVzdCBUdWJlc1wiLCBcIm1lZGljYWwgZXF1aXBtZW50XCJdLFxuICAgIFwiVVRTXCI6IFtcIlVuaXZlcnNhbCBUb29sc2V0XCIsIFwidXRpbGl0eVwiXSxcbiAgICBcIlZDQlwiOiBbXCJIaWdoLXZvbHVtZSBDYXJnbyBCYXkgS2l0XCIsIFwic2hpcCBraXRzXCJdLFxuICAgIFwiVkVHXCI6IFtcIlRyaWdseWNlcmlkZSBGcnVpdHNcIiwgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIl0sXG4gICAgXCJWR1wiOiBbXCJWaXRhR2VsXCIsIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIl0sXG4gICAgXCJWSVRcIjogW1wiVml0YSBFc3NlbmNlXCIsIFwiYWdyaWN1bHR1cmFsIHByb2R1Y3RzXCJdLFxuICAgIFwiVlNDXCI6IFtcIlZlcnkgU21hbGwgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcbiAgICBcIldcIjogW1wiVHVuZ3N0ZW5cIiwgXCJtZXRhbHNcIl0sXG4gICAgXCJXQUlcIjogW1wiV2VhayBBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiLCBcInNvZnR3YXJlIHN5c3RlbXNcIl0sXG4gICAgXCJXQUxcIjogW1wiQWxwaGEtU3RhYmlsaXplZCBUdW5nc3RlblwiLCBcImFsbG95c1wiXSxcbiAgICBcIldDQlwiOiBbXCJIaWdoLWxvYWQgQ2FyZ28gQmF5IEtpdFwiLCBcInNoaXAga2l0c1wiXSxcbiAgICBcIldJTlwiOiBbXCJTbWFydCBaaW5mYW5kZWxcIiwgXCJjb25zdW1hYmxlcyAobHV4dXJ5KVwiXSxcbiAgICBcIldNXCI6IFtcIldpbmRvdyBNYW5hZ2VyXCIsIFwic29mdHdhcmUgY29tcG9uZW50c1wiXSxcbiAgICBcIldPUlwiOiBbXCJIYW5kY3JhZnQgV29ya3Nob3AgVW5pdFwiLCBcInVuaXQgcHJlZmFic1wiXSxcbiAgICBcIldSXCI6IFtcIldhdGVyIFJlY2xhaW1lclwiLCBcImVsZWN0cm9uaWMgc3lzdGVtc1wiXSxcbiAgICBcIldTXCI6IFtcIlNjaWVudGlmaWMgV29yayBTdGF0aW9uXCIsIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiXSxcbiAgICBcIlpJUlwiOiBbXCJaaXJjb24gQ3J5c3RhbHNcIiwgXCJtaW5lcmFsc1wiXSxcbiAgICBcIlpSXCI6IFtcIlppcmNvbml1bVwiLCBcImVsZW1lbnRzXCJdLFxufTtcbmV4cG9ydCBjb25zdCBNYXRlcmlhbHMgPSB7XG4gICAgXCJBbnRlbm5hIEFycmF5XCI6IFtcIkFBUlwiLCAwLjc4LCAwLjVdLFxuICAgIFwiQWR2YW5jZWQgQnVsa2hlYWRcIjogW1wiQUJIXCIsIDAuNiwgMC45XSxcbiAgICBcIkF1dG9tYXRlZCBDb29saW5nIFN5c3RlbVwiOiBbXCJBQ1NcIiwgMC4zLCAwLjJdLFxuICAgIFwiQWR2YW5jZWQgRGVjayBFbGVtZW50c1wiOiBbXCJBREVcIiwgMC40LCAxLjVdLFxuICAgIFwiQXV0by1Eb2NcIjogW1wiQURSXCIsIDAuMSwgMC4xXSxcbiAgICBcIkF1ZGlvIERpc3RyaWJ1dGlvbiBTeXN0ZW1cIjogW1wiQURTXCIsIDAuNywgMl0sXG4gICAgXCJBZXJvc3RhdCBGb3VuZGF0aW9uXCI6IFtcIkFFRlwiLCAyLCA1XSxcbiAgICBcIkFkdmFuY2VkIFNUTCBFbmdpbmVcIjogW1wiQUVOXCIsIDE0LCA3XSxcbiAgICBcIkFkdmFuY2VkIEZ1ZWwgUHVtcFwiOiBbXCJBRlBcIiwgMSwgMC4yNV0sXG4gICAgXCJBZHZhbmNlZCBGdWVsIFJvZFwiOiBbXCJBRlJcIiwgMC40LCAwLjFdLFxuICAgIFwiQWR2YW5jZWQgSGlnaC1HIFNlYXRzXCI6IFtcIkFHU1wiLCAzMCwgNV0sXG4gICAgXCJBZHZhbmNlZCBIdWxsIFBsYXRlXCI6IFtcIkFIUFwiLCAyMCwgMTBdLFxuICAgIFwiQWlyIFNjcnViYmVyXCI6IFtcIkFJUlwiLCAxLjcsIDNdLFxuICAgIFwiQWx1bWluaXVtXCI6IFtcIkFMXCIsIDIuNywgMV0sXG4gICAgXCJTdGVsbGFyIFBhbGUgQWxlXCI6IFtcIkFMRVwiLCAwLjEsIDAuMV0sXG4gICAgXCJQcm90ZWluLVJpY2ggQWxnYWVcIjogW1wiQUxHXCIsIDAuNywgMV0sXG4gICAgXCJBbHVtaW5pdW0gT3JlXCI6IFtcIkFMT1wiLCAxLjM1LCAxXSxcbiAgICBcIkFtbW9uaWFcIjogW1wiQU1NXCIsIDAuODYsIDFdLFxuICAgIFwiQWR2YW5jZWQgTm96emxlXCI6IFtcIkFOWlwiLCA2LCAzXSxcbiAgICBcIkFkdmFuY2VkIFRoZXJtYWwgUHJvdGVjdGlvbiBUaWxlXCI6IFtcIkFQVFwiLCAwLjAzLCAwLjNdLFxuICAgIFwiQXJnb25cIjogW1wiQVJcIiwgMS43ODQsIDFdLFxuICAgIFwiQWR2YW5jZWQgQW50aS1yYWQgUGxhdGVcIjogW1wiQVJQXCIsIDAuMDQsIDAuMl0sXG4gICAgXCJBZHZhbmNlZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIkFTRVwiLCAwLjUsIDAuNl0sXG4gICAgXCJBbHBoYS1TdGFiaWxpemVkIFRpdGFuaXVtXCI6IFtcIkFTVFwiLCA0Ljk4LCAxXSxcbiAgICBcIkFkdmFuY2VkIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCI6IFtcIkFUQVwiLCAwLjMsIDAuNF0sXG4gICAgXCJBZHZhbmNlZCBUaGVybWFsIFByb3RlY3Rpb24gTWF0ZXJpYWxcIjogW1wiQVRQXCIsIDIuOSwgMV0sXG4gICAgXCJHb2xkXCI6IFtcIkFVXCIsIDE5LjMyLCAxXSxcbiAgICBcIkdvbGQgT3JlXCI6IFtcIkFVT1wiLCAzLjg2LCAxXSxcbiAgICBcIkFjdGl2ZSBXYXRlciBGaWx0ZXJcIjogW1wiQVdGXCIsIDAuOCwgMS4yXSxcbiAgICBcIkFkdmFuY2VkIFdoaXBwbGUgU2hpZWxkaW5nXCI6IFtcIkFXSFwiLCAwLjEyLCAxXSxcbiAgICBcIkhlbHBmdWwgQmFjdGVyaWFcIjogW1wiQkFDXCIsIDAuMTUsIDAuMTVdLFxuICAgIFwiQmFzaWMgQUkgRnJhbWV3b3JrXCI6IFtcIkJBSVwiLCAwLjAwMSwgMC4wMV0sXG4gICAgXCJCYXNpYyBCdWxraGVhZFwiOiBbXCJCQkhcIiwgMC41LCAwLjhdLFxuICAgIFwiQnVkZ2V0IENvbm5lY3RvcnNcIjogW1wiQkNPXCIsIDAuMDA1LCAwLjAwMl0sXG4gICAgXCJCYXNpYyBEZWNrIEVsZW1lbnRzXCI6IFtcIkJERVwiLCAwLjEsIDEuNV0sXG4gICAgXCJCZXJ5bGxpdW1cIjogW1wiQkVcIiwgMS44NCwgMV0sXG4gICAgXCJQcm90ZWluLVJpY2ggQmVhbnNcIjogW1wiQkVBXCIsIDAuOCwgMV0sXG4gICAgXCJCZXJ5bCBDcnlzdGFsc1wiOiBbXCJCRVJcIiwgMS45MiwgMV0sXG4gICAgXCJCYXNpYyBGdWVsIFB1bXBcIjogW1wiQkZQXCIsIDAuOCwgMC4yXSxcbiAgICBcIkJhc2ljIEZ1ZWwgUm9kXCI6IFtcIkJGUlwiLCAwLjMsIDAuMV0sXG4gICAgXCJTaGllbGRlZCBDb25uZWN0b3JzXCI6IFtcIkJHQ1wiLCAwLjAxLCAwLjAwMl0sXG4gICAgXCJCbHVlIEdvbGRcIjogW1wiQkdPXCIsIDE5LjMyLCAxXSxcbiAgICBcIkJhc2ljIEhpZ2gtRyBTZWF0c1wiOiBbXCJCR1NcIiwgMjAsIDNdLFxuICAgIFwiQmFzaWMgSHVsbCBQbGF0ZVwiOiBbXCJCSFBcIiwgMTAsIDEwXSxcbiAgICBcIkZ1bGwtQm9keSBJbnRlcmFjdGlvbiBEZXZpY2VcIjogW1wiQklEXCIsIDAuMDUsIDAuMDVdLFxuICAgIFwiQnJlYXRoYWJsZSBMaXF1aWRcIjogW1wiQkxcIiwgMS4xMiwgMV0sXG4gICAgXCJEZXNhdHVyYXRpb24gQWdlbnRcIjogW1wiQkxFXCIsIDAuNSwgMC41XSxcbiAgICBcIkJhc2ljIE1haW5mcmFtZVwiOiBbXCJCTUZcIiwgMC44LCAxLjJdLFxuICAgIFwiQmFuZGFnZXNcIjogW1wiQk5EXCIsIDAuMDAxLCAwLjAwNV0sXG4gICAgXCJCb3JvbiBDcnlzdGFsc1wiOiBbXCJCT1JcIiwgMS44LCAxXSxcbiAgICBcIkJvcm9zaWxpY2F0ZVwiOiBbXCJCT1NcIiwgMS41LCAxXSxcbiAgICBcIkJhc2ljIFRoZXJtYWwgUHJvdGVjdGlvbiBUaWxlXCI6IFtcIkJQVFwiLCAwLjAyLCAwLjNdLFxuICAgIFwiQ29tbWFuZCBCcmlkZ2UgTUsxXCI6IFtcIkJSMVwiLCAxODAsIDMwMF0sXG4gICAgXCJDb21tYW5kIEJyaWRnZSBNSzJcIjogW1wiQlIyXCIsIDI4MCwgNDAwXSxcbiAgICBcIkJpb3JlYWN0aXZlIE1pbmVyYWxzXCI6IFtcIkJSTVwiLCAyLjUsIDFdLFxuICAgIFwiQnJvbnplXCI6IFtcIkJST1wiLCA4LjczLCAxXSxcbiAgICBcIkJhc2ljIEFudGktcmFkIFBsYXRlXCI6IFtcIkJSUFwiLCAwLjAzLCAwLjJdLFxuICAgIFwiU2hvcnQtZGlzdGFuY2UgQ29tbWFuZCBCcmlkZ2VcIjogW1wiQlJTXCIsIDE1MCwgMjAwXSxcbiAgICBcIkJvZHkgU2Nhbm5lclwiOiBbXCJCU0NcIiwgMC4xLCAwLjFdLFxuICAgIFwiQmFzaWMgU3RydWN0dXJhbCBFbGVtZW50c1wiOiBbXCJCU0VcIiwgMC4zLCAwLjVdLFxuICAgIFwiQmFzaWMgVHJhbnNwYXJlbnQgQXBlcnR1cmVcIjogW1wiQlRBXCIsIDAuMywgMC40XSxcbiAgICBcIkJhY3RlcmlhbCBUdW5nc3RlbiBTb2x1dGlvblwiOiBbXCJCVFNcIiwgMS4wNSwgMV0sXG4gICAgXCJCYXNpYyBXaGlwcGxlIFNoaWVsZGluZ1wiOiBbXCJCV0hcIiwgMC4xLCAxXSxcbiAgICBcIkJhc2ljIFdvcmtzdGF0aW9uXCI6IFtcIkJXU1wiLCAwLjA1LCAwLjFdLFxuICAgIFwiQ2FyYm9uXCI6IFtcIkNcIiwgMi4yNSwgMV0sXG4gICAgXCJDYWxjaXVtXCI6IFtcIkNBXCIsIDEuNTQsIDFdLFxuICAgIFwiQ2FmZmVpbmF0ZWQgQmVhbnNcIjogW1wiQ0FGXCIsIDAuODYsIDFdLFxuICAgIFwiRWxlY3RyaWMgRmllbGQgQ2FwYWNpdG9yXCI6IFtcIkNBUFwiLCAwLjAwMSwgMC4wMDFdLFxuICAgIFwiTGFyZ2UgQ2FwYWNpdG9yIEJhbmtcIjogW1wiQ0JMXCIsIDUuNCwgMi40XSxcbiAgICBcIk1lZGl1bSBDYXBhY2l0b3IgQmFua1wiOiBbXCJDQk1cIiwgMy42LCAxLjZdLFxuICAgIFwiU21hbGwgQ2FwYWNpdG9yIEJhbmtcIjogW1wiQ0JTXCIsIDEuOCwgMC44XSxcbiAgICBcIkNsaW1hdGUgQ29udHJvbGxlclwiOiBbXCJDQ1wiLCAwLjUsIDFdLFxuICAgIFwiQ3Jvd2QgQ29udHJvbCBEcm9uZVwiOiBbXCJDQ0RcIiwgMC4zLCAwLjA1XSxcbiAgICBcIkNhcGFjaXRpdmUgRGlzcGxheVwiOiBbXCJDRFwiLCAwLjAwNCwgMC4wMDJdLFxuICAgIFwiQ2VyYW1pYyBGYWJyaWNcIjogW1wiQ0ZcIiwgMi44MiwgMV0sXG4gICAgXCJDb21idXN0aW9uIENoYW1iZXJcIjogW1wiQ0hBXCIsIDEuMiwgMC43XSxcbiAgICBcIkNobG9yaW5lXCI6IFtcIkNMXCIsIDMuMiwgMV0sXG4gICAgXCJDYWxpY2hlIFJvY2tcIjogW1wiQ0xJXCIsIDIuNDIsIDFdLFxuICAgIFwiXCI6IFtcIkNNS1wiLCA0LjU2LCAzMy4yXSxcbiAgICBcIkNhZmZlaW5hdGVkIEluZnVzaW9uXCI6IFtcIkNPRlwiLCAwLjEsIDAuMV0sXG4gICAgXCJDb21tdW5pY2F0aW9uIFN5c3RlbVwiOiBbXCJDT01cIiwgMC41LCAxLjVdLFxuICAgIFwiQ290dG9uIEZhYnJpY1wiOiBbXCJDT1RcIiwgMC43NywgMV0sXG4gICAgXCJDcmV3IFF1YXJ0ZXJzIChMYXJnZSlcIjogW1wiQ1FMXCIsIDc1LCAxNTBdLFxuICAgIFwiQ3JldyBRdWFydGVycyAoTWVkaXVtKVwiOiBbXCJDUU1cIiwgNTAsIDEwMF0sXG4gICAgXCJDcmV3IFF1YXJ0ZXJzIChTbWFsbClcIjogW1wiQ1FTXCIsIDI1LCA1MF0sXG4gICAgXCJDcmV3IFF1YXJ0ZXJzIChUaW55KVwiOiBbXCJDUVRcIiwgMTIuNSwgMjVdLFxuICAgIFwiQ3J5b2dlbmljIFVuaXRcIjogW1wiQ1JVXCIsIDIuMiwgMl0sXG4gICAgXCJDcnlvZ2VuaWMgU3RhYmlsaXplclwiOiBbXCJDU1RcIiwgMS4xNCwgMV0sXG4gICAgXCJDZXJhbWljLVR1bmdzdGVuIEZhYnJpY1wiOiBbXCJDVEZcIiwgNC4zMiwgMV0sXG4gICAgXCJDb3BwZXJcIjogW1wiQ1VcIiwgOC45MiwgMV0sXG4gICAgXCJDb3BwZXIgT3JlXCI6IFtcIkNVT1wiLCA0LjAxLCAxXSxcbiAgICBcIkRhdGEgQW5hbHl6ZXJcIjogW1wiREFcIiwgMC4wMDEsIDAuMDFdLFxuICAgIFwiRHJvbmUgQ2hhc3Npc1wiOiBbXCJEQ0hcIiwgMC4yLCAwLjAzXSxcbiAgICBcIkR1cmFibGUgQ2FzaW5nIExcIjogW1wiRENMXCIsIDAuMDgsIDAuOF0sXG4gICAgXCJEdXJhYmxlIENhc2luZyBNXCI6IFtcIkRDTVwiLCAwLjA0LCAwLjRdLFxuICAgIFwiRHVyYWJsZSBDYXNpbmcgU1wiOiBbXCJEQ1NcIiwgMC4wMSwgMC4xXSxcbiAgICBcIkRpc3RyaWJ1dGVkIERhdGFiYXNlXCI6IFtcIkREXCIsIDAuMDAxLCAwLjAxXSxcbiAgICBcIkREVCBQbGFudCBBZ2VudFwiOiBbXCJERFRcIiwgMC4xMSwgMC4xXSxcbiAgICBcIkRlY29yYXRpdmUgRWxlbWVudHNcIjogW1wiREVDXCIsIDAuNSwgMl0sXG4gICAgXCJJbmZvcm1hdGlvbiBEaXNwbGF5XCI6IFtcIkRJU1wiLCAwLjAyLCAwLjAyXSxcbiAgICBcIkRyb25lIE9wZXJhdGlvbnMgVW5pdFwiOiBbXCJET1VcIiwgNSwgNF0sXG4gICAgXCJEcm9uZSBGcmFtZVwiOiBbXCJEUkZcIiwgMC4xLCAwLjAyXSxcbiAgICBcIkRhdGEgVmlzdWFsaXplclwiOiBbXCJEVlwiLCAwLjAwMSwgMC4wMV0sXG4gICAgXCJEcmlua2luZyBXYXRlclwiOiBbXCJEV1wiLCAwLjEsIDAuMV0sXG4gICAgXCJFbnRlcnRhaW5tZW50IERhdGEgQ29yZVwiOiBbXCJFRENcIiwgMC4wMDEsIDAuMDFdLFxuICAgIFwiRW5yaWNoZWQgRWluc3RlaW5pdW1cIjogW1wiRUVTXCIsIDkuMiwgMV0sXG4gICAgXCJTdGFuZGFyZCBTVEwgRW5naW5lXCI6IFtcIkVOR1wiLCA4LCA0XSxcbiAgICBcIkVwb3h5IFJlc2luXCI6IFtcIkVQT1wiLCAwLjA0LCAwLjAyXSxcbiAgICBcIkVpbnN0ZWluaXVtXCI6IFtcIkVTXCIsIDAuODgsIDAuMV0sXG4gICAgXCJFbnJpY2hlZCBUZWNobmV0aXVtXCI6IFtcIkVUQ1wiLCA0LjEsIDFdLFxuICAgIFwiRXhvc2tlbGV0b24gV29yayBTdWl0XCI6IFtcIkVYT1wiLCAwLjEsIDAuMDVdLFxuICAgIFwiRmx1b3JpbmVcIjogW1wiRlwiLCAxLjY5NiwgMV0sXG4gICAgXCJGZXJyb21pbml1bVwiOiBbXCJGQUxcIiwgMy4yMiwgMV0sXG4gICAgXCJBY3RpdmUgQ29vbGluZyBEZXZpY2VcIjogW1wiRkFOXCIsIDAuMSwgMC4xXSxcbiAgICBcIkZsb3cgQ29udHJvbCBEZXZpY2VcIjogW1wiRkNcIiwgMC41LCAwLjI1XSxcbiAgICBcIklyb25cIjogW1wiRkVcIiwgNy44NzQsIDFdLFxuICAgIFwiSXJvbiBPcmVcIjogW1wiRkVPXCIsIDUuOSwgMV0sXG4gICAgXCJGZXJyby1UaXRhbml1bVwiOiBbXCJGRVRcIiwgNi44NSwgMV0sXG4gICAgXCJGVEwgRnVlbFwiOiBbXCJGRlwiLCAwLjA1LCAwLjAxXSxcbiAgICBcIkZUTCBGaWVsZCBDb250cm9sbGVyXCI6IFtcIkZGQ1wiLCA1MCwgMTZdLFxuICAgIFwiRmxhdm91cmVkIEluc3RhLU1lYWxcIjogW1wiRklNXCIsIDAuNTUsIDAuNV0sXG4gICAgXCJGaXNzaW9uIFJlYWN0b3JcIjogW1wiRklSXCIsIDcsIDQuOV0sXG4gICAgXCJGbG9hdGluZyBUYW5rXCI6IFtcIkZMT1wiLCAxLCAyXSxcbiAgICBcIkZsdWlkIFBpcGluZ1wiOiBbXCJGTFBcIiwgMC4zLCAyXSxcbiAgICBcIkZsdXhcIjogW1wiRkxYXCIsIDAuMjUsIDAuMV0sXG4gICAgXCJBbGwtUHVycG9zZSBGb2RkZXJcIjogW1wiRk9EXCIsIDEuMiwgMV0sXG4gICAgXCJGdWVsLXNhdmluZyBTVEwgRW5naW5lXCI6IFtcIkZTRVwiLCA2LCAzXSxcbiAgICBcIkVudGVydGFpbm1lbnQgVW5pdFwiOiBbXCJGVU5cIiwgNSwgNF0sXG4gICAgXCJHYWxlcml0ZSBSb2NrXCI6IFtcIkdBTFwiLCAyLjUxLCAxXSxcbiAgICBcIkN5bGluZHJpY2FsIEdhcyBDb250YWluZXJcIjogW1wiR0NcIiwgMC4wNSwgMC4xXSxcbiAgICBcIkdsYXNzIENvbWJ1c3Rpb24gQ2hhbWJlclwiOiBbXCJHQ0hcIiwgMSwgMC42XSxcbiAgICBcIkdsYXNzLWJhc2VkIFNUTCBFbmdpbmVcIjogW1wiR0VOXCIsIDUsIDNdLFxuICAgIFwiRWluc3RlaW5pdW0tSW5mdXNlZCBHaW5cIjogW1wiR0lOXCIsIDAuMSwgMC4xXSxcbiAgICBcIkdsYXNzXCI6IFtcIkdMXCIsIDAuMDE2LCAwLjAxXSxcbiAgICBcIkdsYXNzIE5venpsZVwiOiBbXCJHTlpcIiwgMS41LCAxXSxcbiAgICBcIldpbmUtUXVhbGl0eSBHcmFwZXNcIjogW1wiR1JBXCIsIDEuMSwgMV0sXG4gICAgXCJIaWdoLUNhcmIgR3JhaW5zXCI6IFtcIkdSTlwiLCAwLjksIDFdLFxuICAgIFwiR2FzIFZlbnRcIjogW1wiR1ZcIiwgMC4yNSwgMC4xNV0sXG4gICAgXCJIeWRyb2dlblwiOiBbXCJIXCIsIDAuMDcsIDFdLFxuICAgIFwiV2F0ZXJcIjogW1wiSDJPXCIsIDAuMiwgMC4yXSxcbiAgICBcIkhhYml0YXQgVW5pdFwiOiBbXCJIQUJcIiwgMTAsIDhdLFxuICAgIFwiSGFsaXRlIENyeXN0YWxzXCI6IFtcIkhBTFwiLCAyLjE3LCAxXSxcbiAgICBcIkhpZ2gtQ2FwYWNpdHkgQ29ubmVjdG9yc1wiOiBbXCJIQ0NcIiwgMC4wMSwgMC4wMDJdLFxuICAgIFwiSHlkcm9jYXJib24gUGxhbnRzXCI6IFtcIkhDUFwiLCAwLjgsIDFdLFxuICAgIFwiSG9sb2dyYXBoaWMgRGlzcGxheVwiOiBbXCJIRFwiLCAwLjA1LCAyXSxcbiAgICBcIkhlbGl1bVwiOiBbXCJIRVwiLCAwLjE0NSwgMV0sXG4gICAgXCJIZWxpdW0tMyBJc290b3BlXCI6IFtcIkhFM1wiLCAwLjE0NSwgMV0sXG4gICAgXCJTcGljeSBIZXJic1wiOiBbXCJIRVJcIiwgMC40LCAxXSxcbiAgICBcIkhlbGlvdHJvcGUgRXh0cmFjdFwiOiBbXCJIRVhcIiwgMS4xLCAxXSxcbiAgICBcIkhhcmRlbmVkIEh1bGwgUGxhdGVcIjogW1wiSEhQXCIsIDE1LCAxMF0sXG4gICAgXCJIYXpNYXQgV29yayBTdWl0XCI6IFtcIkhNU1wiLCAwLjA1LCAwLjA1XSxcbiAgICBcIkh5cGVydGhydXN0IE5venpsZVwiOiBbXCJITlpcIiwgNiwgMTJdLFxuICAgIFwiSG9sb2dyYXBoaWMgR2xhc3Nlc1wiOiBbXCJIT0dcIiwgMC4wMSwgMC4wMV0sXG4gICAgXCJGbG93ZXJ5IEhvcHNcIjogW1wiSE9QXCIsIDAuMzUsIDFdLFxuICAgIFwiSGFuZGhlbGQgUGVyc29uYWwgQ29uc29sZVwiOiBbXCJIUENcIiwgMC4wMDMsIDAuMDAzXSxcbiAgICBcIkhpZ2gtcG93ZXIgRlRMIFJlYWN0b3JcIjogW1wiSFBSXCIsIDE4LCAxNV0sXG4gICAgXCJIYXJkZW5lZCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIkhTRVwiLCAzLjEsIDAuN10sXG4gICAgXCJTbWFydCBTcGFjZSBTdWl0XCI6IFtcIkhTU1wiLCAwLjA1LCAwLjA1XSxcbiAgICBcIkh5cGVydGhydXN0IFNUTCBFbmdpbmVcIjogW1wiSFRFXCIsIDIwLCAxMF0sXG4gICAgXCJIeXBlci1wb3dlciBSZWFjdG9yXCI6IFtcIkhZUlwiLCAzNSwgMjVdLFxuICAgIFwiSW9kaW5lXCI6IFtcIklcIiwgNC45MywgMV0sXG4gICAgXCJJbmZvcm1hdGlvbiBEYXRhIENvcmVcIjogW1wiSURDXCIsIDAuMDAxLCAwLjAxXSxcbiAgICBcIkluZm9ybWF0aW9uIE1hbmFnZW1lbnQgU3lzdGVtXCI6IFtcIklNTVwiLCAwLjAwMSwgMC4wMV0sXG4gICAgXCJJbmRpZ28gQ29sb3JhbnRcIjogW1wiSU5EXCIsIDAuMjEsIDAuMl0sXG4gICAgXCJJbnN1Rm9hbVwiOiBbXCJJTlNcIiwgMC4wNiwgMC4xXSxcbiAgICBcIlNlZGF0aXZlIFN1YnN0YW5jZVwiOiBbXCJKVUlcIiwgMS4yLCAxXSxcbiAgICBcIktvbWJ1Y2hhXCI6IFtcIktPTVwiLCAwLjEsIDAuMV0sXG4gICAgXCJLZXZsYXIgRmFicmljXCI6IFtcIktWXCIsIDEuNjUsIDFdLFxuICAgIFwiTGlnaHR3ZWlnaHQgQnVsa2hlYWRcIjogW1wiTEJIXCIsIDAuMiwgMC42XSxcbiAgICBcIkFJLUFzc2lzdGVkIExhYiBDb2F0XCI6IFtcIkxDXCIsIDAuMDUsIDAuMDVdLFxuICAgIFwiTGFyZ2UgQ2FyZ28gQmF5IEtpdFwiOiBbXCJMQ0JcIiwgMjAwLCAyMDBdLFxuICAgIFwiTGlxdWlkIENyeXN0YWxzXCI6IFtcIkxDUlwiLCAwLjE1LCAwLjFdLFxuICAgIFwiTG9jYWwgRGF0YWJhc2VcIjogW1wiTERcIiwgMC4wMDEsIDAuMDFdLFxuICAgIFwiTGlnaHR3ZWlnaHQgRGVjayBFbGVtZW50c1wiOiBbXCJMREVcIiwgMC4xLCAxLjJdLFxuICAgIFwiTGFzZXIgRGlvZGVzXCI6IFtcIkxESVwiLCAwLjAwMSwgMC4wMDFdLFxuICAgIFwiTGlxdWlkIEVpbnN0ZWluaXVtXCI6IFtcIkxFU1wiLCA4Ljg0LCAxXSxcbiAgICBcIkxhcmdlIEZUTCBFbWl0dGVyXCI6IFtcIkxGRVwiLCAwLjQsIDEuNl0sXG4gICAgXCJMYXJnZSBGVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJMRkxcIiwgNjAsIDEwXSxcbiAgICBcIkxvdy1oZWF0IEZ1ZWwgUHVtcFwiOiBbXCJMRlBcIiwgMC41LCAwLjFdLFxuICAgIFwiTGlnaHR3ZWlnaHQgSHVsbCBQbGF0ZVwiOiBbXCJMSFBcIiwgNSwgMTBdLFxuICAgIFwiTGl0aGl1bVwiOiBbXCJMSVwiLCAwLjU1LCAxXSxcbiAgICBcIkxpdGhpdW0gT3JlXCI6IFtcIkxJT1wiLCAyLjc1LCAxXSxcbiAgICBcIkxpZmUgU3VwcG9ydCBTeXN0ZW1cIjogW1wiTElTXCIsIDUuNiwgN10sXG4gICAgXCJOZW9uIExpZ2h0aW5nIFN5c3RlbVwiOiBbXCJMSVRcIiwgMSwgMl0sXG4gICAgXCJMb2dpc3RpY3MgU3lzdGVtXCI6IFtcIkxPR1wiLCAwLjUsIDEuNV0sXG4gICAgXCJMaWdodHdlaWdodCBTdHJ1Y3R1cmFsIEVsZW1lbnRzXCI6IFtcIkxTRVwiLCAwLjMsIDEuMl0sXG4gICAgXCJMYXJnZSBTVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJMU0xcIiwgMTI1LCAxMDBdLFxuICAgIFwiTGltZXN0b25lXCI6IFtcIkxTVFwiLCAyLjczLCAxXSxcbiAgICBcIkxpZ2h0d2VpZ2h0IFRyYW5zcGFyZW50IEFwZXJ0dXJlXCI6IFtcIkxUQVwiLCAwLjMsIDAuNV0sXG4gICAgXCJMYWJvcmF0b3J5IFVuaXRcIjogW1wiTFVcIiwgOCwgNl0sXG4gICAgXCJNYWduZXRpdGVcIjogW1wiTUFHXCIsIDUuMTUsIDFdLFxuICAgIFwiSGlnaC1DYXJiIE1haXplXCI6IFtcIk1BSVwiLCAxLjMsIDFdLFxuICAgIFwiTW90aGVyYm9hcmRcIjogW1wiTUJcIiwgMC4wNzUsIDAuMDc1XSxcbiAgICBcIk1lZGl1bSBDYXJnbyBCYXkgS2l0XCI6IFtcIk1DQlwiLCAxMDAsIDEwMF0sXG4gICAgXCJNaW5lcmFsIENvbnN0cnVjdGlvbiBHcmFudWxhdGVcIjogW1wiTUNHXCIsIDAuMjQsIDAuMV0sXG4gICAgXCJRdWFsaXR5IE1lYXQgTWVhbFwiOiBbXCJNRUFcIiwgMC42LCAwLjVdLFxuICAgIFwiQmFzaWMgTWVkaWNhbCBLaXRcIjogW1wiTUVEXCIsIDAuMywgMC4xXSxcbiAgICBcIk1lZGl1bSBGVEwgRW1pdHRlclwiOiBbXCJNRkVcIiwgMC4yLCAwLjhdLFxuICAgIFwiTWVkaXVtIEZhc3RlbmVyIEtpdFwiOiBbXCJNRktcIiwgMC4xLCAwLjA1XSxcbiAgICBcIk1lZGl1bSBGVEwgRnVlbCBUYW5rIEtpdFwiOiBbXCJNRkxcIiwgMjQsIDRdLFxuICAgIFwiTWFnbmVzaXVtXCI6IFtcIk1HXCIsIDAuMjcsIDAuMTZdLFxuICAgIFwiTWFnbmV0aWMgR3JvdW5kIENvdmVyXCI6IFtcIk1HQ1wiLCAwLjYsIDAuOV0sXG4gICAgXCJNYWduZXNpdGVcIjogW1wiTUdTXCIsIDEuNzMsIDFdLFxuICAgIFwiTWV0YWwtSGFsaWRlIExpZ2h0aW5nIFN5c3RlbVwiOiBbXCJNSExcIiwgMC4xLCAwLjA1XSxcbiAgICBcIk1pY3JvIEhlYWRwaG9uZXNcIjogW1wiTUhQXCIsIDAuMDAxLCAwLjAwMV0sXG4gICAgXCJNYWNoaW5lIExlYXJuaW5nIEludGVyZmFjZVwiOiBbXCJNTElcIiwgMC4wMDEsIDAuMDFdLFxuICAgIFwiTWljcm8tUHJvY2Vzc29yXCI6IFtcIk1QQ1wiLCAwLjAwMSwgMC4wMDFdLFxuICAgIFwiTWVkaXVtIFNUTCBGdWVsIFRhbmsgS2l0XCI6IFtcIk1TTFwiLCA1MCwgNTBdLFxuICAgIFwiTWVnYVR1YmUgQ29hdGluZ1wiOiBbXCJNVENcIiwgMC4wMzIsIDAuMDFdLFxuICAgIFwiTWVhdCBUaXNzdWUgUGF0dGllc1wiOiBbXCJNVFBcIiwgMC43LCAxXSxcbiAgICBcIlByb3RlaW4tUmljaCBNdXNocm9vbXNcIjogW1wiTVVTXCIsIDAuOCwgMV0sXG4gICAgXCJNZWRpdW0gV2FmZXJcIjogW1wiTVdGXCIsIDAuMDA4LCAwLjAwOF0sXG4gICAgXCJOaXRyb2dlblwiOiBbXCJOXCIsIDAuODA3LCAxXSxcbiAgICBcIlNvZGl1bVwiOiBbXCJOQVwiLCAwLjk3LCAxXSxcbiAgICBcIlNvZGl1bSBCb3JvaHlkcmlkZVwiOiBbXCJOQUJcIiwgMC4xLCAwLjA1XSxcbiAgICBcIk5hbm8tQ2FyYm9uIFNoZWV0aW5nXCI6IFtcIk5DU1wiLCAwLjAyOCwgMC4wMV0sXG4gICAgXCJOZW9uXCI6IFtcIk5FXCIsIDAuOSwgMV0sXG4gICAgXCJOZXR3b3JraW5nIEZyYW1ld29ya1wiOiBbXCJORlwiLCAwLjAwMSwgMC4wMV0sXG4gICAgXCJOYW5vIEZpYmVyXCI6IFtcIk5GSVwiLCAwLjAzMiwgMC4wMV0sXG4gICAgXCJOYW5vLUNvYXRlZCBHbGFzc1wiOiBbXCJOR1wiLCAwLjAyMiwgMC4wMV0sXG4gICAgXCJOeWxvbiBGYWJyaWNcIjogW1wiTkxcIiwgMS4xMywgMV0sXG4gICAgXCJOZXVyYWwgTmV0d29ya1wiOiBbXCJOTlwiLCAwLjAwMSwgMC4wMV0sXG4gICAgXCJCYXNpYyBOb3p6bGVcIjogW1wiTk9aXCIsIDMsIDEuNV0sXG4gICAgXCJOYW5vLUVuaGFuY2VkIFJlc2luXCI6IFtcIk5SXCIsIDAuMDUsIDAuMDVdLFxuICAgIFwiTnV0cmllbnQgU29sdXRpb25cIjogW1wiTlNcIiwgMC42LCAwLjVdLFxuICAgIFwiTmV1cm9TdGltdWxhbnRzXCI6IFtcIk5TVFwiLCAwLjA1LCAwLjA1XSxcbiAgICBcIlRyaWdseWNlcmlkZSBOdXRzXCI6IFtcIk5VVFwiLCAwLjksIDFdLFxuICAgIFwiTmF2aWdhdGlvbiBNb2R1bGUgTUsxXCI6IFtcIk5WMVwiLCA0LjIsIDJdLFxuICAgIFwiTmF2aWdhdGlvbiBNb2R1bGUgTUsyXCI6IFtcIk5WMlwiLCA2LjcsIDNdLFxuICAgIFwiT3h5Z2VuXCI6IFtcIk9cIiwgMS4xNDEsIDFdLFxuICAgIFwiT2ZmaWNlIFN1cHBsaWVzXCI6IFtcIk9GRlwiLCAwLjAyLCAwLjJdLFxuICAgIFwiT2xmYWN0b3J5IFN1YnN0YW5jZXNcIjogW1wiT0xGXCIsIDAuMDEsIDAuMDAxXSxcbiAgICBcIk9wZXJhdGluZyBTeXN0ZW1cIjogW1wiT1NcIiwgMC4wMDEsIDAuMDFdLFxuICAgIFwiQmFzaWMgT3ZlcmFsbHNcIjogW1wiT1ZFXCIsIDAuMDIsIDAuMDI1XSxcbiAgICBcIlByaW50ZWQgQ2lyY3VpdCBCb2FyZFwiOiBbXCJQQ0JcIiwgMC4wNSwgMC4wNV0sXG4gICAgXCJQZXJzb25hbCBEYXRhIEFzc2lzdGFudFwiOiBbXCJQREFcIiwgMC4wMDIsIDAuMDAyXSxcbiAgICBcIlBvbHktRXRoeWxlbmVcIjogW1wiUEVcIiwgMC4wMSwgMC4wMV0sXG4gICAgXCJQcmVtaXVtIEZlcnRpbGl6ZXJcIjogW1wiUEZFXCIsIDAuOSwgMV0sXG4gICAgXCJQb2x5bWVyIEdyYW51bGF0ZVwiOiBbXCJQR1wiLCAwLjAwMiwgMC4wMDFdLFxuICAgIFwiUGluZWJlcnJpZXNcIjogW1wiUElCXCIsIDAuMywgMV0sXG4gICAgXCJQYWlua2lsbGVyc1wiOiBbXCJQS1wiLCAwLjAwMSwgMC4wMDFdLFxuICAgIFwiUG93ZXIgQ2VsbFwiOiBbXCJQT1dcIiwgMC4wNSwgMC4xXSxcbiAgICBcIlByb3RlaW4gUGFzdGVcIjogW1wiUFBBXCIsIDIsIDFdLFxuICAgIFwiUHJlc3N1cmUgU2hpZWxkaW5nXCI6IFtcIlBTSFwiLCA0LjIsIDAuOF0sXG4gICAgXCJQb2x5bWVyIFNoZWV0IFR5cGUgTFwiOiBbXCJQU0xcIiwgMC4wOCwgMC44XSxcbiAgICBcIlBvbHltZXIgU2hlZXQgVHlwZSBNXCI6IFtcIlBTTVwiLCAwLjA0LCAwLjRdLFxuICAgIFwiUG9seW1lciBTaGVldCBUeXBlIFNcIjogW1wiUFNTXCIsIDAuMDEsIDAuMV0sXG4gICAgXCJQb3dlciBUb29sc1wiOiBbXCJQVFwiLCAwLjI1LCAwLjJdLFxuICAgIFwiUGFkZGVkIFdvcmsgT3ZlcmFsbFwiOiBbXCJQV09cIiwgMC4wNSwgMC4wNV0sXG4gICAgXCJRdWljay1jaGFyZ2UgRlRMIFJlYWN0b3JcIjogW1wiUUNSXCIsIDE0LCAxMF0sXG4gICAgXCJSYWRpbyBEZXZpY2VcIjogW1wiUkFEXCIsIDAuMDAzLCAwLjAwNV0sXG4gICAgXCJSYWRpb2lzb3RvcGUgR2VuZXJhdG9yXCI6IFtcIlJBR1wiLCA1LCAzLjRdLFxuICAgIFwiTWVtb3J5IEJhbmtcIjogW1wiUkFNXCIsIDAuMDAxLCAwLjAwMV0sXG4gICAgXCJCYXNpYyBSYXRpb25zXCI6IFtcIlJBVFwiLCAwLjIxLCAwLjFdLFxuICAgIFwiUmVpbmZvcmNlZCBCdWxraGVhZFwiOiBbXCJSQkhcIiwgMi40LCAwLjldLFxuICAgIFwiUmF3IENvdHRvbiBGaWJlclwiOiBbXCJSQ09cIiwgMC45NSwgMV0sXG4gICAgXCJSZWFjdG9yIENvbnRyb2wgU3lzdGVtXCI6IFtcIlJDU1wiLCAwLjY3LCAwLjVdLFxuICAgIFwiU3RhbmRhcmQgRlRMIFJlYWN0b3JcIjogW1wiUkNUXCIsIDcsIDRdLFxuICAgIFwiUmVpbmZvcmNlZCBEZWNrIEVsZW1lbnRzXCI6IFtcIlJERVwiLCAxLjQsIDEuNV0sXG4gICAgXCJMYXJnZSBTaGlwLVJlcGFpciBEcm9uZSBPcGVyYXRpb25zIFVuaXRcIjogW1wiUkRMXCIsIDE1MCwgMzBdLFxuICAgIFwiU21hbGwgU2hpcC1SZXBhaXIgRHJvbmUgT3BlcmF0aW9ucyBVbml0XCI6IFtcIlJEU1wiLCA1MCwgMTBdLFxuICAgIFwiQ2hlbWljYWwgUmVhZ2VudHNcIjogW1wiUkVBXCIsIDAuMDUsIDAuMDVdLFxuICAgIFwiUmVzY3VlIERyb25lXCI6IFtcIlJFRFwiLCAwLjMsIDAuMDVdLFxuICAgIFwiUmVwYWlyIEtpdFwiOiBbXCJSRVBcIiwgMC4wMDYsIDAuMDAyXSxcbiAgICBcIlJlaW5mb3JjZWQgR2xhc3NcIjogW1wiUkdcIiwgMC4wMzIsIDAuMDFdLFxuICAgIFwiUmVkIEdvbGRcIjogW1wiUkdPXCIsIDE5LjMyLCAxXSxcbiAgICBcIlJlaW5mb3JjZWQgSHVsbCBQbGF0ZVwiOiBbXCJSSFBcIiwgMTIsIDEwXSxcbiAgICBcIk5vbi1Wb2xhdGlsZSBNZW1vcnlcIjogW1wiUk9NXCIsIDAuMDAxLCAwLjAwMV0sXG4gICAgXCJSZWluZm9yY2VkIFN0cnVjdHVyYWwgRWxlbWVudHNcIjogW1wiUlNFXCIsIDEuOSwgMC43XSxcbiAgICBcIlJhZGlhdGlvbiBTaGllbGRpbmdcIjogW1wiUlNIXCIsIDMuNywgMC44XSxcbiAgICBcIlJhdyBTaWxrIFN0cmFpbnNcIjogW1wiUlNJXCIsIDEuMSwgMV0sXG4gICAgXCJSZWluZm9yY2VkIFRyYW5zcGFyZW50IEFwZXJ0dXJlXCI6IFtcIlJUQVwiLCAxLjUsIDAuNV0sXG4gICAgXCJTdWxmdXJcIjogW1wiU1wiLCAwLjUyLCAwLjI1XSxcbiAgICBcIlNlYXJjaCBBbGdvcml0aG1cIjogW1wiU0FcIiwgMC4wMDEsIDAuMDFdLFxuICAgIFwiU29ydGluZyBBbGdvcml0aG1cIjogW1wiU0FMXCIsIDAuMDAxLCAwLjAxXSxcbiAgICBcIlNlbnNvciBBcnJheVwiOiBbXCJTQVJcIiwgMS43LCAyXSxcbiAgICBcIlN0ZW0gQ2VsbCBUcmVhdG1lbnRcIjogW1wiU0NcIiwgMC4wNCwgMC4wMV0sXG4gICAgXCJTbWFsbCBDYXJnbyBCYXkgS2l0XCI6IFtcIlNDQlwiLCA1MCwgNTBdLFxuICAgIFwiTXVsdGktUHVycG9zZSBTY2FubmVyXCI6IFtcIlNDTlwiLCAwLjAwMSwgMC4wMDFdLFxuICAgIFwiU3VsZnVyIENyeXN0YWxzXCI6IFtcIlNDUlwiLCAyLjA1LCAxXSxcbiAgICBcIlN1cmdpY2FsIERyb25lXCI6IFtcIlNEUlwiLCAwLjMsIDAuMDVdLFxuICAgIFwiUG9seS1TdWxmaXRlIFNlYWxhbnRcIjogW1wiU0VBXCIsIDAuMTUsIDAuMDddLFxuICAgIFwiU2Vuc29yXCI6IFtcIlNFTlwiLCAwLjAwMSwgMC4wMDFdLFxuICAgIFwiU3VyZ2ljYWwgRXF1aXBtZW50XCI6IFtcIlNFUVwiLCAwLjAwMSwgMC4wMV0sXG4gICAgXCJTVEwgRnVlbFwiOiBbXCJTRlwiLCAwLjA2LCAwLjA2XSxcbiAgICBcIlNtYWxsIEZUTCBFbWl0dGVyXCI6IFtcIlNGRVwiLCAwLjEsIDAuNF0sXG4gICAgXCJTbWFsbCBGYXN0ZW5lciBLaXRcIjogW1wiU0ZLXCIsIDAuMDQsIDAuMDJdLFxuICAgIFwiU21hbGwgRlRMIEZ1ZWwgVGFuayBLaXRcIjogW1wiU0ZMXCIsIDksIDEuNV0sXG4gICAgXCJTaWxpY29uXCI6IFtcIlNJXCIsIDIuMzI5LCAxXSxcbiAgICBcIlNpbGtlbiBGYWJyaWNcIjogW1wiU0lMXCIsIDEuMjEsIDFdLFxuICAgIFwiU2lsaWNvbiBPcmVcIjogW1wiU0lPXCIsIDEuNzksIDFdLFxuICAgIFwiU3BhdGlhbCBOYXZpZ2F0aW9uIE1hcFwiOiBbXCJTTk1cIiwgMC4wMDEsIDAuMDFdLFxuICAgIFwiQXJ0aWZpY2lhbCBTb2lsXCI6IFtcIlNPSVwiLCAwLjksIDFdLFxuICAgIFwiU29sYXIgQ2VsbFwiOiBbXCJTT0xcIiwgMC4wMTUsIDAuMDFdLFxuICAgIFwiU29sYXIgUGFuZWxcIjogW1wiU1BcIiwgMC4xNSwgMC4xXSxcbiAgICBcIlNoaXAtUmVwYWlyIERyb25lXCI6IFtcIlNSRFwiLCAwLjMsIDAuMDVdLFxuICAgIFwiU3BlY2lhbGl6ZWQgQW50aS1yYWQgUGxhdGVcIjogW1wiU1JQXCIsIDAuMSwgMC4yXSxcbiAgICBcIlN0cnVjdHVyYWwgU3BhY2VjcmFmdCBDb21wb25lbnRcIjogW1wiU1NDXCIsIDEsIDFdLFxuICAgIFwiU21hbGwgU1RMIEZ1ZWwgVGFuayBLaXRcIjogW1wiU1NMXCIsIDIwLCAyMF0sXG4gICAgXCJTdGVlbFwiOiBbXCJTVExcIiwgNy44NSwgMV0sXG4gICAgXCJNZWRpY2FsIFN0cmV0Y2hlclwiOiBbXCJTVFJcIiwgMC4wMSwgMV0sXG4gICAgXCJTdGFiaWxpdHkgU3VwcG9ydCBTeXN0ZW1cIjogW1wiU1RTXCIsIDAuMSwgMC4xXSxcbiAgICBcIlN1cmdlcnkgVW5pdFwiOiBbXCJTVVwiLCA2LCA1XSxcbiAgICBcIlN1cnZlaWxsYW5jZSBEcm9uZVwiOiBbXCJTVURcIiwgMC4zLCAwLjA1XSxcbiAgICBcIlNhZmV0eSBVbmlmb3JtXCI6IFtcIlNVTlwiLCAwLjA1LCAwLjA1XSxcbiAgICBcIlNtYWxsIFdhZmVyXCI6IFtcIlNXRlwiLCAwLjAwMywgMC4wMDNdLFxuICAgIFwiVGFudGFsdW1cIjogW1wiVEFcIiwgMTYuNjUsIDFdLFxuICAgIFwiVGFyZ2V0aW5nIENvbXB1dGVyXCI6IFtcIlRBQ1wiLCAwLjE1LCAxXSxcbiAgICBcIlRhbnRhbGl0ZSBSb2NrXCI6IFtcIlRBSVwiLCA3Ljk0LCAxXSxcbiAgICBcIlRlY2huZXRpdW1cIjogW1wiVENcIiwgMTEuOCwgMV0sXG4gICAgXCJUaW55IENhcmdvIEJheSBLaXRcIjogW1wiVENCXCIsIDIwLCAyMF0sXG4gICAgXCJUQ0wgQWNpZFwiOiBbXCJUQ0xcIiwgMC4wOSwgMC4xXSxcbiAgICBcIlRlY2huZXRpdW0gT3hpZGVcIjogW1wiVENPXCIsIDkuOCwgMV0sXG4gICAgXCJTdGFiaWxpemVkIFRlY2huZXRpdW1cIjogW1wiVENTXCIsIDMuNCwgMS4yXSxcbiAgICBcIlRyYXVtYSBDYXJlIFVuaXRcIjogW1wiVENVXCIsIDUsIDRdLFxuICAgIFwiVGhlcm1vRmx1aWRcIjogW1wiVEhGXCIsIDAuNiwgMC4zNV0sXG4gICAgXCJCYXNpYyBUaGVybWFsIFByb3RlY3Rpb24gTWF0ZXJpYWxcIjogW1wiVEhQXCIsIDIuMiwgMV0sXG4gICAgXCJUaXRhbml1bVwiOiBbXCJUSVwiLCA0LjUsIDFdLFxuICAgIFwiVGl0YW5pdW0gT3JlXCI6IFtcIlRJT1wiLCAxLjU4LCAxXSxcbiAgICBcIlRlY2hub0tldmxhciBGYWJyaWNcIjogW1wiVEtcIiwgMS44OSwgMV0sXG4gICAgXCJUZW5zb3IgUHJvY2Vzc2luZyBVbml0XCI6IFtcIlRQVVwiLCAwLjAwMiwgMC4wMDJdLFxuICAgIFwiQXVkaW8gVHJhbnNtaXR0ZXJcIjogW1wiVFJBXCIsIDAuMDA1LCAwLjAwMl0sXG4gICAgXCJBZHZhbmNlZCBUcmFuc2lzdG9yXCI6IFtcIlRSTlwiLCAwLjAwMSwgMC4wMDFdLFxuICAgIFwiVHJ1c3NcIjogW1wiVFJVXCIsIDAuMSwgMS41XSxcbiAgICBcIlRlY3Rvc2lsaXNpdGVcIjogW1wiVFNcIiwgMi40LCAxXSxcbiAgICBcIlRoZXJtYWwgU2hpZWxkaW5nXCI6IFtcIlRTSFwiLCAyLjQsIDEuNV0sXG4gICAgXCJUZXN0IFR1YmVzXCI6IFtcIlRVQlwiLCAwLjAwMiwgMC4wMDJdLFxuICAgIFwiVW5pdmVyc2FsIFRvb2xzZXRcIjogW1wiVVRTXCIsIDAuMDUsIDAuMDVdLFxuICAgIFwiSGlnaC12b2x1bWUgQ2FyZ28gQmF5IEtpdFwiOiBbXCJWQ0JcIiwgMjAwLCAyMDBdLFxuICAgIFwiVHJpZ2x5Y2VyaWRlIEZydWl0c1wiOiBbXCJWRUdcIiwgMS4xLCAxXSxcbiAgICBcIlZpdGFHZWxcIjogW1wiVkdcIiwgMC4yMSwgMC4xXSxcbiAgICBcIlZpdGEgRXNzZW5jZVwiOiBbXCJWSVRcIiwgMC45LCAxXSxcbiAgICBcIlZlcnkgU21hbGwgQ2FyZ28gQmF5IEtpdFwiOiBbXCJWU0NcIiwgMzUsIDM1XSxcbiAgICBcIlR1bmdzdGVuXCI6IFtcIldcIiwgNy41MTksIDFdLFxuICAgIFwiV2VhayBBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiOiBbXCJXQUlcIiwgMC4wMDEsIDAuMDFdLFxuICAgIFwiQWxwaGEtU3RhYmlsaXplZCBUdW5nc3RlblwiOiBbXCJXQUxcIiwgNi4yNSwgMV0sXG4gICAgXCJIaWdoLWxvYWQgQ2FyZ28gQmF5IEtpdFwiOiBbXCJXQ0JcIiwgMjAwLCAyMDBdLFxuICAgIFwiU21hcnQgWmluZmFuZGVsXCI6IFtcIldJTlwiLCAwLjEsIDAuMV0sXG4gICAgXCJXaW5kb3cgTWFuYWdlclwiOiBbXCJXTVwiLCAwLjAwMSwgMC4wMV0sXG4gICAgXCJIYW5kY3JhZnQgV29ya3Nob3AgVW5pdFwiOiBbXCJXT1JcIiwgNSwgNV0sXG4gICAgXCJXYXRlciBSZWNsYWltZXJcIjogW1wiV1JcIiwgNi40LCA1XSxcbiAgICBcIlNjaWVudGlmaWMgV29yayBTdGF0aW9uXCI6IFtcIldTXCIsIDAuMDUsIDAuNV0sXG4gICAgXCJaaXJjb24gQ3J5c3RhbHNcIjogW1wiWklSXCIsIDQuODUsIDFdLFxuICAgIFwiWmlyY29uaXVtXCI6IFtcIlpSXCIsIDYuNTMsIDFdLFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0dhbWVQcm9wZXJ0aWVzLnRzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBTdHlsZSA9IHtcbiAgICBCdXR0b246IFtcIkJ1dHRvbl9fYnRuX19fVUpHWjFiN1wiXSxcbiAgICBCdXR0b25QcmltYXJ5OiBbXCJCdXR0b25fX3ByaW1hcnlfX19fbE9iUGl3XCJdLFxuICAgIEJ1dHRvblN1Y2Nlc3M6IFtcIkJ1dHRvbl9fc3VjY2Vzc19fX2JDaUlWWHdcIl0sXG4gICAgQnV0dG9uRGlzYWJsZWQ6IFtcIkJ1dHRvbl9fZGlzYWJsZWRfX19feDhpN1hGXCJdLFxuICAgIEJ1dHRvbkVuYWJsZWQ6IFtcIkJ1dHRvbl9fcHJpbWFyeV9fX19sT2JQaXdcIl0sXG4gICAgQnV0dG9uRGFuZ2VyOiBbXCJCdXR0b25fX2Rhbmdlcl9fX1MyclNPRVNcIl0sXG4gICAgQnV0dG9uTmV1dHJhbDogW1wiQnV0dG9uX19uZXV0cmFsX19fT0FGT2FOc1wiXSxcbiAgICBTbWFsbEJ1dHRvbjogW1wiQnV0dG9uX19kYXJrSW5saW5lX19fel9ZS2E5MVwiLCBcIkJ1dHRvbl9fZGFya19fX3ZkSmJjYzhcIiwgXCJCdXR0b25fX2J0bl9fX1VKR1oxYjdcIiwgXCJCdXR0b25fX2lubGluZV9fX0ZmdzliYm5cIl0sXG4gICAgU2lkZWJhclNlY3Rpb25IZWFkOiBbXCJTaWRlYmFyX19zZWN0aW9uSGVhZF9fX19OSExLRFRcIiwgXCJmb250c19fZm9udC1yZWd1bGFyX19fU3hwMXhqb1wiXSxcbiAgICBTaWRlYmFyU2VjdGlvbkNvbnRlbnQ6IFtcIlNpZGViYXJfX3NlY3Rpb25Db250ZW50X19fd2dHWUZvcFwiLCBcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCJdLFxuICAgIFNpZGViYXJMaW5lOiBbXCJTaWRlYmFyX19jb250cmFjdF9fX0owZ21sek5cIiwgXCJTaWRlYmFyX19zaWRlYmFyLWxpbmVfX19iRTJyYlJiXCJdLFxuICAgIEZvbnRzUmVndWxhcjogW1wiZm9udHNfX2ZvbnQtcmVndWxhcl9fX1N4cDF4am9cIl0sXG4gICAgU2lkZWJhclRleHQ6IFtcIkZyYW1lX190b2dnbGVMYWJlbF9fX0JURmNlOEhcIiwgXCJmb250c19fZm9udC1yZWd1bGFyX19fU3hwMXhqb1wiLCBcInR5cGVfX3R5cGUtcmVndWxhcl9fX2s4bkhVZklcIl0sXG4gICAgU2lkZWJhclNsaXZlcjogW1wiRnJhbWVfX3RvZ2dsZUluZGljYXRvclNlY29uZGFyeV9fX2ZyWDRDR2lcIiwgXCJGcmFtZV9fdG9nZ2xlSW5kaWNhdG9yX19fWktRUWdBTFwiXSxcbiAgICBTaWRlYmFyQnV0dG9uOiBbXCJGcmFtZV9fdG9nZ2xlX19fVjNpSHBCN1wiXSxcbiAgICBDb250cmFjdExpbmU6IFtcInk4NEVVSThnQ1AtU1Y5MVg3dklpaFE9PVwiLCBcImZWZDNhWUpoRlktdXVhSCtRVEJ5aEE9PVwiXSxcbiAgICBDb250cmFjdE5hbWU6IFtcInpoaXhwNDA4WUYwODJJekE1S1B2ZkE9PVwiXSxcbiAgICBDb250cmFjdFZpZXc6IFtcImtxNUJyR0tuVFVUcUNEWU1wTFE5MGc9PVwiXSxcbiAgICBSYWRpb0J1dHRvbjogW1wiUmFkaW9JdGVtX19jb250YWluZXJfX19DU2N6cW1HXCJdLFxuICAgIFNldHRpbmdzQnV0dG9uOiBbXCJSYWRpb0l0ZW1fX2NvbnRhaW5lcl9fX0NTY3pxbUdcIiwgXCJSYWRpb0l0ZW1fX2NvbnRhaW5lckhvcml6b250YWxfX19fdHJsWERvXCJdLFxuICAgIFJhZGlvQnV0dG9uVW5Ub2dnbGVkOiBbXCJSYWRpb0l0ZW1fX2luZGljYXRvcl9fX1F6UXRqaEFcIl0sXG4gICAgU2V0dGluZ3NCYXJVbnRvZ2dsZWQ6IFtcIlJhZGlvSXRlbV9faW5kaWNhdG9yX19fUXpRdGpoQVwiLCBcIlJhZGlvSXRlbV9faW5kaWNhdG9ySG9yaXpvbnRhbF9fX1N3dHdUSWhcIl0sXG4gICAgUmFkaW9CdXR0b25Ub2dnbGVkOiBbXCJSYWRpb0l0ZW1fX2luZGljYXRvcl9fX1F6UXRqaEFcIiwgXCJSYWRpb0l0ZW1fX2FjdGl2ZV9fX0NEc2NPUVZcIiwgXCJlZmZlY3RzX19zaGFkb3dQcmltYXJ5X19fRWJYSlFvclwiXSxcbiAgICBTZXR0aW5nc0JhclRvZ2dsZWQ6IFtcIlJhZGlvSXRlbV9faW5kaWNhdG9yX19fUXpRdGpoQVwiLCBcIlJhZGlvSXRlbV9faW5kaWNhdG9ySG9yaXpvbnRhbF9fX1N3dHdUSWhcIiwgXCJSYWRpb0l0ZW1fX2FjdGl2ZV9fX0NEc2NPUVZcIiwgXCJlZmZlY3RzX19zaGFkb3dQcmltYXJ5X19fRWJYSlFvclwiXSxcbiAgICBSYWRpb0J1dHRvblZhbHVlOiBbXCJSYWRpb0l0ZW1fX3ZhbHVlX19fWWQxR3QxVFwiLCBcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCIsIFwidHlwZV9fdHlwZS1zbWFsbF9fX3BNUWhNUU9cIl0sXG4gICAgU2V0dGluZ3NUZXh0OiBbXCJSYWRpb0l0ZW1fX3ZhbHVlX19fWWQxR3QxVFwiLCBcImZvbnRzX19mb250LXJlZ3VsYXJfX19TeHAxeGpvXCIsIFwidHlwZV9fdHlwZS1zbWFsbF9fX3BNUWhNUU9cIiwgXCJSYWRpb0l0ZW1fX3ZhbHVlSG9yaXpvbnRhbF9fX0Q1QVhKOVBcIl0sXG4gICAgT3ZlcmxhcHBpbmdEaXY6IFtcIk92ZXJsYXlfX292ZXJsYXlfX19OQTlIVjh5XCJdLFxuICAgIEdyZXlTdHJpcGVzOiBbXCJPdmVybGF5X19iYWNrZ3JvdW5kX19faWVacEhpRlwiLCBcIk92ZXJsYXlfX292ZXJsYXlfX19OQTlIVjh5XCJdLFxuICAgIFNwYWNlcjogW1wiT3ZlcmxheV9fY2xvc2VfX19ieEdvTUlsXCJdLFxuICAgIFByb2dyZXNzQmFyOiBbXCJQcm9ncmVzc0Jhcl9fcHJpbWFyeV9fX08zMGpCcXFcIiwgXCJQcm9ncmVzc0Jhcl9fcHJvZ3Jlc3NfX19lYjRLaHVXXCJdLFxuICAgIFByb2dyZXNzQmFyQ29sb3JzOiBbXCJQcm9ncmVzc0Jhcl9fcHJpbWFyeV9fX08zMGpCcXFcIiwgXCJncmV5LXByb2dyZXNzLWJhclwiLCBcImdvb2QtcHJvZ3Jlc3MtYmFyXCIsIFwid2FybmluZy1wcm9ncmVzcy1iYXJcIiwgXCJkYW5nZXItcHJvZ3Jlc3MtYmFyXCJdLFxuICAgIFByb2dyZXNzQmFyR29vZDogW1wiZ29vZC1wcm9ncmVzcy1iYXJcIl0sXG4gICAgUHJvZ3Jlc3NCYXJXYXJuaW5nOiBbXCJ3YXJuaW5nLXByb2dyZXNzLWJhclwiXSxcbiAgICBQcm9ncmVzc0JhckRhbmdlcjogW1wiZGFuZ2VyLXByb2dyZXNzLWJhclwiXSxcbiAgICBDZW50ZXJJbnRlcmZhY2U6IFtcIk92ZXJsYXlfX2NoaWxkcmVuX19fcmd0VmF4Y1wiXSxcbiAgICBGb3JtUm93OiBbXCJGb3JtQ29tcG9uZW50X19jb250YWluZXJBY3RpdmVfX19IWnY5akhkXCIsIFwiZm9ybXNfX2FjdGl2ZV9fX3duOUtRVFpcIiwgXCJmb3Jtc19fZm9ybS1jb21wb25lbnRfX195VGdQX1FhXCJdLFxuICAgIEhlYWRlclJvdzogW1wiRm9ybUNvbXBvbmVudF9fY29udGFpbmVyUGFzc2l2ZV9fX0ZyQmR5R1VcIiwgXCJmb3Jtc19fcGFzc2l2ZV9fX2JpUlVpRTVcIiwgXCJmb3Jtc19fZm9ybS1jb21wb25lbnRfX195VGdQX1FhXCJdLFxuICAgIEZvcm1MYWJlbDogW1wiRm9ybUNvbXBvbmVudF9fbGFiZWxfX19hUUIxNWVCXCIsIFwiZm9udHNfX2ZvbnQtcmVndWxhcl9fX1N4cDF4am9cIiwgXCJ0eXBlX190eXBlLXJlZ3VsYXJfX19rOG5IVWZJXCJdLFxuICAgIEZvcm1JbnB1dDogW1wiRm9ybUNvbXBvbmVudF9faW5wdXRfX19abkk4bVlpXCIsIFwiZm9ybXNfX2lucHV0X19fQTkyX040SlwiXSxcbiAgICBGb3JtU2F2ZVJvdzogW1wiRm9ybUNvbXBvbmVudF9fY29udGFpbmVyQ29tbWFuZF9fX0I0WExFUmZcIiwgXCJmb3Jtc19fY21kX19fSU16dDdVZ1wiLCBcImZvcm1zX19mb3JtLWNvbXBvbmVudF9fX3lUZ1BfUWFcIl0sXG4gICAgRm9ybVNhdmVMYWJlbDogW1wiRm9ybUNvbXBvbmVudF9fbGFiZWxfX19hUUIxNWVCXCIsIFwiZm9udHNfX2ZvbnQtcmVndWxhcl9fX1N4cDF4am9cIiwgXCJ0eXBlX190eXBlLXJlZ3VsYXJfX19rOG5IVWZJXCJdLFxuICAgIEZvcm1TYXZlSW5wdXQ6IFtcIkZvcm1Db21wb25lbnRfX2lucHV0X19fWm5JOG1ZaVwiLCBcImZvcm1zX19pbnB1dF9fX0E5Ml9ONEpcIl0sXG4gICAgQWN0aW9uT3ZlcmxheTogW1wiQWN0aW9uQ29uZmlybWF0aW9uT3ZlcmxheV9fY29udGFpbmVyX19fQTA1VHMxZ1wiLCBcIkFjdGlvbkZlZWRiYWNrX19vdmVybGF5X19fTk5EUFJyVlwiXSxcbiAgICBBY3Rpb25DZW50ZXJJbnRlcmZhY2U6IFtcIkFjdGlvbkNvbmZpcm1hdGlvbk92ZXJsYXlfX21lc3NhZ2VfX19PYWpvR2VoXCIsIFwiQWN0aW9uRmVlZGJhY2tfX21lc3NhZ2VfX19HMlN6NGJ3XCIsIFwiZm9udHNfX2ZvbnQtcmVndWxhcl9fX1N4cDF4am9cIiwgXCJ0eXBlX190eXBlLWxhcmdlcl9fX1ZkcEpJYjFcIl0sXG4gICAgQWN0aW9uQ29uZmlybTogW1wiQWN0aW9uQ29uZmlybWF0aW9uT3ZlcmxheV9fbWVzc2FnZV9fX09ham9HZWhcIiwgXCJBY3Rpb25GZWVkYmFja19fbWVzc2FnZV9fX0cyU3o0YndcIiwgXCJmb250c19fZm9udC1yZWd1bGFyX19fU3hwMXhqb1wiLCBcInR5cGVfX3R5cGUtbGFyZ2VyX19fVmRwSkliMVwiXSxcbiAgICBBY3Rpb25Db25maXJtTWVzc2FnZTogW1wiQWN0aW9uQ29uZmlybWF0aW9uT3ZlcmxheV9fdGV4dF9fX3FrS3pWSzBcIiwgXCJBY3Rpb25GZWVkYmFja19fdGV4dF9fX1lRamppYkdcIiwgXCJmb250c19fZm9udC1yZWd1bGFyX19fU3hwMXhqb1wiLCBcInR5cGVfX3R5cGUtcmVndWxhcl9fX2s4bkhVZklcIl0sXG4gICAgQWN0aW9uQnV0dG9uczogW1wiQWN0aW9uQ29uZmlybWF0aW9uT3ZlcmxheV9fYnV0dG9uc19fX3NFN0NOVmVcIl0sXG4gICAgTWF0VGV4dDogW1wiQ29sb3JlZEljb25fX2xhYmVsX19fT1UxSTRvUFwiXSxcbiAgICBNYXRUZXh0V3JhcHBlcjogW1wiQ29sb3JlZEljb25fX2xhYmVsQ29udGFpbmVyX19fWVZmZ3pPa1wiXSxcbiAgICBNYXRlcmlhbEVsZW1lbnQ6IFtcIkNvbG9yZWRJY29uX19jb250YWluZXJfX19kamFSNHIyXCJdLFxuICAgIE1hdGVyaWFsV3JhcHBlcjogW1wiTWF0ZXJpYWxJY29uX19jb250YWluZXJfX19xOGdLSXg4XCJdLFxuICAgIE1hdGVyaWFsTnVtYmVyV3JhcHBlcjogW1wiTWF0ZXJpYWxJY29uX19pbmRpY2F0b3JDb250YWluZXJfX19DcXRheF9ZXCJdLFxuICAgIE1hdGVyaWFsTnVtYmVyOiBbXCJNYXRlcmlhbEljb25fX2luZGljYXRvcl9fX1NId2xuZEpcIiwgXCJNYXRlcmlhbEljb25fX3R5cGUtdmVyeS1zbWFsbF9fX1VNelEzaXJcIiwgXCJNYXRlcmlhbEljb25fX25ldXRyYWxfX19TWXNIWEFhXCJdLFxuICAgIE1hdGVyaWFsV3JhcHBlcldyYXBwZXI6IFtcIkdyaWRJdGVtVmlld19faW1hZ2VfX195TW9LT1pWXCJdLFxuICAgIE1hdGVyaWFsT3V0ZXI6IFtcIkdyaWRJdGVtVmlld19fY29udGFpbmVyX19feFAydUp6OFwiXSxcbiAgICBNYXRlcmlhbE5hbWVUZXh0OiBbXCJHcmlkSXRlbVZpZXdfX25hbWVfX19oM3lYOUxtXCIsIFwiZm9udHNfX2ZvbnQtcmVndWxhcl9fX1N4cDF4am9cIiwgXCJ0eXBlX190eXBlLXJlZ3VsYXJfX19rOG5IVWZJXCJdLFxufTtcbmV4cG9ydCBjb25zdCBXaXRoU3R5bGVzID0gKC4uLnN0eWxlKSA9PiB7XG4gICAgcmV0dXJuIHN0eWxlLnJlZHVjZSgoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4gcHJldmlvdXNWYWx1ZS5jb25jYXQoY3VycmVudFZhbHVlKSkpO1xufTtcbmV4cG9ydCBjb25zdCBUZXh0Q29sb3JzID0ge1xuICAgIEZhaWx1cmU6IFwiI2Q5NTM0ZlwiLFxuICAgIFN1Y2Nlc3M6IFwiIzVjYjg1Y1wiLFxuICAgIFN0YW5kYXJkOiBcIiNiYmJiYmJcIixcbiAgICBZZWxsb3c6IFwiI2Y3YTYwMFwiXG59O1xuZXhwb3J0IGNvbnN0IERlZmF1bHRDb2xvcnMgPSBbXG4gICAgXCIjMDA0NTY0XCIsXG4gICAgXCIjMDA1Yjc2XCIsXG4gICAgXCIjMDA3MDc5XCIsXG4gICAgXCIjMDA4NDZjXCIsXG4gICAgXCIjMDA5NTUyXCIsXG4gICAgXCIjNjdhMjJlXCIsXG4gICAgXCIjYWRhOTAwXCIsXG4gICAgXCIjZjdhNjAwXCJcbl07XG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlDb2xvcnMgPSB7XG4gICAgXCJlbGVjdHJvbmljIGRldmljZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDg2LCAyMCwgMTQ3KSwgcmdiKDExMSwgNDUsIDE3MikpXCIsIFwicmdiKDIxMywgMTQ3LCAyNTUpXCJdLFxuICAgIFwiY29uc3RydWN0aW9uIHByZWZhYnNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1LCAzMCwgOTgpLCByZ2IoNDAsIDU1LCAxMjMpKVwiLCBcInJnYigxNDIsIDE1NywgMjI1KVwiXSxcbiAgICBcImVsZWN0cm9uaWMgc3lzdGVtc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTEsIDI2LCA3NiksIHJnYig3NiwgNTEsIDEwMSkpXCIsIFwicmdiKDE3OCwgMTUzLCAyMDMpXCJdLFxuICAgIFwibWVkaWNhbCBlcXVpcG1lbnRcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDg1LCAxNzAsIDg1KSwgcmdiKDExMCwgMTk1LCAxMTApKVwiLCBcInJnYigyMTIsIDI1NSwgMjEyKVwiXSxcbiAgICBcImNvbnN0cnVjdGlvbiBwYXJ0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNDEsIDc3LCAxMDcpLCByZ2IoNjYsIDEwMiwgMTMyKSlcIiwgXCJyZ2IoMTY4LCAyMDQsIDIzNClcIl0sXG4gICAgXCJzaGlwIGVuZ2luZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1MywgNDEsIDApLCByZ2IoMTc4LCA2NiwgMjUpKVwiLCBcInJnYigyNTUsIDE2OCwgMTI3KVwiXSxcbiAgICBcInNoaXAgcGFydHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1MywgOTksIDApLCByZ2IoMTc4LCAxMjQsIDI1KSlcIiwgXCJyZ2IoMjU1LCAyMjYsIDEyNylcIl0sXG4gICAgXCJtZXRhbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDU0LCA1NCwgNTQpLCByZ2IoNzksIDc5LCA3OSkpXCIsIFwicmdiKDE4MSwgMTgxLCAxODEpXCJdLFxuICAgIFwiY29uc3VtYWJsZXMgKGx1eHVyeSlcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEzNiwgMjQsIDM5KSwgcmdiKDE2MSwgNDksIDY0KSlcIiwgXCJyZ2IoMjU1LCAxNTEsIDE2NilcIl0sXG4gICAgXCJhZ3JpY3VsdHVyYWwgcHJvZHVjdHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDkyLCAxOCwgMTgpLCByZ2IoMTE3LCA0MywgNDMpKVwiLCBcInJnYigyMTksIDE0NSwgMTQ1KVwiXSxcbiAgICBcIm9yZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDgyLCA4NywgOTcpLCByZ2IoMTA3LCAxMTIsIDEyMikpXCIsIFwicmdiKDIwOSwgMjE0LCAyMjQpXCJdLFxuICAgIFwiZ2FzZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDAsIDEwNSwgMTA3KSwgcmdiKDI1LCAxMzAsIDEzMikpXCIsIFwicmdiKDEyNywgMjMyLCAyMzQpXCJdLFxuICAgIFwic2hpcCBzaGllbGRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigyMjQsIDEzMSwgMCksIHJnYigyNDksIDE1NiwgMjUpKVwiLCBcInJnYigyMzAgMjMwLDEyNylcIl0sXG4gICAgXCJhbGxveXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEyMywgNzYsIDMwKSwgcmdiKDE0OCwgMTAxLCA1NSkpXCIsIFwicmdiKDI1MCwgMjAzLCAxNTcpXCJdLFxuICAgIFwiY2hlbWljYWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxODMsIDQ2LCA5MSksIHJnYigyMDgsIDcxLCAxMTYpKVwiLCBcInJnYigyNTUsIDE3MywgMjE4KVwiXSxcbiAgICBcInNvZnR3YXJlIGNvbXBvbmVudHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDEzNiwgMTIxLCA0NyksIHJnYigxNjEsIDE0NiwgNzIpKVwiLCBcInJnYigyNTUsIDI0OCwgMTc0KVwiXSxcbiAgICBcImVsZWN0cm9uaWMgcGllY2VzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMTksIDgyLCAxODkpLCByZ2IoMTQ0LCAxMDcsIDIxNCkpXCIsIFwicmdiKDI0NiwgMjA5LCAyNTUpXCJdLFxuICAgIFwiZWxlbWVudHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDYxLCA0NiwgMzIpLCByZ2IoODYsIDcxLCA1NykpXCIsIFwicmdiKDE4OCwgMTczLCAxNTkpXCJdLFxuICAgIFwibWluZXJhbHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1MywgMTEzLCA3MyksIHJnYigxNzgsIDEzOCwgOTgpKVwiLCBcInJnYigyNTUsIDI0MCwgMjAwKVwiXSxcbiAgICBcInVuaXQgcHJlZmFic1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMjksIDI3LCAyOCksIHJnYig1NCwgNTIsIDUzKSlcIiwgXCJyZ2IoMTU2LCAxNTQsIDE1NSlcIl0sXG4gICAgXCJsaXF1aWRzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMTQsIDE2NCwgMjAyKSwgcmdiKDEzOSwgMTg5LCAyMjcpKVwiLCBcInJnYigyNDEsIDI1NSwgMjU1KVwiXSxcbiAgICBcImVuZXJneSBzeXN0ZW1zXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigyMSwgNjIsIDM5KSwgcmdiKDQ2LCA4NywgNjQpKVwiLCBcInJnYigxNDgsIDE4OSwgMTY2KVwiXSxcbiAgICBcImRyb25lc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTQwLCA1MiwgMTgpLCByZ2IoMTY1LCA3NywgNDMpKVwiLCBcInJnYigyNTUsIDE3OSwgMTQ1KVwiXSxcbiAgICBcImVsZWN0cm9uaWMgcGFydHNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDkxLCA0NiwgMTgzKSwgcmdiKDExNiwgNzEsIDIwOCkpXCIsIFwicmdiKDIxOCwgMTczLCAyNTUpXCJdLFxuICAgIFwidGV4dGlsZXNcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDgyLCA5MCwgMzMpLCByZ2IoMTA3LCAxMTUsIDU4KSlcIiwgXCJyZ2IoMjA5LCAyMTcsIDE2MClcIl0sXG4gICAgXCJjb25zdHJ1Y3Rpb24gbWF0ZXJpYWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigyNCwgOTEsIDIxMSksIHJnYig0OSwgMTE2LCAyMzYpKVwiLCBcInJnYigxNTEsIDIxOCwgMjU1KVwiXSxcbiAgICBcInNvZnR3YXJlIHRvb2xzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMjksIDk4LCAxOSksIHJnYigxNTQsIDEyMywgNDQpKVwiLCBcInJnYigyNTUsIDI1NSwgMTQ2KVwiXSxcbiAgICBcInBsYXN0aWNzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMjEsIDMxLCA2MCksIHJnYigxNDYsIDU2LCA4NSkpXCIsIFwicmdiKDI0OCwgMTU4LCAxODcpXCJdLFxuICAgIFwiY29uc3VtYWJsZXMgKGJhc2ljKVwiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTQ5LCA0NiwgNDYpLCByZ2IoMTc0LCA3MSwgNzEpKVwiLCBcInJnYigyNTUsIDE3MywgMTczKVwiXSxcbiAgICBcImZ1ZWxzXCI6IFtcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigzMCwgMTIzLCAzMCksIHJnYig1NSwgMTQ4LCA1NSkpXCIsIFwicmdiKDE1NywgMjUwLCAxNTcpXCJdLFxuICAgIFwic29mdHdhcmUgc3lzdGVtc1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNjAsIDUzLCA1KSwgcmdiKDg1LCA3OCwgMzApKVwiLCBcInJnYigxODcsIDE4MCwgMTMyKVwiXSxcbiAgICBcInNoaXAga2l0c1wiOiBbXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTU0LCA4NCwgMCksIHJnYigxNzgsIDEwOSwgMjUpKVwiLCBcInJnYigyNTUsIDIxMSwgMTI3KVwiXSxcbiAgICBcInV0aWxpdHlcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE2MSwgMTQ4LCAxMzYpLCByZ2IoMTg2LCAxNzMsIDE2MSkpXCIsIFwicmdiKDI1NSwgMjU1LCAyNTUpXCJdLFxuICAgIFwic2hpcG1lbnRcIjogW1wibGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAzMDMwMywgIzE4MTgxOClcIiwgXCIjN2Y3ZjdmXCJdXG59O1xuZXhwb3J0IGNvbnN0IFBNTUdTdHlsZSA9IGBcclxuLnBiLW1pbmltaXplIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiAzcHg7XHJcblx0bWFyZ2luLXRvcDogMXB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMThweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBiLW1pbmltaXplLWN4OmhvdmVyIHtcclxuXHRjb2xvcjogIzI2MzUzZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZhMmRlO1xyXG59XHJcbi5wYi1taW5pbWl6ZS1jeCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI2MzUzZTtcclxuXHRjb2xvcjogIzNmYTJkZTtcclxufVxyXG4ucGItbWluaW1pemUtc2V0dGluZ3M6aG92ZXIge1xyXG5cdGNvbG9yOiAjZGRkO1xyXG59XHJcbi5tYXQtZWxlbWVudC1sYXJnZSB7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdHdpZHRoOiA0OHB4O1xyXG59XHJcbi5tYXQtZWxlbWVudC1sYXJnZSBkaXYuQ29sb3JlZEljb25fX2NvbnRhaW5lcl9fX2RqYVI0cjIge1xyXG5cdGhlaWdodDogNDhweDtcclxuXHR3aWR0aDogNDhweDtcclxuXHRmb250LXNpemU6IDE1Ljg0cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tYXQtZWxlbWVudC1zbWFsbCB7XHJcblx0aGVpZ2h0OiAzMnB4O1xyXG5cdHdpZHRoOiAzMnB4O1xyXG59XHJcbi5jaGVjay10aW1lLWNvbXBsZXRlIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4uY2hlY2stdGltZS1vdmVyZHVlIHtcclxuXHRjb2xvcjogI2Q5NTM0ZjtcclxufVxyXG4uY2hlY2stdGltZSB7XHJcblx0Y29sb3I6IHJnYigxNTMsIDE1MywgMTUzKVxyXG59XHJcbi5jaGVjay1pdGVtIHtcclxuXHRib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzU1NTtcclxufVxyXG4uY2hlY2tlZC10ZXh0IHtcclxuXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuXHRjb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpXHJcbn1cclxuLmRlbGV0ZS1idXR0b24ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGY7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0cGFkZGluZzogMCA4cHg7XHJcblx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZGVsZXRlLWJ1dHRvbjpob3ZlciB7XHJcblx0Y29sb3I6ICMyMjI7XHJcbn1cclxuLm5vdGVzLXdyYXBwZXIgdGV4dGFyZWF7XHJcblx0cmVzaXplOiBub25lO1xyXG5cdHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0MjM2MWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiAwcHg7XHJcblx0Y29sb3I6ICNjY2NjY2M7XHJcblx0Zm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA5MyU7XHJcbn1cclxuLm5vdGVzLXdyYXBwZXJ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA5MyU7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG4ubm90ZXMtd3JhcHBlciB0ZXh0YXJlYTpmb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5jaGVjay13cmFwcGVyIHtcclxuXHRtYXJnaW46IDVweDtcclxufVxyXG4udG9vbHRpcC1iYXNle1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcblx0Zm9udC1mYW1pbHk6XCJEcm9pZCBTYW5zXCIsc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6MTBweDtcclxuXHRjb2xvcjojYmJiXHJcbn1cclxuLnRvb2x0aXBcclxue1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0bWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcbi50b29sdGlwLWJhc2U6aG92ZXIgLnRvb2x0aXBcclxue1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMzI4MmI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5zZWxlY3Qge1xyXG5cdGJvcmRlcjogMHB4O1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOGQ2NDExO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0MjM2MWQ7XHJcblx0Y29sb3I6ICNiYmI7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0cGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLmZsZXgtdGFibGUge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleDogMTtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcblx0YWxpZ24taXRlbXM6IGxlZnQ7XHJcbn1cclxuLmxpc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBhZGRpbmc6IDVweDtcclxufVxyXG4uY2hhdC1saW5lIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDhlbSwgMWZyKSBtaW5tYXgoOGVtLCA0ZnIpIG1pbm1heCg4ZW0sIDE1ZnIpO1xyXG5cdGdyaWQtY29sdW1uLWdhcDogMXB4O1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxuXHRsaW5lLWhlaWdodDogMS4xO1xyXG59XHJcbi50aW1lLWRhdGUge1xyXG5cdGNvbG9yOiAjNDQ0NDQ0O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiAycHggNXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDBweDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY2hhdC1uYW1lIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0Y29sb3I6ICM5OTk5OTk7XHJcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0cGFkZGluZzogMnB4IDVweDtcclxuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTk5OTk5O1xyXG59XHJcbi5jaGF0LW1lc3NhZ2Uge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGNvbG9yOiAjYmJiYmJiO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0cGFkZGluZzogMnB4IDVweDtcclxufVxyXG4uZmluLXRpdGxlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cdHBhZGRpbmc6IDZweCA0cHggMnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjMsIDE2MiwgMjIyLCAwLjE1KTtcclxufVxyXG50ZC5idXJuLWdyZWVuIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ1MDM0ICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICM5ZmJiOWY7XHJcbn1cclxudHI6aG92ZXIgdGQuYnVybi1ncmVlbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzUwNmM1MCAhaW1wb3J0YW50O1xyXG59XHJcbnRkLmJ1cm4teWVsbG93IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODM2ZTI0ICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICNmNmRmOTQ7XHJcbn1cclxudHI6aG92ZXIgdGQuYnVybi15ZWxsb3cge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM5ZjhhNDAgIWltcG9ydGFudDtcclxufVxyXG50ZC5idXJuLXJlZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzVhMzEzMCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjYzU5YzliO1xyXG59XHJcbnRyOmhvdmVyIHRkLmJ1cm4tcmVkIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNzY0ZDRjICFpbXBvcnRhbnQ7XHJcbn1cclxuLmludi1oZWFkZXIge1xyXG5cdGRpc3BsYXk6IGlubGluZTtcclxuXHRwYWRkaW5nOiAycHggOHB4O1xyXG5cdGNvbG9yOiAjM2ZhMmRlO1xyXG59XHJcbi5pbnYtYm9keSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRtYXJnaW4tYm90dG9tOiAyM3B4O1xyXG5cdHBhZGRpbmc6IDVweCA4cHg7XHJcbn1cclxuLnByb2dyZXNzLWJhciB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiA5cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuXHRtYXJnaW46IDFweCAycHg7XHJcbn1cclxuLnByb2dyZXNzLWJhcjo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7YmFja2dyb3VuZDogI2Y3YTYwMDt9XHJcblxyXG4uZ3JleS1wcm9ncmVzcy1iYXI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge2JhY2tncm91bmQ6ICNkOTUzNGY7fVxyXG4uZ29vZC1wcm9ncmVzcy1iYXI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge2JhY2tncm91bmQ6ICM1Y2I4NWM7fVxyXG4ud2FybmluZy1wcm9ncmVzcy1iYXI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge2JhY2tncm91bmQ6ICNmZmM4NTY7fVxyXG4uZGFuZ2VyLXByb2dyZXNzLWJhcjo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7YmFja2dyb3VuZDogI2Q5NTM0Zjt9XHJcblxyXG4ueGl0LXRpbGUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nLXRvcDogNHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuLnJlZnJlc2gtYnV0dG9uIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdhNjAwO1xyXG5cdGNvbG9yOiAjZWVlO1xyXG5cdGJvcmRlci13aWR0aDogMHB4O1xyXG5cdHBhZGRpbmc6IDBweCA4cHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRtYXJnaW46IDRweCA4cHg7XHJcbn1cclxuLnJlZnJlc2gtYnV0dG9uOmhvdmVyIHtcclxuXHRjb2xvcjogIzFlMWUxZTtcclxufVxyXG4ubm90aWZpY2F0aW9uIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWluLXdpZHRoOiA2MnB4O1xyXG5cdG1heC13aWR0aDogNjJweDtcclxufVxyXG4uZmluLWJveCB7XHJcblx0bWFyZ2luOiAxcHg7XHJcblx0bWluLXdpZHRoOiAxMDBweDtcclxuXHR3aWR0aDogY2FsYygzMyUgLSAycHgpO1xyXG5cdG1heC13aWR0aDogMTUwcHg7XHJcblx0cGFkZGluZzogNHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMzI4MmI7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5saW5rIHtcclxuXHRjb2xvcjogIzNmYTJkZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxpbms6aG92ZXIge1xyXG5cdGNvbG9yOiAjZjdhNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNoYXQtaW1hZ2Uge1xyXG5cdG1heC1oZWlnaHQ6IDMwMHB4O1xyXG5cdG1heC13aWR0aDogOTAlO1xyXG59XHJcbi5pbnB1dC10ZXh0e1xyXG4gICAgcGFkZGluZzogMHB4IDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0MjM2MWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiAwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ZDY0MTE7XHJcblx0Y29sb3I6ICNjY2NjY2M7XHJcblx0XHJcbn1cclxuLmlucHV0LXRleHQ6Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4uaGlkZGVuLWVsZW1lbnR7XHJcblx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdHZpc2liaWxpdHk6IGZhbHNlICFpbXBvcnRhbnQ7XHJcblx0bWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuXHRtYXJnaW46IDAgIWltcG9ydGFudDtcclxuXHRmb250LXNpemU6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5idXR0b24tdXBwZXItcmlnaHR7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Y29sb3I6ICNiYmI7XHJcblx0ZmlsbDogI2JiYjtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdG1hcmdpbi10b3A6IC04cHg7XHJcbn1cclxuLmJ1dHRvbi11cHBlci1yaWdodDpob3ZlcntcclxuXHRjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG5cdGZpbGw6ICMwMDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMTY2LCAwKTtcclxufWA7XG5leHBvcnQgY29uc3QgRW5oYW5jZWRDb2xvcnMgPSBgLyogY29uc3VtYWJsZXMgKGx1eHVyeSkgKi9cclxuZGl2W3RpdGxlPVwiU3RlbGxhciBQYWxlIEFsZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQUxFXCJdLFxyXG4udG9vbHRpcF9BTEUsXHJcbmRpdlt0aXRsZT1cIkNhZmZlaW5hdGVkIEluZnVzaW9uXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9DT0ZcIl0sXHJcbi50b29sdGlwX0NPRixcclxuZGl2W3RpdGxlPVwiRWluc3RlaW5pdW0tSW5mdXNlZCBHaW5cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0dJTlwiXSxcclxuLnRvb2x0aXBfR0lOLFxyXG5kaXZbdGl0bGU9XCJLb21idWNoYVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfS09NXCJdLFxyXG4udG9vbHRpcF9LT00sXHJcbmRpdlt0aXRsZT1cIk5ldXJvU3RpbXVsYW50c1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTlNUXCJdLFxyXG4udG9vbHRpcF9OU1QsXHJcbmRpdlt0aXRsZT1cIlBhZGRlZCBXb3JrIE92ZXJhbGxcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BXT1wiXSxcclxuLnRvb2x0aXBfUFdPLFxyXG5kaXZbdGl0bGU9XCJSZXBhaXIgS2l0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9SRVBcIl0sXHJcbi50b29sdGlwX1JFUCxcclxuZGl2W3RpdGxlPVwiU3RlbSBDZWxsIFRyZWF0bWVudFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfU0NcIl0sXHJcbi50b29sdGlwX1NDLFxyXG5kaXZbdGl0bGU9XCJWaXRhR2VsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9WR1wiXSxcclxuLnRvb2x0aXBfVkcsXHJcbi50b29sdGlwX1dJTixcclxuZGl2W3RpdGxlPVwiU21hcnQgWmluZmFuZGVsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9XSU5cIl1cclxue1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjgwMDAwLCAjN2IwMDEyKSAhaW1wb3J0YW50O1xyXG5jb2xvcjogI2RiOTE5MSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIGFncmljdWx0dXJhbCBwcm9kdWN0cyAqL1xyXG4udG9vbHRpcF9GT0QsXHJcbi50b29sdGlwX0NBRixcclxuLnRvb2x0aXBfSE9QLFxyXG4udG9vbHRpcF9HUk4sXHJcbi50b29sdGlwX01BSSxcclxuLnRvb2x0aXBfSENQLFxyXG4udG9vbHRpcF9NVFAsXHJcbi50b29sdGlwX1BJQixcclxuLnRvb2x0aXBfUFBBLFxyXG4udG9vbHRpcF9BTEcsXHJcbi50b29sdGlwX0JFQSxcclxuLnRvb2x0aXBfTVVTLFxyXG4udG9vbHRpcF9SQ08sXHJcbi50b29sdGlwX1JTSSxcclxuLnRvb2x0aXBfSEVSLFxyXG4udG9vbHRpcF9WRUcsXHJcbi50b29sdGlwX05VVCxcclxuLnRvb2x0aXBfVklULFxyXG4udG9vbHRpcF9HUkEsXHJcbmRpdlt0aXRsZT1cIlByb3RlaW4tUmljaCBBbGdhZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfQUxHXCJdLFxyXG5kaXZbdGl0bGU9XCJQcm90ZWluLVJpY2ggQmVhbnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0JFQVwiXSxcclxuZGl2W3RpdGxlPVwiQ2FmZmVpbmF0ZWQgQmVhbnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0NBRlwiXSxcclxuZGl2W3RpdGxlPVwiQWxsLVB1cnBvc2UgRm9kZGVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9GT0RcIl0sXHJcbmRpdlt0aXRsZT1cIldpbmUtUXVhbGl0eSBHcmFwZXNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0dSQVwiXSxcclxuZGl2W3RpdGxlPVwiSGlnaC1DYXJiIEdyYWluc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfR1JOXCJdLFxyXG5kaXZbdGl0bGU9XCJIeWRyb2NhcmJvbiBQbGFudHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hDUFwiXSxcclxuZGl2W3RpdGxlPVwiU3BpY3kgSGVyYnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hFUlwiXSxcclxuZGl2W3RpdGxlPVwiRmxvd2VyeSBIb3BzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9IT1BcIl0sXHJcbmRpdlt0aXRsZT1cIkhpZ2gtQ2FyYiBNYWl6ZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTUFJXCJdLFxyXG5kaXZbdGl0bGU9XCJNZWF0IFRpc3N1ZSBQYXR0aWVzXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9NVFBcIl0sXHJcbmRpdlt0aXRsZT1cIlByb3RlaW4tUmljaCBNdXNocm9vbXNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX01VU1wiXSxcclxuZGl2W3RpdGxlPVwiVHJpZ2x5Y2VyaWRlIE51dHNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX05VVFwiXSxcclxuZGl2W3RpdGxlPVwiUGluZWJlcnJpZXNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BJQlwiXSxcclxuZGl2W3RpdGxlPVwiUHJvdGVpbiBQYXN0ZVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFBBXCJdLFxyXG5kaXZbdGl0bGU9XCJSYXcgQ290dG9uIEZpYmVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9SQ09cIl0sXHJcbmRpdlt0aXRsZT1cIlJhdyBTaWxrIFN0cmFpbnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1JTSVwiXSxcclxuZGl2W3RpdGxlPVwiVHJpZ2x5Y2VyaWRlIEZydWl0c1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfVkVHXCJdLFxyXG5kaXZbdGl0bGU9XCJWaXRhIEVzc2VuY2VcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1ZJVFwiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDM4MDAsICMwYTQ3MDgpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjOGJiMzdiICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogcGxhc3RpY3MgKi9cclxuLnRvb2x0aXBfRENMLFxyXG4udG9vbHRpcF9EQ00sXHJcbi50b29sdGlwX0RDUyxcclxuLnRvb2x0aXBfUEUsXHJcbi50b29sdGlwX1BHLFxyXG4udG9vbHRpcF9QU0wsXHJcbi50b29sdGlwX1BTTSxcclxuLnRvb2x0aXBfUFNTLFxyXG5kaXZbdGl0bGU9XCJEdXJhYmxlIENhc2luZyBMXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9EQ0xcIl0sXHJcbmRpdlt0aXRsZT1cIkR1cmFibGUgQ2FzaW5nIE1cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0RDTVwiXSxcclxuZGl2W3RpdGxlPVwiRHVyYWJsZSBDYXNpbmcgU1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRENTXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5LUV0aHlsZW5lXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9QRVwiXSxcclxuZGl2W3RpdGxlPVwiUG9seW1lciBHcmFudWxhdGVcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1BHXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIFNoZWV0IFR5cGUgTFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFNMXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIFNoZWV0IFR5cGUgTVwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFNNXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIFNoZWV0IFR5cGUgU1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFNTXCJdXHJcbntcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzc5MWY2MiwgIzkyMzg3YikgIWltcG9ydGFudDtcclxuY29sb3I6ICNmODllZTEgIWltcG9ydGFudDtcclxufVxyXG4vKiBjb25zdW1hYmxlcyAoYmFzaWMpICovXHJcbi50b29sdGlwX0RXLFxyXG4udG9vbHRpcF9FWE8sXHJcbi50b29sdGlwX0ZJTSxcclxuLnRvb2x0aXBfSE1TLFxyXG4udG9vbHRpcF9IU1MsXHJcbi50b29sdGlwX0xDLFxyXG4udG9vbHRpcF9NRUEsXHJcbi50b29sdGlwX01FRCxcclxuLnRvb2x0aXBfT1ZFLFxyXG4udG9vbHRpcF9QREEsXHJcbi50b29sdGlwX1BULFxyXG4udG9vbHRpcF9SQVQsXHJcbi50b29sdGlwX1NDTixcclxuLnRvb2x0aXBfV1MsXHJcblxyXG5kaXZbdGl0bGU9XCJEcmlua2luZyBXYXRlclwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRFdcIl0sXHJcbmRpdlt0aXRsZT1cIkV4b3NrZWxldG9uIFdvcmsgU3VpdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRVhPXCJdLFxyXG5kaXZbdGl0bGU9XCJGbGF2b3VyZWQgSW5zdGEtTWVhbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRklNXCJdLFxyXG5kaXZbdGl0bGU9XCJIYXpNYXQgV29yayBTdWl0XCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9ITVNcIl0sXHJcbmRpdlt0aXRsZT1cIlNtYXJ0IFNwYWNlIFN1aXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0hTU1wiXSxcclxuZGl2W3RpdGxlPVwiQUktQXNzaXN0ZWQgTGFiIENvYXRcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0xDXCJdLFxyXG5kaXZbdGl0bGU9XCJRdWFsaXR5IE1lYXQgTWVhbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTUVBXCJdLFxyXG5kaXZbdGl0bGU9XCJCYXNpYyBNZWRpY2FsIEtpdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfTUVEXCJdLFxyXG5kaXZbdGl0bGU9XCJCYXNpYyBPdmVyYWxsc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfT1ZFXCJdLFxyXG5kaXZbdGl0bGU9XCJQZXJzb25hbCBEYXRhIEFzc2lzdGFudFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUERBXCJdLFxyXG5kaXZbdGl0bGU9XCJQb3dlciBUb29sc1wiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfUFRcIl0sXHJcbmRpdlt0aXRsZT1cIkJhc2ljIFJhdGlvbnNcIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX1JBVFwiXSxcclxuZGl2W3RpdGxlPVwiTXVsdGktUHVycG9zZSBTY2FubmVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9TQ05cIl0sXHJcbmRpdlt0aXRsZT1cIlNjaWVudGlmaWMgV29yayBTdGF0aW9uXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9XU1wiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNhNjJjMmEsICNiYTM2M2MpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjZmY5ODllICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogZnVlbHMgKi9cclxuLnRvb2x0aXBfU0YsXHJcbi50b29sdGlwX0ZGLFxyXG5kaXZbdGl0bGU9XCJGVEwgRnVlbFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfRkZcIl0sXHJcbmRpdlt0aXRsZT1cIlNUTCBGdWVsXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9TRlwiXVxyXG57XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1NDhkMjIsICM2YmEyM2MpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjY2JmYWEzICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogbGlxdWlkcyAqL1xyXG4udG9vbHRpcF9IRVgsXHJcbi50b29sdGlwX0xFUyxcclxuLnRvb2x0aXBfQlRTLFxyXG4udG9vbHRpcF9IMk8sXHJcbmRpdlt0aXRsZT1cIkhlbGlvdHJvcGUgRXh0cmFjdFwiXSxcclxuZGl2W2RhdGEtdG9vbHRpcC1jb250ZW50PVwiI3Rvb2x0aXBfSEVYXCJdLFxyXG5kaXZbdGl0bGU9XCJMaXF1aWQgRWluc3RlaW5pdW1cIl0sXHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudD1cIiN0b29sdGlwX0xFU1wiXSxcclxuZGl2W3RpdGxlPVwiQmFjdGVyaWFsIFR1bmdzdGVuIFNvbHV0aW9uXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9CVFNcIl0sXHJcbmRpdlt0aXRsZT1cIldhdGVyXCJdLFxyXG5kaXZbZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIjdG9vbHRpcF9IMk9cIl1cclxue1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjdhOGRhLCAjNjA5OGMzKSAhaW1wb3J0YW50O1xyXG5jb2xvcjogI2YxZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcbmRpdi5HcmlkSXRlbVZpZXdfX2NvbnRhaW5lcl9fX3hQMnVKejgge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbn1cclxuLyogZnVsbCBpdGVtIG5hbWUgY2VudGVyaW5nICovXHJcbnNwYW4uR3JpZEl0ZW1WaWV3X19uYW1lX19faDN5WDlMbSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1gO1xuZXhwb3J0IGNvbnN0IEljb25TdHlsZSA9IGBcclxuIC8qIFByVW5JY29uIHYwLjkwXHJcbiogPT09PT09PT09PT09PT09XHJcbipcclxuKiBJbnN0YWxsIENocm9tZSBhZGRvbjogU3R5bGVCb3QgXHJcbiogZ290bzogYXBleC5wcm9zcGVyb3VzdW5pdmVyc2UuY29tXHJcbiogcmlnaHQtY2xpY2sgYW55d2hlcmUsIHNlbGVjdDogU3R5bGVCb3QgLT4gU3R5bGUgRWxlbWVudFxyXG4qIENvcHkmUGFzdGUgdGhpcyBmaWxlIGludG8gdGhlIFN0eWxlQm90IHdpbmRvd1xyXG4qXHJcbiogQ1NTIHNjcmlwdCB0byBnaXZlIGljb25zIHRvIGFsbCBjb21tb2RpdGllcyBhbmQgc29tZSBvdGhlciBVSSBjb2xvciBhbmQgbGF5b3V0IGNoYW5nZXMuXHJcbiovXHJcbiBcclxuLyogY29udHJvdmVyc2lhbCBVSSBjaGFuZ2VzIGFuZCBjb2xvcnMgKi9cclxuLyogKGNvbW1lbnQvZGVsZXRlIGlmIG5vdCBkZXNpcmVkKVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuIFxyXG4vKiBpdGVtIHRpY2tlciBjb2xvciAqL1xyXG4uQ29sb3JlZEljb25fX2xhYmVsX19fT1UxSTRvUCB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxufVxyXG4gXHJcbiBcclxuLyogZnVsbCBpdGVtIG5hbWUgY2VudGVyaW5nICovXHJcbi5HcmlkSXRlbVZpZXdfX25hbWVfX19oM3lYOUxtICB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIFxyXG4vKiB0YWJsZSBjb2xvciAqL1xyXG50YWJsZSB0Ym9keSB0ZDpudGgtY2hpbGQob2RkKVxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyZTtcclxufVxyXG4gXHJcbi8qIGVuZCBVSSBjaGFuZ2VzIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiBcclxuLyogaXRlbXMgaW4gcHJvZHVjdGlvbiB2aWV3IGFuZCBtYXJrZXQgdmlldyAqL1xyXG5kaXYuTWF0ZXJpYWxJbmZvcm1hdGlvbl9fcmVjaXBlSW5wdXRzX19fZUx2Zm9vcCBkaXYuQnVpbGRpbmdJY29uX19jb250YWluZXJfX19qRjVHVXN6IGRpdi5CdWlsZGluZ0ljb25fX3RpY2tlckNvbnRhaW5lcl9fX05aeDNHOENcclxue1xyXG4gIGhlaWdodDogMzZweDtcclxuICB3aWR0aDogMzZweDtcclxufVxyXG4gXHJcbi8qIGl0ZW1zIGluIHBsYW5ldCB2aWV3ICovXHJcbmRpdi5SZXNvdXJjZVRhYmxlX19ncmlkQ29udGFpbmVyX19feW1yelRjRCBkaXYuTWF0ZXJpYWxJY29uX19jb250YWluZXJfX19xOGdLSXg4IGRpdi5Db2xvcmVkSWNvbl9fY29udGFpbmVyX19fZGphUjRyMjpiZWZvcmVcclxue1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIFxyXG4vKlxyXG5HcmlkSXRlbVZpZXdfX2NvbnRhaW5lcl9fX3hQMnVKejhcclxuR3JpZEl0ZW1WaWV3X19pbWFnZV9fX3lNb0tPWlZcclxuTWF0ZXJpYWxJY29uX19jb250YWluZXJfX19xOGdLSXg4XHJcbkNvbG9yZWRJY29uX19jb250YWluZXJfX19kamFSNHIyXHJcbkNvbG9yZWRJY29uX19sYWJlbENvbnRhaW5lcl9fX1lWZmd6T2tcclxuKi9cclxuIFxyXG4vKiBkZWZhdWx0IDpiZWZvcmUgZWxlbWVudCB0byBwcmVwYXJlIGZvciBuZXcgaWNvbiovXHJcbmRpdi5Db2xvcmVkSWNvbl9fY29udGFpbmVyX19fZGphUjRyMjpiZWZvcmVcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgXHJcbiAgLyp3aGlsZSBpdCBpcyBpY29uKi9cclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuKi9cclxuIFxyXG4vKiBjb2xvcmVkIG92ZXJsYXkgaWNvbiAqL1xyXG5kaXYuQ29sb3JlZEljb25fX2xhYmVsQ29udGFpbmVyX19fWVZmZ3pPazpiZWZvcmVcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiOyAvKiB3aWxsIGJlY29tZSBpY29uICovXHJcbiBcclxuICBvcGFjaXR5OiAwLjE7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDEwMCUsIDAlLCAwJSwgMCk7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJnb2xkIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBnb2xkO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiaXJvbiBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgYXF1YTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImFsdW1pbml1bSBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgZ3JleTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cInNpbGljb24gb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHdoaXRlO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwidGl0YW5pdW0gb3JlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGJsdWU7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJsaXRoaXVtIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+llFwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBncmVlbjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImNvcHBlciBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgcmVkO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiZmVycm8tdGl0YW5pdW1cImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfn6ZcIjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiYWxwaGEtc3RhYmlsaXplZCB0aXRhbml1bVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4qycXCI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImZlcnJvbWluaXVtXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLirJxcIjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHJnYmEoMSwxLDEsMSk7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiYWxwaGEtc3RhYmlsaXplZCB0dW5nc3RlblwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4qycXCI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJCYXNpYyBUaGVybWFsXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5SlXCI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuMjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBUaGVybWFsXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5SlXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuMjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJBbnRpLVJhZFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi4pqbXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDEsMSwxLDEpO1xyXG4gIG9wYWNpdHk6IDAuNDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBBbnRpLVJhZFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJTcGVjaWFsaXplZCBBbnRpLVJhZFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJIaWdoLUNhcGFjaXR5IENcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCflIxcIjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGdvbGQ7XHJcbiAgb3BhY2l0eTogLjI1O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIlNoaWVsZGVkIENcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCflIxcIjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGJsdWU7XHJcbiAgb3BhY2l0eTogLjAxO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIkJ1ZGdldCBDXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5SMXCI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBjaG9jb2xhdGU7XHJcbiAgb3BhY2l0eTogLjI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwicmF3IFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+ntlwiO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJyYXcgY290dG9uXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGdyZXk7XHJcbiAgb3BhY2l0eTogLjI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwicmF3IHNpbGtcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgcGx1bTtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCIgZmFicmljXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6e1XCI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cImtldmxhciBmYWJyaWNcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgZ3JlZW47XHJcbiAgb3BhY2l0eTogLjE1O1xyXG59XHJcbiBcclxuIFxyXG5kaXZbdGl0bGUqPVwidGVjaG5va2V2bGFyIGZhYnJpY1wiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBibHVldmlvbGV0O1xyXG4gIG9wYWNpdHk6IC4yO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIm55bG9uIGZhYnJpY1wiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBibGFjaztcclxuICBvcGFjaXR5OiAuMTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJjb3R0b24gZmFicmljXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGdyZXk7XHJcbiAgb3BhY2l0eTogLjI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwic2lsa2VuIGZhYnJpY1wiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBwbHVtO1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cImNlcmFtaWMgZmFicmljXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIG9yYW5nZXJlZDtcclxuICBvcGFjaXR5OiAuMTU7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwiY2VyYW1pYy10dW5nc3RlbiBmYWJyaWNcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgYnJvd247XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJudXRyaWVudCBzb2x1dGlvblwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCBncmVlbjtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIm5hbm8tZW5oYW5jZWQgcmVzaW5cImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfp6pcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgYmx1ZXZpb2xldDtcclxuICBvcGFjaXR5OiAuMztcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJmbHV4XCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6eqXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHllbGxvdztcclxuICBvcGFjaXR5OiAuMTU7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJpbmRpZ28gY29sb3JhbnRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfp6pcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgaW5kaWdvO1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiT2xmYWN0b3J5IFN1YnN0YW5jZXNcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfp6pcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgb2xpdmU7XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJERFQgUGxhbnQgQWdlbnRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfp6pcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgcmVkO1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiU2VkYXRpdmUgU3Vic3RhbmNlXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn6eqXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIG9yYW5nZTtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImRlc2F0dXJhdGlvbiBhZ2VudFwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCB3aGl0ZTtcclxuICBvcGFjaXR5OiAuMTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImJyZWF0aGFibGUgbGlxdWlkXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5KnXCI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIGFxdWFtYXJpbmU7XHJcbiAgb3BhY2l0eTogLjI1O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwidGhlcm1vZmx1aWRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfkqdcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgb3JhbmdlO1xyXG4gIG9wYWNpdHk6IC41O1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cImZlcnRpbGl6ZXJcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIuKbsFwiO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMCB5ZWxsb3dncmVlbjtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJhY2lkXCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLimKNcIjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDAgZ3JlZW55ZWxsb3c7XHJcbiAgb3BhY2l0eTogLjE7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbiBcclxuLypcclxuIFxyXG5kaXZbdGl0bGUqPVwic29sYXJcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfjJ5cIjtcclxuICBvcGFjaXR5OiAuMTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHllbGxvdztcclxuICBjb2xvcjogcmdiYSgxLDEsMSwxKTtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImxhcmdlIGNhcmdvIGJheSBraXRcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIuKallwiOyBvcGFjaXR5OiAwLjY7IGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImhpZ2gtbG9hZCBjYXJnbyBiYXkga2l0XCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn5SUXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJoaWdoLXZvbHVtZSBjYXJnbyBiYXkga2l0XCJpXSBkaXY6YmVmb3JlIFxyXG57XHJcbiAgY29udGVudDogXCLwn46IXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJnb2xkIG9yZVwiaV0gZGl2OmJlZm9yZSBcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+fqFwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiaXJvbiBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIvCfn6ZcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cImFsdW1pbml1bSBvcmVcImldIGRpdjpiZWZvcmUgXHJcbntcclxuICBjb250ZW50OiBcIuKsnFwiO1xyXG59XHJcbiovXHJcbiBcclxuLyogbm9uLWNhdGVnb3J5IGNvbG9yIHNwZWNpYWwgaGFja3MqL1xyXG4gXHJcbmRpdlt0aXRsZT1cIkhpZ2gtQ2FwYWNpdHkgQ29ubmVjdG9yc1wiXSxcclxuZGl2W3RpdGxlPVwiUmVkIEdvbGRcIl1cclxue1xyXG4gIC1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTQ1IDEyOSA0MyksIHJnYigxMjAgNzIgNykpXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJTaGllbGRlZCBDb25uZWN0b3JzXCJdLFxyXG5kaXZbdGl0bGU9XCJCbHVlIEdvbGRcIl1cclxue1xyXG4gIC1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTQ1IDEyOSA0MyksIHJnYig3MCA3MiAyMDApKVxyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiQWlyIFNjcnViYmVyXCJdXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMzAgOTYgNTgpLCAgcmdiKDUxLCAyNiwgNzYpKTtcclxufVxyXG4gXHJcbi8qIGR3IGFuZCBhbGwgY29uc3VtYWJsZXMgKi9cclxuIFxyXG4vKiBcIm5vcm1hbFwiIGljb25zIGFuZCBjb2xvcnMgKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gXHJcbi8qIFJBVCBpbnB1dHMgKi9cclxuZGl2W3RpdGxlXj1cIkhpZ2gtQ2FyYlwiXSxcclxuZGl2W3RpdGxlXj1cIlByb3RlaW4tUmljaFwiXSxcclxuZGl2W3RpdGxlXj1cIlRyaWdseWNlcmlkZVwiXVxyXG57XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE0NSAxMjkgNDMpLCByZ2IoNzAgNzIgNykpXHJcbn1cclxuIFxyXG5kaXZbY29udGVudD1cIklvLWRpbmVcIl1cclxue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTMgODcgMSksIHJnYig4NiA0MCAwKSlcclxufVxyXG4gXHJcbi8qIG90aGVyIEFyZ3JpY3VsdHVyZSAqL1xyXG5kaXZbdGl0bGU9XCJIeWRyb2NhcmJvbiBQbGFudHNcIl0sXHJcbmRpdlt0aXRsZT1cIlNwaWN5IEhlcmJzXCJdLFxyXG5kaXZbdGl0bGU9XCJBbGwtUHVycG9zZSBGb2RkZXJcIl0sXHJcbmRpdlt0aXRsZT1cIkZsb3dlcnkgSG9wc1wiXSxcclxuZGl2W3RpdGxlPVwiQ2FmZmVpbmF0ZWQgQmVhbnNcIl0sXHJcbmRpdlt0aXRsZT1cIlJhdyBDb3R0b24gRmliZXJcIl0sXHJcbmRpdlt0aXRsZT1cIldpbmUtUXVhbGl0eSBHcmFwZXNcIl0sXHJcbmRpdlt0aXRsZT1cIk1lYXQgVGlzc3VlIFBhdHRpZXNcIl0sXHJcbmRpdlt0aXRsZT1cIlBpbmViZXJyaWVzXCJdLFxyXG5kaXZbdGl0bGU9XCJSYXcgU2lsayBTdHJhaW5zXCJdLFxyXG5kaXZbdGl0bGU9XCJWaXRhIEVzc2VuY2VcIl0sXHJcbmRpdlt0aXRsZT1cIlByb3RlaW4gUGFzdGVcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTMgODcgMSksIHJnYig4NiA0MCAwKSlcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJEcmlua1wiXSxcclxuZGl2W3RpdGxlXj1cIkJhc2ljIFJhXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNzEgMTI2IDE3NCksIHJnYig0NiA2NiAxNDkpKVxyXG59XHJcbiBcclxuLyogbGlxdWlkcyAqL1xyXG5kaXZbdGl0bGUqPVwiSGVsaW90cm9wZVwiXSxcclxuZGl2W3RpdGxlKj1cIkxpcXVpZCBFaW5zXCJdLFxyXG5kaXZbdGl0bGUqPVwiQmFjdGVyaWFsIFR1blwiXSxcclxuZGl2W3RpdGxlXj1cIldhdGVyXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTIyIDgwIDU1KSwgcmdiKDE4IDc0IDEyNCkpXHJcbn1cclxuIFxyXG4vKiBjaGVtaWNhbHMgYmcgY29sb3JzICovXHJcbmRpdlt0aXRsZSo9XCJTdWJzdGFuY2VcIl0sIFxyXG5kaXZbdGl0bGUqPVwiQ2hlbWljYWxcIl0sIFxyXG5kaXZbdGl0bGU9XCJMaXF1aWQgQ3J5c3RhbHNcIl0sIFxyXG5kaXZbdGl0bGUqPVwiQnJlYXRoYWJsZSBMaXF1aWRcIl0sIFxyXG5kaXZbdGl0bGUqPVwiQWdlbnRcIl0sIFxyXG5kaXZbdGl0bGUqPVwiRmx1eFwiXSwgXHJcbmRpdlt0aXRsZSo9XCJSZXNpblwiXSwgXHJcbmRpdlt0aXRsZSo9XCJDb2xvcmFudFwiXSxcclxuZGl2W3RpdGxlKj1cIkFjaWRcIl0sIFxyXG5kaXZbdGl0bGUqPVwiIEJhY3RlcmlhXCJdLCBcclxuZGl2W3RpdGxlKj1cIlNvaWxcIl0sXHJcbmRpdlt0aXRsZSo9XCJTdGFiaWxpemVyXCJdLFxyXG5kaXZbdGl0bGUqPVwiRmVydGlsaXplclwiXSxcclxuZGl2W3RpdGxlKj1cIlRoZXJtb0ZsdWlkXCJdLFxyXG5kaXZbdGl0bGUqPVwiRW5yaWNoZWRcIl0sXHJcbmRpdlt0aXRsZSo9XCJOdXRyaWVudFwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE4MywgNDYsIDkxKSwgcmdiKDExNCAzNyA2MikpXHJcbn1cclxuIFxyXG4vKiBwcmVmYWJzICovXHJcbmRpdlt0aXRsZV49XCJCYXNpYyBTdHJcIl0sXHJcbmRpdlt0aXRsZV49XCJCYXNpYyBEZWNrXCJdLFxyXG5kaXZbdGl0bGVePVwiQmFzaWMgQnVsa1wiXSxcclxuZGl2W3RpdGxlXj1cIkJhc2ljIFRyYW5zXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTEgNTQgNjYgKSwgcmdiKDE1LCAzMCwgOTgpKVxyXG59XHJcbmRpdlt0aXRsZV49XCJMaWdodHdlaWdodFwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDg1IDk0IDM1KSwgcmdiKDE1LCAzMCwgOTgpKVxyXG59XHJcbmRpdlt0aXRsZV49XCJIYXJkZW5lZFwiXSwgXHJcbmRpdlt0aXRsZV49XCJSZWluZm9yY2VkXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNzggNDQgMjcpLCByZ2IoMTUsIDMwLCA5OCkpXHJcbn1cclxuZGl2W3RpdGxlXj1cIkFkdmFuY2VkIERlY2tcIl0sXHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBUcmFuc3BcIl0sXHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBTdHJcIl0sXHJcbmRpdlt0aXRsZV49XCJBZHZhbmNlZCBCdWxrXCJdIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNzEgMzUgOTQpLCByZ2IoMTUsIDMwLCA5OCkpXHJcbn1cclxuIFxyXG4vKiBjb25zdHJ1Y3Rpb24gYmcgY29sb3JzICovXHJcbmRpdlt0aXRsZT1cIkluc3VGb2FtXCJdLFxyXG5kaXZbdGl0bGU9XCJFcG94eSBSZXNpblwiXSxcclxuZGl2W3RpdGxlPVwiTWVnYVR1YmUgQ29hdGluZ1wiXSxcclxuZGl2W3RpdGxlPVwiTmFuby1DYXJib24gU2hlZXRpbmdcIl0sXHJcbmRpdlt0aXRsZT1cIk5hbm8gRmliZXJcIl0sXHJcbmRpdlt0aXRsZT1cIk5hbm8tQ29hdGVkIEdsYXNzXCJdLFxyXG5kaXZbdGl0bGU9XCJSZWluZm9yY2VkIEdsYXNzXCJdLFxyXG5kaXZbdGl0bGU9XCJQb2x5LVN1bGZpdGUgU2VhbGFudFwiXSxcclxuZGl2W3RpdGxlPVwiR2xhc3NcIl0sXHJcbmRpdlt0aXRsZT1cIk1pbmVyYWwgQ29uc3RydWN0aW9uIEdyYW51bGF0ZVwiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDcyIDEyNSAyMjEpLCByZ2IoMCA2NCAxNzkpKVxyXG59XHJcbiBcclxuLyogY29uc3RydWN0aW9uIHBhcnRzICovXHJcbmRpdlt0aXRsZT1cIkFlcm9zdGF0IEZvdW5kYXRpb25cIl0sXHJcbmRpdlt0aXRsZT1cIkFpciBTY3J1YmJlclwiXSxcclxuZGl2W3RpdGxlPVwiRGVjb3JhdGl2ZSBFbGVtZW50c1wiXSxcclxuZGl2W3RpdGxlPVwiRmxvYXRpbmcgVGFua1wiXSxcclxuZGl2W3RpdGxlPVwiRmxvdyBDb250cm9sIERldmljZVwiXSxcclxuZGl2W3RpdGxlPVwiRmx1aWQgUGlwaW5nXCJdLFxyXG5kaXZbdGl0bGU9XCJDeWxpbmRyaWNhbCBHYXMgQ29udGFpbmVyXCJdLFxyXG5kaXZbdGl0bGU9XCJHYXMgVmVudFwiXSxcclxuZGl2W3RpdGxlPVwiTWFnbmV0aWMgR3JvdW5kIENvdmVyXCJdLFxyXG5kaXZbdGl0bGU9XCJNZXRhbC1IYWxpZGUgTGlnaHRpbmcgU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJOZW9uIExpZ2h0aW5nIFN5c3RlbVwiXSxcclxuZGl2W3RpdGxlPVwiUHJlc3N1cmUgU2hpZWxkaW5nXCJdLFxyXG5kaXZbdGl0bGU9XCJSYWRpYXRpb24gU2hpZWxkaW5nXCJdLFxyXG5kaXZbdGl0bGU9XCJTdGFiaWxpemVkIFRlY2huZXRpdW1cIl0sXHJcbmRpdlt0aXRsZT1cIlRoZXJtYWwgU2hpZWxkaW5nXCJdLFxyXG5kaXZbdGl0bGU9XCJUcnVzc1wiXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDY2LCAxMDIsIDEzMiksIHJnYig0MSwgNzcsIDEwNykpXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJTVEwgRnVlbFwiXSxcclxuZGl2W3RpdGxlPVwiRlRMIEZ1ZWxcIl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigzMCwgMTIzLCAzMCksIHJnYigzMiA5MCAzMikpXHJcbn1cclxuIFxyXG4gXHJcbi8qIGVsZWN0cm9uaWMgc3lzdGVtcyBiZyBjb2xvciAqL1xyXG5kaXZbdGl0bGU9XCJBdWRpbyBEaXN0cmlidXRpb24gU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJBdXRvbWF0ZWQgQ29vbGluZyBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIkNsaW1hdGUgQ29udHJvbGxlclwiXSxcclxuZGl2W3RpdGxlPVwiQ29tbXVuaWNhdGlvbiBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIkZUTCBGaWVsZCBDb250cm9sbGVyXCJdLFxyXG5kaXZbdGl0bGU9XCJMaWZlIFN1cHBvcnQgU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJMb2dpc3RpY3MgU3lzdGVtXCJdLFxyXG5kaXZbdGl0bGU9XCJTdGFiaWxpdHkgU3VwcG9ydCBTeXN0ZW1cIl0sXHJcbmRpdlt0aXRsZT1cIlRhcmdldGluZyBDb21wdXRlclwiXSxcclxuZGl2W3RpdGxlPVwiQ3J5b2dlbmljIFVuaXRcIl1cclxue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig3NiwgNTEsIDE0MSksICByZ2IoNTEsIDI2LCA3NikpO1xyXG59XHJcbiBcclxuLyogbGlmZSByZWxhdGVkIGVsZWN0cm9uaWNzIHN5c3RlbXMgYmcgY29sb3IqL1xyXG5kaXZbdGl0bGU9XCJXYXRlciBSZWNsYWltZXJcIl0sXHJcbmRpdlt0aXRsZT1cIkxpZmUgU3VwcG9ydCBTeXN0ZW1cIl1cclxue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigzMCA5NiA1OCksICByZ2IoNTEsIDI2LCA3NikpO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIml1bVwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwic2l0ZVwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwibWluZXJhbFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKbsFwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG5kaXZbdGl0bGUqPVwiY29udHJvbGxlclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjptcIjsgb3BhY2l0eTogMC42XHJcbn1cclxuZGl2W3RpdGxlKj1cImZpbHRlclwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiZGV2aWNlXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCIgTUtcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5O7XCI7XHJcbn1cclxuLyog8J+bufCfmr/im7IgKi9cclxuZGl2W3RpdGxlKj1cImZsb3cgY29udHJvbCBkZXZpY2VcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5q/XCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cImdsYXNzXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UslwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiaGVhZHBob25lXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Op1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJob2xvZ3JhcGhpYyBnbGFzc2VzXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Rk1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJkaW9kZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKWtlwiO1xyXG59XHJcbmRpdltkYXRhLXRvb2x0aXAtY29udGVudCo9XCJTQVJcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cInNjYW5uZXJcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cInNlbnNvclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflK1cIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiRm91bmRhdGlvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nh1wiO1xyXG59XHJcbi8qIPCfp67wn46r8J+On/Cfjp4gKi9cclxuZGl2W3RpdGxlKj1cIm1lbW9yeVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwicHJvY2Vzc1wiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwidHJhbnNpc3RvclwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiY2lyY3VpdFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjp9cIjtcclxufVxyXG5kaXZbdGl0bGUqPVwidGVuc29yXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nrlwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIm1lbW9yeSBiYW5rXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+OnlwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJjaXJjdWl0XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Oq1wiO1xyXG59XHJcbi8q8J+np/Cfjp/wn5K/8J+TvPCfjp4qL1xyXG5kaXZbdGl0bGU9XCJOb24tVm9sYXRpbGUgTWVtb3J5XCJpXTpiZWZvcmVcclxue1xyXG4gIGNvbnRlbnQ6IFwi8J+TgFwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJzeXN0ZW1cImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cImNvbXB1dGVyXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJtYWluZnJhbWVcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5alXCI7IFxyXG4gIG9wYWNpdHk6IDAuNlxyXG59XHJcbi8qIPCfjpvwn46a8J+SvvCfkr3wn5K/8J+TgCAqL1xyXG5kaXZbdGl0bGUqPVwiTmF2aWdhdGlvblwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJBcnRpZmljaWFsXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIkRhdGFcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiTmV0d29ya1wiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJEYXRhYmFzZVwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJGcmFtZXdvcmtcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiTWFuYWdlbWVudFwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJPcGVyYXRpbmdcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiSW50ZXJmYWNlXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIkFsZ29yaXRobVwiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJNYW5hZ2VyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5K+XCI7XHJcbiAgb3BhY2l0eTogMC4zOyAvKiBzeXN0ZW0gb3ZlcnJpZGUqL1xyXG59XHJcbmRpdlt0aXRsZSo9XCJtb3RoZXJib2FyZFwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwid2FmZXJcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46rXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cImJyb2FkY2FzdGluZ1wiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiYW50ZW5uYVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiZW1pdHRlclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfk6FcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwibGlicmFyeVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfk5ZcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiV29ya3N0YXRpb25cIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiRGlzcGxheVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Su1wiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJMaWdodFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SoVwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJSb2NrXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WvXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkxpcXVpZFwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwiRmx1aWRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkqdcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiQWlyXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJHYXNcIl06YmVmb3JlLFxyXG4gZGl2W3RpdGxlKj1cIkFlcm9cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYgVwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJBdWRpb1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UilwiO1xyXG4gIG9wYWNpdHk6IDAuMzsgLyogc3lzdGVtIG92ZXJyaWRlICovXHJcbn1cclxuZGl2W3RpdGxlKj1cIlBvd2VyXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJDYXBhY2l0b3JcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflItcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiUG93ZXIgQ2VsbFwiXTpiZWZvcmVcclxue1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4vKiDwn5So4puP4pqS8J+boPCflKfwn5Sp4pqZ8J+XnPCfp7AgKi9cclxuZGl2W3RpdGxlKj1cIkZhc3RlbmVyIEtpdFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Up1wiO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiUmVwYWlyIEtpdFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nsFwiO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiVGFua1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+bolwiO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiRlRMIEZ1ZWwgVGFua1wiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7NcIjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlByb3RlY3Rpb25cIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiUGxhdGVcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiU2hpZWxkXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5uhXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJQcm90ZWN0aW9uIE1hdGVyaWFsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6exXCI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJDb25uZWN0b3JzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5SMXCI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG9wYWNpdHk6IDAuNFxyXG59XHJcbmRpdlt0aXRsZSo9XCJTZWF0c1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+qkVwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJTdWJzdGFuY2VcIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIkNoZW1pY2FsXCJdOmJlZm9yZSwgXHJcbmRpdlt0aXRsZSo9XCJBZ2VudFwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwiRmx1eFwiXTpiZWZvcmUsIFxyXG5kaXZbdGl0bGUqPVwiUmVzaW5cIl06YmVmb3JlLCBcclxuZGl2W3RpdGxlKj1cIkNvbG9yYW50XCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eqXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkFjaWRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYo1wiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5kaXZbdGl0bGUqPVwiQmFjdGVyaWFcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp6tcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiQ3J5b1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4p2EXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbmRpdlt0aXRsZSo9XCJTb2lsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WUXCI7XHJcbn1cclxuLyog8J+nsPCflKrwn6m6ICovXHJcbmRpdlt0aXRsZSo9XCJTdXJnaWNhbFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfqbpcIjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLyog8J+OnvCfm4/wn5uMICovXHJcbmRpdlt0aXRsZSo9XCJNZWRpY2FsIHN0cmV0Y2hlclwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjp5cIjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuLyog8J+nsPCflKrwn6m68J+SiiAqL1xyXG5kaXZbdGl0bGUqPVwiTWVkaWNhbCBraXRcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6m6XCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIk1hZ25ldFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nslwiO1xyXG59XHJcbi8qIPCfl7/wn5a8ICovXHJcbmRpdlt0aXRsZSo9XCJEZWNvXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5a8XCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlNvbGFyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimqFcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiU29sYXIgQ2VsbFwiXTpiZWZvcmUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4gXHJcbi8qIGFsbG95cyDimZIg8J+fqiovXHJcbmRpdlt0aXRsZSo9XCItVGl0YW5pdW1cIl06OmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIiBUaXRhbml1bVwiXTo6YmVmb3JlXHJcbntcclxuICBjb250ZW50OiBcIvCfn6pcIjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJGZXJyb21pbml1bVwiXTo6YmVmb3JlXHJcbntcclxuICBjb250ZW50OiBcIvCfn6ZcIjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuIFxyXG4gXHJcbi8qIC0tLS0gTWVkaWNhbCAtLS0tLS0gKi9cclxuZGl2W3RpdGxlPVwiQXV0by1Eb2NcIl0sXHJcbmRpdlt0aXRsZT1cIkJhbmRhZ2VzXCJdLFxyXG5kaXZbdGl0bGU9XCJNZWRpY2FsIFN0cmV0Y2hlclwiXSxcclxuZGl2W3RpdGxlPVwiUGFpbmtpbGxlcnNcIl0sXHJcbmRpdlt0aXRsZT1cIlN1cmdpY2FsIEVxdWlwbWVudFwiXSxcclxuZGl2W3RpdGxlPVwiVGVzdCBUdWJlc1wiXVxyXG57XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDY0IDEzMyA2NCksIHJnYig0OCA4NiA0OCkpXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJBdXRvLURvY1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+RqOKAjeKale+4j1wiO1xyXG59XHJcbmRpdlt0aXRsZT1cIkJhbmRhZ2VzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6e7XCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiUGFpbmtpbGxlcnNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkopcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJTdXJnaWNhbCBFcXVpcG1lbnRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfqbpcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiVHViZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nqlwiO1xyXG59XHJcbi8qIPCfm4zwn5uP4pqVICovXHJcbmRpdlt0aXRsZSo9XCJDcmV3IFF1YXJ0ZXJzXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIlRyYXVtYSBDYXJlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5uPXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi8qIC0tLS0tLS0tLS0gKi9cclxuIFxyXG5kaXZbdGl0bGUqPVwiSW9kaW5lXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6m4XCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIlNvZGl1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nglwiO1xyXG59XHJcbmRpdlt0aXRsZSo9XCJDYXJib25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjqlcIjtcclxufVxyXG4vKiDwn6eC8J+Sv/CfjZnwn42l4puw8J+PlCAqL1xyXG5kaXZbdGl0bGU9XCJDaGxvcmluZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+NpVwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIlN1bGZ1clwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+foVwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIlRhbnRhbHVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5SYXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiQ2FsY2l1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4puwXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiQmVyeWxsaXVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLim7BcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJNYWduZXNpdW1cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKbsFwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiR29sZFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+fqFwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4gXHJcbi8qIOOAsPCfp4jwn6eK8J+fpPCfn6YgKi9cclxuIFxyXG5kaXZbdGl0bGU9XCJBbHVtaW5pdW1cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKsnFwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC4yXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJTdGVlbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nilwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC4yXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJUaXRhbml1bVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+fqlwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC4yXHJcbn1cclxuIFxyXG5kaXZbdGl0bGV+PVwiVHVuZ3N0ZW5cIl06YmVmb3JlXHJcbntcclxuICBjb250ZW50OiBcIvCfn6tcIjtcclxuICBmb250LXNpemU6IDI1cHg7IG9wYWNpdHk6IDAuMlxyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiU2lsaWNvblwiXTpiZWZvcmV7XHJcbiAgY29udGVudDogXCLjgLBcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuIFxyXG5kaXZbdGl0bGU9XCJDb3BwZXJcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfn6dcIjtcclxuICBmb250LXNpemU6IDI1cHg7IG9wYWNpdHk6IDAuMlxyXG59XHJcbi8qIPCfn6UgKi9cclxuZGl2W3RpdGxlPVwiSXJvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+fplwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgb3BhY2l0eTogMC4yXHJcbn1cclxuIFxyXG4vKiBhbGxveXMgKi9cclxuIFxyXG5kaXZbdGl0bGU9XCJSZWQgR29sZFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UtlwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkJsdWUgR29sZFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Ut1wiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkJyb256ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+UulwiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4gXHJcbmRpdlt0aXRsZT1cIkJvcm9zaWxpY2F0ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi44CwXCI7XHJcbn1cclxuIFxyXG4vKiAtLS0tICovXHJcbiBcclxuLyog8J+WiuKdl+KelvCfkogg8J+MoPCfpZbwn42h8J+nqCAqL1xyXG5kaXZbdGl0bGUqPVwiZnVlbCByb2RcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eoXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiYmFzaWMgZnVlbCByb2RcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLinpZcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiIHJlYWN0b3JcImldOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIiBnZW5lcmF0b3JcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46GXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cImZpc3Npb24gcmVhY3RvclwiaV06YmVmb3JlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuZGl2W3RpdGxlKj1cInJhZGlvaXNvdG9wZSBnZW5lcmF0b3JcImldOmJlZm9yZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiBcclxuLyogLS0tLSAqL1xyXG4gXHJcbmRpdlt0aXRsZT1cIkxpbWVzdG9uZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+lr1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIkRyb25lXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLinIhcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJPcmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpZRcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJDcnlzdGFsc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SjlwiO1xyXG59XHJcbiBcclxuLyogLS0tLS0tLS0tLSAqL1xyXG4gXHJcbmRpdlt0aXRsZSQ9XCJHcmFpbnNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjL5cIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJNYWl6ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+MvVwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIkRyaW5rXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eDXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiUHJvdGVpbi1SaWNoIEJlYW5zXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WSXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiQmFzaWMgUmFcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpatcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJOdXRzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WcXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiRnJ1aXRzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn42FXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiUGxhbnRzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4yyXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiQ2FmZmVpbmF0ZWQgQmVhbnNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjL9cIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJBbGdhZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Ng1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkdyYXBlc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Nh1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkhlcmJzXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4y2XCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiRm9kZGVyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KKXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiSG9wc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+MvlwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkNvdHRvbiBGaWJlclwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ntlwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIlBhdHRpZXNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp6tcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJNdXNocm9vbXNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjYRcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJQaW5lYmVycmllc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Nk1wiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIlBhc3RlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6WjXCI7XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiU29sdXRpb25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp6pcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZV49XCJWaXRhIEVzc2VuY2VcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjbZcIjtcclxufVxyXG4gXHJcbi8qIGxpcXVpZHMgKi9cclxuZGl2W3RpdGxlXj1cIldhdGVyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KnXCI7XHJcbn1cclxuZGl2W3RpdGxlKj1cIkhlbGlvdHJvcGVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpYNcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiTGlxdWlkIEVpbnNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpZtcIjtcclxufVxyXG4gXHJcbi8qIPCfjqjwn4+A8J+PkOKaviAqL1xyXG5kaXZbdGl0bGU9XCJQb2x5bWVyIEdyYW51bGF0ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+PkFwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIlBvbHktRXRoeWxlbmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKavlwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIlNoZWV0IFR5cGVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7tcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJGb2FtXCJdOmJlZm9yZSxcclxuZGl2W3RpdGxlKj1cIlNlYWxcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjKtcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiRmliZXJcIl06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwiRmFicmljXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6e1XCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiUmF3IFNpbGsgU3RyYWluc1wiXTpiZWZvcmUsXHJcbmRpdlt0aXRsZT1cIlJhdyBDb3R0b24gRmliZXJcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfp7ZcIjtcclxufVxyXG4gXHJcbmRpdlt0aXRsZSQ9XCJTdXBwbGllc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ToFwiO1xyXG59XHJcbmRpdlt0aXRsZSQ9XCJVbmlmb3JtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5GWXCI7XHJcbn1cclxuZGl2W3RpdGxlJD1cIlRvb2xzZXRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfm6BcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG5kaXZbdGl0bGVePVwiRlRMXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimIBcIjtcclxuICBmb250LXNpemU6IDQwcHg7IG9wYWNpdHk6IDAuNVxyXG59XHJcbiBcclxuZGl2W3RpdGxlXj1cIlNUTFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+bolwiO1xyXG4gIGZvbnQtc2l6ZTogNDBweDsgb3BhY2l0eTogMC41XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUkPVwiQ29uc3RydWN0aW9uIEdyYW51bGF0ZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nsVwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cIkNhc2luZ1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+nilwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkRlY2sgRWxlbWVudHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjp5cIjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuZGl2W3RpdGxlJD1cIlN0cnVjdHVyYWwgRWxlbWVudHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKbk1wiO1xyXG59XHJcbi8qIPCfm44gKi9cclxuZGl2W3RpdGxlJD1cIkJ1bGtoZWFkXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5u4XCI7XHJcbn1cclxuLyog8J+Pl/Cfp63wn4yr4piA8J+MgCAqL1xyXG5kaXZbdGl0bGUkPVwiQXBlcnR1cmVcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfj5dcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJUcnVzc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+XvFwiO1xyXG59XHJcbiBcclxuLyogLS0tLS0gZ2Fzc2VzLS0tLS0tICovXHJcbi8qIPCfkqjwn5Wz44Cw8J+MivCfjKvwn5Kl8J+bovCfp7Pwn6e04piEICovXHJcbiBcclxuZGl2W3RpdGxlPVwiQW1tb25pYVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+puFwiO1xyXG59XHJcbmRpdlt0aXRsZT1cIkFyZ29uXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimIFcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJGbHVvcmluZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4piBXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiTmVvblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4piBXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiTml0cm9nZW5cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkqdcIjtcclxufVxyXG5kaXZbdGl0bGU9XCJPeHlnZW5cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkqhcIjtcclxufVxyXG5kaXZbdGl0bGUqPVwiSGVsaXVtXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn4yMXCI7XHJcbn1cclxuZGl2W3RpdGxlXj1cIkh5ZHJvZ2VuXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5KrXCI7XHJcbn1cclxuZGl2W3RpdGxlPVwiSGVsaXVtLTMgSXNvdG9wZVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+SplwiO1xyXG59XHJcbiBcclxuZGl2W3RpdGxlPVwiQ2FmZmVpbmF0ZWQgSW5mdXNpb25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKYlVwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJCYXNpYyBPdmVyYWxsc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+npVwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGUkPVwiV29yayBPdmVyYWxsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6a6XCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIkJhc2ljIE92ZXJhbGxzXCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDY0IDk3IDEwNCksIHJnYig1NyA3MyAxNDcpKSB9XHJcbmRpdlt0aXRsZT1cIkNhZmZlaW5hdGVkIEluZnVzaW9uXCJdLCBcclxuZGl2W3RpdGxlJD1cIldvcmsgT3ZlcmFsbFwiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig2NCA5NyAxMDQpLCByZ2IoMTA1IDMwIDE0NSkpIH1cclxuIFxyXG5kaXZbdGl0bGU9XCJLb21idWNoYVwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Nr1wiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGVePVwiRXhvc1wiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+Rt+KAjeKZgO+4j1wiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGVePVwiUG93ZXIgVG9vbHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflIxcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlXj1cIkV4b3NcIl0sIFxyXG5kaXZbdGl0bGU9XCJQb3dlciBUb29sc1wiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig0MiAxMjIgNTQpLCByZ2IoNTcgNzMgMTQ3KSkgfVxyXG5kaXZbdGl0bGU9XCJLb21idWNoYVwiXSxcclxuZGl2W3RpdGxlPVwiUmVwYWlyIEtpdFwiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYig0MiAxMjIgNTQpLCByZ2IoMTA1IDMwIDE0NSkpIH1cclxuIFxyXG5kaXZbdGl0bGUkPVwiQWxlXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn426XCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIlN0ZW0gQ2VsbCBUcmVhdG1lbnRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkolcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiSGF6TWF0IFdvcmsgU3VpdFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+RqeKAjfCfmpJcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiTXVsdGktUHVycG9zZSBTY2FubmVyXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn5StXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIkJhc2ljIE1lZGljYWwgS2l0XCJdLCBcclxuZGl2W3RpdGxlPVwiSGF6TWF0IFdvcmsgU3VpdFwiXSwgXHJcbmRpdlt0aXRsZT1cIk11bHRpLVB1cnBvc2UgU2Nhbm5lclwiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxMTYgMTI0IDI3KSwgcmdiKDU3IDczIDE0NykpIFxyXG59XHJcbmRpdlt0aXRsZSQ9XCJBbGVcIl0sIFxyXG5kaXZbdGl0bGU9XCJTdGVtIENlbGwgVHJlYXRtZW50XCJdIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDExNiAxMjQgMjcpLCByZ2IoMTA1IDMwIDE0NSkpIFxyXG59XHJcbiBcclxuZGl2W3RpdGxlJD1cIkdpblwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+lg1wiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGUkPVwiTWVhbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+loVwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJWaXRhR2VsXCJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn6eqXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZT1cIlNtYXJ0IFNwYWNlIFN1aXRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkajigI3wn5qAXCI7IG9wYWNpdHk6IDAuMlxyXG59XHJcbmRpdlt0aXRsZSo9XCJwZXJzb25hbFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfk7FcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiRmxhdm91cmVkIEluc3RhLU1lYWxcIl0sIFxyXG5kaXZbdGl0bGU9XCJQZXJzb25hbCBEYXRhIEFzc2lzdGFudFwiXSwgXHJcbmRpdlt0aXRsZT1cIlNtYXJ0IFNwYWNlIFN1aXRcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTIgOTMgMTU5KSwgcmdiKDU3IDczIDE0NykpIH1cclxuZGl2W3RpdGxlJD1cIkdpblwiXSwgXHJcbmRpdlt0aXRsZT1cIlZpdGFHZWxcIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTIgOTMgMTU5KSwgcmdiKDEwNSAzMCAxNDUpKSB9XHJcbiBcclxuIFxyXG5kaXZbdGl0bGU9XCJTbWFydCBaaW5mYW5kZWxcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjbdcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlJD1cIk1lYXQgTWVhbFwiXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+NsVwiOyBvcGFjaXR5OiAwLjJcclxufVxyXG5kaXZbdGl0bGU9XCJOZXVyb1N0aW11bGFudHNcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfkopcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiQUktQXNzaXN0ZWQgTGFiIENvYXRcIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfpbxcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlPVwiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIl06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCflKxcIjsgb3BhY2l0eTogMC4yXHJcbn1cclxuZGl2W3RpdGxlJD1cIk1lYXQgTWVhbFwiXSwgXHJcbmRpdlt0aXRsZT1cIkFJLUFzc2lzdGVkIExhYiBDb2F0XCJdLCBcclxuZGl2W3RpdGxlPVwiU2NpZW50aWZpYyBXb3JrIFN0YXRpb25cIl0geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMTU1IDkyIDE2OSksIHJnYig1NyA3MyAxNDcpKSB9XHJcbmRpdlt0aXRsZT1cIlNtYXJ0IFppbmZhbmRlbFwiXSwgXHJcbmRpdlt0aXRsZT1cIk5ldXJvU3RpbXVsYW50c1wiXSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTUgOTIgMTY5KSwgcmdiKDEwNSAzMCAxNDUpKSB9XHJcbiBcclxuLyog8J+VueKYjvCfk54gKi9cclxuZGl2W3RpdGxlKj1cImNvbW1hbmQgYnJpZGdlXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4piOXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuLyog4puw4pii4pqZ8J+asPCfjKEgKi9cclxuZGl2W3RpdGxlKj1cImVuZ2luZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfmoBcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwibm96emxlXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4puwXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuLyog8J+nqPCfjJ/wn6ez8J+bjiAqL1xyXG5kaXZbdGl0bGUqPVwiY29tYnVzdGlvbiBjaGFtYmVyXCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+ns1wiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJwdW1wXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJwaXBlXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSo9XCJwaXBpbmdcImldOmJlZm9yZVxyXG57XHJcbiAgY29udGVudDogXCLwn5qwXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuZGl2W3RpdGxlKj1cInZlbnRcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimahcIjtcclxuICBmb250LXNpemU6IDQwcHg7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuLyog8J+XvPCfp4fwn5SX4puT8J+bofCfk47wn5aHICovIFxyXG5kaXZbdGl0bGUqPVwic3RydWN0dXJhbCBzcGFjZVwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIuKbk1wiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbi8qIPCfp4rwn5OmICovIFxyXG5kaXZbdGl0bGUqPVwiY2FyZ28gYmF5XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+TplwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJoYWJpdGF0XCJpXTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi8J+PoFwiOyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJzdXJnZXJ5IHVuaXRcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimpVcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG4vKvCfl4Twn46v8J+OoSovXHJcbmRpdlt0aXRsZSo9XCJlbnRlcnRhaW5tZW50IHVuaXRcImldOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLwn46hXCI7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuLyog8J+OqCAqL1xyXG5kaXZbdGl0bGUqPVwid29ya3Nob3AgdW5pdFwiaV06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIvCfjqhcIjsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG4vKiBzaXplcyAqL1xyXG4gXHJcbmRpdlt0aXRsZSo9XCJzbWFsbFwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUqPVwidGlueVwiaV06YmVmb3JlLFxyXG5kaXZbdGl0bGUkPVwiIHNcImldOmJlZm9yZSBcclxue1xyXG4gIGZvbnQtc2l6ZTogMjBweDsgb3BhY2l0eTogMC40XHJcbn1cclxuIFxyXG5kaXZbdGl0bGUqPVwibWVkaXVtXCJpXTpiZWZvcmUsXHJcbmRpdlt0aXRsZSQ9XCIgbVwiaV06YmVmb3JlIFxyXG57XHJcbiAgZm9udC1zaXplOiAyNXB4OyBvcGFjaXR5OiAwLjRcclxufVxyXG4gXHJcbmRpdlt0aXRsZSo9XCJ0cmFuc2lzdG9yXCJpXTpiZWZvcmUgXHJcbntcclxuICBmb250LXNpemU6IDI1cHg7IG9wYWNpdHk6IDAuNFxyXG59XHJcbiBcclxuIFxyXG4vKiBidWlsZGluZ3MgLSBraWxsIHN0cmF5IGljb25zICovXHJcbmRpdi5CdWlsZGluZ0ljb25fX2NvbnRhaW5lcl9fX2pGNUdVc3o6YmVmb3JlXHJcbntcclxuICBjb250ZW50OiBcIlwiO1xyXG59XHJcbiAgICBcclxuICAgIC8qIGl0ZW1zIGluIG1hcmtldCB2aWV3ICovXHJcbnRhYmxlLkJyb2tlckxpc3RfX3RhYmxlX19feWxnZWl5ZyA+XHJcbnRib2R5ID5cclxudHIgPlxyXG50ZCA+XHJcbmRpdi5NYXRlcmlhbEljb25fX2NvbnRhaW5lcl9fX3E4Z0tJeDggPlxyXG5kaXYuQ29sb3JlZEljb25fX2NvbnRhaW5lcl9fX2RqYVI0cjI6YmVmb3JlIFxyXG57XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4vKiBpdGVtcyBpbiBidWlsZGluZyB2aWV3ICovXHJcbmRpdi5CdWlsZGluZ0luZm9ybWF0aW9uX19yZWNpcGVfX191emFueFh3ID5cclxuZGl2ID5cclxuZGl2Lk1hdGVyaWFsSWNvbl9fY29udGFpbmVyX19fcThnS0l4OCA+XHJcbmRpdi5Db2xvcmVkSWNvbl9fY29udGFpbmVyX19fZGphUjRyMjpiZWZvcmVcclxue1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG5cclxuLyogaXRlbXMgaW4gcmVjaXBlIHZpZXcgKi9cclxuZGl2Lk1hdGVyaWFsSW5mb3JtYXRpb25fX3JlY2lwZUlucHV0c19fX2VMdmZvb3AgPlxyXG5kaXYuTWF0ZXJpYWxJY29uX19jb250YWluZXJfX19xOGdLSXg4ID5cclxuZGl2LkNvbG9yZWRJY29uX19jb250YWluZXJfX19kamFSNHIyOmJlZm9yZVxyXG57XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG4vKiBpdGVtcyBpbiBwbGFuZXQgdmlldyAqL1xyXG5kaXYuUmVzb3VyY2VUYWJsZV9fZ3JpZENvbnRhaW5lcl9fX3ltcnpUY0QgPlxyXG5kaXYuTWF0ZXJpYWxJY29uX19jb250YWluZXJfX19xOGdLSXg4ID5cclxuZGl2LkNvbG9yZWRJY29uX19jb250YWluZXJfX19kamFSNHIyOmJlZm9yZVxyXG57XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59YDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1N0eWxlLnRzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBUcmFuc2xhdGlvbk1hdHJpeCA9IHtcbiAgICBcInZpZXdcIjogXCLmn6XnnItcIixcbiAgICBcImRlbGV0ZVwiOiBcIuWIoOmZpFwiLFxuICAgIFwiZmx5XCI6IFwi6Iiq6KGMXCIsXG4gICAgXCJjYXJnb1wiOiBcIui0p+eJqVwiLFxuICAgIFwiZnVlbFwiOiBcIueHg+aWmVwiLFxuICAgIFwibGljZW5zZVwiOiBcIuaJp+eFp1wiLFxuICAgIFwiaGVscFwiOiBcIuW4ruWKqVwiLFxuICAgIFwibm90aWZpY2F0aW9uc1wiOiBcIumAmuefpVwiLFxuICAgIFwiYXVkaW9cIjogXCLlo7Dpn7PnmoRcIixcbiAgICBcImxvZ291dFwiOiBcIueZu+WHulwiXG59O1xuZXhwb3J0IGNvbnN0IE1hdGVyaWFsVHJhbnNsYXRpb25NYXRyaXggPSB7XG4gICAgXCJSQVRcIjogXCLlj6Pnsq5cIlxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1RyYW5zbGF0aW9uTWF0cml4LnRzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=