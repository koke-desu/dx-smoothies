import Link from "next/link";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { orderingListModalAtom } from "../database/atom";

const OrderingFAB = () => {
  const setIsModalOpen = useSetRecoilState(orderingListModalAtom);

  return (
    <a
      onClick={() => setIsModalOpen(true)}
      style={{
        width: "80px",
        height: "80px",
        border: "1px solid black",
        borderRadius: 100,
        backgroundColor: "yellow",
        position: "fixed",
        bottom: "80px",
        right: "20px",
      }}
    ></a>
  );
};

export default OrderingFAB;