import { useCallback, useMemo, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { IUserPaginationProps } from './inteface';
import { getSearchParam } from './useSearchParam';

const setQueryParam = ({ history, location, parameter, replace, value }) => {
    const { search } = location;
    const queryParams: URLSearchParams = new URLSearchParams(search);

    queryParams.set(parameter, value);
    const destination = { search: queryParams.toString() };

    if (replace) {
        history.replace(destination);
    } else {
        history.push(destination);
    }
};

const defaultInitialPage = 1;

export const usePagination = (props: IUserPaginationProps) => {
    const { namespace = '', parameter = 'page', initialTotalPages = 1 } = props;

    const history = useHistory();
    const location = useLocation();
    const [totalPages, setTotalPages] = useState<number>(initialTotalPages);

    const searchParam: string = namespace ? `${namespace}_${parameter}` : parameter;
    const initialPage: number = props.initialPage || defaultInitialPage;
    const currentPage: number = parseInt(getSearchParam(searchParam, location));

    const setCurrentPage = useCallback(
        (page, replace = false) => {
            setQueryParam({
                history,
                location,
                parameter: searchParam,
                replace,
                value: page
            });
        },
        [history, location, searchParam]
    );

    useEffect(() => {
        if (!currentPage) {
            setCurrentPage(initialPage, true);
        }
    }, [currentPage, initialPage, setCurrentPage]);

    const paginationState = {
        currentPage: currentPage || initialPage,
        totalPages
    };

    const api = useMemo(
        () => ({
            setCurrentPage,
            setTotalPages
        }),
        [setCurrentPage, setTotalPages]
    );

    return [paginationState, api];
};
