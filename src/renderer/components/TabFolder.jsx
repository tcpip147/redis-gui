import React, { useState, useRef, useEffect } from 'react';
import './TabFolder.scss';
import _ from 'lodash';
import TabItem from './TabItem';

const TabFolder = () => {

    const [tabs, setTabs] = useState([
        { id: "포항가동계" },
        { id: "포항개발계" },
        { id: "광양가동계" },
        { id: "광양개발계" },
    ]);

    const [activeTab, setActiveTab] = useState(tabs[0]);

    const onClickTab = (tab) => {
        setActiveTab(tab);
    };

    const onClickClose = (tab, e) => {
        e.stopPropagation();
        setTabs(tabs.filter((t) => t.id !== tab.id));
        if (tab.id === activeTab.id) {
            setActiveTab(tabs[0]);
        }
    };

    const [sideMenuWidth, setSideMenuWidth] = useState(200);

    const onResizeWidth = (width) => {
        if (width > 100 && window.innerWidth - width > 500) {
            setSideMenuWidth(width);
        }
    };

    return (
        <div className='tab-folder'>
            <div className='tabs'>
                {
                    tabs.map((tab) => {
                        return (
                            <TabItem key={tab.id}
                                tab={tab}
                                activeTab={activeTab}
                                onClickTab={onClickTab}
                                onClickClose={onClickClose}
                                sideMenuWidth={sideMenuWidth}
                                onResizeWidth={onResizeWidth}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default TabFolder;
