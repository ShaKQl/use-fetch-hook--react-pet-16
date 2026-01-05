import { useRef, useState } from "react";
import '../styles/use-outside-click.css'
import UseOutsideClick from "./outside-click-hook";

export default function UseOnclickOutsideTest() {
    const [showContent, setShowContent] = useState(false)
    const ref = useRef()
    UseOutsideClick(ref,()=> setShowContent(false))
    return (
        <>
            <div className="main-box">
                {
                    showContent
                    ?<div ref={ref}>
                        <h1>Outside click Hook</h1>
                        <p>Please click outside to close the tab. The close won't trigger inside the box</p>
                    </div>
                    : <button onClick={()=>setShowContent(true)}>Show Content</button>
                }
            </div>
        </>
    )
}







