import React from 'react';
import Navbar from './assets/navbar';
import Home from './pages/home';
import AboutMe from './pages/aboutme';
import Gallery from './pages/gallery';

const App = () => {
    return (
        <div className="font-sans bg-white text-gray-900">
            <Navbar />
            <Home />
            <AboutMe />
            <Gallery />
        </div>
    );
}

export default App;
