import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NextPhase() {
    AsyncStorage.getItem('phase')
        .then(value => {
            // Parse the value to an integer
            const intValue = parseInt(value, 10);

            // Add to the value
            const newValue = intValue + 1;
            // Store the new value
            AsyncStorage.setItem('phase', newValue.toString())
                .then(() => {
                    console.log('Number added');
                })
                .catch(error => console.error('Error adding value: ', error));
        })
        .catch(error => console.error('Error retrieving value: ', error));
}

