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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

// Initiation two instance of the Student interface ("class")
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "Paris"
};
var student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    location: "Paris"
};
// Storing the two students in an array while typing the type of the elements inside
var studentList = [student1, student2];
// Going back to vanilla Javascript to render HTML elements:
// remember theses are standard "balises" or tags.
// Retrieving html body to use it
var body = document.body;
// Creating main elements
var table = document.createElement('table'); // a table
var tableHead = document.createElement('thead'); // place for its header
var tableBody = document.createElement('tbody'); // place for its insise
// Creating Header of the table
var headerRow = document.createElement('tr');
var firstNameHeader = document.createElement('th');
firstNameHeader.textContent = "Firstname";
var locationHeader = document.createElement('th');
locationHeader.textContent = "Location";
// Assemblying it
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
tableHead.appendChild(headerRow);
// Taking the array, looping with a "forEach", student (typed as "Student" structure)
// Create a new row for a new student
// Create a new cell for the firstname, adding the firstname of the current student
// Create a new cell for the location, adding the location of the current student
// Appending the cells into the new row and the row into the tablebody
studentList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCase = document.createElement('td');
    firstNameCase.textContent = student.firstName;
    var locationCase = document.createElement('td');
    locationCase.textContent = student.location;
    row.appendChild(firstNameCase);
    row.appendChild(locationCase);
    tableBody.appendChild(row);
});
// Assemblying everything
table.appendChild(tableHead);
table.appendChild(tableBody);
body.appendChild(table);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUMxRUEsNkRBQTZEO0FBQzdELElBQU0sUUFBUSxHQUFZO0lBQ3RCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsT0FBTztDQUNwQixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQVk7SUFDdEIsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixHQUFHLEVBQUUsRUFBRTtJQUNQLFFBQVEsRUFBRSxPQUFPO0NBQ3BCLENBQUM7QUFFRixvRkFBb0Y7QUFDcEYsSUFBTSxXQUFXLEdBQWMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO0FBRW5ELDREQUE0RDtBQUM1RCxrREFBa0Q7QUFFbEQsaUNBQWlDO0FBQ2pDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFFM0IseUJBQXlCO0FBQ3pCLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVO0FBQ3pELElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7QUFDMUUsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtBQUUxRSwrQkFBK0I7QUFDL0IsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQyxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JELGVBQWUsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQzFDLElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEQsY0FBYyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7QUFDeEMsaUJBQWlCO0FBQ2pCLFNBQVMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDdkMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN0QyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRWpDLHFGQUFxRjtBQUNyRixxQ0FBcUM7QUFDckMsbUZBQW1GO0FBQ25GLGlGQUFpRjtBQUNqRixzRUFBc0U7QUFDdEUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQWdCO0lBQ2pDLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxhQUFhLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDOUMsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxZQUFZLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDNUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvQixHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDLENBQUM7QUFFSCx5QkFBeUI7QUFDekIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3QixLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9tYWluLnRzXCIpO1xuIiwiLy8gQ3JlYXRpbmcgYW4gaW50ZXJmYWNlIChraW5kYSBsaWtlIGEgY2xhc3MgaW4gUHl0aG9uKVxuaW50ZXJmYWNlIFN0dWRlbnQge1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgYWdlOiBudW1iZXI7XG4gICAgbG9jYXRpb246IHN0cmluZztcbn1cblxuLy8gSW5pdGlhdGlvbiB0d28gaW5zdGFuY2Ugb2YgdGhlIFN0dWRlbnQgaW50ZXJmYWNlIChcImNsYXNzXCIpXG5jb25zdCBzdHVkZW50MTogU3R1ZGVudCA9IHtcbiAgICBmaXJzdE5hbWU6IFwiSm9oblwiLFxuICAgIGxhc3ROYW1lOiBcIkRvZVwiLFxuICAgIGFnZTogMjUsXG4gICAgbG9jYXRpb246IFwiUGFyaXNcIlxufTtcblxuY29uc3Qgc3R1ZGVudDI6IFN0dWRlbnQgPSB7XG4gICAgZmlyc3ROYW1lOiBcIkphbmVcIixcbiAgICBsYXN0TmFtZTogXCJEb2VcIixcbiAgICBhZ2U6IDI1LFxuICAgIGxvY2F0aW9uOiBcIlBhcmlzXCJcbn07XG5cbi8vIFN0b3JpbmcgdGhlIHR3byBzdHVkZW50cyBpbiBhbiBhcnJheSB3aGlsZSB0eXBpbmcgdGhlIHR5cGUgb2YgdGhlIGVsZW1lbnRzIGluc2lkZVxuY29uc3Qgc3R1ZGVudExpc3Q6IFN0dWRlbnRbXSA9IFtzdHVkZW50MSwgc3R1ZGVudDJdXG5cbi8vIEdvaW5nIGJhY2sgdG8gdmFuaWxsYSBKYXZhc2NyaXB0IHRvIHJlbmRlciBIVE1MIGVsZW1lbnRzOlxuLy8gcmVtZW1iZXIgdGhlc2VzIGFyZSBzdGFuZGFyZCBcImJhbGlzZXNcIiBvciB0YWdzLlxuXG4vLyBSZXRyaWV2aW5nIGh0bWwgYm9keSB0byB1c2UgaXRcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4vLyBDcmVhdGluZyBtYWluIGVsZW1lbnRzXG5jb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7IC8vIGEgdGFibGVcbmNvbnN0IHRhYmxlSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7IC8vIHBsYWNlIGZvciBpdHMgaGVhZGVyXG5jb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpOyAvLyBwbGFjZSBmb3IgaXRzIGluc2lzZVxuXG4vLyBDcmVhdGluZyBIZWFkZXIgb2YgdGhlIHRhYmxlXG5jb25zdCBoZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuY29uc3QgZmlyc3ROYW1lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbmZpcnN0TmFtZUhlYWRlci50ZXh0Q29udGVudCA9IFwiRmlyc3RuYW1lXCI7XG5jb25zdCBsb2NhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG5sb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcbi8vIEFzc2VtYmx5aW5nIGl0XG5oZWFkZXJSb3cuYXBwZW5kQ2hpbGQoZmlyc3ROYW1lSGVhZGVyKTtcbmhlYWRlclJvdy5hcHBlbmRDaGlsZChsb2NhdGlvbkhlYWRlcik7XG50YWJsZUhlYWQuYXBwZW5kQ2hpbGQoaGVhZGVyUm93KTtcblxuLy8gVGFraW5nIHRoZSBhcnJheSwgbG9vcGluZyB3aXRoIGEgXCJmb3JFYWNoXCIsIHN0dWRlbnQgKHR5cGVkIGFzIFwiU3R1ZGVudFwiIHN0cnVjdHVyZSlcbi8vIENyZWF0ZSBhIG5ldyByb3cgZm9yIGEgbmV3IHN0dWRlbnRcbi8vIENyZWF0ZSBhIG5ldyBjZWxsIGZvciB0aGUgZmlyc3RuYW1lLCBhZGRpbmcgdGhlIGZpcnN0bmFtZSBvZiB0aGUgY3VycmVudCBzdHVkZW50XG4vLyBDcmVhdGUgYSBuZXcgY2VsbCBmb3IgdGhlIGxvY2F0aW9uLCBhZGRpbmcgdGhlIGxvY2F0aW9uIG9mIHRoZSBjdXJyZW50IHN0dWRlbnRcbi8vIEFwcGVuZGluZyB0aGUgY2VsbHMgaW50byB0aGUgbmV3IHJvdyBhbmQgdGhlIHJvdyBpbnRvIHRoZSB0YWJsZWJvZHlcbnN0dWRlbnRMaXN0LmZvckVhY2goKHN0dWRlbnQ6IFN0dWRlbnQpID0+IHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IGZpcnN0TmFtZUNhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGZpcnN0TmFtZUNhc2UudGV4dENvbnRlbnQgPSBzdHVkZW50LmZpcnN0TmFtZTtcbiAgICBjb25zdCBsb2NhdGlvbkNhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGxvY2F0aW9uQ2FzZS50ZXh0Q29udGVudCA9IHN0dWRlbnQubG9jYXRpb247XG4gICAgcm93LmFwcGVuZENoaWxkKGZpcnN0TmFtZUNhc2UpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChsb2NhdGlvbkNhc2UpO1xuICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChyb3cpO1xufSk7XG5cbi8vIEFzc2VtYmx5aW5nIGV2ZXJ5dGhpbmdcbnRhYmxlLmFwcGVuZENoaWxkKHRhYmxlSGVhZCk7XG50YWJsZS5hcHBlbmRDaGlsZCh0YWJsZUJvZHkpO1xuYm9keS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9