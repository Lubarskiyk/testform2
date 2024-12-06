import { Button } from "../ui/button.tsx";
import { Link } from "react-router-dom";
interface BackButtonProps {
  label: string;
  href: string;
}
export default function AuthButton({ label, href }: BackButtonProps) {
  return (
    <Button variant="link" size="sm" asChild className="font-normal w-full">
      <Link to={href}>{label}</Link>
    </Button>
  );
}
