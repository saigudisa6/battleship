const getGrid = (vis) => {
    let grid = [];
    for(let i = 1; i < 9; i++){

        let cols = [];
        for(let j = 1; j < 9; j++){
            let currID = 8*(i-1)+j;

            if(vis){
                let col = <div className='game-square' id={currID}></div>;
                if(vis.has(""+currID)){
                    col = <div className='game-square highlight'id={currID}></div>;
                }
                
            cols.push(col);
            }
            else{
                let col = <div className='square' id={currID}></div>;
                
            cols.push(col);
            }
            
        }
        grid.push(<div>{cols}</div>);
    }
    return (
        <div className = 'grid-container'>{grid}</div>
    );
}

export default getGrid;