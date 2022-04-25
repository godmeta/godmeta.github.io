import React, { Component } from 'react';
import { View, Pressable, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';


function login(addr, Email, Password, self){
  // var APIURL = "http://10.0.2.2:80/SignIn/login.php";
    // https://3dc1-2001-d08-1b9c-8e99-c052-19bf-27de-c748.ngrok.io
    var APIURL = addr+"/SignIn/login.php";   //API to render signup

    var headers = {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    };
          
    var Data ={
      Email: Email,
      Password: Password
    };

    fetch(APIURL,{
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data)
    })
    .then((Response)=>Response.json())
    .then((Response)=>{
      // alert(Response[0].Message)
      if (Response[0].Message == "Success") {
        console.log("true")
        // this.props.navigation.navigate("HomeScreen");
        self.props.navigation.navigate("HomeScreen");
      }
      console.log(Data);
    })
    .catch((error)=>{
      console.error("ERROR FOUND" + error);
    })
}

function login_orig(Email, Password, self){

  // var APIURL = "http://10.0.2.2:80/SignIn/login.php";
  // https://3dc1-2001-d08-1b9c-8e99-c052-19bf-27de-c748.ngrok.io
  var APIURL = "http://3dc1-2001-d08-1b9c-8e99-c052-19bf-27de-c748.ngrok.io/SignIn/login.php";   //API to render signup

  var headers = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
  };
        
  var Data ={
    Email: Email,
    Password: Password
  };

  fetch(APIURL,{
    method: 'POST',
    headers: headers,
    body: JSON.stringify(Data)
  })
  .then((Response)=>Response.json())
  .then((Response)=>{
    // alert(Response[0].Message)
    if (Response[0].Message == "Success") {
      console.log("true")
      // this.props.navigation.navigate("HomeScreen");
      self.props.navigation.navigate("HomeScreen");
    }
    console.log(Data);
  })
  .catch((error)=>{
    console.error("ERROR FOUND" + error);
  })
}


export default class signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      check_textInputChange : false,
      secureTextEntry : true,
    };
  }


  InsertRecord=()=>{
    var Email = this.state.email;
    var Password = this.state.password;

    if ((Email.length==0) || (Password.length==0)){
      alert("Required Field Is Missing!!!");
    }else{



// fetch("http://3dc1-2001-d08-1b9c-8e99-c052-19bf-27de-c748.ngrok.io/SignIn/hello.json")
// fetch("http://godmeta.github.io/hello.json")
fetch("http://godmeta.github.io/dmeta.json")
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response)=>{
alert('2022 '+JSON.stringify(response)+'  addr '+response.addr);
//      alert(response[0].Message);       // If data is in JSON => Display alert msg

login(response.addr, Email, Password, this);
    })
    .catch((error)=>{
        alert("Error Occured" + error);
    })

    // login_orig(Email, Password, this);
    }
    
    
  }



  updateSecureTextEntry(){
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry
    });
  }

  render() {
    return (
      <View style={styles.viewStyle}>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter Email"
              placeholderTextColor="#ff0000"
              style={styles.textInput}
              onChangeText={email=>this.setState({email})}
              />
          </View>

          <View style={styles.action}>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor="#ff0000"
              style={styles.textInput}
              secureTextEntry={this.state.secureTextEntry ? true : false}
              onChangeText={password=>this.setState({password})}
              />
                <TouchableOpacity
                  onPress={this.updateSecureTextEntry.bind(this)}>
                  {this.state.secureTextEntry ?
                  <Feather
                  name="eye-off"
                  color="grey"
                  size={20}
                  />
                :  
                  <Feather
                  name="eye"
                  color="black"
                  size={20}
                  />
                }
                </TouchableOpacity>  
          </View>


                {/* Button */}

                <View style={styles.loginButtonSection}>    
                  <Pressable
                    style={styles.loginButton} 
                    onPress={()=>{
                      this.InsertRecord()
                    }}
                    >
                      <Text style={styles.text}>Sign In</Text>
                  </Pressable>
                </View>

                <View style={styles.loginButtonSection}>
                  <Pressable
                    style={styles.loginButton} 
                    onPress={()=>{
                      this.props.navigation.navigate("SignUpScreen");
                    }}
                    >
                      <Text 
                        style={styles.text}
                      >Create new Account</Text>
                    </Pressable>
                  </View>
      </View>
    );
  }
}
