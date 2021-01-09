import styled, {keyframes} from 'styled-components';
import heroimg from '../../../static/hero.jpg';
import { motion } from 'framer-motion'

export const HeroContainer = styled.div`
    /* height: 60vh; */
    max-height: 100vh;
    width: 100vw;
    overflow: hidden;
    /* background-image: ${`url(${heroimg})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
    /* background: #f7fdff; */
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 60px 20px;
`

export const HeroArt = styled.img`
    height: 400px;
    width: auto;
    margin: 0px 40px;
    @media screen and (max-width: 768px) {
        margin: 0;
        height: 300px;
    }
`

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-left: 15vw; */
    position: relative;
    margin: 0px 40px;

    @media screen and (max-width: 768px) {
        margin: 0;
    }
`

export const StyleDots = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    right: -45px;
    top: -1.4rem;
    max-width: 60px;
`

export const Dot = styled(motion.div)`
    height: 5px;
    width: 5px;
    background-color: ${(props) => props.theme.colors.darkText};
    border-radius: 50%;
    margin: 5px;   
`

export const CallToAction = styled(motion.div)`
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    max-width: 10rem;
    margin-top: 3rem;
    background-color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
`

const rotation = keyframes`
    from {
        transform: rotate(0deg)
    } to {
        transform: rotate(360deg)
    }
`

export const ReactAnimation = styled(motion.img)`
    position: absolute;
    left: -10px;
    margin-top: 10px;
    animation: ${rotation} 2s infinite linear;
`