function Buttons() {
    return (
        // ========== opdr.1 ==========
        <div>
            <button type="button" onClick={() => console.log("to the collection")}>to the collection</button>
            <button type="button" onClick={() => console.log("shop all tags")}>shop all bags</button>
            <button type="button" disabled={true} onClick={() => console.log("pre-order")}>pre-orders</button>
        </div>
    )
}

export function button() {
    return
}

export default Buttons;