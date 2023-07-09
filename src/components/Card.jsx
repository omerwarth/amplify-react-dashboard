import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { Button } from '.';

const Card = ({ name, imageUrl, onButtonClick }) => {
    const { currentColor } = useStateContext();
    
    return (
      <div style={styles.card}>
        <img src={imageUrl || "https://via.placeholder.com/150"} alt={name} style={styles.image} />
        <h2 style={styles.title}>{name}</h2>
        <Button 
            color="white"
            bgColor= {currentColor}
            text="Open"
            borderRadius="10px"
            size="md"
            onClick={onButtonClick}
        />
      </div>
    );
}

const styles = {
    card: {
        width: '300px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        boxSizing: 'border-box',
    },
    image: {
        width: '100%',
        borderRadius: '10px',
    },
    title: {
        color: 'grey',
        textAlign: 'center',
        margin: '10px 0',
    },
    button: {
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: "blue",
        border: 'none',
        cursor: 'pointer',
        marginTop: '5px',
    },
}

export default Card;
