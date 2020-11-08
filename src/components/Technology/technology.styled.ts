import styled from 'styled-components';
import {motion} from 'framer-motion'

export const TechnologyContainer = styled(motion.div)`
    padding: 5px 10px;
    background-color: ${(props) => props.theme.colors.lightGray};
    border-radius: 50px;
    margin: 5px 5px 0px 0px;
`

export const Image = styled.img`
    height: 18px;
    width: 18px;
    margin-right: 5px;
`