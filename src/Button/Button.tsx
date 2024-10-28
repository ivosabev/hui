import React from 'react';

export interface ButtonProps {
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link' | 'icon';

  /** How large should the button be? */
  size?: 'xs' | 'sm' | 'md' | 'default' | 'lg' | 'xl';
  /** Button contents */
  children: React.ReactNode;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */

// export const Button = ({
//   variant = 'default',
//   size = 'default',
//   children,
//   ...props
// }: ButtonProps) => {

export function Button(props: ButtonProps) {
  const {variant = 'default', size = 'default', children, ...rest} = props;
  return (
    <button type="button" {...props}>
      {children}
    </button >
  );
};
