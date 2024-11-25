interface Props {
  title: string;

  children: React.ReactNode;

  className?: string;
}

export default function TerminalContainer({
  title,
  children,
  className,
}: Props) {
  return (
    <div
      className={`border-2 p-2 border-foreground relative mt-4 ${className}`}
    >
      <p className="absolute -top-4 text-md bg-background px-0.5 text-bright-cyan">
        {title}
      </p>

      {children}
    </div>
  );
}
