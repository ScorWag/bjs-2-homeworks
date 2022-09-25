"use strict";
function solveEquation(a, b, c) {
  let arr;
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if(discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    arr = [(-b + Math.sqrt(discriminant)) / (2 * a)];
  } else if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant) )/(2*a);
    let x2 = (-b - Math.sqrt(discriminant) )/(2*a);
    arr = [x1, x2];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;    
  if(typeof percent === 'string' && typeof contribution === 'string' && typeof amount === 'string') {
    percent = +percent / 100;
    contribution = +contribution;
    amount = +amount;
    let currentDate = new Date();
    let creditDate = new Date(date);
    let months = (new Date(creditDate.getFullYear() - currentDate.getFullYear()) * 12) + (12 - currentDate.getMonth()) - (12 - creditDate.getMonth());
    let bodyCredit = amount - contribution;
    let p = percent / 12;
    let payment = bodyCredit * (p + (p / (Math.pow(1 + p, months) - 1)));
    totalAmount = parseFloat((payment * months).toFixed(2)); 
  } else {
    let parameter;
    let value;    
    if(typeof percent !== 'string') {
    parameter = "percent";
    value = percent;                
    } else if(typeof contribution !== 'string') {
      parameter = "contribution";
      value = contribution;
    } else if(typeof amount !== 'string') {
      parameter = "amount";
      value = amount;
    }
    totalAmount = `Параметр ${parameter} содержит неправильное значение ${value}`;    
  }
  return totalAmount;
}
