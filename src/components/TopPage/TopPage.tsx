import React, { FC, useState, useEffect } from 'react';
import { Global } from '@/components/Global';
import { Countries } from '@/components/Countries';
import { ResponseData } from '@/types/types';
import { Header } from '../Header/Header';

const TopPage: FC = () => {
    const [data, setData] = useState<ResponseData | undefined>(undefined);

    const fetchData = async () => {
        const result = await fetch('https://api.covid19api.com/summary');
        const data: ResponseData = await result.json();

        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Header />
            {data ? (
                <>
                    <Global globalData={data.Global} />
                    <Countries countries={data.Countries} />
                </>
            ) : (
                <p>Loading</p>
            )}
        </>
    );
};

export { TopPage };
