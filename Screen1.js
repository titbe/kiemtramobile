import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native'
import { ImageBackground } from 'react-native'

const Cart = ()=>{
    return(
        <ImageBackground source={require('./assets/imgDogCard.png')} style={{height:228, width:232, marginTop:40}}>
            <View style={{marginHorizontal:15, marginVertical:15}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', }}>
                    <Text style={{color:'#FFFFFF'}}>Until 26.09</Text>
                    <Image source={require('./assets/Icon_Like.png')}/>
                </View>

                <View style={{flexDirection:'row', marginTop:150, backgroundColor:'rgba(225,225,225,0.3)', borderRadius: 30, width: 135}}>
                    <Image source={require('./assets/Ava.png')}/>
                    <Text style={{color:'#FFFFFF', marginHorizontal:5}}>Anderson G.</Text>
                    <Image source={require('./assets/Icon_Verify.png')}/>
                </View>
            </View>
            
            <View style={{flexDirection:'row', marginTop: 20, justifyContent:'space-between'}}>
                <Text style={{fontWeight:600, fontSize:16, width:123}}>Go for a walk and feed the dog</Text>
                <Image source={require('./assets/Icon_Chat.png')}/>
            </View>
        </ImageBackground>
    )
}

const Screen1 = () => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <TouchableOpacity style={{flexDirection: 'row', marginTop:20, backgroundColor:'#FFFFFF'}}>
                <Image source={require('./assets/iconSearch.png')}/>
                <Text style={{color:'#989898', marginLeft:10}}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('./assets/Icon_Filter.png')}/>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontWeight:700, fontSize: 20}}>Next to you</Text>
            <View style={{marginTop:5}}>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <Text style={{color:'#989898'}}>On the map</Text>
                    <Image source={require('./assets/iconArrow.png')} style={{marginTop: 7, marginLeft: 5}}/>
                </TouchableOpacity>
            </View>
        </View>

        <FlatList
            data={[1,2,3]}
            renderItem={Cart}
            horizontal
            style
        />
        
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontWeight:700, fontSize: 20}}>Categories</Text>
            <View style={{marginTop:5}}>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <Text style={{color:'#989898'}}>See all</Text>
                    <Image source={require('./assets/iconArrow.png')} style={{marginTop: 7, marginLeft: 5}}/>
                </TouchableOpacity>
            </View>
        </View>
       
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('./assets/Icon_Moving.png')}/>
                <View style={{marginLeft:5}}>
                    <Text style={{fontWeight:600}}>Moving and things</Text>
                    <Text>24 tasks</Text>
                </View>
            </View>
            <Image source={require('./assets/iconMore.png')} style={{marginTop:12}}/>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: 20}}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('./assets/Icon_House.png')}/>
                <View style={{marginLeft:5}}>
                    <Text style={{fontWeight:600}}>Help around the house</Text>
                    <Text>5 tasks</Text>
                </View>
            </View>
            <Image source={require('./assets/iconMore.png')} style={{marginTop:12}}/>
        </View>
    </View>
  )
}

export default Screen1
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FCFCFC',
        marginTop: 66,
        marginHorizontal:24
    }
})