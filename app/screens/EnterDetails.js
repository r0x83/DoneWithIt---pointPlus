import DateTimePicker from '@react-native-community/datetimepicker';
import { Children, useState } from 'react';

import { Dropdown } from 'react-native-element-dropdown';
import React from 'react';
import { Card, Icon } from 'react-native-elements';
import DropDown from 'react-native-multi-level-selector';
import PickerCascader  from 'react-native-picker-cascader';
import {
    View,
    Text,
    Input,
    Button,
    SafeAreaView,Modal,Pressable,Alert,
    Keyboard,
    ScrollView,
    
    
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Platform, Image
} from 'react-native';
import { child } from 'fontawesome';



const EnterDetails = () => {
  const options = [
    {
      value: 'Department',
      nested: [
        {value: 'Customer Relations'},
        {value: 'IT'},
        {value: 'Human Resources'},
        {value: 'Managerial'},
      ],
    },
    {
      value: 'Location',
      nested: [
        {
          value: 'Bangalore',
          nested: [
            {
              value: 'Whitefield',
              nested: [
                {
                  value: 'ITPL',
                },
              ],
            },
            {
              value: 'Jayanagar',
            },
            {
              value: 'Majestic',
            },
          ],
        },
        {
          value: 'New York',
          nested: [
            {
              value: "Hell's Kitchen",
            },
            {
              value: 'Harlem',
            },
          ],
        },
        {value: 'Birmingham'},
      ],
    },
    {
      value: 'Role',
      nested: [
        {
          value: 'SDE 1',
          nested: [
            {
              value: 'Trainee',
            },
            {
              value: 'Associate',
            },
          ],
        },
        {value: 'SDE 2'},
        {value: 'SDE 3'},
      ],
    },
    {
      value: 'Is Fresher',
    },
  ];
  const [modalVisible, setModalVisible] = useState(false);
    const [mydate, setDate] = useState(new Date());
    const [displaymode, setMode] = useState('date');
    const [isDisplayDate, setShow] = useState(false);
    const changeSelectedDate = (event, selectedDate) => {
        const currentDate = selectedDate || mydate;
        setDate(currentDate);
        setShow(false);
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
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                   
                </Text>
            );
        }
        return null;
    };
    console.log(mydate);
    return (

        <SafeAreaView style={styles.container}>
          <ScrollView>
          <View style={styles.centeredView}>
          <TouchableOpacity  >
                    <Card containerStyle={{
                        width: 300, height: 170, borderRadius: 15, backgroundColor: '#e8e7e6',marginBottom:50
                    }}>
                       

      <Modal  
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity  ><Card containerStyle={{width:70,height:70,borderRadius:15,backgroundColor:'#e8e7e6'}}>
           <Icon
  name='upload' type='font-awesome-5' size={40}/>
  <Card.Title style={{marginTop:20,fontSize:18,color:'#4f4e4c'}}>Upload Certificates</Card.Title></Card></TouchableOpacity>
           <TouchableOpacity style={{color:'white'}}><Card containerStyle={{width:70,height:70,borderRadius:15,backgroundColor:'#e8e7e6'}}>
           <Icon
  name='list' type='font-awesome-5' size={40} iconStyle={{color:'blue'}}/>
  <Card.Title style={{marginTop:20,fontSize:18,color:'#4f4e4c'}}>View Certificates</Card.Title></Card></TouchableOpacity>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
       <Icon
  name='upload' type='font-awesome-5' size={40}/>
      </Pressable>
      </Card></TouchableOpacity></View>
    
            
            <Text style={{ fontWeight: 'bold', marginTop: -20 }}>Name:  </Text>
            <View style={{ flexDirection: 'column', borderRadius: 15, borderColor: '#3173de', borderWidth: 2, height: 40, }}>

                <TextInput style={styles.textinput} /></View>
            <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Venue: </Text>
            <View style={{ flexDirection: 'column', borderRadius: 15, borderColor: '#3173de', borderWidth: 2, height: 40, }}>

                <TextInput style={styles.textinput} /></View>
            <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Number of Days: </Text>
            <View style={{ flexDirection: 'column', borderRadius: 15, borderColor: '#3173de', borderWidth: 2, height: 40, }}>

                <TextInput style={styles.textinput} /></View>
                <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Date: </Text>
            
           
                <TouchableOpacity onPress={displayDatepicker} ><Icon
                            name='calendar-alt' type='font-awesome-5' size={40} iconStyle={{marginTop:20,marginLeft:10}}/></TouchableOpacity>
                            <Text style={{marginTop:20}}>{String(mydate)}</Text>
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
                {/* <Text style={{ fontWeight: 'bold', marginTop: 20 }}>{mydate.format()}</Text> */}
            </View>
            <View style={{ marginTop: 100 }}>
            <Text style={{ fontWeight: 'bold', marginTop: -50 }}> Select Certificate Type:  </Text>
            {renderLabel()}
                <Dropdown
                    style={[styles.dropdown, isFocus && {  borderWidth: 1 }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select Activity Type' : '...'}
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
            </ScrollView>
        </SafeAreaView>)
}

export default EnterDetails;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingLeft: 60,
        paddingRight: 60,
        paddingTop: Platform.OS === "android" ? 20 : 0,
        alignSelf: 'stretch',
        borderRadius: 15,
        borderColor: '#3173de',
    },
    textinput: {
        alignSelf: 'stretch',
        width: '82%',
        height: 23,
        marginBottom: 30,

        color: 'black',
        paddingTop: 4,
        marginLeft: 20,



    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        paddding: 20,
        backgroundColor: '#3173de',
        marginTop: 30,
        height: 50,
    }, btntext: {

        padding: 10,
        color: '#ffff',
        fontWeight: 'bold',
    },
    dropdown: {
        margin: 1,
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
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      marginTop: -250,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      height:300,
      width:300
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
});