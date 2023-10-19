const { useState, useEffect } = React;


const stacks =
{
    ajax:           {nombre: "AJAX", icon: "ajax.png"},
    api:            {nombre: "API", icon: "api.png"},
    aws:            {nombre: "AWS", icon: "aws.png", title: "Amazon Web Services"},
    bootstrap:      {nombre: "Bootstrap", icon: "bootstrap.png", title: "Bootstrap 5"},
    css:            {nombre: "CSS", icon: "css.png", title: "CSS3"},
    sass:           {nombre: "SASS", icon: "sass.png", title: "SASS"},
    html:           {nombre: "HTML", icon: "html.png", title: "HTML5"},
    jquery:         {nombre: "JQuery", icon: "jquery.png"},
    javascript:     {nombre: "JavaScript", icon: "javascript.png"},
    mercadopago:    {nombre: "MercadoPago", icon: "mercadopago.png", title: "SDK de MercadoPago"},
    mysql:          {nombre: "MySQL", icon: "mysql.png"},
    nodejs:         {nombre: "Node.js", icon: "nodejs.png"},
    react:          {nombre: "React", icon: "react.png", title: "Reactjs"},
    reactnative:    {nombre: "React Native", icon: "react.png"},
    expo:           {nombre: "Expo", icon: "expo.png", title: "Expo App"},
    sqlite:         {nombre: "SQLite", icon: "sqlite.png"},
    php:            {nombre: "PHP", icon: "php.png"},
    mailchimp:      {nombre: "Mailchimp", icon: "mailchimp.png"},
    restful:        {nombre: "RESTful API", icon: "restapi.png"},
    sass:           {nombre: "SASS", icon: "sass.png"},
    springboot:     {nombre: "Spring Boot", icon: "springboot.png"},
}

const mainProjects = 
[
    {
        nombre: "DyETechnology",
        descripcion: "Proyecto final de la carrera, donde, en un grupo de 3 estudiantes, desarrollamos un punto de ventas para un negocio local. El objetivo fue atender la necesidad de un cliente de poder llevar un registro de sus productos, ingresos, egresos, catálogos, etc.\nIngresé al proyecto en mitad de su desarrollo. Mi labor estuvo enfocado en el backend, donde tuve que solucionar errores del sistema, corregir bugs, añadir nuevas características y mejorar la calidad general del código. Así como también aportar ideas y ayudar a mis compañeros las demás áreas del proyecto.",
        imagenes: ["dyetechnology_1.jpg", "dyetechnology_1.jpg", "dyetechnology_3.jpg"],
        stacks: [stacks.springboot, stacks.mysql, stacks.bootstrap, stacks.javascript, stacks.jquery],
        repo: "https://github.com/AlexanderTHC/DyETechnology_v1.0",
    },
    {
        nombre: "eCommerce",
        descripcion: "Aplicación web e-commerce diseñada para la venta de hardware online. Las compras se realizan utilizando MercadoPago, implementando su Webhook para detectar los pagos recibidos y registrarlos en el sistema.\nLos clientes pueden registrarse, iniciar sesión, añadir productos a su carrito de compras, añadir sus domicilios, editar su perfil, etc. Cuenta con panel administrativo para crear, editar y eliminar productos, ver todas las órdenes y ver la lista de usuarios registrados.",
        imagenes: ["ecommerce_1.jpg", "ecommerce_2.jpg", "ecommerce_3.jpg", "ecommerce_4.jpg", "ecommerce_5.jpg", "ecommerce_6.jpg", "ecommerce_7.jpg", "ecommerce_8.jpg", "ecommerce_9.jpg", "ecommerce_10.jpg", ],
        stacks: [stacks.mercadopago, stacks.springboot, stacks.mysql, stacks.javascript, stacks.bootstrap],
        repo: "https://github.com/enzogsierra/ecommerce",
    },
    {
        nombre: "Contactbook",
        descripcion: "Aplicación web full stack implementando React con Spring Boot. Trata de una agenda de contactos que envía peticiones a un controlador (RESTful API) para crear, editar o eliminar contactos. Mientras el backend se encarga de controlar las peticiones, entidades, validaciones, errores de excepción, y manejar toda la información necesaria para devolver una respuesta al cliente. La hice para reforzar mis conocimientos en React.",
        imagenes: ["contactbook_1.jpg", "contactbook_2.jpg"],
        stacks: [stacks.springboot, stacks.nodejs, stacks.react, stacks.mysql, stacks.javascript, stacks.bootstrap],
        repo: "https://github.com/enzogsierra/contactbook",
    },
    {
        nombre: "Gymanagr",
        descripcion: "Aplicación móvil que programé para un gimnasio local.\nLleva un registro completo de los clientes, sus cuotas (cuándo pagaron, cuándo vencen, etc) y su historial de pagos. Además incluye una vista para mostrar los pagos recibidos y filtrar pagos por mes, permitiendo al cliente llevar un registro claro de las ganancias mensuales del gimnasio.\nLa aplicación es compatible con Android y iPhone. Construida en React Native y SQLite.",
        stacks: [stacks.nodejs, stacks.reactnative, stacks.expo, stacks.sqlite],
        imagenes: ["gymanagr_1.jpg", "gymanagr_2.jpg", "gymanagr_3.jpg"],
        repo: "https://github.com/enzogsierra/gymanagr",
    },
    {
        nombre: "Clinica Dental",
        descripcion: "Software diseñado específicamente para una clínica dental.\nPermite al cliente poder visualizar y agendar turnos de una manera rápida e intuitiva, ver una lista de los pacientes, sus turnos agendados, tratamientos, pagos, financiamientos, entre otras muchas características.\nEstá construida en Spring Boot, pero utiliza Electron.js para ejecutarse como una aplicación de escritorio y funcionar sin necesidad de Internet.",
        imagenes: ["clinicadental_1.jpg", "clinicadental_2.jpg", "clinicadental_3.jpg", "clinicadental_4.jpg", "clinicadental_5.jpg", "clinicadental_6.jpg", "clinicadental_7.jpg"],
        stacks: [stacks.springboot, stacks.mysql, stacks.javascript, stacks.jquery, stacks.bootstrap],
        repo: "https://github.com/enzogsierra/contactbook",
    },
    {
        nombre: "Bienes Raíces",
        descripcion: "Aplicación web para la compraventa de propiedades e inmuebles. La página principal muestra información, propiedades en venta y sus características, contacto y blog. Con sistema de registro y panel administrativo, entre otros.",
        stacks: [stacks.springboot, stacks.mysql, stacks.javascript, stacks.css],
        imagenes: ["/bienes-raices.jpg"],
        repo: "https://github.com/enzogsierra/bienes-raices",
    },
    {
        nombre: "GDLWEBCAMP",
        descripcion: "Página web anunciando una conferencia de diseño web. Muestra los eventos y fechas, invitados, un mapa del lugar, testimoniales, conteo regresivo hasta el evento, etc. Los usuarios pueden seleccionar tickets, elegir a los eventos que quieran asistir, seleccionar regalos, entre otros.",
        stacks: [stacks.springboot, stacks.mysql, stacks.javascript, stacks.jquery, stacks.css],
        pagina: {url: "https://enzogsierra.github.io/gdlwebcamp/", imagen: "/gdlwebcamp.jpg"},
        repo: "https://github.com/enzogsierra/bienes-raices",
    },
    {
        nombre: "Barbershop",
        descripcion: "Aplicación web para el manejo de una barbería. Los usuarios pueden seleccionar servicios y una fecha para hacer una reservación. El panel administrativo permite ver las reservaciones hechas con fecha y datos del cliente, crear, editar y eliminar servicios. Cuenta con sistema de inicio de sesión, registro con verificación por email (tokens), recuperación de contraseña, etc.\nNOTA: en la página demo puedes poner cualquier credencial para ingresar.",
        stacks: [stacks.mailchimp, stacks.php, stacks.nodejs, stacks.mysql, stacks.javascript, stacks.sass, stacks.bootstrap],
        pagina: {url: "https://enzogsierra.github.io/barbershop/", imagen: "barbershop.jpg"},
        repo: "https://github.com/enzogsierra/barbershop",
    },
    {
        nombre: "Cinetrailer",
        descripcion: "Sitio web para ver los próximos estrenos de películas. Muestra el póster de la película, su sinposis, fecha de estreno, los géneros al que pertenece y te permite filtrar películas por género. Incluye un botón para ver el trailer de la película dentro del mismo sitio web. El panel administrativo te permite crear, editar y eliminar películas, además de poder subir imágenes y almacenarlas directamente en el sitio.",
        stacks: [stacks.springboot, stacks.mysql, stacks.javascript, stacks.css],
        pagina: {url: "https://enzogsierra.github.io/cinetrailer-spring/", imagen: "/cinetrailer.jpg"},
        repo: "https://github.com/enzogsierra/cinetrailer-spring",
    },
];


function Proyectos() 
{
    const [proyectos, setProyectos] = useState(mainProjects);

    return (
        <>
        {
            proyectos.map((proyecto, proyectoIndex) =>
            {
                return (
                    <div className="mb-3" key={proyecto.nombre}>
                        <div className="py-5 row row-cols-1 row-cols-lg-2 gy-3 border-bottom">
                            <div className="col">
                                <div className="h-100 d-flex flex-column justify-content-between gap-3">
                                    <div>
                                        <h3 className="fw-bold text-uppercase text-center">{proyecto.nombre}</h3>

                                        <p className="mb-1 text-pre-line">{proyecto.descripcion}</p>
                                    </div>

                                    <div>
                                        <div className="mb-3 d-flex flex-wrap justify-content-center gap-3">
                                        {
                                            proyecto.stacks.map((stack, stackIndex) =>
                                            {
                                                return (
                                                    <div className="d-flex flex-column align-items-center gap-2" key={stack.nombre}>
                                                        <img 
                                                            src={"/src/img/icons/" + stack.icon} 
                                                            alt="Icono"
                                                            style={{height: "32px"}}
                                                            title={stack.title || stack.nombre}
                                                        />

                                                        <h6 className="m-0"><span className="badge bg-secondary">{stack.nombre}</span></h6>
                                                    </div>
                                                );
                                            })
                                        }
                                        </div>

                                        <a href={proyecto.repo} className="btn btn-outline-primary w-100 fw-semibold text-uppercase" target="_blank">
                                            <div className="d-flex align-items-center justify-content-center gap-2">
                                                <i className="bx bxl-github fs-5"></i>
                                                <span>Ver código</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col">
                            {proyecto.imagenes &&
                                <div id={`galeria-${proyectoIndex}`}>
                                {
                                    proyecto.imagenes.map((imagen, imagenIndex) =>
                                    {
                                        return (
                                            <a href={'/src/img/proyectos/' + imagen} className={imagenIndex != 0 ? "d-none" : ""} key={imagenIndex}>
                                                <img src={'/src/img/proyectos/' + imagen} className="img-demoPage" loading="lazy"/>
                                            </a>
                                        );
                                    })
                                }

                                { Fancybox.bind(`#galeria-${proyectoIndex} a`, {groupAll: true}) }
                                </div>
                            }

                            {proyecto.pagina &&
                                <a href={proyecto.pagina.url} target="_blank" title="Ver página demo" onClick={() => onDemoPageClick()}>
                                    <img src={'/src/img/proyectos/' + proyecto.pagina.imagen} className="img-demoPage" loading="lazy"/>
                                </a>
                            }
                            </div>
                        </div>
                    </div>
                );
            })
        }
        </>
    );
}

const rootElement = document.querySelector("#proyectos_container");
ReactDOM.render(<Proyectos/>, rootElement);