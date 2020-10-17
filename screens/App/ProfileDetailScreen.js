import React, { useRef } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  Dimensions,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';

const ProfileDetailScreen = props => {
  const scrollA = useRef(new Animated.Value(0)).current;
  console.log('PROPS', props);
  const navigation = useNavigation();
  console.log('NAVIGATION', navigation);
  const id = props.route.params.id;
  const name = props.route.params.name;
  const description = props.route.params.description;
  const image = props.route.params.image;
  const variant = props.route.params.variant;
  const status = props.route.params.status;
  const fullWidth = Dimensions.get('window').width;

  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      style={styles}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollA } } }],
        { useNativeDriver: true },
      )}
    >
      <View style={styles.imagContainer}>
        <Animated.Image source={image} style={styles.imageStyle(scrollA)} />
      </View>

      <View style={styles.content}>
        <View style={{ borderRadius: 50, alignItems: 'center' }}>
          <View
            style={{
              marginTop: 10,
              width: '10%',
              height: 3,
              borderRadius: 50,
              backgroundColor: 'lightgrey',
            }}
          />
        </View>
        <View style={styles.main}>
          {/* <TouchableOpacity
          style={{
            alignItems: 'flex-end',
            marginRight: 10,
            marginTop: -26,
          }}
        >
          <MaterialIcons
            name="arrow-drop-down-circle"
            size={60}
            color="#7444C0"
            onPress={() => {
              navigation.navigate('Explore');
            }}
          />
        </TouchableOpacity> */}
          <View style={styles.textContainer}>
            <Text style={styles.text}>{name}</Text>
          </View>
          <Text>{status}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text>{status}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text>{status}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text>{status}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text>{status}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text>{status}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text>{status}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text>{status}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text>{status}</Text>
        </View>
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: '500',
  },
  description: {
    textAlign: 'center',
  },
  textContainer: {
    marginTop: 3,
    paddingTop: -2,
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: -20,
  },
  imagContainer: {
    alignItems: 'center',
    marginTop: -20,
    backgroundColor: 'white',
  },
  main: {
    marginTop: 25,
  },
  imageStyle: scrollA => ({
    //borderRadius: 2,
    width: 400,
    height: 450,
    margin: 20,

    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-450, 0, 450, 450 + 1],
          outputRange: [-420 / 2, 0, 450 * 0.75, 450 * 0.55],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-450, 0, 450, 450 + 1],
          outputRange: [2, 1, 0.9, 1],
        }),
      },
    ],
  }),
});

export default ProfileDetailScreen;
