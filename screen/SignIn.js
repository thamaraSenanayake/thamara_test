import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

class SignIn extends React.Component{

    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            emailError:'',
            passwordError:'',
            userValidity:''
        }

        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this); 
        this.singInButtonPress = this.singInButtonPress.bind(this);
    }

    setEmail(text){
        this.setState({
            email:text,
            emailError:'',
            userValidity:''
        })
    }

    setPassword(text){
        this.setState({
            password:text,
            passwordError:'',
            userValidity:''
        })
    }

    singInButtonPress(){
        if (this.state.password.length == 0) {
            this.setState({
                passwordError:'password cant be null'
            });
            return;
        }
        else if(this.state.email.length == 0) {
            this.setState({
                emailError:'invalid email'
            });
            return;
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))){
            this.setState({
                emailError:'invalid email'
            });
            return;
        }

        this.setState({
            userValidity:'Valid user'
        })

    }

    

    render(){
        return(
            
            <View style={styles.container}>
                <Text style={styles.title}>
                    SignIn
                </Text>

            </View>
        );
    }
};


export default SignIn;

const styles = StyleSheet.create({

    form:{
        //flex:1,
        // backgroundColor:'red',
        justifyContent:'center'
    },

    row:{
        flexDirection:'row',
        // backgroundColor:'black',
        
    },
    rowIteam:{
        flex:1,
        // backgroundColor:'yellow',
        padding:10
        
    },
    rowIteamRight:{
        flex:1,
        // backgroundColor:'yellow',
        padding:10,
        alignItems:'flex-end'
        
    },

    outterContainer:{
        padding: 10,
        paddingTop:50,
        flex:1,
        backgroundColor:"white",
    },
      
    container:{
      flex:1,
      backgroundColor:"white",
      alignItems:'center',
      justifyContent:'center'
    },

    button:{
        backgroundColor:"#00468b",
        width:100,
        alignItems:'center',
        justifyContent:'center',
        height:40,
        // flex:1,
    },

    center:{
        // backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',
        // justifyContent:'center'
    },

    buttonText:{
        color:'#fff',
        textAlign:'center',
        // backgroundColor:'red',
        marginTop:0,
       // marginBottom:10,
        fontSize:18,
        justifyContent:'center',
    },

    sizeBox:{
        height:20,
    },

    text:{
        color:"#161924",
        fontSize:20,
        fontWeight:"500"
    },

    errorText:{
        color:"red",
        fontSize:18,
        fontWeight:"500"
    },

    errorTextCEnter:{
        color:"red",
        fontSize:18,
        fontWeight:"500",
        textAlign:'center'
    },

    title:{
        color:"#00008b",
        fontSize:24,
        fontWeight:"bold",
        textAlign:'center'
    },
});