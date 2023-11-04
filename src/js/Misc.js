const { useState, useEffect } = React;

function Misc() 
{
    const [proyectos, setProyectos] = useState([]);

    useEffect(() =>
    {
        setProyectos(
        [
            {
                nombre: "Festival de música",
                descripcion: "Página publicitando un festival de música. Muestra la fecha del evento, los escenarios, artistas, galería de fotos y e información de boletos.\nGulp tasks: minificador de CSS, compresor de imágenes, exportar de jpg > webp, etc.",
                tags: ["hmtl", "sass", "javascript", "node.js"],
                imagen: "festivaldemusica.jpg",
                repo: "https://github.com/enzogsierra/festival-de-musica",
                pagina: "https://enzogsierra.github.io/festival-de-musica/"
            },
            {
                nombre: "Blog de café",
                descripcion: "Página web promocionando un blog de café, mostrando información de recetas, técnicas, cursos, talleres, etc.",
                tags: ["hmtl", "css"],
                imagen: "blogdecafe.jpg",
                repo: "https://github.com/enzogsierra/blogdecafe",
                pagina: "https://enzogsierra.github.io/blogdecafe/"
            },
            {
                nombre: "WeatherApp",
                descripcion: "Aplicación web que muestra información del clima utilizando la ubicación del usuario o buscando por ciudad. Consume la API de weatherstack.com",
                tags: ["hmtl", "css", "javascript", "api"],
                imagen: "weatherapp.jpg",
                repo: "https://github.com/enzogsierra/weatherapp"
            },
            {
                nombre: "Agenda (WIP)",
                descripcion: "Aplicación de escritorio para el manejo de una agenda de contactos.",
                tags: ["java", "java-fx", "mysql"],
                imagen: "agenda.png",
                repo: "https://github.com/enzogsierra/agenda-java"
            },
            {
                nombre: "Calculadora",
                descripcion: "Calculadora similar a la de Windows con todas las operaciones básicas, acepta entradas por teclado.",
                tags: ["java", "java-fx"],
                imagen: "calculadora.png",
                repo: "https://github.com/enzogsierra/calculadora-jfx",
                aplicacion: "https://github.com/enzogsierra/calculadora-jfx/releases"
            },
            {
                nombre: "Snake Game",
                descripcion: "Recreación del mítico juego \"Snake\" para escritorio. Tiene sistema de colisiones y puntaje",
                tags: ["java", "java-fx"],
                imagen: "snakegame.png",
                repo: "https://github.com/enzogsierra/snake-game",
                aplicacion: "https://github.com/enzogsierra/snake-game/releases"
            },
        ]);
    }, []);

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        {
            proyectos.map((proyecto, proyectoIndex) =>
            {
                return (
                    <div className="col" key={proyectoIndex}>
                        <div className="card shadow-sm" key={proyectoIndex}>
                            <img src={'/src/img/misc/' + proyecto.imagen} className="card-img-top border-bottom" alt="Imagen del proyecto"/>

                            <div className="card-body">
                                <h5 className="card-title text-uppercase fw-semibold">{proyecto.nombre}</h5>
                                <p className="card-text text-pre-line">{proyecto.descripcion}</p>
                            
                                <div className="my-3 d-flex flex-wrap justify-content-start gap-1">
                                {
                                    proyecto.tags.map((tag, tagIndex) =>
                                    {
                                        return <h5 className="m-0 badge bg-secondary text-lowercase" key={tagIndex}>{tag}</h5>;
                                    })
                                }
                                </div>

                                <div className="d-flex flex-wrap justify-content-start gap-2">
                                    <a href={proyecto.repo} className="btn btn-primary fw-semibold" target="_blank">
                                        <i className="bx bxl-github align-middle"></i> <span className="align-middle">Código</span>
                                    </a>
                                    {proyecto.aplicacion &&
                                        <a href={proyecto.aplicacion} className="btn btn btn-outline-dark fw-semibold" target="_blank">
                                            <i className="bx bx-package align-middle"></i> <span className="align-middle">Aplicación</span>
                                        </a>
                                    }
                                    {proyecto.pagina &&
                                        <a href={proyecto.pagina} className="btn btn btn-outline-dark fw-semibold" target="_blank">
                                            <i className="bx bx-world align-middle"></i> <span className="align-middle">Sitio demo</span>
                                        </a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        }
        </div>
    );
}

const rootElement = document.querySelector("#misc_container");
ReactDOM.render(<Misc/>, rootElement);