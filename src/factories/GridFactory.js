import React, {useEffect, Component} from 'react';
import Game from './Game';
// import Link from 'react-router-dom';
import getGrid from '../helpers/gridHelper';

let count = 0;
let cols = getGrid();
let vis = new Set();

class GridFactory extends Component{

    constructor(props){
        super(props);
        this.state = {
            submitted: false,
        }

        this.addToVis = this.addToVis.bind(this);
    }

    addToVis (e) {
        if(e.target.classList.contains('submit')){
            this.setState({
                submitted: true
            });
        }
            
        else if(e.target.classList.contains('square')){
            vis.add(e.target.id);
            e.target.style.backgroundColor = 'red';
        }
    }

    componentDidMount(){
        document.getElementById('root').addEventListener('click', this.addToVis);
    }

    render(){
        if(this.state.submitted == false){
            return(
                <div className = 'container'>
                    <div className='title'><h1>SELECT YOUR SHIPS!</h1> (the computer will have the same number of squares as you!)</div>
                        {cols}
                    <div>
                    <button className='submit'>SUBMIT</button>
                    </div>
                </div>
            ); 
        }
        else{
            document.getElementById('root').removeEventListener('click', this.addToVis);
            return(
                <div className='container'>
                    <Game vis={vis}/>
                </div>
                
            ); 
        }
        }
    
}


export default GridFactory;
