import React, { forwardRef } from 'react';
import './SideMenu.scss';

const SideMenu = (props, ref) => {
    return (
        <div className='side-menu' ref={ref} style={{ width: props.width }}>
            <div className='databases'>

            </div>
        </div>
    );
};

export default forwardRef(SideMenu);
