import React from 'react';
import styled from 'styled-components';

interface TypographyProps {
  variant: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: 'primary';
  style?: React.CSSProperties;
}

const StyledTypography = styled.div`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.colors.primary
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

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0;
`;
