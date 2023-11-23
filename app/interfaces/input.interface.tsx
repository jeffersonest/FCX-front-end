export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: {
    message?: string;
  };
}