class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    startButton.addEventListener("click", this.start.bind(this));
    pauseButton.addEventListener("click", this.pause.bind(this));
  }

  start() {
    let interval = setInterval(function () {
      durationInput.value = Number(durationInput.value) - 1;
    }, 1000);
    this.interval = interval;
  }
  pause() {
    clearInterval(this.interval);
  }
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
