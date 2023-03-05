import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React, { useEffect } from 'react'

const HomeScreen = ({navigation, route}) => {
 const navigateToScreen = (screenName) => {
    navigation.navigate(screenName)
 }
  return (
    <ScrollView>
        <Pressable onPress={()=> navigateToScreen('ExampleComponent')} style = {styles.btnNavigate}>
            <Text style={styles.txtBtnTitle}>
                Test Render
            </Text>
        </Pressable>
        <Pressable onPress={()=> navigateToScreen('AnimatedScreen')} style = {styles.btnNavigate}>
            <Text style={styles.txtBtnTitle}>
            Animated Screen
            </Text>
        </Pressable>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {

    },
    btnNavigate: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#647AA3'
    },
    txtBtnTitle: {
        color: 'white',
        fontSize: 16,

    }
})