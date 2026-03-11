import InstructorCard from "./InstructorCard";
import MemberCard from "./MemberCard";

export function CardDashBoard({ user }) {
  if (!user) return <p>Loading...</p>; // safety

  return (
    <div>
      {user.role === 'admin' && <InstructorCard />}
      {user.role === 'default' && <MemberCard />}
    </div>
  );
}