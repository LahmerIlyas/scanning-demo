import {useMemo, useState, useCallback} from 'react';
import {gql, useQuery} from '@apollo/client';

const ITEMS_BY_GTINS = gql`
  query ItemsByGtins($gtins: [String!]!, $pagination: PaginationInput) {
    items(gtins: $gtins, pagination: $pagination) {
      items {
        id
        gtin
        price
        isOutOfStock
        inventoryQty
        compareAtPrice
      }
      pagination {
        total
        count
        page
        totalPages
      }
    }
  }
`;

const PAGE_SIZE = 10;

export const useItemsByGtins = (gtins: string[]) => {
  const {
    data: pepData,
    loading: loadingPep,
    error: errorPep,
    fetchMore,
    networkStatus,
  } = useQuery(ITEMS_BY_GTINS, {
    variables: {
      gtins,
      pagination: {
        limit: PAGE_SIZE,
        page: 1,
      },
    },
    skip: gtins.length === 0,
    notifyOnNetworkStatusChange: true,
  });

  const pepItems = useMemo(
    () => pepData?.items?.items ?? [],
    [pepData?.items?.items],
  );

  const pagination = pepData?.items?.pagination;

  const hasMore = pagination ? pagination.page < pagination.totalPages : false;

  const loadMore = useCallback(async () => {
    if (!hasMore || loadingPep || gtins.length === 0) return;

    const nextPage = pagination ? pagination.page + 1 : 2;

    await fetchMore({
      variables: {
        gtins,
        pagination: {
          limit: PAGE_SIZE,
          page: nextPage,
        },
      },
    });
  }, [hasMore, loadingPep, gtins, pagination, fetchMore]);

  const isLoadingMore = networkStatus === 3;

  return {
    pepItems,
    loading: loadingPep,
    error: errorPep,
    hasMore,
    loadMore,
    isLoadingMore,
    totalPepItems: pagination?.total || 0,
  };
};

