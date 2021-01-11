import React from 'react';
import './MenuDisplay.css';

import MenuSection from '../MenuSection/MenuSection';
import * as smoothielist from './smoothielist.js';

class MenuDisplay extends React.Component {
    render () {
        return (
            <div className="MenuDisplay">
                <MenuSection 
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
                />
                <MenuSection
                    name="go green"
                    smoothies={[smoothielist.greengoddess,
                                smoothielist.theemerald,
                                smoothielist.peachesandgreens,
                                smoothielist.zipzip,
                                smoothielist.vegandream

                            ]}
                />
                <MenuSection 
                    name="bulk me up"
                    smoothies={[smoothielist.thebuilder,
                                smoothielist.minimass,
                                smoothielist.megamass,
                                smoothielist.nuttybanana
                            ]}
                />
                <MenuSection 
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
                />
            </div>
        )
    }
}

export default MenuDisplay;