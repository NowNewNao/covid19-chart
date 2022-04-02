import React, { FC } from 'react';
import { CountryData } from '@/types/types';

const Country: FC<{country:CountryData}> = ({country}) => {
    const {Country, NewConfirmed, NewDeaths, TotalConfirmed, TotalDeaths} = country;
    return (
        <div>
            <p>{Country}</p>
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

export { Country };
