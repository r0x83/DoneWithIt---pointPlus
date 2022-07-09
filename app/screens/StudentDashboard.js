import React, { Component } from 'react';
import { Text, View, StyleSheet ,Button,Platform} from 'react-native';
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';
import {Card} from 'react-native-elements';

const Icon = ({ icon, item, background }) => (
    <FontAwesome
        name={icon}
        size={30}
        color={
            item.iconColor || (!item.background || !background ? '#3498db' : '#fff')
        }
        style={item.styleIcon}
    />
);


const data = [
    {   
        name: 'Upload Certificate',
        background:'#3173de',
        icon: (item, background) => Icon({ icon: 'upload', item, background }),
        iconColor: 'white',
        rippleColor: 'gold',
        
    },
    {
        name: 'View Certificates',
        background: '#3173de',
        icon: (item, background) => Icon({ icon: 'list', item, background }),
        styleIcon: { color: 'white' },
        borderRadius:'50',
    },
    {
        name: 'Raise Ticket',
        background: '#3173de',
        icon: (item, background) => Icon({ icon: 'hand', item, background }),
       
    
    },
    {
        name: 'View Activity Points',
        background: '#3173de',
        icon: (item, background) => Icon({ icon: 'trophy', item, background }),
        styleName: { color: 'white', fontWeight: 'bold' },
       borderRadius:'3',
    },
   
];

    

const StudentDashboard =()=> {
    const card = ({ name }) => console.log('Card: ' + name);
   
    return (
       
        <View style={styles.container}>
             

            <View style={{marginTop:30}}>
            <Card >
 <View>
  <Card.Title style={{marginLeft:-180}}>Welcome!First Name</Card.Title></View>
  <View><Card.Image style={{height:70,width:70,marginLeft:280}}source={require('../assets/user.png')} />
  </View>
  
 
</Card></View>
            
            <Dashboard style={{marginTop:50,borderRadius:30}}
                data={data}
                background={true}
                card={card}
                column={2}
                rippleColor={'yellow'}
            /></View>
       
    );
}

export default StudentDashboard;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        
    },
});