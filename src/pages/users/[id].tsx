import { Button, Container, Text, Title } from "@mantine/core";

import Link from "next/link";
import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("router", router.query)
  return (
    <Container>
      <Title order={1}>Hi User {id}!!</Title>
      <Text>change the user ID in the URL to get a different value</Text>
      <Link href="/dev" passHref>
        <Button>Go back to home page</Button>
      </Link>
      <Text>TODO: Fix path bug, currently not showing path param</Text>
    </Container>
  );
};

export default User;
