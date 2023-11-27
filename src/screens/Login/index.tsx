import React, { useState } from 'react';
import { View, Text, Button, TextInput, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Home } from "../Home/index";


export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongLogin, setWrongLogin] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  const navigation = useNavigation();

  const handlePageChange = () => {
    setIsLogin(!isLogin);
  };

  // Create a function to handle the login via API
  // https://dummyjson.com/docs/auth
  const handleLogin = () => {

    //kminchelle
    //0lelplR

    if (email.includes('@')) setEmail(email.split('@')[0]); 

    try {
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: email,
          password: password,
        })
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.message === "Invalid credentials") {
          setWrongLogin(true);
        } else {
          setWrongLogin(false);
          navigation.navigate('Main', { screen: 'Home2' } as never);
        }
      })
      .catch((error) => console.error(error))
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ padding: 45 }}>
      <Text style={{ color: '#8F00FF', fontSize: 24, height: 50, marginBottom: 13, marginTop: 70, textAlign: 'center'}}>Login</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color: '#6B5E5E', textAlign: 'center', maxWidth: 260, fontSize: 16, fontWeight: '400', marginBottom: 35}}>
          By signing in you are agreeing to our{' '}
          <Text style={{ color: '#8F00FF' }}>Terms and privacy policy</Text>
        </Text>
      </View>
      <View>
        <View style={{marginBottom: 57, display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', width: '100%', }}>
          <View style={{borderBottomColor: '#8F00FF', borderBottomWidth: 1}}>
            <Text style={{color: '#8F00FF', fontSize: 16, fontWeight: '500'}}>Login</Text>
          </View>
          <View>
            <Text  style={{color: 'black', fontSize: 16, fontWeight: '500'}}>Register</Text>
          </View>
        </View>
      </View>
      <View style={{marginBottom: 57}}>
        <TextInput onChangeText={(text) => setEmail(text)} placeholder="Email Address" style={{ borderBottomWidth: 1, borderBottomColor: 'black' }} />
      </View>
      <View style={{marginBottom: 48}}>
        <TextInput  onChangeText={(text) => setPassword(text)} secureTextEntry placeholder="Password" style={{ borderBottomWidth: 1, borderBottomColor: 'black' }} />
      </View>
      <View style={{ marginBottom: 60, flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginRight: 10, display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
          <Switch value={rememberPassword} onValueChange={(newValue) => setRememberPassword(newValue)} />
          <Text>Remember Password</Text>
        </View>
        <View>
          <Text style={{ color: 'purple' }}>Forget Password</Text>
        </View>
      </View>
      <View style={{width: '100%', height: 45}}>
        <Button title="Login" color="linear-gradient(180deg, rgba(104, 51, 255, 0.90) 0%, rgba(189, 0, 255, 0.90) 89.58%);" onPress={handleLogin} />
      </View>
      {wrongLogin ? <Text style={{textAlign: 'center', color: 'red', fontWeight: '400'}}>E-mail ou senha incorreto, tente novamente</Text> : null}
    </View>
  );
};