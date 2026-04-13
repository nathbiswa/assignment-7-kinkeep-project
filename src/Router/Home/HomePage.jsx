import React from 'react';
import HeroSection from '../../Sections/HomeSection/HeroSection';
import HomeCart from '../../Sections/HomeSection/HomeCart';
import HomeFriends from '../../Sections/HomeSection/HomeFriends';

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <HomeCart/>
            <HomeFriends/>
        </div>
    );
};

export default HomePage;