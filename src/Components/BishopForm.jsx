import React, { useEffect, useState } from 'react';

const BishopForm = (resevationId='9fe7513f-e599-45c9-b0e3-f14987928491') => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [cars, setCars] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, address, city, state, zip, cars, startDate, endDate, phone, email);
    }

    // const propertyId = ""

    // 
    useEffect(() => {
        getReservationDetails();
    }, []);
    
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'https://api.guestyforhosts.com/external/v1/reservation/listFor/5c3a64fe-dd85-4e38-b068-ea6e27bc48d0/2023-01-01/2024-01-01';

    const getReservationDetails = () => {
        //setHeaders
        try {
            fetch(proxyUrl + targetUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ',
                    'x-porter-api-key': 'guestyforhosts',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': '*/*'
                }

            })
            .then(response => {
                // Log the raw response text
                console.log(response.text());
              
              })
            // .then(response => response.json())
            // .then( data => data.filter(reservation => reservation.id === resevationId))
            // .then(reservation => {
            //     setFirstName(reservation.firstName);
            //     setLastName(reservation.lastName);
            //     setPhone(reservation.phoneNumber);
            //     setStartDate(reservation.startDate);
            //     setEndDate(reservation.endDate);
            //     setEmail(reservation.email);
            // })
        }catch (error) {
            console.log(error);
        }

    }
    
    return(
        <>{firstName}</>
    )




}

export default BishopForm;