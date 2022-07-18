import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native';

export default class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, color:"#87CEEB", icon:"https://image.shutterstock.com/image-vector/certificate-template-diploma-modern-design-260nw-1310317375.jpg", name: "Certificate #1", tags:['11/12/21',  'tag 3']},
        {id:2, color:"#87CEEB", icon:"https://img.freepik.com/free-vector/professional-certificate-appreciation-golden-template-design_1017-31376.jpg?w=2000", name: "Certificate #2", tags:['13/02/19',  'tag 3']}, 
        {id:3, color:"#87CEEB", icon:"https://img.freepik.com/free-vector/professional-certificate-appreciation-golden-template-design_1017-31376.jpg?w=2000", name: "Certificate #3", tags:['05/36/21',  'tag 3']}, 
        {id:4, color:"#87CEEB", icon:"https://img.freepik.com/free-vector/professional-certificate-appreciation-golden-template-design_1017-31376.jpg?w=2000", name: "Certificate #4", tags:['22/07/19',  'tag 3']}, 
        {id:5, color:"#87CEEB", icon:"https://img.freepik.com/free-vector/professional-certificate-appreciation-golden-template-design_1017-31376.jpg?w=2000", name: "Certificate #5", tags:['03/02/22',  'tag 3']}, 
        {id:6, color:"#87CEEB", icon:"https://image.shutterstock.com/image-vector/certificate-template-diploma-modern-design-260nw-1310317375.jpg", name: "Certificate #6", tags:['01/01/21',  'tag 3']}, 
        {id:7, color:"#87CEEB", icon:"https://img.freepik.com/free-vector/professional-certificate-appreciation-golden-template-design_1017-31376.jpg?w=2000", name: "Certificate #7", tags:['02/03/21',  'tag 3']}, 
        {id:8, color:"#87CEEB", icon:"https://image.shutterstock.com/image-vector/certificate-template-diploma-modern-design-260nw-1310317375.jpg", name: "Certificate #8", tags:['15/07/21',  'tag 3']},
        {id:9, color:"#87CEEB", icon:"https://image.shutterstock.com/image-vector/certificate-template-diploma-modern-design-260nw-1310317375.jpg", name: "Certificate #9", tags:['24/02/21',  'tag 3']},
      ],
    };
  }

  cardClickEventListener = (item) => {
    Alert.alert(item.name);
  }

  tagClickEventListener = (tagName) => {
    Alert.alert(tagName);
  }

  renderTags = (item) =>{
    return item.tags.map((tag, key) => {
      return (
       
          <Text style={styles.btnColor} >{tag}</Text>
       
      );
    })
  }

  render() {
    return (
      <View style={styles.container}>
    
          <View style={styles.inputContainer}>
          
           
         
        </View>

        <FlatList 
          style={styles.notificationList}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {borderColor:item.color}]} onPress={() => {this.cardClickEventListener(item)}}>
                <View style={styles.cardContent}>
                  <Image style={[styles.image, styles.imageContent]} source={{uri: item.icon}}/>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={[styles.cardContent, styles.tagsContent]}>
                  {this.renderTags(item)}
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  formContent:{
    flexDirection: 'row',
    marginTop:30,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:45,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    margin:10,
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center'
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  notificationList:{
    marginTop:20,
    padding:10,
  },
  card: {
    height:null,
    paddingTop:10,
    paddingBottom:10,
    marginTop:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderTopWidth:40,
    marginBottom:20,
  },
  cardContent:{
    flexDirection:'row',
    marginLeft:10, 
  },
  imageContent:{
    marginTop:-40,
  },
  tagsContent:{
    marginTop:10,
    flexWrap:'wrap'
  },
  image:{
    width:100,
    height:80,
    borderRadius:0,
  },
  name:{
    fontSize:20,
    fontWeight: 'bold',
    marginLeft:10,
    alignSelf: 'center'
  },
  btnColor: {
    padding:10,
    fontWeight: 'bold',
    marginHorizontal:3,
   
    marginTop:5,
  },
});  