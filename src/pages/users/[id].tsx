import Link from "next/link";
import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <p>
        Hi from user {id}!! change the user ID in the URL to get a different
        value
      </p>
      <p>
        Click <Link href="/">here</Link> to go home
      </p>
    </div>
  );
};

export default User;
