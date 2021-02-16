const closedFace = document.querySelector(".close");
const openFace = document.querySelector(".open");
const changeText = document.querySelector("#monkeySpeaks");


// Add Event Listener - olayların asıl olduğu yer burası

closedFace.addEventListener("click", () => {
    if (openFace.classList.contains("open")) {
        openFace.classList.add("active");
        closedFace.classList.remove("active");
        if(changeText.classList.contains("changedToRed")){
            changeText.className = "btn btn-outline-success";
            changeText.innerHTML = "YEAA! Like This!";
        }
    }
});

openFace.addEventListener("click", () => {
    if (closedFace.classList.contains("close")) {
        closedFace.classList.add("active");
        openFace.classList.remove("active");
        if(changeText.classList.contains("changedToRed")){
            changeText.className = "btn btn-success";
            changeText.innerHTML = "YEAA! Like This!";
        }
    }
});

changeText.addEventListener("click", () => {
    changeText.innerHTML = "NOT HERE! Click to monkey -_-";
    changeText.className = "btn btn-danger";
    changeText.classList.add("changedToRed");
});
