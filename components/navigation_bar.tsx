const NavbarOption = [
    {
        id: "about",
        title: "About",
        link: "#about",
        idx: 1,
    },
    {
        id: "achievement",
        title: "Achievement",
        link: "#achievement",
        idx: 2,
    },
    {
        id: "project",
        title: "Projects",
        link: "#project",
        idx: 3,
    },
    {
        id: "experience",
        title: "Experience",
        link: "#experience",
        idx: 4,
    },
    {
        id: "contact",
        title: "Contact",
        link: "#contact",
        idx: 5,
    }
]

export default function Navbar({ activeSection, handleUpdateActiveSection }: { activeSection: string; handleUpdateActiveSection: (idx: number) => void }) {
    return (
        <div className="flex items-center justify-between bg-background py-6 px-36">
            <a
                href="#hero"
                className={`transition duration-300 ease-in-out ${activeSection === "hero" ? 'text-accent hover:text-foreground' : 'hover:text-accent'}`}
                onClick={() => handleUpdateActiveSection(0)}
            >
                Anak Agung Made Krishna Mahendrayana
            </a>
            <div className="flex space-x-8">
                {NavbarOption.map((option) => (
                    <a
                        key={option.id}
                        href={option.link}
                        className={`transition duration-300 ease-in-out ${option.id === activeSection ? 'text-accent hover:text-foreground' : 'hover:text-accent'}`}
                        onClick={() => handleUpdateActiveSection(option.idx)}
                    >
                        {option.title}
                    </a>
                ))}
            </div>
        </div>
    );
}
