import React from 'react'
import style from './service.module.css'
import Text from '../Text/Text'
import Button from '../Button/Button'

const Service = ({ title, description, icon, variant='primary' }) => {
    let classVar = {};

    switch (variant) {
        case 'primary':
            classVar = {
                serviceWrapper: style.serviceWrapper,
                textWrapper: style.textWrapper,
                imgWrapper: style.imgWrapper,
                btnWrapper: style.btnWrapper,
            }
            break;
        case 'secondary':
            classVar = {
                serviceWrapper: style.serviceWrapperSecondary,
                textWrapper: style.textWrapperSecondary,
                imgWrapper: style.imgWrapperSecondary,
                btnWrapper: style.btnWrapperSecondary,
            }
            break;
        case 'featured':
            classVar = {
                serviceWrapper: style.serviceWrapperFeatured,
                textWrapper: style.textWrapperFeatured,
                imgWrapper: style.imgWrapperFeatured,
                btnWrapper: style.btnWrapperFeatured,
            }
            break;
        default:
            break;
    }

    return (
        <div className={classVar.serviceWrapper}>
            <div className={classVar.textWrapper}>
                <Text
                    text={title}
                    fontSize='3.92rem'
                    marginBottom='2rem'
                    variant='h2'
                    // textAlign='center'
                />
                <Text 
                    text={description}
                    fontWeight='800'
                    variant='featured-txt'
                    marginBottom='3rem'
                />
            </div>
            <div className={classVar.imgWrapper}>
                <img src={icon} width='100%' height='100%' />
            </div>
            <div className={classVar.btnWrapper}>
                <Button
                    title='sign up for free'
                    varaint='secondary-filled'
                    classname={style.btn}
                />
                {variant!='secondary' && <Button
                    title='find out more'
                    varaint='primary'
                    classname={style.btnSecondary}
                />}
                
            </div>
        </div>
    )
}

export default Service