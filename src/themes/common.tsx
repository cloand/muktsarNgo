import { createTheme } from "@mui/material";

// some types are injected on runtime from SSR

export const theme = createTheme({
    typography:{
        h1:{
            fontSize:'5.5rem',
        },
        h1Bold: {
            fontSize:'65.18px',
            lineHeight: '76.66px',
            fontWeight: 900
        },
        h4: {
            fontSize:'24px',
            lineHeight:'32.4px',
            fontWeight: 400 
        },
        h5:{
            fontSize: '20px',
            fontWeight: 700,
            lineHeight: '120%'
        },
        h6: {
          fontSiz:'1rem'  
        },
        h6Bold: {
            fontSize:'1rem',
            fontWeight:800
        }
    }
})
