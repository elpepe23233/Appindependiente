import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const productos = [
  { nombre: 'Samsung Galaxy S25 Plus', descripcion: 'Dispositivo Samsung de alta gama moderno, con excelente rendimiento.' },
  { nombre: 'Xiaomi Redmi Note 13 Pro', descripcion: 'Dispositivo Xiaomi con rendimiento alto y funciones modernas. Presione para más detalles.' },
  { nombre: 'Apple iPhone 13', descripcion: 'Dispositivo Iphone con un precio estable, ideal para muchos.' },
 
];

export default function BuscarScreen() {
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = productos.filter((item) =>
    item.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Barra de búsqueda */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#666" style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Buscar producto"
          value={busqueda}
          onChangeText={setBusqueda}
          style={styles.searchInput}
        />
      </View>


      {productosFiltrados.length > 0 ? (
        productosFiltrados.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.productoNombre}>{item.nombre}</Text>
            <Text style={styles.productoDescripcion}>{item.descripcion}</Text>
          </View>
        ))
      ) : (
        <Text style={{ textAlign: 'center', marginTop: 20, color: '#888' }}>
          No se encontraron resultados
        </Text>
      )}

  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  productoNombre: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  productoDescripcion: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#002D72',
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
