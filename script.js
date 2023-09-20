const id = document.querySelector('.id')
const advice = document.querySelector('.advice')
const dice = document.querySelector('.dice')

async function getAdvice(){
  const response = await fetch('https://api.adviceslip.com/advice')
  console.log(response)
  const data = await response.json()
  id.innerText = " Advice #"+data.slip.id
  advice.innerText = JSON.stringify(data.slip.advice)
}
dice.addEventListener('click', getAdvice)
