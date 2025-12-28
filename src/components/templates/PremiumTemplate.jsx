import { Mail, Phone, MapPin } from "lucide-react";

const PremiumTemplate
 = ({ data }) => {
    // Helper function to format dates (e.g., "2019 - 2022")
    const formatDates = (start, end) => {
        if (!start) return "";
        const startYear = start.split("-")[0];
        const endYear = end ? end.split("-")[0] : "Present";
        return `${startYear} - ${endYear}`;
    };

    return (
        <div className="flex max-w-5xl mx-auto bg-white shadow-lg">
            {/* Left Sidebar */}
            <aside className="w-1/3 bg-gray-100 p-8 text-gray-700">
                {/* Profile Picture */}
                <div className="mb-8 flex justify-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-sm">
                        <img
                            src={data.personal_info?.profile_image || "https://via.placeholder.com/160"}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* About Me */}
                {data.about_me && (
                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
                            About Me
                        </h2>
                        <p className="text-sm leading-relaxed text-justify">
                            {data.about_me}
                        </p>
                    </section>
                )}

                {/* Skills */}
                {data.skills && data.skills.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
                            Skills
                        </h2>
                        <ul className="list-disc list-inside text-sm space-y-2">
                            {data.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Reward */}
                {data.rewards && data.rewards.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
                            Reward
                        </h2>
                        <div className="space-y-4">
                            {data.rewards.map((reward, index) => (
                                <div key={index} className="text-sm">
                                    <p className="font-semibold text-gray-800">
                                        {reward.date} | {reward.company}
                                    </p>
                                    <p>{reward.title}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Languages */}
                {data.languages && data.languages.length > 0 && (
                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
                            Languages
                        </h2>
                        <ul className="space-y-2 text-sm">
                            {data.languages.map((language, index) => (
                                <li key={index}>{language}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </aside>

            {/* Main Content */}
            <main className="w-2/3 p-8">
                {/* Header */}
                <header className="mb-10">
                    <h1 className="text-4xl font-bold text-gray-800 uppercase tracking-wide">
                        {data.personal_info?.full_name || "LORNA ALVARADO"}
                    </h1>
                    <h2 className="text-xl text-gray-600 mt-2">
                        {data.personal_info?.title || "Digital Marketing Specialist"}
                    </h2>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-600">
                        {data.personal_info?.phone && (
                            <div className="flex items-center gap-2">
                                <Phone className="size-4" />
                                <span>{data.personal_info.phone}</span>
                            </div>
                        )}
                        {data.personal_info?.email && (
                            <div className="flex items-center gap-2">
                                <Mail className="size-4" />
                                <span>{data.personal_info.email}</span>
                            </div>
                        )}
                        {data.personal_info?.address && (
                            <div className="flex items-center gap-2">
                                <MapPin className="size-4" />
                                <span>{data.personal_info.address}</span>
                            </div>
                        )}
                    </div>
                </header>

                {/* Experience */}
                {data.experience && data.experience.length > 0 && (
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-6">
                            Experience
                        </h2>
                        <div className="space-y-6">
                            {data.experience.map((exp, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800">
                                                {exp.position}
                                            </h3>
                                            <p className="font-semibold text-gray-700">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="text-sm font-bold text-gray-800">
                                            {formatDates(exp.start_date, exp.end_date)}
                                        </div>
                                    </div>
                                    {exp.description && (
                                        <p className="text-sm text-gray-600 leading-relaxed text-justify">
                                            {exp.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Education */}
                {data.education && data.education.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-6">
                            Education
                        </h2>
                        <div className="space-y-6">
                            {data.education.map((edu, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800">
                                                {edu.degree}
                                            </h3>
                                            <p className="font-semibold text-gray-700">
                                                {edu.institution}
                                            </p>
                                        </div>
                                        <div className="text-sm font-bold text-gray-800">
                                            {formatDates(edu.start_date, edu.end_date)}
                                        </div>
                                    </div>
                                    {edu.description && (
                                        <p className="text-sm text-gray-600 leading-relaxed text-justify">
                                            {edu.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default PremiumTemplate
;