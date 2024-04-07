import React from 'react';
import { ScrollView, Text, View, Image, StatusBar, StyleSheet, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const productsLine1 = [
  {
    id: 1,
    name: 'Jeans Desgastados Azul Cielo',
    description: 'Jeans Desgastados Azul Cielo de Trend Denim ofrecen un estilo fresco y relajado.',
    price: '$1100.00',
    brand: 'Trend Denim',
    image: 'https://i.pinimg.com/564x/96/c7/1c/96c71c2eeb5abc83aaf97b9c0c945113.jpg', 
  },
  {
    id: 2,
    name: 'Top Corto Brillante Nocturno',
    description: 'Top Corto Brillante Nocturno, añade un toque de glamour a cualquier atuendo.',
    price: '$600.00',
    brand: 'Elegancia Urbana',
    image: 'https://i.pinimg.com/564x/8d/25/bb/8d25bbdf2fbae1287d1ce20b0252b81f.jpg', 
  },
  {
    id: 3,
    name: 'Pantalon Cargo Denim Urbano.',
    description: 'Pantalones Cargo, son la fusión perfecta de funcionalidad y moda callejera.',
    price: '$1200.00',
    brand: 'Vanguardia Urbana',
    image: 'https://i.pinimg.com/564x/73/3f/55/733f55ad5e230f4e84b0f66db6772ffe.jpg', 
  },
  {
    id: 4,
    name: ' Jersey Marinero Clásico',
    description: 'Diseños náuticos, el Jersey Marinero Clásico .',
    price: '$400.00',
    brand: 'Océano Azul',
    image: 'https://i.pinimg.com/564x/b2/37/08/b23708623d44154e70caca883942519c.jpg', 
  },
  {
    id: 5,
    name: 'Chaqueta Polar Nieve Blanca',
    description: 'chaqueta de forro polar blanca con cuello alto',
    price: '$500.00',
    brand: 'Montañas del Norte',
    image: 'https://i.pinimg.com/564x/03/a1/ba/03a1ba31874e8ac2a5b64c97a8c7962f.jpg', 
  },
  {
    id: 6,
    name: 'pantalón acampanado ',
    description: 'pantalon de mezclilla de tiro alto con rotos en la parte de la rodilla',
    price: '$800.00',
    brand: 'Vanguardia Urbana',
    image: 'https://i.pinimg.com/564x/6e/92/1e/6e921eb66fcca5faac34f04ddab82797.jpg', 
  },
];

function HomeScreen() {
  const navigation = useNavigation(); 

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productBrand}>Marca: {item.brand}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>Precio: {item.price}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={{ uri: 'https://i.pinimg.com/564x/17/9b/fa/179bfaef8e1c7a622ab2fb1428c76e76.jpg' }} 
      />
      <View style={styles.backButtonContainer}>
        <Button title="Salir" onPress={() => navigation.goBack()} color="#007BFF" />
      </View>
      <View style={{ height: 22 }}></View>
      <Text style={styles.title}>Bienvenido a nuestra tienda de ropa</Text>
      <FlatList
        data={productsLine1}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: -1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333', 
  },
  productContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    borderRadius: 10,
    padding: 10,
    marginRight: 20, 
    width: 220,
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productBrand: {
    marginBottom: 5,
  },
  productDescription: {
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    color: 'green',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 10, 
    zIndex: 10,
  },
});

export default HomeScreen;
