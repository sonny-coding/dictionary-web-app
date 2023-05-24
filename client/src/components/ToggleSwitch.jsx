// eslint-disable-next-line react/prop-types
const ToggleSwitch = ({ toggleDark }) => {
  const handleChange = () => {
    toggleDark();
  };
  return (
    <label
      htmlFor="check"
      className="relative w-10 h-5 rounded-full overflow-hidden"
    >
      <input
        className="sr-only peer"
        type="checkbox"
        id="check"
        onChange={handleChange}
      />
      <span className="absolute w-full h-full bg-gray1 hover:bg-purple peer-checked:bg-purple transition-all duration-100"></span>
      <span className="absolute w-2/5 h-4/5 bg-white left-1 top-[3px] rounded-full peer-checked:left-5 transition-all duration-500 z-10"></span>
    </label>
  );
};

export default ToggleSwitch;
