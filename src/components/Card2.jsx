import PropTypes from "prop-types";

const Card2 = ({ className = "", bankLine, centralDepok, banks }) => {
  return (
    <div
      className={`flex-1 shadow-[5px_12px_64px_rgba(26,_59,_174,_0.05)] bg-ffffff box-border flex flex-col items-start justify-start pt-[29px] px-8 pb-8 gap-[32px] min-w-[132px] text-left text-sm text-lightslategray-100 font-degular border-t-[2px] border-solid border-ced7 ${className}`}
    >
      <div className="w-[52px] h-[52px] rounded-981xl bg-f5f6ff overflow-hidden shrink-0 flex flex-row items-center justify-center p-4 box-border">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={bankLine}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
        <div className="self-stretch relative leading-[17px] font-medium">
          {centralDepok}
        </div>
        <b className="self-stretch relative text-xl tracking-[-1px] leading-[21px] font-semibold text-d48 mq450:text-base mq450:leading-[17px]">
          {banks}
        </b>
      </div>
    </div>
  );
};

Card2.propTypes = {
  className: PropTypes.string,
  bankLine: PropTypes.string,
  centralDepok: PropTypes.string,
  banks: PropTypes.string,
};

export default Card2;
