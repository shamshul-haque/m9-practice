import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const phone = useLoaderData();
  return (
    <div>
      <h3>Name: {phone.name}</h3>
      <img src={phone.image} alt="" />
    </div>
  );
};

export default Phone;
