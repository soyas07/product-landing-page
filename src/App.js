import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

const App = () => {
    return (
        <div>
            <section className='main-container'>
                <Navbar />
                <Home />
            </section>
        </div>
    )
}

export default App