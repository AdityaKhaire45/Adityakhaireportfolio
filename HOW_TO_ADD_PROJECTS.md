# 📚 Guide: How to Add and Update Projects in Your Portfolio

## 📁 Project Files Location

Projects are stored in: `src/data/projects.tsx`
Screenshots are stored in: `public/assets/projects-screenshots/`

---

## 🎯 Steps to Add a New Project

### Step 1: Add Project Screenshots

1. Create a folder in `public/assets/projects-screenshots/` with your project name (use lowercase, no spaces)
   - Example: `public/assets/projects-screenshots/mynewproject/`

2. Add your screenshot images to this folder
   - Supported formats: `.png`, `.jpg`, `.jpeg`
   - Name them sequentially: `1.png`, `2.png`, `3.png`, etc.
   - Or use descriptive names: `landing.png`, `dashboard.png`, etc.

### Step 2: Update `projects.tsx` File

Open `src/data/projects.tsx` and add your project to the `projects` array.

#### Project Structure Template:

```typescript
{
  id: "unique-project-id",  // lowercase, no spaces (e.g., "myawesomeproject")
  category: "Category Name", // e.g., "Web Development", "DevOps", "Mobile App"
  title: "Project Title",    // Display name of your project
  src: "/assets/projects-screenshots/yourprojectfolder/main-image.png", // Main thumbnail image
  screenshots: ["1.png", "2.png", "3.png"], // Array of screenshot filenames
  live: "https://your-project-url.com",      // Live demo URL (or GitHub if no live demo)
  github: "https://github.com/yourusername/yourproject", // Optional: GitHub repository
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind],
    backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono ">
          Your project description goes here. Explain what the project does,
          what problem it solves, and key features.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <SlideShow
          images={[
            `${BASE_PATH}/yourprojectfolder/1.png`,
            `${BASE_PATH}/yourprojectfolder/2.png`,
            `${BASE_PATH}/yourprojectfolder/3.png`,
          ]}
        />
      </div>
    );
  },
}
```

---

## 🛠️ Available Project Skills

### Frontend Skills:
- `PROJECT_SKILLS.js` - JavaScript
- `PROJECT_SKILLS.ts` - TypeScript
- `PROJECT_SKILLS.react` - React.js
- `PROJECT_SKILLS.next` - Next.js
- `PROJECT_SKILLS.vue` - Vue.js
- `PROJECT_SKILLS.tailwind` - Tailwind CSS
- `PROJECT_SKILLS.html` - HTML5
- `PROJECT_SKILLS.css` - CSS3
- `PROJECT_SKILLS.bootstrap` - Bootstrap
- `PROJECT_SKILLS.vite` - Vite
- `PROJECT_SKILLS.shadcn` - ShadCN UI
- `PROJECT_SKILLS.aceternity` - Aceternity UI
- `PROJECT_SKILLS.framerMotion` - Framer Motion
- `PROJECT_SKILLS.spline` - Spline 3D

### Backend Skills:
- `PROJECT_SKILLS.node` - Node.js
- `PROJECT_SKILLS.express` - Express.js
- `PROJECT_SKILLS.python` - Python
- `PROJECT_SKILLS.java` - Java
- `PROJECT_SKILLS.mongo` - MongoDB
- `PROJECT_SKILLS.postgres` - PostgreSQL
- `PROJECT_SKILLS.firebase` - Firebase
- `PROJECT_SKILLS.supabase` - Supabase
- `PROJECT_SKILLS.docker` - Docker
- `PROJECT_SKILLS.openai` - OpenAI API
- `PROJECT_SKILLS.sockerio` - Socket.io
- `PROJECT_SKILLS.maven` - Maven
- `PROJECT_SKILLS.nginx` - Nginx
- `PROJECT_SKILLS.netlify` - Netlify
- `PROJECT_SKILLS.vercel` - Vercel

---

## 📝 Complete Example

Here's a complete example of adding a new project:

```typescript
{
  id: "ecommerce-platform",
  category: "Full Stack",
  title: "E-Commerce Platform",
  src: "/assets/projects-screenshots/ecommerce/landing.png",
  screenshots: ["landing.png", "products.png", "cart.png", "checkout.png"],
  live: "https://myecommerce.vercel.app",
  github: "https://github.com/yourusername/ecommerce-platform",
  skills: {
    frontend: [
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.next,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.react,
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.express,
      PROJECT_SKILLS.mongo,
      PROJECT_SKILLS.docker,
    ],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Modern E-Commerce Platform with Full Shopping Experience
        </TypographyP>
        <TypographyP className="font-mono ">
          A full-stack e-commerce platform built with Next.js and Node.js.
          Features include product catalog, shopping cart, user authentication,
          payment integration, and admin dashboard. Deployed on Vercel with
          MongoDB database.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        
        <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
        <p className="font-mono mb-2">
          • User authentication and authorization
          • Product search and filtering
          • Shopping cart and checkout
          • Payment integration with Stripe
          • Admin dashboard for product management
        </p>
        
        <SlideShow
          images={[
            `${BASE_PATH}/ecommerce/landing.png`,
            `${BASE_PATH}/ecommerce/products.png`,
            `${BASE_PATH}/ecommerce/cart.png`,
            `${BASE_PATH}/ecommerce/checkout.png`,
          ]}
        />
      </div>
    );
  },
}
```

---

## 🔄 How to Update Existing Projects

1. **Update Project Info**: Modify the project object in `projects.tsx`
2. **Update Screenshots**: Replace images in the project's screenshot folder
3. **Update Description**: Edit the `content()` function
4. **Update Skills**: Modify the `skills` array

---

## 💡 Tips

1. **Project Order**: Projects are displayed in the order they appear in the array. Put your best projects first!
2. **Screenshots**: Use high-quality screenshots. Recommended size: 1920x1080 or similar
3. **Description**: Write clear, engaging descriptions. Highlight key features and technologies used.
4. **Live Links**: If you don't have a live demo, you can point to the GitHub repository
5. **Skills**: Only include skills you actually used in the project

---

## 📸 Adding Advanced Content Sections

You can add multiple sections in your project content:

```typescript
get content() {
  return (
    <div>
      <TypographyP className="font-mono ">
        Project introduction...
      </TypographyP>
      <ProjectsLinks live={this.live} repo={this.github} />
      
      <TypographyH3 className="my-4 mt-8">Feature 1</TypographyH3>
      <p className="font-mono mb-2">Description of feature 1...</p>
      <SlideShow images={[`${BASE_PATH}/project/feature1.png`]} />
      
      <TypographyH3 className="my-4 mt-8">Feature 2</TypographyH3>
      <p className="font-mono mb-2">Description of feature 2...</p>
      <SlideShow images={[`${BASE_PATH}/project/feature2.png`]} />
    </div>
  );
}
```

---

## ✅ Checklist Before Adding a Project

- [ ] Created screenshot folder in `public/assets/projects-screenshots/`
- [ ] Added high-quality screenshot images
- [ ] Added project object to `projects` array in `projects.tsx`
- [ ] Set unique `id` (lowercase, no spaces)
- [ ] Added appropriate category
- [ ] Added project title
- [ ] Set `src` to main thumbnail image
- [ ] Added screenshot filenames to `screenshots` array
- [ ] Added live URL (or GitHub if no live demo)
- [ ] Added GitHub repository URL (optional)
- [ ] Selected appropriate frontend skills
- [ ] Selected appropriate backend skills
- [ ] Wrote engaging project description
- [ ] Added all screenshot paths in `SlideShow` component

---

## 🚀 After Adding Projects

1. Test locally: `npm run dev`
2. Verify all images load correctly
3. Check that all links work
4. Test on mobile devices
5. Deploy to production

---

**Need help?** Check the existing projects in `projects.tsx` for more examples!

