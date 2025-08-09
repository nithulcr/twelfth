"use client";

const experiences = [
    {
        id: "2025 Jun - Present",
        title: "Tearrah.tech",
        position: "Freelancer",
        description:
            "Worked as a freelance frontend developer at Terrah, building high-performance websites and dashboards using modern frameworks like Next.js and Tailwind CSS. Delivered custom UI components, implemented GSAP animations, and collaborated closely with clients to meet business goals and branding needs.",
        image: "images/terrah.png",
    },
    {
        id: "2023 Nov - 2025 Jun",
        title: "Galtech technologies",
        position: "Galtech Technologies | Thrissur (info park Koratty), Kerala",
        description:
            "Developed 50+ websites using Shopify, WordPress, React, and Next.js with a focus on performance, SEO, and accessibility. Collaborated with cross-functional teams to deliver scalable, responsive solutions on time and within budget.",
        image: "images/galtech.webp",
    },
    {
        id: "2020 Apr - 2023 Nov",
        title: "Capcee technologies l Calicut, Kerala ",
        position: "Senior Web Designer | Calicut, Kerala",
        description:
            "Designed and developed responsive websites for diverse clients, ensuring seamless performance across devices. Collaborated with stakeholders to deliver user-centered designs, applying best practices in UI/UX, performance, and cross-browser compatibility.",
        image: "images/capcee.png",
    },
    {
        id: "2020 Jan - 2020 Apr",
        title: "Graphic designing faculty",
        position: "Gtec technologies, kannur, kerala",
        description:
            "Provide guidance and mentorship to students, encouraging creative thinking and helping them build a strong foundation in design principles.",
        image: "images/gtec.png",
    },
];

const ExperienceSection = () => {
    return (
        <section className="relative section experience-section">
            <div className="max-w-[1360px] mx-auto px-5 flex flex-col items-center relative">

            <div className="sticky sm:top-[80px] sm:top-[85px] mb-10 sm:mb-20 sm:flex  gap-8 justify-between w-full items-center">
                <div>
                    <div className="subtitle text-[11px] tracking-[4px] uppercase text-white">
                        5+ Years of Experience
                    </div>
                    <h2 className="heading text-white text-3xl lg:text-[2.3rem] mt-4 leading-snug font-medium gradient-text font-monument">
                        Working Experience
                    </h2>
                </div>

                <p className="text-white/80 text-[17px] leading-relaxed lg:text-right max-w-[650px]">
                    Over the years, I have worked on a wide range of web development projects, responsive, user-friendly websites using React, Next.js, Tailwind CSS, and TypeScript — focused on clean design and performance.
                </p>
            </div>

            <div className="flex flex-col gap-10">
                {experiences.map((exp, i) => (
                    <div
                        key={exp.id}
                        className={`grid md:grid-cols-3 gap-4 lg:gap-8 gradient-border rounded-[30px] sm:p-10 p-7 sticky ${i === 0
                            ? "sm:top-[240px] top-[100px]"
                            : i === 1
                                ? "sm:top-[260px] top-[195px]"
                                : "sm:top-[300px] top-[255px]"
                            }`}
                    >
                        <div className="md:order-last w-full lg:w-auto flex justify-center">
                            <img
                                src={exp.image}
                                alt={exp.title}
                                className=" object-contain w-[300px] ml-auto lg:ml-0"
                            />
                        </div>
                        <div className="flex flex-col  col-span-2">
                            <span className="text-lg  text-[var(--orange)]">
                                {exp.id}
                            </span>

                            <h5 className="md:text-3xl text-2xl font-semibold mb-3 mt-3">
                                {exp.title}
                            </h5>
                            <span className="text-lg text-[var(--blue)] mb-2">
                                {exp.position}
                            </span>
                            <p className="sm:text-md text-sm text-gray-400 sm:leading-[24px]">
                                {exp.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div >
        </section >

    );
};

export default ExperienceSection;
