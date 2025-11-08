const config = {
  title: "Aditya Khaire | Software Engineer, UI/UX Designer & 3D Artist",
  description: {
    long: "Creative and detail-oriented UI/UX Designer and 3D Artist with a strong foundation in visual storytelling, user interface design, and motion graphics. Passionate about transforming abstract ideas into elegant, user-friendly digital experiences and immersive visuals. Specialized in Figma, Blender, Adobe Creative Suite, and frontend development.",
    short:
      "Software Engineer, UI/UX Designer & 3D Artist creating elegant digital experiences and immersive visuals.",
  },
  keywords: [
    "Aditya",
    "Aditya Khaire",
    "Aditya Dilip Khaire",
    "adityakhaire",
    "Aditya Khaire portfolio",
    "UI/UX Designer",
    "3D Artist",
    "Figma",
    "Blender",
    "Frontend Developer",
    "portfolio",
    "creative designer",
    "web design",
    "motion graphics",
    "3D modeling",
    "user interface design",
  ],
  author: "Aditya Khaire",
  email: "adityakhaire@gmail.com",
  site: "https://www.abhijitzende.com", // TODO: Update with your domain if different

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "", // TODO: Add your Twitter/X profile if you have one
    linkedin: "https://www.linkedin.com/in/aditya-khaire-ab109231a/",
    instagram: "", // TODO: Add your Instagram if you have one
    facebook: "", // TODO: Add your Facebook if you have one
    github: "https://github.com/AdityaKhaire45",
  },
};
export { config };
