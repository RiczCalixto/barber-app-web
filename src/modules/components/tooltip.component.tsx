import * as React from 'react';
import { TooltipContainer } from './styled-components';

interface TooltipProps {
  title: string;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  className = '',
}) => {
  return (
    <TooltipContainer className={className}>
      {children}
      <span>{title}</span>
    </TooltipContainer>
  );
};
