export const ContentAdminLayout = ({ children, title }) => {
  return (
    <section className="w-full h-full flex py-12 px-8">
      <div className="w-full h-full flex flex-col gap-2">
        <h1 className="text-4xl text-[#1A69B2] font-bold">{title}</h1>
        {children}
      </div>
    </section>
  );
};
