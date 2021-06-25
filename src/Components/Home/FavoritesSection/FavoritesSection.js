import React from 'react';
import './FavoritesSection.css';

import Favorite from '../Favorite/Favorite.js';
import fav1 from './the-emerald.jpg';
import fav2 from './the-builder.jpg';
import fav3 from './berry-berry.jpg';
import fav4 from './pbj.jpg';

import Footer from '../Footer/Footer.js';

class Favorites extends React.Component {
    render() {
        return (
            <div className="cont">
                <div className="Favorites">
                    <h1>Favorites</h1>
                    <Favorite 
                        src={fav1} 
                        name="The Emerald"
                        description="As one of our most popular smoothies, this guy is packed full of antioxidant goodness.
                        The banana, blueberry, and kale work hand-in-hand to reduce free-radicals in your body. Add peanut butter to make it a meal!"
                        ingredients={["Blueberry","Kale + Spinach","Strawberry","Banana","Whey Protein (21g)"]} />
                    <Favorite 
                        src={fav2} 
                        name="The Builder" 
                        description="The biggest and baddest of smoothies. The Builder is a meal and a half in a cup, perfect for filling up with tons of protein.
                        Coming in three different flavors, it has got some variation to fit what you're feeling."
                        ingredients={["Ice Cream","Non-fat Milk","Strawberry, Chocolate, or Vanilla","Whey Protein (24g)","Gainer","Banana","Peanut Butter"]} />
                    <Favorite 
                        src={fav3} 
                        name="Berry Berry" 
                        description="A classic take on a berry packed smoothie with protein to add some extra pep in your step.
                        Perfect for kids and adults alike, this smoothie is one you can't go wrong with!"
                        ingredients={["Blueberry","Raspberry","Strawberry","Whey Protein (9g)"]} />
                    <Favorite 
                        src={fav4} 
                        name="PB & J" 
                        description="A delicious addition to our list of meal-replacement smoothies. The PB+J will forever go down as one of the
                        most popular smoothies of all time!"
                        ingredients={["Blueberry","Raspberry","Marionberry","Strawberry","Peanut Butter","Whey Protein (9g)"]} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Favorites;