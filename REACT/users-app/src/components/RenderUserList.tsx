import { RenderUserCard } from "./RenderUserCard";

export const RenderUserList = ({ users }: any) => {
  return (
    <>
      {users.map((user: any) => (
        <RenderUserCard key={user.id} user={user} />
      ))}
    </>
  );
};
