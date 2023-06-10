import AsyncStorage from '@react-native-async-storage/async-storage';

export async function fetchNewsData(setNews) {
    const token = await AsyncStorage.getItem('token');
    const response = await fetch('https://cip-6fes.onrender.com/news', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const news = await response.json();
    setNews(news)
}