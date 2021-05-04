import React, { createContext } from 'react';
import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native';


const renderizarHeader = ({section}) => {

    return(
    <View>
        <Text style={styles.header}> {section.title} </Text>
    </View>
    )
}

const renderizar = ({item}) => {
    return(
    <View style={styles.row}>
        <Text> {item.nombre} {item.telefono} </Text>
    </View>
    )
}
export default (props) => {
    const contactos = props.contactos.map((c,index) => {
        return { ...c, key:index}
    })

    const DATA = [
        {
          title: "A",
          data: [{nombre:"Adriana", telefono:"824-444-3283"},  
          {nombre:"Ariel", telefono:"333-444-3283"},  
          {nombre:"Anibal", telefono:"222-444-3283"},  
        ]
        },
        {
          title: "B",
          data: [ 
            {nombre:"Brian", telefono:"555-444-3283"},  
            {nombre:"Brenda", telefono:"623-444-3283"},  

          ]
        },
      ];
 

    const contactosSection = contactos.reduce((obj, contacto) => 
    {
        //console.log("Objeto", obj)
        //console.log("Contacto", contacto)

        const letraEmpieza = contacto.nombre[0];
        return {
                ...obj,
                [letraEmpieza]: [...obj[letraEmpieza] || [],  contacto]
        }
    }, {})

    /*
            "A": [{nombre:"al", telefono:"4444-4444"}, {nombre:"ariel", telefono:"9939243"}],
            "B": [{nombre:"bety", telefono:"432423432"}, {nombre:"beto", telefono:"43242343"}]

    */

    const contactosReady = Object.keys(contactosSection).sort().map((key) => {
        //console.log("Cada key:", key)
        //console.log("data", contactosSection[key] )

        return {
            title: key,
            data: contactosSection[key]
        }
    }
    
    )

    console.log("resultado final", contactosReady)
    return (
        <SectionList
            sections={contactosReady}
            renderItem={renderizar}
            keyExtractor={item => String(item.key)}
            renderSectionHeader={renderizarHeader}
 
      />
    )
}

const styles = StyleSheet.create({
    row: {
      marginHorizontal:20,
    },

    header: {
        fontSize:20,
        color:'cyan',
        backgroundColor:'gray'
    }
  });