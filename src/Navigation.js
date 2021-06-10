
import React from 'react';
import './css/Nav.css'
class Nav extends React.Component {

    x = 0;
    y = 0;
    z=0;

    nombre = (lien) => {
        if (lien == "Element1" ) {
            this.x++
            console.log(lien+ ":" + " j'ai été cliqué  " + this.x + " fois!");
        }
        else if (lien == "Element2"){
            this.y++
            console.log(lien+ ":" + " j'ai été cliqué  " + this.y + " fois!");

        }else if (lien == "Element3"){
                this.z++
            console.log(lien+ ":" + " j'ai été cliqué  " + this.z + " fois!");
        }
    }
    render() {
        return (
            <nav>
                <div>
                    <a onClick={() => this.nombre("Element1")} >
                        Element1
                    </a>
                    <a onClick={() => this.nombre("Element2")} >
                        Element2
                    </a>
                    <a onClick={() =>this.nombre("Element3")} >
                        Element3
                    </a>
                </div>
            </nav>
        )
    }
}

export default Nav