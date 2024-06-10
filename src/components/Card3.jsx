import { useMemo } from "react";
import PropTypes from "prop-types";

const Card3 = ({
  className = "",
  cardImage,
  increaseInLifeTimeValue,
  propDisplay,
  propMinWidth,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const cardImageStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const learnMoreStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const plusStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div
      className={`h-[440px] flex-1 shadow-[0px_12px_64px_rgba(26,_59,_174,_0.04)] bg-ffffff box-border overflow-hidden flex flex-col items-end justify-start py-16 px-14 gap-[80px] min-w-[284px] max-w-full text-left text-29xl text-d48 font-degular border-t-[2px] border-solid border-ced7 mq750:gap-[40px] mq750:py-[27px] mq750:px-7 mq750:box-border mq1050:pt-[42px] mq1050:pb-[42px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[48px] shrink-0 [debug_commit:69da668] mq450:gap-[24px]">
        <div
          className="relative tracking-[-3px] leading-[50px] font-medium inline-block min-w-[112px] mq450:text-10xl mq450:leading-[30px] mq1050:text-19xl mq1050:leading-[40px]"
          style={cardImageStyle}
        >
          {cardImage}
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xl">
          <div className="self-stretch relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
            {increaseInLifeTimeValue}
          </div>
          <div className="self-stretch relative text-base leading-[160%] text-lightslategray-200">
            Lorem ipsum dolor sit amet consectetur. Hendrerit at cras nibh et
            arcu lectus aliquet euismod ipsum.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base">
          <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
            <b
              className="relative tracking-[2px] leading-[100%] uppercase font-bold inline-block min-w-[111px] whitespace-nowrap"
              style={learnMoreStyle}
            >
              Learn more
            </b>
          </div>
          <div
            className="h-12 w-12 rounded-981xl bg-ced7 overflow-hidden shrink-0 flex flex-row items-center justify-center p-4 box-border"
            style={plusStyle}
          >
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/addline.svg"
            />
          </div>
        </div>
      </div>
      <div className="mr-[-56.3px] w-[380px] h-[421px] relative bg-a3bae shrink-0 [debug_commit:69da668] max-w-[143%]" />
    </div>
  );
};

Card3.propTypes = {
  className: PropTypes.string,
  cardImage: PropTypes.string,
  increaseInLifeTimeValue: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
};

export default Card3;
