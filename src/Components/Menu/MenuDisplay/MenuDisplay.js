import React from 'react';
import './MenuDisplay.css';

import MenuButtons from '../MenuButtons/MenuButtons';
import MenuSection from '../MenuSection/MenuSection';
import * as smoothielist from './smoothielist.js';

class MenuDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNourish: true,
            showGreen: true,
            showBulk: true,
            showImmunity: true,
            showWeight: true,
            showBowls: true,
            blurred: ''
        }

        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name) {
        switch(name) {
            case "showComplete":
                this.setState({
                    showNourish: true,
                    showGreen: true,
                    showBulk: true,
                    showImmunity: true,
                    showWeight: true,
                    showBowls: true
                });
                break;
            case "showNourish":
                this.setState({ 
                    showNourish: true,
                    showGreen: false,
                    showBulk: false,
                    showImmunity: false,
                    showWeight: false,
                    showBowls: false
                });
                break;
            case "showGreen":
                this.setState({
                    showNourish: false,
                    showGreen: true,
                    showBulk: false,
                    showImmunity: false,
                    showWeight: false,
                    showBowls: false
                });
                break;
            case "showBulk":
                this.setState({
                    showNourish: false,
                    showGreen: false,
                    showBulk: true,
                    showImmunity: false,
                    showWeight: false,
                    showBowls: false
                });
                break;
            case "showImmunity":
                this.setState({
                    showNourish: false,
                    showGreen: false,
                    showBulk: false,
                    showImmunity: true,
                    showWeight: false,
                    showBowls: false
                });
                break;
            case "showWeight":
                this.setState({
                    showNourish: false,
                    showGreen: false,
                    showBulk: false,
                    showImmunity: false,
                    showWeight: true,
                    showBowls: false
                });
                break;
            case "showBowls":
                this.setState({
                    showNourish: false,
                    showGreen: false,
                    showBulk: false,
                    showImmunity: false,
                    showWeight: false,
                    showBowls: true
                });
                break;
            default:
        }
    }

    render () {
        const { showNourish, showGreen, showBulk, showImmunity, showWeight, showBowls } = this.state;

        return (
            <div className="MenuDisplay">
                <MenuButtons 
                    hideComponent={this.hideComponent}
                    blurBackground={this.props.blurBackground}
                    dim={this.props.dim}
                />
                <div className="MenuSectionDisplay">
                    {showGreen && <MenuSection
                        name="go green"
                        smoothies={[smoothielist.greengoddess,
                                    smoothielist.theemerald,
                                    smoothielist.peachesandgreens,
                                    smoothielist.zipzip,
                                    smoothielist.vegandream
                                ]}
                        blurBackground={this.props.blurBackground}
                        unblur={this.props.unblur}
                    />}
                    {showBulk && <MenuSection 
                        name="bulk me up"
                        smoothies={[smoothielist.thebuilder,
                                    smoothielist.minimass,
                                    smoothielist.megamass,
                                    smoothielist.nuttybanana
                                ]}
                        blurBackground={this.props.blurBackground}
                        unblur={this.props.unblur}
                    />}
                    {showNourish && <MenuSection 
                        name="nourish my body"
                        smoothies={[smoothielist.berryberry, 
                                    smoothielist.pbj,
                                    smoothielist.coconutpassion,
                                    smoothielist.guavasunrise,
                                    smoothielist.peanutpassion,
                                    smoothielist.powerfuel,
                                    smoothielist.rejuvinator,
                                    smoothielist.southpacific,
                                    smoothielist.tropicalparadise,
                                    smoothielist.mochabliss,
                                    smoothielist.zestylemon
                                ]}
                        blurBackground={this.props.blurBackground}
                        unblur={this.props.unblur}
                    />}
                    {showImmunity && <MenuSection 
                        name="boost my immune system"
                        smoothies={[smoothielist.acaifusion,
                                    smoothielist.raspberrydream,
                                    smoothielist.blueberryblast,
                                    smoothielist.immunitynectar,
                                    smoothielist.mangoberry,
                                    smoothielist.marionberryfuel,
                                    smoothielist.quickstart,
                                    smoothielist.sambazon,
                                    smoothielist.zonezinger
                                ]}
                        blurBackground={this.props.blurBackground}
                        unblur={this.props.unblur}
                    />}
                    {showWeight && <MenuSection 
                        name="help me lose weight"
                        smoothies={[smoothielist.energizer,
                                    smoothielist.fruitysupreme,
                                    smoothielist.islandbreeze,
                                    smoothielist.justpeachy,
                                    smoothielist.leanbody,
                                    smoothielist.leanout,
                                    smoothielist.lowcarbflax,
                                    smoothielist.lowcarbpb,
                                    smoothielist.orangetwister,
                                    smoothielist.pacificsplash,
                                    smoothielist.pineapplebliss,
                                    smoothielist.slimnfit
                                ]}
                        blurBackground={this.props.blurBackground}
                        unblur={this.props.unblur}
                    />}
                    {showBowls && <MenuSection 
                        name="acai bowls"
                        smoothies={[smoothielist.bananaberrycrunch,
                                    smoothielist.healthnut,
                                    smoothielist.tropicalsunrise,
                                ]}
                        blurBackground={this.props.blurBackground}
                        unblur={this.props.unblur}
                    />}
                </div>
            </div>
        )
    }
}

export default MenuDisplay;