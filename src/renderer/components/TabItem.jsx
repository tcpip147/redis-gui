import React, { useState, useEffect, useRef } from 'react';
import './TabItem.scss';
import SideMenu from './SideMenu';
import Content from './Content';
import ConsoleMenu from './ConsoleMenu';

const TabItem = ({ tab, activeTab, onClickTab, onClickClose, sideMenuWidth, onResizeWidth }) => {

    const [consoleMenuHeight, setConsoleMenuHeight] = useState(300);

    const resizingContext = {
        resizing: false,
        width: null,
        height: null,
        clientX: null,
        clientY: null,
        handle: null
    };

    const sideMenuRef = useRef();
    const widthHandleRef = useRef();
    const consoleMenuRef = useRef();
    const heightHandleRef = useRef();

    const onMouseDown = (e) => {
        if (e.target == widthHandleRef.current) {
            resizingContext.resizing = true;
            resizingContext.width = Number(sideMenuRef.current.style.width.replace(/px/, ""));
            resizingContext.clientX = e.clientX;
            resizingContext.handle = e.target;
        } else if (e.target == heightHandleRef.current) {
            resizingContext.resizing = true;
            resizingContext.height = Number(consoleMenuRef.current.style.height.replace(/px/, ""));
            resizingContext.clientY = e.clientY;
            resizingContext.handle = e.target;
        }
    };

    const onMouseMove = (e) => {
        if (resizingContext.resizing && resizingContext.handle == widthHandleRef.current) {
            onResizeWidth(resizingContext.width + (e.clientX - resizingContext.clientX));
            document.body.style.cursor = "w-resize";
        } else if (resizingContext.resizing && resizingContext.handle == heightHandleRef.current) {
            const height = resizingContext.height + (resizingContext.clientY - e.clientY);
            if (height > 200) {
                setConsoleMenuHeight(height);
            }
            document.body.style.cursor = "n-resize";
        }
    };

    const onMouseUp = (e) => {
        if (resizingContext.resizing &&
            (resizingContext.handle == widthHandleRef.current || resizingContext.handle == heightHandleRef.current)) {
            resizingContext.resizing = false;
            resizingContext.width = null;
            resizingContext.height = null;
            resizingContext.clientX = null;
            resizingContext.clientY = null;
            resizingContext.handle = null;
            document.body.style.cursor = "default";
        }
    };

    useEffect(() => {
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

    return (
        <div className={'tab-item' + (tab.id === activeTab.id ? ' active' : '')}>
            <div className='tab'
                onClick={() => { onClickTab(tab) }}
            >
                <div className='title'>{tab.id}</div>
                <svg className='close' aria-hidden='true' version='1.1' width='10' height='10'
                    onClick={(e) => { onClickClose(tab, e) }}
                >
                    <path fill='none' stroke='currentColor' strokeWidth='1' shapeRendering='crispEdges' d='M 1,1 9,9 Z M 9,1 1,9 Z' />
                </svg>
            </div>
            <div className='container'>
                <SideMenu width={sideMenuWidth} ref={sideMenuRef} />
                <div className='width-resize-handle' ref={widthHandleRef}></div>
                <Content sideMenuWidth={sideMenuWidth} consoleMenuHeight={consoleMenuHeight} />
                <div className='height-resize-handle' ref={heightHandleRef} style={{ top: "calc(100% - " + (consoleMenuHeight + 12) + "px)", width: "calc(100% - " + (sideMenuWidth + 15) + "px)" }}></div>
                <ConsoleMenu sideMenuWidth={sideMenuWidth} ref={consoleMenuRef} consoleMenuHeight={consoleMenuHeight} />
            </div>
        </div>
    );
};

export default TabItem;
