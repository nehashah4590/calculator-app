let screenEl = document.getElementById("screen-el")
buttons = document.querySelectorAll("button")

let screenValue = ""
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText
        if(buttonText == "x"){
            buttonText = "*"
            screenValue += buttonText
            screenEl.value = screenValue
        }
        else if(buttonText == "÷"){
            buttonText = "/"
            screenValue += buttonText
            screenEl.value = screenValue
        }
        else if (buttonText == 'AC'){
            screenValue = ""
            screenEl.value = screenValue
        }
        else if (buttonText == '='){
    
            screenEl.value = eval(screenValue)
        }
        else {
             screenValue += buttonText
            screenEl.value = screenValue
        }
    })
}