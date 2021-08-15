import React from 'react'
import { View, Text } from 'react-native';

export default function Forecast(props) {
    return (
    <View >
        <Text style={styles.mainStyle}>{props.main}</Text>
            <Text style={styles.tempStyle}>{props.temp} °C</Text>
            <Text style={styles.descriptionStyle}>{props.description}</Text>
            
        </View>
    )
}
const styles = StyleSheet.create({
    mainStyle: {
        textAlign: 'center',
        marginTop: 180,
        color: '#665954'
    },
    tempStyle: {
        textAlign: 'center',
        fontSize: 30,
        color: '#665954',
        fontWeight: 'bold'
    },
    descriptionStyle: {
        textAlign: 'center',
        color: '#665954'
    }
})
   
