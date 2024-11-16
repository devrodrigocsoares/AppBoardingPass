import { ImageBackground, Text, View } from 'react-native';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
     <ImageBackground 
        style={styles.header} 
        source={require("@/assets/imgParis.jpg")}
     >
        <Text style = {styles.title}>Cartão de Embarque</Text>
        <Text style = {styles.subtitle}>Faltam 45 dias para sua viagem</Text>
        
     </ImageBackground>
     <View style={styles.ticket}>

     </View>
    </View>
  );
}