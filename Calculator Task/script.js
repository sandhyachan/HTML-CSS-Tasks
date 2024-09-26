document.getElementById("title").innerText = "EasyMath Calculator"
document.getElementById("description").innerText = "Your must-have tool for quick and simple calculations!"
const result = document.getElementById('result');

const numButtons = {
 one : document.getElementById("one"),
 two : document.getElementById("two"),
 three : document.getElementById("three"),
 four : document.getElementById("four"),
 five : document.getElementById("five"),
 six : document.getElementById("six"),
 seven : document.getElementById("seven"),
 eight : document.getElementById("eight"),
 nine : document.getElementById("nine"),
 zero : document.getElementById("zero")
}
const buttons = {
 dot : document.getElementById("dot"),
 add : document.getElementById("add"),
 subtract : document.getElementById("subtract"),
 divide : document.getElementById("divide"),
 multiply : document.getElementById("multiply"),
 module : document.getElementById("module"),
 equal : document.getElementById("equal"),
 del : document.getElementById("delete"),
 clear : document.getElementById("clear")
}

numButtons.one.innerText = 1
numButtons.two.innerText = 2
numButtons.three.innerText = 3
numButtons.four.innerText = 4
numButtons.five.innerText = 5
numButtons.six.innerText = 6
numButtons.seven.innerText = 7
numButtons.eight.innerText = 8
numButtons.nine.innerText = 9
numButtons.zero.innerText = 0
buttons.dot.innerText = "."
buttons.add.innerText = "+"
buttons.subtract.innerText = "-"
buttons.multiply.innerText = "x"
buttons.divide.innerText = "÷"
buttons.module.innerText = "%"
buttons.del.innerText = "⌫"
buttons.equal.innerText = "="
buttons.clear.innerText = "C"

const buttonValues = {}
Object.entries(numButtons).forEach(([key, button]) => {buttonValues[key] = parseInt(button.innerText)
})

Object.entries(numButtons).forEach(([key, button]) => {
    button.addEventListener('click', () => {
      const currentValue = result.value;
      if (currentValue === '0' || currentValue === '') {
        result.value = buttonValues[key]
      } else {
        result.value += buttonValues[key]
      }
    })
})


Object.entries(buttons).forEach(([key, button]) => {
    if (key !== 'equal' && key !== 'del' && key !== 'clear') {
      button.addEventListener('click', () => {
        const currentValue = result.value
        if (currentValue !== '') {
          result.value += button.innerText
        }
      })
    }
})

buttons.equal.addEventListener('click', () => {
    const currentValue = result.value;
    if (currentValue !== '') {
      try {
        const resultValue = eval(currentValue.replace('x', '*').replace('÷', '/'))
        result.value = resultValue
      } catch (error) {
        result.value = 'Error'
      }
    }
})

buttons.del.addEventListener('click', () => {
    const currentValue = result.value
    if (currentValue !== '') {
      result.value = currentValue.slice(0, -1)
    }
})

document.addEventListener('keydown', (event) => {
    if (!event.key.match(/[0-9 + / - % * .]/) 
        && event.key !== 'Backspace' 
        && event.key !== 'Delete' 
        && event.key !== 'Enter'  
        && event.key !== 'Shift'
        && event.key !== 'ArrowRight'
        && event.key !== 'ArrowLeft'
     ) {
      alert('Only numbers are allowed!')
      event.preventDefault()
    }
})  

document.addEventListener("keydown", (e)=> {
    if(e.key.match("Enter")){
        
    }
})
  
buttons.clear.addEventListener("click", () => {result.value = ""})
