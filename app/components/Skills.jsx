import { useEffect, useState } from 'react';

function Skills() {
  const skillsList = [
    {
      name: "JavaScript",
      alt: "javascript logo",
      image: "/images/logos/javascript-logo.png"
    },
    {
      name: "React.js",
      alt: "react logo",
      image: "/images/logos/react-logo.svg"
    },
    {
      name: "Vue.js",
      alt: "vue logo",
      image: "/images/logos/vue-logo.svg"
    },
    {
      name: "HTML",
      alt: "html logo",
      image: "/images/logos/html-logo.png"
    },
    {
      name: "CSS",
      alt: "css logo",
      image: "/images/logos/css-logo.png"
    },
    {
      name: "Swift",
      alt: "swift logo",
      image: "/images/logos/swift-logo.svg"
    },
    {
      name: "TailwindCSS",
      alt: "tailwindscss logo",
      image: "/images/logos/tailwind-logo.png"
    },
    {
      name: "GraphQL",
      alt: "graphql logo",
      image: "/images/logos/graphql-logo.svg"
    },
    {
      name: "Typescript",
      alt: "typescript logo",
      image: "/images/logos/typescript-logo.svg"
    },
    {
      name: "AWS Lambda",
      alt: "aws lambda logo",
      image: "/images/logos/aws-lambda-logo.png"
    },
    {
      name: "Node.js",
      alt: "node logo",
      image: "/images/logos/node-logo.png"
    },
    {
      name: "Bootstrap",
      alt: "bootstrap logo",
      image: "/images/logos/bootstrap-logo.png"
    },
    {
      name: "Sequelize",
      alt: "sequelize",
      image: "/images/logos/sequelize-logo.png"
    },
    {
      name: "PostgreSQL",
      alt: "postgresql logo",
      image: "/images/logos/postgresql-logo.png"
    },
    {
      name: "MongoDB",
      alt: "mongodb logo",
      image: "/images/logos/mongo-logo.png"
    },
    {
      name: "Ruby",
      alt: "ruby logo",
      image: "/images/logos/ruby-logo.png"
    }
  ];

  const [initialDisplayedSkills, setInitialDisplayedSkills] = useState(skillsList.slice(0, 8));
  const [displayedSkillsList, setDisplayedSkillsList] = useState(initialDisplayedSkills);
  const [showAllSkills, setShowAllSkills] = useState(false);

  useEffect(() => {
    if(window && window.innerWidth < 800) {
      setInitialDisplayedSkills(skillsList.slice(0, 9))
    } else {
      setInitialDisplayedSkills(skillsList.slice(0, 8))
    }
  }, []);

  const toggleShowAllSkills = () => {
    if(showAllSkills) {
      setDisplayedSkillsList(initialDisplayedSkills);
      setShowAllSkills(false);
    } else {
      setDisplayedSkillsList(skillsList);
      setShowAllSkills(true);
    }
  };

  useEffect(() => {
    setDisplayedSkillsList(initialDisplayedSkills);
  }, [initialDisplayedSkills]);

  return (
    <div>
      <div className="flex bg-light-orange justify-between items-center py-[1px]">
        <div className="pl-[15px] text-dark-orange font-bold">Eric's Skills Space</div>
        <div className="pr-[15px] text-xs">
          <span>[</span>
          <span 
            className="cursor-pointer text-dark-blue hover:text-dark-orange" 
            onClick={() => toggleShowAllSkills()}
            >
            {showAllSkills ? "view less" : "view all"}
          </span>
          <span>]</span>
        </div>
      </div>
      <div className="grid mobile:grid-cols-3 tablet:grid-cols-4 desktop:grid-cols-4 gap-[20px] items-center py-[10px] justify-between">
        {
          displayedSkillsList.map((skill, index) => {
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div>{skill.name}</div>
                <div className="flex w-[95px] h-[95px] items-center justify-center">
                  <img className="max-h-full max-w-full" src={skill.image} alt={skill.alt} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills;