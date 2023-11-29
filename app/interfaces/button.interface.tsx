export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  justify?: string;
  onlyIcon?: boolean;
  disabled?: boolean;
}