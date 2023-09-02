'use client'

import { Toaster } from "react-hot-toast";


// we sometimes have to put a provider or wrapper with a client parent (that's why we have use client above) because Next13 isn't able to use it.

const ToasterProvider = () => {
    return (
        <Toaster />
    );
}

export default ToasterProvider;