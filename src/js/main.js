// Cuando hace click en el button de darkmode
function onDarkMode()
{
    // Main
    const body = document.querySelector("body");
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-white");
    

    // Muted texts
    document.querySelectorAll(".text-muted").forEach(input =>
    {
        input.classList.toggle("text-muted");
    });


    // Cards
    document.querySelectorAll(".card").forEach(card =>
    {
        card.classList.toggle("text-bg-dark");
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


// Cuando hace click para abrir una pagina demo
let demoPageAlert = false;
function onDemoPageClick()
{
    if(demoPageAlert) return;

    const e = this.event;
    e.preventDefault();

    Swal.fire(
    {
        icon: 'info',
        title: 'Antes de...',
        text: "Algunas páginas demo son solo snapshots visuales, no intentan imitar la funcionalidad de la misma.",
        showCancelButton: false,
        confirmButtonText: 'Entendido'
    })
    .then((result) =>
    {
        if(result.isConfirmed)
        {
            const link = e.target.parentElement.getAttribute("href");
            window.open(link, ":blank");
        }
    });

    demoPageAlert = true;
}