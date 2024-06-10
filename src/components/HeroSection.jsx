import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Button from "./Button";
import PropTypes from "prop-types";

const HeroSection = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-a3bae overflow-hidden flex flex-row items-start justify-start max-w-full text-center text-53xl text-ffffff font-degular ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
        <header className="self-stretch flex flex-row items-start justify-start relative max-w-full text-center text-6xl text-ffffff font-degular">
          <div className="h-[800px] w-px absolute !m-[0] right-[80px] bottom-[-740px] box-border border-[1px] border-dashed border-gray-400" />
          <div className="flex-1 bg-a3bae flex flex-row items-start justify-between py-10 px-20 box-border max-w-full gap-[20px] z-[1] mq750:pl-10 mq750:pr-10 mq750:box-border mq1050:flex-wrap">
            <div className="flex flex-row items-start justify-start py-0 pr-[61px] pl-0 gap-[40px]">
              <div className="h-20 w-20 shadow-[0px_12px_44px_rgba(26,_59,_174,_0.08)] rounded-81xl bg-ffffff overflow-hidden shrink-0 flex flex-col items-start justify-start py-[35px] px-7 box-border gap-[8px]">
                <div className="w-6 h-px relative bg-a3bae" />
                <div className="w-6 h-px relative bg-a3bae" />
              </div>
              <div className="flex flex-col items-start justify-start pt-7 px-0 pb-0">
                <FormControl
                  className="font-degular font-bold text-base text-ffffff"
                  variant="standard"
                  sx={{
                    borderRadius: "0px 0px 0px 0px",
                    width: "48px",
                    height: "24px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "24px",
                      justifyContent: "center",
                      display: "inline-flex",
                      alignItems: "center",
                      backgroundColor: "#00218D", // Added background color
                      color: "#FFFFFF", // Text color white
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "24px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "24px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "24px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      textAlign: "center", // Center align text
                      p: "0 !important",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                  <Select color="primary" disableUnderline displayEmpty>
                    <option value="EN">EN</option>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
            </div>
            <div className="w-[139px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border">
              <b className="self-stretch relative tracking-[16px] leading-[100%] uppercase font-bold">
                Nexus
              </b>
            </div>
            <div className="w-[228px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                <button className="cursor-pointer [border:none] py-6 px-[29px] bg-[transparent] flex-[0.8125] rounded-981xl flex flex-row items-start justify-start">
                  <b className="relative text-base tracking-[1px] leading-[100%] uppercase font-bold font-degular text-ffffff text-center inline-block min-w-[51px] whitespace-nowrap">
                    Log in
                  </b>
                </button>
                <button className="cursor-pointer [border:none] py-6 px-[23px] bg-gray-300 flex-1 rounded-981xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro-200">
                  <b className="relative text-base tracking-[1px] leading-[100%] uppercase font-bold font-degular text-ffffff text-center inline-block min-w-[63px]">
                    Sign Up
                  </b>
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="w-[1220.1px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative max-w-full">
          <div className="h-[800px] w-px absolute !m-[0] top-[-100px] left-[80px] box-border border-[1px] border-dashed border-gray-400" />
          <div className="h-[600px] w-px absolute !m-[0] bottom-[0px] left-[399.8px] box-border border-[1px] border-dashed border-gray-400" />
          <div className="h-[500px] w-px absolute !m-[0] bottom-[0px] left-[559.6px] box-border border-[1px] border-dashed border-gray-400" />
          <div className="h-[500px] w-px absolute !m-[0] right-[339.7px] bottom-[0px] box-border border-[1px] border-dashed border-gray-400" />
          <div className="h-[600px] w-px absolute !m-[0] right-[179.8px] bottom-[0px] box-border border-[1px] border-dashed border-gray-400" />
          <div className="flex-1 flex flex-row items-start justify-end max-w-full">
            <div className="w-[980.2px] flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border max-w-full gap-[20px] mq1050:flex-wrap">
              <div className="h-[700px] w-px relative box-border border-[1px] border-dashed border-gray-400" />
              <div className="w-[730px] flex flex-col items-start justify-start pt-20 px-0 pb-0 box-border max-w-full mq750:pt-[52px] mq750:box-border">
                <div className="self-stretch flex flex-col items-center justify-center gap-[64px] mq450:gap-[16px] mq750:gap-[32px]">
                  <h1 className="m-0 self-stretch relative text-inherit tracking-[-1px] leading-[104%] font-semibold font-inherit z-[1] mq450:text-24xl mq450:leading-[45px] mq1050:text-39xl mq1050:leading-[60px]">
                    <span>{`Crafting your `}</span>
                    <span className="text-ced7">{`financial `}</span>
                    <span>journey, shaped by your spending habits</span>
                  </h1>
                  <div className="self-stretch h-[331px] flex flex-row items-start justify-center py-0 px-5 box-border">
                    <div className="self-stretch w-[245px] flex flex-col items-start justify-start gap-[51px]">
                      <Button requestDemo="Request Demo" />
                      <div className="self-stretch flex-1 flex flex-row items-start justify-center py-0 px-5">
                        <div className="self-stretch w-px relative box-border border-[1px] border-dashed border-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[700px] w-px relative box-border border-[1px] border-dashed border-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;
