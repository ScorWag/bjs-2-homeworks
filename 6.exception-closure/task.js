'use strict'

// Task 1

function parseCount(value) {    
    let result = Number.parseInt(value);
    if(Number.isNaN(result)) {
        throw new Error('Невалидное значение');
    } else {
        return result;
    }       
}

function validateCount(value) {
    try {
        return parseCount(value);  
    } catch (error) {
        return error;
    } 
}

// Task 2

class Triangle{
    constructor(a, b, c) {       
        if(a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        } else {
            this.a = a;
            this.b = b;
            this.c = c; 
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = this.getPerimeter() / 2;        
        return Number.parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            },
            getArea() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}

