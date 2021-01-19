import React, { FunctionComponent } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { IDriverProps } from './interface'

export const Driver: FunctionComponent<IDriverProps> = () => {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
        </QueryClientProvider>
    )
}