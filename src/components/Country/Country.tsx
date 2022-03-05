import React, { FC } from 'react';
import { CountryData } from '@/types';

const Country: FC<CountryData> = ({ country }) => (
    <div>
        <p>{country.Country}</p>
        <div>
            <p>NewConfirmed</p>
            <p>{country.NewConfirmed}</p>
        </div>
        <div>
            <p>NewDeaths</p>
            <p>{country.NewDeaths}</p>
        </div>
        <div>
            <p>TotalConfirmed</p>
            <p>{country.TotalConfirmed}</p>
        </div>
        <div>
            <p>TotalDeaths</p>
            <p>{country.TotalDeaths}</p>
        </div>
    </div>
);

export { Country };
