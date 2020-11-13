import styled from 'styled-components';
import {motion} from 'framer-motion'

export const ModalContainer = styled(motion.div)`
    width: 100%;
    max-width: ${(props) => props.theme.layout.maxWidth};
    margin: 20px;
    min-height: 300px;
    max-height: 70%;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    position: relative;

    @media only screen and (max-width: 768px) {
        overflow: auto;
        flex-wrap: wrap;
    }
`

export const FullscreenContainer = styled(motion.div)`
    display: flex;
    height: 100%;

    @media only screen and (max-width: 768px) {
        display: block;
    }
`

