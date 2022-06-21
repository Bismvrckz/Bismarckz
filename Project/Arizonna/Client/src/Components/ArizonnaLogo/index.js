import { Link } from "react-router-dom";

export default function MainLogo({ collapsedState }) {
  function arizonnaNotCollapsed() {
    return (
      <div className="absolute left-[7vh] top-0 ease-in-out duration-1000">
        Arizonna
      </div>
    );
  }

  return (
    <button className="text-white text-[5vh] font-[300] no-underline mb-[2vh] z-10 relative ">
      <i class="fa-brands fa-atlassian text-cyan-400"></i>
      {collapsedState ? "" : arizonnaNotCollapsed()}
    </button>
  );
}
