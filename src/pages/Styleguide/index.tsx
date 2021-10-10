import Profile from "../../components/Profile";
import UpdateForm from "../../components/UpdateForm";

const Styleguide = () => {
  return (
    <div>
      <Profile onClose={() => console.log()} />
      <UpdateForm />
    </div>
  );
};

export default Styleguide;
