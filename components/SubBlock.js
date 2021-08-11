import React from 'react'
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SubBlock = (data) => {
    return (
        <View style={styles.container}>
        <SafeAreaView>
            <View style={styles.content}>
              <Text style={styles.headerText}>{data.header} </Text>
              <Text style={styles.contentBody}>{data.body}</Text>
            </View>
        </SafeAreaView>
      </View>
    )
}

export default SubBlock

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: windowWidth,
      marginVertical:5
    },
    content: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginHorizontal: 10,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      marginVertical:5
    },
    contentBody:{
      fontSize:16,
      color:'darkgray',
      justifyContent:'flex-start'
    }
  });
  
