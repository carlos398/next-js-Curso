import Container from "../components/Container"
import Head from "next/head"
import Users from "../components/Users";

function Index(props) {
  console.log(props)
  return (
    <Container>
      <Head>
        <title>Nex.js Practica - Home</title>
      </Head>
      <h1>NEXT</h1>
      <Users users={props.users}/>
    </Container>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {users: data}
}


export default Index
