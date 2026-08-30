import ServiceItem from "../Components/ServiceItem";
import ServiceList from "../Components/ServiceList";

const Services = () => {
  const services = [
    "Web Development",
    "Mobile App Development",
    "Consulting Services",
    "Digital Marketing",
  ];

  return (
    <>
      <div>
        <h1>Our Services</h1>
        <ServiceList>
          {services.map((service) => (
            <ServiceItem key={service} serviceName={service} />
          ))}
        </ServiceList>
      </div>
    </>
  );
};

export default Services;
