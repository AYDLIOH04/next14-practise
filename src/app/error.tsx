"use client";

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="h-[95vh] w-full flex justify-center items-center text-center">
      <div className="flex flex-col gap-2">
        <h1 className="page-title mb-0">
          Error<span className="text-accent ml-1">!</span>
        </h1>
        <p>{error.message}</p>
      </div>
    </div>
  );
};

export default Error;
