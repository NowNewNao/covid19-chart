import React, { FC } from 'react';
import { GlobalData } from '@/types';

const Global: FC<GlobalData> = ({ data }) => (
    <div>
        <div>
            <p>Today</p>
            <p>{data.Date}</p>
        </div>
        <div>
            <p>NewConfirmed</p>
            <p>{data.NewConfirmed}</p>
        </div>
        <div>
            <p>NewDeaths</p>
            <p>{data.NewDeaths}</p>
        </div>
        <div>
            <p>TotalConfirmed</p>
            <p>{data.TotalConfirmed}</p>
        </div>
        <div>
            <p>TotalDeaths</p>
            <p>{data.TotalDeaths}</p>
        </div>
    </div>
);

export { Global };
