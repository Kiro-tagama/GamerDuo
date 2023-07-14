import { View,Image} from 'react-native';
import { stylesHome, stylesMenu} from '../style/style';

import { Card } from '../components/Card';
import { Menu } from '../components/Menu';

import { perfis } from '../api/fakeProfiles';
import Swiper from 'react-native-deck-swiper';

import useMenu from '../hooks/useMenu';

import { Feather } from '@expo/vector-icons';
import { colors } from '../style/theme';

export function Home() {
  const perfil=perfis
  const {like,noLike,setSwiperRef,swiperRef}= useMenu()

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
        {
          // @ts-ignore
        <Swiper
          ref={ref => setSwiperRef(ref)}
          cards={perfil}
          renderCard={(perfil)=> <Card profile={perfil}/>}
          keyExtractor={(data:any)=> data.id}
          animateCardOpacity={true}
          cardVerticalMargin={0}
          cardHorizontalMargin={0}
          backgroundColor='transparent'
          infinite={true} //apagar depois
          outputRotationRange={["0deg","0deg",'0deg']}
          verticalSwipe={false} //habilidatar ou deixar desabilitado? (ele pode evitar erros habilitado)
          
          showSecondCard={true} // funcionan juntos
          stackSize={2}
          stackScale={16}

          //@ts-ignore na liby n existe o segundo parametro então
          onSwipedLeft={(i,card)=>noLike(card)}
          //@ts-ignore
          onSwipedRight={(i,card)=>like(card)}

          overlayLabels={{
            left: {
              element:<View style={[stylesMenu.bt,{backgroundColor:colors.black}]}>
                        <Feather name="x" size={30} color={colors.red}  />
                      </View>,
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
                  marginLeft: -40
                }
              }
            },
            right: {
              element:<View style={[stylesMenu.bt,{backgroundColor:colors.black}]}>
                        <Feather name="heart" size={30} color={colors.green}  />
                      </View>,
              style: {
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
        }
      </View>
      
    </View>
    <Menu prop={swiperRef}/>
    </>
  );
}