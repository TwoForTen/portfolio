import styled from 'styled-components';
import {motion} from 'framer-motion';

export const CardContainer = styled(motion.div)`
    margin: 20px 0;
`

export const ImageContainer = styled.div`
    width: 60px;
    height: 60px;
    margin-right: 10px;
    background-color: ${(props) => props.theme.colors.lightGray};
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

export const ObligationCard = styled.div`
    padding: 20px;
    margin-top: 10px;
    border-left: 1px solid ${(props) => props.theme.colors.lightGray};
`