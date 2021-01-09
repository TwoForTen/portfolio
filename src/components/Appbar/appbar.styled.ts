import styled from "styled-components"
import {motion} from 'framer-motion'
import { Theme } from '../../types'

export const AppbarContainer = styled(motion.header)`
  width: 100%;
  height: ${(props) => props.theme.layout.appbarHeight};
  display: flex;
  padding: 0 20px;
  position: fixed;
  z-index: 100;
`

export const DesktopNavigation = styled.nav`
  width: ${({theme}: Theme) => theme.layout.maxWidth};
  max-width: ${({theme}: Theme) => theme.layout.maxWidth};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  position: relative;
  overflow: visible !important;
  height: 100%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const MobileNavigation = styled.div`
  width: ${({theme}: Theme) => theme.layout.maxWidth};
  max-width: ${({theme}: Theme) => theme.layout.maxWidth};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  position: relative;
  overflow: visible !important;
  height: 100%;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

export const NavButton = styled.a<{primary?: boolean}>`
  margin-right: 30px;
  color: ${(props) => props.primary ? props.theme.colors.primary : props.theme.colors.darkText};
  text-decoration: none;
`

export const ToggleDropdown = styled.button<{active: boolean}>`
  padding: 5px 15px;
  border-radius: 150px;
  min-width: 60px;
  display: flex;
  align-items: center;
  transition: 100ms;
  background-color: ${(props) => props.active ? '#fefefe' : 'transparent'};
  &:hover {
    background-color: #fefefe;
    box-shadow: 1px 0px 5px rgba(0,0,0,0.04);
  }
`

export const Flag = styled.img`
  height: 20px;
  width: auto;
  margin-left: 10px;
`

export const LangDropdown = styled.div`
  border-radius: 5px;
  box-shadow: 4px 0px 15px rgba(0,0,0,0.18);
  position: absolute;
  right: 0;
  top: 50px;
  display: flex;
  flex-direction: column;
  z-index: 100;
  background-color: #fefefe;
  overflow: hidden;
`

export const LangButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  min-width: 120px;
  cursor: pointer;
  &:hover{
    background-color: #efefef;
  }
`
