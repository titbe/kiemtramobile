import { View, Text } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'


const Screen3 = () => {
    return (
    <View>
        <View style={{alignItems:'center'}}>
            <ImageBackground source={require('./assets/imgFlowers1.png')} style={{height:397, width:376}}>
                    <View style={{flexDirection:'row', alignItems:'flex-end', justifyContent:'space-between', marginTop:330, marginHorizontal:20}}>
                        <View style={{flexDirection:'row', backgroundColor:'rgba(225,225,225,0.3)', borderRadius: 30, width: 171, height:48, alignItems:'center'}}>
                            <Image source={require('./assets/Ava.png')} style={{width:32, height:32}}/>
                            <View style={{flexDirection:'column', marginHorizontal: 15}}>
                                <Text style={{color:'#FFFFFF'}}>Anderson G.</Text>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <Image source={require('./assets/iconStart.png')}/>
                                    <Text style={{color:'#FFFFFF', marginLeft: 5}}>4.9</Text>
                                </View>
                            </View>
                            <Image source={require('./assets/Icon_Verify.png')} style={{marginBottom:20}}/>
                        </View>
                        <Text style={{color:'#FFFFFF', marginBottom:20}}>Until 26.09</Text>
                    </View>
                </ImageBackground>
        </View>


        <View style={styles.container}>
            <View style={{flexDirection:'row', marginTop: 20, justifyContent:'space-between'}}>
                <Text style={{fontWeight:800, fontSize:26, width:238}}>Go for a walk and feed the dog</Text>
                    <Image tintColor={'#454545'} source={require('./assets/Icon_Like.png')}/>
            </View> 

            <Text style={{fontSize:20, marginTop: 20}}>
                Leaving for a week, French Bulldog {"\n"} 
                Wilfred needs help feeding twice a day {"\n"} 
                and walk from 26 to 30 September. {"\n"} 
                I bought food, it will be easy. {"\n"} 
            </Text>  

            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image source={require('./assets/Vector.png')}/>
                <Text style={{marginLeft:10, fontSize:16, fontWeight:600}}>Reward 34$</Text>
            </View>    

            <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
                <Image source={require('./assets/Location.png')}/>
                <Text style={{marginHorizontal:15, fontSize:16, fontWeight:600}}>3 HERALD</Text>
                <Text style={{color:'#989898'}}>400m from you</Text>
            </View>  

            <View style={{flexDirection:'row', marginTop: 40, justifyContent:'space-between', alignItems:'center'}}>
                <TouchableOpacity style={{height:45, width:45, alignItems:'center', justifyContent:'center',backgroundColor:'#FFFFFF',borderRadius:12}}>
                    <Image source={require('./assets/Icon_Chat.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{height:60, width:251, alignItems:'center', justifyContent:'center',backgroundColor:'#A58EFF',borderRadius:12}}>
                    <Text>Respond</Text>
                </TouchableOpacity>
            </View>  
        </View>
    </View>
  )
}

export default Screen3
const styles = StyleSheet.create({
    container:{
        marginHorizontal:25,
        // backgroundColor:'red'
    }
})