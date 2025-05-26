

{/*============ stappenplan 2/Producten ============*/}

// eslint-disable-next-line react/prop-types
function Product({label, img, imgAlt, nameOfBag, price}) {

    return (
        <article>
            <span>{label}</span>
            <img src={img} alt={imgAlt}/>
            <p>{nameOfBag}</p>
            <h4>€{price}-,</h4>
        </article>
    )
}

export default Product;
