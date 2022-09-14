import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { useInitPage } from "../../src/database/accountFunc";
import { userAtom } from "../../src/database/atom";
import { AuthLogOut } from "../../src/database/basicFunc/auth";

const Main = () => {
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

export default Main;
