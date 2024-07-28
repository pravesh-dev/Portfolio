import LocomotiveScroll from "locomotive-scroll";
// import './locomotive-scroll.css';
import { useEffect } from "react";

export default function useLocoscroll(start){
    useEffect(()=>{
        if(!start) return;

        const scrollEl = document.querySelector('#main-container');

        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: 'is-revel',
        }, [start])
    })
}