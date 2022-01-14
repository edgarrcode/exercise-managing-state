import React from 'react';

const Present = props => {
    return(
        <p className='text'>
            Your Score: {props.numCorrect}/{props.numQuestions}
        </p>
    );
}

export default Present;