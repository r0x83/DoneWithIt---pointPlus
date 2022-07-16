import React, { Component } from 'react';
import { Text, View, StyleSheet ,Button,Platform,TouchableOpacity,Animated} from 'react-native';
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';
import {Card,Icon} from 'react-native-elements';
import  { useState, useEffect, useRef } from 'react'
import {ProgressBar} from '@react-native-community/progress-bar-android';
import * as Progress from 'react-native-progress';
 

const ViewActivityPoints=({navigation})=> {

  

  
    
    return (
       
        <View style={styles.container}>
        <View >
        <Card containerStyle={{height:200,backgroundColor:'purple',marginTop:5,borderRadius:20}}>
        <View style={{marginTop:5,marginLeft:130}}>
        <Card.Image style={{height:90,width:90,marginLeft:-5}}source={require('../assets/graduated.png')} />
        <Text style={{marginLeft:15,marginTop:10}}>Name</Text>
        <Text style={{marginLeft:15}}>Class</Text>
        <Text style={{marginLeft:-60,color:'green',fontWeight:'bold',fontSize:20}}>Current points:60/100</Text>
        </View>
        </Card>
        </View>
             

            <View style={{marginTop:-10}}>
            <Card  containerStyle={{height:280,borderRadius:20}}>
 
  
  <View >
  <Text  style={{marginTop:20}}>Category 1:</Text>
     <View style={styles.progressBar}>
       
     
     <Progress.Bar progress={0.7} width={200} showsText={true} color={'red'} borderRadius={10} borderColor={'white'}/></View>
     <Text  style={{marginTop:20}}>Category 2:</Text>
 <View style={styles.progressBar}> 

 <Progress.Bar progress={0.5} width={200}  color={'green'}  borderColor={'white'}/>
     </View>
     <Text style={{marginTop:20}}>Category 3:</Text>
     <View style={styles.progressBar}> 
     
 <Progress.Bar progress={0.3} width={200}  color={'blue'}  borderColor={'white'}/>
     </View>
    
     
     </View>
      

     

      
  
  
  
  
  
 
 
  
 
</Card></View>
<View style={{marginTop:-10}}>
            <Card  containerStyle={{height:270,borderRadius:20}}>
 
  
  <View >
     
     <View style={{marginTop:30,marginLeft:100}}> 
     <Text style={{marginBottom:20,marginLeft:-20,fontWeight:'bold'}}>Total Activity Points Status:</Text>
     <Progress.Circle size={150} showsText={true} thickness={5} progress={0.6} />
     </View>  
     
     </View>
      

     

      
  
  
  
  
  
 
 
  
 
</Card></View>
            </View>
       
    );
}

export default ViewActivityPoints;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        
    },
    progressBar: {
   height:10,
   flexDirection: "row",
   width:'100%',
   
   backgroundColor: 'white',
  
   
   
   marginTop:20
 }
});

