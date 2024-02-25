const billInput = document.getElementById("billTotalInput")
const tipIntput = document.getElementById("tipInput")
const numberOfPeopleDiv = document.getElementById("numberOfPeople")
const perPersonTotalDiv = document.getElementById("perPersonTotal")

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () =>{
    const bill = Number(billInput.value)
    const tip = Number(tipIntput.value) / 100
    const tipAmount = tip * bill
    const total = bill + tipAmount
    const perPerson = total / numberOfPeople
    perPersonTotalDiv.innerText = perPerson
}

const increasePeople = () =>{
    numberOfPeople += 1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}
const decreasePeople = ()=>{
    if(numberOfPeople <=1){
        return
    }
    numberOfPeople -=1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}