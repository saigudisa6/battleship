import React, {Component} from 'react'
import getGrid from '../helpers/gridHelper'
import '../styles/game.css'
import Compgrid from './Compgrid';

class Game extends Component{
    constructor(props){
        super(props);

        const {vis} = props;
        this.state = {
            playerVis: vis,
            playerGrid: getGrid(vis),
            compVis: vis,
            compGrid: getGrid(),
        }
    }


    render(){
        return(
            <div>
                <h1 style={{'textAlign':'center'}}>Don't die!</h1>
                <div className = 'game-container'>
                    <div>
                        <div className='name'>{window.location.hash.substring(1)}</div>
                        {this.state.playerGrid}
                    </div>
                    
                    <div className='comp-grid'>
                        <div className='name'>Computer</div>
                        <Compgrid vis = {this.state.playerVis}/>
                    </div>

                </div>
            </div>
            
        )
    }
    
}

export default Game;