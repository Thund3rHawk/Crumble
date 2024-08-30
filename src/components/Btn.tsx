import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Btn = (
  bgColor = '#FF7622',
  btnLabel: any,
  textColor = 'white',
  width = '80%',
  Press: any,
  size = 20,
) => {
  return (
    <View>
      <TouchableOpacity
        onPress={Press}
        style = {{
          backgroundColor: bgColor,
          borderRadius: 50,
          alignItems: 'center',
          width: "80%",
          paddingVertical: 10,
          marginVertical: 10,
        }}
        >
        <Text style={{color: textColor, fontSize: size, fontWeight: 600}}>
          {btnLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Btn;
