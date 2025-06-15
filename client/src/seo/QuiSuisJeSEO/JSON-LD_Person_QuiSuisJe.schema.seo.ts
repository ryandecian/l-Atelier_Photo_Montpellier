

function JSON_LD_Service_PortraitSolo_Schema_SEO() {
    
    const JSON_LD = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Anne SAUNIER",
        "alternateName": "Photographe Anne SAUNIER",
        "description": "Anne SAUNIER est une photographe professionnelle basée à Montpellier, spécialisée dans les portraits en studio et en extérieur, ainsi que les reportages de mariage. Son approche met l’accent sur l’authenticité, la lumière et l’émotion.",
        "image": "https://www.nom-de-domaine.fr/images/image-qui-suis-je/lapm-photographe-anne-saunier-l-atelier-photo-montpellier.jpg",
        "jobTitle": "Photographe professionnelle",
        "gender": "Female",
        "birthPlace": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Montpellier",
                "addressCountry": "FR"
            }
        },
        "nationality": {
        "@type": "Country",
        "name": "France"
        },
        "worksFor": {
            "@type": "Organization",
            "name": "l'Atelier Photo Montpellier",
            "url": "https://www.nom-de-domaine.fr"
        },
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Studio B612"
        },
        "knowsAbout": [
            "Portrait photo",
            "Photographie studio",
            "Photographie de mariage",
            "Éclairage au flash",
            "Post-traitement numérique",
            "Composition photographique"
        ],
        "sameAs": [
            "https://www.instagram.com/atelierphotomontpellier",
            "https://www.facebook.com/atelierphotomontpellier"
        ],
        "url": "https://www.nom-de-domaine.fr/qui-suis-je"
    })

    return (
        JSON_LD
    )
}

export default JSON_LD_Service_PortraitSolo_Schema_SEO;
