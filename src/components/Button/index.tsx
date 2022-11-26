import { Containerbutton } from "./style";

export interface IButtonProps {
  label: string;
  className: string;
  BackgroundColor?: string;
  linkTo: string;
}

export function Button({
  label,
  className,
  BackgroundColor,
  linkTo,
}: IButtonProps) {
  return (
    <>
      <Containerbutton
        style={{ background: BackgroundColor }}
        className={className}
        id={label}
        to={linkTo}
      >
        {label}
      </Containerbutton>
    </>
  );
}
