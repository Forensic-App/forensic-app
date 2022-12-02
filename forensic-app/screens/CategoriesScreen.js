import React, { useState } from 'react';
import { StyleSheet, View, Text, Linking, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import SearchScreen from './SearchScreen';

export default function CategoriesScreen() {

  const navigation = useNavigation();

    const [items, setItems] = React.useState([
        { name: 'ALCOHOL', code: '#1abc9c', appendUrl: '195'},
        { name: 'ANTHROPOLOGY', code: '#2ecc71', },
        { name: 'BIOMETRICS', code: '#3498db', },
        { name: 'BLOODSTAIN PATTERN ANALYSIS', code: '#9b59b6',  },
        { name: 'CANNABIS AND CANNABINOIDS', code: '#34495e',  },
        { name: 'CRIME SCENE INVESTIGATION AND RECONSTRUCTION', code: '#16a085',  },
        { name: 'CRIMINAL JUSTICE SYSTEM', code: '#27ae60',  },
        { name: 'DIGITAL AND MULTIMEDIA ANALYSIS', code: '#2980b9',  },
        { name: 'DNA AND BIOLOGY', code: '#8e44ad',  },
        { name: 'DREs/TRAFFIC SAFETY RESOURCE PROSECUTORS', code: '#2c3e50',  },
        { name: 'ENTOMOLOGY', code: '#f1c40f',  },
        { name: 'FINGERPRINTS/FRICTION RIDGE', code: '#e67e22',  },
        { name: 'FIRE INVESTIGATIONS AND EXPLOSIONS', code: '#e74c3c',},
        { name: 'FIREARMS AND TOOLMARKS', code: '#ecf0f1',  },
        { name: 'FOOTWEAR AND TIRE', code: '#95a5a6', },
        { name: 'FORENSIC PATHOLOGY AND MEDICOLEGAL DEATH INVESTIGATION', code: '#f39c12',  },
        { name: 'GENETIC GEANEALOGY', code: '#d35400',  },
        { name: 'LABORATORY OPERATIONS', code: '#c0392b',  },
        { name: 'ODONTOLOGY', code: '#bdc3c7', },
        { name: 'PHOTOGRAPHY, VIDEO AND IMAGING TECHNOLOGY', code: '#7f8c8d',  },
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
            <TouchableOpacity style={[styles.itemContainer, { backgroundColor: item.code }]} onPress={() => {navigation.navigate('Search',{data: item.appendUrl})}}>
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
      