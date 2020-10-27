import styled from 'styled-components';

export const SectionTitle = styled.h5`
    text-transform: uppercase;
    margin: 10px 0;
    color: ${(props) => props.theme.colors.darkGray}; 
`

export const TitleWithSubtitle = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 5px;
`