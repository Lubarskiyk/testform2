import { Card, CardContent, CardFooter, CardHeader } from "../ui/card.tsx";
import { ReactNode } from "react";
import AuthHeader from "./authHeader.tsx";
import AuthButton from "./authButton.tsx";

interface CardWrapperProps {
  label: string;
  title: string;
  buttonHref: string;
  buttonTitle: string;
  children: ReactNode;
}

const CardWrapper = ({
  label,
  title,
  buttonHref,
  buttonTitle,
  children,
}: CardWrapperProps) => {
  return (
    <Card className="xl:w-1/3 md:w-1/2 shadow-md">
      <CardHeader>
        <AuthHeader title={title} label={label} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <AuthButton label={buttonTitle} href={buttonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
