// Cuando hace click en el button de darkmode
function onToggleDarkMode()
{
    const html = document.documentElement;

    if(html.getAttribute("data-bs-theme") == "dark") // Modo oscuro activo, pasar los btns light a dark
    {
        document.querySelectorAll(".btn-light").forEach(btn =>
        {
            btn.classList.remove("btn-light");
            btn.classList.add("btn-dark");
        });

        document.querySelectorAll(".btn-outline-light").forEach(btn =>
        {
            btn.classList.remove("btn-outline-light");
            btn.classList.add("btn-outline-dark");
        });

        html.setAttribute("data-bs-theme", "light");
    }
    else // Modo claro activo, pasar los btns dark a light
    {
        document.querySelectorAll(".btn-dark").forEach(btn =>
        {
            btn.classList.remove("btn-dark");
            btn.classList.add("btn-light");
        });

        document.querySelectorAll(".btn-outline-dark").forEach(btn =>
        {
            btn.classList.remove("btn-outline-dark");
            btn.classList.add("btn-outline-light");
        });

        html.setAttribute("data-bs-theme", "dark");
    }
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
        text: "Los sitios demo son solo snapshots visuales, no intentan imitar el funcionamiento completo del proyecto.",
        showCancelButton: false,
        confirmButtonText: 'Entendido'
    })
    .then((result) =>
    {
        if(result.isConfirmed)
        {
            const a = e.target;
            const href = a.getAttribute("href");
            window.open(href, ":blank");
            demoPageAlert = true;
        }
    });
}