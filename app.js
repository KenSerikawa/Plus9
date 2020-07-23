let numbers = document.querySelectorAll('.number')
let colors = [
    '#ff623a', '#37afff', '#8746ff', '#ff31cc'
]
for (let i = 0; i < numbers.length; i++) {
    var number = numbers[i]

    if(i !== 4) {
        digit = Math.floor(Math.random() * 8 + 1)
        number.innerHTML = digit  
        number.style.color = getRandomColor(colors)  
    }

}

function dragHandler(ev, element) {
    // console.log(ev.target)
    console.log(element)
    object_data = {
        id: element.id,
        value: element.innerHTML
    }
    console.log(object_data)

    ev.dataTransfer.setData('data', JSON.stringify(object_data))
}

function dropHandler(ev, target) {
    ev.preventDefault()
    
    var data = ev.dataTransfer.getData("data")
    let obj = JSON.parse(data)
    addition(obj.value)
  
    newNumber(ev, obj.id)
}

function dragOverHandler(ev) {
    // console.log('element in drop zone')
    // Get the center coloured 
    let dropbox = document.getElementById('dropbox')
    
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault()
}

function addition(value) {
    var resultbox = document.getElementById('result')
    if(resultbox.innerHTML == '') {
        resultbox.innerHTML = value
    } else if (resultbox.innerHTML !== '') {
        let number = parseInt(resultbox.innerHTML)
        let result = number + parseInt(value)
        if(result == 9) {
            addPoint()
            resetBox()
        } else if(result < 9) {
            resultbox.innerHTML = parseInt(number) + parseInt(value)
        } else if(result > 9) {
            askToRetryGame()
        }
    }
}

function newNumber(ev, id) {
    ev.preventDefault()
    let element = document.getElementById(id)

    element.innerHTML = Math.floor(Math.random() * 8 + 1)
}

function addPoint() {
    let matchesElement = document.getElementById('matches')
    let matches = parseInt(matchesElement.innerHTML) 
    console.log(matches)
    matches++
    matchesElement.innerHTML = matches.toString()
}

function resetBox() {
    let result = document.getElementById('result')
    result.innerHTML = ''
}

function askToRetryGame() {
    let confirmation = confirm('play again?')
    if(confirmation) {
        location.reload()
    } 
}

function getRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}
  