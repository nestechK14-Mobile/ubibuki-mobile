import auth from '@react-native-firebase/auth';

export const signUpEmail = (email, password) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const signInEmail = (email, password) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const signUpPhoneNumber = (phone, isForceResend) => {
  return auth().signUpPhoneNumber(phone, isForceResend);
};

export const signInPhoneNumber = (phone, isForceResend) => {
  return auth().signInWithPhoneNumber(phone, isForceResend);
};

export const getCurrentUser = () => {
  return auth().currentUser();
};

export const signInWithGoogle = () => {
  return auth().signInWithGoogle();
};
