import { StyleSheet, Platform } from 'react-native';

export const stylesApp = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    ...Platform.select({
      android:{
        paddingTop:30
      },
      ios:{
        paddingTop:40
      }
    })
  },
});

export const stylesHome = StyleSheet.create({
  container: {
    padding:12,
    justifyContent:'space-between',
    flex:1
  },
  card:{
    backgroundColor:'red',
    height:"80%",
    borderRadius:30,
    padding:10,
    justifyContent:'flex-end',
  },
  card2:{
    backgroundColor: '#222222c0',
    borderRadius:25,
    padding:10,
  },
  cardInfo:{
    backgroundColor:"green",
    borderRadius:25,
    padding:10,
    flex:1,
    margin:3
  },
  cardImg:{
    backgroundColor:"green",
    borderRadius:25,
    margin:3,
    width:100,
    height:100,
  }
})

export const stylesMenu = StyleSheet.create({
  bt:{
    backgroundColor:"#666666c0",
    width:60,
    height:60,
    borderRadius:30,
    justifyContent:"center",
    alignItems:'center'
  },
  opt:{
    backgroundColor:"#66666629",
    height:60,
    borderRadius:30,
    flexDirection:'row',
    padding:5,
    marginHorizontal:20,
    gap:5
  },
  opts:{
    backgroundColor:"#533",
    borderRadius:30,
    width:50,
    height:50,
    justifyContent:"center",
    alignItems:'center'
  }
})

export const stylesTexts = StyleSheet.create({
  h1:{},
  h2:{},
  normal:{}
})