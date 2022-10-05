'use strict';

// Задача 1

class PrintEditionItem{
    #state = 100;

    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;        
        this.type = null;      
    }

    fix(){
        let fixState = this.#state * 1.5;
        this.state = fixState;
    }

    set state(state){
        if(state < 0) {
            this.#state = 0;
        } else if(state > 100){
            this.#state = 100;
        } else{
            this.#state = state;        
        }        
    }

    get state(){
        return this.#state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);        
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Задача 2

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        let result = this.books.find(book => book[type] === value);        
        if(result === undefined){
            return null;
        } else {
            return result;
        }
    }

    giveBookByName(bookName){
        let book = this.findBookBy('name', bookName);        
        if(book === null){
            return null;
        } else{
            let results = this.books.filter(item => item !== book);
            this.books = results;
            return book;
        }
    }
}

// Задача 3

class Student{
    constructor (name) {
        this.name = name;
        this.subjects = [];           
      }

    addMark(mark, subject) {
        if(mark < 1 || mark > 5) {
            return "Ошибка, оценка должна быть числом от 1 до 5";
        } else if(this.subjects[subject] === undefined) {
            this.subjects[subject] = [mark];
        } else {
            this.subjects[subject].push(mark);
        }
    }

    getAverageBySubject(subject) {
        if(this.subjects === undefined || this.subjects[subject] === undefined) {
            return 0;
        } else {
            return this.subjects[subject].reduce((acc, item) => {return acc + item}, 0) / this.subjects[subject].length;
        }
    }

    getAverage() {
        if(this.subjects === undefined) {
            return 0;
        } else {
            let marks = [];
            for(let key of Object.keys(this.subjects)) {            
                marks.push(...this.subjects[key]);           
            }
            return marks.reduce((acc, item) => {return acc + item}, 0) / marks.length;
        }        
    }

    exclude(reason){
        delete this.subjects;
        this.excluded = reason;
    }
}