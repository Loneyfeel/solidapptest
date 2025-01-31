import React from 'react';
import style from './resourcesinfoitem.module.sass';
import {ResourcesInfoItemProps} from "../../types/types.ts";

const ResourcesInfoItem: React.FC<ResourcesInfoItemProps> = ({
                                                                 icon,
                                                                 text
                                                             }) => {
    return (
        <div className={style.resourcesinfoitem}>
            <div className={`shadow blur_40 ${style.resourcesinfoitem__content}`}>
                <div className={style.resourcesinfoitem__content__icon}>
                    <img
                        src={icon}
                        alt=""
                        className={style.resourcesinfoitem__content__icon_img}
                    />
                </div>
                <div className={style.resourcesinfoitem__content__value}>
                    <p className={style.resourcesinfoitem__content__value_text}>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ResourcesInfoItem;