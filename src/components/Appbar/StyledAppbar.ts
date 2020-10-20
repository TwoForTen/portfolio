import styled from "styled-components"
import { Theme } from '../../types'

export const AppbarContainer = styled.div`
  width: 100%;
  height: 60px;
  /* background-color: #eee; */
  display: flex;
  padding: 0 60px;
  position: fixed;
  z-index: 100;
`

export const Navigation = styled.div`
  width: ${({theme}: Theme) => theme.layout.maxWidth};
  max-width: ${({theme}: Theme) => theme.layout.maxWidth};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  position: relative;
  overflow: visible !important;
  height: 100%;
`

export const NavButton = styled.p<{primary?: boolean}>`
  margin-right: 30px;
  color: ${(props) => props.primary ? props.theme.colors.primary : props.theme.colors.darkText};
`

export const ToggleDropdown = styled.button<{active: boolean}>`
  padding: 5px 15px;
  border-radius: 150px;
  min-width: 60px;
  display: flex;
  align-items: center;
  transition: 100ms;
  background-color: ${(props) => props.active ? '#fefefe' : 'transparent'};
  cursor: pointer;
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
  padding: 15px;
  min-width: 120px;
  cursor: pointer;
  &:hover{
    background-color: #efefef;
  }
`
