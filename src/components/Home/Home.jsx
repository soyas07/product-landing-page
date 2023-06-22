import React from 'react'
import style from './home.module.css'

import Text from '../Text/Text'
import Button from '../Button/Button'

import btnStyle from '../Button/button.module.css'
import mainImg from '../../assets/screen.png'

const Home = () => {
    return (
        <div className={`${style.homeContainer} margin-edge`}>
            <div className={style.titleWrapper}>
                <Text
                    text='Find the Best Solution in Seconds'
                    variant='h1'  
                    color='white'
                    textAlign='center'
                />
            </div>
            <div className={style.subtitleWrapper}>
                <Text 
                    text='If debugging is the process of removing software bugs.'
                    variant='featured-txt'
                    color='#E5E5E5'
                    textAlign='center'
                    fontWeight='700'
                />
            </div>
            <div className={style.btnWrapper}>
                <Button
                    title='get started'
                    varaint='primary-filled'
                    classname={btnStyle.homeBtn}
                />
                <Button
                    title='try for free'
                    varaint='primary'
                    classname={btnStyle.homeBtn}
                />
            </div>
            <div className={style.mainImgWrapper}>
                <img src={mainImg} alt="main-image" width='100%' height='100%' />
            </div>
        </div>
    )
}

export default Home