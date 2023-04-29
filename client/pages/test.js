import { useState, useEffect } from "react";

const Test = () => {
    const [scrollY, setScrollY] = useState(0);

    function logit() {
        setScrollY(window.pageYOffset);
        console.log(new Date().getTime());
       
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });
    
    return (
        <div style={{ textAlign: `center`, height: `5000px` }}>
            <div style={{ position: `fixed`, top: `50%`, left: `40%` }}>Scroll position: {scrollY}px</div>
        </div>
    );
};

export default Test;