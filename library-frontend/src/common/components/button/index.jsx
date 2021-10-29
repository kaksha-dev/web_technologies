import React from 'react';

const Button = (props) => {
    // const buttonLabel = 'Submit';
    const buttonStyle = {
        backgroundColor: props.backgroundColor,
        color: props.color,
    };
    return <button style={buttonStyle}>{props.label}</button>;
    // return (
    //     <button
    //         style={{
    //             backgroundColor: props.backgroundColor,
    //             color: props.color,
    //         }}
    //     >
    //         {props.label}
    //     </button>
    // );
    // return <input type="button" value={props.label} />;
};

export default Button;
