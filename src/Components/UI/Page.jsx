/* eslint-disable react/prop-types */
const Page = (props) => {
  return (
    <div
      className={`flex h-screen bg-gradient-to-b from-transparent via-stone-300 to-neutral-400 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Page;
