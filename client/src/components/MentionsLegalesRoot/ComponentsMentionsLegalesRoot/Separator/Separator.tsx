import style from './Separator.module.css';

function Separator() {
    return (
        <div className={style.ContainerSeparator}>
            <hr className={style.Separator}/>
        </div>
    );
}

export default Separator;
