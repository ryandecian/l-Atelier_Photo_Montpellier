/* Import des modules CSS */
import css from './separator.module.css';

function Separator_Component() {
    return (
        <div className={css.ContainerSeparator}>
            <hr className={css.Separator}/>
        </div>
    );
}

export { Separator_Component };
