import './App.css'
import './components/Button.css'
import './components/Product.css'
import './components/Title.css'

import Product from "./components/Product.jsx"
import Title from "./components/Title.jsx"
import bag_1 from "./assets/bag_1.png"
import bag_2 from "./assets/bag_2.png"
import bag_3 from "./assets/bag_3.png"
import bag_4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import our_story from "./assets/our_story.png"



function App() {

	return (
		<>
			<header>
				<nav>
					<h1>Handbags & Purses</h1>
					{/*============ stappenplan 1/Buttons ============*/}
					<button type="button" onClick={() => console.log("to the collection")}>to the collection</button>
					<button type="button" onClick={() => console.log("shop all tags")}>shop all bags</button>
					<button type="button" disabled={true} onClick={() => console.log("pre-order")}>pre-orders</button>
				</nav>
			</header>
			{/*============ stappenplan 1/Producten ============*/}
			<main>
				<Product label="Best seller" img={bag_1} alt="bag-img" nameOfBag="the handy bag" price="400"/>
				<Product label="Best seller" img={bag_2} alt="bag-img" nameOfBag="the stylish bag" price="200"/>
				<Product label="New collection" img={bag_3} alt="bag-img" nameOfBag="the simple bag" price="300"/>
				<Product label="New collection" img={bag_4} alt="bag-img" nameOfBag="the trandy bag" price="150"/>
			</main>
			{/*============ stappenplan 1/Tegels ============*/}
			<footer>
				<Title title="THE BRAND" text="Handbags have evolved from mere functional items into essential fashion statements that reflect personal style and status." text1="Available in countless styles, from totes and satchels to clutches and crossbody bags, each type serves different needs and occasions."
				/>
				<Title img={brand}/>
				<Title img={our_story}/>
				<Title title="OUR STORY" text="Materials used range from luxurious leather and suede to eco-friendly fabrics like canvas and recycled plastics. Designer brands often set trends with iconic shapes and high-quality craftsmanship, making certain handbags coveted collector’s items."
				/>
			</footer>
		</>
	)
}
export default App;