let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("22:46", () => console.log("Пора вставать"), 1);
phoneAlarm.addClock("22:47", () => {console.log("Давай, вставай уже!"); phoneAlarm.removeClock(2)}, 2);
phoneAlarm.addClock("22:47", () => console.log("Иди умываться!"));
phoneAlarm.addClock("22:48", () => {
    console.log("Вставай, а то проспишь!"); 
    phoneAlarm.clearAlarms(); 
    phoneAlarm.printAlarms()
}, 3);
phoneAlarm.addClock("22:46", () => console.log("Вставай, а то проспишь!"), 1);
phoneAlarm.printAlarms();
phoneAlarm.start();




