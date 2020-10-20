import React from "react";
import styled from "styled-components";

// export const Button = styled.button`

// `

interface TypographyProps {
  variant: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "primary";
  style?: React.CSSProperties;
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  color,
  style,
  children,
}) => {
  const StyledTypography = styled(variant)`
    color: ${props =>
      color === "primary"
        ? props.theme.colors.primary
        : props.theme.colors.darkText};
  `;

  return <StyledTypography style={style}>{children}</StyledTypography>;
};
