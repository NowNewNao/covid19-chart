import React, { FC } from 'react';
import type { Country } from '@/types';

const Countries: FC<Country[]> = ({ countries }) => (
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
