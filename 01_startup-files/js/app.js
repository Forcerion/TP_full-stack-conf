const $inputName = document.querySelector("#name")
const $jobTitleSelect = document.querySelector("#title")
const $otherTitle = document.querySelector("#other-title")
const $designSelect = document.querySelector("#design")
const $punOptions = document.querySelectorAll(".puns")
const $heartOptions = document.querySelectorAll(".heart")
const $activitiesPrice = document.querySelectorAll(".activities imput")

console.log($inputName)
console.log($jobTitleSelect)
console.log($designSelect)
console.log($punOptions)



document.addEventListener("DOMContentLoaded", function (event) {
    console.log("Hello");
    $inputName.focus()


    $jobTitleSelect.addEventListener("change", function(e) {
        console.log("====")
        console.log(e.target.value)
        console.log("====")

        if (e.target.value === "other") {
            console.log("C'est bon")
            $otherTitle.classList.remove('is-hidden')
        } else {
            console.log("C'est pas bon")
            $otherTitle.classList.add('is-hidden')
        }
    })

    $designSelect.addEventListener("change", function(e) {
        const designValue = e.target.value

        if (designValue === "js puns") {
            console.log("Js pun")
            for (let i = 0; i < $punOptions.length; i++) {
                $punOptions[i].classList.remove('is-hidden')
            }

            for (let i = 0; i < $heartOptions.length; i++) {
                $heartOptions[i].classList.add('is-hidden')
            }
        } else if (designValue === "heart js") {
            console.log("heart js")
            for (let i = 0; i < $punOptions.length; i++) {
                $punOptions[i].classList.add('is-hidden')
            }

            for (let i = 0; i < $heartOptions.length; i++) {
                $heartOptions[i].classList.remove('is-hidden')
            }
        } else {
            console.log("valeur par défaut")
            for (let i = 0; i < $punOptions.length; i++) {
                $punOptions[i].classList.add('is-hidden')
            }

            for (let i = 0; i < $heartOptions.length; i++) {
                $heartOptions[i].classList.add('is-hidden')
            }
        }
    })

});
