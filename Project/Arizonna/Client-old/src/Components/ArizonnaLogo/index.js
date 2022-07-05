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
    <button className="text-white no-underline mb-[2vh] relative">
      <i class="fa-brands fa-atlassian "></i>
      {collapsedState ? "" : arizonnaNotCollapsed()}
    </button>
  );
}
