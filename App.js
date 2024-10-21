import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { FlashList }  from '@shopify/flash-list';

import dados from './service/dados.js';
import CardCidade from './components/card_cidade';

const exibirNaTela = ((cities,uf,index))=>{
  return(
    <CardCidade
    
    nome={cities}
    uf={uf}
    key={}
    
    />          
  )
}

export default function App() {
  console.log(dados.state, dados.cities);
  return (
    <View style={styles.container}>
      <FlashList
      data={dados.cities}
      renderItem= {(d)=>console.log(d)}
      exibirNaTela
     
      
      />
      <CardCidade nome="Tiete" uf="SP" key={111} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
