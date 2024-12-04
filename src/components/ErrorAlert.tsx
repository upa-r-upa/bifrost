interface Props {
  title: React.ReactNode;

  errorMessage?: string;

  classNames?: string;
}

export default function ErrorAlert({ title, errorMessage, classNames }: Props) {
  return (
    <div className={`p-1 border-bright-red border-2 ${classNames}`}>
      <p className="text-bright-red font-semibold">[Error] {title}</p>
      {errorMessage && <p>: {errorMessage}</p>}
    </div>
  );
}
