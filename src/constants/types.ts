export interface IPropsDimensions {
  window?: object;
  spacing?: object;
  borderRadius?: number;
}

export type MainStackParams = {
  Welcome?: undefined;
  Home?: undefined;
  Detail?: undefined;
};
export type StackNavigationMain = NavigationProp<MainStackParams, any>;
