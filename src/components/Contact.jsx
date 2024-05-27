import { useEffect, useState } from "react";

export default function Contact()
{
    const [social, setSocial] = useState([]);

    useEffect(() =>
    {
        setSocial(
        [
            {brand: "Gmail",    href: "mailto:enzogsierra@gmail.com",               text: "enzogsierra@gmail.com",  imgPath: "/img/logo-gmail.svg"},
            {brand: "LinkedIn", href: "https://www.linkedin.com/in/enzogsierra/",   text: "/in/enzogsierra",        imgPath: "/img/logo-linkedin.svg"},
            {brand: "WhatsApp", href: "http://wa.me/5493644382805",                 text: "+54 9 364 438-2805",     imgPath: "/img/logo-whatsapp.svg"}
        ]);
    }, []);

    return (
        <section className="container-xl my-5 py-5" id="contacto">
            <div className="mb-5 text-center">
                <h2 className="fs-1 fw-medium text-uppercase">Contacto</h2>
                <h5 className="text-muted">Puedes contactarme a través de los siguientes medios</h5>
            </div>

            {social &&
                <div className="d-flex flex-wrap justify-content-center gap-5">
                    {social.map((media, index) =>
                    {
                        return (
                            <div className="d-flex flex-column align-items-center gap-2 scale scale-2" key={index} style={{width: "100%", maxWidth: "15rem"}}>
                                <a href={media.href} className="text-decoration-none" target="_blank" rel="external noopener noreferrer" title={media.title}>
                                    <div className="p-4 d-flex align-items-center justify-content-center border rounded-circle" style={{width: "8rem", height: "8rem"}}>
                                        <img src={media.imgPath} className="w-100" alt={`Logo de ${media.brand}`} title={media.brand}/>
                                    </div>
                                </a>

                                <a href={media.href} className="link-body-emphasis" target="_blank" rel="external noopener noreferrer" title={media.title}>
                                    <h6 className="mb-0 fs-5">{media.text}</h6>
                                </a>
                            </div>
                        );
                    })}
                </div>
            }
        </section>
    );
}