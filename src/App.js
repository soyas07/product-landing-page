import React from 'react'
import Logo from './components/Logo/Logo'
import Button from './components/Button/Button'
import Text from './components/Text/Text'

const App = () => {
    return (
        <div>
            <section className='main-container'>
                {/* <Logo type='primary' /> */}
                {/* <Button
                    title='Sign Up'
                    width="9rem"
                    varaint='secondary'
                /> */}
                <Text
                    text='lorem'
                    variant='h1'
                />
            </section>
        </div>
    )
}

export default App