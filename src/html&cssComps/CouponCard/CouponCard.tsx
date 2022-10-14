/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { FC } from "react";

type Props = {
  title: string;
  description: string;
  onClick: () => void;
  isUsable: boolean;
};

const CouponCard: FC<Props> = ({ title, description, onClick, isUsable }) => {
  return (
    <>
      <style>
        {`
            .all {
                
                background-size: contain;
                width: 331px;
                height: 80px;
                font-size: 7px;
                padding: 8px;
            }
            
            .title {
                color: black;
                font-weight: bold;
                margin: 0 0 0 30px;
                padding-top: 8px;
            }
            
            .content {
                color: black;
                margin: 5px 0 0 50px;
            }
            
            .usecoupon {
                background-color: #00631e;
                border-radius: 10px;
                border: none;
            }
            
            .use {
                color: white;
                font-size: 7px;
            }
            
            .a {
                font-size: 16px;
            }
            
            
            
            .b {
                 /* height: 48px;  */
                display: flex;
            
            }
            
            .b-1 {
                flex-grow:  1;
                /* overflow: auto; */
            
            }
            
            .b-2 {
                white-space: nowrap;
                margin: 3px;
            }
            
            .move {
                display:flex;
                justify-content: center;
                align-items: center;
            }
            
        `}
      </style>
      <>
        <div className="all">
          <div className="a">
            <p className="title">{title}</p>
          </div>
          <div className="b">
            <div className="b-1">
              <p className="content">{description}</p>
            </div>
            <div className="move">
              <div className="b-2">
                {isUsable && (
                  <button className="usecoupon" type="button" onClick={onClick}>
                    <p className="use">クーポンを使う</p>
                  </button>
                )}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default CouponCard;
