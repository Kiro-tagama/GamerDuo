import { DarkTheme, DefaultTheme } from "@react-navigation/native"

export const colors={
  white:'#f4f4f4',
  black:'#222222',
  gray:'#666666',
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
    border: colors.gray,
  }
}

export const themaLigth={
  dark:false,
  colors:{
    ...DefaultTheme.colors,
    background: colors.white,
    text: colors.black,
    border: colors.gray,
  }
}