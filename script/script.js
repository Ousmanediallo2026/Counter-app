
// update the plus button

const positiveButton = document.getElementById("positive-sign");
positiveButton.addEventListener("click", function(){
    const counterUpdate = parseInt(document.getElementById("number").innerText);
    const result = counterUpdate + 1;
    document.getElementById("number").innerText = result;
    
    
    
})

// logic for the negaive or decreasing the value by 1.
const negativeButton = document.getElementById("negative-sign");
negativeButton.addEventListener("click", function(){
    const counterUpdate2 = parseInt(document.getElementById("number").innerText);
    
    if (counterUpdate2 < 1) {
        alert("No negative number!")
    }
    else {
        const total = counterUpdate2 -1;
    
     document.getElementById("number").innerText = total;
    }
    

   
    
})

// Reset Button 
const resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", function(){
    const counterUpdate3 = parseInt(document.getElementById("number").innerText);
     const final = counterUpdate3 * 0;
     
     document.getElementById("number").innerText =final;
})