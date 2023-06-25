import { View,Image, Button } from 'react-native';
import { stylesHome} from '../style/style';
import { Card } from '../components/Card';
import { Menu } from '../components/Menu';
import { perfis } from '../api/fakeProfiles';
import Swiper from 'react-native-deck-swiper';
import { useRef } from 'react';
import useMenu from '../hooks/useMenu';

export function Home() {

  const perfil=perfis

  const {swiperRef,like,noLike,iSwipe,setISwipe}= useMenu()
  
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
          cardIndex={5}
          stackSize={2}

          stackScale={16}

          onSwiped={(i)=>setISwipe(i)}
          cardIndex={iSwipe} // ???

          onSwipedLeft={()=>console.log("esquerda")}
          onSwipedRight={()=>{console.log("direita"), like()}}
        />
      </View>
      {/* <Card profile={perfil}/> */}
      
    </View>
    <Menu/>
    </>
  );
}