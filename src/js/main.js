document.addEventListener("DOMContentLoaded", () =>
{
    // Dark mode handler
    const darkModeBtn = document.querySelector("#darkMode-btn");
    darkModeBtn.addEventListener("click", onDarkMode);

    // Demo page alert
    const demoPage = document.querySelectorAll("a:not([data-fancybox])>img.img-demoPage");
    demoPage.forEach(page =>
    {
        page.addEventListener("click", onDemoPageClick);
    });
});


function onDarkMode()
{
    // Main
    const body = document.querySelector("body");
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-white");
    

    // Inputs & textareas
    document.querySelectorAll("input, textarea").forEach(input =>
    {
        input.classList.toggle("bg-dark");
        input.classList.toggle("border-secondary");
    });


    // Cards
    document.querySelectorAll(".card").forEach(card =>
    {
        card.classList.toggle("bg-dark");
        card.classList.toggle("border-secondary");
    });


    // Bottom borders
    document.querySelectorAll(".border-bottom").forEach(border =>
    {
        border.classList.toggle("border-secondary");
    });


    // Dark & light buttons
    document.querySelectorAll(".btn-dark, .btn-light").forEach(btn => 
    { 
        btn.classList.toggle("btn-dark");
        btn.classList.toggle("btn-light");
    });

    document.querySelectorAll(".btn-outline-dark, .btn-outline-light").forEach(btn => 
    { 
        btn.classList.toggle("btn-outline-dark");
        btn.classList.toggle("btn-outline-light");
    });
}


let demoPageAlert = false;
function onDemoPageClick(e)
{
    if(demoPageAlert) return;

    e.preventDefault();

    Swal.fire(
    {
        icon: 'info',
        title: 'Antes de...',
        text: "Las páginas demo son solo snapshots visuales de la página original, no intentan imitar la funcionalidad de la misma.",
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Entendido'
    })
    .then((result) =>
    {
        const link = e.target.parentElement.getAttribute("href");
        window.open(link, ":blank");
    });

    demoPageAlert = true;
}