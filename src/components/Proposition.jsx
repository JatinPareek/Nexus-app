import Card2 from "./Card2";
import PropTypes from "prop-types";

const Proposition = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[2140px] bg-f5f6ff overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full text-left text-base text-ced7 font-degular mq1050:h-auto ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between py-0 px-20 box-border relative max-w-full shrink-0 gap-[20px] mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="h-[1680px] w-px relative box-border hidden z-[0] border-[1px] border-dashed border-slateblue-100" />
        <div className="h-[1680px] w-px relative box-border hidden z-[1] border-[1px] border-dashed border-slateblue-100" />
        <div className="h-[1680px] w-px relative box-border hidden z-[2] border-[1px] border-dashed border-slateblue-100" />
        <div className="h-[2440px] w-[17.5px] flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border">
          <div className="w-px flex-1 relative box-border border-[0.3px] border-dashed border-slateblue-200" />
        </div>
        <div className="h-full w-px absolute !m-[0] top-[0px] bottom-[0px] left-[335.8px] box-border border-[0.3px] border-dashed border-slateblue-200" />
        <div className="h-full w-px absolute !m-[0] top-[0px] bottom-[0px] left-[591.6px] box-border border-[0.3px] border-dashed border-slateblue-200" />
        <div className="h-full w-px absolute !m-[0] top-[0px] right-[591.6px] bottom-[0px] box-border border-[0.3px] border-dashed border-slateblue-200" />
        <div className="h-full w-px absolute !m-[0] top-[0px] right-[335.8px] bottom-[0px] box-border border-[0.3px] border-dashed border-slateblue-200" />
        <div className="w-[1086.5px] flex flex-col items-start justify-start pt-[191.5px] px-0 pb-0 box-border max-w-[calc(100%_-_58px)] lg:pt-[124px] lg:box-border mq750:pt-[53px] mq750:box-border mq1050:pt-[81px] mq1050:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[223px] max-w-full lg:gap-[111px] mq450:gap-[28px] mq750:gap-[56px]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-[19px] box-border max-w-full text-sm text-lightslategray-100">
              <div className="w-[1016px] flex flex-row flex-wrap items-start justify-start gap-[160px] max-w-full mq450:gap-[20px] mq750:gap-[40px] mq1050:gap-[80px]">
                <div className="flex-1 flex flex-col items-start justify-start pt-[64.5px] px-0 pb-0 box-border min-w-[277px] max-w-full mq450:pt-[42px] mq450:box-border">
                  <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                    <div className="h-[400px] w-[calc(100%_-_26px)] absolute !m-[0] top-[calc(50%_-_200px)] right-[13px] left-[13px] rounded-[50%] bg-ffffff z-[1]" />
                    <div className="flex-1 shadow-[5px_12px_64px_rgba(26,_59,_174,_0.05)] bg-ffffff flex flex-row items-start justify-start py-6 px-4 box-border gap-[24px] max-w-full z-[2] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-between min-w-[120px] min-h-[260px] mq450:min-h-[auto]">
                        <div className="flex flex-col items-start justify-start gap-[5px]">
                          <div className="relative leading-[17px] font-medium inline-block min-w-[104px]">
                            Business account
                          </div>
                          <b className="relative text-xl tracking-[-1px] leading-[21px] font-semibold text-d48 inline-block min-w-[98px] whitespace-nowrap mq450:text-base mq450:leading-[17px]">
                            $120,560,00
                          </b>
                        </div>
                        <div className="bg-ffffff overflow-hidden flex flex-row items-center justify-center text-center text-ced7">
                          <div className="bg-azure overflow-hidden flex flex-row items-center justify-center py-1.5 px-[34px]">
                            <b className="relative leading-[17px] font-semibold inline-block min-w-[23px]">
                              Day
                            </b>
                          </div>
                          <div className="overflow-hidden flex flex-row items-center justify-center py-1.5 px-[29px] text-lightslategray-100">
                            <div className="relative leading-[17px] font-medium inline-block min-w-[33px]">
                              Week
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[120px] text-center text-d48">
                        <div className="w-[97px] bg-lavender box-border flex flex-row items-start justify-start p-5 border-l-[2px] border-solid border-ced7">
                          <b className="relative font-semibold inline-block min-w-[27px]">
                            40%
                          </b>
                        </div>
                        <div className="w-[137px] bg-lavender box-border flex flex-row items-start justify-start p-5 border-l-[2px] border-solid border-ced7">
                          <b className="relative font-semibold inline-block min-w-[27px]">
                            60%
                          </b>
                        </div>
                        <div className="w-[161px] bg-lavender box-border flex flex-row items-start justify-start p-5 border-l-[2px] border-solid border-ced7">
                          <b className="relative font-semibold inline-block min-w-[27px]">
                            80%
                          </b>
                        </div>
                        <div className="self-stretch shadow-[5px_12px_64px_rgba(26,_59,_174,_0.05)] bg-a3bae flex flex-row items-start justify-start p-5 text-ffffff">
                          <div className="h-[59px] w-[185px] relative shadow-[5px_12px_64px_rgba(26,_59,_174,_0.05)] bg-a3bae hidden" />
                          <b className="relative font-semibold inline-block min-w-[34px] z-[1]">
                            100%
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[279px] max-w-full text-base text-ced7 mq450:gap-[20px]">
                  <div className="flex flex-row items-start justify-start gap-[28px]">
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <div className="w-2 h-2 relative bg-ced7 z-[1]" />
                    </div>
                    <b className="relative tracking-[4px] leading-[100%] uppercase font-bold z-[1]">
                      Nexus solutions
                    </b>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-29xl text-d48">
                    <h1 className="m-0 self-stretch relative text-inherit tracking-[-1px] leading-[104%] font-medium font-inherit z-[1] mq450:text-10xl mq450:leading-[30px] mq1050:text-19xl mq1050:leading-[40px]">
                      Convenient way to provide services for your finances
                      health
                    </h1>
                    <div className="w-96 relative text-lg leading-[160%] font-medium text-slategray inline-block max-w-full z-[1]">
                      We created solutions to help our customers manage their
                      financial expenses and income on a daily basis, and you
                      can view reports at any time.
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-6 px-8 bg-ffffff shadow-[0px_12px_64px_rgba(26,_59,_174,_0.04)] rounded-981xl overflow-hidden flex flex-row items-start justify-start gap-[14px] z-[1]">
                    <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                      <b className="relative text-base tracking-[2px] leading-[100%] uppercase font-bold font-degular text-d48 text-center">
                        Request Demo
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
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-end justify-start gap-[93.5px] max-w-full lg:gap-[47px] mq750:gap-[23px] mq1050:flex-wrap">
                <div className="w-[430px] flex flex-col items-start justify-start gap-[40px] min-w-[430px] max-w-full mq450:gap-[20px] mq750:min-w-full mq1050:flex-1">
                  <div className="flex flex-row items-start justify-start gap-[28px]">
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <div className="w-2 h-2 relative bg-ced7 z-[1]" />
                    </div>
                    <b className="relative tracking-[4px] leading-[100%] uppercase font-bold z-[1]">
                      Nexus Analyze
                    </b>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-29xl text-d48">
                    <h1 className="m-0 self-stretch relative text-inherit tracking-[-1px] leading-[104%] font-medium font-inherit z-[1] mq450:text-10xl mq450:leading-[30px] mq1050:text-19xl mq1050:leading-[40px]">
                      We analyze your finances with our premium features
                    </h1>
                    <div className="self-stretch relative text-lg leading-[160%] font-medium text-slategray z-[1]">
                      Keep track of your finances with our superior features.
                      With reliable tools, you can identify spending patterns,
                      track investment growth, and make decisions.
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-6 px-8 bg-ffffff shadow-[0px_12px_64px_rgba(26,_59,_174,_0.04)] rounded-981xl overflow-hidden flex flex-row items-start justify-start gap-[14px] z-[1]">
                    <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                      <b className="relative text-base tracking-[2px] leading-[100%] uppercase inline-block font-degular text-d48 text-center min-w-[128px]">
                        How It Works
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
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[106px] box-border min-w-[364px] min-h-[330px] max-w-full text-sm text-lightslategray-100 mq750:min-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                    <div className="h-[400px] w-[400px] absolute !m-[0] top-[-89px] left-[79.5px] rounded-[50%] bg-ffffff z-[1]" />
                    <div className="flex-1 flex flex-row items-center justify-center gap-[16px] max-w-full z-[2] mq750:flex-wrap">
                      <Card2
                        bankLine="/bankline.svg"
                        centralDepok="Central Depok"
                        banks="27+ Banks"
                      />
                      <div className="flex-1 shadow-[5px_12px_64px_rgba(26,_59,_174,_0.05)] bg-a3bae flex flex-col items-start justify-start py-12 px-8 box-border gap-[32px] min-w-[132px] text-gray-600">
                        <div className="w-[52px] h-[52px] rounded-981xl bg-ced7 overflow-hidden shrink-0 flex flex-row items-center justify-center p-4 box-border">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/bankcardline.svg"
                          />
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                          <div className="self-stretch relative leading-[17px] font-medium">
                            Premium Card
                          </div>
                          <b className="self-stretch relative text-xl tracking-[-1px] leading-[21px] font-semibold text-ffffff mq450:text-base mq450:leading-[17px]">
                            1.5% Interest
                          </b>
                        </div>
                      </div>
                      <Card2
                        bankLine="/exchangedollarline.svg"
                        centralDepok="Exchange"
                        banks="$120,560,00"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1067px] flex flex-col items-end justify-start gap-[40px] max-w-full mq750:gap-[20px]">
              <div className="w-[681px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="flex flex-row items-start justify-start gap-[28px]">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="w-2 h-2 relative bg-ced7 z-[1]" />
                  </div>
                  <b className="relative tracking-[4px] leading-[100%] uppercase font-bold z-[1]">
                    Nexus Cards
                  </b>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-center text-xs lg:flex-wrap lg:justify-center">
                <div className="w-[528px] flex flex-col items-start justify-start pt-[83px] px-0 pb-0 box-border min-w-[528px] max-w-full lg:flex-1 mq750:min-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq750:flex-wrap">
                    <div className="flex-1 flex flex-row items-start justify-start relative min-w-[166px]">
                      <div className="h-[400px] w-[400px] absolute !m-[0] top-[calc(50%_-_200px)] right-[-208px] rounded-[50%] bg-ffffff z-[1]" />
                      <div className="flex-1 shadow-[5px_12px_64px_rgba(26,_59,_174,_0.05)] bg-ffffff flex flex-col items-start justify-start py-8 px-[39px] gap-[20px] z-[2] border-l-[2px] border-solid border-ced7">
                        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                            <b className="relative tracking-[8px] leading-[100%] uppercase font-bold inline-block min-w-[68px]">
                              Nexus
                            </b>
                          </div>
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/simcard2line.svg"
                          />
                        </div>
                        <div className="self-stretch h-px relative bg-darkslategray-200" />
                        <div className="flex flex-col items-start justify-start gap-[5px] text-left text-3xs text-darkslategray-300">
                          <div className="relative tracking-[2px] leading-[120%] uppercase font-medium inline-block min-w-[95px]">
                            Business Card
                          </div>
                          <div className="relative text-base leading-[17px] font-semibold text-d48 inline-block min-w-[119px]">
                            ***** 7722 5032
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[0.6875] shadow-[5px_12px_64px_rgba(26,_59,_174,_0.05)] bg-a3bae flex flex-col items-start justify-start py-8 px-10 box-border gap-[20px] min-w-[166px] z-[2] text-ffffff mq450:flex-1">
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <b className="relative tracking-[8px] leading-[100%] uppercase font-bold inline-block min-w-[68px]">
                            Nexus
                          </b>
                        </div>
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/simcard2line.svg"
                        />
                      </div>
                      <div className="self-stretch h-px relative bg-gray-500" />
                      <div className="flex flex-col items-start justify-start gap-[5px] text-left text-3xs text-gray-600">
                        <div className="relative tracking-[2px] leading-[120%] uppercase font-medium inline-block min-w-[91px]">
                          Premium Card
                        </div>
                        <div className="relative text-base leading-[17px] font-semibold text-ffffff inline-block min-w-[119px]">
                          ***** 3515 8083
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[430px] flex flex-col items-start justify-start gap-[40px] min-w-[430px] max-w-full text-left text-29xl text-d48 lg:flex-1 mq450:gap-[20px] mq750:min-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                    <h1 className="m-0 self-stretch relative text-inherit tracking-[-1px] leading-[104%] font-medium font-inherit z-[1] mq450:text-10xl mq450:leading-[30px] mq1050:text-19xl mq1050:leading-[40px]">
                      Just connect your credit card to our platform, so simple
                    </h1>
                    <div className="self-stretch relative text-lg leading-[160%] font-medium text-slategray z-[1]">
                      Keep track of your finances with our superior features.
                      With reliable tools, you can identify spending patterns,
                      track investment growth, and make decisions.
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-6 px-8 bg-ffffff shadow-[0px_12px_64px_rgba(26,_59,_174,_0.04)] rounded-981xl overflow-hidden flex flex-row items-start justify-start gap-[13px] z-[1]">
                    <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                      <b className="relative text-base tracking-[2px] leading-[100%] uppercase font-degular text-d48 text-center">
                        Try 30 day trial
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[2440px] w-px relative box-border border-[0.3px] border-dashed border-slateblue-200" />
      </div>
    </section>
  );
};

Proposition.propTypes = {
  className: PropTypes.string,
};

export default Proposition;
