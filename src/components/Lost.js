import React from 'react';
import '../styles/won.css';
import '../styles/lost.css';

const Lost = () => {
    
    const enter = () => {
        window.location.hash = '';
        window.location.pathname = '/';
    }

    return(
        <div className='loss-container'>
            <div className='title'>
                YOU LOST :(
            </div>
            <div className='try-cont'>
                <button onClick= {enter}className='try-again'>
                    Don't give up!! :D
                </button>
            </div>
            
        </div>
    )
}

export default Lost;