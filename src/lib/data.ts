export interface Project {
    name: string;
    description: string;
    icon: string;
    link: string;
    github?: string;
  }
  
  export const projects: Project[] = [
    {
      name: "holopage",
      description: "Nocode VR website builder",
      icon: "/images/holo-logo.png?height=60&width=60",
      link: "https://holopage.app",
    },
    {
      name: "GPT Wrapped",
      description: "See your ChatGPT usage history visualized.",
      icon: "/images/gptwrapped-logo.png?height=60&width=60",
      link: "https://gptwrapped.husaria.dev/",
      github: "https://github.com/assertjohn/chatgpt-wrapped"
    },
    {
      name: "I Ching",
      description: "Perform I Ching divinations online.",
      icon: "/images/coins.png?height=60&width=60",
      link: "https://iching.husaria.dev/",
      github: "https://github.com/assertjohn/iching"
    },
  ];