const phoneInputField = document.querySelector("#phone");
   const phoneInput = window.intlTelInput(phoneInputField, {
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });

const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-design");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  })
})

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  })
})

function updateFormSteps(){
  formSteps.forEach(formStep => {
    formStep.classList.contains("active-form") &&
    formStep.classList.remove("active-form");
  });
  formSteps[formStepsNum].classList.add("active-form");
}

function updateProgressbar(){
  progressSteps.forEach((progressStep, idx) => {
    if(idx < formStepsNum +1){
      progressStep.classList.add("active-step");
    }else {
      progressStep.classList.remove("active-step");
    }
  });
}