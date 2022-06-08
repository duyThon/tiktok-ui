import { useState, forwardRef } from 'react'

const Image = forwardRef(({ ...props }, ref) => {
    const [fallback, setFallBack] = useState('')
    return <img ref={ref} {...props} />;
})

export default Image;