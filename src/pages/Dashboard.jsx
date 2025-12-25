import { FilePenLine, Plus, Upload } from "lucide-react";
import { dummyResumeData } from "../assets/assets";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const colours = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];
  const [allResumes, setAllResumes] = useState([]);

  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData);
  };

  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <div className="w-3/4 mx-auto min-h-screen pt-30 px-6 pb-10 text-neutral-100">
      <div className="flex gap-4">
        <button className="w-42 h-42 border hover:border-dashed hover:border-green-500/80 border-green-500/20 bg-green-300/5 backdrop-blur-sm flex flex-col gap-3 items-center justify-center rounded-xl transition-all duration-200 ease-in-out cursor-pointer">
          <div className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full">
            <Plus className="text-green-950 font-semibold" />
          </div>
          <span className="text-sm font-semibold">Create Resume</span>
        </button>

        <button className="w-42 h-42 border hover:border-dashed hover:border-neutral-300/80 border-neutral-300/20 bg-neutral-300/5 backdrop-blur-sm flex flex-col gap-3 items-center justify-center rounded-xl transition-all duration-200 ease-in-out cursor-pointer">
          <div className="bg-neutral-200 w-10 h-10 flex items-center justify-center rounded-full">
            <Upload className="text-neutral-950 font-semibold" />
          </div>
          <span className="text-sm font-semibold">Upload Resume</span>
        </button>
      </div>

      <hr className="my-6 text-neutral-500/40 border-dashed" />

      <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
        {allResumes.map((d, index) => {
          const baseColour = colours[index % colours.length];
          return (
            <button
              key={index}
              className="relative hover:border-dashed w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${baseColour}10), ${baseColour}40`,
                borderColor: `${baseColour}40`,
              }}
            >
                <FilePenLine size={25} style={{color: `${baseColour}`}}/>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
