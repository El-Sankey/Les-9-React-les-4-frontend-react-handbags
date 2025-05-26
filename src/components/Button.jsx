

{/*============ stappenplan 2/Buttons ============*/}

export function Button(type, onClick, text, disabled) {
    return (
        <button
            type="button" onClick={()=>console.log(text)}
            disabled={disabled}>{text}
        </button>
    )
};

export default Buttons;
