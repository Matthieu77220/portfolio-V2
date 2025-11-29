import { motion, useScroll } from "framer-motion"

export default function Scroll() {
    const { scrollYProgress } = useScroll()

    return (
        <>
            <motion.div
                id="scroll-indicator"
                className="
                    fixed top-0 left-0 right-0 
                    h-2.5 
                    bg-[#FFF07C] 
                    z-9999
                    origin-left
                "
                style={{ scaleX: scrollYProgress }}
            />
        </>
    )
}