import { StyleSheet, Text } from 'react-native';

import { colors } from '@/styles/colors';
import { fontFamily } from '@/styles/fontFamily';
import { Flight } from '@/components/flight';

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
      padding: 20,

    },

    flight:{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 52,
    },

    duration:{
      alignItems: 'center',
    },

    hours:{
      color: colors.gray[800],
      fontSize: 14,
      fontFamily: fontFamily.regular,

    },
   
  });