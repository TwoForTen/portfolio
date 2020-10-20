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
    transform: scaleX(-1);
`