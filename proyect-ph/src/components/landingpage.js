import React , { Component } from 'react';
import {Cell , Grid } from 'react-mdl';

class Landing extends Component {
    render () {
        return (
            <div style={{width:'100%' , margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                       <img 
                         src="./imagen/photo.png"
                         alt="avatar" 
                         className="avatar-img"
                         />

                         <div className="banner-text">
                             <h1>Capturamos momentos inolvidables</h1>

                             <hr/>
                             <p>CASAMIENTOS | CUMPLEAÑOS | BOOK PERSONAL | BAUTISMOS</p>

                         </div>
                        
                    </Cell>

                </Grid>


            </div>
        )
        
    }
}

export default Landing; 