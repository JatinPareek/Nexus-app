import Card3 from "./Card3";
import PropTypes from "prop-types";

const ValueProposition = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-ced7 font-degular ${className}`}
    >
      <div className="w-[1200px] flex flex-col items-start justify-start gap-[64px] max-w-full lg:gap-[32px] mq750:gap-[16px]">
        <div className="w-[525px] flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
          <div className="flex flex-row items-start justify-start gap-[28px]">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="w-2 h-2 relative bg-ced7" />
            </div>
            <b className="relative tracking-[4px] leading-[100%] uppercase font-bold">
              NExus Value
            </b>
          </div>
          <h1 className="m-0 self-stretch relative text-37xl tracking-[-1px] leading-[104%] font-medium font-inherit text-d48 mq450:text-15xl mq450:leading-[35px] mq1050:text-26xl mq1050:leading-[47px]">
            Take easy control of your financial future.
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[31.9px] max-w-full text-29xl text-ffffff mq750:gap-[16px]">
          <div className="flex-1 shadow-[0px_12px_64px_rgba(26,_59,_174,_0.04)] bg-a3bae overflow-hidden flex flex-col items-start justify-start py-16 px-14 box-border gap-[48px] min-w-[284px] max-w-full mq450:gap-[24px] mq450:py-[42px] mq450:px-5 mq450:box-border">
            <div className="w-[380px] h-[440px] relative bg-a3bae hidden max-w-full" />
            <div className="relative tracking-[-3px] leading-[50px] font-medium inline-block min-w-[83px] z-[1] mq450:text-10xl mq450:leading-[30px] mq1050:text-19xl mq1050:leading-[40px]">{`< 1%`}</div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xl">
              <div className="self-stretch relative leading-[120%] font-medium z-[1] mq450:text-base mq450:leading-[19px]">
                Reducing processing fees
              </div>
              <div className="self-stretch relative text-base leading-[160%] text-gray-600 z-[1]">
                Lorem ipsum dolor sit amet consectetur. Hendrerit at cras nibh
                et arcu lectus aliquet euismod ipsum.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] text-base">
              <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
                <b className="relative tracking-[2px] leading-[100%] uppercase font-bold inline-block min-w-[111px] shrink-0 [debug_commit:69da668] whitespace-nowrap">
                  Learn more
                </b>
              </div>
              <div className="h-12 w-12 rounded-981xl bg-ced7 overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-3.5 box-border [debug_commit:69da668]">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain"
                  loading="lazy"
                  alt=""
                  src="/addline-1.svg"
                />
              </div>
            </div>
          </div>
          <Card3
            cardImage="+ 25%"
            increaseInLifeTimeValue="Increase in life time value"
          />
          <Card3
            cardImage="$ 1,400"
            increaseInLifeTimeValue="Unlock revenue share"
            propDisplay="unset"
            propMinWidth="unset"
            propDebugCommit="unset"
            propDebugCommit1="unset"
          />
        </div>
      </div>
    </section>
  );
};

ValueProposition.propTypes = {
  className: PropTypes.string,
};

export default ValueProposition;
