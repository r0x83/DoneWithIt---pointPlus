
 import DateTimePicker from '@react-native-community/datetimepicker';
 import  {useState} from 'react';
 import { Dropdown } from 'react-native-element-dropdown';
import React from 'react';
import {Card,Icon} from 'react-native-elements';

import {
  View,
  Text,
  Input,
  Button,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,Image
} from 'react-native';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

const EnterDetails = () => {
    const [mydate, setDate] = useState(new Date());
   const [displaymode, setMode] = useState('date');
   const [isDisplayDate, setShow] = useState(false);
   const changeSelectedDate = (event, selectedDate) => {
   const currentDate = selectedDate || mydate;
   setDate(currentDate);
};
const [value, setValue] = useState(null);
const [isFocus, setIsFocus] = useState(false);
const showMode = (currentMode) => {
   setShow(true);
   setMode(currentMode);
};
const displayDatepicker = () => {
   showMode('date');
};
const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={{fontWeight:'bold',fontSize:15}}>
        Select Certificate Type:
        </Text>
      );
    }
    return null;
  };
  return (
    
  <SafeAreaView style={styles.container}>
    <View style={{marginTop:-50,marginBottom:60,marginLeft:45}}><TouchableOpacity  ><Card containerStyle={{width:170,height:170,borderRadius:15,backgroundColor:'#e8e7e6'}}>
           <Icon
  name='plus-circle' type='font-awesome-5' size={40} iconStyle={{marginTop:50}}/></Card></TouchableOpacity></View>
   
  <Text style={{fontWeight:'bold',marginTop:-30}}>Name: </Text>
  <View style={{flexDirection:'column',borderRadius:15,borderColor:'#3173de',borderWidth:2,height:40,}}>
    
  <TextInput style={styles.textinput} /></View>
  <Text style={{fontWeight:'bold',marginTop:20}}>Venue: </Text>
 <View style={{flexDirection:'column',borderRadius:15,borderColor:'#3173de',borderWidth:2,height:40,}}>
    
  <TextInput style={styles.textinput}  /></View>
  <Text style={{fontWeight:'bold',marginTop:20}}>Number of Days: </Text>
  <View style={{flexDirection:'column',borderRadius:15,borderColor:'#3173de',borderWidth:2,height:40,}}>
   
  <TextInput style={styles.textinput}  /></View>
  <Text style={{fontWeight:'bold',marginTop:20}}>Date: </Text>
  <View style={{flexDirection:'column'}}>
  <Button onPress={displayDatepicker} title="Show date picker!" />
  {isDisplayDate && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={mydate}
                     mode={displaymode}
                     is24Hour={true}
                     display="default"
                     onChange={changeSelectedDate}
            />
         )} 
       
  </View>
  <View style={{marginTop:100}}>
  {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue',borderWidth:5 }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          
        />
      </View>
  </SafeAreaView>)
}

export default EnterDetails;
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'white',
  paddingLeft:60,
paddingRight:60,
paddingTop:Platform.OS==="android"?20:0,
alignSelf:'stretch',
borderRadius:15,
borderColor:'#3173de',
},
textinput:{
  alignSelf: 'stretch',
  width:'82%',
  height:23,
  marginBottom:30,
  
  color:'black',
    paddingTop:4,
    marginLeft: 20,
  
  

},
button:{
  alignSelf:'stretch',
  alignItems:'center',
  paddding:20,
  backgroundColor:'#3173de',
  marginTop:30,
  height:50,
},btntext:{
  
  padding:10,
  color:'#ffff',
  fontWeight:'bold',
},
dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
  