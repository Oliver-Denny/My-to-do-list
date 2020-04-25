let count = 0;
let getAdd = document.getElementById('add')
let getBackground = document.getElementById('background')
let getInputs = document.getElementsByClassName('input')
let getItems = document.getElementsByClassName('item')
let getName = document.getElementById('name')

function noitems() {
    if (count == 0) {
        getBackground.innerHTML = '<div class="start">Click on the <strong>+</strong> button to get started</div>'
    }
    else if (count == -1) {
        getBackground.innerHTML = '<div class="end">No more tasks? Happy days!</div>'
        count += 1
    }
    getBackground.style.paddingTop = "0px"
    getBackground.style.boxShadow = "0px 0px 0px 0px"
    getBackground.style.backgroundColor = "white"
}

window.onload = noitems();

function addevent() {
    if (document.getElementById('name').value === '') {
        alert("You need to type something in the input field first!")
        return
    }
    if (getItems.length == 0) {
        count += 1;
        getBackground.innerHTML = ''
        getBackground.style = null;
        getBackground.innerHTML += '<div class="item"><div class="column input"></div><div id="spacer" class="column"></div><div id="bin" class="bin column row">X</div></div>'
        getInputs[count - 1].innerHTML = document.getElementById('name').value
        let heightplus = getBackground.offsetHeight;
        getBackground.style.height = parseInt(heightplus + 35) + "px"
        document.getElementById('name').value = ''
    }
    else {
        count += 1
        getBackground.innerHTML += '<div class="item"><div class="column input"></div><div id="spacer" class="column"></div><div id="bin" class="bin column row">X</div></div>'
        getInputs[count - 1].innerHTML = document.getElementById('name').value
        let heightplus = getBackground.offsetHeight;
        getBackground.style.height = parseInt(heightplus + 35) + "px"
        document.getElementById('name').value = ''
    }
}

getAdd.addEventListener("click", addevent, false);

getName.addEventListener("keypress", function enter(e) {
    if (e.keyCode === 13) {
        addevent();
    }
}, false);

function doSomething(e) {
    if (e.target.id === "bin") {
        if (getItems.length == 1) {
            let clickeditem = e.target
            getBackground.removeChild(clickeditem.parentNode)
            count -= 2
            noitems();
        }
        else {
            let clickeditem = e.target
            getBackground.removeChild(clickeditem.parentNode)
            let heightminus = getBackground.offsetHeight;
            getBackground.style.height = parseInt(heightminus - 75) + "px"
            count -= 1
        }
    }
    e.stopPropagation();
}

getBackground.addEventListener("click", doSomething, false)
