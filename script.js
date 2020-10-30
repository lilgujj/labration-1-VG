
const textElement = document.getElementById("text")
const optionsButtonElement = document.getElementById("btn-options")

/**
 * startar spelet på scen 0
 */
function startGame() {
    showTextNode(0)

}

/**
 * 
 * @param {Number} textNodeIndex 
 * denna funktion tar bort alla options dvs buttons som inte har med 
 * vilken textnode/scen du är på. 
 * lägger till texten från vilken textNode du är på till rätt scen.
 */
function showTextNode(textNodeIndex) {
    let textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionsButtonElement.firstChild) {
        optionsButtonElement.removeChild(optionsButtonElement.firstChild)
    }

/**
 * denna if statement gör en ny knapp för varje option spelaren har
 * beroende på vilken textNode han står på.
 */
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement("button")
            button.innerText = option.text
            button.classList.add("btn") // lägger till styling på den nya button
            button.addEventListener("click", () => selectOption(option) )
            optionsButtonElement.appendChild(button)
        }
    })
}

/**
 * gör det möjligt att visa option på koden ovan.
 */
function showOption () { 
    return true;

} 
/**
 * 
 * @param {function} option 
 * anropar id i arrayen textNodes och visar vilken text som skall
 * skrivas ut.
 */
function selectOption(option) {
    const nextTextNodeId = option.nextText
    showTextNode(nextTextNodeId)

}


/**
 * detta är en array för varje scen. varje scen har ett specifikt id. 
 * @param {array} textNodes
 * @param {array} options
 */
const textNodes = [
    {
        id: 0,
        text: "Välkommen till Äventyret i Djungeln",
        options: [
            {
                text: "Börja spela",
                nextText: 1
            }
        ]

    },
    {
        id: 1,
        text: "Du är vilse i djungeln och ser ett svärd",
        options: [
            {
                text: "ta svärdet",
                nextText: 2,
            },
            {
                text: "lämna svärdet",
                nextText: 7,
            },
        ]
    },
    {
        id: 2,
        text: " Du håller nu i ett svärd och stöter på din kompis ",
        options: [
            {
                text: "ge din kompis ditt svärd",
                nextText: 3,
            },
            {
                text: "döda din kompis",
                nextText: 4,
            },
            {
                text: "hjälp din kompis komma ur djungeln",
                nextText: 5,
            }
        ]
    },
    {
        id: 3,
        text: "Du gav ditt svärd till din kompis, Din kompis vet inte vem han är för han har varit vilse för länge så han dödar dig",
        options: [
            {
                text: "du dog, prova igen",
                nextText: 0
            }
        ]
    },
    {
        id: 4,
        text: "du dödade din kompis. Nu kommer det två poliser och ser din kompis som är död",
        options: [
            {
                text: "du erkänner mordet och börja om",
                nextText: 0
            }
        ]
    },
    {
        id: 5,
        text: "Du och din kompis använder svärdet för att hitta en väg ut. Ni hittade fram till stranden och eran båt är där",
        options: [
            {
                text: "hoppa på båten och åk iväg",
                nextText: 6
            },
            {
                text: "gå in i djungeln och börja om",
                nextText: 0
            }
        ]
    },
    {
        id: 6,
        text: "Grattis du klarade spelet",
        options: [
            {
                text: "spela igen",
                nextText: 0,
            }
        ]
    },
    {
        id: 7,
        text: "du tog inte upp svärdet och går vilse i djungeln",
        options: [
            {
                text: "prova igen",
                nextText: 0, 
            }
        ]
    }
]
/**
 * startar funktionen direkt när sidan öppnas
 */
window.onload = startGame;