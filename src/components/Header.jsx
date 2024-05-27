import {Socials} from "../utils/Socials";


export default function Header()
{
    return (
        <header className="header py-4">
            <div className="container d-flex flex-column justify-content-between gap-4" style={{height: "80vh"}}>
                <nav className="d-flex justify-content-center gap-4">
                    {Object.values(Socials).map(social =>
                    {
                        return (
                            <a 
                                href={social.link}
                                className="p-3 d-flex align-items-center justify-content-center header-link-icon rounded-circle text-white lh-1"
                                target="_blank"
                                title={social.title}
                                rel="external nofollow noopener noreferrer"
                                key={social.link}
                                >
                                <i className={`${social.icon} fs-2`}></i>
                            </a>
                        );
                    })}
                </nav>

                <div className="text-center text-md-start">
                    <div className="mb-3">
                        <p className="mb-1 lh-1 fs-5 fw-semibold text-uppercase" style={{color: "#d667ff"}}>Desarrollador de software</p>
                        <h1 className="mb-0 lh-1 display-1 fw-bold text-white text-uppercase">Enzo Sierra</h1>
                    </div>

                    <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                        <a href="#contacto" className="btn btn-primary px-5 fw-semibold">
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <i className="bi bi-chat-left-dots"></i>
                                <span>Contacto</span>
                            </div>
                        </a>

                        <a href="#experiencia" className="btn btn-danger px-4 fw-semibold">
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <i className="bi bi-suitcase-lg-fill"></i>
                                <span>Proyectos</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="py-3 py-md-5"></div>
            </div>
        </header>
    );
}