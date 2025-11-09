export interface AboutType {
    year: string;
    text: string;
}

export interface WorkType {
    image: string;
    date: string;
    title: string;
    description: string;
}

export enum SelectedPage {
    Home = "home",
    About = "about",
    Work = "work",
}