import React from 'react';
import styled from 'styled-components';

interface TypographyProps {
  variant:
    | 'span'
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'small'
    | 'caption';
  color?: 'primary' | 'darkText' | 'darkGray';
  style?: React.CSSProperties;
}

const StyledTypography = styled.div`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.colors.primary
      : props.color === 'darkText'
      ? props.theme.colors.darkText
      : props.color === 'darkGray'
      ? props.theme.colors.darkGray
      : props.theme.colors.darkText};
`;

export const Typography: React.FC<TypographyProps> = ({
  variant,
  color,
  style,
  children,
}) => {
  return (
    <StyledTypography as={variant} color={color} style={style}>
      {children}
    </StyledTypography>
  );
};

export const Layout = styled.div`
  max-width: ${(props) => props.theme.layout.maxWidth};
  padding: 0 20px;
  margin: 0 auto;
`;

interface RowProps {
  withMargin?: boolean;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin: ${(props) => (props.withMargin ? '10px 0' : '0')};
  width: 100%;
`;

export const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;
