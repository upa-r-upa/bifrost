interface Props {
  title: React.ReactNode;

  children: React.ReactNode;

  className?: string;
}

export default function RadioGroup({ title, children, className }: Props) {
  return (
    <fieldset
      className={`p-2 border-bright-black border-2 flex flex-col gap-2 ${className}`}
    >
      <legend className="">{title}</legend>

      {children}
    </fieldset>
  );
}
