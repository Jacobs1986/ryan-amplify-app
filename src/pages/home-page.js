import React from "react";

// Components
import HomePageBanner from "../components/homePageBanner/homePageBanner";
import HomePageCaption from "../components/homePageCaption/homePageCaption";
// import HomePageCards from '../components/homePageCards/homePageCards';
import HomePageColumn from "../components/homePageColumn/homePageColumn";
// import HomePageLinks from "../components/homePageLinks/homePageLinks";

export default function Home() {
    return (
        <div>
            <HomePageBanner />
            <HomePageCaption />
            {/* <HomePageCards /> */}
            <HomePageColumn />
            {/* <HomePageLinks /> */}
        </div>
    );
};