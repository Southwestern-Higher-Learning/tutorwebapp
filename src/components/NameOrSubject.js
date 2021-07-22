import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'


export const NameOrSubject = ({ selectionCallBack }) => {
    const [isActive, setIsActive] = React.useState(false)
    return (
        <View style={styles.container}>
            <View style={!isActive ? styles.buttonActive : styles.buttonNotActive}>
                <TouchableOpacity
                    style={{ marginHorizontal: 60, marginVertical: 5 }}
                    onPress={() => {
                        setIsActive(!isActive)
                        selectionCallBack(!isActive)

                    }}
                >
                    <Text style={!isActive ? styles.buttonTextActive : styles.buttonTextNotActive}>Subject</Text>
                </TouchableOpacity>

            </View>
            <View style={isActive ? styles.buttonActive : styles.buttonNotActive}>
                <TouchableOpacity
                    style={{ marginHorizontal: 60, marginVertical: 5 }}
                    onPress={() => {
                        setIsActive(!isActive)
                        selectionCallBack(!isActive)
                    }}
                >
                    <Text style={isActive ? styles.buttonTextActive : styles.buttonTextNotActive}>Name</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: 'auto',
        justifyContent: 'space-evenly',
        paddingTop: 5,
    },
    buttonActive: {
        backgroundColor: '#ffcd20',

    },
    buttonNotActive: {
        backgroundColor: '#D3D3D3'
    },
    buttonTextNotActive: {
        fontFamily: 'HKGroteskSemiBold',
        fontSize: 20,
        color: 'gray',
        textDecorationLine: 'none'
    },
    buttonTextActive: {
        fontFamily: 'HKGroteskSemiBold',
        fontSize: 20,
        color: 'black',
        textDecorationLine: 'underline'
    }
})