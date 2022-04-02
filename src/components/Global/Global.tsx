import React, { FC } from 'react';
import { GlobalData } from '@/types/types';

const Global: FC<{globalData:GlobalData}> = ({globalData}) => {
    const { Date, NewConfirmed, NewDeaths, TotalConfirmed, TotalDeaths } = globalData;
   return (
    <div>
        <div>
            <p>Today</p>
            <p>{Date}</p>
        </div>
        <div>
            <p>NewConfirmed</p>
            <p>{NewConfirmed}</p>
        </div>
        <div>
            <p>NewDeaths</p>
            <p>{NewDeaths}</p>
        </div>
        <div>
            <p>TotalConfirmed</p>
            <p>{TotalConfirmed}</p>
        </div>
        <div>
            <p>TotalDeaths</p>
            <p>{TotalDeaths}</p>
        </div>
    </div>
    );
};


export { Global };
