import {useI18next} from 'gatsby-plugin-react-i18next'

const useChangeLocale = () => {
    const {changeLanguage} = useI18next();

    return (lang: string) => changeLanguage(lang);
}

export default useChangeLocale;