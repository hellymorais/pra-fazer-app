import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';

export default function Index() {
    return (
        <View style={styles.form}>
            <TextInput style={styles.input} placeholder='E-mail' />
            <TextInput style={styles.input} placeholder='Senha' />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
             <Text style={styles.bttnText}>Criar Usuário</Text>
            </TouchableOpacity>
        </View>
);
}