import { useEffect } from "react";

const Innovate = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="w-full relative bg-white h-[460.875rem] overflow-hidden text-center text-[1.125rem] text-slategray font-roboto">
      <main className="absolute top-[29.563rem] left-[0rem] w-[120rem] h-[392.563rem]">
        <section className="absolute top-[-28.562rem] left-[-28.75rem] w-[178.875rem] h-[546.813rem]">
          <div className="absolute top-[12.063rem] left-[0rem] [filter:blur(300px)] rounded-[50%] bg-honeydew w-[49.813rem] h-[49.813rem]" />
          <div className="absolute top-[82.438rem] left-[120.688rem] [filter:blur(300px)] rounded-[50%] bg-blueviolet-100 w-[49.813rem] h-[49.813rem]" />
          <div className="absolute top-[154.625rem] left-[52.813rem] [filter:blur(300px)] rounded-[50%] bg-blueviolet-100 w-[49.813rem] h-[49.813rem]" />
          <div className="absolute top-[301.75rem] left-[7.563rem] [filter:blur(300px)] rounded-[50%] bg-blueviolet-100 w-[49.813rem] h-[49.813rem]" />
          <div className="absolute top-[432.375rem] left-[122.375rem] [filter:blur(300px)] rounded-[50%] bg-blueviolet-200 w-[49.813rem] h-[49.813rem]" />
          <div className="absolute top-[10.875rem] left-[54.625rem] [filter:blur(300px)] rounded-[50%] bg-goldenrod-100 w-[49.813rem] h-[49.813rem]" />
          <div className="absolute top-[41.063rem] left-[108.375rem] [filter:blur(300px)] rounded-[50%] bg-goldenrod-300 w-[49.813rem] h-[49.813rem]" />
          <div className="absolute top-[110.688rem] left-[0.375rem] [filter:blur(300px)] rounded-[50%] bg-goldenrod-200 w-[49.813rem] h-[49.813rem]" />
          <div className="absolute top-[497rem] left-[114.313rem] [filter:blur(300px)] rounded-[50%] bg-goldenrod-200 w-[49.813rem] h-[49.813rem]" />
          <div className="absolute top-[179.188rem] left-[129.063rem] [filter:blur(300px)] rounded-[50%] bg-goldenrod-200 w-[49.813rem] h-[49.813rem]" />
          <div className="absolute top-[235.875rem] left-[33.813rem] [filter:blur(300px)] rounded-[50%] bg-goldenrod-300 w-[49.813rem] h-[49.813rem]" />
          <div className="absolute top-[299.875rem] left-[117.813rem] [filter:blur(300px)] rounded-[50%] bg-goldenrod-300 w-[49.813rem] h-[49.813rem]" />
          <div className="absolute top-[394.313rem] left-[37.5rem] [filter:blur(300px)] rounded-[50%] bg-goldenrod-300 w-[49.813rem] h-[49.813rem]" />
          <div className="absolute top-[491rem] left-[10.5rem] [filter:blur(300px)] rounded-[50%] bg-blueviolet-300 w-[49.813rem] h-[49.813rem]" />
          <div className="absolute top-[0rem] left-[28.75rem] [backdrop-filter:blur(30px)] bg-gray-700 w-[120rem] h-[407.125rem]" />
        </section>
      </main>
      <footer className="absolute top-[421.438rem] left-[-0.125rem] w-[120rem] h-[39.438rem] text-left text-[1.125rem] text-slategray font-nunito">
        <footer className="absolute top-[0rem] left-[0rem] bg-gray-600 w-[120rem] h-[39.438rem]" />
        <div className="absolute top-[0rem] left-[0rem] bg-gray-100 w-[120rem] h-[39.438rem] opacity-[0.02]" />
        <button className="absolute text-[1rem] top-[33.875rem] left-[88.25rem] leading-[180%] rounded-lg w-[9rem] h-[2rem] capitalize opacity-[0.9] bg-transparent text-black hover:bg-red-500 hover:text-white transition duration-300">
        Terms & condition
        </button>
        <button className="absolute text-[1rem] top-[33.875rem] left-[71.563rem] leading-[180%] rounded-lg w-[8rem] h-[2rem] capitalize opacity-[0.9] bg-transparent text-black hover:bg-red-500 hover:text-white transition duration-300">
          Privacy policy
        </button>

        <div className="absolute top-[33.875rem] left-[23.438rem] leading-[180%] capitalize opacity-[0.9]">
          @2024 Innovate.All rights reserved.
        </div>
        <div className="absolute top-[8.75rem] left-[88.563rem] w-[100rem] h-[13.375rem] text-[1.25rem]">
          <div className="absolute top-[5.125rem] left-[0] w-[20rem] h-[8.25rem] opacity-[0.8]">
            <button className="relative group">
              <div className="absolute w-[12rem] top-[-1.400rem] left-[-0.700rem] leading-[120%] capitalize font-semibold text-darkslategray-200 text-[1.260rem] font-open-sans group-hover:text-red-300 transition-colors duration-300 ease-in-out">
                Customer service
              </div>
              <div className="absolute inset-0 bg-chocolate opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out rounded-full"></div>
            </button>
            <button className="relative group">
              <div className="absolute w-[12rem] top-[2.100rem] left-[-3.100rem] leading-[120%] capitalize font-semibold text-darkslategray-200 text-[1.260rem] font-open-sans group-hover:text-red-300 transition-colors duration-300 ease-in-out">
                Accessibility
              </div>
              <div className="absolute inset-0 bg-chocolate opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out rounded-full"></div>
            </button>
            <button className="relative group">
              <div className="absolute w-[12rem] top-[5.400rem] left-[-4.200rem] leading-[120%] capitalize font-semibold text-darkslategray-200 text-[1.260rem] font-open-sans group-hover:text-red-300 transition-colors duration-300 ease-in-out">
                Contact Us
              </div>
              <div className="absolute inset-0 bg-chocolate opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out rounded-full"></div>
            </button>
          </div>

          <div className="absolute top-[0rem] left-[0rem] text-[1.5rem] leading-[140%] capitalize font-semibold font-open-sans text-darkslategray-200">
            Support
          </div>
        </div>

        <div className="absolute top-[8.75rem] left-[70.938rem] w-[15.438rem] h-[13.375rem] text-[1.25rem]">
          <div className="absolute top-[5.125rem] left-[0rem] w-[10rem] h-[8.25rem] opacity-[0.8]">
            <button className="relative group ">
              <div className="absolute w-[12rem] top-[-1.400rem] left-[0rem] leading-[120%] capitalize font-semibold text-darkslategray-200 text-[1.260rem] font-open-sans group-hover:text-red-300 transition-colors duration-300 ease-in-out">
                Task Management
              </div>
              <div className="absolute inset-0 bg-chocolate opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out rounded-full"></div>
            </button>
            <button className="relative group ">
              <div className="absolute w-[12rem] top-[1.970rem] left-[-0.820rem] leading-[120%] capitalize font-semibold text-darkslategray-200 text-[1.260rem] font-open-sans group-hover:text-red-300 transition-colors duration-300 ease-in-out">
                Company growth
              </div>
              <div className="absolute inset-0 bg-chocolate opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out rounded-full"></div>
            </button>
            <button className="relative group ">
              <div className="absolute w-[12rem] top-[5.300rem] left-[-2.600rem] leading-[120%] capitalize font-semibold text-darkslategray-200 text-[1.260rem] font-open-sans group-hover:text-red-300 transition-colors duration-300 ease-in-out">
                Time tracking
              </div>
              <div className="absolute inset-0 bg-chocolate opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out rounded-full"></div>
            </button>
          </div>
          <div className="absolute top-[0rem] left-[0.450rem] text-[1.5rem] leading-[140%] capitalize font-semibold font-open-sans text-darkslategray-200">
            Products
          </div>
        </div>
        <div className="absolute top-[8.75rem] left-[57.313rem] w-[6.375rem] h-[20.125rem] text-[1.25rem]">
          <div className="absolute top-[3.800rem] left-[0.100rem] w-[3.938rem] h-[10rem] opacity-[0.8]">
            <button className="relative group">
              <div className="absolute top-[0rem] left-[0rem] leading-[120%] capitalize font-semibold text-darkslategray-200 text-[1.260rem] font-open-sans group-hover:text-red-300 transition-colors duration-300 ease-in-out">
                Home
              </div>
              <div className="absolute inset-0 bg-chocolate opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out rounded-full"></div>
            </button>
            <button className="relative group">
              <div className="absolute top-[3.500rem] left-[-0.800rem] leading-[120%] capitalize font-semibold text-darkslategray-200 text-[1.260rem] font-open-sans group-hover:text-red-300 transition-colors duration-300 ease-in-out">
                About
              </div>
              <div className="absolute inset-0 bg-chocolate opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out rounded-full"></div>
            </button>
            <button className="relative group">
              <div className="absolute top-[6.850rem] left-[-1.650rem] leading-[120%] capitalize font-semibold text-darkslategray-200 text-[1.260rem] font-open-sans group-hover:text-red-300 transition-colors duration-300 ease-in-out">
                Benifit
              </div>
              <div className="absolute inset-0 bg-chocolate opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out rounded-full"></div>
            </button>
            <button className="relative group">
              <div className="absolute top-[10.300rem] left-[-2.450rem] leading-[120%] capitalize font-semibold text-darkslategray-200 text-[1.260rem] font-open-sans group-hover:text-red-300 transition-colors duration-300 ease-in-out">
                Pricing
              </div>
              <div className="absolute inset-0 bg-chocolate opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out rounded-full"></div>
            </button>
            <button className="relative group">
              <div className="absolute top-[13.400rem] left-[-3.200rem] leading-[120%] capitalize font-semibold text-darkslategray-200 text-[1.260rem] font-open-sans group-hover:text-red-300 transition-colors duration-300 ease-in-out">
                Blog
              </div>
              <div className="absolute inset-0 bg-chocolate opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out rounded-full"></div>
            </button>
          </div>
          <div className="absolute top-[0rem] left-[0rem] text-[1.5rem] leading-[140%] capitalize font-semibold font-open-sans text-darkslategray-200">
            Features
          </div>
        </div>
        <div className="absolute top-[16.063rem] left-[23.438rem] leading-[180%] capitalize inline-block w-[28.063rem] opacity-[0.9]">{`Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.`}</div>
        <img
          className="absolute top-[8.75rem] left-[23.563rem] w-[8.438rem] h-[4.563rem] overflow-hidden object-cover"
          alt=""
          src="/logo@2x.png"
        />
      </footer>
      <div className="absolute top-[362.438rem] left-[-0.125rem] w-[120rem] h-[59rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[120rem] h-[59rem]">
          <div className="absolute top-[0rem] left-[0rem] bg-aliceblue-100 w-[120rem] h-[59rem] opacity-[0.1]" />
        </div>
        <main className="absolute top-[22.375rem] left-[23.438rem] w-[73.125rem] h-[29.25rem] text-left text-[1.5rem] text-darkslategray-200 font-work-sans">
          <div className="absolute top-[0rem] left-[25rem] w-[23.125rem] h-[29.25rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[23.125rem] h-[29.25rem]">
              <div className="absolute top-[0rem] left-[0rem] shadow-[0px_28px_70px_rgba(99,_122,_166,_0.1)] rounded-11xl bg-white border-whitesmoke border-[1px] border-solid box-border w-[23.125rem] h-[29.25rem]" />
              <div className="absolute top-[16.938rem] left-[1.875rem] w-[14.25rem] h-[6.5rem]">
                <div className="absolute top-[0rem] left-[0rem] w-[14.25rem] h-[6.5rem]">
                  <div className="absolute top-[0rem] left-[0rem] leading-[2rem] font-medium flex items-center w-[14.25rem]">
                    Online Reputation And Management
                  </div>
                  <div className="absolute top-[5rem] left-[0rem] text-[1.125rem] tracking-[0.5px] leading-[1.5rem] font-nunito text-darkslategray-100 whitespace-pre-wrap">
                    By Amin - 10 Comments
                  </div>
                </div>
              </div>
              <div className="absolute top-[0rem] left-[0rem] rounded-t-xl rounded-b-none bg-silver-100 w-[23.125rem] h-[15.063rem]" />
            </div>
            <button class="cursor-pointer relative p-0 bg-transparent absolute top-[25.313rem] left-[1.875rem] w-[7.125rem] h-[2.063rem]">
              <div class="absolute top-[0rem] left-[0rem] rounded-[50%] bg-chocolate w-[2.063rem] h-[2.063rem] opacity-[0.5] transition-opacity duration-300 ease-in-out hover:opacity-[1]"></div>
              <b class="absolute top-[0.25rem] left-[1rem] text-[1.125rem] leading-[1.5rem] font-open-sans text-gray-300 text-left transition-transform duration-300 ease-in-out hover:translate-x-[2px]">
                Read more
              </b>
            </button>
          </div>
          <div className="absolute top-[0rem] left-[50rem] w-[23.125rem] h-[29.25rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[23.125rem] h-[29.25rem]">
              <div className="absolute top-[0rem] left-[0rem] shadow-[0px_28px_30px_rgba(99,_122,_166,_0.05)] rounded-11xl bg-white border-whitesmoke border-[1px] border-solid box-border w-[23.125rem] h-[29.25rem]" />
              <div className="absolute top-[16.938rem] left-[1.875rem] w-[17rem] h-[6.5rem]">
                <div className="absolute top-[0rem] left-[0rem] leading-[2rem] font-medium flex items-center w-[17rem]">
                  Tips To Move Your Project More Forward
                </div>
                <div className="absolute top-[5rem] left-[0rem] text-[1.125rem] tracking-[0.5px] leading-[1.5rem] font-nunito text-darkslategray-100 whitespace-pre-wrap">
                  By Insider - 15 Comments
                </div>
              </div>
              <div className="absolute top-[0rem] left-[0rem] rounded-t-xl rounded-b-none bg-silver-100 w-[23.125rem] h-[15.063rem]" />
            </div>
            <button class="cursor-pointer relative p-0 bg-transparent absolute top-[25.313rem] left-[1.875rem] w-[7.125rem] h-[2.063rem]">
              <div class="absolute top-[0rem] left-[0rem] rounded-[50%] bg-chocolate w-[2.063rem] h-[2.063rem] opacity-[0.5] transition-opacity duration-300 ease-in-out hover:opacity-[1]"></div>
              <b class="absolute top-[0.25rem] left-[1rem] text-[1.125rem] leading-[1.5rem] font-open-sans text-gray-300 text-left transition-transform duration-300 ease-in-out hover:translate-x-[2px]">
                Read more
              </b>
            </button>
          </div>
          <div className="absolute top-[0rem] left-[0rem] w-[23.125rem] h-[29.25rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[23.125rem] h-[29.25rem]">
              <div className="absolute top-[0rem] left-[0rem] w-[23.125rem] h-[29.25rem]">
                <div className="absolute top-[0rem] left-[0rem] shadow-[0px_28px_30px_rgba(99,_122,_166,_0.05)] rounded-11xl bg-white border-whitesmoke border-[1px] border-solid box-border w-[23.063rem] h-[29.25rem]" />
                <div className="absolute top-[16.938rem] left-[1.875rem] w-[13.938rem] h-[6.5rem]">
                  <div className="absolute top-[0rem] left-[0rem] leading-[2rem] font-medium flex items-center w-[13.938rem]">
                    How to Be Ahead of Stock Changes
                  </div>
                  <div className="absolute top-[5rem] left-[0rem] text-[1.125rem] tracking-[0.5px] leading-[1.5rem] font-nunito text-darkslategray-100 whitespace-pre-wrap">
                    By John - 5 Comments
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[0.063rem] rounded-t-xl rounded-b-none bg-silver-100 w-[23.063rem] h-[15.063rem]" />
              </div>
            </div>
            <button class="cursor-pointer relative p-0 bg-transparent absolute top-[25.313rem] left-[1.875rem] w-[7.125rem] h-[2.063rem]">
              <div class="absolute top-[0rem] left-[0rem] rounded-[50%] bg-chocolate w-[2.063rem] h-[2.063rem] opacity-[0.5] transition-opacity duration-300 ease-in-out hover:opacity-[1]"></div>
              <b class="absolute top-[0.25rem] left-[1rem] text-[1.125rem] leading-[1.5rem] font-open-sans text-gray-300 text-left transition-transform duration-300 ease-in-out hover:translate-x-[2px]">
                Read more
              </b>
            </button>
          </div>
        </main>
        <div className="absolute top-[5rem] left-[47.125rem] w-[25.75rem] h-[14.125rem]">
          <div className="absolute top-[10.375rem] left-[0rem] leading-[1.875rem] inline-block w-[25.75rem]">
            We provide digital experience services to startups and small
            businesses.
          </div>
          <div className="absolute top-[37.61%] left-[5.34%] text-[3rem] font-extrabold font-work-sans text-darkslategray-200 text-left">
            Our Latest Blog
          </div>
          <img
            className="absolute h-[28.76%] w-[29.34%] top-[0%] right-[35.22%] bottom-[71.24%] left-[35.44%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/element@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[325.813rem] left-[-0.125rem] w-[120rem] h-[36.625rem]">
        <div className="absolute top-[0rem] left-[0rem] bg-snow w-[120rem] h-[36.625rem] opacity-[0.1]" />
        <main className="absolute h-[65.87%] w-[60.94%] top-[17.06%] right-[19.53%] bottom-[17.06%] left-[19.53%] text-left text-[1.125rem] text-slategray font-paprika">
          <div className="absolute h-[97.93%] w-[31.62%] top-[0%] right-[34.19%] bottom-[2.07%] left-[34.19%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_30px_60px_rgba(162,_169,_192,_0.1)] rounded-xl bg-lavender" />
              </div>
            </div>
            <div className="absolute h-[82.8%] w-[75.41%] top-[6.61%] right-[13.78%] bottom-[10.58%] left-[10.81%]">
              <div className="absolute h-[67.09%] w-[96.77%] top-[0%] right-[3.23%] bottom-[32.91%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute w-full top-[0%] left-[0%] leading-[1.875rem] flex items-center">{`Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. `}</div>
                </div>
              </div>
              <div className="absolute h-[30.03%] w-full top-[69.97%] right-[0%] bottom-[0%] left-[0%] text-center text-[1.5rem] text-gray-300 font-open-sans">
                <div className="absolute h-[70.21%] w-[56.83%] top-[14.89%] right-[0%] bottom-[14.89%] left-[43.17%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <div className="absolute top-[0%] left-[0%] tracking-[0.4px] font-semibold">
                      Jane Cooper
                    </div>
                    <div className="absolute top-[62.12%] left-[0%] text-[1.125rem] tracking-[0.5px]">
                      Fashion Designer
                    </div>
                  </div>
                </div>
                <img
                  className="absolute top-[0rem] left-[0rem] w-[6.875rem] h-[5.875rem] object-cover transition-transform duration-300 hover:animate-pulse"
                  alt=""
                  src="/group-10000068321@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute h-[97.93%] w-[31.62%] top-[0%] right-[0%] bottom-[2.07%] left-[68.38%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_30px_60px_rgba(162,_169,_192,_0.1)] rounded-xl bg-white" />
              </div>
            </div>
            <div className="absolute h-[82.8%] w-[75.14%] top-[6.61%] right-[14.05%] bottom-[10.58%] left-[10.81%]">
              <div className="absolute h-[67.09%] w-[97.12%] top-[0%] right-[2.88%] bottom-[32.91%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute w-full top-[0%] left-[0%] leading-[1.875rem] flex items-center">{`Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. `}</div>
                </div>
              </div>
              <div className="absolute h-[30.03%] w-full top-[69.97%] right-[0%] bottom-[0%] left-[0%] text-center text-[1.5rem] text-gray-300 font-open-sans">
                <div className="absolute h-[70.21%] w-[56.83%] top-[14.89%] right-[0%] bottom-[14.89%] left-[43.17%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <div className="absolute top-[0%] left-[0%] tracking-[0.4px] font-semibold">
                      Eleanor Pena
                    </div>
                    <div className="absolute top-[62.12%] left-[0%] text-[1.125rem] tracking-[0.5px]">
                      Architecture
                    </div>
                  </div>
                </div>
                <img
                  className="absolute top-[0rem] left-[0rem] w-[6.875rem] h-[5.875rem] object-cover transition-transform duration-300 hover:animate-pulse"
                  alt=""
                  src="/group-10000068321@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[0rem] left-[0rem] w-[21.75rem] h-[24.125rem]">
            <div className="absolute top-[0rem] left-[0.125rem] w-[21.625rem] h-[19.75rem]">
              <div className="absolute top-[0rem] left-[0rem] w-[21.625rem] h-[19.75rem]">
                <div className="absolute top-[0rem] left-[0rem] w-[21.625rem] h-[19.75rem]">
                  <div className="absolute top-[5.063rem] left-[0rem] w-[21.625rem] h-[14.688rem]">
                    <div className="absolute top-[5.313rem] left-[0rem] leading-[1.875rem] whitespace-pre-wrap inline-block w-[20.688rem]">{`people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  `}</div>
                    <div className="absolute top-[0%] left-[0%] text-[3rem] tracking-[0.5px] font-extrabold font-open-sans text-gray-400">
                      Client Review
                    </div>
                  </div>
                  <img
                    className="absolute h-[20.51%] w-[34.94%] top-[0%] right-[65.06%] bottom-[79.49%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/group-1000006787@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[20.125rem] left-[0rem] w-[9.563rem] h-[4rem]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[5.563rem] w-[4rem] h-[4rem] transition-transform duration-300 hover:animate-pulse">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-chocolate w-[4rem] h-[4rem]" />
                <img
                  className="absolute top-[0.688rem] left-[0.688rem] w-[2.625rem] h-[2.625rem] overflow-hidden object-cover"
                  alt=""
                  src="/icoutlinenavigatenext@2x.png"
                />
              </button>
              <img
                className="absolute top-[0rem] left-[0rem] w-[4rem] h-[4rem]"
                alt=""
                src="/group-1000006838.svg"
              />
            </div>
          </div>
        </main>
      </div>
      <div className="absolute top-[236.188rem] left-[-0.125rem] w-[120rem] h-[89.375rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[120rem] h-[89.375rem]">
          <div className="absolute top-[0rem] left-[0rem] bg-gray-200 w-[120rem] h-[89.375rem] opacity-[0.1]" />
        </div>
        <div className="absolute top-[5rem] left-[23.375rem] w-[73.313rem] h-[78.125rem]">
          <div className="absolute top-[0rem] left-[19.875rem] w-[33.688rem] h-[14.125rem]">
            <div className="absolute top-[10.375rem] left-[3.938rem] leading-[1.875rem] inline-block w-[25.75rem]">
              We provide digital experience services to startups and small
              businesses.
            </div>
            <div className="absolute top-[35.84%] left-[0%] text-[3rem] font-extrabold font-open-sans text-gray-400 text-left">
              Our creative process.
            </div>
            <img
              className="absolute h-[28.76%] w-[22.43%] top-[0%] right-[38.98%] bottom-[71.24%] left-[38.59%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/element@2x.png"
            />
          </div>
          <main className="absolute h-[77.76%] w-full top-[22.24%] right-[0%] bottom-[0%] left-[0%] text-left text-[1.125rem] text-gray-300 font-open-sans">
            <div className="absolute h-[33.33%] w-[99.32%] top-[33.33%] right-[0.68%] bottom-[33.33%] left-[0%]">
              <div className="absolute h-[63.89%] w-[39.91%] top-[18.21%] right-[0%] bottom-[17.9%] left-[60.09%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_30px_60px_rgba(162,_169,_192,_0.1)] rounded-xl bg-lavender" />
                <div className="absolute top-[1.5rem] left-[1.5rem] w-[22.25rem] h-[10.188rem]">
                  <div className="absolute top-[3.125rem] left-[0rem] text-[1.875rem] leading-[2rem] font-semibold">
                    Social media integration
                  </div>
                  <div className="absolute top-[6.375rem] left-[0rem] leading-[1.875rem] font-roboto text-slategray inline-block w-[22.25rem] h-[3.813rem]">
                    Practical tools and features make it easier to build and
                    manage your site.
                  </div>
                  <div className="absolute top-[0rem] left-[0rem] w-[4.5rem] h-[2rem]">
                    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-chocolate w-[2.063rem] h-[2rem] opacity-[0.5]" />
                    <b className="absolute top-[0.244rem] left-[1rem] leading-[1.5rem] inline-block w-[3.5rem] h-[1.456rem]">
                      Step-2
                    </b>
                  </div>
                </div>
              </div>
              <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-silver-100 w-[35.625rem] h-[20.25rem]" />
            </div>
            <div className="absolute h-[33.33%] w-full top-[66.67%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-[63.89%] w-[39.64%] top-[18.21%] right-[60.36%] bottom-[17.9%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_30px_60px_rgba(162,_169,_192,_0.1)] rounded-xl bg-seashell" />
                <div className="absolute top-[1.5rem] left-[1.5rem] w-[23.625rem] h-[10.188rem]">
                  <div className="absolute top-[3.125rem] left-[0rem] text-[1.875rem] leading-[2rem] font-semibold">
                    Launching the Application
                  </div>
                  <div className="absolute top-[6.375rem] left-[0rem] leading-[1.875rem] font-roboto text-slategray inline-block w-[22.25rem] h-[3.813rem]">
                    Practical tools and features make it easier to build and
                    manage your site.
                  </div>
                  <div className="absolute top-[0rem] left-[0rem] w-[4.5rem] h-[2rem]">
                    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-chocolate w-[2.063rem] h-[2rem] opacity-[0.5]" />
                    <b className="absolute top-[0.244rem] left-[1rem] leading-[1.5rem] inline-block w-[3.5rem] h-[1.456rem]">
                      Step-3
                    </b>
                  </div>
                </div>
              </div>
              <div className="absolute top-[0rem] left-[37.688rem] rounded-xl bg-silver-100 w-[35.625rem] h-[20.25rem]" />
            </div>
            <div className="absolute h-[33.33%] w-[99.57%] top-[0%] right-[0.43%] bottom-[66.67%] left-[0%]">
              <div className="absolute h-[63.89%] w-[39.81%] top-[18.21%] right-[60.19%] bottom-[17.9%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_30px_60px_rgba(162,_169,_192,_0.1)] rounded-xl bg-honeydew" />
                <div className="absolute top-[1.5rem] left-[1.5rem] w-[22.25rem] h-[10.188rem]">
                  <div className="absolute top-[3.125rem] left-[0rem] text-[1.875rem] leading-[2rem] font-semibold inline-block w-[18.688rem] h-[2rem]">
                    Global SEO Research
                  </div>
                  <div className="absolute top-[6.375rem] left-[0rem] leading-[1.875rem] font-roboto text-slategray inline-block w-[22.25rem] h-[3.813rem]">
                    Practical tools and features make it easier to build and
                    manage your site.
                  </div>
                  <div className="absolute top-[0rem] left-[0rem] w-[4.5rem] h-[2rem]">
                    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-chocolate w-[2.063rem] h-[2rem] opacity-[0.5]" />
                    <b className="absolute top-[0.244rem] left-[1rem] leading-[1.5rem] inline-block w-[3.5rem] h-[1.456rem]">
                      Step-1
                    </b>
                  </div>
                </div>
              </div>
              <div className="absolute top-[0rem] left-[37.375rem] rounded-xl bg-silver-100 w-[35.625rem] h-[20.25rem]" />
            </div>
          </main>
        </div>
      </div>
      <div className="absolute top-[157.25rem] left-[-0.125rem] w-[120rem] h-[78.938rem]">
        <div className="absolute top-[0rem] left-[0rem] bg-aliceblue-200 w-[120rem] h-[78.938rem] opacity-[0.1]" />
        <main className="absolute h-[85.75%] w-[64.38%] top-[6.33%] right-[19.53%] bottom-[7.92%] left-[16.09%] text-left text-[3rem] text-gray-400 font-open-sans">
          <div className="absolute h-[13.48%] w-[32.28%] top-[0%] right-[30.5%] bottom-[86.52%] left-[37.22%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-[44.52%] w-full top-[55.48%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute top-[0%] left-[0%] tracking-[0.5px] font-extrabold">{`Work Showcase `}</div>
                </div>
                <img
                  className="absolute h-[44.38%] w-[30.3%] top-[0%] right-[32.36%] bottom-[55.62%] left-[37.34%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/group-1000006787@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[11.563rem] left-[0rem] w-[77.25rem] h-[56.125rem]">
            <main className="absolute top-[5.75rem] left-[4.125rem] w-[73.125rem] h-[50.375rem]">
              <div className="absolute top-[0rem] left-[56.25rem] rounded-xl bg-silver-100 w-[16.875rem] h-[21.5rem]" />
              <div className="absolute top-[23.375rem] left-[50rem] rounded-xl bg-silver-100 w-[23.125rem] h-[27rem]" />
              <div className="absolute top-[23.375rem] left-[27.688rem] rounded-xl bg-silver-100 w-[20.438rem] h-[27rem]" />
              <div className="absolute top-[23.375rem] left-[0rem] rounded-xl bg-silver-100 w-[25.813rem] h-[27rem]" />
              <div className="absolute top-[0rem] left-[19.125rem] rounded-xl bg-silver-100 w-[35.063rem] h-[21.5rem]" />
              <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-silver-100 w-[17.25rem] h-[21.5rem]" />
            </main>
            <div className="absolute top-[0rem] left-[0rem] w-[53.875rem] h-[3rem]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[0rem] w-[53.875rem] h-[3rem]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[0rem] w-[6.938rem] h-[3rem] transition-transform duration-300 hover:animate-pulse">
                  <div className="absolute top-[0rem] left-[1rem] bg-aliceblue-100 w-[6.938rem] h-[3rem] rounded-lg" />
                  <div className="absolute top-[16.67%] left-[59.46%] text-[1.5rem] tracking-[0.5px] leading-[2rem] capitalize font-semibold font-open-sans text-chocolate text-center">
                    All
                  </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[27.75rem] w-[11.25rem] h-[3rem] transition-transform duration-300 hover:animate-pulse">
                  <div className="absolute top-[0rem] left-[0rem] bg-aliceblue-200 w-[11.25rem] h-[3rem]" />
                  <div className="absolute top-[16.67%] left-[8.33%] text-[1.5rem] tracking-[0.5px] leading-[2rem] capitalize font-semibold font-open-sans text-slategray text-center">
                    Content Mkt
                  </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[17.875rem] w-[8.313rem] h-[3rem] transition-transform duration-300 hover:animate-pulse">
                  <div className="absolute top-[0rem] left-[0rem] bg-aliceblue-200 w-[7.875rem] h-[3rem]" />
                  <div className="absolute top-[16.67%] left-[17.29%] text-[1.5rem] tracking-[0.5px] leading-[2rem] capitalize font-semibold font-open-sans text-slategray text-center">
                    Branding
                  </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[8.563rem] w-[9.313rem] h-[3rem] transition-transform duration-300 hover:animate-pulse">
                  <div className="absolute top-[0rem] right-[0.475rem] bg-aliceblue-200 w-[9.25rem] h-[3rem]" />
                  <div className="absolute top-[16.67%] left-[0%] text-[1.5rem] tracking-[0.5px] leading-[2rem] capitalize font-semibold font-open-sans text-slategray text-center">
                    Digital Mkt
                  </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[40rem] w-[13.875rem] h-[3rem] transition-transform duration-300 hover:animate-pulse">
                  <div className="absolute top-[0rem] left-[0rem] bg-aliceblue-200 w-[13.875rem] h-[3rem]" />
                  <div className="absolute top-[16.67%] left-[4.05%] text-[1.5rem] tracking-[0.5px] leading-[2rem] capitalize font-semibold font-open-sans text-slategray text-center">
                    Social Media Mkt
                  </div>
                </button>
              </button>
            </div>
          </div>
        </main>
      </div>
      <div className="absolute top-[111.938rem] left-[-0.125rem] w-[120rem] h-[45.313rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[120rem] h-[45.313rem]">
          <div className="absolute top-[0rem] left-[0rem] bg-snow w-[120rem] h-[45.313rem] opacity-[0.1]" />
        </div>
        <section className="absolute top-[6.25rem] left-[22.75rem] w-[69.563rem] h-[34.063rem] text-left text-[1.125rem] text-slategray font-paprika">
          <div className="absolute top-[0rem] left-[40.25rem] w-[29.313rem] h-[30.438rem]">
            <div className="absolute top-[10.063rem] left-[1.688rem] leading-[1.875rem] inline-block w-[27.625rem]">{`We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, `}</div>
            <div className="absolute top-[16.63%] left-[5.76%] text-[3rem] tracking-[0.5px] font-extrabold font-open-sans text-gray-400">
              Who We Are
            </div>
            <img
              className="absolute h-[13.31%] w-[25.78%] top-[0%] right-[68.46%] bottom-[86.69%] left-[5.76%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/group-1000006787@2x.png"
            />
            <div className="absolute top-[22.75rem] left-[0rem] w-[28.25rem] h-[7.688rem]">
              <div className="absolute top-[4.063rem] left-[0rem] w-[28.25rem] h-[3.625rem]">
                <div className="absolute top-[0rem] left-[19.65rem] w-[8.6rem] h-[3.625rem]">
                  <div className="absolute top-[0rem] left-[0rem] w-[8.6rem] h-[3.625rem]">
                    <div className="absolute top-[0rem] left-[0rem] bg-silver-200 w-[8.6rem] h-[3.625rem]" />
                    <div className="absolute h-[26.38%] w-[66.64%] top-[36.72%] right-[16.64%] bottom-[36.9%] left-[16.72%] overflow-hidden">
                      <img
                        className="absolute h-[72.55%] w-[21.37%] top-[13.73%] right-[78.63%] bottom-[13.73%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/vector@2x.png"
                      />
                      <img
                        className="absolute h-full w-[72.41%] top-[0%] right-[0%] bottom-[0%] left-[27.59%] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/group@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[9.825rem] w-[8.6rem] h-[3.625rem]">
                  <div className="absolute top-[0rem] left-[0rem] w-[8.6rem] h-[3.625rem]">
                    <div className="absolute top-[0rem] left-[0rem] bg-silver-200 w-[8.6rem] h-[3.625rem]" />
                    <div className="absolute h-[29.31%] w-[60.9%] top-[35.52%] right-[19.55%] bottom-[35.17%] left-[19.55%] overflow-hidden">
                      <img
                        className="absolute h-full w-[27.92%] top-[0%] right-[72.08%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/vector1@2x.png"
                      />
                      <img
                        className="absolute h-[90%] w-[65.51%] top-[5.29%] right-[0%] bottom-[4.71%] left-[34.49%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/group.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[0rem] w-[8.6rem] h-[3.625rem]">
                  <div className="absolute top-[0rem] left-[0rem] w-[8.6rem] h-[3.625rem]">
                    <div className="absolute top-[0rem] left-[0rem] bg-silver-200 w-[8.6rem] h-[3.625rem]" />
                    <div className="absolute top-[1.206rem] left-[2.05rem] w-[4.506rem] h-[1.175rem] overflow-hidden">
                      <img
                        className="absolute h-full w-[27.6%] top-[0%] right-[72.4%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector.svg"
                      />
                      <img
                        className="absolute h-[65.96%] w-[63.66%] top-[16.49%] right-[0.14%] bottom-[17.55%] left-[36.2%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/group1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[0rem] left-[0rem] w-[28.25rem] h-[3.688rem]">
                <div className="absolute top-[0rem] left-[19.65rem] w-[8.6rem] h-[3.688rem]">
                  <div className="absolute top-[0rem] left-[0rem] w-[8.6rem] h-[3.688rem]">
                    <div className="absolute top-[0rem] left-[0rem] bg-silver-200 w-[8.6rem] h-[3.688rem]" />
                    <div className="absolute h-[28.31%] w-[52.4%] top-[35.59%] right-[23.76%] bottom-[36.1%] left-[23.84%] overflow-hidden">
                      <img
                        className="absolute h-full w-[28.16%] top-[0%] right-[71.84%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector2.svg"
                      />
                      <img
                        className="absolute h-[71.26%] w-[62%] top-[14.37%] right-[0%] bottom-[14.37%] left-[38%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/group2.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[9.825rem] w-[8.6rem] h-[3.688rem]">
                  <div className="absolute top-[0rem] left-[0rem] w-[8.6rem] h-[3.688rem]">
                    <div className="absolute top-[0rem] left-[0rem] bg-silver-200 w-[8.6rem] h-[3.688rem]" />
                    <div className="absolute h-[40.17%] w-[60.9%] top-[30%] right-[19.55%] bottom-[29.83%] left-[19.55%] overflow-hidden">
                      <img
                        className="absolute h-full w-[33.65%] top-[0%] right-[66.35%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector3.svg"
                      />
                      <img
                        className="absolute h-[42.62%] w-[60.62%] top-[22.78%] right-[0%] bottom-[34.6%] left-[39.38%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/group3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[0rem] w-[8.6rem] h-[3.688rem]">
                  <div className="absolute top-[0rem] left-[0rem] w-[8.6rem] h-[3.688rem]">
                    <div className="absolute top-[0rem] left-[0rem] bg-silver-200 w-[8.6rem] h-[3.688rem]" />
                    <div className="absolute h-[35.59%] w-[60.9%] top-[32.2%] right-[19.55%] bottom-[32.2%] left-[19.55%] overflow-hidden">
                      <img
                        className="absolute h-full w-[32.7%] top-[0%] right-[67.3%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector4.svg"
                      />
                      <img
                        className="absolute h-[58.57%] w-[59.31%] top-[20.48%] right-[0%] bottom-[20.95%] left-[40.69%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/group4.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[21.5rem] left-[1.75rem] text-[0.75rem]">{`Join the 10.000+ Companys Trusting `}</div>
          </div>
          <img
            className="absolute h-full w-[48.7%] top-[0%] right-[51.3%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/images@2x.png"
          />
        </section>
      </div>
      <div className="absolute top-[60rem] left-[-0.125rem] w-[120rem] h-[51.938rem]">
        <div className="absolute top-[0rem] left-[0rem] bg-white w-[120rem] h-[51.938rem] opacity-[0.1]" />
        <main className="absolute h-[80.87%] w-[60.94%] top-[7.22%] right-[19.53%] bottom-[11.91%] left-[19.53%] text-center text-[1.125rem] text-slategray font-paprika">
          <div className="absolute h-[21.43%] w-[28.38%] top-[12.05%] right-[35.81%] bottom-[66.52%] left-[35.81%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute w-full top-[55.56%] left-[0%] leading-[2rem] flex items-center justify-center">
                We have been providing great flooring solutions service.
              </div>
              <div className="absolute top-[0%] left-[4.22%] text-[3rem] tracking-[0.5px] font-extrabold font-open-sans text-gray-400 text-left">
                Our Services
              </div>
            </div>
          </div>
          <img
            className="absolute h-[9.64%] w-[10.33%] top-[0%] right-[44.79%] bottom-[90.36%] left-[44.87%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/group-1000006787@2x.png"
          />
          <div className="absolute h-[58.78%] w-full top-[41.22%] right-[0%] bottom-[0%] left-[0%] text-gray-300 font-open-sans">
            <div className="absolute h-full w-[31.62%] top-[0%] right-[68.38%] bottom-[0%] left-[0%] text-gray-500">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_30px_60px_rgba(162,_169,_192,_0.1)] rounded-xl bg-honeydew" />
              </div>
              <div className="absolute h-[73.67%] w-[74.32%] top-[13.16%] right-[12.7%] bottom-[13.16%] left-[12.97%]">
                <div className="absolute top-[31.62%] left-[0%] text-[1.875rem] leading-[2.25rem] font-semibold">
                  <span className="uppercase">M</span>
                  <span className="lowercase">ARKETING STRATEGY</span>
                </div>
                <div className="absolute w-[93.45%] top-[50.86%] left-[3.27%] leading-[1.875rem] font-paprika text-slategray flex items-center justify-center">{`Social Media has changed the way we interact & do business while creating`}</div>
                <button class="cursor-pointer relative p-0 bg-transparent absolute top-[16.125rem] w-[7.125rem] h-[2.063rem]">
                  <div class="absolute top-[0rem] left-[0rem] rounded-[50%] bg-chocolate w-[2.063rem] h-[2.063rem] opacity-[0.5] transition-opacity duration-300 ease-in-out hover:opacity-[1]"></div>
                  <b class="absolute top-[0.25rem] left-[1rem] text-[1.125rem] leading-[1.5rem] font-open-sans text-gray-300 text-left transition-transform duration-300 ease-in-out hover:translate-x-[2px]">
                    Read more
                  </b>
                </button>
                <img
                  className="absolute top-[0rem] left-[6.625rem] w-[4rem] h-[4rem] object-cover"
                  alt=""
                  src="/results-1@2x.png"
                />
              </div>
            </div>
            <div className="absolute h-full w-[31.62%] top-[0%] right-[0%] bottom-[0%] left-[68.38%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_30px_60px_rgba(162,_169,_192,_0.1)] rounded-xl bg-seashell" />
              </div>
              <div className="absolute h-[73.67%] w-[75.14%] top-[13.16%] right-[12.43%] bottom-[13.16%] left-[12.43%]">
                <div className="absolute top-[31.62%] left-[1.08%] text-[1.875rem] leading-[2.25rem] font-semibold">
                  Content Marketing
                </div>
                <div className="absolute w-full top-[45.7%] left-[0%] leading-[1.875rem] font-paprika text-slategray flex items-center justify-center">
                  Content Marketing is the other fold of online advertisement.
                  If you are looking to build
                </div>
                <button class="cursor-pointer relative p-0 bg-transparent absolute top-[16.125rem] w-[7.125rem] h-[2.063rem]">
                  <div class="absolute top-[0rem] left-[0rem] rounded-[50%] bg-chocolate w-[2.063rem] h-[2.063rem] opacity-[0.5] transition-opacity duration-300 ease-in-out hover:opacity-[1]"></div>
                  <b class="absolute top-[0.25rem] left-[1rem] text-[1.125rem] leading-[1.5rem] font-open-sans text-gray-300 text-left transition-transform duration-300 ease-in-out hover:translate-x-[2px]">
                    Read more
                  </b>
                </button>
                <img
                  className="absolute top-[0rem] left-[6.688rem] w-[4rem] h-[4rem] object-cover"
                  alt=""
                  src="/socialmarketing-1@2x.png"
                />
              </div>
            </div>
            <div className="absolute h-full w-[31.62%] top-[0%] right-[34.19%] bottom-[0%] left-[34.19%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_30px_60px_rgba(162,_169,_192,_0.15)] rounded-xl bg-lavender" />
                </div>
              </div>
              <div className="absolute h-[73.67%] w-[84.32%] top-[13.16%] right-[7.84%] bottom-[13.16%] left-[7.84%]">
                <div className="absolute top-[31.62%] left-[11.54%] text-[1.875rem] leading-[2.25rem] font-semibold">
                  Social Marketing
                </div>
                <div className="absolute w-full top-[50.86%] left-[0%] leading-[1.875rem] font-paprika text-slategray flex items-center justify-center">{`Social Media has changed the way we interact & do business while creating a new avenue.`}</div>
                <button class="cursor-pointer relative p-0 bg-transparent absolute top-[16.125rem] w-[7.125rem] h-[2.063rem]">
                  <div class="absolute top-[0rem] left-[0rem] rounded-[50%] bg-chocolate w-[2.063rem] h-[2.063rem] opacity-[0.5] transition-opacity duration-300 ease-in-out hover:opacity-[1]"></div>
                  <b class="absolute top-[0.25rem] left-[1rem] text-[1.125rem] leading-[1.5rem] font-open-sans text-gray-300 text-left transition-transform duration-300 ease-in-out hover:translate-x-[2px]">
                    Read more
                  </b>
                </button>
                <img
                  className="absolute top-[0rem] left-[7.75rem] w-[4rem] h-[4rem] object-cover"
                  alt=""
                  src="/socialmedia-1@2x.png"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      <div
        className="absolute top-[0rem] left-[-0.125rem] w-[120rem] h-[60rem] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left text-[4.5rem] text-gray-400 font-open-sans"
        data-animate-on-scroll
      >
        <div className="absolute top-[0rem] left-[0rem] w-[120rem] h-[60rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[120.25rem] h-[60rem]">
            <div className="absolute top-[-2.431rem] left-[-22.625rem] w-[153.019rem] h-[62.431rem]">
              <img
                className="absolute top-[2.431rem] left-[91.313rem] w-[51.313rem] h-[60rem]"
                alt=""
                src="/bg-element.svg"
              />
              <div className="absolute h-[97.37%] w-full top-[0%] right-[0%] bottom-[2.63%] left-[0%]">
                <img
                  className="absolute h-[76.61%] w-[29.74%] top-[3.9%] right-[67.16%] bottom-[19.49%] left-[3.1%] max-w-full overflow-hidden max-h-full object-contain"
                  alt=""
                  src="/vector5@2x.png"
                />
                <img
                  className="absolute h-[76.68%] w-[29.77%] top-[2.57%] right-[68.18%] bottom-[20.75%] left-[2.05%] max-w-full overflow-hidden max-h-full object-contain"
                  alt=""
                  src="/vector6@2x.png"
                />
                <img
                  className="absolute h-[76.68%] w-[29.77%] top-[1.24%] right-[69.21%] bottom-[22.07%] left-[1.02%] max-w-full overflow-hidden max-h-full object-contain"
                  alt=""
                  src="/vector7@2x.png"
                />
                <img
                  className="absolute h-[76.61%] w-[29.74%] top-[0%] right-[70.26%] bottom-[23.39%] left-[0%] max-w-full overflow-hidden max-h-full object-contain"
                  alt=""
                  src="/vector8@2x.png"
                />
                <div className="absolute h-[6.54%] w-[5.96%] top-[93.45%] right-[2.38%] bottom-[0.01%] left-[91.66%]">
                  <img
                    className="absolute h-[43.4%] w-[99.93%] top-[56.6%] right-[0%] bottom-[0%] left-[0.07%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group8.svg"
                  />
                  <img
                    className="absolute h-[43.4%] w-[99.93%] top-[0%] right-[0.07%] bottom-[56.6%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group9.svg"
                  />
                </div>
                <img
                  className="absolute h-[73.78%] w-[23.54%] top-[11.51%] right-[0%] bottom-[14.71%] left-[76.46%] max-w-full overflow-hidden max-h-full object-contain"
                  alt=""
                  src="/group-1000006785@2x.png"
                />
              </div>
            </div>
            <img
              className="absolute h-[7.08%] w-[3.53%] top-[78.78%] right-[92.81%] bottom-[14.14%] left-[3.65%] max-w-full overflow-hidden max-h-full object-contain"
              alt=""
              src="/group-1000006861@2x.png"
            />
            <img
              className="absolute h-[7.35%] w-[3.67%] top-[70.21%] right-[44.51%] bottom-[22.44%] left-[51.82%] max-w-full overflow-hidden max-h-full object-contain"
              alt=""
              src="/group5@2x.png"
            />
            <aside className="absolute top-[12rem] left-[87.219rem] shadow-[16px_20px_40px_rgba(47,_147,_253,_0.1)] rounded-41xl bg-silver-100 w-[28.663rem] h-[26.938rem] [transform:_rotate(-0.4deg)] [transform-origin:0_0]" />
            <aside className="absolute top-[26.988rem] left-[69.063rem] rounded-41xl bg-silver-100 border-white border-[8px] border-solid box-border w-[28.863rem] h-[27.119rem] [transform:_rotate(-0.4deg)] [transform-origin:0_0]" />
            <nav className="m-0 absolute top-[1.875rem] left-[23.438rem] w-[73.125rem] h-[4rem]">
              <button className="cursor-pointer border-none py-[0.875rem] px-[1.75rem] bg-chocolate absolute h-full w-[12.91%] top-[0%] right-[-0.21%] bottom-[0%] left-[87.31%] rounded-81xl flex flex-row items-center justify-center box-border transition-transform duration-300 hover:animate-pulse">
                <div className="relative text-[1.125rem] leading-[200%] capitalize font-semibold font-open-sans text-white text-left">
                  Contact Us
                </div>
              </button>
              <img
                className="absolute h-[93.75%] w-[8.8%] top-[3.13%] right-[91.2%] bottom-[3.13%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/logo.svg"
              />
              <div
                className="absolute h-[39.06%] w-[59.06%] top-[30.47%] right-[22.35%] bottom-[30.47%] left-[18.59%] [&.animate]:animate-[1s_ease-in_0s_1_normal_forwards_fade-in] opacity-[0]"
                data-animate-on-scroll
              >
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-full w-[11.43%] top-[0%] right-[88.57%] bottom-[0%] left-[0%] transition-transform duration-300 hover:animate-pulse">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-center justify-center gap-[0.25rem]">
                    <div className="relative text-[1.125rem] font-semibold font-open-sans text-chocolate text-left">
                      Home
                    </div>
                    <img
                      className="w-[1.375rem] relative h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/riarrowdropdownline.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-full w-[11.43%] top-[0%] right-[71.35%] bottom-[0%] left-[17.22%] transition-transform duration-300 hover:animate-pulse">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-center justify-center gap-[0.25rem]">
                    <div className="relative text-[1.125rem] font-semibold font-open-sans text-gray-400 text-left">
                      About
                    </div>
                    <img
                      className="w-[1.375rem] relative h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/riarrowdropdownline.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-full w-[12.74%] top-[0%] right-[52.46%] bottom-[0%] left-[34.8%] transition-transform duration-300 hover:animate-pulse">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-center justify-center gap-[0.25rem]">
                    <div className="relative text-[1.125rem] font-semibold font-open-sans text-gray-400 text-left">
                      Service
                    </div>
                    <img
                      className="w-[1.375rem] relative h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/riarrowdropdownline.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-full w-[14.76%] top-[0%] right-[31.48%] bottom-[0%] left-[53.76%] transition-transform duration-300 hover:animate-pulse">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-center justify-center gap-[0.25rem]">
                    <div className="relative text-[1.125rem] font-semibold font-open-sans text-gray-400 text-left">
                      Portfolio
                    </div>
                    <img
                      className="w-[1.375rem] relative h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/riarrowdropdownline.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-full w-[10.13%] top-[0%] right-[15.27%] bottom-[0%] left-[74.6%] transition-transform duration-300 hover:animate-pulse">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-center justify-center gap-[0.25rem]">
                    <div className="relative text-[1.125rem] font-semibold font-open-sans text-gray-400 text-left">
                      Price
                    </div>
                    <img
                      className="w-[1.375rem] relative h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/riarrowdropdownline.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-full w-[9.26%] top-[0%] right-[0%] bottom-[0%] left-[90.74%] transition-transform duration-300 hover:animate-pulse">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-center justify-center gap-[0.25rem]">
                    <div className="relative text-[1.125rem] font-semibold font-open-sans text-gray-400 text-left">
                      Blog
                    </div>
                    <img
                      className="w-[1.375rem] relative h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/riarrowdropdownline.svg"
                    />
                  </div>
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className="absolute top-[11.063rem] left-[5.313rem] w-[61.188rem] h-[36rem]">
          <div className="absolute top-[2.313rem] left-[18.313rem] w-[42.875rem] h-[33.688rem]">
            <div className="absolute top-[5.438rem] left-[0rem] w-[42.875rem] h-[28.25rem]">
              <div className="absolute top-[0rem] left-[0rem] font-extrabold inline-block w-[42.875rem] h-[12.25rem]">
                <span>{`We Are Digital `}</span>
                <span className="text-chocolate">{`Marketing `}</span>
                <span>Agency</span>
              </div>
              <div className="absolute top-[13.5rem] left-[0rem] text-[1.25rem] leading-[2.25rem] font-paprika text-slategray inline-block w-[35.688rem] h-[8.75rem]">{`Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. `}</div>
              <button className="cursor-pointer [border:none] py-[1.25rem] px-[2.5rem] bg-chocolate absolute top-[24.25rem] left-[0rem] rounded-81xl flex flex-row items-center justify-center transition-transform duration-300 hover:animate-pulse">
                <b className="relative text-[1.25rem] leading-[1.5rem] capitalize font-open-sans text-white text-left">
                  get free quoto
                </b>
              </button>
            </div>
            <img
              className="absolute h-[12.02%] w-[17.62%] top-[0%] right-[82.38%] bottom-[87.98%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-1000006797.svg"
            />
          </div>
          <img
            className="absolute top-[0rem] left-[0rem] w-[12.125rem] h-[15.938rem] object-cover"
            alt=""
            src="/3d-images@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Innovate;
