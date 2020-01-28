import React from 'react';

// import image to make webpack aware of your files, instead of using relative links
import burgerLogo from '../../assets/images/Logo.png';

const logo = (props) => {
    return (
        <div>
            <img src={burgerLogo} />
        </div>
    );
};


export default logo;