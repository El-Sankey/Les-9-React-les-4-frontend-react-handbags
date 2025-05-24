

{/*============ stappenplan 2/Producten ============*/}

// eslint-disable-next-line react/prop-types
export function Product({label, img, imgAlt, nameOfBag, price}) {
    // let label=""
    // let img=""
    // let imgAlt=""
    // let nameOfBag=""
    // let price=""

    return (
        <article>
            <p>{label}</p>
            <img src={img} alt={imgAlt}/>
            <p>{nameOfBag}</p>
            <h2>€{price}-,</h2>
        </article>
    )
}

export default Product;
