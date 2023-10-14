import auth from '@react-native-firebase/auth';

export const signUpEmail = (email, password) => {
  return auth().createUserWithEmailAndPassword(email, password);
};
