import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar.tsx";

export default function AvatarHeader() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
