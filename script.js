const cardOne = document.getElementById("one")
const cardTwo = document.getElementById("two")
const submit = document.querySelector(".submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".rate")



rates.forEach((e) => {
    e.addEventListener("click", () => {
        rating.innerHTML = (e.innerHTML);
    })
});


submit.addEventListener("click", () => {
    cardTwo.classList.remove("visibility");
    cardOne.classList.add("visibility")
})





