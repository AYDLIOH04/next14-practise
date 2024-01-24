export const JsonCode = ({ data }: { data: any }) => {
  return (
    <div className="mx-auto w-full flex-1 rounded-md border-2 border-secondary p-8 text-white lg:mx-0">
      <pre className="min-h-[200px] w-full whitespace-pre-wrap text-[14px] md:text-[16px]">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};
