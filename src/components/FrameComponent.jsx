import Button from "./Button";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-sm text-lightslategray-100 font-degular ${className}`}
    >
      <div className="h-[600px] w-[1200px] bg-a3bae overflow-y-auto shrink-0 flex flex-row items-start justify-start pt-24 px-28 pb-[141px] box-border gap-[110px] max-w-full lg:gap-[55px] lg:pt-[62px] lg:px-14 lg:pb-[92px] lg:box-border mq450:h-auto mq750:gap-[27px] mq750:pt-10 mq750:px-7 mq750:pb-[60px] mq750:box-border">
        <div className="w-[425px] shadow-[0px_0px_8px_rgba(255,_255,_255,_0.9)_inset] rounded-43xl bg-gray-200 box-border flex flex-row flex-wrap items-start justify-start pt-0.5 px-0 pb-[134px] gap-[4px] max-w-[calc(100%_-_550px)] border-[1px] border-solid border-gray-700 mq450:pb-[57px] mq450:box-border mq1050:hidden mq1050:pt-5 mq1050:pb-[87px] mq1050:box-border mq1050:max-w-full">
          <div className="h-[856px] w-[419px] relative shadow-[0px_0px_8px_rgba(255,_255,_255,_0.9)_inset] rounded-43xl bg-gray-200 box-border hidden max-w-full border-[1px] border-solid border-gray-700" />
          <div className="h-[336px] flex flex-col items-start justify-start pt-[132px] px-0 pb-0 box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
              <div className="w-[3px] h-[30px] relative shadow-[1px_0px_2px_rgba(255,_255,_255,_0.5)_inset] rounded-tl-12xs rounded-tr-none rounded-br-none rounded-bl-12xs bg-darkslategray-100" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
                <div className="w-[3px] flex-1 relative shadow-[1px_0px_2px_rgba(255,_255,_255,_0.5)_inset] rounded-tl-12xs rounded-tr-none rounded-br-none rounded-bl-12xs bg-darkslategray-100" />
                <div className="w-[3px] flex-1 relative shadow-[1px_0px_2px_rgba(255,_255,_255,_0.5)_inset] rounded-tl-12xs rounded-tr-none rounded-br-none rounded-bl-12xs bg-darkslategray-100" />
              </div>
            </div>
          </div>
          <div className="h-[716px] flex-1 relative min-w-[267px] max-w-full mq450:h-auto mq450:min-h-[716]">
            <div className="absolute top-[0px] left-[0px] rounded-39xl bg-black w-[411px] h-[848px] z-[1]" />
            <div className="absolute top-[18px] left-[18px] rounded-21xl bg-f5f6ff w-[375px] h-[698px] overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[234px] box-border gap-[24px] z-[2] mq450:h-auto">
              <div className="self-stretch h-11 relative overflow-hidden shrink-0">
                <img
                  className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[30px]"
                  alt=""
                />
                <div className="absolute top-[8px] left-[292px] flex flex-col items-start justify-start gap-[2px]">
                  <div className="flex flex-row items-start justify-start py-0 px-1.5">
                    <img className="h-1.5 w-1.5 relative z-[1]" alt="" />
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[4px] z-[1]">
                    <img
                      className="self-stretch w-5 relative max-h-full min-h-[14px]"
                      loading="lazy"
                      alt=""
                      src="/network-signal-light.svg"
                    />
                    <img
                      className="h-3.5 w-4 relative min-h-[14px]"
                      loading="lazy"
                      alt=""
                      src="/wifi-signal--light.svg"
                    />
                    <img
                      className="self-stretch w-[25px] relative max-h-full min-h-[14px]"
                      loading="lazy"
                      alt=""
                      src="/battery--light.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute top-[12px] left-[21px] rounded-xl w-[54px] h-[21px] overflow-hidden z-[1]"
                  loading="lazy"
                  alt=""
                  src="/time--light.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-8 shrink-0">
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
                  <div className="flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-[12px] text-d48">
                    <div className="relative leading-[120%] inline-block min-w-[83px]">
                      Hi, Kareem! 👋
                    </div>
                    <h1 className="m-0 relative text-13xl tracking-[-1px] leading-[120%] font-medium font-inherit mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[31px]">
                      <p className="m-0">Let’s keep taking</p>
                      <p className="m-0">care of your finance</p>
                    </h1>
                  </div>
                  <div className="self-stretch shadow-[5px_12px_64px_rgba(26,_59,_174,_0.05)] bg-ffffff overflow-hidden flex flex-row items-start justify-between p-4 gap-[20px] mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                      <img
                        className="w-8 h-8 relative overflow-hidden shrink-0"
                        alt=""
                        src="/piechart.svg"
                      />
                    </div>
                    <div className="h-[41px] w-px relative bg-lavender mq450:w-full mq450:h-px" />
                    <div className="w-[142px] flex flex-col items-start justify-start gap-[5px]">
                      <div className="self-stretch relative leading-[17px] font-medium">
                        Daily report
                      </div>
                      <b className="self-stretch relative text-lg tracking-[-1px] leading-[19px] font-semibold text-d48">
                        54 Investment
                      </b>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                      <div className="w-8 h-8 rounded-981xl bg-ced7 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0"
                          alt=""
                          src="/addline-10.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch shadow-[5px_12px_64px_rgba(26,_59,_174,_0.05)] bg-ffffff overflow-hidden flex flex-col items-start justify-start p-4 gap-[24px]">
                    <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start gap-[5px]">
                        <div className="relative leading-[17px] font-medium inline-block min-w-[104px]">
                          Business account
                        </div>
                        <b className="relative text-lg tracking-[-1px] leading-[19px] font-semibold text-d48 inline-block min-w-[87px] whitespace-nowrap">
                          $120,560,00
                        </b>
                      </div>
                      <div className="bg-ffffff overflow-hidden flex flex-row items-center justify-center text-center text-ced7">
                        <div className="bg-azure overflow-hidden flex flex-row items-center justify-center py-1.5 px-[18px]">
                          <b className="relative leading-[17px] font-semibold inline-block min-w-[23px]">
                            Day
                          </b>
                        </div>
                        <div className="overflow-hidden flex flex-row items-center justify-center py-1.5 px-[18px] text-lightslategray-100">
                          <div className="relative leading-[17px] font-medium inline-block min-w-[33px]">
                            Week
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-px relative bg-lavender" />
                    <div className="self-stretch flex flex-row items-end justify-start gap-[8px] mq450:flex-wrap">
                      <div className="h-[136px] w-[39.8px] relative bg-lavender" />
                      <div className="h-[170px] w-[39.8px] relative bg-a3bae" />
                      <div className="h-[120px] w-[39.8px] relative bg-lavender" />
                      <div className="h-[136px] w-[39.8px] relative bg-lavender" />
                      <div className="h-[104px] w-[39.8px] relative bg-lavender" />
                      <div className="h-36 w-[39.8px] relative bg-lavender" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[316px] flex flex-col items-start justify-start pt-[216px] px-0 pb-0 box-border">
            <div className="w-[3px] flex-1 relative shadow-[-1px_0px_2px_rgba(255,_255,_255,_0.5)_inset] rounded-tl-none rounded-tr-12xs rounded-br-12xs rounded-bl-none bg-darkslategray-100" />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[45px] px-0 pb-0 box-border max-w-[calc(100%_-_535px)] shrink-0 text-37xl text-ffffff mq450:pt-[29px] mq450:box-border mq1050:hidden mq1050:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[64px] mq450:gap-[32px]">
            <h1 className="m-0 relative text-inherit tracking-[-1px] leading-[104%] font-medium font-inherit mq450:text-15xl mq450:leading-[35px] mq1050:text-26xl mq1050:leading-[47px]">
              <p className="m-0">Bring financial</p>
              <p className="m-0">features to life and begin building right.</p>
            </h1>
            <Button requestDemo="Download App" />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
