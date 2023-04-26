class Clock {
    constructor() {
      // 1. Create a Date object.
        let ourTime = new Date();

      // 2. Store the hours, minutes, and seconds.
        let hours = ourTime.getHours();
        let minutes = ourTime.getMinutes();
        let seconds = ourTime.getSeconds();

      // 3. Call printTime.
        this.printTime();

      // 4. Schedule the tick at 1 second intervals.
        while (true) {
            setInterval(_tick, 1000);
        };
        
    };
  
    printTime() {
      // Format the time in HH:MM:SS

      // Use console.log to print it.
    }
  
    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
    }
  }
  
  const clock = new Clock();