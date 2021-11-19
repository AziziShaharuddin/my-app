import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity} from 'react-native';

// const Data = ["1", "2", "3", "4", "5", "6"];
const Data = [
    {   
        poster: require("../../assets/picture/after.jpg"),
        name: 'After',
        genre: 'Action',
        rating: 8.6,
    },
    {
        name: 'Archer',
        poster: require("../../assets/picture/archer.jpg"),
        genre: 'Action',
        rating: 7.5,
    },
    {
        poster: require("../../assets/picture/jumanji.jpg"),
        name: 'Jumanji',
        genre: 'Comedy, Action',
        rating: 6.2,
    },
    {
        poster: require("../../assets/picture/parasite.jpeg"),
        name: 'Parasite',
        genre: 'Thriller',
        rating: 9.8,
    },
    {
        poster: require("../../assets/picture/shrek.jpg"),
        name: 'Shrek',
        genre: 'Sci-fi',
        rating: 9.8,
    },
    {
        poster: require('../../assets/picture/moonlight.jpg'),
        name: 'Moonlight',
        genre: 'Horror',
        rating: 7.2,
    },
    {
        poster: require('../../assets/picture/mariageStory.png'),
        name: 'Marriage Story',
        genre: 'Drama',
        rating: 6.0,
    },
    {
        poster: require('../../assets/picture/frontLine.jpg'),
        name: 'Frontline',
        genre: 'Drama, Thriller',
        rating: 8.7,
    },
];

function Home(props) {
    function _renderList(data){
        return(
            <TouchableOpacity style={styles.cardStyle} onPress={() => props.navigation.navigate('Detail', data)} >
                <ImageBackground style={styles.imagebackground} source={data.poster} />
                {/* <Image source={data.poster} /> */}
                <Text style={styles.title}>{data.name}</Text>
            </TouchableOpacity>
        );
    };
    return(
        <SafeAreaView style={{flex:1}}>
            {/* <Text> This is Home page</Text> */}
            <ScrollView 
            showsVerticalScrollIndicator={false} 
            // horizontal={true}
            // showsHorizontalScrollIndicator={false} 
            contentContainerStyle={{paddingHorizontal: 20, flexWrap: "wrap", flexDirection: "row", justifyContent: "center",}}>
                {
                    Data.map((list) => (
                        _renderList(list)
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = {
    cardStyle: {
        width: 300,
        height: 400,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
        borderRadius: 10,
        marginHorizontal: 20
    },
    imagebackground: {
        width: '100%',
        height: '100%',
        marginTop: 30
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    }
}

export default Home;