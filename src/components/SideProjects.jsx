import React, { useEffect, useState } from "react";
import SideProject from "./SideProject";
import { Stacks } from "../utils/Stacks";


export default function SideProjects()
{
    const [projects, setProjects] = useState([]);

    useEffect(() =>
    {
        setProjects(
        [
            {
                name: "Bienes Raíces",
                description: "Aplicación web para compraventa de inmuebles, con anuncios destacados, blog, vistas detalladas de propiedades y formulario de contacto.",
                imagePath: "bienes-raices.jpg",
                repositoryName: "bienes-raices",
                demoPage: "",
                stacks: [Stacks.springboot, Stacks.mysql, Stacks.bootstrap, Stacks.javascript, Stacks.jquery]
            },
            {
                name: "GDLWEBCAMP",
                description: "Sitio web para una conferencia de diseño web con resumen de eventos, fechas, invitados y funcionalidades interactivas.",
                imagePath: "gdlwebcamp.jpg",
                repositoryName: "gdlwebcamp",
                demoPage: "https://enzogsierra.github.io/gdlwebcamp/",
                stacks: [Stacks.springboot, Stacks.mysql, Stacks.bootstrap, Stacks.javascript, Stacks.jquery]
            },
            {
                name: "Barbershop",
                description: "Aplicación web para barbería, permitiendo a los usuarios reservar fechas y elegir los servicios de barbería deseados.",
                imagePath: "barbershop.jpg",
                repositoryName: "barbershop",
                demoPage: "",
                stacks: [Stacks.springboot, Stacks.mysql, Stacks.bootstrap, Stacks.javascript, Stacks.jquery]
            },
            {
                name: "Festival de Música",
                description: "Página publicitando un festival de música. Muestra la fecha del evento, los escenarios, artistas, galería de fotos y e información de boletos.",
                imagePath: "festival-de-musica.jpg",
                repositoryName: "festival-de-musica",
                demoPage: "https://enzogsierra.github.io/festival-de-musica/",
                stacks: [Stacks.springboot, Stacks.mysql, Stacks.bootstrap, Stacks.javascript, Stacks.jquery]
            },
            {
                name: "Blog del Café",
                description: "Página web promocionando un blog de café, mostrando información de recetas, técnicas, cursos, talleres, etc.",
                imagePath: "blogdecafe.jpg",
                repositoryName: "blogdecafe",
                demoPage: "https://enzogsierra.github.io/blogdecafe/",
                stacks: [Stacks.springboot, Stacks.mysql, Stacks.bootstrap, Stacks.javascript, Stacks.jquery]
            },
            {
                name: "Snake Game",
                description: "Recreación del mítico juego 'Snake' para escritorio. Tiene sistema de colisiones y puntaje",
                imagePath: "snake-game.jpg",
                repositoryName: "snake-game",
                application: "https://github.com/enzogsierra/snake-game/releases",
                stacks: [Stacks.springboot, Stacks.mysql, Stacks.bootstrap, Stacks.javascript, Stacks.jquery]
            },
        ]);
    }, []);

    
    return (
        <main className="container-xl py-5" id="proyectos">
            <h2 className="mb-4 fw-medium text-uppercase text-center">Proyectos académicos</h2>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {projects.map((project, index) =>
                {
                    return (
                        <div className="col" key={index}>
                            <SideProject project={project} key={index}> </SideProject>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
