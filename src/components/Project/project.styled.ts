import styled from 'styled-components';
import {motion} from 'framer-motion'

export const ProjectContainer = styled(motion.div)`
    max-width: 591px;
    min-width: 300px;
    width: fit-content;
    height: fit-content;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 2px 4px 15px rgba(0,0,0,0.1);
    margin: 20px 0px;
    cursor: pointer;
    transition: 300ms;
    &:hover {
        transform: translateY(-10px);
    }
`

export const ImageContainer = styled.div`
    height: auto;
    width: 100%;
    box-sizing: cover;
    position: relative;
`
export const Image = styled.img`
    height: auto;
    width: 100%;
    border-radius: 5px;
`