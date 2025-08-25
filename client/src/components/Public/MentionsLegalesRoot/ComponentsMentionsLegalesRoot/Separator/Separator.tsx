import css from './Separator.module.css';

function Separator() {
    return (
        <div className={css.ContainerSeparator}>
            <hr className={css.Separator}/>
        </div>
    );
}

export default Separator;
