import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const lastId = React.useRef(0);

  const [items, setItems] = useState([
    {id: ++lastId.current, text: 'Milk'},
    {id: ++lastId.current, text: 'Eggs'},
    {id: ++lastId.current, text: 'Bread'},
    {id: ++lastId.current, text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (itemText) => {
    setItems((prevItems) => {
      return [...prevItems, {id: ++lastId.current, text: itemText}];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

export default App;
