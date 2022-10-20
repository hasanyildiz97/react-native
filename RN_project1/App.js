/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  FlatList,
  RefreshControl,
  RefreshControlBase,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const[Items,setItem] = useState([
    {key1:1,item:'Item1'},
    {key2:2,item:'Item2'},
    {key3:3,item:'Item3'},
    {key4:4,item:'Item4'},
    {key5:5,item:'Item5'},
    {key6:6,item:'Item6'},
    {key7:7,item:'Item7'},
    {key8:8,item:'Item8'},
    {key9:9,item:'Item9'},
    {key10:10,item:'Item10'},
  ])

  const[Items2,setItem2] = useState([
    {name:'Item1'},
    {name:'Item3'},
    {name:'Item5'},
    {name:'Item7'},
    {name:'Item9'},
    {name:'Item11'},
    {name:'Item13'},
    {name:'Item15'},
  ])

  const DATA =[
      {
        title:'Title 1',
        data: ['Item 1-1','Item 1-2','Item 1-3'],
      },
      {
        title:'Title 2',
        data: ['Item 2-1','Item 2-2','Item 2-3'],
      },
      {
        title:'Title 3',
        data: ['Item 3-1','Item 3-2','Item 3-3'],
      },
      {
        title:'Title 4',
        data: ['Item 4-1','Item 4-2','Item 4-3'],},
  ]

  const[Refreshing,setRefreshing] = useState(false)
  const onRefresh = ()=>{
      setRefreshing(true);
      setItem2([...Items2,{name:'Item54'}]);
      setRefreshing(false);
  }

  return (
    <SectionList
      keyExtractor={(item,index)=>index.toString()}
      sections={DATA}
      renderItem={({item})=>(
        <View style={styles.viewList}>
          <Text style={styles.text}>{item}</Text>
        </View>
    )}
    renderSectionHeader={({section})=>(
      <View style={styles.view1}>
         <Text style={styles.text}>{section.title}</Text>
      </View>
    )}
    />

    /*
    <FlatList
     // numColumns={2}
     // horizontal
     // inverted
      keyExtractor={(item,index)=>index.toString()}
      data={Items2}
      renderItem={({item})=>(
        <View style={styles.view1}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl 
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#ff58c8']}//spinner color changed
        />
      }
    />
    */
    
    /*
        <ScrollView 
          style={styles.body}
          refreshControl={
            <RefreshControl 
              refreshing={Refreshing}
              onRefresh={onRefresh}
              colors={['#ff58c8']}//spinner color changed
            />}
          >
        {
          Items.map((object) => {
            return(
              <View style={styles.view1} key={object.key}>
                <Text style={styles.text}>{object.item}</Text>
              </View>
            )
          })
        }  
        </ScrollView>
        */
  );
};

const styles = StyleSheet.create({
  body: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#bad',
  },
  text: {
    color: '#000',
    fontSize: 60,
    fontStyle: 'italic',
    
  },
  view1: {
    margin:10,
    backgroundColor:'#acd',
    alignItems: 'center',
    justifyContent:'center',
    borderWidth:2,
    borderColor: '#000',
  },
  viewList:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fca',
    borderWidth:1,
  },
});

export default App;
