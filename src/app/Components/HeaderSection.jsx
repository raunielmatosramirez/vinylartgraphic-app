const HeaderSection = ({ title, text }) => {
  return (
    <>
      <div className='font-bold text-4xl mt-40' style={{ color: "#FFFF00" }}>
        <h1>{title}</h1>
      </div>
      <p className='mt-4 mb-4 text-white max-w-md text-sm '>{text}</p>
    </>
  );
};
export default HeaderSection;
