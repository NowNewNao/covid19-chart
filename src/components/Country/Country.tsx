import React, { FC } from 'react';
import { CountryData } from '@/types/types';

type CountryProps = CountryData;

const Country: FC<CountryProps> = ({
    Country,
    NewConfirmed,
    NewDeaths,
    TotalConfirmed,
    TotalDeaths,
}) => (
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

export { Country };
