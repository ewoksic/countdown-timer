class Countdown {
  constructor() {
    this.months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    this.giveaway = document.querySelector(".giveaway");
    this.deadline = document.querySelector(".deadline");
    this.items = document.querySelectorAll(".deadline-format h4");
    this.tempDate = new Date();
    this.tempYear = this.tempDate.getFullYear();
    this.tempMonth = this.tempDate.getMonth();
    this.tempDay = this.tempDate.getDate();
    //this.futureDate = new Date(2021, 5, 5, 17, 30, 0);
    this.futureDate = new Date(this.tempYear, this.tempMonth, this.tempDay + 10, 11, 30, 0);

    this.futureTime = this.futureDate.getTime()
    this.events()
  }
  events() {
    this.giveaweyEnds()
    this.timer = setInterval(
      this.getRemainingTime.bind(this),
      1000
    )
    //this.getRemainingTime()
  }
  giveaweyEnds() {
    this.year = this.futureDate.getFullYear();
    this.hours = this.futureDate.getHours();
    this.minutes = this.futureDate.getMinutes();
    this.month = this.futureDate.getMonth();
    this.month = this.months[this.month];
    this.date = this.futureDate.getDate();
    this.weekday = this.weekdays[this.futureDate.getDay()];
    this.giveaway.textContent = `giveaway ends on ${this.weekday}, ${this.date} ${this.month}  ${this.year} ${this.hours}:${this.minutes}am`;
  }
  getRemainingTime() {
    this.today = new Date().getTime();
    this.t = this.futureTime - this.today;
    //values in ms
    this.oneDay = 24 * 60 * 60 * 1000;
    this.oneHour = 60 * 60 * 1000;
    this.oneMinute = 60 * 1000;
    // calcucalte all values
    this.days = this.t / this.oneDay;
    this.days = Math.floor(this.days);
    //Remainder (%)
    this.hours = Math.floor((this.t % this.oneDay) / this.oneHour);
    this.minutes = Math.floor((this.t % this.oneHour) / this.oneMinute);
    this.seconds = Math.floor((this.t % this.oneMinute) / 1000);
    //set values array

    this.values = [this.days, this.hours, this.minutes, this.seconds];
    this.items.forEach((x, y) => {
      x.innerHTML = this.format(this.values[y])
    })
    if (this.t < 0) {
      clearInterval(this.timer);
      this.deadline.innerHTML = `<h4 class= "expiired">Sorry, This Giveaway Has Expired!</h4>`
    }
  }
  format(z) {
    if (z < 10) {
      return z = `0${z}`
    }
    return z
  }

}



export default Countdown;

