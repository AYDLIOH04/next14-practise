const Loading = () => {
  return (
    <div className="flex h-60 w-full animate-pulse items-center justify-center rounded-md border-2 border-secondary p-10">
      <div className="animate-spin-slow rounded-full border-2 border-dashed border-rose-400 p-8 duration-300" />
    </div>
  );
};

export default Loading;
