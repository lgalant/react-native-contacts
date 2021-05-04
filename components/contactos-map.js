import React, { createContext } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default (props) => {

    const contactos = props.contactos
    return (
        <View style={{flex:1, marginTop:50}}>
        {contactos && contactos.map((c,index) => (
          <Text> {c.nombre} {c.telefono}</Text>
        ))}
    </View>

    )
}

