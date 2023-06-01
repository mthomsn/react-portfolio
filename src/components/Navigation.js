import React from 'react';
import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Resume from './pages/Resume';
// import Contact from './pages/Contact';
import Header from './Header';
import Footer from './Footer';
import Cursor from './Cursor';
import CursorDot from './CursorDot';
import StickyNav from './StickyNav';

export default function Navigation() {
    // const [currentPage, setCurrentPage] = useState('About');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    // const renderPage = () => {
    //     if (currentPage === 'About') {
    //     return <About />;
    //     }
    //     if (currentPage === 'Portfolio') {
    //     return <Portfolio />;
    //     }
    //     if (currentPage === 'Resume') {
    //     return <Resume />;
    //     }
    //     return <Contact />;
    // };

    // const handlePageChange = (page) => setCurrentPage(page);

    // let renderComponent = renderPage();

    return (
        <div id='main-container'>
            <Cursor />
            <CursorDot />
            <Header 
            // currentPage={currentPage} handlePageChange={handlePageChange} 
            />
            <StickyNav />
            <About />
            <Footer />
        </div>
    );
}