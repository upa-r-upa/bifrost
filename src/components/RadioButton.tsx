import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;

  className?: string;
}

export default function RadioButton({
  label,
  disabled,
  children,
  className,
  checked,
  ...props
}: Props) {
  return (
    <label className={`flex flex-col w-max ${className}`}>
      <div className="">
        <span>&#91;</span>
        <input
          type="radio"
          checked={checked}
          disabled={disabled}
          className="appearance-none before:content-['-'] checked:before:content-['>>Selected'] checked:text-bright-green"
          {...props}
        />
        <span>&#93;</span>
      </div>

      <div
        className={`border-2 border-bright-black p-1 ${
          checked ? "border-bright-white" : ""
        }`}
      >
        <p>{label}</p>
        {children}
      </div>
    </label>
  );
}
