/*
// in-line styling is great for simple project, not good for responsive design and complex project 
function Button (){

    const styles = {
            backgroundColor:"hsl(0, 100%, 50%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border:"none",
            cursor:"pointer",
            
    }
    return(<button style = {styles}>Click me</button>)
}

export default Button
*/

import React, { useState } from 'react';

function Button() {
    const [isHovered, setIsHovered] = useState(false);

    const baseStyle = {
        backgroundColor: "hsl(0, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.3s ease" // Smooth transition for the hover effect
    };

    const hoverStyle = {
        backgroundColor: "hsl(0, 80%, 45%)" // Darker shade when hovered
    };

    // Combine baseStyle with hoverStyle when the button is hovered over
    const styles = isHovered ? { ...baseStyle, ...hoverStyle } : baseStyle;

    return (
        <button
            style={styles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            Click me
        </button>
    );
}

export default Button;
