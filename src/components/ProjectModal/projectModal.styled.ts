import styled from 'styled-components';

export const Backdrop = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001;
`

export const ModalContainer = styled.div`
    width: 100%;
    max-width: ${(props) => props.theme.layout.maxWidth};
    margin: 20px;
    min-height: 300px;
    height: 60%;
    /* max-height: 60%; */
    border-radius: 5px;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
`

