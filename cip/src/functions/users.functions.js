import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getUser(setUser, setUserInfo) {
    try {
        const userFromStorage = await AsyncStorage.getItem('user');
        setUser(userFromStorage);
        let info = await fetchUserInfo(userFromStorage)
        setUserInfo(info)
    } catch (e) {
        console.log(e);
    }

}
async function fetchUserInfo(username) {
    const token = await AsyncStorage.getItem('token');
    const response = await fetch(`https://cip-6fes.onrender.com/users/${username}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const userDetails = await response.json();
    return userDetails.user
}