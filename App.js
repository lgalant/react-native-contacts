import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View , ScrollView, TextInput} from 'react-native';
import Constants from 'expo-constants';
import contactosLista from './contactos'
import ContactosMap from './components/contactos-map'
import ContactosFlat from './components/contactos-flatlist'
import ContactosSectionList from './components/contactos-sectionlist'
import AgregarContacto from './components/agregar-contacto'

export default function App() {


  const [contactos, setContactos] = useState(contactosLista)
  
  const agregarContactos = (contacto) => {
    console.log("Agregar:" , contacto)
    setContactos([...contactos, contacto])
  }

  console.log("Constants", Constants)
  return (
    <View style={styles.container}>
      <AgregarContacto agregar={agregarContactos}/>
      <ContactosSectionList contactos={contactos}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
