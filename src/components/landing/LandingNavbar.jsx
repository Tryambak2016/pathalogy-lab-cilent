import { Share2 } from "lucide-react";

const LandingNavbar = ({ openSignIn, openSignUp }) => {
  return (
    <nav className="w-full p-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Share2 className="text-blue-600" />
        <span className="text-lg font-medium text-black truncate">
          Cloud Share
        </span>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={openSignIn}
          className="px-4 py-2 bg-white text-purple-600 border border-purple-600 rounded-full hover:bg-purple-50 transition"     
        >
          Sign In
        </button>
        <button
          onClick={openSignUp}
          className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default LandingNavbar;
