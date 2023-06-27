import React, {Component} from 'react';
import '../styles/Home.css';
import Footer from './Footer';
// import { setTimeout } from "timers/promises";

class Home extends Component{
    constructor(props){
        super(props);
        window.location.hash='';
        this.submit = this.submit.bind(this);
        this.timer = this.submit.bind(this);
    }

    submit(){
        

        let text = document.querySelector('.input-val').value;
        
        
        window.location.hash = text;
        window.location.pathname = '/prep';// console.log()
    }

    async timer(){
        await new Promise(res => {
            return setTimeout(() => this.submit(), 5000)
        })
    }

    componentDidMount(){
       //document.getElementById('root').addEventListener('click', this.submit);
    }

    render(){
        return(
            <div className='total'>
                <div className='home-container'>
                <div className='welcome'>Are you ready for War?</div>
                <div className='enter-name'>
                    <div className='enter'>
                        <input className='input-val' placeholder='Enter your name...'/>
                        <button onClick={this.timer}className='enter-btn'>GO!</button>
                    </div>
                    
                </div>
            </div>
            <Footer />
            </div>
            
        )
    }
}

export default Home;