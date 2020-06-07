import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const addHandler = () => {
    addItem(text);
    setText('');
  };

  return (
    <View>
      <TextInput
        placeholder="New Item"
        style={styles.input}
        onChangeText={setText}
        value={text}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={addHandler}
        disabled={!text}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={13} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {height: 50, padding: 12, fontSize: 15},
  btn: {
    backgroundColor: '#c2bad8',
    padding: 17,
    marginBottom: 10,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default AddItem;
