import React from 'react'
const Color = ({colors,setColors}) => {
    const handlcolorClick = (colr)=>{
        setColors(colr);
    }
    return (
        <>
            <div className='d-flex'><strong>colors:</strong>
                {
                    colors.map((colr) => {
                        return (
                            <button className={`color-content d-inline-block mx-1 p-2 border`} style={{ background: `${colr}`, borderRadius: `100%` }} onClick={() => {handlcolorClick(colr) }}>
                            </button>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Color
