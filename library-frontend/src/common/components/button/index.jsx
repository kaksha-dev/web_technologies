import React from 'react';

const Button = (props) => {
    // const buttonLabel = 'Submit';
    const buttonStyle = {
        backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : '#0a58ca',
        color: props.color ? props.color : 'white',
        border: props.border ? props.border : '1px solid',
        borderRadius: props.borderRadius ? props.borderRadius : '20px',
        padding: props.padding ? props.padding : '0px 10px',
    };

    // const onClickHandler = () => {
    //     console.log('Button is clicked');
    // };

    return (
        <button
            style={buttonStyle}
            onClick={props.clickHandler}
            id="addBooksButton"
        >
            {props.label}
        </button>
    );
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
