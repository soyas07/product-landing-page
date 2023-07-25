import React from 'react'
import style from './featured.module.css'
import Text from '../Text/Text'

const Featured = ({ icon, title, description, type='primary', marginBottom }) => {
    if (type == 'primary')
        return (
            <div className={style.featuredWrapper} style={{marginBottom}}>
                <div className={style.featuredIcon}>
                    <img src={icon} width='100%' height='100%' />
                </div>
                <Text
                    text={title}
                    variant='h3'  
                    color='black'
                    fontWeight='700'
                    textAlign='center'
                    marginBottom='2rem'
                />
                <Text
                    text={description}
                    variant='featured-txt'  
                    color='#5C5C5C'
                    fontWeight='500'
                    textAlign='center'
                    marginBottom='2rem'
                />
                <Text
                    text='Learn More'
                    variant='featured-txt'  
                    color='#03D6F3'
                    fontWeight='500'
                    textAlign='center'
                    marginBottom='2rem'
                />
            </div>
        )
    else 
        return (
            <div className={style.featuredWrapperSecondary} style={{marginBottom}}>
                <div className={style.featuredIcon}>
                    <img src={icon} width='100%' height='100%' style={{fill:"white"}} />
                </div>
                <Text
                    text={title}
                    variant='h3'  
                    color='white'
                    fontWeight='700'
                    textAlign='center'
                    marginBottom='2rem'
                />
                <Text
                    text={description}
                    variant='featured-txt'  
                    color='white'
                    fontWeight='500'
                    textAlign='center'
                    marginBottom='2rem'
                />
                <Text
                    text='Learn More'
                    variant='featured-txt'  
                    color='white'
                    fontWeight='500'
                    textAlign='center'
                    marginBottom='2rem'
                />
            </div>
        )
}

export default Featured