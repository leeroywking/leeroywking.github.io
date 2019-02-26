'use strict';

var hours = [
  '6:00am',
  '7:00am',
  '8:00am',
  '9:00am',
  '10:00am',
  '11:00am',
  '12:00am',
  '1:00pm',
  '2:00pm',
  '3:00pm',
  '4:00pm',
  '5:00pm',
  '6:00pm',
  '7:00pm',
  '8:00pm'
];
var tableMain = document.getElementById('tablemain');

// You need to pass this constructor function the max, min and cookie per sale, also the name 
function LocationConstructor(max, min, cookiepersale, rowTitle) {
  this.maxCustPerHour = max;
  this.minCustPerHour = min;
  this.cookiesPerSale = cookiepersale;
  this.rowTitle = rowTitle;
  this.cookiesByHour = [];
}
LocationConstructor.prototype.randRange = function () {
  return Math.floor((Math.random() * (this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour)
};
LocationConstructor.prototype.render = function () {
  var newRow = document.createElement('tr');
  newRow.id = this.rowTitle;
  newRow.textContent = ('');
  tableMain.appendChild(newRow);
  var total = 0;
  var rowTitleRend = document.createElement('td');
  rowTitleRend.textContent = this.rowTitle;
  newRow.appendChild(rowTitleRend);
  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('td');
    var numCustomerPerHour = this.randRange();
    var cookiesPerHour = Math.floor(numCustomerPerHour * this.cookiesPerSale);
    liEl.textContent = `${cookiesPerHour} `;
    newRow.appendChild(liEl);
    this.cookiesByHour.push(cookiesPerHour);
    total = cookiesPerHour + total;
  }
  var liEltotal = document.createElement('td');
  liEltotal.textContent = `${total} `;
  this.cookiesByHour.push(total);
  newRow.appendChild(liEltotal);
};



function tableHeadRender(headElement) {
  var blank = document.createElement('th');
  blank.innerHTML = ('Locations');
  headElement.appendChild(blank);
  for (var hourCount = 0; hourCount < hours.length; hourCount++) {
    var tableHeadRow = document.createElement('th');
    tableHeadRow.textContent = hours[hourCount];
    headElement.appendChild(tableHeadRow)
  }
  var totals = document.createElement('th');
  totals.innerHTML = ('Totals');
  headElement.appendChild(totals);
};


function tableFootRender(footElement) {
  var total = document.createElement('td');
  var grandTotal = 0;
  var label = document.createElement('td');
  label.innerHTML = ('By Hour Totals');
  footElement.appendChild(label);
  for (var i = 0; i < hours.length; i++) {
    var entry = document.createElement('td');
    var sum = 0;
    for (var j = 0; j < objList.length; j++) {
      sum = sum + objList[j].cookiesByHour[i];
    };
    grandTotal = grandTotal + sum;
    entry.textContent = (sum);
    footElement.appendChild(entry)
  };
  total.textContent = (grandTotal);
  footElement.appendChild(entry);
  footElement.appendChild(total);
};
var objList = [];

function clearTotalsRow(){
  var element = document.getElementById("rowtotals");
  element.parentNode.removeChild(element);}

function createTotalsRow(){
  var newTotal = document.createElement('tr');
  newTotal.id = 'rowtotals';
  tableMain.appendChild(newTotal);
}

function addNewStore(max, min, avg, name) {
  var newStoreObj = new LocationConstructor(max, min, avg, name);
  objList.push(newStoreObj);
  clearTotalsRow();
  newStoreObj.render();
  createTotalsRow();
  tableFootRender(rowtotals);
}

tableHeadRender(tableMain);
addNewStore(65, 23, 6.3, 'First and Pike');
addNewStore(24, 2, 1.2, 'SeaTac Airport');
addNewStore(38, 11, 3.7, 'Seattle Center');
addNewStore(38, 20, 2.3, 'Capitol Hill');
addNewStore(16, 2, 4.6, 'Alki');

// var newstoreList = document.getElementById('newstore-list');
var newstoreForm = document.getElementById('newstore-form');

Comment.prototype.render = function () {
  var liEl = document.createElement('li');
  // liEl.innerHtml = '<b>' + this.username + ': </b><em>' + this.text + '</em>';
  liEl.innerHTML = ' <b>' + this.max + ': </b><em>' + this.min + '</em>' + this.avg + name;
  return liEl;
};

function handleStoreSubmit(event) {
  event.preventDefault();
  var max = parseInt(event.target.max.value, 10);
  var min = parseInt(event.target.min.value, 10);
  var avg = parseInt(event.target.avg.value, 10);
  var name = event.target.name.value;
  nameCheck(name);
  if (max <= min || max <= 0 || min <= 0 || avg <= 0 ||
    max > 5000 || min > 5000 || avg > 5000) {
    alert('Max must be greater than min, no negative numbers; I\'m a little teapot. Don\'t fill me up.');
  }
  else {
    addNewStore(max, min, avg, name);
    clearInput()
  };


  // var newStore = new LocationConstructor(max, min, avg, elementId, name);
  function clearInput() {
    event.target.max.value = null;
    event.target.min.value = null;
    event.target.avg.value = null;
    event.target.name.value = null;
  }
}

newstoreForm.addEventListener('submit', handleStoreSubmit);


function nameCheck(name){
  for (var i = 0; objList.length > i ; i++){
    if (objList[i].rowTitle === name){
      console.log("seats taken");
      var element = document.getElementById(name);
      element.parentNode.removeChild(element);
      objList.splice(i,1);
    }
    else{console.log('new to me')}
  }
}