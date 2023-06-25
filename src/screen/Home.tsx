import { View,Image} from 'react-native';
import { colors, stylesHome} from '../style/style';
import { Card } from '../components/Card';
import { Menu } from '../components/Menu';
import { perfis } from '../api/fakeProfiles';
import Swiper from 'react-native-deck-swiper';
import useMenu from '../hooks/useMenu';
import React, { useRef } from 'react';


export function Home() {
  
  const swiperRef=useRef()
  const perfil=perfis
  const {like,noLike}= useMenu()

  return (
    <>
    <View style={stylesHome.container}>
      <View style={{alignItems:'center',margin:10}}>
        <Image
          style={{height:60,width:60,borderRadius:30,resizeMode:'center',backgroundColor:'#eeeeee6c',padding:20}}
          source={{uri:'https://img.quizur.com/f/img610bf00c06c710.35752032.png'}}
          />
      </View>

      <View style={{flex:1,zIndex:10}}>
        <Swiper
          ref={swiperRef}
          cards={perfil}
          renderCard={(perfil)=> <Card profile={perfil}/>}
          keyExtractor={(data:any)=> data.id}
          animateCardOpacity={true}
          cardVerticalMargin={0}
          cardHorizontalMargin={0}
          backgroundColor='transparent'
          infinite={true} //apagar depois
          outputRotationRange={["0deg","0deg",'0deg']}
          verticalSwipe={false}
          
          showSecondCard={true} // funcionan juntos
          stackSize={2}
          stackScale={16}

          onSwipedLeft={()=>noLike()}
          onSwipedRight={()=>like()}

          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: colors.red,
                  borderColor: colors.red,
                  color: colors.white,
                  borderWidth: 1,
                  fontSize: 24
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20
                }
              }
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: colors.green,
                  borderColor: colors.black,
                  color: colors.black,
                  borderWidth: 1,
                  fontSize: 24
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 20
                }
              }
            }
          }}
        />
      </View>
      {/* <Card profile={perfil}/> */}
      
    </View>
    <Menu prop={swiperRef.current}/>
    </>
  );
}