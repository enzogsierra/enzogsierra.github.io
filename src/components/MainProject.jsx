import {useEffect, useState} from "react";
import {Fancybox} from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';


export default function MainProject({project})
{
    const [slug, setSlug] = useState(null);

    useEffect(() =>
    {
        setSlug(project.name.toLowerCase().replace(" ", "_"));
    }, [project]);

    useEffect(() =>
    {
        if(!slug) return;

        Fancybox.bind("[data-fancybox]");
    }, [slug]);

    return (
        <div className="mb-5">
            <p className="small mb-1 ps-2 fw-bold text-muted">{project.date}</p>

            <div className="p-4 bg-white rounded-4 border border-2 shadow">
                <div className="row gx-5 gy-4">
                    <div className="col-12 col-md-8">
                        <h3 className="mb-0 fs-6 fw-bold text-primary">{project.title}</h3>
                        
                        <hr className="my-3"/>

                        <div className="mb-3 d-flex align-items-center gap-2">
                            <h4 className="mb-0 fs-5 fw-bold">{project.name}</h4>

                            {project.instagram && 
                                <a href={"https://www.instagram.com" + project.instagram} className="btn-unstyled lh-1 text-danger" target="_blank" rel="external noopener noreferrer" title="Instagram">
                                    <i className="bi bi-instagram fs-5 icon-instagram"></i>
                                </a>
                            }
                        </div>

                        <p className="text-black">{project.description}</p>

                        {(project.list) &&
                            <ul style={{listStyleType: "disc"}}>
                            {
                                project.list.map((item, index) =>
                                {
                                    return (
                                        <li className={(index + 1 < project.list.length) ? "mb-1 text-black" : "text-black"} key={index}>{item}</li>
                                    );
                                })
                            }
                            </ul>
                        }

                        <div className="d-flex flex-wrap gap-3">
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
                    </div>

                    <div className="col-12 col-md align-self-center">
                        <div className="rounded-4 border overflow-hidden shadow-lg">
                            {Array.from({length: project.imagesSize}, (_, index) => 
                            (
                                <a href={`/img/projects${project.imagesPath}${index + 1}.jpg`} data-fancybox={`gallery-${slug}`} className={(index !== 0) ? "d-none" : ""} key={index}>
                                    <img src={`/img/projects${project.imagesPath}${index + 1}.jpg`} className="w-100 object-fit-contain" alt={"Imagen de " + project.name} loading="lazy" style={{maxHeight: "15rem"}}/>
                                </a> 
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}