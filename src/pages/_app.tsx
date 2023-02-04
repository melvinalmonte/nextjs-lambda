import {
  AppShell,
  Button,
  Container,
  Footer,
  Group,
  Header,
  MantineProvider,
  Text,
} from "@mantine/core";

import { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <AppShell
          fixed
          padding="md"
          header={
            <Header height={60} p="xs">
              <Container>
                <Group position="apart">
                  <Text py={10} weight="bold">
                    NextJS Lambda + Mantine
                  </Text>
                  <Link href="/dev/users" passHref>
                    <Button>Users</Button>
                  </Link>
                </Group>
              </Container>
            </Header>
          }
          footer={
            <Footer height={60} p="xs">
              <Container>
                <Text py={10} align="right">
                  {new Date().getFullYear()}
                </Text>
              </Container>
            </Footer>
          }
        >
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </>
  );
}
