import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';

const dispositivos = [
  {
    titulo: 'Samsung Galaxy S25 Plus',
    descripcion: `Características principales
Pantalla: 6.7″, 1440 x 3120 pixels| Dynamic AMOLED 2X  con Gorilla Glass Victus 2
Procesador:Snapdragon 8 Elite for Galaxy 4.47GHz
RAM: 12GB
Almacenamiento: 512GB 
Expansión: sin microSD
Cámara: Triple, 50MP+12MP+10MP
Cámara Frontal: 12 MP
Batería: 4900 mAh
OS: Android 15
Resistente al agua: IP68
Carga inalámbrica: 15W
Carga rápida: 45W
Otros: Dual Sim, GPS, NFC, Desbloqueo Facial y Dactilar`,
    detalle: 'Dispositivo Samsung de alta gama moderno, con excelente rendimiento. Presione para más información.',
    imagen: require("../../assets/inicio/Samsung-Galaxy-S25-Navy-Mobile-Store-Ecuador.png"),
  },
  {
    titulo: 'Xiaomi Redmi Note 13 Pro',
     descripcion: `Lo que tienes que saber de este producto
Memoria RAM: 12 GB.
Dispositivo desbloqueado para que elijas tu compañía telefónica preferida.
Cámara frontal de 16Mpx.
Batería de 5000 mAh.
Memoria interna de 512 GB.
Resistente a salpicaduras.
Con reconocimiento facial y sensor de huellas dactilares.
Resistente al polvo y a las caídas.
Tela de 6 pulgadas.`,
    detalle: 'Dispositivo Xiaomi con rendimiento alto y funciones modernas. Presione para más detalles.',
    
    imagen: require("../../assets/inicio/D_NQ_NP_922200-MLA79450368581_092024-O.png"),
  },
  {
    titulo: 'Apple iPhone 13',
     descripcion: `Memoria RAM: 4 GB.
Memoria interna: 128 GB.
Pantalla Super Retina XDR de 6.1 pulgadas.
Modo Cine con baja profundidad de campo y cambios de enfoque automáticos en tus videos.
Sistema avanzado de dos cámaras de 12 MP (gran angular y ultra gran angular) con Estilos Fotográficos, HDR Inteligente 4, modo Noche y grabación de video 4K HDR en Dolby Vision.
Cámara frontal TrueDepth de 12 MP con modo Noche y grabación de video 4K HDR en Dolby Vision.
Chip A15 Bionic para un rendimiento fuera de serie.
Hasta 19 horas de reproducción de video.
Diseño resistente con Ceramic Shield.
Resistencia al agua IP68, líder en la industria.
IOS 15 con nuevas funcionalidades para aprovechar tu iPhone al máximo.
Compatibilidad con accesorios MagSafe, que permiten una carga inalámbrica más rápida.`,
    detalle: 'Dispositivo Iphone con un precio estable, ideal para muchos. Presione para más detalles.',
    imagen: require("../../assets/inicio/D_NQ_NP_736168-MLA47781742030_102021-O.png"),
  },
];

export default function InicioScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [dispositivoSeleccionado, setDispositivoSeleccionado] = useState(null);

  const abrirModal = (item) => {
    setDispositivoSeleccionado(item);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <ScrollView style={styles.container}>
        <Text style={styles.tittle}>AppM</Text>
        <Text style={styles.texto2}>
          Explora nuestro catálogo de celulares nuevos y modernos, a un precio justo y económico.
        </Text>

        {dispositivos.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => abrirModal(item)}>
            <Image source={item.imagen} style={styles.imagenlogoinicio} />
            <Text style={styles.destacar}>{item.titulo}</Text>
            <Text style={styles.transparente}>{item.detalle}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {dispositivoSeleccionado && (
              <>
                <Image source={dispositivoSeleccionado.imagen} style={styles.modalImagen} />
                <Text style={styles.modalTitulo}>{dispositivoSeleccionado.titulo}</Text>
<Text style={styles.modalDetalle}>{dispositivoSeleccionado.descripcion}</Text>

                <Pressable style={styles.btnCerrar} onPress={() => setModalVisible(false)}>
                  <Text style={styles.btnCerrarText}>Cerrar</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  tittle: { fontSize: 22, fontWeight: 'bold', marginTop: 20, textAlign: 'center' },
  texto2: { fontSize: 18, textAlign: 'center', marginVertical: 10, color: '#444' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  destacar: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  transparente: { fontSize: 14, color: 'gray' },
  imagenlogoinicio: { width: '100%', height: 300, resizeMode: 'contain', borderRadius: 8 },

 
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '85%',
    alignItems: 'center',
  },
  modalImagen: { width: '100%', height: 250, resizeMode: 'contain', marginBottom: 15 },
  modalTitulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  modalDetalle: { fontSize: 16, color: '#555', textAlign: 'center', marginBottom: 20 },
  btnCerrar: {
    backgroundColor: '#002D72',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  btnCerrarText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
