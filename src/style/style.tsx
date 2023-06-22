import { StyleSheet, Platform } from 'react-native';

export const colors={
  white:'#eee',
  black:'#222',
  gray:'#666',
  midWhite:'#eeeeee33',
  midBlack:'#00000033',
  midGray:'#66666633',
  green:'#A2EF44',
  red:'#FF8080'
}

export const stylesApp = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
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
    padding:10,
    justifyContent:'center',
    flex:1
  },
  card:{
    height:"90%",
    borderRadius:30,
    overflow:'hidden',
    justifyContent:'flex-end'
  },
  card2:{
    backgroundColor: '#222222c0',
    borderRadius:25,
    padding:10,
    zIndex:3,
    margin:10
  },
  cardInfo:{
    backgroundColor:"#aaaaaa4c",
    borderRadius:25,
    padding:10,
    flex:1,
    margin:3,
    flexDirection:'row'
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
    backgroundColor:colors.midGray,
    width:60,
    height:60,
    borderRadius:30,
    justifyContent:"center",
    alignItems:'center'
  },
  opt:{
    backgroundColor:colors.midGray,
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
  }
})

export const stylesLogin= StyleSheet.create({
  input:{
    height: 60, 
    width: '90%', 
    borderColor: colors.white, 
    borderWidth: 1, 
    marginBottom: 10,
    backgroundColor:'#00000033',
    borderRadius:30,
    paddingHorizontal:20,
    fontSize:20,
    color:colors.white
  },
  bt:{
    height: 60, 
    width: '90%', 
    borderColor: colors.white, 
    borderWidth: 1, 
    marginBottom: 10,
    backgroundColor:colors.white,
    borderRadius:30,
    padding:10,
    alignItems:"center"
  }
})

export const stylesTexts = StyleSheet.create({
  h1:{color:colors.white, fontSize: 36, fontWeight: 'bold',margin:2},
  h2:{color:colors.white, fontSize: 24, fontWeight: "500",margin:2},
  normal:{color:colors.white,fontSize:20,margin:2},
  small:{color:colors.gray,fontSize:16,margin:2}
})