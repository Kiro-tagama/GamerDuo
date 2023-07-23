import { StyleSheet, Dimensions, useColorScheme } from 'react-native';
import { colors, themaDark, themaLigth } from './theme';

export function useStyle() {
  const theme = useColorScheme() == "dark"? themaDark : themaLigth
  
  const height = () => {
    const { width, height } = Dimensions.get('window');
    switch (true) {
      case height <= 806:
        return "74%";
        default:
        return "79%";
      }
  };

  const stylesHome = StyleSheet.create({
    container: {
      padding:10,
      justifyContent:'center',
      flex:1,
    },
    card:{
      height:height(), //variação 78%
      width:'95.2%',
      borderRadius:30,
      overflow:'hidden',
      justifyContent:'flex-end'
    },
    card2:{
      backgroundColor: theme.colors.background+"cc",
      borderRadius:25,
      padding:10,
      zIndex:3,
      margin:10
    },
    cardInfo:{
      backgroundColor:theme.colors.text+"cc",
      borderRadius:25,
      padding:10,
      flex:1,
      margin:3,
      flexDirection:'row'
    },
    cardImg:{
      backgroundColor:theme.colors.text,
      borderRadius:25,
      margin:3,
      width:100,
      height:100,
    }
  })

  const stylesMenu = StyleSheet.create({
    bt:{
      backgroundColor:theme.colors.border+"66",
      width:60,
      height:60,
      borderRadius:30,
      justifyContent:"center",
      alignItems:'center'
    },
    opt:{
      backgroundColor:theme.colors.border+"66",
      height:60,
      borderRadius:30,
      flexDirection:'row',
      padding:5,
      marginHorizontal:20,
      gap:5
    },
    opts:{
      backgroundColor:'transparent',
      borderRadius:30,
      width:50,
      height:50,
      justifyContent:"center",
      alignItems:'center'
    },
    active:{
      backgroundColor:theme.colors.background,
      color:theme.colors.text
    }
  })

  const stylesLogin= StyleSheet.create({
    input:{
      height: 60, 
      width: '90%', 
      flexDirection:"row",
      alignItems:"center",
      borderColor: theme.colors.border, 
      borderWidth: 1, 
      marginBottom: 10,
      backgroundColor:colors.midBlack,
      borderRadius:30,
      paddingHorizontal:20,
      fontSize:20,
      color:colors.white
    },
    bt:{
      height: 60, 
      width: '90%', 
      borderColor: theme.colors.border, 
      borderWidth: 1, 
      marginBottom: 10,
      backgroundColor:theme.colors.background,
      borderRadius:30,
      padding:10,
      alignItems:"center"
    }
  })

  const stylesChat= StyleSheet.create({
    cardChat:{
      flexDirection:'row',
      padding:10,
      borderColor:theme.colors.border,
      borderWidth:1,
      alignItems:'center',
      marginVertical:5,
      marginHorizontal:10,
      borderRadius:30
    },
    base:{
      width:'auto',
      flexDirection:'row',
      marginVertical:10,
      padding:5,
      justifyContent:'space-between',
      alignItems:'center',
      height: 60,
      borderColor: theme.colors.border, 
      borderWidth: 1, 
      backgroundColor:theme.colors.background+"66",
      color:theme.colors.text,
      borderRadius:30,
    },
    bt:{
      borderColor:theme.colors.border,
      borderWidth:.5,
      height:50,
      width:50,
      borderRadius:25,
      justifyContent:'center',
      alignItems:'center',
    },
    mensagem:{
      backgroundColor:theme.colors.text,
      color:theme.colors.background,
      marginVertical:5,
      padding:5,
      borderRadius:10,
      maxWidth:"90%"
    }
  })

  const stylesProfile=StyleSheet.create({
    imgProfile:{
      height:100,width:100,
      borderColor:theme.colors.text,
      borderWidth:2,
      borderRadius:50,
      margin:10,
      marginTop:40
    }
  })

  const stylesTexts = StyleSheet.create({
    h1:{color:theme.colors.text, fontSize: 36, fontWeight: 'bold',margin:2},
    h2:{color:theme.colors.text, fontSize: 24, fontWeight: "500",margin:2},
    normal:{color:theme.colors.text,fontSize:14,margin:2},
    small:{color:colors.gray,fontSize:12,margin:2}
  })


  return{stylesHome,stylesChat,stylesLogin,stylesMenu,stylesProfile,stylesTexts}
}