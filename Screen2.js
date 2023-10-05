import { View, Text } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'

const Screen2 = () => {
  return (
    <View>
      <ImageBackground source={require('./assets/MapsicleMap.png')} style={{width:327, height: 662}}>

      </ImageBackground>
    </View>
  )
}

export default Screen2