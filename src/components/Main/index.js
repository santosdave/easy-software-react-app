import React from 'react';
import MainSection from '../MainSection';
import TopMainHeader from '../TopMainHeader';
import "./style.css";
function Main() {
    return (
        <div className="main">
            <div>
                <TopMainHeader/>
            </div>
            <div>
                <MainSection/>
            </div>
        </div>
    )
}

export default Main
