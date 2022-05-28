document.addEventListener("DOMContentLoaded", () =>
{
    const darkModeBtn = document.querySelector("#darkMode-btn");
    darkModeBtn.addEventListener("click", onDarkMode);
});


function onDarkMode()
{
    const body = document.querySelector("body");
    const inputs = document.querySelectorAll("input, textarea");
    
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-white");
    inputs.forEach(input =>
    {
        input.classList.toggle("bg-dark");
    });
}