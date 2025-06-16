import style from "../../../StyleRootComponent.module.css";

function PortraitMariageRootComponentA() {
    return (
        <article className={`PortraitMariageRootComponentA ${style.ContainerRoot}`}>
            <h2 className={style.TitleH2}>
                Le Style "Reportage" : Capturer l'Authenticité de Votre Mariage
            </h2>

            <p className={style.TextP4}>
                Loin des photos posées et figées, je privilégie un style de
                <span className={style.SpanBold}>
                    {" reportage photographique "}
                </span> 
                qui met l'accent sur
                <span className={style.SpanBold}>
                    {" l'instantanéité "}
                </span>
                et
                <span className={style.SpanBold}>
                    {" l'authenticité. "}
                </span> 
                Mon rôle est de vous accompagner tout au long de votre journée sans perturber le fil naturel 
                des événements. J’agis en toute discrétion, en capturant les moments tels qu’ils se produisent : 
                un regard échangé, une main tendue, un éclat de rire ou une larme discrète.
            </p>
            <p className={style.TextP4}>
                L’idée n’est pas seulement de réaliser des clichés, mais de 
                <span className={style.SpanBold}>
                    {" raconter votre histoire. "}
                </span> 
                Celle de votre journée exceptionnelle, remplie de moments fugaces mais d’une immense signification. 
                Vous pourrez revivre ces instants chaque fois que vous regarderez les photos, avec la même émotion que 
                lors du mariage.
            </p>
        </article>
    );
}

export default PortraitMariageRootComponentA;
