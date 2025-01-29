import React from 'react';
import style from './loadingbar.module.sass';

interface LoadingBarProps {
    width: number;
}

const LoadingBar: React.FC<LoadingBarProps> = ({ width }) => {
    return (
        <>
            <div className={`blur_40 shadow ${style.loadingbar}`}>
                <div className={style.loadingbar__inside}
                style={{
                    width: `${width}%`
                }}>
                </div>
            </div>
        </>
    );
};

export default LoadingBar;

