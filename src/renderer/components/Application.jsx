import React, { useState } from 'react';
import './Application.scss';
import SideMenu from './SideMenu';
import TabFolder from './TabFolder';

const Application = () => {

    return (
        <div className='application'>
            <TabFolder />
        </div>
    );
};

export default Application;
