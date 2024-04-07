import React from 'react';
import { ScrollView, View, Text, Dimensions } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';

export default function GraficasScreen() {
  return (
    <ScrollView>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Gráfica de Líneas</Text>
        <LineChart
          data={{
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
            datasets: [
              {
                data: [20, 45, 28, 80, 99],
              },
            ],
          }}
          width={Dimensions.get('window').width - 16}
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />

        <Text>Compra de Ropa</Text>
        <BarChart
          data={{
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
            datasets: [
              {
                data: [30, 45, 28, 80, 99],
              },
            ],
          }}
          width={Dimensions.get('window').width - 16}
          height={220}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />

        <Text>Gastos de Envío</Text>
        <PieChart
          data={[
            {
              name: 'FedEx',
              population: 215,
              color: 'rgba(131, 167, 234, 1)',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'DHL',
              population: 280,
              color: '#F00',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'UPS',
              population: 527,
              color: 'orange',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
          ]}
          width={Dimensions.get('window').width - 16}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          accessor={'population'}
          backgroundColor={'transparent'}
          paddingLeft={'15'}
          center={[10, 10]}
          absolute
        />
      </View>
    </ScrollView>
  );
}
