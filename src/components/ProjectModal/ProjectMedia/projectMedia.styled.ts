import styled from 'styled-components'
import {motion} from 'framer-motion'

export const ProjectMedia = styled(motion.div)<{fullscreen: boolean}>`
    width: 100%;
    max-height: 100%;
    height: ${(props) => props.fullscreen && '100%'};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    min-width: 350px;
    flex: 2;
    overflow: hidden;

    @media only screen and (max-width: 768px) {
        flex: none;
        height: min-content;
        min-height: 250px;
        min-width: 0;
    }
`
interface SlideIndicatorProps {
    active: boolean;
}

export const SlideIndicator = styled(motion.div)<SlideIndicatorProps>`
    height: 7px;
    width: 7px;
    margin: 5px;
    border-radius: 50%;
    background-color: ${(props) => props.active ? props.theme.colors.primary : props.theme.colors.lightGray };
`

export const IndicatorContainer = styled(motion.div)`
    position: absolute;
    bottom: 0;
    margin: 10px auto;
    display: flex;
`

export const ArrowIndicatorContainer = styled(motion.div)`
    width: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    object-fit: contain;
    z-index: 1002;
    opacity: 0;
    transition: 300ms;
    ${ProjectMedia}:hover & {
        opacity: 0.8;
    }
`

export const MediaContainer = styled(motion.div)`
    width: auto;
    height: 100%;
    position: relative;
    z-index: 1;
`

export const BackgroundBlur = styled(motion.div)`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(30px);
    opacity: 0.3;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
`

export const Media = styled(motion.img)`
    height: 100%;
    max-height: 580px;
    width: 100%;
    object-fit: contain;
    user-select: none;
`