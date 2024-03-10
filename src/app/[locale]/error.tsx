"use client";

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="flex h-[95vh] w-full items-center justify-center text-center">
      <div className="flex flex-col gap-2">
        <h1 className="page-title mb-0">
          Error<span className="ml-1 text-accent">!</span>
        </h1>
        <p>{error.message}</p>
      </div>
    </div>
  );
};

export default Error;
