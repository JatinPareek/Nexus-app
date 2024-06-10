import PropTypes from "prop-types";

const Card1 = ({
  className = "",
  prop,
  nexusNewPaymentBankServic,
  thomasGulden,
}) => {
  return (
    <div
      className={`flex-1 shadow-[0px_12px_64px_rgba(26,_59,_174,_0.05)] bg-ffffff box-border overflow-hidden flex flex-col items-start justify-start pt-[61px] pb-16 pr-5 pl-12 gap-[48px] min-w-[284px] max-w-full text-center text-sm text-d48 font-degular border-t-[2px] border-solid border-ced7 mq450:gap-[24px] mq450:pl-5 mq450:box-border mq750:pt-10 mq750:pb-[42px] mq750:box-border ${className}`}
    >
      <div className="w-14 h-14 relative rounded-[50%] bg-gainsboro-100" />
      <div className="flex flex-row items-start justify-start gap-[22px]">
        <div className="flex flex-row items-start justify-start gap-[4px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            loading="lazy"
            alt=""
            src="/starfill.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            loading="lazy"
            alt=""
            src="/starfill.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            loading="lazy"
            alt=""
            src="/starfill.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            loading="lazy"
            alt=""
            src="/starfill.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            loading="lazy"
            alt=""
            src="/starfill.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <b className="relative tracking-[2px] leading-[100%] uppercase font-bold inline-block min-w-[39px]">
            {prop}
          </b>
        </div>
      </div>
      <div className="w-[282.7px] h-[145px] relative text-lg leading-[160%] font-medium text-left inline-block shrink-0">
        {nexusNewPaymentBankServic}
      </div>
      <b className="relative text-xl leading-[100%] font-semibold mq450:text-base mq450:leading-[16px]">
        {thomasGulden}
      </b>
    </div>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  nexusNewPaymentBankServic: PropTypes.string,
  thomasGulden: PropTypes.string,
};

export default Card1;
