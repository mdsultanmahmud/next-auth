import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import auth from "@/firebase/firebase.auth";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const LoginPage = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password)
  }

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined style={{cursor:"pointer"}} onClick={() => signIn("google", {
            callbackUrl:"http://localhost:3000"
          })}/>
          <GithubOutlined style={{cursor:"pointer"}} onClick={() => signIn("github", {
            callbackUrl: "http://localhost:3000"
          })}/>
        </div>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} >
          <label htmlFor="">Your Email</label>
          <input type="email" {...register("email", { required: true })}/>
          <label htmlFor="">Your Password</label>
          <input type="password" {...register("password", { required: true })}/>
          {/* <Button>Login</Button> */}
          <button type="submit" style={{padding:".4rem 0", borderRadius:"0.5rem", cursor:"pointer"}}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
