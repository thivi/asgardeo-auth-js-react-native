import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { auth } from "./init";
export const Home = ({navigation}:{navigation:any}) => {

    const handleSignIn = async () => {
        const url = await auth.getAuthorizationURL();
        navigation.navigate("SignIn", {url:url});
    }

    return (
        <View>
            <Button title="Sign In" onPress={handleSignIn}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
