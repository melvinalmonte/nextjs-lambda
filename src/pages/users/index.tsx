import { Button, Container, Text, Title } from "@mantine/core";

import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <Container>
      <Title order={1}>Users Page</Title>
      <Text>
        This is the users page, click button to go to a user ID 1234 page
      </Text>
      <Link href="/dev/users/123" passHref>
        <Button>Go to user 1234 page</Button>
      </Link>
    </Container>
  );
};

export default index;
