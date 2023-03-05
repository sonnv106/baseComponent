import {StyleSheet, Text, View, TouchableOpacity, Animated, PanResponder} from 'react-native';
import React, { useRef } from 'react';

const AnimatedScreen = () => {
    let heightDefault = 100;
    const heightRef = useRef(new Animated.Value(0)).current
    const paddingRef = useRef(new Animated.Value(0)).current
    const panResponder = useRef(PanResponder.create({
        onStartShouldSetPanResponder: ()=> true,
        onPanResponderMove: (event, gesture)=>{
            if(gesture.y0 < gesture.moveY){
                heightRef.setValue(heightDefault-gesture.dy)
            }
            if(gesture.moveY < gesture.y0){
                paddingRef.setValue(gesture.dy)
            }
        },
        onPanResponderRelease: (event, gesture) =>{

        }
    })).current
 const boxAnimation = {
    height: heightRef
 }
 const paddingBox = {
    paddingBottom: paddingRef
 }
  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <View style={styles.viewContainerAnim}>
        <Animated.View style={[styles.viewAnim,paddingBox]}  >
            <Animated.View style={[styles.child, {height: heightDefault},boxAnimation]}/>
        </Animated.View>
      </View>
    </View>
  );
};

export default AnimatedScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7D869C',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainerAnim: {
    backgroundColor: '#84C0C6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
  },
  viewAnim: {
    backgroundColor: '#21A179',
    height: 300,
    width: 50,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  child: {
    backgroundColor: '#FB9F89',
    width: '100%',
  }
});
