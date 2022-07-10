const useNav = jest.fn();
useNav.mockReturnValue({
  data: null,
  isLoading: false,
  refetch: jest.fn(),
  isRefetching: false,
});

export {useNav};
