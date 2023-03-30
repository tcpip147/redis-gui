import React, { forwardRef, useState } from 'react';
import './ConsoleMenu.scss';

const ConsoleMenu = ({ sideMenuWidth, consoleMenuHeight }, ref) => {

    const [activeTabId, setActiveTabId] = useState(0);

    const onClickTab = function (id) {
        console.log(id);
        setActiveTabId(id);
    }

    return (
        <div className='console-menu' ref={ref} style={{ width: "calc(100% - " + (sideMenuWidth + 17) + "px)", height: consoleMenuHeight }}>
            <div className='console-tabs'>
                <div className={'console-tab' + (activeTabId === 0 ? ' active' : '')} onClick={() => { onClickTab(0) }}>
                    <div className='title'>Log</div>
                </div>
                <div className={'console-tab' + (activeTabId === 1 ? ' active' : '')} onClick={() => { onClickTab(1) }}>
                    <div className='title'>Terminal</div>
                </div>
            </div>
            <div className={'console-text' + (activeTabId === 0 ? ' active' : '')}>
                <div className='log'></div>
            </div>
            <div className={'console-text' + (activeTabId === 1 ? ' active' : '')}>
                <div className='terminal'></div>
            </div>
        </div>
    );
};

export default forwardRef(ConsoleMenu);
