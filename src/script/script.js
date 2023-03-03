const link = "https://api.adviceslip.com/advice"

async function firstFetch() {
    const result = await fetch(`${link}`)
	const data = await result.json()
    
    let idAdvice = document.querySelector(".card_id-advice")
    let adviceText = document.querySelector(".card_advice")

    idAdvice.innerHTML = `Advice #${data.slip.id}`
    adviceText.innerHTML = `${data.slip.advice}`
}

firstFetch()