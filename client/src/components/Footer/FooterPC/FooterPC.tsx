import "./FooterPC.css"

function FooterPC() {
    const dateNow = new Date().getFullYear();

    return (
        <section className="FooterPC">
         <p className="CopyrightPC"> 
                 <span className="DateLogPC">
                     {dateNow === 2024 ? `©2024 ` : `©2024 - ${dateNow} `}
                 </span>
             - l'Atelier Photo Montpellier. Tous droits réservés.
         </p>
        </section>
    )
}

export default FooterPC
