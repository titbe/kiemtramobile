import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native'
import { ImageBackground } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { TextInput } from 'react-native'

const Screen1 = () => {
    const navigation = useNavigation()

    const Cart1 = ()=>{
        return(
            <TouchableOpacity style={{marginTop:25, marginLeft: 16, backgroundColor:'#FFFFFF', borderRadius:30}} onPress={()=>navigation.navigate('CartDog')}>
                <ImageBackground source={require('./assets/imgDogCard.png')} style={{height:228, width:232, marginHorizontal:20, marginVertical: 8}}>
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
            </TouchableOpacity>
        )
    }

  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View style={{flexDirection: 'row', marginTop:20, backgroundColor:'#FFFFFF',borderRadius:12 ,width:270 ,height: 55 ,alignItems:'center'}}>
                <Image source={require('./assets/iconSearch.png')}/>
                <TextInput style={{color:'#989898', marginLeft:10}} placeholder="Search"></TextInput>
            </View>
            <TouchableOpacity style={{marginTop:16, marginLeft: 17}}>
                <Image source={require('./assets/Icon_Filter.png')}/>
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', marginTop: 10}} onPress={()=>navigation.navigate('Next to you')}>
            <Text style={{fontWeight:700, fontSize: 20}}>Next to you</Text>
            <View style={{marginTop:5}}>
                <Text style={{flexDirection:'row'}}>
                    <Text style={{color:'#989898', fontSize:13}}>On the map</Text>
                    <Image source={require('./assets/iconArrow.png')} style={{marginTop: 7, marginLeft: 5}}/>
                </Text>
            </View>
        </TouchableOpacity>

        <FlatList
            data={[1,2,3]}
            renderItem={Cart1}
            horizontal
            style={{maxHeight:350}}
        />
        
        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:40}}>
            <Text style={{fontWeight:700, fontSize: 20}}>Categories</Text>
            <View style={{marginTop:5}}>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <Text style={{color:'#989898'}}>See all</Text>
                    <Image source={require('./assets/iconArrow.png')} style={{marginTop: 7, marginLeft: 5}}/>
                </TouchableOpacity>
            </View>
        </View>
       
        <View style={{marginTop: 19, marginLeft: 15, backgroundColor:'#FFFFFF', borderRadius:20}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal: 10, paddingVertical: 10}}>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('./assets/Icon_Moving.png')}/>
                    <View style={{marginLeft:5}}>
                        <Text style={{fontWeight:600}}>Moving and things</Text>
                        <Text>24 tasks</Text>
                    </View>
                </View>
                <Image source={require('./assets/iconMore.png')} style={{marginTop:12}}/>
            </View>
        </View>

        <View style={{marginTop: 5, marginLeft: 15, backgroundColor:'#FFFFFF', borderRadius:20}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal: 10, paddingVertical: 10}}>
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
    </View>
  )
}

export default Screen1
const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: '#FCFCFC',
        // backgroundColor: '#FFFFFF',
        marginTop: 30,
        marginHorizontal:24
    }
})