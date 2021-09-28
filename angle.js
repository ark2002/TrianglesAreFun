var angleOneInput = document.querySelector('#angle1')
var angleTwoInput = document.querySelector('#angle2')
var angleThreeInput = document.querySelector('#angle3')
var checkAngleSum = document.querySelector('#checkAngleSum')
var angleSum = document.querySelector('#angleSum')
var resultText = document.querySelector('#resultText')

function sumOfAngles() {
  if (!angleOneInput.value || !angleTwoInput.value || !angleThreeInput.value) {
      resultText.textContent = "Angle field can't be empty."
      return
  }

  var angleOne = parseFloat(angleOneInput.value)
  var angleTwo = parseFloat(angleTwoInput.value)
  var angleThree = parseFloat(angleThreeInput.value)
  
  if ((angleOne === 0) || (angleTwo === 0) || (angleThree === 0)) {
      resultText.textContent = "Angle of a triangle can't be ZERO!"
      return
  }

  var sum = angleOne + angleTwo + angleThree
  console.log(sum)
  angleSum.textContent = 'Sum of the angles is: ' + sum
  
  if (sum != 180) {
     resultText.textContent = 'Oops! these angles cannot make a triangle :('
   }
  else {
     resultText.textContent = 'It makes a triangle :)'
  }
}

checkAngleSum.addEventListener('click', sumOfAngles)