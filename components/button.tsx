export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button className={`${className || ""}`} onClick={onClick}>
      {children || "Button"}
    </button>
  );
}
