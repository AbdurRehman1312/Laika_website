// BridgeContent.js
import React from "react";
import { TabsDemo } from "./TabsDemo";

const BridgeContent = () => {
  return (
    <div
      className={`bg-[#091017] lg:rounded-t-[100px] rounded-t-[40px] bridge_box py-20 flex justify-center items-center mb-10 `}
    >
      <TabsDemo />
    </div>
  );
};

export default BridgeContent;
