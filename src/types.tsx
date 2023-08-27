import { type } from "os"

export type themeMode = 'dark' | 'light'

type bannerText = {
    heading: string,
    subHeading: string
}

type registerText = {
    about: string,
    abotTwo: string,
    aboutThree: string,
    aboutFour: string,
    aboutFive: string,
    desc: string,
    descOne: string,
    descTwo: string,
}

export interface textConfig {
    society: string,
    location: String,
    goal: String[],
    banner: bannerText,
    registerText: registerText
}
