import './App.css'
import Product from "react";
import Title from "react"
import bag_1 from "./assets/bag_1.png"
import bag_2 from "./assets/bag_2.png"
import bag_3 from "./assets/bag_3.png"
import bag_4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import our_story from "./assets/our_story.png"
import title from "./components/Title.jsx";


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
                <Product label="best seller" img={bag_1} alt="bag-img" nameOfBag="the handy bag" price="400"/>
                <Product label="best seller" img={bag_2} alt="bag-img" nameOfBag="the stylish bag" price="200"/>
                <Product label="new collection" img={bag_3} alt="bag-img" nameOfBag="the simple bag" price="300"/>
                <Product label="new collection" img={bag_4} alt="bag-img" nameOfBag="the trandy bag" price="150"/>
                {/*<article>*/}
                {/*    <span>bestseller</span>*/}
                {/*    <img src="src/assets/bag_1.png" alt="pink-bag"/>*/}
                {/*    <p>*/}
                {/*    </p>*/}
                {/*    <h4>*/}
                {/*    </h4>*/}
                {/*</article>*/}
                {/*<article>*/}
                {/*    <span>bestseller</span>*/}
                {/*    <img src="src/assets/bag_2.png" alt="brown-bag"/>*/}
                {/*    <p>*/}
                {/*    </p>*/}
                {/*    <h4>*/}
                {/*    </h4>*/}
                {/*</article>*/}
                {/*<article>*/}
                {/*    <span>bestseller</span>*/}
                {/*    <img src="src/assets/bag_3.png" alt="green-bag"/>*/}
                {/*    <p>*/}
                {/*    </p>*/}
                {/*    <h4>*/}
                {/*    </h4>*/}
                {/*</article>*/}
                {/*<article>*/}
                {/*    <span>bestseller</span>*/}
                {/*    <img src="src/assets/bag_4.png" alt="orange-bag"/>*/}
                {/*    <p>*/}
                {/*    </p>*/}
                {/*    <h4>*/}
                {/*    </h4>*/}
                {/*</article>*/}
            </main>
        {/*============ stappenplan 1/Tegels ============*/}
            <footer>
                <Title title="THE BRAND">
                    <p>Available in countless styles, from totes and satchels to clutches and
                    crossbody bags, each type serves different needs and occasions.
                    </p>
                <Title/>
                <Title img={brand}/>
                <Title img={our_story}/>
                <Title />

                {/*<section>*/}
                {/*    <h2>THE BRAND</h2>*/}
                {/*    <p>Available in countless styles, from totes and satchels to clutches and crossbody bags, each type*/}
                {/*        serves different needs and occasions.</p>*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <img src="src/assets/brand.png" alt="brand-img"/>*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <img src="src/assets/our_story.png" alt="brand-img"/>*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <h2>OUR STORY</h2>*/}
                {/*    <p>Materials used range from luxurious leather and suede to eco-friendly fabrics like canvas and*/}
                {/*        recycled plastics. Designer brands often set trends with iconic shapes and high-quality*/}
                {/*        craftsmanship, making certain handbags coveted collector’s items.</p>*/}
                {/*</section>*/}
            </footer>
        </>
    )
}

export default App;
