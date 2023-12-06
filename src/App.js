import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Featured from './components/Featured/Featured'

import Text from './components/Text/Text'
import Service from './components/Service/Service'
import Price from './components/Price/Price'

import managementIcon from './assets/management.svg'
import suppIcon from './assets/support.svg'
import collabIcon from './assets/collab.svg'
import processIcon from './assets/process.svg'
import featureIcon from './assets/features.svg'
import solutionIcon from './assets/solution.svg'

// import pricing images
import basicImg from './assets/basic.png'
import intermediateImg from './assets/intermediate.png'
import expertImg from './assets/expert.png'

const App = () => {
    return (
        <div>
            <section className='main-container'>
                <Navbar />
                <Home />
            </section>
            <section className='featured-container'>
                <div className='title-wrapper'>
                    <Text
                        text='FigmaLand was Built Specifically for You'
                        variant='h2' 
                        fontSize='3.92rem' 
                        color='black'
                        fontWeight='500'
                        textAlign='center'
                    />
                </div>
                <div className='featured-wrapper'>
                    <Featured
                        icon={managementIcon}
                        title='Management'
                        description='Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
                        marginBottom='5rem'
                    />
                    <Featured
                        icon={suppIcon}
                        title='Customer Support'
                        description='Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
                        type='secondary'
                        marginBottom='5rem'
                    />
                    <Featured
                        icon={collabIcon}
                        title='Collaborative'
                        description='Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
                        marginBottom='5rem'
                    />
                </div>
            </section>
            <section className='service-container'>
                <Service
                    title='Quick & Easy Process'
                    description='Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.'
                    icon={processIcon}
                />
                <Service
                    title='Perfect for Operations HR and Finance'
                    description='Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.'
                    icon={featureIcon}
                    variant='secondary'
                />
                <Service
                    title="Perfect solution for small businesse"
                    description="Being a freelancer is a rollercoaster of emotions. We built Slate to keep your freelance business less stressful. We'd love to show you what we're building..."
                    icon={solutionIcon}
                    variant='featured'
                />
            </section>
            <section className='pricing-container'>
                <div className='title-wrapper'>
                    <Text
                        text='Simple Pricing for Your Team'
                        variant='h2'
                        fontSize='3.92rem'
                        color='black'
                        fontWeight='500'
                        textAlign='center'
                        marginBottom='2rem'
                    />
                    <Text 
                        text="Slate helps you see how many more days you need"
                        variant='featured-txt'  
                        color='#5C5C5C'
                        fontWeight='500'
                        textAlign='center'
                    />
                </div>
                <div className='price-wrapper'>
                    <Price
                        title='Education'
                        subtitle='Brief price description'
                        img={basicImg}
                        type='beginner'
                    />
                    <Price
                        title='Professional'
                        subtitle='Brief price description'
                        img={intermediateImg}
                        type='intermediate'
                        price='10'
                    />
                    <Price
                        title='Business'
                        subtitle='Brief price description'
                        img={expertImg}
                        type='expert'
                        price='99'
                    />
                </div>
            </section>
        </div>
    )
}

export default App