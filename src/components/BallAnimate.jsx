import React from 'react'
import { animate, motion } from 'framer-motion'

export default function BallAnimate() {
    return (
        <motion.div className='size-20 mt-10 ml-10 bg-black rounded-full' initial={{ opacity: 0, x: 0 }} animate={{ opacity: 1, x: [100, 0], y: [100, 500] }} transition={{ duration: 3 }}> </motion.div>
    )
}
