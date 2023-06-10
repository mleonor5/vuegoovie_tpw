import AsyncStorage from '@react-native-async-storage/async-storage';

export async function fetchModulesData(setModules) {
    const courseFromStorage = await AsyncStorage.getItem('course');
    const token = await AsyncStorage.getItem('token');
    const response = await fetch(`https://cip-6fes.onrender.com/courses/${courseFromStorage}/modules`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const modules = await response.json();
    setModules(modules)
}