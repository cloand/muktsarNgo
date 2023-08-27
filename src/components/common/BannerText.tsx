import { getColor } from "@/constant/getCss"
import { text } from "@/constant/text"
import { Darker_Grotesque, Satisfy } from "next/font/google"
import { Box, Typography } from "@mui/material"
import '@/app/animation.css'

const darkerGrotesque = Darker_Grotesque({ subsets: ['latin'] })
const satisfy = Satisfy({ subsets: ['latin'], weight: '400' })

const commonStyle = {
    color: getColor('green', 'light')
}

const BannerText = () => {
    return (
        <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography variant="h1Bold" className={darkerGrotesque.className}>
                One life at a time, through compassion and <span style={commonStyle}>sustainable</span> initiatives
            </Typography>
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