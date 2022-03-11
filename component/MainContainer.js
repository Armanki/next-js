import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"ubli tv, nextjs" + keywords}></meta>
                <title>главная страница</title>
            </Head>
            <div className="navbar">
                <A href={"/"} text={"главная"}/>
                <A href={"/users"} text={"пользователей"}/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                  .navbar{
                  background: orange;
                  padding: 15px
                  }
                `}
            </style>
        </>
    );
};

export default MainContainer;