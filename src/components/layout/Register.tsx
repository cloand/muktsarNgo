import { getColor } from "@/constant/getCss"
import { text } from "@/constant/text"
import { Box, Typography } from "@mui/material"
import Image from "next/image"

const spanStyle = {
    color: getColor('green','light')
}

const Register = () => {
    return (<>
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '81%',
                margin: 'auto',
                padding: '50px 0',
                height:'100vh'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    width:'40%'
                }}
            >
                <Typography variant="h6">
                    <span style={spanStyle}> 
                        {text.society }&nbsp;
                    </span>
                    {text.registerText.about}
                    <span style={spanStyle}> 
                        {text.location }&nbsp;
                    </span>
                    {text.registerText.aboutTwo}
                    <span style={spanStyle}> 
                        {text.goal[0]}&nbsp;
                    </span>
                    {text.registerText.aboutThree}
                    <span style={spanStyle}> 
                        &nbsp;{text.goal[1]}&nbsp;
                    </span>
                    {text.registerText.aboutFour}
                    <span style={spanStyle}> 
                        {text.goal[2]}&nbsp;
                    </span>
                    {text.registerText.aboutFive}
                </Typography> 
                <br/>
                <Typography variant="h6">
                    {text.registerText.desc}
                    <span style={spanStyle}> 
                    &nbsp;{text.goal[3]}&nbsp;
                    </span>
                    {text.registerText.descOne}
                    <span style={spanStyle}> 
                        {text.goal[4]}&nbsp;
                    </span>
                    {text.registerText.descTwo}
                    <span style={spanStyle}> 
                    &nbsp;{text.goal[5]}&nbsp;
                    </span>
                </Typography> 
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection:'column',
                    alignItems: 'space-evenly',
                    justifyContent: 'center',
                    width:'40%'
                }}
            >
                <img src="/png/registration.png" width="100%" height="auto"/>
                {/* <Image 
                    src={ '/png/registration.png' } 
                    alt='Register certificate' 
                    width={100} 
                    height={100}
                    quality={100}
                /> */}
            </Box>
        </Box>
    </>)
}

export default Register