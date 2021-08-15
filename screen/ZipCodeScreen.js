import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList ,View,Text,StyleSheet} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', { zipCode: code})
        }
    }>
        <View style={styles.zipItem}>
            <Text style={styles.itemStyle}>{place}</Text>
            <Text style={styles.itemStyle}>{code}</Text>
        </View>
    </TouchableHighlight>

)
const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <FlatList
                data = {availableZipItems}
                keyExtractor= {item => item.code}
                renderItem =  {({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
    },
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    itemStyle: {
        color: '#665954',
        fontWeight: 'bold'
    }
})