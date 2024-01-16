export const Code = ({ data }: { data: any }) => {
  return (
    <div className="flex-1 rounded-md border-secondary border-2 p-8 text-white lg:w-1/2 sm:w-2/3 w-full lg:mx-0 mx-auto">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
