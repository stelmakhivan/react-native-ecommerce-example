export type MainTabNavigatorParamList = {
  Home: undefined;
  Shop: undefined;
  Bag: undefined;
  Wants: undefined;
  Account: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainTabNavigatorParamList {}
  }
}
