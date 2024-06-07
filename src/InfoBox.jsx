import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
export default function InfoBox({ info }) {

    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1675276116240-51a71b0a8524?q=80&w=1838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds";
    const RAIN_URL = "https://images.unsplash.com/photo-1619260584294-8a4e63f5ade5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <Card sx={{ maxWidth: 400, minWidth: 350 }}>
            <CardMedia
                sx={{ height: 140 }}
                image= {info.humidity > 95 ? RAIN_URL : info.temp > 25 ? HOT_URL : COLD_URL}
                title="Weather Image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    &nbsp;&nbsp;
                    <span>{info.humidity > 95 ?  <BeachAccessIcon/> : info.temp > 25 ? <WbSunnyIcon/> : <AcUnitIcon/>}</span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <p><b><i>{info.weather}</i></b></p>
                    <p>Temperature: {info.temp}&deg;C</p>
                    <p>Humidity: {info.humidity}%</p>
                    <p>Min Temp: {info.tempMin}&deg;C</p>
                    <p>Max Temp: {info.tempMax}&deg;C</p>
                    <p>Feels Like: {info.feelsLike}&deg;C</p>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
