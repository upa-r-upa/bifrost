import { useNavigate } from "react-router-dom";

export interface Props {
  className?: string;
}

export default function PreviousPageButton({ className }: Props) {
  const navigate = useNavigate();

  return (
    <button className={`btn ${className}`} onClick={() => navigate(-1)}>
      Go to previous
    </button>
  );
}
