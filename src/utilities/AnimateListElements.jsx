import React, {useState, useEffect} from 'react'
import {Zoom} from "react-reveal";

export default function AnimateListElements(props) {
    const [elementIndex, setElementIndex] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setElementIndex(prevState => (prevState + 1) % props.transitionElements.length)
        }, 3000)

    }, [elementIndex])

    return (
        <div>
            {props.transitionElements.map((el, idx) => {
                return <div key={idx}> {idx === elementIndex && <Zoom>{el}</Zoom>} </div>
            })}
        </div>
    )
}