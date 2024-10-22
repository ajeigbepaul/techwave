import PRDIcon from "@/public/PRicon.svg";
import PitchIcon from "@/public/PitchIcon.svg";
import ProIcon from "@/public/ProDIcon.svg";
import DataAIcon from "@/public/DataAnaIcon.svg";
import ProdManIcon from "@/public/prodm.svg";

export const navItems = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About us", link: "/aboutus" },
  {
    id: 3,
    title: "Our services",

    subLinks: [
      {
        title: "Product Research and Design",
        Icon: PRDIcon,
        link: "/ourservices/productresearch",
      },
      {
        title: "Pitch Development",
        Icon: PitchIcon,
        link: "/ourservices/pitchdevelopment",
      },
      {
        title: "Product Development",
        Icon: ProIcon,
        link: "/ourservices/productdevelopement",
      },
      {
        title: "Data Analytics",
        Icon: DataAIcon,
        link: "/ourservices/dataanalytics",
      },
      {
        title: "Product Management",
        Icon: ProdManIcon,
        link: "/ourservices/productmanagement",
      },
    ],
    link: "#",
  },
  { id: 4, title: "Our workflow", link: "/workflow" },
  { id: 5, title: "Innovations", link: "/innovations" },
];

export const banner = [
  {
    contour: "/bgcontour.svg",
    imagebg: "/bg1green.svg",
    image: "/techwavebg1.png",
    description1: "Forging Dreams into",
    emphasytext: "Digital Realities",
    description1b: "",
    descr2:
      "We Transform Ideas into Innovative Tech Solutions,Empowering Africa's Future.",
    position: 1,
  },
  {
    contour: "/bgblackcontour.svg",
    imagebg: "/bg1black.svg",
    image: "/techwavebg2.png",
    description1: "Research",
    description1b: "& Consulting",
    emphasytext: "Innovation,",
    descr2: "Work with our engineering team to build what you want",
    position: 2,
  },
];
export const workwith = [
  "/alumniass.svg",
  "/ansop.svg",
  "/clearline.svg",
  "/logistichub.svg",
  "/mantid.svg",
  "/truekeeper.svg",
];

export const services = [
  {
    id: 1,
    title: "Product Development",
    icon: "/proddev.svg",
    image: "/proddevbg.svg",
    bgcolor: "#9136A8",
    descri:
      "We specialize in creating innovative and user-friendly web and mobile applications. Our solutions are designed to enhance user experience and drive digital transformation.",
  },
  {
    id: 2,
    title: "Product design",
    icon: "/proddes.svg",
    image: "/proddesbg.svg",
    bgcolor: "#DDE8B9",
    descri:
      "Our UI design expertise seamlessly blends elegance and functionality, ensuring interactions that delight users and elevate your product's appeal.",
  },
  {
    id: 3,
    title: "Data Analytics & Visualization",
    icon: "/dataanalytics.svg",
    image: "/dataanalyticsbg.svg",
    bgcolor: "#001021",
    descri:
      "Our data analytics services harness the power of data to uncover valuable patterns, enabling informed decisions that optimize operations, drive growth, and transform businesses into data-driven success stories.",
  },
];

export const experience = [
  {
    id: 1,
    title: "Energy",
    icon: "/energy.svg",
    cardColor: "#F9FBFF",
    descri:
      "We have consulted for startups in the energy sector to understand what they are looking to build and how they can best represent themselves digitally.",
  },
  {
    id: 2,
    title: "Logistics",
    icon: "/logistics.svg",
    cardColor: "#F9FBFF",
    descri:
      "We have built a product for a logistics company which allows them to run their last mile delivery business, helping them raise pre-seed funds and scaling their company to reach more customers and providers.",
  },
  {
    id: 3,
    title: "Real estate",
    icon: "/realestate.svg",
    cardColor: "#F9FBFF",
    descri:
      "We consulted for a real estate entrepreneur who was ooking to build an asset management tool. We developed a mobile app, its official website and web App for those accustomed to bigger screens.",
  },
  {
    id: 4,
    title: "Health",
    icon: "/health.svg",
    cardColor: "#F9FBFF",
    descri:
      "We have worked with both a health insurance and pharmaceutical company to design and build their digital footprint understanding its business workflow and curated a website to better connect with its customers.",
  },
  {
    id: 5,
    title: "Education",
    icon: "/education.svg",
    cardColor: "#F9FBFF",
    descri:
      "Techwave consulted for one of the leading public universities to build a website. mobile app and admin app to run specitic needed tasks for its alumni association.",
  },
  {
    id: 6,
    title: "Charity",
    icon: "/charity.svg",
    cardColor: "#F9FBFF",
    descri:
      "As agents of light who are interested in the development of the community, we partnered with an institution to build a platform that helps with the collection of charity items and resources for communitv service",
  },
];

export const casestudy = [
  {
    id: 1,
    icon: "/logistichubsec.svg",
    mainimage: "/log1.png",
    sideimage: "/log2.png",
    cardColor: "#1778C9",
    descr:
      "We consulted for a logistics company who were looking to build a mobile app to help its riders easily accept and complete orders. We also worked with them to deliver a client and admin platform to control the orders, riders, customers and more.",
  },
  {
    id: 2,
    icon: "/ifeoluwa.svg",
    mainimage: "/ife1.png",
    sideimage: "/ife2.png",
    cardColor: "#E4FFDB",
    descr:
      "We consulted for one of the leading politicians looking to build a website that represents its foundation and what he is doing in the community. We also built an admin app to help his team better manage information placed on the platform",
  },
  {
    id: 3,
    icon: "/mantid2.svg",
    mainimage: "/man1.png",
    sideimage: "/man2.png",
    cardColor: "#E8D5FF",
    descr:
      "We consulted for a real estate entrepreneur who was looking to build an asset management tool. We developed a mobile app, its official website and web App for those accustomed to bigger screens.",
  },
  {
    id: 4,
    icon: "/alumniassociation.svg",
    mainimage: "/al1.png",
    sideimage: "/al2.png",
    cardColor: "#FFECCA",
    descr:
      "Techwave consulted for one of the leading public universities to build a website, mobile app and admin app to run specific needed tasks for its alumni association.",
  },
];

export const phase = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Explore",
    descr:
      "We begin by thoroughly understanding your needs, objectives, and challenges to gather key insights.",
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Strategize",
    descr:
      "We craft a detailed plan that outlines the approach, resources, and timelines required to achieve your goals.",
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Implement",
    descr:
      "Our skilled team executes the plan using advanced technologies and best practices to bring your vision to life.",
  },
  {
    id: 4,
    phase: "Phase 4",
    title: "Deliver",
    descr:
      "We deliver the final product with precision, providing ongoing support to ensure its success and your satisfaction",
  },
];

export const service = [
  {
    id: 1,
    title: "User Research",
    icon: "/service.svg",
    cardColor: "#ffffff",
    descri:
      "User-centric design ensures that your product resonates with its intended audience, leading to higher user satisfaction and adoption rates.",
  },
  {
    id: 2,
    title: "Ideation",
    icon: "/service.svg",
    cardColor: "#ffffff",
    descri:
      "Our team collaborates to brainstorm and develop innovative concepts based on the research insights. ",
  },
  {
    id: 3,
    title: "Prototyping",
    icon: "/service.svg",
    cardColor: "#ffffff",
    descri:
      "Prototyping reduces risks by identifying and addressing potential problems early in the development process.",
  },
  {
    id: 4,
    title: "Design",
    icon: "/service.svg",
    cardColor: "#ffffff",
    descri:
      "A well-designed product enhances user experience and satisfaction, increasing the likelihood of success in the market.",
  },
];
export const dataanlytics = [
  {
    id: 1,
    title: "Data Collection and Management",
    icon: "/service.svg",
    cardColor: "#ffffff",
    descri:
      "Reliable and well-organized data sets form the foundation for accurate analysis and insightful results.",
  },
  {
    id: 2,
    title: "Data Analysis",
    icon: "/service.svg",
    cardColor: "#ffffff",
    descri:
      "Deep data analysis helps you understand your business performance, identify opportunities, and mitigate risks.",
  },
  {
    id: 3,
    title: "Reporting and Insights",
    icon: "/service.svg",
    cardColor: "#ffffff",
    descri:
      "Actionable insights from detailed reports help you make informed decisions that drive business growth and efficiency.",
  },
  {
    id: 4,
    title: "Custom Analytics Solutions",
    icon: "/service.svg",
    cardColor: "#ffffff",
    descri:
      "Tailored solutions ensure that you get the most relevant and impactful insights for your specific business needs.",
  },
];
export const productmanage = [
  {
    id: 1,
    title: "Market Research",
    icon: "/marketresearch.svg",
    cardColor: "#F9FBFF",
    descri:
      "Identify trends, customer needs, and opportunities for growth with in-depth market analysis.",
  },
  {
    id: 2,
    title: "Product Strategy",
    icon: "/productstrategy.svg",
    cardColor: "#F9FBFF",
    descri:
      "Create a roadmap for your product's success, aligning features and development timelines with business objectives",
  },
  {
    id: 3,
    title: "Launch Planning",
    icon: "/launchplanning.svg",
    cardColor: "#F9FBFF",
    descri:
      "Prepare for a successful product launch with targeted marketing, user feedback integration, and go-to-market strategies.",
  },
 
];

export const productdevelopement = [
  { title: "Planning and Strategy", icon: "/planinng.svg" },
  { title: "UI/UX Design", icon: "/ui.svg" },
  { title: "Development", icon: "/dev.svg" },
  { title: "Maintainance and Support", icon: "/support.svg" },
  { title: "Testing and Q/A", icon: "/qa.svg" },
  { title: "Deployment and Launch", icon: "/launch.svg" },
];

export const pitch = [
  { title: "Market analysis", descr: "With accurate market data, your pitch will be more convincing and tailored to address real market needs and opportunities." },
  { title: "Presentation Design", descr: "A well-designed presentation enhances the overall impact of your pitch, keeping your audience engaged and making complex information easy to understand." },
  { title: "Financial Modeling", descr: "A solid financial model adds credibility to your pitch, reassuring investors and stakeholders of the financial soundness of your proposal." },
  { title: "Value Proposition Creation", descr: "A strong value proposition ensures that your audience understands the distinct advantages of your offering, making your pitch more persuasive." },
  { title: "Pitch Coaching", descr: "Effective coaching ensures you present your pitch with confidence and poise, increasing your chances of success." },
  { title: "Pitch Deck Review", descr: "Effective coaching ensures you present your pitch with confidence and poise, increasing your chances of success." },
];
