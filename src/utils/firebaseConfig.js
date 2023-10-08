import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAmaWSCN0O2U5_EJqwCHZwQdn0yqOZw_xk',
  authDomain: 'ukibuki-mobile.firebaseapp.com',
  projectId: 'ukibuki-mobile',
  storageBucket: 'ukibuki-mobile.appspot.com',
  messagingSenderId: '286112083263',
  appId: '1:286112083263:web:69172654b7f773bdfd778a'
};

if (!firebase.app?.length) {
  firebase.initializeApp(firebaseConfig);
}

export default () => {
  return { firebase, auth };
};
