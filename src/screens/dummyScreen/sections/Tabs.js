import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import AboutMovie from '../components/aboutMovie';
import ShowListing from '../components/showListing';

const Tabs = () => {
  const tab = [
    { id: 1, name: 'Showlisting' },
    { id: 2, name: 'About movie' }
  ];
  const [tabCurrent, setTabCurrent] = useState(tab[0]);

  const changeTab = item => {
    setTabCurrent(item);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={{
          paddingHorizontal: 16,
          borderBottomWidth: 1,
          borderBottomColor: tabCurrent.id === item.id ? 'red' : 'transparent',
          paddingBottom: 8,
          marginHorizontal: 8
        }}
        onPress={() => changeTab(item)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    // <>
    //   <View style={{ flexDirection: 'row', paddingTop: 16 }}>
    //     {tab.map(item => {
    //       return (
    //         <TouchableOpacity
    //           key={item.id}
    //           style={{
    //             paddingHorizontal: 16,
    //             borderBottomWidth: 1,
    //             borderBottomColor: tabCurrent.id === item.id ? 'red' : 'transparent',
    //             paddingBottom: 8,
    //             marginHorizontal: 8
    //           }}
    //           onPress={() => changeTab(item)}>
    //           <Text>{item.name}</Text>
    //         </TouchableOpacity>
    //       );
    //     })}
    //   </View>
    //   <View style={{ flex: 1 }}>
    //     {tabCurrent.name === 'Showlisting' ? <ShowListing /> : <AboutMovie />}
    //   </View>
    // </>
    <View>
      <FlatList
        data={tab}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
      />
      {tabCurrent.name === 'Showlisting' ? <ShowListing /> : <AboutMovie />}
    </View>
  );
};

export default Tabs;
