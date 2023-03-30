import React from 'react';
import './Content.scss';

const Content = ({ sideMenuWidth, consoleMenuHeight }) => {
    return (
        <div className='content' style={{ width: "calc(100% - " + (sideMenuWidth + 17) + "px)", height: "calc(100% - " + (consoleMenuHeight + 19) + "px)" }}>
            
        </div >
    );
};

export default Content;
