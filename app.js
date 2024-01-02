
function showMenu() {

const menuTrigger = document.getElementById("profile-menu");
const menu = document.getElementById("profile-menu-content");

menuTrigger.addEventListener('click', function(){
menu.classList.toggle("menu-active");
    })
}

showMenu()

function showAlert() {

const AlertTrigger = document.getElementById("alert");
const Alert = document.getElementById("alert-content");

AlertTrigger.addEventListener('click', function(){
Alert.classList.toggle("menu-active");
    })
}

showAlert()

function showContainer() {

const containerTrigger = document.getElementById("mainBody");
const container = document.getElementById("mainBody-menu-content");

containerTrigger.addEventListener('click', function(){
container.classList.toggle("menu-active");
const img = document.querySelector(".container-down-icon")
let source = img.src

console.log

    if (source === "https://crushingit.tech/hackathon-assets/icon-arrow-down.svg"){
        img.src = "https://crushingit.tech/hackathon-assets/icon-arrow-up.svg"
    } else{
        img.src = "https://crushingit.tech/hackathon-assets/icon-arrow-down.svg"
    }
    }
    )
}

showContainer()



let innerContainer = "" 

// open the clicked.
function openContainer() {
    const outerContainer = document.querySelectorAll(".store");
        outerContainer.forEach(function(d, index) {
        d.addEventListener('click', function(){

        let innerContainer = document.getElementById(`others${index}`);
        closeContainer(innerContainer)
        innerContainer.classList.toggle("othersDisplayed");
        
        })
    }
)}

openContainer()

function closeContainer(innerContainer) {
        const outerContainer = document.querySelectorAll(".others");
        const anotherarray = outerContainer.forEach(function(d) {
        if (innerContainer != d.id) {
            d.classList.remove("othersDisplayed")
        }
        })
}

function removeContOne() {

const buttonT = document.getElementById("cancel-button");
const ContOne = document.querySelector(".containerOne");

buttonT.addEventListener('click', function(){
ContOne.classList.add("noDisplay");
    })
}
removeContOne()

document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('.checkbox');
  const progressBar = document.getElementById('progress-bar');
  const checkboxForm = document.getElementById('checkbox-form');

  checkboxForm.addEventListener('change', updateProgressBar);

  function updateProgressBar() {
    const checkedCheckboxes = document.querySelectorAll('.checkbox:checked');
    const progressPercentage = (checkedCheckboxes.length / checkboxes.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
  }
});