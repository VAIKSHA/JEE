import React from 'react';
import Card from '../Components/Card'; 

export default function StudyM() {

    
    const styles = {
        header: {
            marginTop: '120px', 
            marginLeft: '40px', 
            fontWeight: 'bold', 
            fontStyle: 'italic', 
        }
    };

    return (
        <div>
            {/* Section for Class 11th study material */}
            <h1 style={styles.header}>Class 11th</h1>
            <Card />
            <Card />
            <Card /> 

            {/* Section for Class 12th study material */}
            <h1 style={styles.header}>Class 12th</h1>
            <Card />
            <Card />
            <Card />

            {/* Section for Droppers (students taking a gap year) */}
            <h1 style={styles.header}>Droppers</h1>
            <Card />
            <Card />
            <Card />
        </div>
    );
}
