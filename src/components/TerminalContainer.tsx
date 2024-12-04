type TitleColor = "highlight" | "basic" | "sub";

interface Props {
  title: string;

  children: React.ReactNode;

  type?: TitleColor;
  bordered?: boolean;

  className?: string;
}

export default function TerminalContainer({
  title,
  children,
  className,
  type = "basic",
  bordered = true,
}: Props) {
  const getColor = (type: TitleColor) => {
    if (type === "highlight") return "text-bright-cyan";
    else if (type === "basic") return "text-bright-blue";
    else return "text-bright-white";
  };

  const getBorder = (bordered: boolean) => {
    if (bordered) return "border-foreground border-2";
    else return "";
  };

  return (
    <div className={`p-3 relative mt-6 ${className} ${getBorder(bordered)}`}>
      <p
        className={`absolute -top-5 text-2xl bg-background px-1 ${getColor(
          type
        )}`}
      >
        {title}
      </p>

      {children}
    </div>
  );
}
