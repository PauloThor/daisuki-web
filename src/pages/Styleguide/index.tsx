import Favorites from "../../components/Favorites";

const Styleguide = () => {
  const mock = [
    {
      name: "Hunter x Hunter",
      onPress: () => console.log(),
    },
    {
      name: "Code Geass",
      onPress: () => console.log(),
    },
    {
      name: "Full Metal Alchemist",
      onPress: () => console.log(),
    },
    {
      name: "Naruto",
      onPress: () => console.log(),
    },
  ];

  return (
    <div>
      <Favorites onClose={() => console.log()} list={mock} />
    </div>
  );
};

export default Styleguide;
