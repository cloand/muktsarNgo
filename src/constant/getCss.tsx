import { themeMode } from "@/types"
import { Key } from "react"

const light : object = {
    span: '#FF0090',
    heading: '#181E4B',
    hover:'#0997D9',
    green:'#01F28D',
    darkGrey: '#0B1926'
}

export const getColor = (color : keyof object ,mode : themeMode) => mode === 'light' ? light[color] : light[color]