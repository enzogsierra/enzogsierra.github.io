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

function Proyectos() 
{
    const [proyectos, setProyectos] = useState([]);

    useEffect(() =>
    {
        setProyectos(
        [
            {
                nombre: "DyE Technology",
                descripcion: "Punto de ventas creado para un negocio local, que desarrollamos en un grupo de 3 estudiantes utilizando <span class='fw-semibold'>Java Spring</span>. El proyecto permitió a nuestro cliente y a sus trabajadores agilizar los procesos de ventas al tener un mejor control sobre los productos, información de precios, las órdenes, etc.\n\n" +
                "Utilizamos <span class='fw-semibold'>MySQL</span> y <span class='fw-semibold'>JPA</span> para el manejo de entidades y sus relaciones fueron cuidadosamente inspeccionadas para un óptimo funcionamiento.\nImplementamos <span class='fw-semibold'>Spring Security</span> para identificar a cada usuario del sistema y sus roles en el mismo.\n" +
                "Por la parte del frontend, elegimos <span class='fw-semibold'>Thymeleaf</span> para renderizar las vistas y utilizamos tecnologías como <span class='fw-semibold'>Bootstrap</span>, <span class='fw-semibold'>JQuery</span> y <span class='fw-semibold'>Sweetalert</span> para darle diseño e identidad a la página.\n\n" +
                "El proyecto es el trabajo final de la carrera, en el cual yo ingresé a mitad de su desarrollo y fui responsable de manejar el área backend.\nMi labor estuvo enfocado en:\n" +
                "<ul style='list-style-type: disc;'>" +
                    "<li>Implementar nuevas características, como el buscador avanzado de productos, permitir a los usuarios subir imágenes al servidor, etc;</li>" +
                    "<li>Solucionar varios bugs y errores críticos de la aplicación;</li>" +
                    "<li>Mejorar el código en general y la velocidad de carga de la aplicación;</li>" +
                    "<li>Aportar ideas y ayudar a mis compañeros en las demás áreas del proyecto.</li>" +
                "</ul>",
                imagenes: ["dyetechnology_1.jpg", "dyetechnology_1.jpg", "dyetechnology_3.jpg"],
                stacks: [stacks.springboot, stacks.mysql, stacks.bootstrap, stacks.javascript, stacks.jquery],
                repo: "https://github.com/AlexanderTHC/DyETechnology_v1.0",
            },
            {
                nombre: "Ecommerce",
                descripcion: "Aplicación web e-commerce diseñada para la venta de hardware online. Las compras se realizan utilizando MercadoPago, implementando su Webhook para detectar los pagos recibidos y registrarlos en el sistema.\nLos clientes pueden registrarse e iniciar sesión (a través de un formulario o usando OAuth2 de Google/Facebook), añadir productos a su carrito de compras, añadir sus domicilios, editar su perfil, etc. Cuenta con panel administrativo para crear, editar y eliminar productos, ver todas las órdenes y ver la lista de usuarios registrados.",
                imagenes: ["ecommerce_1.jpg", "ecommerce_2.jpg", "ecommerce_3.jpg", "ecommerce_4.jpg", "ecommerce_5.jpg", "ecommerce_6.jpg", "ecommerce_7.jpg", "ecommerce_8.jpg", "ecommerce_9.jpg", "ecommerce_10.jpg", ],
                stacks: [stacks.mercadopago, stacks.springboot, stacks.mysql, stacks.javascript, stacks.bootstrap],
                repo: "https://github.com/enzogsierra/ecommerce",
            },
            {
                nombre: "Clínica Dental",
                descripcion: "Software diseñado específicamente para una clínica dental.\nPermite al cliente poder visualizar y agendar turnos de una manera rápida e intuitiva, ver una lista de los pacientes, sus turnos agendados, tratamientos, pagos, financiamientos, entre otras muchas características.\nEstá construida en Spring Boot, pero utiliza Electron.js para ejecutarse como una aplicación de escritorio y funcionar sin necesidad de Internet.",
                imagenes: ["clinicadental_1.jpg", "clinicadental_2.jpg", "clinicadental_3.jpg", "clinicadental_4.jpg", "clinicadental_5.jpg", "clinicadental_6.jpg", "clinicadental_7.jpg"],
                stacks: [stacks.springboot, stacks.mysql, stacks.javascript, stacks.jquery, stacks.bootstrap],
                repo: "https://github.com/enzogsierra/clinica-dental",
            },
            {
                nombre: "Gymanagr",
                descripcion: "Aplicación móvil que programé para un gimnasio local.\nLleva un registro completo de los clientes, sus cuotas (cuándo pagaron, cuándo vencen, etc) y su historial de pagos. Además incluye una vista para mostrar los pagos recibidos y filtrar pagos por mes, permitiendo al cliente llevar un registro claro de las ganancias mensuales del gimnasio.\nLa aplicación es compatible con Android y iPhone. Construida en React Native y SQLite.",
                stacks: [stacks.nodejs, stacks.reactnative, stacks.expo, stacks.sqlite],
                imagenes: ["gymanagr_1.jpg", "gymanagr_2.jpg", "gymanagr_3.jpg"],
                repo: "https://github.com/enzogsierra/gymanagr",
            },
            {
                nombre: "Contact Book",
                descripcion: "Aplicación web full stack implementando React con Spring Boot. Trata de una agenda de contactos que envía peticiones a un controlador (RESTful API) para crear, editar o eliminar contactos. Mientras el backend se encarga de controlar las peticiones, entidades, validaciones, errores de excepción, y manejar toda la información necesaria para devolver una respuesta al cliente. La hice para reforzar mis conocimientos en React.",
                imagenes: ["contactbook_1.jpg", "contactbook_2.jpg"],
                stacks: [stacks.springboot, stacks.nodejs, stacks.react, stacks.mysql, stacks.javascript, stacks.bootstrap],
                repo: "https://github.com/enzogsierra/contactbook",
            },
            {
                nombre: "Cinetrailer",
                descripcion: "Sitio web para ver los próximos estrenos de películas. Muestra el póster de la película, su sinposis, fecha de estreno, los géneros al que pertenece y te permite filtrar películas por género. Incluye un botón para ver el trailer de la película dentro del mismo sitio web. El panel administrativo te permite crear, editar y eliminar películas, además de poder subir imágenes y almacenarlas directamente en el sitio.",
                stacks: [stacks.springboot, stacks.mysql, stacks.javascript, stacks.css],
                imagenes: ["cinetrailer.jpg"],
                paginaDemo: "https://enzogsierra.github.io/cinetrailer-spring/",
                repo: "https://github.com/enzogsierra/cinetrailer-spring",
            },
            {
                nombre: "Barbershop",
                descripcion: "Aplicación web para el manejo de una barbería. Los usuarios pueden seleccionar servicios y una fecha para hacer una reservación. El panel administrativo permite ver las reservaciones hechas con fecha y datos del cliente, crear, editar y eliminar servicios. Cuenta con sistema de inicio de sesión, registro con verificación por email (tokens), recuperación de contraseña, etc.\nNOTA: en la página demo puedes poner cualquier credencial para ingresar.",
                stacks: [stacks.mailchimp, stacks.php, stacks.nodejs, stacks.mysql, stacks.javascript, stacks.sass, stacks.bootstrap],
                imagenes: ["barbershop.jpg"],
                repo: "https://github.com/enzogsierra/barbershop",
            },
            {
                nombre: "GDLWEBCAMP",
                descripcion: "Sitio que anuncia una conferencia de diseño web. Muestra un resumen de los eventos disponibles, charlas, fechas y los invitados especiales. Integra varios plugins de JQuery para mejorar la experiencia de usuario, tales como un mapa interactivo del evento, un contador regresivo, una galería con fotos de los invitados, etc. El diseño y la maquetación de la página está escrito completamente desde 0.",
                stacks: [stacks.springboot, stacks.mysql, stacks.javascript, stacks.jquery, stacks.css],
                imagenes: ["gdlwebcamp.jpg"],
                paginaDemo: "https://enzogsierra.github.io/gdlwebcamp/",
                repo: "https://github.com/enzogsierra/gdlwebcamp",
            },
            {
                nombre: "Bienes Raíces",
                descripcion: "Aplicación web para la compraventa de propiedades e inmuebles. La página principal muestra las principales propiedades anunciadas, información de la empresa, un blog, etc. Cuenta con vistas para ver toda la información de una propiedad y un formulario de contacto. Además incluye panel administrativo para controlar las propiedades y ver los formularios de contacto enviados.",
                stacks: [stacks.springboot, stacks.mysql, stacks.javascript, stacks.css],
                imagenes: ["bienes-raices.jpg"],
                repo: "https://github.com/enzogsierra/bienes-raices",
            },
        ]);
    }, []);

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
                                        <h3 className="fw-semibold text-uppercase text-center">{proyecto.nombre}</h3>

                                        <p className="mb-1 text-pre-line" dangerouslySetInnerHTML={{__html: proyecto.descripcion}}></p>
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

                                        <div className="d-flex gap-2">
                                            <a href={proyecto.repo} className="btn btn-primary w-100 fw-semibold text-uppercase text-nowrap" target="_blank">
                                                <div className="d-flex align-items-center justify-content-center gap-2">
                                                    <i className="bx bxl-github fs-5"></i>
                                                    <span>Ver código</span>
                                                </div>
                                            </a>

                                            {proyecto.paginaDemo &&
                                                <a href={proyecto.paginaDemo} className="btn btn-outline-dark fw-semibold text-nowrap" target="_blank" onClick={() => onDemoPageClick()}>
                                                    <div className="d-flex align-items-center justify-content-center gap-2">
                                                        <i className="bx bxl-github fs-5"></i>
                                                        <span>Sitio demo</span>
                                                    </div>
                                                </a>
                                            }
                                        </div>
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
                                                <img src={'/src/img/proyectos/' + imagen} className="proyecto-imagen" alt={"Proyecto " + proyecto.nombre} loading="lazy"/>
                                            </a>
                                        );
                                    })
                                }

                                { Fancybox.bind(`#galeria-${proyectoIndex} a`, {groupAll: true}) }
                                </div>
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