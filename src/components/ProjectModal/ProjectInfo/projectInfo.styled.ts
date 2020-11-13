import styled from 'styled-components'
import {motion} from 'framer-motion'

export const ProjectInfoContainer = styled(motion.div)<{fullscreen: boolean}>`
    max-height: 100%;
    width: 100%;
    height: ${(props) => props.fullscreen && '100%'};
    background-color: #fff;
    flex: 1;
    padding: 20px;
    overflow-y: scroll;
    height: ${(props) => props.fullscreen && '100%'};

    @media only screen and (max-width: 768px) {
        flex: none;
    }
`

export const TitleRow = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`