import React from 'react';
import style from './blurcontainer.module.sass';
import {BlurContainerProps} from "../../types/types.ts";

const BlurContainer: React.FC<BlurContainerProps> = ({
                                                         paddingY = 8,
                                                         paddingX = 8,
                                                         blurAmount = 40,
                                                         borderRadius = 16,
                                                         background = 'rgba(0, 0, 0, 0)',
                                                         children
                                                     }) => {
    return (
        <div
            className={style.blurcontainer}
            style={{
                padding: `${paddingY}px ${paddingX}px`,
                backdropFilter: `blur(${blurAmount}px)`,
                WebkitBackdropFilter: `blur(${blurAmount}px)`,
                borderRadius: `${borderRadius}px`,
                background: background
            }}
        >
            {children}
        </div>
    );
};

export default BlurContainer;