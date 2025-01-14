import React, { useState } from 'react'

import CircleLoader
 from "react-spinners/CircleLoader";

function Loader() {

    const override = {
        display: "block",
        margin: "200px auto",   
        borderColor: "blue",
    };

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#0071c2");
    return (
        <>
            <div className="sweet-loading " >



                
                <CircleLoader
                    color={color}
                    loading={loading}
                    cssOverride={override}
                    size={80}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </>)
}
export default Loader