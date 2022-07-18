import React from "react";
import { Text ,View, StyleSheet } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Unorderedlist from 'react-native-unordered-list';

const CreateCard = () => {
    
    return(
        <View>
        <Card style={Styles.text}>


    <Card.Cover source={{ uri: 'https://marketplace.canva.com/EAE6pCMh_J0/1/0/1600w/canva-green-white-modern-square-ceremony-award-certificate-_xh1LqamDhc.jpg' }} />
      
    
</Card>
  <Card style={Styles.container}>
    <Card.Content>
    <Paragraph style={Styles.bg}>Name:  </Paragraph>
        <Paragraph style={Styles.bg}>Date:  </Paragraph>
        <Paragraph style={Styles.bg}>Venue:  </Paragraph>
            <Paragraph style={Styles.bg}>Duration:  </Paragraph>
        <Paragraph style={Styles.bg}>Points Awarded :  </Paragraph>
        <Paragraph style={Styles.bg}>Assigned Date:  </Paragraph>
        <Paragraph style={Styles.bg}>Last Modified:  </Paragraph>
    <Paragraph style={Styles.bg}>Certificate Type:  </Paragraph>
    <Unorderedlist ><Text>Sports and Cultural</Text>
    <Unorderedlist><Text>Running</Text>
     </Unorderedlist>
</Unorderedlist>
       

        </Card.Content>
    
    </Card>

  <Button style={Styles.raise}>Raise A Ticket</Button>
 
    </View> 
    )
}
export default CreateCard;

const Styles = StyleSheet.create({
    container :{
        alignContent:'center',
    
    },
  bg :{
        backgroundColor:"   rgb(128, 128, 128)",
    borderRadius:5,
    width:250,
    height:30,
    marginTop:15
    
    },

  
 

})
