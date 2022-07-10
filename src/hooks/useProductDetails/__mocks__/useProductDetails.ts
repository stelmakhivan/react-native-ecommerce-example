const useProductDetails = jest.fn();
useProductDetails.mockReturnValue({
  data: null,
  isLoading: false,
  refetch: jest.fn(),
  isRefetching: false,
});

export {useProductDetails};
