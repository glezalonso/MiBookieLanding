import { useInfiniteQuery } from '@tanstack/react-query'
import axios from '../libs/axios'

export const useGetNews = (page) => {
    const {
        data,
        isError,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useInfiniteQuery(
        ['news', page],
        async ({ pageParam = 1 }) => {
            const { data } = await axios.get(`/api/news/page/${pageParam}`)
            return data
        },

        {
            getNextPageParam: (lastPage) => {
                if (lastPage.page === lastPage.totalPages) return false
                return lastPage.page + 1
            },
        }
    )
    return {
        data,
        isError,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    }
}
