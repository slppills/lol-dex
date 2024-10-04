import React from "react";

const InfoListLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-screen">
      <div className="absolute inset-0 bg-[url('/assets/images/riftBackground.webp')] bg-no-repeat bg-center bg-cover brightness-50" />
      <div className="relative pt-[90px] pb-[60px] overflow-y-scroll h-full">
        <div className="mt-[80px] mx-auto max-w-[1300px]">{children}</div>
      </div>
    </div>
  );
};

export default InfoListLayout;
