import React from "react";
import NewChat from "./NewChat";

const SideBar = () => {
    
    
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        {/* New chat */}
        <NewChat />

        <div>{/* Model selection */}</div>

        {/* Map through the chat rows */}
      </div>
    </div>
  );
};

export default SideBar;
