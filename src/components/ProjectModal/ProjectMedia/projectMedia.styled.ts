import styled from 'styled-components'

export const ProjectMedia = styled.div`
    width: 100%;
    height: 100%;
    min-height: 560px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    min-width: 350px;
    flex: 2;
    overflow: hidden;
`
interface SlideIndicatorProps {
    active: boolean;
}

export const SlideIndicator = styled.div<SlideIndicatorProps>`
    height: 7px;
    width: 7px;
    margin: 5px;
    border-radius: 50%;
    background-color: ${(props) => props.active ? props.theme.colors.primary : props.theme.colors.lightGray };
`

export const IndicatorContainer = styled.div`
    position: absolute;
    bottom: 0;
    margin: 10px auto;
    display: flex;
`

export const ArrowIndicatorContainer = styled.div`
    width: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    object-fit: contain;
    z-index: 1002;
    opacity: 0;
    transition: 300ms;
    ${ProjectMedia}:hover & {
        opacity: 0.8;
    }
`

export const MediaContainer = styled.div`
    width: auto;
    height: 100%;
    position: relative;
    z-index: 1;
`

export const BackgroundBlur = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(30px);
    opacity: 0.3;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
`

export const Media = styled.img`
    height: 100%;
    max-height: 580px;
    width: 100%;
    object-fit: contain;
    user-select: none;
`