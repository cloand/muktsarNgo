import { CardMedia } from "@mui/material"
import { type } from "os"

type prop = {
    url : string
}

const GalleryMedia = ({url} : prop ) => {
    return (<>
        <CardMedia
            sx={{
                border: '2px solid black',
                width:'auto'
            }}
            component='video'
            image={url}
            autoPlay
            muted
            loop
        // controls
        />
    </>)
}

export default GalleryMedia