const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button");
infoTxt = document.querySelector(".info-text");
let filterInput;

checkBtn.addEventListener("click", () => {
    //splitting user input character, reversing them,
    //and joining them in a single word
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput) {
        return infoTxt.innerHTML = `No, '${txtInput.value}'</span> isn't a palindrome!`;
    }
    infoTxt.innerHTML = `Yes, '${txtInput.value}'</span> is a palindrome!`;
});
txtInput.addEventListener("keyup", () => {
    //removing spaces & all special characters from entered value
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
    
});