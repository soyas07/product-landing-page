import React from 'react'
import style from './text.module.css';

const Text = ({ variant, text, fontSize, color }) => {
    if (variant == 'h1')
        return <h1 className={style.header1} style={{fontSize,color}}>{text}</h1>
    else if (variant == 'h2')
        return <h2 className={style.header2} style={{fontSize,color}}>{text}</h2>
    else if (variant == 'h3')
        return <h3 className={style.header3} style={{fontSize,color}}>{text}</h3>
    else if (variant == 'h4')
        return <h4 className={style.header4} style={{fontSize,color}}>{text}</h4>
    else if (variant == 'btn-txt')
        return <span className={style.btnTxt} style={{fontSize,color}}>{text}</span>
    else if (variant == 'small-txt')
        return <span className={style.smallTxt} style={{fontSize,color}}>{text}</span>
    else if (variant == 'featured-txt')
        return <span className={style.featuredTxt} style={{fontSize,color}}>{text}</span>
    else if (variant == 'link-txt')
        return <span className={style.linkTxt} style={{fontSize,color}}>{text}</span>
    else if (variant == 'mobile-txt')
        return <span className={style.mobileTxt} style={{fontSize,color}}>{text}</span>
}

export default Text