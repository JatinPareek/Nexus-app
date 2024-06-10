import HeroSection from "../components/HeroSection";
import Companies from "../components/Companies";
import ValueProposition from "../components/ValueProposition";
import Proposition from "../components/Proposition";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const Preview = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-row items-start justify-start px-0 pb-0 box-border leading-[normal] tracking-[normal]">
      <main className="flex-1 bg-gray-100 overflow-hidden flex flex-col items-start justify-start gap-[160px] max-w-full shrink-0 mq450:gap-[40px] mq750:gap-[80px]">
        <HeroSection />
        <Companies />
        <ValueProposition />
        <Proposition />
        <FrameComponent2 />
        <FrameComponent1 />
        <FrameComponent />
        <section className="self-stretch box-border overflow-hidden flex flex-row items-start justify-between pt-[62px] px-20 pb-16 max-w-full gap-[20px] text-center text-sm text-d48 font-degular border-t-[1px] border-solid border-gray-800 mq750:pl-10 mq750:pr-10 mq750:box-border mq1050:flex-wrap mq1050:justify-center">
          <div className="h-[17px] w-[243px] relative tracking-[2px] leading-[120%] uppercase font-medium flex items-center justify-center">
            © Copyright 2024 Nexus Inc.
          </div>
          <div className="w-[400px] flex flex-row items-start justify-center gap-[78px] max-w-full mq450:flex-wrap mq450:gap-[39px]">
            <div className="h-[17px] flex-1 relative tracking-[2px] leading-[120%] uppercase font-medium flex items-center justify-center min-w-[112px]">
              All Rights Reserved
            </div>
            <div className="h-[17px] w-[150px] relative tracking-[2px] leading-[120%] uppercase font-medium flex items-center justify-center">
              Designed by Slab!
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Preview;
