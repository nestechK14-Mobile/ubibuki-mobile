import SplashScreen from 'react-native-splash-screen';
import { Component } from 'react';
export default class WelcomePage extends Component {

    componentDidMount() {
    /* !!!: eslint-disable-next-line no-mixed-spaces-and-tabs
    	// do stuff while splash screen is shown
      //   After having done stuff (such as async tasks) hide the splash screen */
        SplashScreen.hide();
    }
}