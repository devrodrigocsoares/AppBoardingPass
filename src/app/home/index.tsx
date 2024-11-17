import { ImageBackground, Text, View } from 'react-native';

import {Ionicons} from "@expo/vector-icons";

import {styles} from './styles';

import { Flight } from '@/components/flight';
import { colors } from '@/styles/colors';

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
        <View style={styles.content}>
          <View style={styles.flight}>
            <Flight label="São Paulo" value="GRU"/>

            <View style={styles.duration}>
              <Ionicons name="airplane-sharp" size={32} color={colors.black}/>
              
              <Text style={styles.hours}>11h 20m</Text>
            </View>

            <Flight label="Paris" value="PY"/>
          </View>

        </View>

     </View>
    </View>
  );
}