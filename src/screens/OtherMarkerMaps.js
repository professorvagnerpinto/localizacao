/**
 * Vídeo #11 ao #27: Localização - Módulo 18 - Localização, Câmera, React Navite avançado - B7Web
 * Adiquirindo conhecimento em features avançadas: Trabalhando com mapas.
 * Para instalar o react-native-maps, siga as instruções em: https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md
 * Ou execute: yarn add react-native-maps -E (se não funionar é pq mudou na documentação)
 * by: Vagner Pinto
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import PersonalPin from '../componentes/PersonalPin';
import PersonalCallout from '../componentes/PersonalCallout';

export default class OtherMarkerMaps extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            mapType:'standard',
            markers:[
                {key:0, quantidade:5500, coords:{latitude:-31.7661083, longitude:-52.3521565}, pinColor:'red' ,title:'IFSul', description:'Instituto Federal Sul-rio-grandense'},
                {key:1, quantidade:1200, coords:{latitude:-31.7659234, longitude:-52.3460221}, pinColor:'#63b8ff', title:'Santa Casa', description:'Hospital Santa Casa'},
                {key:2, quantidade:19000, coords:{latitude:-31.7810932, longitude:-52.325668},  pinColor:'green', title:'UFPel Anglo', description:'Universidade Federal de Pelotas'},
                {key:3, quantidade:4000, coords:{latitude:-31.7736143, longitude:-52.3392507}, pinColor:'#cdcd00', title:'UCPel', description:'Universidade Católica de Pelotas'},
                {key:4, quantidade:8000, coords:{latitude:-31.7702478, longitude:-52.3418384}, pinColor:'orange', title:'Prefeitura', description:'Prefeitura Municipal' }
            ]
        }

        this.addMarker = this.addMarker.bind(this);
    }

    addMarker(e){
        let s = this.state;
        this.state.markers.push({
            key:this.state.markers.length,
            coords:{latitude:e.nativeEvent.coordinate.latitude, longitude:e.nativeEvent.coordinate.longitude},
            image:require('../images/ic_map_car_red.png'),
            title:'My marker ' + this.state.markers.length,
            description:'My description '+this.state.markers.length});
        this.setState(s);
    }

    render(){
        return(
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    ref={map => this.map = map}
                    style={styles.map}
                    mapType={this.state.mapType}
                    onLongPress={this.addMarker}
                    initialRegion={{ //região onde deve focar o mapa na inicialização
                        latitude: -31.766108372781073,
                        longitude: -52.35215652734042,
                        latitudeDelta: 0.015, //baseado na documentação
                        longitudeDelta: 0.0121, //baseado na documentação
                    }}
                >
                    {this.state.markers.map((marker)=>{
                        return <Marker key={marker.key}
                                       coordinate={marker.coords}
                                       draggable
                                       onDragEnd={this.updateMarker}
                        >
                            <PersonalPin color={marker.pinColor} quantidade={marker.quantidade}/>
                            <PersonalCallout title={marker.title} description={marker.description} />
                        </Marker>
                    })}
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});
