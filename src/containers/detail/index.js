import React from 'react';
import {} from 'react-native';
import { SafeAreaView, View, Text, ImageBackground } from 'react-native';

function Detail({route}) {
    let deets = route.params;
    return(
        <SafeAreaView style={styles.container}>
            {/* <Text>This is detail section</Text> */}
            <View>
                <ImageBackground style={styles.imagebackground} source={deets.poster} />
            </View>
            <View>
                <Text>{deets.name}</Text>
                <Text>Genre: {deets.genre}</Text>
                <Text>Rating: {deets.rating}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: "#F7F7F7",
        textAlign: 'center'
    },
    imagebackground: {
        width: 300,
        height: 400,
    }
}

export default Detail;