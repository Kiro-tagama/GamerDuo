import { DarkTheme, useTheme } from "@react-navigation/native"

export const colors={
  white:'#eee',
  black:'#222',
  gray:'#666',
  midWhite:'#eee3',
  midBlack:'#0003',
  midGray:'#6663',
  green:'#A2EF44',
  red:'#FF8080'
}

export const themaDark={
  dark:true,
  colors:{
    ...DarkTheme.colors,
    background: colors.black,
    text: colors.white,
  }
}

