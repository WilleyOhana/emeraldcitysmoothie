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
            showWeight: true
        }

        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name) {
        console.log(name);
        switch(name) {
            case "showComplete":
                this.setState({
                    showNourish: true,
                    showGreen: true,
                    showBulk: true,
                    showImmunity: true,
                    showWeight: true
                });
                break;
            case "showNourish":
                this.setState({ 
                    showNourish: true,
                    showGreen: false,
                    showBulk: false,
                    showImmunity: false,
                    showWeight: false
                });
                break;
            case "showGreen":
                this.setState({
                    showNourish: false,
                    showGreen: true,
                    showBulk: false,
                    showImmunity: false,
                    showWeight: false
                });
                break;
            case "showBulk":
                this.setState({
                    showNourish: false,
                    showGreen: false,
                    showBulk: true,
                    showImmunity: false,
                    showWeight: false
                });
                break;
            case "showImmunity":
                this.setState({
                    showNourish: false,
                    showGreen: false,
                    showBulk: false,
                    showImmunity: true,
                    showWeight: false
                });
                break;
            case "showWeight":
                this.setState({ showWeight: !this.state.showWeight });
                break;
            default:
        }
    }

    render () {
        const { showNourish, showGreen, showBulk, showImmunity, showWeight } = this.state;

        return (
            <div className="MenuDisplay">
                <MenuButtons hideComponent={this.hideComponent}/>
                <div className="MenuSectionDisplay">
                    {showGreen && <MenuSection
                        name="go green"
                        smoothies={[smoothielist.greengoddess,
                                    smoothielist.theemerald,
                                    smoothielist.peachesandgreens,
                                    smoothielist.zipzip,
                                    smoothielist.vegandream

                                ]}
                    />}
                    {showBulk && <MenuSection 
                        name="bulk me up"
                        smoothies={[smoothielist.thebuilder,
                                    smoothielist.minimass,
                                    smoothielist.megamass,
                                    smoothielist.nuttybanana
                                ]}
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
                    />}
                </div>
            </div>
        )
    }
}

export default MenuDisplay;