let total = 0
document.querySelector('#calculate').addEventListener('click', run)
document.querySelector('#remove').addEventListener('click', clearIt)

function run() {
  let weight = document.querySelector('#weight').value
  let height = document.querySelector('#height').value
  total = (weight / 2.2046) / ((height * 2) / 39.3701)
  if (total <= 18) {
    document.querySelector('#placeToPutResult').innerText = (`Your BMI is ${Math.round(total)} and you are considered underweight`)
  } else if (total >= 19 && total <= 25) {
    document.querySelector('#placeToPutResult').innerText = (`Your BMI is ${Math.round(total)} and you are considered normal weight`)
  } else if (total >= 26 && total <= 30) {
    document.querySelector('#placeToPutResult').innerText = (`Your BMI is ${Math.round(total)} and you are considered normal weight`)
  } else {
    document.querySelector('#placeToPutResult').innerText = (`Your BMI is ${Math.round(total)} and you are considered Obese`)
  }

}






function clearIt() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.querySelector('#placeToPutResult').innerText = "";
}
