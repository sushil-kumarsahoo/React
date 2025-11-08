import React from "react";
import { useAppSelector } from "./store/hooks";

const Mycomponent = () => {
    const count  = useAppSelector((s) => s.counter);

    return <h1>My comp: {count}</h1>
}

export default Mycomponent;