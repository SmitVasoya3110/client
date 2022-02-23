import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import HeaderSection from "../../../components/HeaderSection";
import ServiceHeader from "./ServiceHeader";
import { getDataById } from "./serviceDetailsData";
import "../../../styles/ServiceDetails.scss";
import ContactFormSection from "../../Contact/ContactFormSection";
import BulletPointsSection from "./BulletPointsSection";
import TechStack from "./TechStack";
import DevelopmentStages from "./DevelopmentStages";

const ServiceDetails = () => {
  const { slug } = useParams();
  const [data, setData] = useState("");

  useEffect(async () => {
    const data = await getDataById({ slug });
    setData(data);
  }, [slug]);

  console.log(slug);
  console.log("data", data);

  if (data.length === 0) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <Helmet>
        <title>{data.heading}</title>
        <meta name="description" content={data.headerContent} />
      </Helmet>
      {/* <HeaderSection title={data.heading} /> */}
      <ServiceHeader
        heading={data.heading}
        headerContent={data.headerContent}
        img={data.img}
        bgImg={data.bgImg}
      />
      <BulletPointsSection whyus={data.whyus} heading={data.heading} />
      <TechStack techStack={data.techStack} />
      <DevelopmentStages />
      <ContactFormSection />
    </div>
  );
};

export default ServiceDetails;
