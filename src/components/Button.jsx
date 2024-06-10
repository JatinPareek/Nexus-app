import PropTypes from "prop-types";

const Button = ({ className = "", requestDemo }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-6 px-8 bg-ffffff shadow-[0px_12px_64px_rgba(26,_59,_174,_0.04)] rounded-981xl overflow-hidden flex flex-row items-start justify-start gap-[14px] z-[1] ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
        <b className="relative text-base tracking-[2px] leading-[100%] uppercase font-bold font-degular text-a3bae text-center">
          {requestDemo}
        </b>
      </div>
      <div className="h-8 w-8 rounded-981xl bg-ced7 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0"
          alt=""
          src="/addline.svg"
        />
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  requestDemo: PropTypes.string,
};

export default Button;
