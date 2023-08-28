import { getColor } from "@/constant/getCss"
import { text } from "@/constant/text"
import { Darker_Grotesque, Satisfy } from "next/font/google"
import { Box, Typography } from "@mui/material"
import '@/app/animation.css'
import { motion } from 'framer-motion'

const darkerGrotesque = Darker_Grotesque({ subsets: ['latin'] })
const satisfy = Satisfy({ subsets: ['latin'], weight: '400' })

const commonStyle = {
    color: getColor('green', 'light')
}

const BannerText = () => {
    return (
        <Box sx={{ textAlign: 'center', color: 'white' }}>
            <motion.div
            delay={100}
            transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 1 }
              }}>
            <Typography variant="h1Bold" className={darkerGrotesque.className}>
                One life at a time, through compassion and <span style={commonStyle}>sustainable</span> initiatives
            </Typography>
            </motion.div>
            <Box sx={{
                maxWidth: '496px',
                margin: 'auto',
                paddingTop: '20px'
            }}>
                <Typography variant="h4" className={satisfy.className}>
                    Join Our NGO's Mission for a Brighter Future. Together, We Make a Lasting Impact
                </Typography>
            </Box>
        </Box>
    )
}

export default BannerText