let sum = 0, price, rest, toContinue, money, billet10 = 0, billet5 = 0, billet1 = 0

do {
    price = parseInt(prompt("prix ?"));
    sum = sum = price
    toContinue = prompt("taper un autre prix ou non pour arreter")
} while(toContinue !== "non")

money = parseInt(prompt("Voici le prix total : " + sum + "€, mettez vos billets"))
rest = sum - money

do {
    if(rest > 0) {
        rendu = rendu - prompt("Vous devez encore " + rest)
    } else if(rest <= -10) {
        rest = rest + 10
        billet10++
    } else if(rest <= - 5) {
        rest = rest + 5
        billet5++
    } else if(rest <= -1) {
        rest = rest + 1
        billet1++
    }
} while(rest !== 0)

console.log("Voila vois billets : " + billet10 + "X 10, " + billet5 + "X 5, " + billet1 + "X 1");