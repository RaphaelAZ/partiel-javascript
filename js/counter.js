class Counter {
    constructor() {
        this.startCounter();
    }

    startCounter() {
        let spanCounter = document.querySelector('#information > #counter > span');
        let counter = 0;
        setInterval(() => {
            let minutes = Math.floor(counter / 60);
            let seconds = counter % 60;
            spanCounter.innerHTML = `${minutes}:${seconds}`;
            counter++;
    
            if(minutes>=10) {
                spanCounter.classList.add("time-warning");
            }
        }, 1000);
    }
}

export default Counter;