import React from 'react';
import {Component} from 'react';
import '../styles/game.css';


class Compgrid extends Component {
    constructor(props){
        super(props);
       
        let {vis} = props;
        this.state = {
            vis: vis,
            rands: [],
            grid: [],
            hitCounter: 1,
            computerHits: 1
        }

        this.makeMove = this.makeMove.bind(this);
        this.getShips = this.getShips.bind(this);
        this.getGrid = this.getGrid.bind(this);
    }

    getShips(){
        let num = this.state.vis.size;
        let ships = [];
        while(num > 0){
            let rand = Math.floor(Math.random() * 64) + 1;;
            if(ships.length > 0 && ships.includes(rand))        continue;
            else{
                ships.push(rand);
                num--;
            }
            
        }
        return ships;
    }

    getGrid(shipsss){
        const grid = [];
        let ships = shipsss;

        for(let i = 1; i < 9; i++){
            let col = [];
            //console.log(ships);
            for(let j = 1; j < 9; j++){
                let currID = 8*(i-1)+j;
                if(ships.length > 0){
                    if(!ships.includes(currID)) col.push(<div className='comp-square'></div>);
                    else col.push(<div className='comp-square ship'></div>);
                    //console.log(idx);
                    ships = ships.filter(num => num != currID);
                }
                else col.push(<div className='comp-square'></div>);
            }
            grid.push(<div>{col}</div>);
        }
        return grid;
    }

    makeMove(e){
        
        if(!e.target.classList.contains('comp-square') || e.target.classList.contains('visited')) 
            return;

        if(e.target.classList.contains('ship')){
            e.target.style.backgroundColor = 'red';
            this.setState({
                hitCounter: this.state.hitCounter+1
            })
            if(this.state.hitCounter == this.state.vis.size){
                window.location.pathname = '/won';
            }
        }
        else
            e.target.style.backgroundColor = 'blue'

        e.target.classList.add('visited');

        
        let rand = 0;
        let bad = true;

        while(bad){
            rand = Math.floor(Math.random() * 64) + 1;
            bad = this.state.rands.includes(rand);
            
        }

        this.setState({
            rands: this.state.rands.concat(rand)
        })

        let currentElement = document.getElementById(rand+'');
        
        if(currentElement.classList.contains('highlight')){
            currentElement.classList.remove('highlight');
            currentElement.classList.add('hit');
            this.setState({
                computerHits: this.state.computerHits+1
            });
            if(this.state.computerHits == this.state.vis.size){
                document.location.pathname = "/lost"
            }
        }   
        else   
            currentElement.classList.add('miss');
    }

    componentDidMount(){
        if(this.state.grid.length == 0){
            this.setState({
                grid: this.getGrid(this.getShips())
                
            });
            console.log('mount');
        }
        document.getElementById('root').addEventListener('click', this.makeMove)
    }

    render(){
        return (
            <div className = 'grid-container'>{this.state.grid}</div>
        );
    }
}

   
    

    

export default Compgrid;