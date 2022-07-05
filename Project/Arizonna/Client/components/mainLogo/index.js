import React from "react";

function MainLogo({ collapsedState }) {
  function arizonnaNotCollapsed() {
    return (
      <div className="absolute left-[5vw] font-[500] font-[montserrat] text-[3.2vw] top-[-1vh] ease-in-out duration-1000">
        Arizonna
      </div>
    );
  }

  return (
    <button className="text-white text-[5vh] mt-[1vw] pl-[1.5vw] font-[300] no-underline mb-[2vh] z-10 relative ">
      <i class="fa-brands fa-atlassian text-cyan-400 text-[6vh]"></i>
      {collapsedState ? "" : arizonnaNotCollapsed()}
    </button>
  );
}

export default MainLogo;
