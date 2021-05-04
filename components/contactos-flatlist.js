import React, { createContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


const renderizar = ({item}) => {
    return(
    <View>
        <Text> {item.nombre} {item.telefono} </Text>
    </View>
    )
}
export default (props) => {
    const contactos = props.contactos.map((c,index) => {
        return { ...c, key:index}
    })

    console.log("contactos con key", contactos)
    return (
        <FlatList
            data={contactos}
            renderItem={renderizar}
            keyExtractor={item => String(item.key)}
      />
    )
}
