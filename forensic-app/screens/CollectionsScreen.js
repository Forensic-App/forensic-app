import React, { useState } from 'react';
import { StyleSheet, View, Text, Linking, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import SearchScreen from './SearchScreen';

export default function CollectionsScreen() {

  const navigation = useNavigation();

    const [items, setItems] = React.useState([
        { name: 'ANSI/ASB', code: '#1abc9c', appendUrl: '309'},
        { name: 'CFSRE', code: '#2ecc71', appendUrl: '205'},
        { name: 'DEA', code: '#3498db', appendUrl: '221' },
        { name: 'EMCDDA', code: '#9b59b6', appendUrl: '249'  },
        { name: 'INCB', code: '#16a085', appendUrl: '245'  },
        { name: 'MMWR', code: '#2980b9',  appendUrl: '213' },
        { name: 'NAP', code: '#8e44ad', appendUrl: '217'},
        { name: 'NHTSA', code: '#2c3e50', appendUrl: '219'},
        { name: 'NIJ', code: '#f1c40f', appendUrl: '207'  },
        { name: 'NIST', code: '#e67e22',   appendUrl: '231'},
        { name: 'UNODC', code: '#e74c3c', appendUrl: '233'},
      ]);


    return (
        <FlatGrid
          itemDimension={130}
          data={items}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={10}
          renderItem={({ item }) => (
            <TouchableOpacity style={[styles.itemContainer, { backgroundColor: item.code }]} onPress={() => {navigation.navigate('ColResults',{data: item.appendUrl})}}>
              <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      );
    }


    const styles = StyleSheet.create({
        gridView: {
          marginTop: 10,
          flex: 1,
        },
        itemContainer: {
          justifyContent: 'flex-end',
          borderRadius: 5,
          padding: 10,
          height: 150,
        },
        itemName: {
          fontSize: 16,
          color: '#fff',
          fontWeight: '600',
        },
        itemCode: {
          fontWeight: '600',
          fontSize: 12,
          color: '#fff',
        },
      });
      