import React, { FC } from 'react';
import { Country } from '@/components/Country';
import { CountryData } from '@/types';

const Countries: FC<CountryData[]> = ({ countries }) => (
    <div>
        {countries ? (
            countries.map((country) => {
                return <p key={country.ID}>{country.Country}</p>;
            })
        ) : (
            <p>loading</p>
        )}
    </div>
);

export { Countries };
