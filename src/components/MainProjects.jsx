import React, { useEffect, useState } from "react";
import MainProject from "./MainProject";
import {Stacks} from "../utils/Stacks";
import {Socials} from "../utils/Socials";


export default function MainProjects()
{
    const [projects, setProjects] = useState([]);

    useEffect(() =>
    {
        setProjects(
        [
            {
                name: "Punto de Ventas",
                title: "Desarrollador full-stack freelance",
                date: "Mar 2024 - May 2024",
                description: "Software desarrollado para el local 'Burbujitas Anto' el cual les permitió facilitar la gestión integral de sus productos, ventas y finanzas. El sistema está alojado en la nube, por lo que es accesible desde cualquier dispositivo móvil o PC en cualquier parte del mundo.",
                tasks:
                [
                    "Registro de productos con múltiples precios, incluyendo opciones para mayoristas y revendedores.",
                    "Registro detallado de las ventas, compras y otros gastos varios.",
                    "Sección de resumen que muestra ganancias, pérdidas y productos más vendidos de manera intuitiva"
                ],
                instagram: "/burbujitas_anto",
                imagesPath: ["/burbujitas_anto/"],
                imagesSize: 5,
                stacks: [Stacks.springboot, Stacks.mysql, Stacks.bootstrap, Stacks.javascript, Stacks.jquery, Stacks.aws]
            },
            // {
            //     name: "Reservar Cancha",
            //     title: "Desarrollador full-stack freelance",
            //     description: "Software as a service (SaaS) para clubes que desean alquilar y gestionar las horas de sus canchas de manera completamente online.",
            //     list:
            //     [
            //         "Permite a los usuarios reservar canchas a través de la página web",
            //         "Los clubes pueden gestionar completamente sus complejos deportivos mediante un panel de control moderno e intuitivo"
            //     ],
            //     date: "Nov 2023 - Dic 2023",
            //     tasks:
            //     [
            //         "Lideré la implementación de la pasarela de pagos usando MercadoPago-SDK",
            //         "Despleguécon éxito la aplicación web completa (Spring Boot, React y MySQL) en AWS y Vercel",
            //         "Lideré la implementación de la pasarela de pagos usando MercadoPago-SDK",
            //         "Contribuí en el frontend diseñando vistas y solucionando errores"
            //     ],
            //     imagesPath: ["/gymanagr/"],
            //     imagesSize: 3,
            //     stacks: [Stacks.springboot, Stacks.nodejs, Stacks.react, Stacks.mysql, Stacks.bootstrap, Stacks.javascript]
            // },
            {
                name: "Ecopay - Billetera virtual",
                title: "Desarrollador back-end",
                date: "Feb 2024 - Mar 2024",
                description: "Aplicación de billetera virtual diseñada para facilitar pagos electrónicos y la gestión de finanzas personales. Este proyecto fue desarrollado en colaboración con un equipo multidisciplinario.",
                list:
                [
                    "Participé en el diseño, estructuración y análisis de las entidades, asegurando una base de datos organizada y eficiente.",
                    "Trabajé estrechamente con el equipo frontend para integrar las funcionalidades de autenticación.",
                    "Asistí eficientemente en la resolución de problemas técnicos durante las sesiones de trabajo en equipo, aportando ideas y soluciones para optimizar el rendimiento y la seguridad del sistema."
                ],
                imagesPath: "/ecopay/",
                imagesSize: 4,
                stacks: [Stacks.springboot, Stacks.react, Stacks.mysql, Stacks.bootstrap, Stacks.javascript, Stacks.mercadopago, Stacks.aws, Stacks.vercel]
            },
            {
                name: "Opal indumentarias",
                title: "Desarrollador back-end",
                date: "Oct 2023 - Dic 2023",
                description: "Tienda de indumentarias con compras a través de Internet. Trabajé en el área del backend en un equipo de 4 personas.",
                list:
                [
                    "Lideré la implementación de la pasarela de pagos usando el SDK de MercadoPago",
                    "Ayudé en la creación y diseño de entidades, servicios y controladores.",
                    "Desplegué con éxito la aplicación web completa (Spring Boot, React y MySQL) en AWS y Vercel.",
                    "Contribuí en el frontend diseñando algunas vistas y solucionando errores."
                ],
                imagesPath: "/opal/",
                imagesSize: 2,
                stacks: [Stacks.springboot, Stacks.react, Stacks.mysql, Stacks.bootstrap, Stacks.javascript, Stacks.mercadopago, Stacks.aws, Stacks.vercel]
            },
            {
                name: "Clinica Dental",
                title: "Desarrollador de software freelance",
                date: "Abr 2023 - Sep 2023",
                description: "Software offline diseñado específicamente para una clínica dental. Permite al recepcionista agendar y controlar turnos de manera rápida e intuitiva, gestionar pacientes con todos sus detalles, crear financiamientos con cuotas, etc.",
                imagesPath: ["/clinicadental/"],
                imagesSize: 7,
                stacks: [Stacks.springboot, Stacks.mysql, Stacks.bootstrap, Stacks.javascript, Stacks.jquery]
            },
            {
                name: "Gymanagr",
                title: "Desarrollador de aplicación freelance",
                date: "Dic 2022 - Feb 2023",
                description: "Aplicación móvil desarrollada para un gimnasio que gestiona más de 200 clientes mensualmente, permitiendo a nuestro cliente controlar membresías, registrar pagos y administrar las finanzas del establecimiento con una interfaz sumanente sencilla y rápida. La aplicación funciona completamente offline.",
                instagram: "/olimpo_gym22",
                imagesPath: ["/gymanagr/"],
                imagesSize: 3,
                stacks: [Stacks.reactnative, Stacks.nodejs, Stacks.sqlite, Stacks.expo]
            },
            {
                name: "DyETechnology",
                title: "Desarrollador back-end",
                date: "Ago 2022 - Ene 2023",
                description: "Ecommerce creado para un local de tecnología el cual permitió a nuestro cliente y a sus empleados agilizar los procesos de ventas al tener un mejor control sobre los productos, información de precios, las órdenes de compras realizadas, etc. Fue desarrollado en un grupo de 3 personas donde fui el el encargado del backend.",
                instagram: "/dyetechnology",
                imagesPath: ["/dyetechnology/"],
                imagesSize: 3,
                stacks: [Stacks.springboot, Stacks.github, Stacks.mysql, Stacks.bootstrap, Stacks.javascript, Stacks.jquery]
            },
            {
                name: "Ecommerce",
                title: "Desarrollador web freelance",
                date: "Abr 2022 - Ago 2022",
                description: "Aplicación web e-commerce diseñada para la venta de hardware online. Las compras se realizan utilizando MercadoPago, implementando su Webhook para detectar los pagos recibidos y registrarlos en el sistema. Los clientes pueden registrarse e iniciar sesión (a través de un formulario o usando OAuth2 de Google/Facebook), añadir productos a su carrito de compras, añadir sus domicilios, editar su perfil, etc. Cuenta con panel administrativo completo del sistema.",
                instagram: "/tio_tech",
                imagesPath: ["/ecommerce/"],
                imagesSize: 10,
                stacks: [Stacks.springboot, Stacks.mysql, Stacks.bootstrap, Stacks.javascript, Stacks.jquery]
            },
        ]);
    }, []);

    
    return (
        <main className="container-xl py-5" id="experiencia">
            <h2 className="mb-4 fw-medium text-uppercase text-center">Experiencia profesional</h2>

            {projects && projects.map((project, index) =>
            {
                return (
                    <React.Fragment key={index}>
                        <MainProject project={project} key={index}> </MainProject>
                    </React.Fragment>
                );
            })}

            <div className="my-3">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                    <a href={Socials.linkedin.link} className="btn btn-lg btn-primary px-4 fw-semibold" target="_blank" rel="external noopener noreferrer">
                        <div className="d-flex align-items-center justify-content-center gap-2">
                            <i className={Socials.linkedin.icon}></i>
                            <span>LinkedIn</span>
                        </div>
                    </a>

                    <a href="/assets/cv_enzosierra.pdf" className="btn btn-lg btn-danger px-4 fw-semibold" target="_blank">
                        <div className="d-flex align-items-center justify-content-center gap-2">
                            <i className="bi bi-card-list"></i>
                            <span>Ver CV</span>
                        </div>
                    </a>
                </div>
            </div>
        </main>
    );
}
