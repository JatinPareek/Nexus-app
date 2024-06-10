import Card1 from "./Card1";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-ced7 font-degular ${className}`}
    >
      <div className="w-[1200px] flex flex-col items-start justify-start gap-[64px] max-w-full lg:gap-[32px] mq750:gap-[16px]">
        <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] mq750:flex-wrap">
          <div className="w-[431px] flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[28px]">
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="w-2 h-2 relative bg-ced7" />
              </div>
              <b className="relative tracking-[4px] leading-[100%] uppercase font-bold">
                NExus Testimonial
              </b>
            </div>
            <h1 className="m-0 self-stretch relative text-29xl tracking-[-1px] leading-[104%] font-medium font-inherit text-d48 mq450:text-10xl mq450:leading-[30px] mq1050:text-19xl mq1050:leading-[40px]">
              What our customer saying about Nexus
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="h-[72px] w-[72px] shadow-[0px_12px_64px_rgba(26,_59,_174,_0.04)] rounded-981xl bg-ffffff flex flex-row items-center justify-center p-6 box-border">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/arrowleftline.svg"
              />
            </div>
            <div className="h-[72px] w-[72px] shadow-[0px_12px_64px_rgba(26,_59,_174,_0.04)] rounded-981xl bg-ffffff flex flex-row items-center justify-center p-6 box-border">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/arrowrightline.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[31.9px] max-w-full text-center text-sm text-d48 mq750:gap-[16px]">
          <Card1
            prop="(4.5)"
            nexusNewPaymentBankServic="Nexus new payment bank service by creating a new platform to make it easier to provide new solutions. Thank You!"
            thomasGulden="Thomas Gulden"
          />
          <div className="flex-1 shadow-[0px_12px_64px_rgba(26,_59,_174,_0.1)] bg-a3bae overflow-hidden flex flex-col items-start justify-start py-16 pr-5 pl-12 box-border gap-[48px] min-w-[284px] max-w-full text-ffffff mq450:gap-[24px] mq450:pl-5 mq450:box-border mq750:pt-[42px] mq750:pb-[42px] mq750:box-border">
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
                  alt=""
                  src="/starfill.svg"
                />
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                  alt=""
                  src="/starfill.svg"
                />
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                  alt=""
                  src="/starfill.svg"
                />
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                  alt=""
                  src="/starfill.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <b className="relative tracking-[2px] leading-[100%] uppercase font-bold inline-block min-w-[39px]">
                  (4.8)
                </b>
              </div>
            </div>
            <div className="w-[282.7px] relative text-lg leading-[160%] font-medium text-left inline-block">
              The new payment bank service Nexus , started the development of a
              new platform that makes it easier to provide new solutions for its
              customers. Thank you very much.
            </div>
            <b className="relative text-xl leading-[100%] font-semibold mq450:text-base mq450:leading-[16px]">
              Mariano Morley
            </b>
          </div>
          <Card1
            prop="(4.7)"
            nexusNewPaymentBankServic="By developing a new platform, Nexus new payment bank service makes it simpler to offer fresh solutions. Many thanks"
            thomasGulden="Sestina Christine"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
