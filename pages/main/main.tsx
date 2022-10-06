/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../src/database/atom";
import { useInitPage } from "../../src/database/authFunc";
import { AuthLogOut } from "../../src/database/basicFunc/auth";

const main = () => {
  useInitPage();
  const router = useRouter();
  const user = useRecoilValue(userAtom);
  return (
    <div>
      main
      <h1>userID:{user.id}</h1>
      <button
        onClick={() => {
          AuthLogOut();
          router.replace("/userAction/login");
        }}
      >
        signout
      </button>
    </div>
  );
};

export default main;
main;
