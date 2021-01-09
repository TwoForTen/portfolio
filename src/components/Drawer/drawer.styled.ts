import styled from 'styled-components';

export const DrawerContainer = styled.div`
    width: ${(props) => props.theme.layout.drawerWidth};
    background-color: rgba(240,240,240, 1);
    height: 100%;
    position: fixed;
    left: ${(props => '-' + props.theme.layout.drawerWidth)};
    transition: 300ms;
    top: 0;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    padding-top: ${(props) => props.theme.layout.appbarHeight};

    @media only screen and (min-width: 768px) {
        display: none;
     }
`

export const NavButton = styled.a<{primary?: boolean}>`
  color: ${(props) => props.primary ? props.theme.colors.primary : props.theme.colors.darkText};
  text-decoration: none;
  margin-bottom: 20px;
`

export const Flags = styled.div`
    display: flex;
    justify-content: space-around;
`

export const Flag = styled.img`
    height: 22px;
    width: auto;
    cursor: pointer;
`