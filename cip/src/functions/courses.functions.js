import AsyncStorage from '@react-native-async-storage/async-storage';


export async function fetchCoursesData(setCourses, setModules, courseName) {
    const token = await AsyncStorage.getItem('token');
    const response = await fetch('https://cip-6fes.onrender.com/courses', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const courses = await response.json();
    setCourses(courses);
}

export async function toCourseDetails(item, navigation) {
    await AsyncStorage.setItem('course', item.courseName)
        .then(() => console.log('Course stored successfully'))
        .catch(error => console.error('Error storing data: ', error));
    navigation.navigate('CourseDetails', item)
}