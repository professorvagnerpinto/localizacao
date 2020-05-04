/**
 * Vídeo #11 ao #27: Localização - Módulo 18 - Localização, Câmera, React Navite avançado - B7Web
 * Adiquirindo conhecimento em features avançadas: Trabalhando com localização e mapas.
 * by: Vagner Pinto
 */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class Home extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('SimpleLocation')}>
                    <Text style={styles.textButton}>Localização Simples</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('UseMaps')}>
                    <Text style={styles.textButton}>Mapas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('OtherMarkerMaps')}>
                    <Text style={styles.textButton}>Marcadores personalizados</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    button: {
        width:220,
        height:50,
        alignItems:'center',
        backgroundColor: '#006400',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    textButton:{
        fontSize:14,
        color:'#ffffff',
        fontWeight:'bold'
    }
});
