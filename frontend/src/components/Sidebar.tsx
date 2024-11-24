import { Link } from "@tanstack/react-router";
import TagIcon from "../icons/TagIcon";
import TwitterIcon from "../icons/TwitterIcon";
import VideoIcon from "../icons/VideoIcon";
import HomeIcon from "../icons/HomeIcon";

export default function Sidebar() {
  return (
    <div className="relative flex w-full max-w-[17rem] flex-col bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
      <div className="p-4 mb-2">
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          BrainDeck
        </h5>
      </div>
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        <Link
          role="button"
          to="/"
          activeProps={{
            className: "bg-blue-100 bg-opacity-80 text-blue-900 rounded-md",
          }}
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-900   "
        >
          <div className="grid mr-4 place-items-center">
            <HomeIcon />
          </div>
          Home
        </Link>
        <Link
          role="button"
          activeProps={{
            className: "bg-blue-100 bg-opacity-80 text-blue-900 rounded-md",
          }}
          to="/videos"
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-900   "
        >
          <div className="grid mr-4 place-items-center">
            <VideoIcon />
          </div>
          Videos
        </Link>
        <Link
          role="button"
          activeProps={{
            className: "bg-blue-100 bg-opacity-80 text-blue-900 rounded-md",
          }}
          to="/tweets"
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-900   "
        >
          <div className="grid mr-4 place-items-center">
            <TwitterIcon />
          </div>
          Twitts
        </Link>
        <Link
          activeProps={{
            className: "bg-blue-100 bg-opacity-80 text-blue-900 rounded-md",
          }}
          role="button"
          to="/tags"
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-900   "
        >
          <div className="grid mr-4 place-items-center">
            <TagIcon />
          </div>
          Tags
        </Link>
        <Link
          role="button"
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-900   "
        >
          <div className="grid mr-4 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          Logout
        </Link>
      </nav>
    </div>
  );
}
