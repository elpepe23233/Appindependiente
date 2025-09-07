import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


export default function AcercadeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      
  


      
     <View style={styles.aboutBox}>
        <Text style={styles.aboutText}>
          Nuestra aplicación móvil está diseñada para brindarte acceso rápido y 
          sencillo a nuestros servicios. Podrás explorar programas académicos, 
          mantenerte informado sobre fechas importantes y contactar fácilmente 
          con nosotros desde cualquier lugar.
        </Text>
      </View>

      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Visita nuestro sitio</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  stepNote: {
    fontSize: 14,
    color: '#555',
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    borderRadius: 4,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#444',
  },
  dateItem: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
  },
  dateLabel: {
    fontSize: 14,
    color: '#888',
  },
  dateValue: {
    fontSize: 15,
    color: '#000',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#002D72', // Azul oscuro
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});