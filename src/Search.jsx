import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import "./Search.css";

const SearchContainer = styled('div')({
    textAlign: 'center',
    marginTop: '20px',
});

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;


    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            let jsonResponse = await response.json();
            if (jsonResponse.cod !== 200) {
                throw new Error('City not found');
            }
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch (err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setCity("");
        try {
            const newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false);
        } catch (err) {
            setError(true);
        }
        setLoading(false);
    }

    return (
        <SearchContainer>
            <form onSubmit={handleSubmit}>
                <TextField onChange={handleChange} value={city} id="city" label="City Name" variant="outlined" required />
                <br /><br />
                <Button variant="contained" type='submit' disabled={loading}>Search</Button>
            </form>
            {loading && <CircularProgress style={{ marginTop: '20px' }} />}
            {error && <Alert severity="error" style={{ marginTop: '20px' }}>NO SUCH PLACE EXISTS!!</Alert>}
        </SearchContainer>
    )
}
