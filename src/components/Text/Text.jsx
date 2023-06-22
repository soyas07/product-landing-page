import React from 'react'
import style from './text.module.css';

const Text = ({ variant, text, fontSize, fontWeight, color, textAlign, marginBottom, maxWidth }) => {
    if (variant == 'h1')
        return <h1 className={style.header1} style={{fontSize,color, fontWeight, textAlign, marginBottom, maxWidth}}>{text}</h1>
    else if (variant == 'h2')
        return <h2 className={style.header2} style={{fontSize,color, fontWeight, textAlign, marginBottom, maxWidth}}>{text}</h2>
    else if (variant == 'h3')
        return <h3 className={style.header3} style={{fontSize,color, fontWeight, textAlign, marginBottom, maxWidth}}>{text}</h3>
    else if (variant == 'h4')
        return <h4 className={style.header4} style={{fontSize,color, fontWeight, textAlign, marginBottom, maxWidth}}>{text}</h4>
    else if (variant == 'btn-txt')
        return <p className={style.btnTxt} style={{fontSize,color, fontWeight, textAlign, marginBottom, maxWidth}}>{text}</p>
    else if (variant == 'small-txt')
        return <p className={style.smallTxt} style={{fontSize,color, fontWeight, textAlign, marginBottom, maxWidth}}>{text}</p>
    else if (variant == 'featured-txt')
        return <p className={style.featuredTxt} style={{fontSize,color, fontWeight, textAlign, marginBottom, maxWidth}}>{text}</p>
    else if (variant == 'link-txt')
        return <p className={style.linkTxt} style={{fontSize,color, fontWeight, textAlign, marginBottom, maxWidth}}>{text}</p>
    else if (variant == 'mobile-txt')
        return <p className={style.mobileTxt} style={{fontSize,color, fontWeight, textAlign, marginBottom, maxWidth}}>{text}</p>
}

export default Text