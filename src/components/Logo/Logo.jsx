import style from './logo.module.css';
import logo from './../../assets/logo.png';
import logoWhite from './../../assets/logo-white.png';

const Logo = ({ type }) => {
    return (
        <div className={style.logo}>
            <img width="100%" height="100%" src={type=='primary' ? logo : logoWhite} alt="figma-land" />
        </div>
    )
}

export default Logo