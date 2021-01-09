import styled from 'styled-components';

export const BasicInfoContainer = styled.div`
    flex: 2;
    position: sticky;
    min-width: 300px;
    top: ${(props) => `calc(${props.theme.layout.appbarHeight} + 10px)`};
    align-self: flex-start;

    @media only screen and (max-width: 768px) {
        position: relative;
        top: 0;
        min-width: 100%;
    }
`

export const AvatarContainer = styled.div`
    height: 80px;
    width: 80px;
    margin-right: 10px;
    margin-bottom: 10px;
`

export const Avatar = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
`

export const SideInfoSection = styled.div`
    margin: 15px 0;
`