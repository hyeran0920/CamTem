import axios from 'axios';

class WeatherAPI {
    getWeather = async (region) => {
        try {
            const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${region}&cnt=16&appid=57849ba2b9bca9cc888074ba154f11d5&units=metric`;
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            throw error;
        }
    };
}

export default new WeatherAPI();