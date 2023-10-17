import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';

const App = () => {
  const [data, setData] = useState({});
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
      if (response) {
        const result = await response.json();
        setData(result?.results);
      }
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

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item?.titleText?.text ?? '-'}</Text>
        <Image source={{ uri: item?.primaryImage?.url }} style={{ width: 100, height: 100 }} />
      </View>
    );
  };

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default App;
