import PropTypes from "prop-types";

const Companies = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xl text-d48 font-degular ${className}`}
    >
      <div className="w-[1200px] flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
        <div className="w-[200px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
          <div className="self-stretch relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
            Trusted by hundred companies in the world
          </div>
        </div>
        <div className="w-[880px] rounded-lg overflow-x-auto shrink-0 flex flex-row items-start justify-start py-[11px] px-0 box-border gap-[80px] max-w-full lg:gap-[40px] mq750:gap-[20px]">
          <div className="w-[140.8px] shrink-0 flex flex-row items-end justify-start gap-[10.8px]">
            <img
              className="h-10 w-[24.2px] relative"
              loading="lazy"
              alt=""
              src="/logomark.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[7px]">
              <img
                className="self-stretch h-[22.7px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/logotype.svg"
              />
            </div>
          </div>
          <div className="w-[137.5px] shrink-0 flex flex-row items-end justify-start pt-[1.7px] px-0 pb-[1.6px] box-border gap-[10.9px]">
            <img
              className="h-[36.7px] w-[36.7px] relative"
              loading="lazy"
              alt=""
              src="/logomark-1.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[4.9px]">
              <img
                className="self-stretch h-[23.2px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/logotype-1.svg"
              />
            </div>
          </div>
          <div className="w-[165.8px] shrink-0 flex flex-row items-start justify-start pt-[1.7px] px-0 pb-[1.6px] box-border gap-[11.5px]">
            <img
              className="h-[36.7px] w-[36.7px] relative"
              loading="lazy"
              alt=""
              src="/logomark-2.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[9.6px] px-0 pb-0">
              <img
                className="self-stretch h-[17.2px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/logotype-2.svg"
              />
            </div>
          </div>
          <div className="w-[165px] shrink-0 flex flex-row items-end justify-start pt-[1.7px] px-0 pb-[1.6px] box-border gap-[8.2px]">
            <img
              className="h-[36.7px] w-[36.7px] relative"
              loading="lazy"
              alt=""
              src="/logomark-3.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[9.7px]">
              <img
                className="self-stretch h-[17px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/logotype-3.svg"
              />
            </div>
          </div>
          <div className="w-[164.2px] shrink-0 flex flex-row items-start justify-end pt-[10.3px] px-0 pb-[11.4px] box-border relative gap-[22px]">
            <img
              className="h-[36.7px] w-[36.7px] absolute !m-[0] bottom-[1.6px] left-[0px]"
              loading="lazy"
              alt=""
              src="/logomark-4.svg"
            />
            <img
              className="h-[18.3px] w-[119.6px] relative"
              loading="lazy"
              alt=""
              src="/logotype-4.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Companies.propTypes = {
  className: PropTypes.string,
};

export default Companies;
