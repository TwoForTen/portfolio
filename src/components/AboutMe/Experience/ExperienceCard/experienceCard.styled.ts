import styled from 'styled-components';

export const CardContainer = styled.div`
    margin: 20px 0;
`

export const ImageContainer = styled.div`
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-right: 10px;
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
`

export const ObligationCard = styled.div`
    padding: 20px;
    margin-top: 10px;
    border-left: 1px solid ${(props) => props.theme.colors.lightGray};
`