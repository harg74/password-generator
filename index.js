const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let alphaNumButtonEl = document.getElementById('alphanum')
let specialCharEl = document.getElementById('special-char')
let resetImgEL = document.getElementById('img-reset')

let alphanumericCharacters = characters.filter(char => /[a-zA-Z0-9]/.test(char));//filter only alphanumerical
let specialCharacters = characters.filter(char => /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(char));//filter only special characters

let alphaNum = false;

let passGenEl = document.getElementById('btn-pass-gen')
let inputOneEl = document.getElementById('inputOne')
let inputTwoEl = document.getElementById('inputTwo')

let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; //regex check if contains check if contains any special characters

alphaNumButtonEl.addEventListener('click', function(){
    alphaNum = true;
});

specialCharEl.addEventListener('click', function(){
    alphaNum = false
});

passGenEl.addEventListener('click', function(){
    let charactersRandOne =[]
    let charactersRandTwo =[]
    if(alphaNum===true){
        let passLengthEl = document.getElementById('pass-length').value
        for(let i=0; i < passLengthEl; i++){
            charactersRandOne[i] = alphanumericCharacters[Math.floor(Math.random()*alphanumericCharacters.length)]
            charactersRandTwo[i] = alphanumericCharacters[Math.floor(Math.random()*alphanumericCharacters.length)]
            inputOneEl.value = charactersRandOne.join('') //.join returns a string from the array
            inputTwoEl.value = charactersRandTwo.join('')
            // console.log(alphaNum)
        }
    }else{
        let passLengthEl = document.getElementById('pass-length').value
        for(let i=0; i < passLengthEl; i++){
            charactersRandOne[i] = characters[Math.floor(Math.random()*characters.length)]
            charactersRandTwo[i] = characters[Math.floor(Math.random()*characters.length)]
            inputOneEl.value = charactersRandOne.join('') //.join returns a string from the array
            inputTwoEl.value = charactersRandTwo.join('')
            // console.log(alphaNum)
        }
        // console.log([...inputOneEl.value])
        // console.log([...inputTwoEl.value])
        let checkSpecialCharInputOne = format.test(inputOneEl.value)
        let checkSpecialCharInputTwo = format.test(inputTwoEl.value)
        // console.log(inputOneEl.value)
        // console.log(inputTwoEl.value)
        // console.log(checkSpecialCharInputOne);
        // console.log(checkSpecialCharInputTwo);
        if (checkSpecialCharInputOne === false){
            let addSpecialCharArr = [...inputOneEl.value]
            addSpecialCharArr.pop()
            let specialChartoBeAdded = specialCharacters[Math.floor(Math.random()*specialCharacters.length)]
            addSpecialCharArr.unshift(specialChartoBeAdded)
            // console.log(addSpecialCharArr)
            inputOneEl.value = addSpecialCharArr.join('')
        }if (checkSpecialCharInputTwo === false){
            let addSpecialCharArr = [...inputTwoEl.value]
            addSpecialCharArr.pop()
            let specialChartoBeAdded = specialCharacters[Math.floor(Math.random()*specialCharacters.length)]
            addSpecialCharArr.unshift(specialChartoBeAdded)
            // console.log(addSpecialCharArr)
            inputTwoEl.value = addSpecialCharArr.join('')

        }
    }
})

resetImgEL.addEventListener('click', function(){
    inputOneEl.value=''
    inputTwoEl.value=''
})

//When an event occurs in HTML, the event belongs to a certain event object, like a mouse click event belongs to the MouseEvent object.
//The "event" parameter in this function is the event object
//refers to the element that triggered the event. In this case, it refers to the pass-length input element.
//Event to avoid values < 10 and values > 20 values
document.getElementById('pass-length').addEventListener('input', function(event) {
    let value = event.target.value;
    if (value < 10) {
        event.target.value = 10;
    } else if (value > 20) {
        event.target.value = 20;
    }
})
