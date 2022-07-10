const useProducts = jest.fn();
useProducts.mockReturnValue({
  data: null,
  isLoading: false,
  refetch: jest.fn(),
  isRefetching: false,
});

export {useProducts};
