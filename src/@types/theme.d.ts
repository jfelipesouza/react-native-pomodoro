import 'styled-components';
import { light,dark } from '../theme';

export type LightTheme = typeof light;
export type DarkTheme = typeof dark;



declare module 'styled-components' {
  export interface DefaultTheme extends LightTheme {}
  export interface DefaultDarkTheme extends DarkTheme{}
} 