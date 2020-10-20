import styled from 'styled-components';
import heroimg from '../../assets/hero.jpg';

export const HeroContainer = styled.div`
    height: 85vh;
    width: 100%;
    overflow: hidden;
    background-image: ${`url(${heroimg})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15vw;
`

export const CallToAction = styled.button`
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    max-width: 10rem;
    margin-top: 3rem;
    background-color: ${(props) => props.theme.colors.primary};
`