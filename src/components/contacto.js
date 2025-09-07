
import { View, Text,ScrollView, TextInput, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from 'react';
import { Alert } from 'react-native';
export default function ContactoScreen() {
    const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');
   const handleEnviar = () => {
        if (!nombre || !correo || !mensaje) {
      setError('Llenar formulario por favor.');
      return;
    }
 setError('');
    Alert.alert('¡Mensaje enviado con éxito!');
    
    setNombre('');
    setCorreo('');
    setMensaje('');
  };
  return (
    
    <ScrollView style={styles.container}>
    
        <Text style = {styles.tittle}>Información de Nuestro local</Text>
        
    <View style= {styles.infoBox}>
      <Ionicons name="location-outline" size={35} color="#333" />
      <View>
        <Text style={styles.infoTitle} > Dirección</Text>
        <Text style={styles.infoText} >Av. La lorena calle ibarra</Text>
        </View>
        </View>

    <View style= {styles.infoBox}>
      <Ionicons name="call-outline" size={35} color="#333" />
      <View>
        <Text style={styles.infoTitle} > Telèfono</Text>
        <Text style={styles.infoText} >+593 2-243-3000</Text>
        </View>
        </View>

            <View style= {styles.infoBox}>
      <Ionicons name="mail-outline" size={35} color="#333" />
      <View>
        <Text style={styles.infoTitle} > Correo Electrónico</Text>
        <Text style={styles.infoText} >AppM2005@hotmail.com</Text>
        </View>
        </View>



            <Text style={styles.tittle}>¡Envianos tus comentarios!</Text>
            <Text style={styles.infoText} >Usamos los comentarios como guía para mejorar el servicio de nuestros clientes!</Text>
            <View>
               <Text  > Nombre</Text>
               <TextInput placeholder='Nombre' style={styles.input}           value={nombre}
          onChangeText={setNombre}
></TextInput>

  <Text>Correo electrónico</Text>
      <TextInput placeholder="Tu correo electrónico"  style={styles.input} keyboardType="email-address"  value={correo}
          onChangeText={setCorreo} />
            

             <Text  > Mensaje</Text>
 <TextInput placeholder="Agrega un mensaje" keyboardType='input' style={[styles.input,{ height: 100 }]} multiline  value={mensaje}
          onChangeText={setMensaje} />
             {error !== '' && <Text style={styles.errorText}>{error}</Text>}
 </View>

   <TouchableOpacity style={styles.button} onPress={handleEnviar}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      
      
    </ScrollView>
    
  );
  
}
const styles= StyleSheet.create({

    container:{
        flex: 1,
        padding: 16,
        backgroundcolor: '#000a61ff'
    },
    tittle: {
    fontSize: 22,
    fontWeight: 'bold',
marginVertical: 15,
    
  },
    texto2: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    color: '#444'
  },
  destacar:{
        fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  transparente: {
    fontSize: 14,
    color: 'gray'
  },
  imagenlogoinicio:{
    width: "center", 
    height: 500
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap: 10,
  },
    infoTitle: {
    fontWeight: "bold",
  },
  infoText: {
    color: "#666",
  },
    input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#0a2342",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,},
      buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
})