import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';

const EmpresaScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={{ uri: 'https://i.pinimg.com/564x/17/9b/fa/179bfaef8e1c7a622ab2fb1428c76e76.jpg' }} // URL de la imagen de fondo
        style={styles.backgroundImage}
      >
        <Text style={styles.title}>Quiénes somos</Text>
        <View style={styles.comparisonContainer}>
          <View style={styles.column}>
            <Text style={styles.subtitle}>Misión</Text>
            <Text style={styles.text}>
              Nuestra misión es revolucionar la experiencia de compra ofreciendo productos de moda de alta calidad y diseño único. Nos comprometemos con la sostenibilidad ambiental en cada paso, asegurando que tus elecciones de moda también contribuyan al cuidado del planeta. Queremos empoderarte a través de la moda, brindándote opciones que realcen tu individualidad y al mismo tiempo promuevan prácticas éticas y responsables. Trabajamos arduamente para mantener una cadena de suministro transparente y ética, garantizando así el bienestar de todos los involucrados en la creación de nuestras prendas y, lo más importante, tu satisfacción como cliente.
            </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.subtitle}>Visión</Text>
            <Text style={styles.text}>
              Nuestra visión es convertirnos en la marca de moda más influyente y respetada a nivel mundial, liderando la transformación hacia prácticas más sostenibles en la industria. Queremos crear una comunidad global de clientes conscientes, unidos por su pasión por la moda y su compromiso con el planeta. Nos esforzamos por innovar constantemente en nuestros diseños y procesos, siendo pioneros en sostenibilidad, manteniendo siempre un compromiso inquebrantable con la calidad y la ética.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', // Centra el texto del título
    color: '#333', // Cambia el color del texto del título
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Añade sombreado al texto del título
    textShadowOffset: { width: 1, height: 1 }, // Configura la distancia del sombreado
    textShadowRadius: 2, // Configura la intensidad del sombreado
  },
  comparisonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  column: {
    flex: 1,
    marginHorizontal: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', 
    color: '#333', 
    textShadowColor: 'rgba(0, 0, 0, 0.5)', 
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 2,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'justify', 
    marginBottom: 10,
    color: '#333',
  },
});

export default EmpresaScreen;
