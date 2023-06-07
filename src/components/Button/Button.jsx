import React from 'react'
import style from './button.module.css'

const Button = ({ title, varaint, width, height }) => {
    let classType = '';
    switch (varaint) {
        case 'primary':
            classType = style.primaryBtn;
            break;
        case 'primary-filled':
            classType = style.primaryFilledBtn;
            break;
        case 'secondary':
            classType = style.secondaryBtn;
            break;
        case 'secondary-filled':
            classType = style.secondaryFilledBtn;
            break;
        case 'featured-primary':
            classType = style.featuredPrimary;
            break;
        case 'featured-secondary':
            classType = style.featuredSecondary;
            break;
        default:
            break;
    }

    return (
        <button className={classType} style={{width, height}}>{title}</button>   
    )
}

export default Button