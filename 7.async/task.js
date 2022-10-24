class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if(id === undefined) {
            throw new Error("Необходимо передать идентификатор звонка");            
        }
        if(this.alarmCollection.find(alarm => alarm.id === id) !== undefined) {
            console.error("Звонок с таким id уже существует");
            return;
        }
        let clock = {
            id,
            time,
            callback
        }
        this.alarmCollection.push(clock);
    }

    removeClock(id) {
        let results = this.alarmCollection.filter(alarm => alarm.id !== id);
        if(results.length === this.alarmCollection.length) {
            return false;
        }
        this.alarmCollection = results;
        return true;
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;         
        return `${hours}:${minutes}`;
    }

    start() {               
        let checkClock = (clock) => {
            const currentTime = this.getCurrentFormattedTime();
            if(currentTime === clock.time) {
                clock.callback();
            }
        }
        if(this.timerId === null) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(clock => checkClock(clock)));
        }
    }

    stop() {
        if(Object.hasOwn(this, 'timerId')) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(clock => console.log(`id: ${clock.id} time: ${clock.time}`))
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}