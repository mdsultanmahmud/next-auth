import { Layout, Menu, Button } from "antd";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
const { Header } = Layout;
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession()
  // console.log(session);
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="demo-logo">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "25px",
          }}
        >
          NEXT AUTH
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "20%",
          display: "flex",
          fontSize: "20px",
          justifyContent: "space-between",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href="/profile"
        >
          <items>Profile</items>
        </Link>
        {
          !session?.user?.email ?
            <Link style={{ textDecoration: "none", color: "white" }} href="/login">
              <items>Login</items>
            </Link>
            :
            <items style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
              {
                session?.user?.email &&
                <Image src={session?.user?.image} width={30} height={30} alt="imgage of the user" style={{ borderRadius: "50%" }} />
              }
              <Button type="primary" danger onClick={() => signOut()}>
                Logout
              </Button>
            </items>
        }
      </Menu>
    </Header>
  );
};
export default Navbar;
