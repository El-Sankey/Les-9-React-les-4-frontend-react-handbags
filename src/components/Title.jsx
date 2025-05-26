

{/*============ stappenplan 2/Tegels ============*/}

export function Title(img, imgAlt, title, text) {
    return (
        <section>
            <img src={img} alt={imgAlt}/>
            <h2>{title}</h2>
            <p>{text}</p>
        </section>

    )
}

export default Title;
