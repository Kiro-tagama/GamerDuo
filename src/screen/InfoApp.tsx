import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useStyle } from '../style/style';

const appInfo = {
  nome: 'Gamer Duo',
  versao: '1.0.0',
  desenvolvedores: 'Rodrigo e Felipe',
  contato: '(sem contato no momento)',
};

export function InfoApp(){
  const {stylesTexts} = useStyle()

  return (
    <View style={{flex:1, margin:16}}>
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:'center',marginVertical:10}}>
      <TouchableOpacity style={{marginRight:20}} onPress={() => console.log('Título clicado')}>
        <AntDesign name="left" size={24} color={stylesTexts.h2.color}/>
      </TouchableOpacity>
        <Text style={stylesTexts.h2}>Informações do App</Text>
        <FontAwesome name="info-circle" size={24} color={"#0000"} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={[stylesTexts.normal, styles.description]}>
      Bem-vindo ao {appInfo.nome}! Este é um aplicativo incrível desenvolvido com React Native. Aqui, você pode encontrar um parceiro para jogar e interagir com outros jogadores que compartilham os mesmos interesses. Explore os perfis dos usuários, inicie conversas e junte-se a grupos de jogos para ampliar sua experiência de jogar com outras pessoas apaixonadas por games.
        </Text>
        <Text style={[stylesTexts.normal, styles.info]}>
          <FontAwesome name="code" size={14} color={stylesTexts.normal.color} />  Versão: {appInfo.versao}
        </Text>
        <Text style={[stylesTexts.normal, styles.info]}>
          <FontAwesome name="user" size={14} color={stylesTexts.normal.color} />   Desenvolvedores: {appInfo.desenvolvedores}
        </Text>
        <Text style={[stylesTexts.normal, styles.info]}>
          <FontAwesome name="envelope" size={14} color={stylesTexts.normal.color} />  Contato: {appInfo.contato}
        </Text>
        <Text style={[stylesTexts.normal, styles.lgpd]}>
          O {appInfo.nome} respeita a privacidade dos usuários e está em conformidade com a Lei Geral de Proteção de Dados (LGPD).
          Nenhuma informação pessoal é coletada pelo aplicativo sem o consentimento explícito do usuário. Todas as informações
          fornecidas são tratadas de forma segura e confidencial, seguindo as diretrizes da LGPD.
        </Text>
        {/* 1. Recursos do Aplicativo */}
        <Text style={[stylesTexts.normal, styles.subtitle]}>Recursos do Aplicativo</Text>
        <Text style={[stylesTexts.normal, styles.list]}>
          - Recurso 1
          {'\n'}
          - Recurso 2
          {'\n'}
          - Recurso 3
          {'\n'}
          {/* Adicione mais recursos conforme necessário */}
        </Text>
        {/* 3. Política de Privacidade */}
        <TouchableOpacity onPress={() => Linking.openURL('https://www.gov.br/mds/pt-br/acesso-a-informacao/lgpd')}>
          <Text style={[stylesTexts.normal, styles.link]}>Política de Privacidade (LGPD)</Text>
        </TouchableOpacity>
        {/* 5. Notas de Versão */}
        <Text style={[stylesTexts.normal, styles.subtitle]}>Notas de Versão</Text>
        <Text style={[stylesTexts.normal, styles.list]}>
          - Versão 1.0.0: Primeiro lançamento do aplicativo.
          {'\n'}
          {/* - Versão 1.1.0: Adição de novos recursos.
          {'\n'}
          - Versão 1.2.0: Correção de bugs e melhorias de desempenho.
          {'\n'} */}
          {/* Adicione mais notas de versão conforme necessário */}
        </Text>
        {/* 9. Licenças de Terceiros */}
        {/* <Text style={[stylesTexts.normal, styles.subtitle]}>Licenças de Terceiros</Text>
        <Text style={[stylesTexts.normal, styles.list]}>
          - Biblioteca A: Licença MIT
          {'\n'}
          - Biblioteca B: Licença Apache 2.0
          {'\n'}
          - Biblioteca C: Licença GPL
          {'\n'}
          {/* Adicione mais informações sobre licenças de terceiros conforme necessário */}
        {/* </Text>  */}
        {/* 10. Informações Legais */}
        <Text style={[stylesTexts.normal, styles.subtitle]}>Informações Legais</Text>
        <Text style={[stylesTexts.normal, styles.list]}>
          - Copyright © 2023 {appInfo.nome}
          {'\n'}
          - Todos os direitos reservados.
          {'\n'}
          - Logotipo e marca registrada são propriedade de Meu App Ltda.
          {'\n'}
          {/* Adicione mais informações legais conforme necessário */}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 8,
  },
  description: {
    fontSize: 16,
    marginTop:10,
    marginBottom: 24,
    textAlign: 'center',
  },
  contentContainer: {
    flexGrow: 1,
  },
  info: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lgpd: {
    marginTop: 24,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  list: {
    marginBottom: 16,
  },
  link: {
    color: '#007BFF',
    marginBottom: 16,
  },
});