import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const YaziComponenet=({text})=><div><b>{text}</b></div>

class BasitMap extends Component {

  static defaultProps={
    center:{
      lag:40.769547, 
      lng:30.393965
    },
    zoom:10
  };

  render(){
    return (
      <div style={{height:'100vh',width:'100%'}}>
        <GoogleMapReact 
          bootstrapURLKeys={{key:'AIzaSyAVByx1hA9Ya0Qjad1Yj4ZwxQpt5w4fQbE'}}
          defaultCenter={this.props.center} 
          defaultZoom={this.props.zoom}>

          {
            <YaziComponenet 
                lat={40.769547}
                lng={30.393965}
                text={'Sakarya Yeni Yazı'}
            />
          }
        </GoogleMapReact>
      </div>
    );
  }

}

export default BasitMap;
