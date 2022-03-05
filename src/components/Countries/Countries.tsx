import React, { FC } from 'react';
import { Country } from '@/components/Country';
import { CountryData } from '@/types';

const Countries: FC<CountryData[]> = ({ countries }) => (
    <div>
        {countries ? (
            countries.map((country) => (
                <Country key={country.ID} country={country} />
            ))
        ) : (
            <p>loading</p>
        )}
    </div>
);

export { Countries };
