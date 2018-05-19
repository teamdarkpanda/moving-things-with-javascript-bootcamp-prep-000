const app = "I don't do much."

//get the dodger element
var dodger = document.getElementById('dodger')
//get the dodger's width
var dodgerWidth = dodger.clientWidth

//get the Black background Box container
var gameBox = document.getElementById('game')
//get gameBox width until which to restrict dodger's right movement
var gameBoxWidth = gameBox.clientWidth

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px', '')
  var right = parseInt(rightNumbers, 10)

  if (right < gameBoxWidth-dodgerWidth) {
    dodger.style.left = `${right + 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  } else if (e.which === 39) {
    moveDodgerRight()
  }
})