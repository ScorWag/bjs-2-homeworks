"use strict";
function solveEquation(a, b, c) {
  let arr = []
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant === 0) {
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
  let percentеConvert = +percent;
  let contributionConvert = +contribution;
  let amountConvert = +amount;  
     
  if(Number.isNaN(percentеConvert) || Number.isNaN(contributionConvert) || Number.isNaN(amountConvert)) {
    let parameter;
    let value;    
    if(Number.isNaN(percentеConvert)) {
    parameter = "Процентная ставка";
    value = percent;                
    } else if(Number.isNaN(contributionConvert)) {
      parameter = "Начальный взнос";
      value = contribution;
    } else if(Number.isNaN(amountConvert)) {
      parameter = "Общая стоимость";
      value = amount;
    }
    return `Параметр "${parameter}" содержит неправильное значение "${value}"`;
  } 
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
  
  return totalAmount;
} 

const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
console.log(calculateTotalMortgage(10 , 0, 50000, nextYearDate));
