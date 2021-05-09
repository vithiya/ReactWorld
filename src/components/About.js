import React from 'react';

const About = () => {
    //Using JSX
    //return (
    //    <div>
    //        <h1>
    //            Profession : Software Engineer
    //        </h1>
    //    </div>
    //)
    //Without JSX
    return React.createElement(
        'div',
        {id:'job',className:'dummy'}, 
        React.createElement('h1',null,'Profession : Software Engineer' ));
}

export default About;