import auth from "@/firebase/firebase.auth";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
const HomePage = () => {
  const {data: session} = useSession()
  const [user, loading, error] = useAuthState(auth);
  // console.log(user?.email)
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop:"10%" }}>Welcome To Next Auth Home Page</h1>
      {session?.user && <h2 style={{ textAlign: "center", marginTop:"1rem" }}>Mr. or Miss. {session?.user?.name}</h2>}
      {session?.user && <h2 style={{ textAlign: "center", marginTop:"1rem" }}>{session?.user?.email}</h2>}
      {user?.displayName && <h2 style={{ textAlign: "center", marginTop:"1rem" }}>{user?.displayName}</h2>}
      {user && <h2 style={{ textAlign: "center", marginTop:"1rem" }}>{user?.email}</h2>}
    </div>
  );
};

export default HomePage;
