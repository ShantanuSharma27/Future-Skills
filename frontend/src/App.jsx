import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import axios from 'axios';
import "./App.css"; // Import the App CSS file

const App = () => {
    const [cards, setCards] = useState([]); // Store all card data
    const [searchText, setSearchText] = useState(""); // Store the search text
    const [loading, setLoading] = useState(true); // Store the loading state
    const [error, setError] = useState(null); // Store the error state

    // Fetch all cards on initial load
    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get('/api/cards/');
                console.log(response.data);
                setCards(response.data); // Store all cards
                setLoading(false); // Set loading to false after fetching
            } catch (error) {
                console.error('Error fetching cards:', error.message);
                setError('Failed to load cards');
                setLoading(false); // Set loading to false if an error occurs
            }
        };

        fetchCards();
    }, []);

    // Function to handle search filtering
    const handleSearch = (searchText) => {
        setSearchText(searchText); // Update the search text state
    };

    // Filter the cards based on the search text
    const filteredCards = cards.filter(card =>
        card.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <Searchbar onSearch={handleSearch} />
            <div className="space"></div>
            <div className="card-container">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && searchText && filteredCards.length === 0 && (
                    <p>No cards found with the title "{searchText}".</p>
                )}
                {!loading && !error && filteredCards.map(card => (
                    <div className="card-wrapper" key={card.id}>
                        <Card cardId={card.id} />
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default App;
