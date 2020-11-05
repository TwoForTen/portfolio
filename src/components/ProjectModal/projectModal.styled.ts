import styled from 'styled-components';

export const ModalContainer = styled.div`
    width: 100%;
    max-width: ${(props) => props.theme.layout.maxWidth};
    margin: 20px;
    min-height: 300px;
    max-height: 60%;
    border-radius: 5px;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    position: relative;
`

