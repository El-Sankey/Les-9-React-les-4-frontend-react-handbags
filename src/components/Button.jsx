import {createLogger} from "vite";

{/*============ stappenplan 2/Buttons ============*/}

export function Button() {
    return (
        <div>
            <button type="button">bestSeller</button>
            <button type="button">newCollection</button>
            <button type="button" disabled={true}>soldOut</button>
        </div>
    )
};

export default Buttons;