// Photos from https://citizenofnowhe.re/lines-of-the-city
import { useEffect, useState } from "react";
import PromiseNumber from "./promise-number";
import { useInView } from "react-intersection-observer";
import PersonGroup from "@/assets/icons/landing-page/person-group";
import PromiseClock from "@/assets/icons/landing-page/promise-clock";
import PromiseBulb from "@/assets/icons/landing-page/promise-bulb";
import PromiseMoney from "@/assets/icons/landing-page/promise-money";
import Star1 from "@/assets/icons/landing-page/star1";
import Star2 from "@/assets/icons/landing-page/star2";
import HeartRed from "@/assets/icons/landing-page/heart-red";
import HeartBrown from "@/assets/icons/landing-page/heart-brown";
import BoxTheme from "@/element/landing-page/box-theme/box-theme";

function Cards({ item, setData }) {
  const { ref, inView, entry } = useInView({
    trackVisibility: true,
    delay: 100,
  });
  useEffect(() => {
    if (entry?.isIntersecting) {
      setData(item.id);
    }
  }, [entry?.isIntersecting]);

  return (
    <section className="promise_card_section mr-5">
      <div ref={ref}>
        <main className="relative w-full flex gap-10 flex-col">
          <div className="h-full md:h-600px w-full flex justify-center items-center">
            <BoxTheme
              boxStyle={` w-full md:w-[600px] h-full md:h-[350px] relative border-2 border-primary-brown rounded-3xl bg-[${item.bgColor}] promise_animate-glow`}
              bgBoxStyle={
                " w-full lg:w-[600px] h-full md:h-[350px] border-2 border-primary-brown top-3 -z-1 left-3  rounded-3xl bg-[#E0E0E0]"
              }
            >
              {/* <div
                className={`w-[600px] h-full md:h-[350px] relative border-[1px] border-primary-brown rounded-3xl bg-[${item.bgColor}]`}
              > */}
              <div className="p-3 md:p-10 ">
                <p>{item.icon}</p>
                <p className="text-[40px] font-primaryMedium   leading-10 mt-10">
                  {item.header}
                </p>
                <p className="text-[25px] font-primaryLight mt-3">
                  {item.message}
                </p>
                {/* </div> */}
                {/* <div className="w-full lg:w-[600px] h-full md:h-[350px] border-[1px] border-primary-brown absolute top-3 -z-1 left-4 rounded-3xl bg-[#E0E0E0]"></div> */}
              </div>
            </BoxTheme>
          </div>
        </main>
      </div>
    </section>
  );
}

export default function PromiseFramer() {
  const [data, setData] = useState();
  const [showOut, setShowOut] = useState(false);
  const [showIn, setShowIn] = useState(false);
  const [setPath, setShowPath] = useState(false);
  useEffect(() => {
    if (setPath) {
      if (data == 2) {
        setShowOut(false);
        setShowIn(true);
      } else if (data == 3) {
        setShowOut(true);
        setShowIn(false);
      } else if (data == 4) {
        setShowOut(false);
        setShowIn(true);
      } else if (data == 1) {
        setShowOut(true);
        setShowIn(false);
        setTimeout(() => {
          setShowPath(false);
        }, 1000);
      }
    } else {
      if (data == 1) {
        setShowOut(true);
        setShowIn(false);
      } else if (data == 2) {
        setShowOut(false);
        setShowIn(true);
      } else if (data == 3) {
        setShowOut(true);
        setShowIn(false);
      } else if (data == 4) {
        setShowOut(false);
        setShowIn(true);
        setTimeout(() => {
          setShowPath(true);
        }, 1000);
      }
    }
  }, [data]);

  const values = [
    {
      id: 1,
      header: "Explore Indian Talents",
      message:
        "Lorem ipsum dolor sit am, consectetur adipiscineli nsectetur adipiscing",
      icon: <PersonGroup />,
      bgColor: "#B8C8FF",
    },
    {
      id: 2,
      header: "Fill your open positions within 15 days timeline",
      message:
        "Lorem ipsum dolor sit am, consectetur adipiscineli nsectetur adipiscing",
      icon: <PromiseClock />,
      bgColor: "#B6ECCC",
    },
    {
      id: 3,
      header: "Save upto 50% on satffing costs without talent compromise",
      // message: "Save upto 50% on satffing costs without talent compromise",
      icon: <PromiseMoney />,
      bgColor: "#FFF5B7",
    },
    {
      id: 4,
      header: "Top 5% of Indian IT Talent",
      message:
        "Lorem ipsum dolor sit am, consectetur adipiscineli nsectetur adipiscing",
      icon: <PromiseBulb />,
      bgColor: "#FDB2B2",
    },
  ];

  return (
    <div className="flex px-5 flex-wrap overflow-hidden">
      <div className="flex-1 absolute hidden md:-left-72 lg:flex">
        <div className="w-[700px] h-[700px]  border-[20px] border-primary-brown rounded-full -z-1 absolute left-5 top-0"></div>
        <div className="w-[700px] h-[700px] border-[1px] border-primary-brown rounded-full bg-[#FDFDFD] shrink-0 flex justify-center items-center relative">
          <div
            className={`w-[600px] h-[600px] border-r-[1px] border-b-[1px] border-t-[0px] border-l-[0px] border-primary-brown rounded-full ${
              showIn ? "rotate-to-180" : "rotate-90"
            } bg-[#FDFDFD]`}
          ></div>
          <div
            className={`w-[500px] h-[500px] border-l-[1px] border-b-[1px] border-t-[0px] border-r-[0px] border-primary-brown rounded-full ${
              showOut ? "rotate-180" : "rotate-to-90"
            } bg-[#FDFDFD] absolute`}
          ></div>
          <Star1
            className={`absolute top-[30%] right-[65px] scale-[0.45] animate-scaleIn`}
          />
          <Star2
            className={`absolute z-[30] top-7  fill-custom-red animate-scaleIn`}
          />
          <Star2
            className={`absolute z-[30] bottom-32 right-24 fill-custom-blue animate-scaleIn`}
          />
          <div className="w-[400px] h-[400px] border-l-[70px]  border-primary-brown rounded-full promise_bg_image absolute"></div>
          <div className="w-[400px] h-[400px] border-2  border-primary-brown rounded-full absolute"></div>
          {/* path in */}
          {!setPath && (
            <>
              <div
                className={`w-[600px] h-[400px] rounded-full absolute -left-3 rotate-180 ${
                  showOut ? "rotate-to-0" : ""
                }`}
              >
                {showOut && (
                  <div className="right-[20%] absolute bottom-[40%]">
                    <PromiseNumber id={data} style={{ data }} />
                  </div>
                )}
              </div>
              <div
                className={`w-[600px] h-[400px] rounded-full absolute -left-3 rotate-0 ${
                  !showOut ? "rotate-to-180" : ""
                }`}
              >
                {!showOut && (
                  <div className="right-[20%] absolute bottom-[40%]">
                    <PromiseNumber id={data - 1} style={{ data }} />
                  </div>
                )}
              </div>
              {/* in */}
              <div
                className={`w-[600px] h-[400px] rounded-full absolute -left-3 rotate-180 ${
                  showIn ? "rotate-to-0" : ""
                }`}
              >
                {showIn && (
                  <div className="right-[20%] absolute bottom-[40%]">
                    <PromiseNumber id={data} style={{ data }} />
                  </div>
                )}
              </div>
              <div
                className={`w-[600px] h-[400px] rounded-full absolute -left-3 rotate-0 ${
                  !showIn ? "rotate-to-180" : ""
                }`}
              >
                {!showIn && (
                  <div className="right-[20%] absolute bottom-[40%]">
                    <PromiseNumber id={data - 1} style={{ data }} />
                  </div>
                )}
              </div>
            </>
          )}

          {/* path out */}
          {setPath && (
            <>
              <div
                className={`w-[600px] h-[400px] rounded-full absolute -left-3 rotate-180 ${
                  showOut ? "rotate-to-0" : ""
                }`}
              >
                {showOut && (
                  <div className="right-[20%] absolute bottom-[40%]">
                    <PromiseNumber id={data} style={{ data }} />
                  </div>
                )}
              </div>
              <div
                className={`w-[600px] h-[400px] rounded-full absolute -left-3 rotate-0 ${
                  !showOut ? "rotate-to-180" : ""
                }`}
              >
                {!showOut && (
                  <div className="right-[20%] absolute bottom-[40%]">
                    <PromiseNumber id={data + 1} style={{ data }} />
                  </div>
                )}
              </div>
              {/* in */}
              <div
                className={`w-[600px] h-[400px] rounded-full absolute -left-3 rotate-180 ${
                  showIn ? "rotate-to-0" : ""
                }`}
              >
                {showIn && (
                  <div className="right-[20%] absolute bottom-[40%]">
                    <PromiseNumber id={data} style={{ data }} />
                  </div>
                )}
              </div>
              <div
                className={`w-[600px] h-[400px] rounded-full absolute -left-3 rotate-0 ${
                  !showIn ? "rotate-to-180" : ""
                }`}
              >
                {!showIn && (
                  <div className="right-[20%] absolute bottom-[40%]">
                    <PromiseNumber id={data + 1} style={{ data }} />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      {/* <div className="w-full flex-1 relative -right-20 md:-right-36 lg:-right-60"> */}
      <div className="w-full flex-1 relative lg:-right-60">
        <div className="flex justify-center items-center md:absolute left-[27%] -top-20 gap-1 flex-nowrap">
          <div className="flex items-center  font-primaryBold text-primary-brown text-[50px]">
            Our Promises
          </div>
          <div className="relative top-2">
            <HeartRed className="z-1" />
            <HeartBrown className="absolute left-1 top-[3px] -z-1" />
          </div>
        </div>
        <div className="w-full max-h-[700px] overflow-auto promises_progresses">
          {values.map((item, i) => (
            <Cards item={item} key={i} setData={setData} />
          ))}
        </div>
      </div>
    </div>
  );
}
