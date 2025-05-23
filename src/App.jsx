import './App.css'


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
                <article>
                    <span>
                    </span>
                    <img src="assets/bag_1.png" alt="pink-bag"/>
                    <p>
                    </p>
                    <h4>
                    </h4>
                </article>
                <article>
                    <span>
                    </span>
                    <img src="assets/bag_2.png" alt="brown-bag"/>
                    <p>
                    </p>
                    <h4>
                    </h4>
                </article>
                <article>
                    <span>
                    </span>
                    <img src="assets/bag_3.png" alt="green-bag"/>
                    <p>
                    </p>
                    <h4>
                    </h4>
                </article>
                <article>
                    <span>
                    </span>
                    <img src="assets/bag_4.png" alt="orange-bag"/>
                    <p>
                    </p>
                    <h4>
                    </h4>
                </article>
            </main>
        {/*============ stappenplan 1/Tegels ============*/}
            <footer>
                <section>
                    <img src="assets/brand.png" alt="brand-img"/>
                    <h2>

                    </h2>
                    <p>

                    </p>
                </section>
                <section>
                    <img src="assets/brand.png" alt="brand-img"/>
                    <h2>

                    </h2>
                    <p>

                    </p>
                </section>
                <section>
                    <img src="assets/brand.png" alt="brand-img"/>
                    <h2>

                    </h2>
                    <p>

                    </p>
                </section>
                <section>
                    <img src="assets/brand.png" alt="brand-img"/>
                    <h2>

                    </h2>
                    <p>

                    </p>
                </section>
            </footer>
        </>

    )
}

export default App
