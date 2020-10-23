import styled from 'styled-components';

export const ProjectContainer = styled.div`
    max-width: 500px;
    min-width: 300px;
    width: fit-content;
    height: fit-content;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 2px 4px 15px rgba(0,0,0,0.1);
    margin: 20px 0px;
    cursor: pointer;
    flex: 1;
`

export const ImageContainer = styled.div`
    height: auto;
    width: 100%;
    box-sizing: cover;
    position: relative;
`
export const Image = styled.img`
    height: auto;
    width: 100%;
    border-radius: 5px;
`