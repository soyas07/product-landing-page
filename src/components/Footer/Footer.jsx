import React from 'react'
import mapImg from '../../assets/map.png'
import Text from '../Text/Text'
import locationImg from '../../assets/location.svg'
import phoneImg from '../../assets/phone.svg'
import fbImg from '../../assets/fb.svg'
import twitterImg from '../../assets/twitter.svg'
import linkedInImg from '../../assets/linkedin.svg'

const Footer = () => {
    return (
        <footer className='footer-wrapper'>
            <div className='footer-container'>
                <div className='footer-titles'>
                    <Text
                        text='Price Item One'
                        variant='featured-txt'
                        color='white'
                        fontSize='1.2rem'
                        fontWeight='400'
                    />
                    <Text
                        text='Price Item Two'
                        variant='featured-txt'
                        color='white'
                        fontSize='1.2rem'
                        fontWeight='400'
                    />
                    <Text
                        text='Price Item Three'
                        variant='featured-txt'
                        color='white'
                        fontSize='1.2rem'
                        fontWeight='400'
                    />
                    <Text
                        text='Price Item One'
                        variant='featured-txt'
                        color='white'
                        fontSize='1.2rem'
                        fontWeight='400'
                    />
                    <Text
                        text='Price Item Two'
                        variant='featured-txt'
                        color='white'
                        fontSize='1.2rem'
                        fontWeight='400'
                    />
                    <Text
                        text='Price Item Three'
                        variant='featured-txt'
                        color='white'
                        fontSize='1.2rem'
                        fontWeight='400'
                    />
                </div>
                <div className='map-wrapper'>
                    <img style={{ borderRadius:'22px' }} src={mapImg} width='100%' height='100%' />
                </div>
                <div className='social-media-wrapper'>
                    <div style={{ minWidth:'290px',display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'1rem'}}>
                        <div style={{width:'45px', height:'45px'}}>
                            <img src={locationImg} width="100%" height="100%" />
                        </div>
                        <div>
                            <Text 
                                variant='featured-txt'
                                text='7480 Mockingbird Hill, NSW, 2142'
                                fontSize='1.3rem'
                                fontWeight='400'  
                                color='white'  
                            />
                        </div>
                    </div>
                    <div style={{ minWidth:'290px',display:'flex',alignItems:'center',justifyContent:'flex-start',marginBottom:'4rem'}}>
                        <div style={{width:'45px', height:'45px'}}>
                            <img src={phoneImg} width="100%" height="100%" />
                        </div>
                        <div style={{ marginLeft: '1.6rem'}}>
                            <Text 
                                variant='featured-txt'
                                text='(123) 546 - 675'
                                fontSize='1.3rem'
                                fontWeight='400'  
                                color='white'  
                            />
                        </div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={{width:'40px', height:'40px',marginRight:'2rem'}}>
                            <img src={twitterImg} width="100%" height="100%" />
                        </div>
                        <div style={{width:'40px', height:'40px',marginRight:'2rem'}}>
                            <img src={fbImg} width="100%" height="100%" />
                        </div>
                        <div style={{width:'40px', height:'40px',marginRight:'2rem'}}>
                            <img src={linkedInImg} width="100%" height="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer