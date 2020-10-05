import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-datepicker';
// import { Picker } from '@react-native-community/picker';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const login = props => {
  // const [data, setData] = useState({
  //   name: '',
  // });

  const [data, setData] = useState({
    email: '',
    password: '',
    isvalidEmail: true,
    isValidPassword: true,
  });
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('2001-05-19');
  //const [profile, setProfile] = useState('For Me');
  const [mobilenumber, setMobilenumber] = useState('');
  const [submit, setSubmit] = useState({
    isNameValid: false,
    isvalidMobileNumber: false,
    isValidPassword: false,
  });

  const submitHandler = () => {
    if (
      submit.isNameValid &&
      submit.isvalidMobileNumber &&
      submit.isValidPassword &&
      submit.isValidPassword
    ) {
      //Passing or Dispatching the details
      props.navigation.navigate('Login');
      console.log('Sumit after', submit);
    } else {
      Alert.alert(
        'Form is not Filled',
        'Some fields in the form is not filled',
        [{ text: 'OK' }],
      );
      console.log('NAMEVALID', submit.isNameValid);
      console.log('Sumit after', submit);
    }
  };
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
    if (password.length <= 8) {
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

  useEffect(() => {}, []);
  const genderset = val => {
    return setGender(val);
  };
  console.log('name', name);
  console.log('Gender', gender);
  console.log('Date', date);
  console.log('Email', data.email);
  console.log('password', data.password);
  console.log('mobilenumber', mobilenumber);
  console.log('Subitt', submit);
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.text}>PROFILE CREATED FOR </Text>
        <TextInput style={styles.input} />
        {/* <Picker
          selectedValue={profile}
          style={{ height: 50, width: 100 }}
          onValueChange={itemValue => setProfile(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker> */}
        <Text style={styles.text}>NAME</Text>
        <TextInput
          style={styles.input}
          required
          lable="name"
          id="name"
          required
          returnKeyType="next"
          onEndEditing={e => {
            setSubmit({ ...submit, isNameValid: true });
            setName(e.nativeEvent.text);
          }}
          //onEndEditing={e => passwordValidator(e.nativeEvent.text)}
        />
        <Text style={styles.text}>GENDER</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.buttonContainer}>
          <View style={styles.button_1}>
            <Button
              color={gender === 'Male' ? 'black' : 'blue'}
              title="Male"
              onPress={() => {
                genderset('Male');
              }}
            />
          </View>

          <View style={styles.button_2}>
            <Button
              title="Female"
              color={gender === 'Female' ? 'black' : 'blue'}
              title="Female"
              onPress={() => {
                genderset('Female');
              }}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>DATE OF BIRTH</Text>
        <View style={styles.date}>
          <DatePicker
            style={{ width: 200, marginBottom: 15 }}
            date={date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
              // ... You can check the source to find the other keys.
            }}
            onDateChange={date => {
              setDate(date);
            }}
          />
        </View>
        <Text style={styles.text}>COUNTRY CODE</Text>
        <TextInput style={styles.input} keyboardType="phone-pad" />
        <Text style={styles.text}>MOBILE NUMBER</Text>
        <TextInput
          style={styles.input}
          lable="name"
          id="name"
          required
          keyboardType="phone-pad"
          returnKeyType="next"
          onEndEditing={e => {
            setSubmit({
              ...submit,
              isvalidMobileNumber: true,
            });
            setMobilenumber(e.nativeEvent.text);
          }}
        />
        <Text style={styles.text}>EMAIL</Text>

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
          onEndEditing={e => {
            //  setSubmit({ ...submit, isvalidEmail: !submit.isvalidEmail });
            emailValidator(e.nativeEvent.text);
          }}
        />
        {data.isvalidEmail ? null : (
          <Text style={{ color: 'red' }}>Enter a valid email</Text>
        )}

        <View style={{ marginTop: 15 }}>
          <Text style={styles.text}>PASSWORD</Text>
          <TextInput
            style={styles.input}
            //placeholder="Enter your password here"
            id="Password"
            label="password"
            required
            secureTextEntry
            //onInputChange={text => setData.password(text)}
            onEndEditing={e => {
              setSubmit({
                ...submit,
                isValidPassword: true,
              });
              passwordValidator(e.nativeEvent.text);
            }}
          />
          {data.isValidPassword ? null : (
            <Text style={{ color: 'red' }}>
              Password Length should be greater than 8
            </Text>
          )}
        </View>
        <TouchableOpacity style={styles.button_3}>
          <Button
            style={styles.button_3}
            title="Register"
            onPress={submitHandler}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginVertical: 25,
    marginLeft: 15,
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
  input: {
    fontWeight: 'normal',
    marginRight: 15,
    fontSize: 18,
    marginVertical: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    marginVertical: 8,
    height: '9%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button_2: {
    height: '100%',
    width: '30%',
    marginLeft: 55,
    paddingBottom: 12,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
  button_1: {
    height: '100%',
    width: '30%',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginLeft: 25,
    elevation: 10,
  },
  date: {
    marginTop: 15,
  },
  button_3: {
    height: '200%',
    width: '80%',
    marginLeft: 25,
    marginTop: 15,
    alignContent: 'center',
    marginBottom: 15,
    elevation: 10,
  },
});

export default login;
