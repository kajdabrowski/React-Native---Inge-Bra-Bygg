"use strict";
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({


  //swipeable style

  rightAction: {
    backgroundColor: "#ff0000",
    justifyContent: "center",
    flex: 1
  },

  actionText: {
    color: "#fff",
    fontWeight:"600",
    padding: 20
  },






  container: {
    backgroundColor: "#264653",
    // paddingTop: 50,
    // paddingHorizontal: 10,
    // borderRadius: 6,
    height:800,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    padding:10,
    backgroundColor: "#0e0515",
    borderRadius: 6,
    textAlign:'center',

  },
  textHeader:{
    fontWeight: 'bold',
    alignSelf:'center',
    fontSize:27,
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    margin: 20,
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#dad1e1",
    borderRadius: 6,
    margin: 20,
    alignSelf: 'center',
  },
  image: {
    height: 200,
    width: 370,
    padding: 10,
    alignSelf: 'center',
    resizeMode: 'stretch',
   justifyContent:'center' ,
  },
  loginButton: {
    backgroundColor:'#0e0515',
    borderWidth: 2,
    borderRadius: 6,
    width:200,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center',
  },
  listItems: {
    justifyContent: "center",
    padding: 10,
    
    marginBottom: 10,
  },
 
});
