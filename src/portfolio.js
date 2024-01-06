import Typewriter from "typewriter-effect";


const header = {
  homepage: 'https://Bhoomika-Mamidi.github.io',
  title: <p className="logo-font">
      {"<Bhoomika/>"}
    </p>,
}

const about = {
  name:'Bhoomika Mamidi',
  role:<Typewriter
    options={{
      strings: [
        "DevOps",
        "Web Developer",
        "Software Dev",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
  />,
  description:
    "I'm a Computer Science graduate with expertise in optimizing code, full-stack development, and DevOps for seamless CI/CD pipelines. My approach combines problem-solving, collaboration, and creative adaptability. I have a strong passion for learning and constantly embrace new technologies. Proficient in machine learning, databases, Excel, Java, Python (pandas, SciPy, NumPy, Sci-Kit-learn), and Tableau.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/bhoomika-mamidi/',
    github: 'https://github.com/Bhoomika-Mamidi',
  },
}

const projects = [

  {
    name: <p>Movie<br/> Recomendation</p>,
    
    description:
      'Created a movie recommendation system using machine learning and HTML. Implemented algorithms to analyze user preferences and generate personalized movie suggestions. Demonstrated proficiencyin machine learning, web development, and data presentation.',
    stack: ['HTML', 'JS', 'Tensorflow'],
    sourceCode: 'https://github.com/Bhoomika-Mamidi/MOVIE-RECOMMENDATION',
  },
  {
    name:  <p className="proj-font">Cancer Prediction</p>,
    description:
      'Developed a cancer prediction model leveraging machine learning algorithms. Utilized relevant data sets to train the model for accurate predictions. Demonstrated skills in data analysis, feature engineering, and model evaluation for effective cancer risk assessment.',
    stack: ['HTML', 'JS', 'Tensorflow'],
    sourceCode: 'https://github.com/Bhoomika-Mamidi/CANCER-PREDICTION'
  },
  {
    name:  <p className="proj-font">RFID  campus management systrem </p>,
    description:
      'Through this project we aim to design a student ID card system using smart card technology. The card can be used as a means of identification, automation, and payment. The smart Id card has a chip and id that is unique for every student an.d staff  ',
    stack: ['React JS', 'RFID', 'MongoDB',"Node JS"],
    sourceCode: 'https://github.com/Bhoomika-Mamidi/rfidCode'
  },
]

const skills = [

  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Selenium',
  'Git',
  'CI/CD',
  'Jenkins',
  'Python',
  'MySQL',
  'Linux'
]

const contact = {

  email: "mamidibhoomika33@gmail.com"
,
}

export { header, about, projects, skills, contact }
