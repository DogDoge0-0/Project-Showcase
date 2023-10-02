// Initalizaton
let keyEnter = document.querySelector('#keyEnter');
let key;

// Key checker

keyEnter.addEventListener('click', function() {
  key = prompt('Please enter your key now');
  if (key === 'AfRjwQmkt') {
    alert('Key has been entered sucessfully\nTeleport will occur once you press \'OK\'.');
      window.location.href = "AfRjwQmkt.html";
  }
  else {
    alert('Key is incorrect, try again');
  }
});