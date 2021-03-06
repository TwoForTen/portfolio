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
    media: {
        url: string;
    }[]
    technologies: Technology[];
    title: string;
    translations: {
        [locale: string]: Translation;
    }
}

export interface ProjectProp {
    project: Project;
}

export interface Experience {
    id: string;
    company_name: string;
    date_from: string;
    date_to: string;
    obligations: ExperienceDescription[];
    image: {
        url: string;
    };
}

export interface ExperienceDescription {
    id: string;
    title: string;
    translations: {
        [locale: string]: {
            description: string;
        }
    }
}