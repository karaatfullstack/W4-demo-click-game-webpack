let numTimesClicked = 0

function win() {
  alert('You win!')
  reset()
}

function reset() {
  numTimesClicked = 0
}

function click() {
  numTimesClicked++
  console.log('numTimesClicked -->', numTimesClicked)
  if (numTimesClicked === 10) {
    win()
  }
}
