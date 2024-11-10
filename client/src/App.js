import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [url, setUrl] = useState('');
    const [numWords, setNumWords] = useState(10);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [backgroundIndex, setBackgroundIndex] = useState(0);

    const backgrounds = [
        'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', // Serene forest with sunlight
        'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', // Waterfall surrounded by green trees
        'https://images.unsplash.com/photo-1493815793582-8f99e18d8d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'  // Misty mountain lake
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 7000); // Change every 7 seconds
        return () => clearInterval(interval);
    }, [backgrounds.length]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResults([]);
        try {
            const response = await axios.post('/api/word-frequency', { url, n: numWords });
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching word frequencies', error);
        }
        setLoading(false);
    };

    return (
        <div
            className="app-container"
            style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}
        >
            <div className="overlay">
                <h1>Word Frequency Checker</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter URL"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="input-field"
                    />
                    <input
                        type="number"
                        value={numWords}
                        onChange={(e) => setNumWords(e.target.value)}
                        min="1"
                        className="input-field"
                    />
                    <button type="submit" className="submit-button">Check Frequency</button>
                </form>
                {loading ? (
                    <div className="loading-spinner">
                        <div className="spinner">
                            <div className="spinner-dot spinner-dot1"></div>
                            <div className="spinner-dot spinner-dot2"></div>
                            <div className="spinner-dot spinner-dot3"></div>
                        </div>
                    </div>
                ) : (
                    results.length > 0 && (
                        <table className="results-table">
                            <thead>
                                <tr>
                                    <th>Word</th>
                                    <th>Frequency</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map(({ word, count }, index) => (
                                    <tr key={index}>
                                        <td>{word}</td>
                                        <td>{count}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                )}
            </div>
        </div>
    );
}

export default App;
