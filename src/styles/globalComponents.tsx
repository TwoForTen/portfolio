import React from "react";
import styled from "styled-components";

interface TypographyProps {
  variant: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "primary";
  style?: React.CSSProperties;
}

const StyledTypography = styled.div`
  color: ${props =>
    props.color === "primary"
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
