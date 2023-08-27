import { Box, CardMedia } from "@mui/material"

const BannerMedia = () => {
    return (
        <Box sx={{height:'100vh'}}>
            <CardMedia 
                sx={{
                    height:'100vh',
                    objectFit:'cover',
                    "& .MuiCardMedia-img":{
                        height:'100%'
                    }
                }}
                component='video'
                image={"/mp4/banner.mp4"}
                autoPlay
                muted
                loop
                // controls
            />
        </Box>
    )
} 

export default BannerMedia