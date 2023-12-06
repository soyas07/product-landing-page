import React from 'react'
import style from './price.module.css'
import Text from '../Text/Text'
import btnStyle from '../Button/button.module.css'
import Button from '../Button/Button'

const Price = ({ title, subtitle, price='0', img, type }) => {
    const features = [
        'Only 2 Operators',
        'Abandoned Cart',
        'Facebook & Instagram Ads',
        'Order Notifications',
        'Landing Pages'
    ];

    return (
        <div className={style.priceContainer}>
            <Text
                text={title}
                fontSize='1.92rem'
                variant='h2'
                textAlign='center'
                fontWeight='800'
            />
            <Text
                text={subtitle}
                fontSize='.92rem'
                marginBottom='2rem'
                variant='h4'
                textAlign='center'
                fontWeight='600'
            />
            <img src={img} alt='package' id={style.priceImg} style={{marginBottom:'2rem'}}/>
            <div className={style.priceWrapper}>
                <Text 
                    text={price}
                    fontSize='4rem'
                    variant='h2'
                    fontWeight='800'
                    color='#30D7BA'
                    textAlign='center'
                    marginTop='1.3rem'
                    marginRight='.5rem'
                />
                <div className={style.priceMonthWrapper}>
                    <Text
                        text='$'
                        fontSize='2.5rem'
                        variant='h2'
                        fontWeight='800'
                        color='#30D7BA'
                    />
                    <Text
                        text='Per/ month'
                        fontSize='1rem'
                        variant='h4'
                        fontWeight='400'
                        textAlign='center'
                        marginTop='-1rem'
                    />
                </div>
            </div>
            <ul className={style.featureWrapper}>
                {features.map((feature, index) => {
                    let fontWeight = 600, color = 'black';
                    if (type == 'beginner') {
                        if (index == 3 || index == 4) {
                            fontWeight = 400;
                            color = '#5C5C5C';
                        }
                    } else if (type == 'intermediate') {
                        if (index == 4) {
                            fontWeight = 400;
                            color = '#5C5C5C';
                        }
                    }
                    return <li className={style.featureList} style={{fontWeight, color}}>{feature}</li>
                })}
            </ul>
            <Button
                title='Order Now'
                varaint='secondary-filled'
                classname={btnStyle.btn}
                width='230px'
                marginBottom='2rem'
            />
        </div>
    )
}

export default Price