import { type } from "os"
import GalleryMedia from "../common/GalleryMedia"
import { Box, Typography } from "@mui/material"

type props = {
    videosOne: String[],
    videosTwo: String[]
}
const VideoGallery = ({videosOne, videosTwo} : props) => {
    return (
        <Box >
        <Box sx={{ display:'flex', flexDirection:'column', height: '100vh',position:'relative'}}>
            <Typography variant="h1">Video Gallery</Typography>
            <Box sx={{ display:'flex', height:'40%', position:'absolute',left: "10%", top:'20%', gap:'15%'}}>
             {videosOne && videosOne.length && videosOne.map((video,index) => (
            <>
                <GalleryMedia url={video}/>
            </>
        ))}
        </Box>
        <Box sx={{ display:'flex', height:'40%', position:'absolute',left: "20%",top:'40%', gap:'15%' }}>
        {videosTwo && videosTwo.length && videosTwo.map((video,index) => (
            <>
                <GalleryMedia url={video}/>
            </>
        ))}
        </Box>
        </Box>
        </Box>
    )
}

export default VideoGallery