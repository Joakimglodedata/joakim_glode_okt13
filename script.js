console.log("kfnf")

// meny.html
const pizzaCardContainer = document.querySelector("#pizzaCardContainer")
console.log(pizzaCardContainer)

const pizzaCard = document.createElement("div")
pizzaCard.classList.add("pizzaCard")

const pizzaCardImg = document.createElement("img")
pizzaCardImg.classList.add("pizzaCardImg")  
pizzaCardImg.src = ""
pizzaCardImg.alt = "Bilde av pizza"

const pizzaCardTitle = document.createElement("h3")
pizzaCardTitle.classList.add("pizzaCardTitle")
pizzaCardTitle.textContent = "Pizza navn"

const pizzaCardDescription = document.createElement("p")
pizzaCardDescription.classList.add("pizzaCardDescription")
pizzaCardDescription.textContent = "Pizza beskrivelse"
pizzaCardDescription.style.fontSize = Math.floor((Math.random() * 8) + 3)+"px";
console.log(pizzaCardDescription.style.fontSize)

const pizzaCardPrize = document.createElement("p")
pizzaCardPrize.classList.add("pizzaCardPrize")
pizzaCardPrize.textContent = "Pizza pris"

pizzaCard.appendChild(pizzaCardImg)
pizzaCard.appendChild(pizzaCardTitle)
pizzaCard.appendChild(pizzaCardDescription)
pizzaCard.appendChild(pizzaCardPrize)

Array.from({ length: 12 }, () => pizzaCardContainer.appendChild(pizzaCard.cloneNode(true)));