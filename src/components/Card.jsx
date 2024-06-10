import PropTypes from "prop-types";

const Card = ({ className = "", simpleAndEasyToUseTransac }) => {
  return (
    <div
      className={`flex-1 shadow-[0px_12px_64px_rgba(26,_59,_174,_0.04)] bg-ffffff box-border flex flex-col items-start justify-center pt-[61px] px-12 pb-16 gap-[48px] min-w-[254px] max-w-full text-left text-xl text-d48 font-degular border-t-[2px] border-solid border-ced7 mq450:gap-[24px] mq450:pt-10 mq450:px-5 mq450:pb-[42px] mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
        <div className="self-stretch relative leading-[120%] font-semibold mq450:text-base mq450:leading-[19px]">
          {simpleAndEasyToUseTransac}
        </div>
        <div className="self-stretch relative text-base leading-[160%] text-slategray">
          Keep track of your finances with our superior features. With reliable
          tools, you can identify spending patterns, track investment growth,
          and make decisions.
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
  );
};

Card.propTypes = {
  className: PropTypes.string,
  simpleAndEasyToUseTransac: PropTypes.string,
};

export default Card;
