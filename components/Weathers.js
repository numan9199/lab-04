import React,{useState} from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
        })
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <Text style={styles.zipCodeStyle}>Zip Code</Text>
                <Text style={styles.zipCodeStyle}>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
        );
       }
       const styles = StyleSheet.create({
        backdrop: {
            width: '100%',
            height: '100%'
            },
        zipCodeStyle: {
                color: '#665954',
                paddingTop: 10,
                fontSize: 20,
                textAlign: 'center'
            }
       });
       

