import { StyleSheet, Text } from 'react-native';

import { colors } from '@/styles/colors';
import { fontFamily } from '@/styles/fontFamily';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:  colors.black,
      alignItems: 'center',
    },

    header: {
      width: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    title :{
      color: colors.white,
      fontSize: 24,
      fontFamily: fontFamily.extrabold,
    },

    subtitle :{
      color: colors.gray[300],
      fontSize: 14,
      fontFamily: fontFamily.medium,
    },

    ticket:{
      width: '100%',
      height: 600,
      backgroundColor: colors.white,
      borderRadius: 24,
      overflow: 'hidden',
      paddingBottom: 24,
    },
    content:{

    },

    flight:{
      width: '100%',
      height: 200,
      backgroundColor: colors.gray[300],
    }
   
  });