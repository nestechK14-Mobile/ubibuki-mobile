import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const App = () => {
  const getListMovie = async () => {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles?page=2';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6640a7a259msh93da40b7dc1179cp134ba4jsn06afedfd9972',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      console.log('>>>>>> ', response.json());
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }

    // await fetch(url, options)
    //   .then(response => console.log(response))
    //   .catch(console.error(error => console.log(error)));
  };

  useEffect(() => {
    getListMovie();
  }, []);

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;
