import React , { Component } from 'react';
import {Cell , Grid } from 'react-mdl';


class Landing extends Component {
    render () {
        return (
            <div style={{width:'100%' , margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                       <img 
                         src="https://i0.pngocean.com/files/449/984/899/camera-drawing-sketch-camera-drawing.jpg"
                         alt="avatar" 
                         className="avatar-img"
                         />
                        
                    </Cell>

                </Grid>


            </div>
        )
        
    }
}

export default Landing; 