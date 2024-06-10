import Card from "./Card";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-ced7 font-degular ${className}`}
    >
      <div className="w-[1064px] flex flex-col items-start justify-start gap-[48px] max-w-full mq750:gap-[24px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[555px] flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <div className="flex flex-row items-start justify-start gap-[28px]">
                <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                  <div className="w-2 h-2 relative bg-ced7" />
                </div>
                <b className="relative tracking-[4px] leading-[100%] uppercase font-bold inline-block min-w-[114px]">
                  NExus FAQ
                </b>
              </div>
            </div>
            <h1 className="m-0 self-stretch relative text-29xl tracking-[-1px] leading-[104%] font-medium font-inherit text-d48 text-center mq450:text-10xl mq450:leading-[30px] mq1050:text-19xl mq1050:leading-[40px]">
              We always got the answers to your questions
            </h1>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[24px] max-w-full text-xl text-ffffff">
          <div className="flex-1 shadow-[0px_12px_64px_rgba(26,_59,_174,_0.04)] bg-a3bae flex flex-col items-start justify-center py-16 px-12 box-border gap-[48px] min-w-[254px] max-w-full mq450:gap-[24px] mq450:py-[42px] mq450:px-5 mq450:box-border">
            <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
              <div className="self-stretch relative leading-[120%] font-semibold mq450:text-base mq450:leading-[19px]">
                We analyze your finances with features?
              </div>
              <div className="self-stretch relative text-base leading-[160%] font-medium text-gray-600">
                Keep track of your finances with our superior features. With
                reliable tools, you can identify spending patterns, track
                investment growth, and make decisions.
              </div>
            </div>
            <div className="w-12 h-12 rounded-981xl bg-ced7 overflow-hidden shrink-0 flex flex-row items-center justify-center p-4 box-border">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/addline.svg"
              />
            </div>
          </div>
          <Card simpleAndEasyToUseTransac="Simple and easy to use transactions?" />
          <Card simpleAndEasyToUseTransac="We analyze your finances with features?" />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
