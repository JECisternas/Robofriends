import React, { Component } from 'react'
import Cardlist from './Cardlist';
import Searchbox from './Searchbox'
import Scroll from './Scroll';
//import { robots } from './robots'; SOLO PARA LA OPCION 1
// parentesis son xk robots no tiene un export default

class App extends Component {
    constructor() {
        super();
        this.state = {
            //robots: robots,  OPCION 1 - CARGA LOS DATOS DE robots.js AL INICIO  
            robots: [],     // OPCION 2 - NO CARGA DATOS
            searchfield: ''
        }
    }
// OPCION 2
// DESPUES DE MONTAR EL COMPONENTE 
// BUSCA LOS DATOS EN LA API jsonplaceholder y los deja en response
// LUEGO LOS DEJA EN userss PARA APLICARLE LA FUNCION serState Y DEJAR LOS DATOS EN robots
// QUE LUEGO LOS USA EN filteredRobots
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(userss => this.setState({ robots: userss }))
}    
onSearchChange = (event) => {
this.setState({ searchfield : event.target.value})

}
    render() {
        const {robots, searchfield} = this.state
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        // if (robots.length === 0) {
        //     return <h1>Loading</h1>
        // } else {
        //     return (
        //         <div className='tc'>
        //             <h1 className='f1'>Robofriend</h1>
        //             <Searchbox searchChange={this.onSearchChange} />
        //             <Scroll>
        //                 <Cardlist robots={filteredRobots} />
        //             </Scroll>
        //         </div>
        //     ) 
        // }      

        // OTRA OPCION DE IF
        return !robots.length ?
            <h1>Loading</h1>  :
            (
            <div className='tc'>
                <h1 className='f1'>Robofriend</h1>
                <Searchbox searchChange={this.onSearchChange} />
                <Scroll>
                    <Cardlist robots={filteredRobots} />
                </Scroll>
            </div>
            ) 
             

    };

};

export default App