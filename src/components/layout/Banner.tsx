import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"
import BannerText from "../common/BannerText"
import BannerMedia from "../common/BannerMedia"
import { getColor } from "@/constant/getCss"
import { type } from "os"
import { Satisfy } from "next/font/google"
import { motion } from 'framer-motion'

const satisfy = Satisfy({ subsets: ['latin'], weight: '400' })

type buttonStyle = {
    color : String,
    backgroundColor : String
}

const containedButton: buttonStyle = {
    color: 'white',
    backgroundColor : getColor('span', 'light'),
    border: 0,
}

const outlinedButton: buttonStyle = {
    color: getColor('span', 'light'),
    backgroundColor: 'transparent',
    borderColor: getColor('hover', 'light')
}

const buttonHoverEffect = {
    position: 'relative',
    borderRadius: '15px',
    padding: "1.5% 4%",
    zIndex: 1,
    '&:before': {
        content: "''",
        position: 'absolute',
        width: '0',
        height: '100%',
        bottom: '0',
        left: '0',
        zIndex: '0',
        backgroundColor: getColor('hover', 'light'),
        visibility: 'hidden',
        transition: 'all 0.3s ease-in-out',
        borderRadius: '15px',
    },
    '&:hover': {
        backgroundColor: 'transparent',
        borderRadius: '15px',
        border: 0,
    },
    '&:hover:before': {
        visibility: 'visible',
        zIndex: -1,
        width: '100%',
        borderRadius: '15px',
    },
}

const Banner = () => {
    return (
        <motion.div>
            <Box sx={{ position: 'relative' }}>
                <Box
                    sx={{
                        position: 'absolute',
                        left: '10%',
                        width: '80%',
                        height: '100%'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                            gap: '5%'
                        }}
                    >
                        <BannerText />
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1,
                                gap: '10px',
                                width: '100%'
                            }}
                        >
                            <motion.a whileFocus={{ scale: 1.2 }}>
                            {/* <Button
                                variant='contained'
                                className={satisfy.className}
                                sx={{
                                    backgroundColor:getColor('green','light'),
                                    color: getColor('darkGrey','light'),
                                    zIndex: 1,
                                    padding: '18px 36px',
                                    borderRadius: '41.438px',
                                    boxShadow: '0px 8.057401657104492px 20.719032287597656px 0px rgba(7, 39, 25, 0.40)'
                                }}
                            > */}
                                <Typography variant='h6Bold'>Donate!</Typography>
                            {/* </Button> */}
                            </motion.a>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <BannerMedia />
                </Box>
            </Box>
        </motion.div>
    )
}

export default Banner