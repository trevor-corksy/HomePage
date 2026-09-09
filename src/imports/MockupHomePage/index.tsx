import imgProperty1Variant4 from "./b97b6be9e8f5f6d44f607247d563532daf0148ce.png";
import imgProperty1Variant5 from "./49801ae1ee1db1f8f9b65943fd870d699da2b6fe.png";
import svgPaths from "./svg-c164a9zv6h";
import imgGradientPinkAccent from "./c777b0098e6d08b15e7a398bb919bea7cb510549.png";
import imgGradientPinkAccent1 from "./c2e2b24db64aca06a0d1a74df8227055f909cd63.png";
import imgCorksy from "./9291ebf7827cbfcaf4db7afd959439356f155f4f.png";
import imgAmapolaCreekWinery1 from "./0c001073f15d2c15c4e2c161983bd2738fe4e567.png";
import imgBledsoeMcDaniels1 from "./f3f633ba165f15c4faa97db808c8ee4b4eea7dca.png";
import imgAmaviCellars1 from "./c42d44cbf93cdad29c61240595da3df8b2fbb9ee.png";
import imgImage3 from "./7776876b92e4f2afad5c7a73fd14faf2cef5f62e.png";
import imgImage5 from "./e6775a2ae661ab82a1a3dd47fed7bd01add4ac97.png";
import imgImage6 from "./d5547f1bc90f1e55e782b1f0fe77ff2a568213ac.png";
import imgBackground from "./7df7fce1eb5c21962b46b3ff897cbd2ac56987f6.png";
import imgBackgroundOverlayBlur from "./ac5d02c59162e5eb85692e6f299828f01deb7a10.png";
import imgConnectedWineryWebsite from "./e6f8439c5c5f4b0b221d2a6822209b53c1eca289.png";
type InnerCtaProps = {
  className?: string;
  property1?: "Variant4";
};

function InnerCta({ className, property1 = "Variant4" }: InnerCtaProps) {
  return (
    <div className={className || "h-[300px] overflow-clip relative rounded-[16px] w-[1280px]"}>
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[16px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgProperty1Variant4} />
        <div className="absolute inset-0 overflow-hidden rounded-[16px]">
          <img alt="" className="absolute h-[149.79%] left-[45.05%] max-w-none top-[3.17%] w-[40.67%]" src={imgProperty1Variant5} />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-[56px] top-[52px]" data-name="Container">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
          <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[34px] text-white tracking-[-1.02px] whitespace-nowrap">
            <p className="leading-[44px] mb-0">Ready to run your winery</p>
            <p className="leading-[44px]">on one platform?</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
          <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.86)] whitespace-nowrap">
            <p className="leading-[26px]">Join 400+ wineries growing with Corksy.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Margin">
          <div className="content-stretch flex gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="bg-[#16141c] content-stretch flex h-[48px] items-center px-[26px] relative rounded-[9px] shrink-0" data-name="Background">
              <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-white whitespace-nowrap">
                <p className="leading-[normal]">Get a demo</p>
              </div>
            </div>
            <div className="content-stretch flex h-[50px] items-center px-[27px] py-px relative rounded-[9px] shrink-0" data-name="Border">
              <div aria-hidden className="absolute border border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-[9px]" />
              <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-white whitespace-nowrap">
                <p className="leading-[normal]">Talk to sales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Corksy() {
  return (
    <div className="h-[24px] relative shrink-0 w-[122.81px]" data-name="Corksy">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.01%] max-w-none top-0 w-[100.01%]" src={imgCorksy} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a4560] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Platform</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a4560] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Why Corksy</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a4560] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Pricing</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a4560] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Resources</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a4560] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Partners</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a4560] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Connect</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[26px] items-start relative shrink-0" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] content-stretch flex h-[44px] items-center px-[19px] py-px relative rounded-[12px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.9)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a4560] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Log in</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="content-stretch drop-shadow-[0px_6px_9px_rgba(148,41,176,0.35)] flex h-[42px] items-center px-[20px] relative rounded-[12px] shrink-0" style={{ backgroundImage: "linear-gradient(135.07883547836056deg, rgb(177, 60, 207) 0%, rgb(148, 41, 176) 100%)" }} data-name="Background+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Book a demo</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <OverlayBorder />
      <BackgroundShadow />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px relative" data-name="Margin">
      <Container7 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="backdrop-blur-[9px] bg-[rgba(255,255,255,0.55)] content-stretch flex gap-[36px] h-[66px] items-center pl-[25px] pr-[13px] py-px relative rounded-[18px] shrink-0 w-[1280px]" data-name="Navigation">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_8px_32px_0px_rgba(83,52,131,0.1)]" />
      <Corksy />
      <Container />
      <Margin />
    </div>
  );
}

function InnerContainer() {
  return (
    <div className="content-stretch flex flex-col items-start shrink-0 sticky top-0 w-full" data-name="Inner Container">
      <Navigation />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[64px] tracking-[-2.24px] w-full">
        <p className="leading-[70px] mb-0">One System.</p>
        <p className="leading-[70px] mb-0">Every Guest.</p>
        <p className="leading-[70px]">Every Sale.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[480px] relative shrink-0 w-[480px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4a4560] text-[19px] whitespace-nowrap">
        <p className="leading-[31px] mb-0">Corksy connects your wine club, point of sale, eCommerce,</p>
        <p className="leading-[31px] mb-0">website, and shipping into one platform — so your team</p>
        <p className="leading-[31px] mb-0">stops babysitting five different tools and starts growing</p>
        <p className="leading-[31px]">the business.</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[normal]">→</p>
      </div>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="content-stretch drop-shadow-[0px_10px_14px_rgba(148,41,176,0.38)] flex gap-[8px] h-[52px] items-center px-[26px] relative rounded-[14px] shrink-0" style={{ backgroundImage: "linear-gradient(135.13278330495547deg, rgb(177, 60, 207) 0%, rgb(148, 41, 176) 100%)" }} data-name="Background+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Book a demo</p>
      </div>
      <Container13 />
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0.65)] content-stretch flex h-[54px] items-center px-[27px] py-px relative rounded-[14px] shrink-0" data-name="Overlay+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.95)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_14px_0px_rgba(83,52,131,0.08)]" />
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2438] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">See Pricing</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow1 />
      <OverlayBorderShadow />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] h-[684px] items-start px-[60px] py-[120px] relative shrink-0 w-[626.927px]" data-name="Container">
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container9 />
    </div>
  );
}

function Hero() {
  return (
    <div className="relative rounded-[28px] shrink-0 w-full" data-name="Hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[28px]">
        <div className="absolute bg-[rgba(255,255,255,0.38)] inset-0 rounded-[28px]" />
        <div className="absolute backdrop-blur-[10px] inset-0 overflow-hidden rounded-[28px]">
          <img alt="" className="absolute h-[125.84%] left-[42.1%] max-w-none top-[9.51%] w-[79.95%]" src={imgProperty1Variant5} />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container8 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.75)] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_20px_60px_0px_rgba(83,52,131,0.12)]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[180px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a716a] text-[18px] w-[229px]">
        <p className="leading-[24px]">Trusted by wineries, wine bars, and retailers across the country</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center justify-center min-w-px relative" data-name="Container">
      <div className="h-[63px] relative shrink-0 w-[97px]" data-name="Amapola Creek Winery 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAmapolaCreekWinery1} />
      </div>
      <div className="h-[28px] relative shrink-0 w-[181px]" data-name="Bledsoe McDaniels 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBledsoeMcDaniels1} />
      </div>
      <div className="h-[52px] relative shrink-0 w-[110px]" data-name="Amavi Cellars 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAmaviCellars1} />
      </div>
      <div className="h-[31px] relative shrink-0 w-[160px]" data-name="image 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[167.57%] left-0 max-w-none top-[8.52%] w-full" src={imgImage3} />
        </div>
      </div>
      <div className="h-[30px] relative shrink-0 w-[170px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <div className="h-[48px] relative shrink-0 w-[120px]" data-name="image 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[250%] left-0 max-w-none top-[-75%] w-full" src={imgImage6} />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[44px] items-center relative shrink-0 w-[1280px]" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[rgba(246,242,236,0.4)] content-stretch flex flex-col items-center px-[56px] py-[41px] relative shrink-0 w-[1918px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-[rgba(230,222,211,0.4)] border-b border-solid border-t inset-0 pointer-events-none" />
      <Container14 />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[64px] items-center left-1/2 top-[79px] w-[1280px]">
      <InnerContainer />
      <Hero />
      <BackgroundBorder />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white h-[1120px] overflow-clip relative shrink-0 w-full" data-name="Section">
      <div className="absolute bottom-[245.04px] h-[676.089px] right-[-472px] w-[1515px]" data-name="gradient-purple">
        <div className="absolute inset-[-104.05%_-46.44%]">
          <svg className="block size-full" fill="none" height="2083.09" preserveAspectRatio="none" viewBox="0 0 2922 2083.09" width="2922">
            <g filter="url(#filter0_f_0_98)" id="gradient-purple">
              <ellipse cx="1461" cy="1041.54" fill="#9429B0" fillOpacity="0.5" rx="757.5" ry="338.044" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2083.09" id="filter0_f_0_98" width="2922" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_98" stdDeviation="351.75" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-136.85px] h-[710.575px] right-[-64.2px] w-[1082px]" data-name="gradient-peach-left">
        <div className="absolute inset-[-109.63%_-72%]">
          <svg className="block size-full" fill="none" height="2268.57" preserveAspectRatio="none" viewBox="0 0 2640 2268.57" width="2640">
            <g filter="url(#filter0_f_0_104)" id="gradient-peach-left">
              <ellipse cx="1320" cy="1134.29" fill="#F7A861" rx="541" ry="355.287" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2268.57" id="filter0_f_0_104" width="2640" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_104" stdDeviation="389.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-191.83px] h-[601.256px] right-[-200.8px] w-[973.8px]" data-name="gradient-orange-right">
        <div className="absolute inset-[-23.28%_-14.38%]">
          <svg className="block size-full" fill="none" height="881.256" preserveAspectRatio="none" viewBox="0 0 1253.8 881.256" width="1253.8">
            <g filter="url(#filter0_f_0_92)" id="gradient-orange-right">
              <ellipse cx="626.9" cy="440.628" fill="#FFB87A" fillOpacity="0.3" rx="486.9" ry="300.628" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="881.256" id="filter0_f_0_92" width="1253.8" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_92" stdDeviation="70" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[573.4px] h-[546.596px] right-[881.2px] w-[973.8px]" data-name="gradient-blue-subtle">
        <div className="absolute inset-[-29.27%_-16.43%]">
          <svg className="block size-full" fill="none" height="866.596" preserveAspectRatio="none" viewBox="0 0 1293.8 866.596" width="1293.8">
            <g filter="url(#filter0_f_0_108)" id="gradient-blue-subtle">
              <ellipse cx="646.9" cy="433.298" fill="#8C7AF2" fillOpacity="0.12" rx="486.9" ry="273.298" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="866.596" id="filter0_f_0_108" width="1293.8" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_108" stdDeviation="80" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[245.45px] h-[437.277px] right-[773px] w-[757.4px]" data-name="gradient-pink-accent">
        <div className="absolute inset-[-29.73%_-17.16%]">
          <svg className="block size-full" fill="none" height="697.277" preserveAspectRatio="none" viewBox="0 0 1017.4 697.277" width="1017.4">
            <g filter="url(#filter0_f_0_86)" id="gradient-pink-accent">
              <ellipse cx="508.7" cy="348.638" fill="#E680B3" fillOpacity="0.15" rx="378.7" ry="218.638" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="697.277" id="filter0_f_0_86" width="1017.4" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_86" stdDeviation="65" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-491.3px] h-[1065.022px] right-[-706.2px] w-[2157px]" data-name="gradient-pink-accent">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="1065.022" src={imgGradientPinkAccent} width="2157" />
      </div>
      <div className="absolute bottom-[-455.59px] h-[1065.022px] right-[-602px] w-[2157px]" data-name="gradient-pink-accent">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="1065.022" src={imgGradientPinkAccent1} width="2157" />
      </div>
      <Frame />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9e2ebb] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Why they switch</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[40px] tracking-[-1.2px] whitespace-nowrap">
        <p className="leading-[48px]">
          Why Wineries Are
          <br aria-hidden />
          Switching to Corksy
        </p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start max-w-[620px] min-w-[620px] relative shrink-0" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[14.59px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[16px] w-[417px]">
        <p className="leading-[27px] mb-0">Not a formal survey — just what we hear, over and</p>
        <p className="leading-[27px]">over, on calls with wineries evaluating a new platform.</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-[380px] pl-[224px] relative" data-name="Margin">
      <Container22 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[56px] items-end relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Margin1 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9429b0] text-[11px] w-full">
        <p className="leading-[normal]">01</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[26px] tracking-[-0.7px] w-full">
        <p className="leading-[34px]">
          One Platform,
          <br aria-hidden />
          Instead of Five Logins
        </p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[16px] w-full">
        <p className="leading-[22px]">{`Most wineries aren't looking for another tool to add to the stack — they're tired of POS, eCommerce, wine club, website, and shipping systems that don't talk to each other. Corksy runs all of it on one shared data set, so a sale in the tasting room, a club shipment, and an online order all update the same system automatically.`}</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Container25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f4eefb] content-stretch flex gap-[8px] items-center px-[12px] py-[9px] relative rounded-[9px] shrink-0 w-full" data-name="Background">
      <div className="bg-[#9429b0] relative rounded-[4px] shrink-0 size-[14px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#761e8d] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">Join the club to get 15% off and free shipping</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1b1826] text-[13px] w-full">
        <p className="leading-[normal]">2021 Reserve Cabernet</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-w-px relative" data-name="Container">
      <Container30 />
      <div className="bg-[#f1eff8] h-[7px] relative rounded-[4px] shrink-0 w-[113.66px]" data-name="Background" />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a6382] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">$20.00</p>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] pt-[5px] px-[9px] relative rounded-[7px] shrink-0" data-name="Border">
      <div aria-hidden className="absolute border border-[#e9e7f1] border-solid inset-0 pointer-events-none rounded-[7px]" />
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold','Noto_Sans:SemiBold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1b1826] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">2 ▾</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">$40.00</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container32 />
      <Border />
      <Container33 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="h-[56px] relative rounded-[6px] shrink-0 w-[44px]" data-name="Background">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-[#f1eff8] inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[6px] size-full" src={imgBackground} />
        </div>
      </div>
      <Container29 />
      <Container31 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6a6382] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">CRV</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a6382] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">$0.30</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6a6382] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">Tax</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a6382] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">$7.05</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6a6382] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">Bottle deposit</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a6382] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">$0.15</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1eff8] border-solid border-t inset-0 pointer-events-none" />
      <Container34 />
      <Container37 />
      <Container40 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[17px] whitespace-nowrap">
        <p className="leading-[normal]">Total</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-end py-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[17px] text-right whitespace-nowrap">
        <p className="leading-[normal]">CAD $107.50</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#9429b0] text-[11px] text-right whitespace-nowrap">
        <p className="leading-[normal]">$12.75 saved</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex items-end justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1eff8] border-solid border-t inset-0 pointer-events-none" />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f4f3f9] col-1 content-stretch flex h-[38px] items-center justify-center justify-self-stretch relative rounded-[10px] row-1 shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4a4560] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[normal]">View cart</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#9429b0] col-2 content-stretch flex h-[38px] items-center justify-center justify-self-stretch relative rounded-[10px] row-1 shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">Proceed to checkout</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="grid grid-cols-[__minmax(0,1fr)_minmax(0,1.40fr)] grid-rows-[_38px] h-[38px] relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <Background2 />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_8px_11px_rgba(83,52,131,0.08)] flex flex-[1_0_40px] flex-col items-start justify-between min-h-px p-[19px] relative rounded-[14px] w-full" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#e9e7f1] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Background />
      <Container28 />
      <HorizontalBorder />
      <HorizontalBorder1 />
      <Container47 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px relative w-full" data-name="Container">
      <Frame7 />
      <BackgroundBorderShadow />
    </div>
  );
}

function OverlayShadowOverlayBlur() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip p-[32px] relative rounded-[24px] self-stretch shadow-[0px_14px_38px_0px_rgba(83,52,131,0.1)] shrink-0 w-[500px]" data-name="Overlay+Shadow+OverlayBlur">
      <div aria-hidden className="absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.8)] inset-0 pointer-events-none rounded-[24px]" />
      <Container24 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.78)]" />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9429b0] text-[11px] w-full">
        <p className="leading-[normal]">02</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[26px] tracking-[-0.7px] w-full">
        <p className="leading-[34px] mb-0">Club Operations</p>
        <p className="leading-[34px] mb-0">{`That Don't Run on`}</p>
        <p className="leading-[34px]">Spreadsheets</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[16px] w-full">
        <p className="leading-[22px]">{`It's the biggest reason wineries switch. Customer-choice clubs, bulk card processing, self-service updates, and full staff visibility replace the manual emails that eat a club manager's week — leagues ahead of legacy tools.`}</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px relative" data-name="Container">
      <Container49 />
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col h-[7.504px] items-start relative shrink-0 w-[146.128px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f3f3f] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">Club revenue, this month</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.58px] pt-[0.79px] relative shrink-0 w-[146.128px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[25.276px] tracking-[-0.4107px] whitespace-nowrap">
        <p className="leading-[normal]">$61,420</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#eaf6ef] content-stretch flex flex-col items-start px-[7.899px] py-[3.16px] relative rounded-[6.319px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2f8f5b] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">+18%</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Container55 />
      <Background3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[6.319px] items-start relative shrink-0 w-[293.835px]">
      <Container54 />
      <Frame6 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Frame5 />
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[52px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute inset-[7.5%_9.68%_17.5%_9.68%]" data-name="Vector">
        <div className="absolute inset-[-2.53%_-0.42%]">
          <svg className="block size-full" fill="none" height="40.9749" preserveAspectRatio="none" viewBox="0 0 238.939 40.9749" width="238.939">
            <path d={svgPaths.p3a78b100} id="Vector" stroke="#9429B0" strokeLinecap="round" strokeWidth="1.9747" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[7.5%_9.68%_0_9.68%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="48.1" preserveAspectRatio="none" viewBox="0 0 236.964 48.1" width="236.964">
          <path d={svgPaths.p54cc400} fill="#9429B0" fillOpacity="0.09" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4a4560] text-[11px] whitespace-nowrap">
        <p className="leading-[11px]">6 Bottle Club</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[11px] whitespace-nowrap">
        <p className="leading-[11px]">$34,180</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4a4560] text-[11px] whitespace-nowrap">
        <p className="leading-[11px]">Cellar tier</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[11px] whitespace-nowrap">
        <p className="leading-[11px]">$19,760</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Container61 />
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex flex-col gap-[6.319px] items-start pt-[10.268px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1eff8] border-solid border-t-[0.79px] inset-0 pointer-events-none" />
      <Container56 />
      <Container59 />
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_6.319px_8.689px_rgba(83,52,131,0.08)] flex flex-col gap-[11.058px] items-start p-[15.008px] relative rounded-[11.058px] shrink-0 w-[323.851px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border-[#e9e7f1] border-[0.79px] border-solid inset-0 pointer-events-none rounded-[11.058px]" />
      <Container53 />
      <Svg />
      <HorizontalBorder2 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start py-[0.79px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[12.638px] whitespace-nowrap">
        <p className="leading-[normal]">Fall release run</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#fff4e6] content-stretch flex flex-col items-start px-[7.899px] py-[3.16px] relative rounded-[6.319px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#b45309] text-[8.689px] whitespace-nowrap">
        <p className="leading-[normal]">Processing</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-[61.27885437011719px] pl-[134.958px] relative" data-name="Margin">
      <Background4 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[0.001px] items-center relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Margin2 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6a6382] text-[9.479px] whitespace-nowrap">
        <p className="leading-[normal]">Cards processed</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[9.479px] whitespace-nowrap">
        <p className="leading-[normal]">1,142 / 1,288</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container66 />
      <Container67 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f1eff8] h-[6.319px] overflow-clip relative rounded-[3.949px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-gradient-to-r from-[#7c4de0] inset-[0_12%_0_0] to-[#9429b0]" data-name="Gradient" />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col gap-[6.319px] items-start relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Background5 />
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_6.319px_8.689px_rgba(83,52,131,0.08)] flex flex-col gap-[8px] items-start p-[15.008px] relative rounded-[11.058px] shrink-0 w-[323.851px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border-[#e9e7f1] border-[0.79px] border-solid inset-0 pointer-events-none rounded-[11.058px]" />
      <Container62 />
      <Container64 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px relative self-stretch" data-name="Container">
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
    </div>
  );
}

function BackgroundShadowOverlayBlur() {
  return (
    <div className="content-stretch flex gap-[32px] items-start overflow-clip p-[32px] relative rounded-[24px] shadow-[0px_20px_56px_0px_rgba(83,52,131,0.14)] shrink-0 w-full" data-name="Background+Shadow+OverlayBlur">
      <div aria-hidden className="absolute backdrop-blur-[7px] inset-0 pointer-events-none rounded-[24px]" style={{ backgroundImage: "linear-gradient(164.70396797357424deg, rgba(247, 239, 250, 0.7) 0%, rgba(255, 255, 255, 0.38) 100%)" }} />
      <Container48 />
      <Container52 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.72)]" />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9429b0] text-[11px] w-full">
        <p className="leading-[normal]">03</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[21px] tracking-[-0.5px] w-full">
        <p className="leading-[29px] mb-0">A Website Built to Convert,</p>
        <p className="leading-[29px]">Not Just Exist</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[16px] w-full">
        <p className="leading-[22px]">Wineries want a storefront they can manage themselves — products, events, and pricing updated without a developer. Checkout is mobile-first with fewer steps, and automatic syncing keeps the site matched to real stock.</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col gap-[12px] items-start p-[32px] relative rounded-[24px] shadow-[0px_20px_56px_0px_rgba(83,52,131,0.14)] shrink-0 w-[370.149px]" data-name="Overlay+OverlayBlur">
      <div className="absolute inset-[0_-0.01px_0_0] pointer-events-none rounded-[24px] shadow-[0px_14px_38px_0px_rgba(83,52,131,0.1)]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.78)]" />
      </div>
      <Container68 />
      <Container69 />
      <Container70 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9429b0] text-[11px] w-full">
        <p className="leading-[normal]">04</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[21px] tracking-[-0.5px] w-full">
        <p className="leading-[29px] mb-0">Shipping and Compliance, in</p>
        <p className="leading-[29px]">the Same Workflow</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[16px] w-full">
        <p className="leading-[22px]">For self-fulfilling wineries, this is the difference-maker: carrier workflows, labels, and tracking live in the system that made the sale, so a purchase and shipment run through one workflow instead of three handoffs.</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur1() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col gap-[12px] items-start p-[32px] relative rounded-[24px] shadow-[0px_20px_56px_0px_rgba(83,52,131,0.14)] shrink-0 w-[370.149px]" data-name="Overlay+OverlayBlur">
      <div className="absolute inset-[0_-0.01px_0_0] pointer-events-none rounded-[24px] shadow-[0px_14px_38px_0px_rgba(83,52,131,0.1)]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.78)]" />
      </div>
      <Container71 />
      <Container72 />
      <Container73 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <OverlayOverlayBlur />
      <OverlayOverlayBlur1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[760.299px]">
      <BackgroundShadowOverlayBlur />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[1280px]">
      <OverlayShadowOverlayBlur />
      <Frame3 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9429b0] text-[11px] w-full">
        <p className="leading-[normal]">05</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[21px] tracking-[-0.5px] w-full">
        <p className="leading-[29px]">A Partner With a Roadmap That Actually Moves</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[16px] w-full">
        <p className="leading-[22px]">{`Wineries compare Corksy's pace of development — shaped directly by customer feedback — to slower legacy vendors. Predictable, inclusive pricing comes with a real say in what gets built, not years waiting on requests.`}</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container75 />
      <Container76 />
      <Container77 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[19px] tracking-[-0.4px] w-full">
        <p className="leading-[30px] mb-0">{`The wineries who move to Corksy aren't just replacing`}</p>
        <p className="leading-[30px] mb-0">{`software. They're cutting the operational overhead that's`}</p>
        <p className="leading-[30px] mb-0">been slowing them down — and building a better</p>
        <p className="leading-[30px]">experience for everyone who walks through the door.</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold','Noto_Sans:SemiBold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#9429b0] text-[15px] w-full">
        <p className="leading-[normal]">See how it works →</p>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="border-[#efecf6] border-l border-solid col-2 content-stretch flex flex-col gap-[14px] items-start justify-self-stretch pl-[56px] relative row-1 self-center shrink-0" data-name="VerticalBorder">
      <Container78 />
      <Container79 />
    </div>
  );
}

function OverlayOverlayBlur2() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.55)] gap-x-[56px] gap-y-[56px] grid grid-cols-[__minmax(0,1fr)_minmax(0,1.15fr)] grid-rows-[_167px] h-[239px] px-[40px] py-[36px] relative rounded-[24px] shadow-[0px_20px_56px_0px_rgba(83,52,131,0.14)] shrink-0 w-[1280px]" data-name="Overlay+OverlayBlur">
      <div className="absolute inset-0 pointer-events-none rounded-[24px] shadow-[0px_14px_38px_0px_rgba(83,52,131,0.1)]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0.8)] inset-0 rounded-[24px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.78)]" />
      </div>
      <Container74 />
      <VerticalBorder />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame4 />
      <OverlayOverlayBlur2 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start pb-[104px] pt-[72px] px-[320px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute blur-[401.5px] h-[820px] left-[calc(50%-445px)] rounded-[410px] top-[calc(50%+54.93px)] w-[806px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 806 820' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(62.951 0 0 64.044 403 328)'><stop stop-color='rgba(58,144,232,0.5)' offset='0'/><stop stop-color='rgba(58,144,232,0.25)' offset='0.65'/></radialGradient></defs></svg>\")" }} data-name="Gradient+Blur" />
      <Container18 />
      <Container23 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9e2ebb] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">The Corksy ecosystem</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[620px] px-[3.59px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[17px] text-center whitespace-nowrap">
        <p className="leading-[28px] mb-0">Wine club, POS, eCommerce, website, reservations, shipping, and reporting —</p>
        <p className="leading-[28px]">one data set, in real time.</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[14.39%_30%_14.04%_30%]" data-name="Group">
      <div className="absolute inset-[-0.39%_0]">
        <svg className="block size-full" fill="none" height="205.6" preserveAspectRatio="none" viewBox="0 0 400 205.6" width="400">
          <g id="Group" opacity="0.55">
            <path d={svgPaths.pf200800} id="Vector" stroke="url(#paint0_linear_0_74)" strokeWidth="1.6" />
            <path d="M200 102.3H0" id="Vector_2" stroke="url(#paint1_linear_0_74)" strokeWidth="1.6" />
            <path d={svgPaths.p29ceb680} id="Vector_3" stroke="url(#paint2_linear_0_74)" strokeWidth="1.6" />
            <path d={svgPaths.p23357b00} id="Vector_4" stroke="url(#paint3_linear_0_74)" strokeWidth="1.6" />
            <path d="M200 102.3H400" id="Vector_5" stroke="url(#paint4_linear_0_74)" strokeWidth="1.6" />
            <path d={svgPaths.p19c80f80} id="Vector_6" stroke="url(#paint5_linear_0_74)" strokeWidth="1.6" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_74" x1="0" x2="200" y1="0.8" y2="0.8">
              <stop stopColor="#632AF0" />
              <stop offset="1" stopColor="#AC52ED" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_74" x1="0" x2="200" y1="102.3" y2="102.3">
              <stop stopColor="#632AF0" />
              <stop offset="1" stopColor="#AC52ED" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_74" x1="0" x2="200" y1="103.8" y2="103.8">
              <stop stopColor="#632AF0" />
              <stop offset="1" stopColor="#AC52ED" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_74" x1="200" x2="400" y1="0.8" y2="0.8">
              <stop stopColor="#632AF0" />
              <stop offset="1" stopColor="#AC52ED" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_74" x1="200" x2="400" y1="102.3" y2="102.3">
              <stop stopColor="#632AF0" />
              <stop offset="1" stopColor="#AC52ED" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_0_74" x1="200" x2="400" y1="103.8" y2="103.8">
              <stop stopColor="#632AF0" />
              <stop offset="1" stopColor="#AC52ED" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[14.39%_30%_14.04%_30%]" data-name="Group">
      <div className="absolute inset-[-0.39%_0]">
        <svg className="block size-full" fill="none" height="205.6" preserveAspectRatio="none" viewBox="0 0 400 205.6" width="400">
          <g id="Group">
            <path d="M200 102.3H0" id="Vector" stroke="#9429B0" strokeDasharray="4 10" strokeWidth="1.6" />
            <path d="M200 102.3H400" id="Vector_2" stroke="#9429B0" strokeDasharray="4 10" strokeWidth="1.6" />
            <path d={svgPaths.pf200800} id="Vector_3" stroke="#9429B0" strokeDasharray="4 10" strokeWidth="1.6" />
            <path d={svgPaths.p19c80f80} id="Vector_4" stroke="#9429B0" strokeDasharray="4 10" strokeWidth="1.6" />
            <path d={svgPaths.p23357b00} id="Vector_5" stroke="#9429B0" strokeDasharray="4 10" strokeWidth="1.6" />
            <path d={svgPaths.p29ceb680} id="Vector_6" stroke="#9429B0" strokeDasharray="6 10" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute inset-[0_0_5px_0] overflow-clip" data-name="SVG">
      <Group />
      <Group1 />
    </div>
  );
}

function Sym() {
  return (
    <div className="h-[53px] relative shrink-0 w-[81px]" data-name="sym">
      <svg className="absolute block inset-0 size-full" fill="none" height="53" preserveAspectRatio="none" viewBox="0 0 81 53" width="81">
        <g id="sym">
          <path clipRule="evenodd" d={svgPaths.p21a98f00} fill="white" fillRule="evenodd" id="Combined-Shape" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch drop-shadow-[0px_22px_26px_rgba(148,41,176,0.32)] flex flex-col items-center justify-center left-[calc(50%+0.5px)] rounded-[90px] size-[151px] top-[calc(50%-0.5px)]" style={{ backgroundImage: "linear-gradient(134.89999930190322deg, rgb(177, 60, 207) 0%, rgb(148, 41, 176) 100%)" }} data-name="Background+Shadow">
      <Sym />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[15px] w-full">
        <p className="leading-[normal]">Website</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[13px] w-full">
        <p className="leading-[20px]">Always matches stock</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur3() {
  return (
    <div className="backdrop-blur-[7px] content-stretch flex flex-col gap-[3px] items-start px-[18px] py-[16px] relative rounded-[14px] shrink-0 w-[210px]" data-name="Overlay+OverlayBlur">
      <div className="absolute bottom-0 left-0 pointer-events-none rounded-[14px] shadow-[0px_10px_26px_0px_rgba(83,52,131,0.1)] top-0 w-[210px]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0.8)] inset-0 rounded-[14px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.85)]" />
      </div>
      <Container84 />
      <Container85 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[15px] w-full">
        <p className="leading-[normal]">{`POS & Corksy Go`}</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[13px] w-full">
        <p className="leading-[20px]">Room and off-site</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur4() {
  return (
    <div className="backdrop-blur-[7px] content-stretch flex flex-col gap-[3px] items-start px-[18px] py-[16px] relative rounded-[14px] shrink-0 w-[210px]" data-name="Overlay+OverlayBlur">
      <div className="absolute bottom-0 left-0 pointer-events-none rounded-[14px] shadow-[0px_10px_26px_0px_rgba(83,52,131,0.1)] top-0 w-[210px]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0.8)] inset-0 rounded-[14px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.85)]" />
      </div>
      <Container86 />
      <Container87 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[15px] w-full">
        <p className="leading-[normal]">Club</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[13px] w-full">
        <p className="leading-[20px]">Customer choice, bulk runs</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur5() {
  return (
    <div className="backdrop-blur-[7px] content-stretch flex flex-col gap-[3px] items-start px-[18px] py-[16px] relative rounded-[14px] shrink-0 w-[210px]" data-name="Overlay+OverlayBlur">
      <div className="absolute bottom-0 left-0 pointer-events-none rounded-[14px] shadow-[0px_10px_26px_0px_rgba(83,52,131,0.1)] top-0 w-[210px]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0.8)] inset-0 rounded-[14px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.85)]" />
      </div>
      <Container88 />
      <Container89 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[60px] top-[2px] w-[236.8px]">
      <OverlayOverlayBlur3 />
      <OverlayOverlayBlur4 />
      <OverlayOverlayBlur5 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-[200.8px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[15px] w-full">
        <p className="leading-[normal]">{`Reservations & Events`}</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200.8px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[13px] w-full">
        <p className="leading-[20px]">Same calendar as sales</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur6() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start px-[18px] py-[16px] relative rounded-[14px] shrink-0 w-[210px]" data-name="Overlay+OverlayBlur">
      <div className="absolute bottom-0 left-0 pointer-events-none rounded-[14px] shadow-[0px_10px_26px_0px_rgba(83,52,131,0.1)] top-0 w-[210px]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0.8)] inset-0 rounded-[14px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.85)]" />
      </div>
      <Container90 />
      <Container91 />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-[200.8px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[15px] w-full">
        <p className="leading-[normal]">{`Shipping & Compliance`}</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200.8px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[13px] w-full">
        <p className="leading-[20px]">Checked before it moves</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur7() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start px-[18px] py-[16px] relative rounded-[14px] shrink-0 w-[210px]" data-name="Overlay+OverlayBlur">
      <div className="absolute bottom-0 left-0 pointer-events-none rounded-[14px] shadow-[0px_10px_26px_0px_rgba(83,52,131,0.1)] top-0 w-[210px]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0.8)] inset-0 rounded-[14px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.85)]" />
      </div>
      <Container92 />
      <Container93 />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-[200.8px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.8)] w-full">
        <p className="leading-[normal]">{`CRM & Reporting`}</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200.8px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[13px] w-full">
        <p className="leading-[20px]">One profile per guest</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur8() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start px-[18px] py-[16px] relative rounded-[14px] shrink-0 w-[210px]" data-name="Overlay+OverlayBlur">
      <div className="absolute bottom-0 left-0 pointer-events-none rounded-[14px] shadow-[0px_10px_26px_0px_rgba(83,52,131,0.1)] top-0 w-[210px]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0.8)] inset-0 rounded-[14px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.85)]" />
      </div>
      <Container94 />
      <Container95 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[730px] top-[2px] w-[236.8px]">
      <OverlayOverlayBlur6 />
      <OverlayOverlayBlur7 />
      <OverlayOverlayBlur8 />
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[290px] relative shrink-0 w-[1000px]" data-name="Container">
      <Svg1 />
      <BackgroundShadow2 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[760px] px-[14.16px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[28px] mb-0">Change an inventory count at the register and it updates online instantly. Sign up a club member in</p>
        <p className="leading-[28px] mb-0">{`the tasting room and they're already in your CRM. No exports, no manual syncing — one ecosystem,`}</p>
        <p className="leading-[28px]">one truth.</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] pt-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold','Noto_Sans:SemiBold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Explore the platform →</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container81 />
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[40px] text-center tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[48px]">One Ecosystem for all Winery DTC.</p>
      </div>
      <Container82 />
      <Container83 />
      <Container96 />
      <Margin3 />
    </div>
  );
}

function Background6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pt-[96px] px-[320px] relative shrink-0 w-[1920px]" data-name="Background">
      <Container80 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[233px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#16141c] text-[28px] tracking-[-0.9px] w-full">
        <p className="leading-[34px]">
          Everything You Need to Run
          <br aria-hidden />
          Your Winery
        </p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[233px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c5670] text-[18px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">
          {`One login. One data set. `}
          <br aria-hidden />
          One team behind it all.
        </p>
      </div>
    </div>
  );
}

function BackgroundOverlayBlur() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[32px] relative self-stretch shrink-0 w-[421px]" data-name="Background+OverlayBlur">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(158.39583683871763deg, rgba(247, 239, 250, 0.719) 0%, rgb(228, 228, 230) 100%)" }} />
        <img alt="" className="absolute backdrop-blur-[7px] max-w-none object-cover size-full" src={imgBackgroundOverlayBlur} />
      </div>
      <Container97 />
      <Container98 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="27" preserveAspectRatio="none" viewBox="0 0 27 27" width="27">
        <g id="SVG">
          <path d="M8.99954 24.7501H17.9995" id="Vector" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
          <path d="M7.87546 11.2501H19.1255" id="Vector_2" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
          <path d="M13.5 16.875V24.75" id="Vector_3" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
          <path d={svgPaths.pc9eb00} id="Vector_4" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15.632px] shrink-0 size-[54px]" style={{ backgroundImage: "linear-gradient(149.9999996418024deg, rgb(247, 239, 250) 0%, rgb(241, 230, 247) 100%)" }} data-name="Background">
      <Svg2 />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#16141c] text-[20px] tracking-[-0.255px] w-full">
        <p className="leading-[26px]">{`Club & Subscriptions`}</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c5670] text-[16px] w-full">
        <p className="leading-[24px]">Launch a club in minutes. Customer-choice options, bulk card processing,and self-service member updates.</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[23px] relative shrink-0 w-[225px]" data-name="Container">
      <Background7 />
      <Container100 />
      <Container101 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="27" preserveAspectRatio="none" viewBox="0 0 27 27" width="27">
        <g id="SVG">
          <path d={svgPaths.p1af5de00} id="Vector" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
          <path d="M8.99954 23.625H17.9995" id="Vector_2" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
          <path d="M13.5 19.1249V23.6249" id="Vector_3" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
        </g>
      </svg>
    </div>
  );
}

function Background8() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15.632px] shrink-0 size-[54px]" style={{ backgroundImage: "linear-gradient(149.9999996418024deg, rgb(247, 239, 250) 0%, rgb(241, 230, 247) 100%)" }} data-name="Background">
      <Svg3 />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#16141c] text-[20px] tracking-[-0.255px] w-full">
        <p className="leading-[26px] whitespace-pre-wrap">
          {`Point of Sale `}
          <br aria-hidden />
          {`& Corksy Go`}
        </p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c5670] text-[16px] w-full">
        <p className="leading-[24px]">Retail and mobile POS that keeps inventory, club status, and customer history in sync.</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[23px] relative shrink-0 w-[225px]" data-name="Container">
      <Background8 />
      <Container103 />
      <Container104 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="27" preserveAspectRatio="none" viewBox="0 0 27 27" width="27">
        <g id="SVG">
          <path d={svgPaths.p3bcdec80} id="Vector" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
          <path d={svgPaths.p26a5c100} id="Vector_2" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
        </g>
      </svg>
    </div>
  );
}

function Background9() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15.632px] shrink-0 size-[54px]" style={{ backgroundImage: "linear-gradient(149.9999996418024deg, rgb(247, 239, 250) 0%, rgb(241, 230, 247) 100%)" }} data-name="Background">
      <Svg4 />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#16141c] text-[20px] tracking-[-0.255px] w-full">
        <p className="leading-[26px]">{`eCommerce & Website`}</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c5670] text-[16px] w-full">
        <p className="leading-[24px] mb-0">A mobile-first website with a</p>
        <p className="leading-[24px] mb-0">checkout built to convert —</p>
        <p className="leading-[24px]">no developer needed for routine updates.</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[225px]" data-name="Container">
      <Background9 />
      <Container106 />
      <Container107 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="27" preserveAspectRatio="none" viewBox="0 0 27 27" width="27">
        <g id="SVG">
          <path d={svgPaths.p11ab780} id="Vector" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
          <path d="M3.375 11.2501H23.625" id="Vector_2" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
          <path d="M8.99954 3.375V7.875" id="Vector_3" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
          <path d="M18.0005 3.375V7.875" id="Vector_4" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
        </g>
      </svg>
    </div>
  );
}

function Background10() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15.632px] shrink-0 size-[54px]" style={{ backgroundImage: "linear-gradient(149.9999996418024deg, rgb(247, 239, 250) 0%, rgb(241, 230, 247) 100%)" }} data-name="Background">
      <Svg5 />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#16141c] text-[20px] tracking-[-0.255px] w-full">
        <p className="leading-[26px]">
          Reservations
          <br aria-hidden />
          {`& Events`}
        </p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c5670] text-[16px] w-full">
        <p className="leading-[24px]">Tastings, events, and bookings from the same dashboard as your eCommerce and club data.</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[225px]" data-name="Container">
      <Background10 />
      <Container109 />
      <Container110 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="27" preserveAspectRatio="none" viewBox="0 0 27 27" width="27">
        <g id="SVG">
          <path d={svgPaths.p22de11f0} id="Vector" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
          <path d={svgPaths.p160e8700} id="Vector_2" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
          <path d={svgPaths.p226a71f0} id="Vector_3" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
          <path d={svgPaths.p2e24cb80} id="Vector_4" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
        </g>
      </svg>
    </div>
  );
}

function Background11() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15.632px] shrink-0 size-[54px]" style={{ backgroundImage: "linear-gradient(149.9999996418024deg, rgb(247, 239, 250) 0%, rgb(241, 230, 247) 100%)" }} data-name="Background">
      <Svg6 />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#16141c] text-[20px] tracking-[-0.255px] w-full">
        <p className="leading-[26px]">{`Shipping & Compliance`}</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c5670] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Carrier workflows, labels, and</p>
        <p className="leading-[24px]">tracking in the same system you use to sell.</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[225px]" data-name="Container">
      <Background11 />
      <Container112 />
      <Container113 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="27" preserveAspectRatio="none" viewBox="0 0 27 27" width="27">
        <g id="SVG">
          <path d={svgPaths.p2be7dd17} id="Vector" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
          <path d="M20.25 19.125V10.125" id="Vector_2" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
          <path d="M14.6255 19.1249V5.62488" id="Vector_3" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
          <path d="M8.99954 19.1249V15.7499" id="Vector_4" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9125" />
        </g>
      </svg>
    </div>
  );
}

function Background12() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15.632px] shrink-0 size-[54px]" style={{ backgroundImage: "linear-gradient(149.9999996418024deg, rgb(247, 239, 250) 0%, rgb(241, 230, 247) 100%)" }} data-name="Background">
      <Svg7 />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#16141c] text-[20px] tracking-[-0.255px] w-full">
        <p className="leading-[26px]">{`CRM, Marketing & Insights`}</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5c5670] text-[16px] w-full">
        <p className="leading-[24px]">Every touchpoint feeds one profile. Segment, automate, and report without exporting a spreadsheet.</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[225px]" data-name="Container">
      <Background12 />
      <Container115 />
      <Container116 />
    </div>
  );
}

function OverlayVerticalBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.46)] border-[rgba(255,255,255,0.7)] border-l border-solid content-start flex flex-[1_0_0] flex-wrap gap-[20px_32px] items-start min-w-px px-[44px] py-[48px] relative" data-name="Overlay+VerticalBorder+OverlayBlur">
      <Container99 />
      <Container102 />
      <Container105 />
      <Container108 />
      <Container111 />
      <Container114 />
    </div>
  );
}

function OverlayShadowOverlayBlur1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[12px] shrink-0 w-[1280px]" data-name="Overlay+Shadow+OverlayBlur">
      <div aria-hidden className="absolute backdrop-blur-[9px] bg-[rgba(255,255,255,0.8)] inset-0 pointer-events-none rounded-[12px]" />
      <BackgroundOverlayBlur />
      <OverlayVerticalBorderOverlayBlur />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.66)]" />
    </div>
  );
}

function InnerContainer1() {
  return (
    <div className="backdrop-blur-[9px] content-stretch flex flex-col items-center relative shadow-[-29.5px_-25.5px_64px_0px_rgba(118,30,141,0.04),0px_20px_56px_0px_rgba(83,52,131,0.14)] shrink-0 w-[1280px]" data-name="Inner Container">
      <OverlayShadowOverlayBlur1 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-[320px] py-[96px] relative shrink-0 w-full" data-name="Section">
      <InnerContainer1 />
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white tracking-[-0.6px] w-full">
        <p className="leading-[42px] mb-0">“We cancelled three contracts in a</p>
        <p className="leading-[42px]">
          {`month. The part I didn't expect: my team stopped asking which`}
          <br aria-hidden />
          screen to trust.”
        </p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[normal]">DTC Director</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.75)] whitespace-nowrap">
        <p className="leading-[normal]">Sonoma County estate · 9,000 cases</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Container122 />
      <Container123 />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[rgba(255,255,255,0.25)] border border-[rgba(255,255,255,0.4)] border-solid relative rounded-[24px] shrink-0 size-[48px]" data-name="Overlay+Border" />
      <Container121 />
    </div>
  );
}

function Container118() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container119 />
      <Container120 />
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] pt-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[32px] text-white tracking-[-0.64px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        <p className="leading-[normal]">4 → 1</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.78)] w-full">
        <p className="leading-[21px]">vendors, bills, support</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.14)] col-1 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch p-[23px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container125 />
      <Container126 />
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] pt-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[-0.64px] w-full">
        <p className="leading-[normal]">6 wks</p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.78)] w-full">
        <p className="leading-[21px]">kickoff to first pour</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.14)] col-2 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch p-[23px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container127 />
      <Container128 />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] pt-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[-0.64px] w-full">
        <p className="leading-[normal]">+31%</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.78)] w-full">
        <p className="leading-[21px]">club signups at the bar</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.14)] col-1 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch p-[23px] relative rounded-[16px] row-2 self-start shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container129 />
      <Container130 />
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] pt-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[-0.64px] w-full">
        <p className="leading-[normal]">0</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.78)] w-full">
        <p className="leading-[21px]">reconciliation spreadsheets</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur3() {
  return (
    <div className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.14)] col-2 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch p-[23px] relative rounded-[16px] row-2 self-start shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container131 />
      <Container132 />
    </div>
  );
}

function Container124() {
  return (
    <div className="col-2 gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__121px_121px] h-[258px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <OverlayBorderOverlayBlur />
      <OverlayBorderOverlayBlur1 />
      <OverlayBorderOverlayBlur2 />
      <OverlayBorderOverlayBlur3 />
    </div>
  );
}

function Container117() {
  return (
    <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[__minmax(0,1.20fr)_minmax(0,1fr)] grid-rows-[_258px] h-[258px] relative shrink-0 w-full" data-name="Container">
      <Container118 />
      <Container124 />
    </div>
  );
}

function InnerContainer2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1280px]" data-name="Inner Container">
      <div className="relative rounded-[24px] shadow-[0px_24px_64px_0px_rgba(118,30,141,0.35)] shrink-0 w-[1280px]" style={{ backgroundImage: "linear-gradient(119.39119172298922deg, rgba(148, 41, 176, 0.92) 0%, rgba(90, 84, 224, 0.88) 60%, rgba(30, 144, 232, 0.85) 100%)" }} data-name="Case Study">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start p-[64px] relative size-full">
            <div className="absolute right-[-80px] rounded-[240px] size-[480px] top-[-140px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 480 480' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(33.941 0 0 33.941 240 240)'><stop stop-color='rgba(255,255,255,0.16)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='0.65'/></radialGradient></defs></svg>\")" }} data-name="Gradient" />
            <Container117 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip pt-[96px] px-[320px] relative shrink-0 w-full" data-name="Section">
      <InnerContainer2 />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9e2ebb] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[normal]">Built for wineries</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[40px] tracking-[-1.2px] w-full">
        <p className="leading-[48px]">
          Real Data. Real Answers.
          <br aria-hidden />
          No Guessing.
        </p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[17px] w-full">
        <p className="leading-[28px] mb-0">Club retention, POS performance, and online sales side by side — one</p>
        <p className="leading-[28px]">dashboard, real time.</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9429b0] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">01</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[0.01px] items-center leading-[0] relative self-stretch shrink-0 whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center not-italic relative shrink-0 text-[#1b1826] text-[16px]">
        <p className="leading-[normal]">{`Reporting & Insights`}</p>
      </div>
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#5a5472] text-[15px]">
        <p className="leading-[normal]">{` — Custom dashboards across every channel.`}</p>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="border-[#efecf6] border-b border-solid content-stretch flex gap-[16px] items-start py-[18px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <Container138 />
      <Paragraph />
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9429b0] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">02</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center leading-[0] relative self-stretch shrink-0 whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center not-italic relative shrink-0 text-[#1b1826] text-[16px]">
        <p className="leading-[normal]">A Roadmap That Moves</p>
      </div>
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#5a5472] text-[15px]">
        <p className="leading-[normal]">{` — Feature requests that ship in months, not years.`}</p>
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="border-[#efecf6] border-b border-solid content-stretch flex gap-[16px] items-start py-[18px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <Container139 />
      <Paragraph1 />
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9429b0] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">03</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[0.01px] items-center leading-[0] relative self-stretch shrink-0 whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center not-italic relative shrink-0 text-[#1b1826] text-[16px]">
        <p className="leading-[normal]">Free Integrations</p>
      </div>
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#5a5472] text-[15px]">
        <p className="leading-[normal]">{` — Connect the tools you already use, free.`}</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[18px] relative shrink-0 w-full" data-name="Container">
      <Container141 />
      <Paragraph2 />
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="border-[#efecf6] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="HorizontalBorder">
      <HorizontalBorder4 />
      <HorizontalBorder5 />
      <Container140 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Margin">
      <HorizontalBorder3 />
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold','Noto_Sans:SemiBold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#9429b0] text-[15px] w-full">
        <p className="leading-[normal]">See the platform in action →</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px relative" data-name="Container">
      <Container135 />
      <Container136 />
      <Container137 />
      <Margin4 />
      <Container142 />
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[18px] whitespace-nowrap">
        <p className="leading-[normal]">This month, all channels</p>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(148,41,176,0.1)] content-stretch flex flex-col items-start px-[11px] py-[5px] relative rounded-[999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(148,41,176,0.24)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#761e8d] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">live</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-[48.40999984741211px] pl-[273.25px] relative" data-name="Margin">
      <OverlayBorder1 />
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container144 />
      <Margin5 />
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6a6382] text-[12px] w-full">
        <p className="leading-[normal]">Club retention</p>
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[22px] w-full">
        <p className="leading-[normal]">94.2%</p>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-[1_0_36px] flex-col items-start min-w-px px-[17px] py-[15px] relative rounded-[12px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(131,120,160,0.16)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container146 />
      <Container147 />
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6a6382] text-[12px] w-full">
        <p className="leading-[normal]">POS sales</p>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[22px] w-full">
        <p className="leading-[normal]">$48.1k</p>
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-[1_0_36px] flex-col items-start min-w-px px-[17px] py-[15px] relative rounded-[12px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(131,120,160,0.16)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container148 />
      <Container149 />
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6a6382] text-[12px] w-full">
        <p className="leading-[normal]">Online sales</p>
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[22px] w-full">
        <p className="leading-[normal]">$32.6k</p>
      </div>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-[1_0_36px] flex-col items-start min-w-px px-[17px] py-[15px] relative rounded-[12px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(131,120,160,0.16)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container150 />
      <Container151 />
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <OverlayBorder2 />
      <OverlayBorder3 />
      <OverlayBorder4 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="h-[110px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute inset-[6.36%_3.25%_16.36%_3.25%]" data-name="Vector">
        <div className="absolute inset-[-1.47%_-0.23%]">
          <svg className="block size-full" fill="none" height="87.5005" preserveAspectRatio="none" viewBox="0 0 536.349 87.5005" width="536.349">
            <path d={svgPaths.p12a4ea00} id="Vector" stroke="#9429B0" strokeLinecap="round" strokeWidth="2.50001" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[6.36%_3.25%_0_3.25%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="103" preserveAspectRatio="none" viewBox="0 0 533.848 103" width="533.848">
          <path d={svgPaths.p163a500} fill="#9429B0" fillOpacity="0.08" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[40%_3.25%_9.09%_3.25%]" data-name="Vector">
        <div className="absolute inset-[-1.79%_-0.19%]">
          <svg className="block size-full" fill="none" height="58.0003" preserveAspectRatio="none" viewBox="0 0 535.848 58.0003" width="535.848">
            <path d={svgPaths.pfbe2b20} id="Vector" opacity="0.7" stroke="#1E90E8" strokeLinecap="round" strokeWidth="2.00001" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderShadow1() {
  return (
    <div className="bg-[rgba(255,255,255,0.72)] content-stretch flex flex-[1_0_58px] flex-col gap-[16px] items-start min-w-px px-[29px] py-[25px] relative rounded-[16px]" data-name="Overlay+Border+Shadow">
      <div aria-hidden className="absolute border-12 border-[#f7dffe] border-solid inset-[-12px] pointer-events-none rounded-[28px] shadow-[0px_12px_32px_0px_rgba(83,52,131,0.1)]" />
      <Container143 />
      <Container145 />
      <Svg8 />
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex gap-[80px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container134 />
      <OverlayBorderShadow1 />
    </div>
  );
}

function ContentBlock() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip px-[320px] py-[96px] relative shrink-0 w-[1920px]" data-name="Content Block">
      <Container133 />
    </div>
  );
}

function Container153() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9e2ebb] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Why wineries love Corksy</p>
      </div>
    </div>
  );
}

function Container154() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">In less than six months of switching to Corksy, customers report:</p>
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9429b0] text-[48px] whitespace-nowrap">
        <p className="leading-[48px]">XX%</p>
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="content-stretch flex flex-col items-center px-[23.36px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[19.25px] mb-0">increase in wine club sign-up</p>
        <p className="leading-[19.25px]">conversions</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur9() {
  return (
    <div className="backdrop-blur-[9px] bg-[rgba(255,255,255,0.58)] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-center min-w-px p-[32px] relative rounded-[20px]" data-name="Overlay+OverlayBlur">
      <div className="absolute inset-0 pointer-events-none rounded-[20px] shadow-[0px_14px_38px_0px_rgba(83,52,131,0.11)]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0.8)] inset-0 rounded-[20px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.85)]" />
      </div>
      <Container156 />
      <Container157 />
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9429b0] text-[48px] whitespace-nowrap">
        <p className="leading-[48px]">XX%</p>
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[21.47px] pr-[21.48px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[19.25px] mb-0">increase in wine club member</p>
        <p className="leading-[19.25px]">retention</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur10() {
  return (
    <div className="backdrop-blur-[9px] bg-[rgba(255,255,255,0.58)] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-center min-w-px p-[32px] relative rounded-[20px]" data-name="Overlay+OverlayBlur">
      <div className="absolute inset-0 pointer-events-none rounded-[20px] shadow-[0px_14px_38px_0px_rgba(83,52,131,0.11)]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0.8)] inset-0 rounded-[20px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.85)]" />
      </div>
      <Container158 />
      <Container159 />
    </div>
  );
}

function Container160() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9429b0] text-[48px] whitespace-nowrap">
        <p className="leading-[48px]">XX%</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur11() {
  return (
    <div className="backdrop-blur-[9px] bg-[rgba(255,255,255,0.58)] content-stretch flex flex-[1_0_0] flex-col gap-[11.625px] items-center min-w-px pb-[50.875px] pt-[32px] px-[32px] relative rounded-[20px]" data-name="Overlay+OverlayBlur">
      <div className="absolute inset-0 pointer-events-none rounded-[20px] shadow-[0px_14px_38px_0px_rgba(83,52,131,0.11)]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0.8)] inset-0 rounded-[20px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.85)]" />
      </div>
      <Container160 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[19.25px]">increase in overall revenue</p>
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9429b0] text-[48px] whitespace-nowrap">
        <p className="leading-[48px]">XX%</p>
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex flex-col items-center px-[23.8px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[19.25px] mb-0">in savings from consolidating</p>
        <p className="leading-[19.25px]">technology</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur12() {
  return (
    <div className="backdrop-blur-[9px] bg-[rgba(255,255,255,0.58)] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-center min-w-px p-[32px] relative rounded-[20px]" data-name="Overlay+OverlayBlur">
      <div className="absolute inset-0 pointer-events-none rounded-[20px] shadow-[0px_14px_38px_0px_rgba(83,52,131,0.11)]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0.8)] inset-0 rounded-[20px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.85)]" />
      </div>
      <Container161 />
      <Container162 />
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex gap-[20px] items-start justify-center py-[16px] relative shrink-0 w-full" data-name="Container">
      <OverlayOverlayBlur9 />
      <OverlayOverlayBlur10 />
      <OverlayOverlayBlur11 />
      <OverlayOverlayBlur12 />
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Container153 />
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a1440] text-[40px] text-center tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[48px]">See Why Wineries Choose Corksy</p>
      </div>
      <Container154 />
      <Container155 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Based on aggregated customer results. Individual outcomes vary.</p>
      </div>
    </div>
  );
}

function ContentBlock1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pt-[96px] px-[320px] relative shrink-0 w-full" data-name="Content Block 2">
      <Container152 />
    </div>
  );
}

function Container165() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9e2ebb] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Customers</p>
      </div>
    </div>
  );
}

function Container166() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[38px] tracking-[-1.14px] whitespace-nowrap">
        <p className="leading-[46px]">In Their Words</p>
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Container">
      <Container165 />
      <Container166 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="SVG">
          <path d="M10.5 4.5L6 9L10.5 13.5" id="Vector" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
        </g>
      </svg>
    </div>
  );
}

function OverlayOverlayBlur13() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-center relative rounded-[22px] shrink-0 size-[44px]" data-name="Overlay+OverlayBlur">
      <div className="absolute left-0 pointer-events-none rounded-[22px] shadow-[0px_4px_14px_0px_rgba(83,52,131,0.08)] size-[44px] top-0" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[22px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.85)]" />
      </div>
      <Svg9 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="SVG">
          <path d="M7.5 4.5L12 9L7.5 13.5" id="Vector" stroke="#9429B0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
        </g>
      </svg>
    </div>
  );
}

function OverlayOverlayBlur14() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-center relative rounded-[22px] shrink-0 size-[44px]" data-name="Overlay+OverlayBlur">
      <div className="absolute left-0 pointer-events-none rounded-[22px] shadow-[0px_4px_14px_0px_rgba(83,52,131,0.08)] size-[44px] top-0" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[22px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.85)]" />
      </div>
      <Svg10 />
    </div>
  );
}

function Container167() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Container">
      <OverlayOverlayBlur13 />
      <OverlayOverlayBlur14 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-[98px] pl-[886.609px] relative" data-name="Margin">
      <Container167 />
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex gap-[32.001px] items-end relative shrink-0 w-full" data-name="Container">
      <Container164 />
      <Margin6 />
    </div>
  );
}

function Svg11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[26px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 26 20" width="26">
        <g clipPath="url(#clip0_0_48)" id="SVG">
          <path d={svgPaths.p2ac70e00} fill="#9429B0" fillOpacity="0.28" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_48">
            <rect fill="white" height="20" width="26" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container169() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[18px] tracking-[-0.2px] w-full">
        <p className="leading-[30px] mb-0">{`"Corksy represents the next chapter in modernizing the winery`}</p>
        <p className="leading-[30px] mb-0">business. Our customers and club members love the user</p>
        <p className="leading-[30px]">{`interface and clean functionality of our new website."`}</p>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Mike Gorman</p>
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7c7594] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Kivelstadt Cellars</p>
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0" data-name="Container">
      <Container171 />
      <Container172 />
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="border-[rgba(255,255,255,0.8)] border-solid border-t content-stretch flex items-center pt-[18px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <Container170 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-[63px] pt-[11px] relative w-full" data-name="Margin">
      <HorizontalBorder6 />
    </div>
  );
}

function OverlayShadowOverlayBlur2() {
  return (
    <div className="backdrop-blur-[7px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col gap-[20px] h-[296px] items-start overflow-clip px-[38px] py-[36px] relative rounded-[20px] shadow-[0px_10px_28px_0px_rgba(83,52,131,0.09)] shrink-0 w-[632px]" data-name="Overlay+Shadow+OverlayBlur">
      <Svg11 />
      <Container169 />
      <Margin8 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[296px] items-start left-0 pr-[16px] top-[4px] w-[648px]" data-name="Margin">
      <OverlayShadowOverlayBlur2 />
    </div>
  );
}

function Svg12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[26px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 26 20" width="26">
        <g clipPath="url(#clip0_0_48)" id="SVG">
          <path d={svgPaths.p2ac70e00} fill="#9429B0" fillOpacity="0.28" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_48">
            <rect fill="white" height="20" width="26" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container173() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[18px] tracking-[-0.2px] w-full">
        <p className="leading-[30px] mb-0">{`"Without a doubt, the best decision I have made thus far on`}</p>
        <p className="leading-[30px] mb-0">behalf of my business was to partner with the Corksy team to</p>
        <p className="leading-[30px]">{`create a semi-custom website. The platform is brilliant."`}</p>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Laura Chester</p>
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7c7594] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Details Wine Bar</p>
      </div>
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0" data-name="Container">
      <Container175 />
      <Container176 />
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="border-[rgba(255,255,255,0.8)] border-solid border-t content-stretch flex items-center pt-[18px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <Container174 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-[63px] pt-[11px] relative w-full" data-name="Margin">
      <HorizontalBorder7 />
    </div>
  );
}

function OverlayShadowOverlayBlur3() {
  return (
    <div className="backdrop-blur-[7px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col gap-[20px] h-[296px] items-start overflow-clip px-[38px] py-[36px] relative rounded-[20px] shadow-[0px_10px_28px_0px_rgba(83,52,131,0.09)] shrink-0 w-[632px]" data-name="Overlay+Shadow+OverlayBlur">
      <Svg12 />
      <Container173 />
      <Margin10 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[296px] items-start left-[648px] pr-[16px] top-[4px] w-[648px]" data-name="Margin">
      <OverlayShadowOverlayBlur3 />
    </div>
  );
}

function Container168() {
  return (
    <div className="h-[300px] relative shrink-0 w-full" data-name="Container">
      <Margin7 />
      <Margin9 />
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <div className="bg-[rgba(148,41,176,0.16)] h-[4px] relative rounded-[2px] shrink-0 w-[32px]" data-name="Overlay" />
      <div className="bg-[rgba(148,41,176,0.16)] h-[4px] relative rounded-[2px] shrink-0 w-[32px]" data-name="Overlay" />
      <div className="bg-[rgba(148,41,176,0.16)] h-[4px] relative rounded-[2px] shrink-0 w-[32px]" data-name="Overlay" />
      <div className="bg-[rgba(148,41,176,0.16)] h-[4px] relative rounded-[2px] shrink-0 w-[32px]" data-name="Overlay" />
      <div className="absolute bg-[#9429b0] h-[4px] left-0 rounded-[2px] top-0 w-[32px]" data-name="Background" />
    </div>
  );
}

function Container179() {
  return <div className="h-[16px] relative shrink-0 w-[267px]" data-name="Container" />;
}

function Container180() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold','Noto_Sans:SemiBold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#9429b0] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Read customer stories →</p>
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-[176.4199981689453px] pl-[645.172px] relative" data-name="Margin">
      <Container180 />
    </div>
  );
}

function Container177() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Container178 />
      <Container179 />
      <Margin11 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1280px]">
      <Container163 />
      <Container168 />
      <Container177 />
    </div>
  );
}

function TestimonialSlider() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[96px] relative shrink-0 w-[1920px]" data-name="Testimonial Slider">
      <Frame1 />
    </div>
  );
}

function Container183() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9e2ebb] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Winery Growth Hub</p>
      </div>
    </div>
  );
}

function Container184() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[40px] tracking-[-1.2px] whitespace-nowrap">
        <p className="leading-[48px]">From the Growth Hub</p>
      </div>
    </div>
  );
}

function Container185() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[16px] whitespace-nowrap">
        <p className="leading-[27px] mb-0">Straight answers on running a connected winery business — no fluff, no</p>
        <p className="leading-[27px]">gated PDFs.</p>
      </div>
    </div>
  );
}

function Container182() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start max-w-[560px] min-w-[560px] relative shrink-0" data-name="Container">
      <Container183 />
      <Container184 />
      <Container185 />
    </div>
  );
}

function OverlayOverlayBlur15() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.5)] content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[8px] self-stretch shrink-0" data-name="Overlay+OverlayBlur">
      <div className="absolute inset-0 pointer-events-none rounded-[8px]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.72)]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">Club Operations</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur16() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.5)] content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[8px] self-stretch shrink-0" data-name="Overlay+OverlayBlur">
      <div className="absolute inset-0 pointer-events-none rounded-[8px]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.72)]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">eCommerce</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur17() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.5)] content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[8px] self-stretch shrink-0" data-name="Overlay+OverlayBlur">
      <div className="absolute inset-0 pointer-events-none rounded-[8px]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.72)]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">Compliance</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur18() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.5)] content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[8px] self-stretch shrink-0" data-name="Overlay+OverlayBlur">
      <div className="absolute inset-0 pointer-events-none rounded-[8px]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.72)]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">Marketing</p>
      </div>
    </div>
  );
}

function Container186() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <OverlayOverlayBlur15 />
      <OverlayOverlayBlur16 />
      <OverlayOverlayBlur17 />
      <OverlayOverlayBlur18 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-[472.80999755859375px] pl-[215.188px] relative" data-name="Margin">
      <Container186 />
    </div>
  );
}

function Container181() {
  return (
    <div className="content-stretch flex gap-[32.002px] items-end relative shrink-0 w-full" data-name="Container">
      <Container182 />
      <Margin12 />
    </div>
  );
}

function ConnectedWineryWebsite() {
  return (
    <div className="h-[320px] relative shrink-0 w-full" data-name="Connected winery website">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[162.42%] left-0 max-w-none top-[-31.21%] w-full" src={imgConnectedWineryWebsite} />
      </div>
    </div>
  );
}

function Container189() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9429b0] text-[10px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[normal]">{`Website & Operations`}</p>
      </div>
    </div>
  );
}

function Container190() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[26px] tracking-[-0.6px] w-full">
        <p className="leading-[34px] mb-0">Why Your Winery Website Should Be Connected to</p>
        <p className="leading-[34px]">Your Operations</p>
      </div>
    </div>
  );
}

function Container191() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[15px] w-full">
        <p className="leading-[20px] mb-0">Your website is no longer a digital brochure. Connected to inventory, wine club, and reservations,</p>
        <p className="leading-[20px]">every sale updates in real time.</p>
      </div>
    </div>
  );
}

function Container192() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a9a3bc] text-[11px] w-full">
        <p className="leading-[normal]">By Jacqueline · July 23, 2026</p>
      </div>
    </div>
  );
}

function Container188() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start px-[34px] py-[32px] relative shrink-0 w-full" data-name="Container">
      <Container189 />
      <Container190 />
      <Container191 />
      <Container192 />
    </div>
  );
}

function OverlayShadowOverlayBlur4() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip pb-[2px] relative rounded-[20px] row-1 self-start shadow-[0px_14px_38px_0px_rgba(83,52,131,0.1)] shrink-0" data-name="Overlay+Shadow+OverlayBlur">
      <div aria-hidden className="absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.55)] inset-0 pointer-events-none rounded-[20px]" />
      <ConnectedWineryWebsite />
      <Container188 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.78)]" />
    </div>
  );
}

function Container194() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9429b0] text-[10px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[normal]">Operations</p>
      </div>
    </div>
  );
}

function Container195() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[19px] tracking-[-0.4px] w-full">
        <p className="leading-[28px] mb-0">The Hidden Costs of Disconnected</p>
        <p className="leading-[28px]">Winery Software</p>
      </div>
    </div>
  );
}

function Container196() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[14.5px] w-full">
        <p className="leading-[20px] mb-0">Is your winery tech helping your team — or slowing it down? How</p>
        <p className="leading-[20px] mb-0">a connected platform cuts duplicate data, manual admin, and</p>
        <p className="leading-[20px]">rising software costs.</p>
      </div>
    </div>
  );
}

function Container197() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a9a3bc] text-[11px] w-full">
        <p className="leading-[normal]">By Jacqueline · July 21, 2026</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur19() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.55)] content-stretch flex flex-col gap-[10px] items-start px-[30px] py-[28px] relative rounded-[20px] shrink-0 w-full" data-name="Overlay+OverlayBlur">
      <div className="absolute inset-0 pointer-events-none rounded-[20px] shadow-[0px_14px_38px_0px_rgba(83,52,131,0.1)]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[20px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.78)]" />
      </div>
      <Container194 />
      <Container195 />
      <Container196 />
      <Container197 />
    </div>
  );
}

function Container198() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9429b0] text-[10px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[normal]">Club Operations</p>
      </div>
    </div>
  );
}

function Container199() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[19px] tracking-[-0.4px] w-full">
        <p className="leading-[28px] mb-0">What a Club Release Week Looks Like</p>
        <p className="leading-[28px]">Without Spreadsheets</p>
      </div>
    </div>
  );
}

function Container200() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[14.5px] w-full">
        <p className="leading-[20px] mb-0">Customer choice, bulk processing, and the handful of steps that</p>
        <p className="leading-[20px]">still need a human.</p>
      </div>
    </div>
  );
}

function Container201() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a9a3bc] text-[11px] w-full">
        <p className="leading-[normal]">Growth Hub · latest</p>
      </div>
    </div>
  );
}

function BackgroundOverlayBlur1() {
  return (
    <div className="backdrop-blur-[7px] content-stretch flex flex-col gap-[10px] items-start px-[30px] py-[28px] relative rounded-[20px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(160.68178314265487deg, rgba(247, 239, 250, 0.7) 0%, rgba(255, 255, 255, 0.38) 100%)" }} data-name="Background+OverlayBlur">
      <div className="absolute inset-0 pointer-events-none rounded-[20px]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[20px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.72)]" />
      </div>
      <Container198 />
      <Container199 />
      <Container200 />
      <Container201 />
    </div>
  );
}

function Container202() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#9429b0] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Visit the Growth Hub</p>
      </div>
    </div>
  );
}

function Container203() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9429b0] text-[17px] whitespace-nowrap">
        <p className="leading-[normal]">→</p>
      </div>
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-[17px] pl-[265.422px] relative" data-name="Margin">
      <Container203 />
    </div>
  );
}

function OverlayOverlayBlur20() {
  return (
    <div className="backdrop-blur-[7px] bg-[rgba(255,255,255,0.5)] content-stretch flex gap-[13.998px] items-center px-[30px] py-[24px] relative rounded-[20px] shrink-0 w-full" data-name="Overlay+OverlayBlur">
      <div className="absolute inset-0 pointer-events-none rounded-[20px]" data-name="Overlay+Shadow">
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[20px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.72)]" />
      </div>
      <Container202 />
      <Margin13 />
    </div>
  );
}

function Container193() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[20px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <OverlayOverlayBlur19 />
      <BackgroundOverlayBlur1 />
      <OverlayOverlayBlur20 />
    </div>
  );
}

function Container187() {
  return (
    <div className="gap-x-[20px] gap-y-[20px] grid grid-cols-[__minmax(0,1.50fr)_minmax(0,1fr)] grid-rows-[_569px] h-[569px] relative shrink-0 w-full" data-name="Container">
      <OverlayShadowOverlayBlur4 />
      <Container193 />
    </div>
  );
}

function GrowthHub() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pt-[96px] px-[320px] relative shrink-0 w-[1920px]" data-name="Growth Hub">
      <Container181 />
      <Container187 />
    </div>
  );
}

function PreFooter() {
  return (
    <div className="content-stretch flex flex-col items-start px-[320px] py-[96px] relative shrink-0 w-[1920px]" data-name="Pre-footer">
      <InnerCta className="h-[300px] overflow-clip relative rounded-[16px] shrink-0 w-[1280px]" />
    </div>
  );
}

function Corksy1() {
  return (
    <div className="aspect-[298.6600036621094/24] relative shrink-0 w-full" data-name="Corksy">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[29.44%] max-w-none top-0 w-[41.12%]" src={imgCorksy} />
      </div>
    </div>
  );
}

function Container206() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[280px] relative shrink-0 w-[280px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[15px] whitespace-nowrap">
        <p className="leading-[25px] mb-0">The all-in-one DTC platform for wineries</p>
        <p className="leading-[25px]">{`— POS, wine club, eCommerce & more.`}</p>
      </div>
    </div>
  );
}

function Container205() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[14px] items-start justify-self-stretch pb-[45px] relative row-1 self-start shrink-0" data-name="Container">
      <Corksy1 />
      <Container206 />
    </div>
  );
}

function Container208() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[16px] w-full">
        <p className="leading-[normal]">Platform</p>
      </div>
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container208 />
    </div>
  );
}

function Container209() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[15px] w-full">
        <p className="leading-[normal]">{`Club & Subscriptions`}</p>
      </div>
    </div>
  );
}

function Container210() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[15px] w-full">
        <p className="leading-[normal]">{`POS & Corksy Go`}</p>
      </div>
    </div>
  );
}

function Container211() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[15px] w-full">
        <p className="leading-[normal]">{`eCommerce & Website`}</p>
      </div>
    </div>
  );
}

function Container212() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[15px] w-full">
        <p className="leading-[normal]">{`Shipping & Compliance`}</p>
      </div>
    </div>
  );
}

function Container207() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[10px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Margin14 />
      <Container209 />
      <Container210 />
      <Container211 />
      <Container212 />
    </div>
  );
}

function Container214() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[16px] w-full">
        <p className="leading-[normal]">Company</p>
      </div>
    </div>
  );
}

function Margin15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container214 />
    </div>
  );
}

function Container215() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[15px] w-full">
        <p className="leading-[normal]">About</p>
      </div>
    </div>
  );
}

function Container216() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[15px] w-full">
        <p className="leading-[normal]">Customers</p>
      </div>
    </div>
  );
}

function Container217() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[15px] w-full">
        <p className="leading-[normal]">Careers</p>
      </div>
    </div>
  );
}

function Container218() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[15px] w-full">
        <p className="leading-[normal]">Contact</p>
      </div>
    </div>
  );
}

function Container213() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[10px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Margin15 />
      <Container215 />
      <Container216 />
      <Container217 />
      <Container218 />
    </div>
  );
}

function Container220() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[16px] w-full">
        <p className="leading-[normal]">Resources</p>
      </div>
    </div>
  );
}

function Margin16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container220 />
    </div>
  );
}

function Container221() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[15px] w-full">
        <p className="leading-[normal]">Growth Hub</p>
      </div>
    </div>
  );
}

function Container222() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[15px] w-full">
        <p className="leading-[normal]">Help centre</p>
      </div>
    </div>
  );
}

function Container223() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[15px] w-full">
        <p className="leading-[normal]">Migration guide</p>
      </div>
    </div>
  );
}

function Container224() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[15px] w-full">
        <p className="leading-[normal]">Status</p>
      </div>
    </div>
  );
}

function Container219() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[10px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Margin16 />
      <Container221 />
      <Container222 />
      <Container223 />
      <Container224 />
    </div>
  );
}

function Container226() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1826] text-[16px] w-full">
        <p className="leading-[normal]">Legal</p>
      </div>
    </div>
  );
}

function Margin17() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container226 />
    </div>
  );
}

function Container227() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[15px] w-full">
        <p className="leading-[normal]">Privacy</p>
      </div>
    </div>
  );
}

function Container228() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[15px] w-full">
        <p className="leading-[normal]">Terms</p>
      </div>
    </div>
  );
}

function Container229() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5472] text-[15px] w-full">
        <p className="leading-[normal]">Security</p>
      </div>
    </div>
  );
}

function Container225() {
  return (
    <div className="col-5 content-stretch flex flex-col gap-[10px] items-start justify-self-stretch pb-[27px] relative row-1 self-start shrink-0" data-name="Container">
      <Margin17 />
      <Container227 />
      <Container228 />
      <Container229 />
    </div>
  );
}

function HorizontalBorder8() {
  return (
    <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[_____minmax(0,1.40fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_133px] h-[214px] pb-[40px] pt-[41px] relative shrink-0 w-[1280px]" data-name="HorizontalBorder">
      <Container205 />
      <Container207 />
      <Container213 />
      <Container219 />
      <Container225 />
    </div>
  );
}

function Container231() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7490] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">© 2026 Corksy</p>
      </div>
    </div>
  );
}

function Container232() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7a7490] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">Built by people who have closed a tasting room at 6pm</p>
      </div>
    </div>
  );
}

function Margin18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-[381.6099853515625px] pl-[816.922px] relative" data-name="Margin">
      <Container232 />
    </div>
  );
}

function Container230() {
  return (
    <div className="content-stretch flex gap-[15.998px] items-center relative shrink-0 w-[1280px]" data-name="Container">
      <Container231 />
      <Margin18 />
    </div>
  );
}

function Container204() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[40px] pt-[32px] px-[64px] relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder8 />
      <Container230 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white border border-[rgba(131,120,160,0.22)] border-solid content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Section">
      <Container204 />
    </div>
  );
}

export default function MockupHomePage() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(180deg, rgba(239, 237, 251, 0.6) 0%, rgba(233, 231, 247, 0.6) 30%, rgba(239, 233, 249, 0.6) 60%, rgba(234, 232, 248, 0.6) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Mockup Home Page">
      <Section />
      <Container17 />
      <Background6 />
      <Section1 />
      <Section2 />
      <ContentBlock />
      <ContentBlock1 />
      <TestimonialSlider />
      <GrowthHub />
      <PreFooter />
      <Section3 />
    </div>
  );
}