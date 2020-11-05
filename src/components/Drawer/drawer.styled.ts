import styled from 'styled-components';

export const DrawerContainer = styled.div`
    width: ${(props) => props.theme.layout.drawerWidth};
    background-color: rgba(240,240,240, 1);
    height: 100%;
    position: fixed;
    left: ${(props => '-' + props.theme.layout.drawerWidth)};
    transition: 300ms;
    top: 0;
    padding: 10px;

    @media only screen and (min-width: 768px) {
        display: none;
     }
`