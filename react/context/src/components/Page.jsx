import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const Page = () => {
    // Page는 isDark를 전달하는 컴포넌트
    return (
        <div className='page'>
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default Page;