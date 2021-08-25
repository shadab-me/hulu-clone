const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="group flex flex-col cursor-pointer w-12 text-gray-300 hover:text-white text-center">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 tracking-widest group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
