alert('This page will close again in five minutes');
function startCountdown() {
  let endTime = localStorage.getItem('countdownEndTime');
  if (!endTime || Date.now() >= parseInt(endTime, 10)) {
    // If the end time is not set or has already passed, set a new end time
    endTime = Date.now() + 300000; // 300000 milliseconds = 5 minutes
    localStorage.setItem('countdownEndTime', endTime);
  }

  // Update the countdown every second
  const countdownInterval = setInterval(function() {
    const currentTime = Date.now();
    const timeRemaining = endTime - currentTime;

    if (timeRemaining <= 0) {
      // Timer has expired, redirect the user
      clearInterval(countdownInterval);
      window.location.href = "1.3.html";
    }
  }, 1000);
}

startCountdown();