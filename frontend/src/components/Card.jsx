import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../components/Card.css"

const Card = ({ cardId }) => {
    const [cardData, setCardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCardData = async () => {
            try {
                // Make sure the URL is correct, include the full path if necessary
                const response = await axios.get(`/api/cards/${cardId}`);

                // Check if the response contains the expected data structure
                if (response.data && response.data.title && response.data.description) {
                    setCardData(response.data);
                } else {
                    setError('Invalid data format received from server');
                }
            } catch (error) {
                // Log the full error for debugging
                console.error('Error fetching card data:', error.response ? error.response.data : error.message);
                setError('Failed to load card data');
            } finally {
                setLoading(false);
            }
        };

        fetchCardData();
    }, [cardId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="card">
            <h3 className="card-title">{cardData.title}</h3>
            <div className='divider'></div>
            <p className="card-body">{cardData.description}</p>
        </div>
    );
};

export default Card;
