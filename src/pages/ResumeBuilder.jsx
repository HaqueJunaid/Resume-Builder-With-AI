import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dummyResumeData } from "../assets/assets";
import { ArrowLeft, Briefcase, ChevronLeft, ChevronRight, FileText, FolderIcon, GraduationCap, SparkleIcon, User } from "lucide-react";
import PersonalForm from "../components/PersonalForm";
import Preview from "../components/Preview";
import TempelateSelector from "../components/TempelateSelector";
import AccentSelector from "../components/AccentSelector";

const ResumeBuilder = () => {
  const { resumeId } = useParams();
  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: "classic",
    accent_color: "#3b82f6",
    public: false,
  });

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);

  const sections = [
    {id: 'personal', name: 'Personal Info', icon: User},
    {id: 'summary', name: 'Summary', icon: FileText},
    {id: 'experience', name: 'Experience', icon: Briefcase},
    {id: 'education', name: 'Education', icon: GraduationCap},
    {id: 'projects', name: 'Projects', icon: FolderIcon},
    {id: 'skills', name: 'Skills', icon: SparkleIcon},
  ]

  const activeSection = sections[activeSectionIndex];

  const loadExistingResume = async () => {
    const resume = dummyResumeData.find((resume) => resume._id === resumeId);
    if (resume) {
      setResumeData(resume);
      document.title = resume.title;
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadExistingResume();
  }, []);

  return (
    <div className="relative w-full lg:w-3/4 mx-auto min-h-screen px-6 pt-25 lg:pt-28  lg:px-6 pb-10 text-neutral-100">
      <div className="flex flex-col lg:flex-row gap-6 w-full min-h-scree">
        <div className="flex-2 h-screen">
          <Link
            to="/app"
            className="flex items-center justify-center gap-1 w-fit text-neutral-400 hover:text-neutral-200 text-sm border px-3 py-1.5 rounded-md hover:border-green-500/80 transition-all ease-in-out duration-300 border-green-500/30 bg-neutral-950/50 backdrop-blur-md"
          >
            <ArrowLeft className="size-5" />
            Back to dashboard
          </Link>
          <div className="relative overflow-hidden mt-6 bg-black rounded-lg border border-green-500/30 p-6 pt-1">
            {/* Progress Bar */}
            <hr className="absolute top-0 left-0 right-0 border-2 border-green-500/30" />
            <hr className="absolute top-0 left-0 h-1 bg-linear-to-r from-green-500 to-green-600 border-none transition-all ease-in-out duration-300" style={{width: `${activeSectionIndex * 100 / (sections.length - 1)}%`}} />

            {/* Nav */}
            <div className="flex justify-between items-center mb-6 border-b border-green-500/30 py-2">
              {/* Buttons */}
              <div className="flex itemce-center gap-2">
                <TempelateSelector selectedTempelate={resumeData.template} onChange={(template) => setResumeData(prev => ({...prev, template}))} />
                <AccentSelector selectedColor={resumeData.accent_color} onChange={(accent_color) => setResumeData(prev => ({...prev, accent_color}))} />
              </div>

              <div className="flex items-center">
                {activeSectionIndex !== 0 && (
                  <button onClick={() => setActiveSectionIndex((prevIndex) => Math.max(prevIndex - 1, 0))} disabled={activeSectionIndex === 0} className="flex items-center gap-1 p-3 rounded-l-2xl text-sm font-medium text-neutral-500/90 hover:bg-neutral-500/20 hover:text-neutral-200 transition-all duration-300 ease-in-out cursor-pointer">
                    <ChevronLeft className="size-4"/>
                    Prev
                  </button>
                )}
                <button onClick={() => setActiveSectionIndex((prevIndex) => Math.min(prevIndex + 1, sections.length - 1))} disabled={activeSectionIndex === sections.length - 1} className="flex items-center gap-1 p-3 rounded-r-2xl text-sm font-medium text-neutral-500/90 hover:bg-neutral-500/20 hover:text-neutral-200 transition-all duration-300 ease-in-out cursor-pointer">
                    Next
                    <ChevronRight className="size-4"/>
                  </button>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {activeSection.id === 'personal' && <PersonalForm data={resumeData.personal_info} onChange={(data) => setResumeData(prev =>({...prev, personal_info: data}))} removeBackground={removeBackground} setRemoveBackgrond={setRemoveBackground} />}
            </div>
          </div>
        </div>
        <div className="flex-3 bg-white lg:mt-6">
            {/* Buttons */}
            <div>

            </div>

            {/* preview */}
            <Preview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
