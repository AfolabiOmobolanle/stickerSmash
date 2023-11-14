import { StyleSheet, Text, View, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'

const Button = ({label, theme, onPress}) => {
    if (theme === 'primary')
 { 
    return (
    <View style = {styles.buttonContainer}>
    <Pressable style = {styles.button} 
    onPress = {onPress}
    >
    <FontAwesome style={styles.buttonIcon}/>
    <Text style = {styles.buttonText}>{label}</Text>
    </Pressable>
    </View>
  );

  
}}

export default Button

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4, 
        borderColor: "aqua",
         borderRadius: 18 
      },
button:{
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
} ,
buttonText:{
        color: '#fff',
        fontSize: 20,
        fontWeight: "400"
    
},
buttonIcon:{
    color:'gray'
}
})