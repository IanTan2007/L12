import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Button, Alert} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {datasource} from './Data.js';




export default function Home({navigation}) {
  const renderItem = ({item, index, section}) => {
    return (
        <TouchableOpacity
            style={styles.foodRow}
            onPress={() => {
              navigation.navigate("Edit", {
                index: index,
                type: section.title,
                name: item.name,
                description: item.description,
                price: item.price,
                image: item.image
              });
            }}
        >
          <View style={styles.foodDetails}>
            <Text style={styles.foodName}>
              {item.name}
            </Text>

            <Text style={styles.foodDescription}>
              {item.description}
            </Text>

            <Text style={styles.foodPrice}>
              S${item.price.toFixed(2)}
            </Text>
          </View>

          <Image
              source={{uri: item.image}}
              style={styles.foodImage}
          />
        </TouchableOpacity>
    );
  };

  return (
      <View style={{flex: 1, padding: 20}}>


        <View style={styles.titleContainer}>
          <MaterialIcons
              name="restaurant-menu"
              size={32}
              color="#E53935"
          />
          <Text style={styles.appTitle}>Ian's Menu</Text>
        </View>

        <Button
            title="Add Food"
            onPress={() => {navigation.navigate("Add")}}
        />
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({section}) => (
                <View
                    style={[
                      styles.sectionHeader,
                      {backgroundColor: section.bgColor},
                    ]}
                >
                  <MaterialIcons
                      name={section.icon}
                      size={24}
                      color="#333"
                  />
                  <Text style={styles.sectionTitle}>
                    {section.title}
                  </Text>
                </View>
            )}
            keyExtractor={(item) => item.name}
        />

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',



  },

  foodRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },

  foodImage: {
    width: 115,
    height: 105,
    resizeMode: 'cover',
    borderRadius: 10,
    flexShrink: 0,
  },

  foodDetails: {
    width: '55%',
    flexShrink: 1,
    marginRight: 8,
  },

  foodName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  foodDescription: {
    fontSize: 13,
    color: '#666',
    marginBottom: 10,
  },

  foodPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E53935',
  },

  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E53935',
    marginBottom: 5,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
    gap: 10,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 5,
    gap: 8,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
