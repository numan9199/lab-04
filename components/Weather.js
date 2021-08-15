import React,{useState,useEffect} from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props) {
    const APIKey = 'ea8a78efe25ee1ecb41aee4b7fec0e2c'
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
        })

    useEffect(() => {
            console.log(`fetching data with zipCode = ${props.zipCode}`)
            if (props.zipCode) {
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=${APIKey}`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                console.warn(error);
                });
            }
    }, [props.zipCode])
    
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
       

