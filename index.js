let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let initialSaveContent = saveEl.textContent; // Store the initial content

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log("Gds")
}

function reset(){
    if (confirm("Are you sure you want to reset the count?")) {
        // Reset the count
        
        countEl.textContent = 0
        count = 0
        saveEl.textContent = initialSaveContent
    }
}

