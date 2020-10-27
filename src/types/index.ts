import { DefaultTheme } from 'styled-components';

export interface Theme {
    theme: DefaultTheme;
}

export interface Technology {
    id: number;
    tech_name: string;
    tech_image: {
        url: string;
    };
}

interface Translation {
    overview: string;
    description: string;
}

export interface Project {
    id: number;
    date: string;
    image: {
        url: string;
    }
    technologies: Technology[];
    title: string;
    translations: {
        [locale: string]: Translation;
    }
}

export interface ExperienceDescription {
    title: string;
    description: string;
}