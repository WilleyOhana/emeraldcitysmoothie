import React from 'react';
import './Title.css';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const googleMapsAPIKey = 'AIzaSyCgfhnWjjc-03CI_CyiiMyqDb7R9yGj8es';

class Title extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayingMap: false
        }

        this.displayMap = this.displayMap.bind(this);
    }

    displayMap(e) {
        this.setState({
            displayingMap: !this.state.displayingMap
        })

        this.props.openMap();
    }

    render() {
        const style = {
            height: '60vh',
            width: '100%',
            minHeight: '320px',
            minWidth: '320px',
            borderRadius: '8px',
            zIndex: '2',
        }

        return (
            <div className="Title">
                <div className="ecs-title">
                    <h1>Bellingham Emerald City Smoothie</h1>
                </div>
                <div className="ecs-description">
                    <h2>Bellingham location at 1058 Lakeway Drive, next to Whole Foods</h2>
                    <div className="maps">
                        <div className="btn">
                            <button className="btn-4" onClick={this.props.openMap}><a href="#map">Map</a></button>
                        </div>
                        
                        <div className="btn">
                            <button className="btn-4">
                                <a href="https://www.emeraldcitysmoothie.com/locations">Looking for another location? Click here!</a>
                            </button>
                        </div>
                    </div>
                </div>
                {this.props.mapDisplaying &&
                    <div id="map" className="map-container">
                        <Map
                            style={style}
                            google={this.props.google}
                            initialCenter={{
                                lat: 48.74410146951325,
                                lng: -122.46106447789339
                            }}
                            zoom={15}
                        >
                            <Marker
                                name={'Emerald City Smoothie'}
                                position={{
                                    lat: 48.74410146951325,
                                    lng: -122.46106447789339
                                }}
                            />
                        </Map>
                    </div>
                }
            </div>
        );
    }
}

export default GoogleApiWrapper(() => ({
    apiKey: googleMapsAPIKey
}))(Title);