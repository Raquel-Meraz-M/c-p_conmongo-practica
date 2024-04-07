import React from 'react';
import { View, Text, Image, StyleSheet, Button, ImageBackground } from 'react-native';

const PerfilScreen = () => {
  // Datos del usuario expandidos
  const userInfo = {
    nombre: "Raquel Meraz",
    email: "raquelmeraz@gmail.com",
    imagenUrl: "https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg",
    bio: "Apasionada por la moda y las tendencias. En constante búsqueda de prendas de tendencia.",
    location: "Durango, Dgo",
    backgroundImage: "https://i.pinimg.com/564x/17/9b/fa/179bfaef8e1c7a622ab2fb1428c76e76.jpg",
    tamanoImagen: { width: 120, height: 120 }, // Ajuste de tamaño de imagen
    tamanoLetra: 16, // Ajuste de tamaño de letra
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: userInfo.backgroundImage }} style={styles.backgroundImage}>
        <View style={styles.content}>
          <Image source={{ uri: userInfo.imagenUrl }} style={userInfo.tamanoImagen} />
          <Text style={[styles.infoText, { fontSize: userInfo.tamanoLetra }]}>Nombre: {userInfo.nombre}</Text>
          <Text style={[styles.infoText, { fontSize: userInfo.tamanoLetra }]}>Correo: {userInfo.email}</Text>
          <Text style={[styles.infoText, { fontSize: userInfo.tamanoLetra }]}>Biografía: {userInfo.bio}</Text>
          <Text style={[styles.infoText, { fontSize: userInfo.tamanoLetra }]}>Ubicación: {userInfo.location}</Text>
        </View>
        <Button title="Editar Perfil" onPress={() => console.log('Editar Perfil')} color="#007BFF" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 26, 
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    backgroundColor:'rgba(255, 255, 255, 0.7)', 
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  infoText: {
    marginVertical: 5, 
    color: '#333',
  }
}
);
export default PerfilScreen;
