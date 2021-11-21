import { NavLink, Outlet } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="App">
      <h1>Practicing of Hooks</h1>
      <nav>
        <NavLink
          to="usestatHook"
          style={({ isActive }) => {
            return { color: isActive ? "blue" : "" };
          }}
        >
          Hook : useState
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="usestateClass"
          style={({ isActive }) => {
            return { color: isActive ? "blue" : "" };
          }}
        >
          Class setState
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="useinput"
          style={({ isActive }) => {
            return { color: isActive ? "blue" : "" };
          }}
        >
          Hook : useInput
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="usetabs"
          style={({ isActive }) => {
            return { color: isActive ? "blue" : "" };
          }}
        >
          Hook : useTabs
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="useeffect"
          style={({ isActive }) => {
            return { color: isActive ? "blue" : "" };
          }}
        >
          Hook : useEffect
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="usetitle"
          style={({ isActive }) => {
            return { color: isActive ? "blue" : "" };
          }}
        >
          Hook : useTitle
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="useclick"
          style={({ isActive }) => {
            return { color: isActive ? "blue" : "" };
          }}
        >
          Hook : useClick
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="useconfirm"
          style={({ isActive }) => {
            return { color: isActive ? "blue" : "" };
          }}
        >
          Hook : useConfirm
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="usepreventleave"
          style={({ isActive }) => {
            return { color: isActive ? "blue" : "" };
          }}
        >
          Hook : usePreventLeave
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="usebeforeleave"
          style={({ isActive }) => {
            return { color: isActive ? "blue" : "" };
          }}
        >
          Hook : useBeforeLeave
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="usefadein"
          style={({ isActive }) => {
            return { color: isActive ? "blue" : "" };
          }}
        >
          Hook : useFadeIn
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="usenetwork"
          style={({ isActive }) => {
            return { color: isActive ? "blue" : "" };
          }}
        >
          Hook : useNetwork
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="usescroll"
          style={({ isActive }) => {
            return { color: isActive ? "blue" : "" };
          }}
        >
          Hook : useScroll
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="usefullscreen"
          style={({ isActive }) => {
            return { color: isActive ? "blue" : "" };
          }}
        >
          Hook : useFullScreen
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Home;
