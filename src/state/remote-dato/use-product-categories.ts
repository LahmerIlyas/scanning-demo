import {gql, useQuery} from '@apollo/client';

export interface Category {
  id: string;
  title: string;
  slug: string;
}

const ALL_CATEGORIES_QUERY = gql`
  query AllProductCategories {
    allProductCategories {
      id
      title
      slug
    }
  }
`;

export const useProductCategories = () => {
  const {data, loading, error} = useQuery<{allProductCategories: Category[]}>(
    ALL_CATEGORIES_QUERY,
    {
      context: {clientName: 'dato'},
    },
  );

  return {
    categories: data?.allProductCategories ?? [],
    loading,
    error,
  };
};
