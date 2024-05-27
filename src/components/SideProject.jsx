import {Socials} from "../utils/Socials";


export default function SideProject({project})
{
    return (
        <div className="card shadow">
            <img src={"/img/sideprojects/" + project.imagePath} className="card-img-top border-bottom" alt="Imagen del proyecto"/>
            
            <div className="card-body">
                <h5 className="card-title text-uppercase fw-semibold">{project.name}</h5>
                <p className="card-text text-muted text-pre-line">{project.description}</p>

                <div className="my-3 d-flex flex-wrap gap-3 d-none">
                    {project.stacks && project.stacks.map((stack, index) =>
                    {
                        return (
                            <img 
                                src={"/img/icons/" + stack.icon} 
                                title={stack.title ? (stack.title) : (stack.name)} alt={stack.name} 
                                loading="lazy" 
                                style={{height: "24px"}}
                                key={index}
                            />
                        );
                    })}
                </div>

                <div className="d-flex flex-wrap justify-content-start gap-2">
                    {project.repositoryName &&
                        <a href={Socials.github.link + "/" + project.repositoryName} className="btn btn-primary fw-semibold" target="_blank"rel="noopener noreferrer">
                            <div className="btn-icon gap-2">
                                <i className={Socials.github.icon}></i>
                                <span>Código</span>
                            </div>
                        </a>
                    }

                    {project.demoPage &&
                        <a href={project.demoPage} className="btn btn-outline-dark fw-semibold" target="_blank"rel="noopener noreferrer">
                            <div className="btn-icon gap-2">
                                <i className="bi bi-globe-americas"></i>
                                <span>Sitio demo</span>
                            </div>
                        </a>
                    }
                </div>
            </div>
        </div>
    );
}