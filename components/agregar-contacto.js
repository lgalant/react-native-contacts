import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';


export default (props) => {

    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [habilitado, setHabilitado]= useState(false)

    useEffect(() =>{
     if (nombre.length > 4  && telefono.length > 5)
        setHabilitado(true)
    else
        setHabilitado(false)
  
    },[nombre, telefono])


    const agregarContacto= ( ) => {
        props.agregar({nombre, telefono})
    }

    return (
        <View  style = {{marginVertical:20, marginHorizontal:20}}>
            <Text  style = {{marginVertical:10}}> Ingrese Datos de contacto </Text>
            <TextInput
                placeholder="Nombre"
                value={nombre}
                style = {{borderWidth:1, borderColor:'blue', marginHorizontal:10, marginVertical:10}}
                onChangeText={(text) => setNombre(text)}
            />
            <TextInput
                placeholder="Telefono"
                value={telefono}
                style = {{borderWidth:1, borderColor:'blue', marginHorizontal:10,  marginVertical:20}}
                keyboardType={"numeric"}
                onChangeText={(text) => setTelefono(text)}
            />

            <Button onPress={()=> agregarContacto()} 
                style={{marginHorizontal:20}}
              disabled={!habilitado}
              title = "Agregar">
            </Button>
      </View>

    )
}