import React, { FC } from 'react';
import { Country } from '@/components/Country';
import { CountryData } from '@/types/types';

type CountriesProps = {
    countries: CountryData[];
};

const Countries: FC<CountriesProps> = ({ countries }) => {
    return (
        <div>
            {countries ? (
                countries.map((country) => (
                    <Country key={country.ID} {...country} />
                ))
            ) : (
                <p>loading</p>
            )}
        </div>
    );
};

export { Countries };
