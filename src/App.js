import React from 'react'
import Logo from './components/Logo/Logo'
import Button from './components/Button/Button'

const App = () => {
    return (
        <div>
            <section className='main-container'>
                {/* <Logo type='primary' /> */}
                <Button
                    title='Sign Up'
                    width="9rem"
                    varaint='secondary'
                />
            </section>
        </div>
    )
}

export default App