import React from 'react';
import '../styles/won.css';

const Won = () => {
    
    const enter = () => {
        window.location.hash = '';
        window.location.pathname = '/';
    }

    return(
        <div className='win-container'>
            <div className='win-title'>
                YOU WON!!!
            </div>
            <div className='try-cont'>
                <button onClick= {enter}className='try-again'>
                    Try again!! :D
                </button>
            </div>
            
        </div>
    )
}

export default Won;