class Clock {
    constructor() {
      // 1. Create a Date object.
        let ourTime = new Date();

      // 2. Store the hours, minutes, and seconds.
        this.hours = ourTime.getHours();
        this.minutes = ourTime.getMinutes();
        this.seconds = ourTime.getSeconds();

      // 3. Call printTime.
        this.printTime();

      // 4. Schedule the tick at 1 second intervals.
        // // This works:
        // setInterval(() => {
        //   this._tick();
        // }, 1000);

        // // Does not work:
        // setInterval(
        //   _tick()
        // , 1000);
        
        // setInterval(this._tick, 1000); // This does not work. if we did not use fat arrow
        setInterval(this._tick.bind(this), 1000); // This works. if we did not use fat arrow
    };

    // setInterval(_tick){
    //   _tick();
    // }
  
    printTime() {
      // Format the time in HH:MM:SS

      // Use console.log to print it.
      console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }
  
    _tick() {
      // 1. Increment the time by one second.
      
      if(this.seconds < 59) {
        this.seconds += 1;
      } else { 
        this.seconds = 0;
        if(this.minutes < 59) {
          this.minutes += 1;
        } else {
          this.minutes = 0;
          if(this.hours < 23) {
            this.hours += 1;
          } else {
            this.hours = 0;
          };
        };
      };
      this.printTime();
    }
  }
  
  const clock = new Clock();

  // setInterval(clock._tick.bind(clock), 1000); // This works.
  // setInterval(clock._tick, 1000); // Why does this have error if we do not .bind(clock)

  // theoretical:
  // setInterval(callback){
  //   // callback();
  //   _tick(){
  //     this.minutes + 1;
  //     this.printTime();
  //   }
  // }