const useBanner = jest.fn();
useBanner.mockReturnValue({
  data: null,
  isLoading: false,
  refetch: jest.fn(),
  isRefetching: false,
});

export {useBanner};
