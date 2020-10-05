import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import colors from '../../constants/colors';

const login = props => {
  const [data, setData] = useState({
    email: '',
    password: '',
    isvalidEmail: true,
    isValidPassword: true,
  });

  const emailValidator = email => {
    const re = /\S+@\S+\.\S+/;

    if (!email || email.length <= 0) {
      return setData({
        ...data,
        isvalidEmail: false,
      });
    }
    if (!re.test(email))
      return setData({
        ...data,
        isvalidEmail: false,
      });

    return setData({
      ...data,
      email: email,
      isvalidEmail: true,
    });
  };

  const passwordValidator = password => {
    if (password.length <= 4) {
      return setData({
        ...data,
        isValidPassword: false,
      });
    }
    return setData({
      ...data,
      password: password,
      isValidPassword: true,
    });
  };

  console.log('email', data.email);
  console.log('password', data.password);
  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView behaviour="position" style={styles.loginContainer}>
        <Text style={styles.email}>Email</Text>

        <TextInput
          // placeholder="Enter your email address"
          style={styles.input}
          id="email"
          label="E-mail"
          keyboardType="email-address"
          required
          email
          autoCapitalize="none"
          returnKeyType="next"
          onInputChange={text => data.email(text)}
          onEndEditing={e => emailValidator(e.nativeEvent.text)}
        />
        {data.isvalidEmail ? null : (
          <Text style={{ color: 'red' }}>Enter a valid email</Text>
        )}

        <View style={{ marginTop: 15 }}>
          <Text style={styles.email}>Password</Text>
          <TextInput
            style={styles.input}
            //placeholder="Enter your password here"
            id="Password"
            label="password"
            required
            secureTextEntry
            onInputChange={text => setData.password(text)}
            onEndEditing={e => passwordValidator(e.nativeEvent.text)}
          />
          {data.isValidPassword ? null : (
            <Text style={{ color: 'red' }}>Enter a valid password</Text>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Button
              color="hsla(200, 73%, 44%,1)"
              styles={styles.button}
              title="Login"
              onPress={() => alert('Login')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Button
              color="hsla(200, 73%, 44%,1)"
              styles={styles.button}
              title="Register"
              onPress={() => props.navigation.navigate('Register')}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

login.navigationOptions = {
  headerTitle: 'Login Screen',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: colors.header,
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    alignContent: 'center',
  },

  loginContainer: {
    marginLeft: 15,
    // borderRadius: 50,
    // borderWidth: 5,
    // borderColor: 'white',
    width: '90%',
    height: '58%',
    padding: 15,

    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: 5,
    maxWidth: 400,
    marginVertical: 100,
  },
  email: {
    //fontColor: 'white',
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },
  button: {
    height: '100%',
    width: '80%',
  },

  input: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal: 2,
    paddingVertical: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    marginTop: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

export default login;
