import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { IUseSearchParamProps } from './inteface';

export const getSearchParam = (parameter = '', location = window.location) => {
    const params = new URLSearchParams(location.search);

    return params.get(parameter) || '';
};

export const useSearchParam = (props: IUseSearchParamProps) => {
    const location = useLocation();
    // const { parameter, setValue } = props;
    // const value = getSearchParam(parameter, location);

    // useEffect(() => {
    //     setValue(value);
    // }, [setValue, value]);
};
