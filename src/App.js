import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Featured from './components/Featured/Featured'

import managementIcon from './assets/management.svg'
import suppIcon from './assets/support.svg'
import collabIcon from './assets/collab.svg'
import Text from './components/Text/Text'

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
        </div>
    )
}

export default App