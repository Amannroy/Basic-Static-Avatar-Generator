import React, { useState } from 'react';
import Hair from './Hair';
import Eyes from './Eyes';
import Mouth from './Mouth';

const Avatar = () => {
    const [hair, setHair] = useState('default');
    const [eyes, setEyes] = useState('default');
    const [mouth, setMouth] = useState('default');

    const handleHairChange = (event) => {
        setHair(event.target.value);
    }

    const handleEyesChange = (event) => {
        setEyes(event.target.value);
    }

    const handleMouthChange = (event) => {
        setMouth(event.target.value);
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f0f0f0',
            minHeight: '100vh',
        }}>
            <h1 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Avatar Generator</h1>
            <div style={{ marginBottom: '20px' }}>
                <h2>Hair</h2>
                <select value={hair} onChange={handleHairChange} style={{ marginTop: '10px' }}>
                    <option value="default">Default</option>
                    <option value="short">Short</option>
                    <option value="long">Long</option>
                </select>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h2>Eyes</h2>
                <select value={eyes} onChange={handleEyesChange} style={{ marginTop: '10px' }}>
                    <option value="default">Default</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h2>Mouth</h2>
                <select value={mouth} onChange={handleMouthChange} style={{ marginTop: '10px' }}>
                    <option value="default">Default</option>
                    <option value="smile">Smile</option>
                    <option value="frown">Frown</option>
                </select>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '2px solid #ccc',
                padding: '20px',
                borderRadius: '10px',
                backgroundColor: '#fff',
            }}>
                <h2>Avatar Preview</h2>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Hair type={hair} />
                    <Eyes type={eyes} />
                    <Mouth type={mouth} />
                </div>
            </div>
        </div>
    );
};

export default Avatar;
