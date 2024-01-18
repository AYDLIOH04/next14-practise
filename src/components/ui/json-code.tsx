export const JsonCode = ({ data }: { data: any }) => {
  return (
    <div className="flex-1 rounded-md border-secondary border-2 p-8 text-white w-full lg:mx-0 mx-auto">
      <pre className="md:text-[16px] text-[14px] whitespace-pre-wrap w-full min-h-[200px]">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};
