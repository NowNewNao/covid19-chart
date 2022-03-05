export type Country = {
    Country: string;
    CountryCode: string;
    Date: string;
    ID: string;
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    Premium: never;
    Slug: string;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
};

export type GlobalData = {
    Date: string;
    NewConfirmed: number;
    NewDeaths: number;
    TotalConfirmed: number;
    TotalDeaths: number;
};

export type ResponseData = {
    Countries: Country[];
    Date: string;
    Global: GlobalData;
    ID: string;
    Message: string;
};
