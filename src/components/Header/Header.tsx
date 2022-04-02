import React, { FC } from 'react';
import { ChangeThemeButton } from '../ChangeThemeButton';

const Header:FC = () => {
    return (
        <header>
            <h1>Covid-19 Tracker</h1>
            <ChangeThemeButton />
        </header>
    );
};


export {Header};
