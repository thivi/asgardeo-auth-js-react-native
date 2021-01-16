import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export const SignIn = ({route, navigation}:{route: any, navigation: any}) => {
    return (
        <WebView source={ { uri: route.params.url } } style={ { marginTop: 20 } } />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
