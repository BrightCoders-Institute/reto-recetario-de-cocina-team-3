import pizzaImg from '../images/pizza_casera.jpg';
import cookie from '../images/cookie.jpg';
import cupcakes from '../images/cupcakes.jpg';
import meatball from '../images/meatball.jpg';

const data = {
	trendingMenu: [
		[pizzaImg,`Peperonin pizza${"\n"}pocket`],
		[cookie, `Chocolate chip`],
		[cupcakes, `Pancake${"\n"}cups`]
	],
	recentMenu:[
		[meatball,"Meatball sub bake"]
	],
	categories: ["TRENDING", "RECENT"],
};

export default data;
