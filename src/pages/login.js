import Head from "next/head";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import styles from '@/styles/Login.module.css'
import { useForm } from "react-hook-form";


const LoginPage = () => {
  const {
    register,

  } = useForm();

 

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={`${styles.form}`}>

          <h3 className="font-bold text-xl">LOGIN</h3>
          <div className={styles.social_icons}>
            <FaGoogle className="text-3xl mx-auto mt-3 cursor-pointer"
              onClick={() =>
                signIn("google", { callbackUrl: "https://pc-build-one.vercel.app" })
              }
            />
          </div>
              <hr className="my-4"/>
          <form >
          <label htmlFor="">Your Email</label>
          <input type="email"{...register('email', { required: true })} />
          <label htmlFor="">Your Password</label>
          <input type="password" {...register('password', { required: true })}/>
          <button type="submit">Login</button>
        </form>
       
      </div>
    </div>
  );
};

export default LoginPage;
