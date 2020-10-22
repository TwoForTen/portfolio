import { DefaultTheme } from 'styled-components';

export interface Theme {
    theme: DefaultTheme;
}

export interface Technology {
    tech_name: string;
    tech_image: {
        url: string;
    };
}

export interface Project {
    date: string;
    description: string;
    image: {
        url: string;
    }
    technologies: Technology[];
    title: string;
}