

{/*============ stappenplan 2/Tegels ============*/}

// eslint-disable-next-line react/prop-types
function Title({img, imgAlt, title, text, text1}) {
    return (
        <section>
            <img src={img} alt={imgAlt}/>
            <h2>{title}</h2>
            <p>{text}</p>
            <p>{text1}</p>
        </section>

    )
}

export default Title;
