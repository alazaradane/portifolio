import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Alazar Adane",
  initials: "DV",
  url: "https://dillion.io",
  location: "Addis Ababa, Ethiopia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer. I love building things and helping people. Very active on Github.",
  summary:
    `Software Engineer passionate about building full-stack JavaScript/TypeScript applications with React/Next.js , Node/Express, and SQL/NoSQL databases. Excited about contributing to the open-source community.
    As a core team member of SSGI graduate, I thrive in collaborative environments and am dedicated to driving innovation and excellence in my projects.
    `,
  avatarUrl: "/me.jpg",
  skills: [
    "Next.js",
    "React",
    "Typescript",
    "JavaScript",
    "Node.js",
    "MySQL",
    "Postgres",
    "Tailwind",
    "Python",
    "Framer",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    { href: "#contact", icon: PencilLine, label: "Contact" },
  ],
  contact: {
    email: "alazaradane418@gmail.com",
    tel: "+251911361466",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/alazaradane",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alazaradane/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/alazaradane369",
        icon: Icons.x,
        navbar: true,
      },
      Whatsapp: {
        name: "Whats App",
        url: "https://wa.me/251969170097",
        icon: Icons.whatsapp,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/alazarprime369",
        icon: Icons.Instagram,
        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/Astropia369",
        icon: Icons.Telegram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:alazaradane418@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Space Science Geospatial Institute",
      badges:[],
      href: "https://et.linkedin.com/in/space-science-and-geospatial-institute-37b48623a",
      location: "Addis Ababa, Ethiopia",
      title: "Front-End Developer",
      logoUrl: "https://data.moa.gov.et/uploads/group/2023-03-24-064216.989395SSGI.jpg",
      start: "July 2023",
      end: "September 2023",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Ethioware Software Engineering ",
      badges: [],
      href: "https://ethioware.org",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "https://media.licdn.com/dms/image/D4E0BAQGWWV5dSRfE_w/company-logo_200_200/0/1682971560524?e=2147483647&v=beta&t=XIVXOh6alwL-5CEv235BX7KCHWjbw2T078fd29Kz7Pk",
      start: "September 3rd 2023",
      end: "September 24th 2023",
      description:
        "Internship program develop Ethiopia Culture displaying pages, Quiz application, and portifolio websites.",
    },
    
  ],
  education: [
    {
      school: "Lebawi International Academy",
      href: "lebawi.com",
      degree: "High School",
      logoUrl: "/lebawi.jfif",
      start: "2022",
      end: "2026",
    },
    {
      school: "JavaScript Mastry Pro",
      href: "https://www.jsmastery.pro/",
      degree: "Next.js | Full Stack Development",
      logoUrl: "/jsm.png",
      start: "20 Jun 2024",
      end: " 20 July 2024",
    },
    {
      school: "Zero to Mastry",
      href: "https://zerotomastery.io/",
      degree: "MERN Stack Development",
      logoUrl: "/ztm.png",
      start: " 12 April 2024",
      end: "27 May 2024",
    },
    {
      school: "Stanford University",
      href: "https://bit.ly/intromathematicalthinking",
      degree: "Number Theory | Real Analysis | Mathematical Logic | Algorithm",
      logoUrl: "/stanford.jpg",
      start: "15 Dec 2023",
      end: "5 Jun 2024",
    },
    {
      school: "University of Michigan",
      href: "https://bit.ly/intromathematicalthinking",
      degree: "PHP | Web Application ",
      logoUrl: "/uom.jpg",
      start: "1 Jun 2023",
      end: "29 Jun 2023",
    }
  ],
  projects: [
    {
      title: "Devflow ",
      href: "https://github.com/alazaradane/devflow.git",
      dates: "3 July 2024",
      active: true,
      description:
        "Dev Overflow: developer Q&A hub. An open-source Stack Overflow clone for programmers to ask, answer, and collaborate. Join our community and code on! *Js Mastery*",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Clerk",
        "TailwindCSS",
        "Shadcn UI",
        "Open AI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/alazaradane/devflow.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        `https://www.dropbox.com/scl/fi/nvct0gbc6oskd3zqdcld0/devflow.mp4?rlkey=qysvpkfahdklujntt4kct2ood&st=gf7kx8g2&raw=1
`,
    },
    {
      title: "Techopia",
      href: "https://techopia.vercel.app/",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "Dynamic Website with CMS where the admin can do CRUD functionality for blogs, projets, and events",
      technologies: [
        "React.js",
        "Typescript",
        "Three.js",
        "TailwindCSS",
        "Shadcn UI",
        "MySQL",
        "Node.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://techopia.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alazaradane/techopia.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.dropbox.com/scl/fi/as74cwbcnuumw1aoczwho/techopia.mp4?rlkey=2pwx2qt6o3g3fi4zfd8gdzrk2&st=udlj9f9s&raw=1",
    },
    {
      title: "Blogify",
      href: "https://github.com/alazaradane/blogify.git",
      dates: "March 2024 - April 2024",
      active: true,
      description:
        "developed a blog website where users can read articles, write their own posts, and share their ideas with others.",
      technologies: [
        "React.js",
        "Typescript",
        "MySQL",
        "TailwindCSS",
        "Shadcn UI",
        "Node.js"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/alazaradane/blogify.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.dropbox.com/scl/fi/vnvusafv2t49v1j1pixko/Blogify.mp4?rlkey=fxzzle2c5vmd8egbn72pa3nt4&st=6vqgd63y&raw=1",
    },
    {
      title: "E-learning",
      href: "https://github.com/Amsalegebrehana/ESSTI",
      dates: "July 2023 - August 2023",
      active: true,
      description:
        "Developed an E-learning System for the Space Science Geospatial Institute (SSGI) to make space science accessible across Ethiopia.",
      technologies: [
        "Vue.js",
        "TailwindCSS",
        "Shadcn UI",
        "Flask",
        "MySQL"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Amsalegebrehana/ESSTI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://www.dropbox.com/scl/fi/3d1hx8bs4x7zq1etkkwvm/elp.mp4?rlkey=zil9ugpxv1t7q83zpv10vhlke&st=sgbeb65k&raw=1",
    },
    {
      title: "Nike Landing Page",
      href: "https://nike-alazaradane.netlify.app/",
      dates: "Feb 10th - 15th, 2024",
      active: true,
      description:
        "Developed responsive polished Nike landing page with react and tailwindcss showcasing services, products, testimonial and more.",
      technologies: [
        "React",
        "TailwindCSS",
        "Responsive design"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/alazaradane/nike-landing-page",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://nike-alazaradane.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://www.dropbox.com/scl/fi/g0fwjplnyzy3p9nxie90b/nike.mp4?rlkey=djvrqusko7j2r02szkiwauuiq&st=l0411iqm&raw=1",
    },
    {
      title: "Book Store",
      href: "https://github.com/alazaradane/nike-landing-page",
      dates: "May 6th - 20th, 2024",
      active: true,
      description:
        "Developed a FullStack Web Application with Admin panel which students search, filter, access free and paid books, mock exams, workbooks and different genre books with payment integrated.",
      technologies: [
        "React",
        "TailwindCSS",
        "Node.js",
        "MySQL"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/alazaradane/DLM",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://www.dropbox.com/scl/fi/km2h8lv1yemkm2kgdch6h/book.mp4?rlkey=onp4ct8laa4tq6h91x9y816wr&st=yn1g89pw&raw=1",
    }
  ],
  hackathons: [
    {
      title: "NASA International Space App Challenge",
      dates: "October 7th - 8th 2023",
      location: "Addis Ababa, Ethiopia",
      description:
        "Developed a web application that enables project creators to collaborate with contributors in solving various STEM-related problems.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2W5HxQ5MsJPNBdDeSVD4oJ1XK-uS-G30DQ&s",
      mlh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2W5HxQ5MsJPNBdDeSVD4oJ1XK-uS-G30DQ&s",
      links: [],
    },
    {
      title: "Addis Teencode",
      dates: "June 8th - 9th, 2024",
      location: "Addis Ababa, Ethiopia",
      description:
        "Developed a SaaS application offering personal, business, and other packages that allow clients to track their expenses, including travel, groceries, company costs, and more.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbd3vFhWF-jer3ga0e2W3173zUEEsm3dS_og&s",
      mlh: "https://africabusinesscommunities.com/Images/Key%20Logos/alx.png",
      links: [],
    },
    {
      title: "Codeday",
      dates: "Spring 2023",
      location: "Addis Ababa, Ethiopia",
      description:
        "Developed a FullStack SaaS web Application which enables clients and different business owner who want to have a website can easily generate their websites with Content Management Systems which makes the website dynamic and flexible.",
      icon: "public",
      image:
        "https://media.licdn.com/dms/image/D560BAQHiQAK3YLiFGQ/company-logo_200_200/0/1707172083206/codeday_org_logo?e=2147483647&v=beta&t=asvC7kzYr7lSYHanrccDblBR89OZEjvM6Ivbg6h7jJ0",
      links: [],
    },
    {
      title: "BITS Hackathon",
      dates: "October 21st - 22nd, 2023",
      location: "Addis Ababa, Ethiopia",
      description:
        "Developed a full stack stock web application for business which enables them to manage their customers, warehouses, product, analysis thier revnue and much more  .",
      image:
        "https://www.bitscollege.edu.et/wp-content/uploads/2022/08/output-onlinepngtools44.png",
      links: [
      ],
    },
    {
      title: "International Maarif Science Fair",
      dates: "May 21st - 22nd, 2024",
      location: "Addis Ababa, Ethiopia",
      description:
        "Developed a full stack Book and Quesition bank store web application for highschool and undergraduate students which enables them to to search, filter, buy books and access free materials such as mock exams and worksheets. ",
      image:
        "data:image/jpeg;base64,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",
      links: [
      ],
    },
    {
      title: "Avation 2023 Expo",
      dates: "December 19, 2023",
      location: "Addis Ababa, Ethiopia",
      description:
        "Develop a full stack AI powered flight booking Web Application for users can search, filter, and access various flights, book and sechdules with payment integrated.",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABC1BMVEX///9ijk//yQzGJSv8///9ywz///38//29AABgj05jjVD+yQD/xwD//f/AAAC3AADfl5fw1tbfq6369vT58fHIQ0XTgYLrx8bksbLHJCf36urz3t/ZlpHCPj9ajkZai0bReXrOa2nv5uHMS1LfnqLMZmrg6Ny4yK+vwKlUhj1vlGH9//aBonXp8Obai43FCxP+99r4zSfBNTfKgYPHVlnP2sh3n2Wov5ySroZGfDCRqomHm33E17xNeTh+mnPAzbz48sr445b367Pt11L7++fx43731m/56qX63oP71V38zzv51E7122Vih1Pu1jfi8t7Vt7W7NkXf2JjJjpHFlY/GUEqvAA+wDB3drqPZ1KnsAAANFElEQVR4nO1aC1fa2BY+mGMSQB7JiSQkPAIkIgJBQ6jWa6fo0GrV3qHXqfb//5K79wkgotOZTmdJmHW+tVrJQ9xf9uvb54QQAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBH4S8bgP+GfRHo71/CRlldJLJvBn9K8go7YN6Ot05oOs25B+A3E6lU4DOaN2W/AOYcUnVjtdtyc/juJ6KUTtZtyk/jfbb9JzML+u25SchtzvpzL+EDGvPYwxQ3+wwY/uZ9COZzc6Zp1xStfa6DfoJrHDZ6D6zyiXV6a/bpL8N+Tj1lEv6YN0m/U2Aojyt1Z9w2dRihuL4P4/9ZeaYt2cbqpqV07epFdTedTeSjNz/pZNeJdOB/r95M4BM9n6pr8QYkjlbt2E/Dhm49OrP/JJKZzauMFOZyKNe7TmVdOd4AxNGHh3Un3EBMpm9dVv2N3CWeYFLKt3ZV9Zt2Y9BUWTS/vxC7kPD7G1axsg4Ij/PF+RysIFBdvr2JbcAlw1bMoOSrJw+b5WYL5zLRpEhpN97iUs6lTnYsDkGnju2ypdSv36ycYvM0F46L4ZY+mTT6hiRzw5ekDDQXnrvu+u27Uch72fqz0MsXU+d7IG+kTcq+7snL7Z9qGJMlikqts1ho/ynU0s9C7I0Zj5QGZ9fTNZt4V8Cf+57By8I/nQHm75CDn/d2Tk635C8kcko84Lir30GYakokw/Zna3trY/dDRgxseu3U6shlknXMye/gVsml0dABXBFk58zsiL395+nfj3dO4Ma1h1/ArdsAZujy8STkXHYP+mscEnX62/afUK746vt7PY2ksleHyY+yuQcGT0b9kFU7u8ppHt4frTDqYBjsrd0Awaz9ptVLpnU6R4jyuH5TTZ2C5DZORonvM+AdfJ+bdUr73ojRujk/AYjbE4me8sjMsHIkf7p6rp45wCTRblAKluP2B6v29g/xeigXnuixjqpY5THl9fcK0tcPiQ9Y5R2bYlKJpOuZbjSH/+6k4UmufVIJntNflu3td8BpEv/tL6c+tgkQbt0kcrOkwgDL43JJLduk78DZQ/m4yUu9dQvI6zGV9vAZJkLdv9LJbm5D5Yp75fnMBgle++Byvjq6IlTYipZUGXJLWUQYsfLwhIC7KyLVK4XjWU5xm4Pk5v8fNliEWJpmCR7UI3J4fk1iuMVx2xlszfjJA+Z3fbSqnidNxZyeAWNZYUHD7Hs7TjJc0z/JL0Y9dOdz+0+RSrPAiwmAzEmJzT70a5RbxZhGaCSir1yvfXMK7GI2cbxMqFcsFGm590l0+kcg1cmV0dPlctj6u/891BJbu6T33qL98bSqX1GyARU/mo15r0fTt5cUArOXLfNLwGsYmfvOrO+UjsAEcZb5M6KP3h4ZbevP46VJC+U90/e1bhfanVOBVokWJ1dIZPNZreub8/HCk3qZAlPmI1m2/rp1JvjvTkViKenXQV9cnnRpYQxmSZyyx9s6h+nOjPhsr9HJxdX84l4EVxzJmNgYmhWMbAUmjh1iXGvvIdBH0pyutNrI5WP28t9BfvJ9k42i0wm4EPNK0XlQV5ykkcGylH/NAP1OF172zvr08nl7dFybPE+v7N1fXVxCEwM02u0yoNyWSrntSROZO8PQIClam/fnLF4ts8uO2UHavPNh4sJtEd7OoxCYCIhylU7Uf2SK0QYwkAh19/2YF4Zf4AOubVYptjeguA6ur087IILHD0KpTK4RIrJ5IssSY7hbaL9uQO1uNPbk8nhp6UFFyjK4JLr8/EEhYEWfOGx9Yhy6Kzb/lWA2K/DpH+6RyYXIPF5qoM/doDU0c3VRZdQyprf3Pu8OpCeYmAlyS8gRfrtTKeehg6Ji5NbuJSPrsGueMNLcM6wreBLIR9nybJfpHLJWDeBJ+iPem9rB733/cnF7XYcYJD6Rzefri4PZZKzHdPzB4X8k+Ba+MV3SEI8wyf20Umn3jseTcY4d6FugZb46cP5xSF4xDGtSiMsDF7iwf3S0oiSjCaDRay/n8qcvh+NLz8eZSFHtrdvPp5fjKH+Go6pB361rP4hE/BL1UzQyjJ0/N7x2cX5x+ttzHTkcYh9xNSHLnaSwYux9VjIzCSpMmVv73+3N0dH15zGpKsotukN/WhXGnzHIXO/ABc5SWwIuYDsmHS7RGHO9A5o8Ib4p0TALepXJ2F7ZLKsoDesir8rYTeM+3r5T/mUB4Uho4kjI1P2e/hQKAwwQWYkHkktjI8/8uvwb1B2bZrEATMurYajgX/uXD9qVathGC45oTynMOMYhr5nr9vqP4BCFIg1uph+KWNNZGZ5xeIQUCqVXBf+w8/DYlG3nCaMlrn1Jz4zNc3k0BbykDmmGUsSsJH+1VWWBERYs1TebbiIgTs3yHbL/iJqZGI0n61MUigSSuwJyhwjKdWYamqk2QDHc8EN1IB8YV6+YWMyo40yq0QajV8mJ/OFcIov/s4YTKM7fAh0dn7xxa9f2WTq5KPYC9SBp6xbDD8VGk0yTxnlW8lZWDo3kL8CFB9prrX4utnvzG56bWEDZNSoGf9pHnMl2zbAW0jGNrXmzHBulA15xWYPn8LIPz9i8VwJiWY2yfyr8O7XLnBzz8CkBX/fDwdV3y8RTfUNLYIuU7VwxaVlwhN3/LBRiqQgR2XN8+/carSrfjWJ0rRcH8SCtSvhZcg1wxxGrPn1YTAIg9fNJk4GeBDTxwNd9QyosZBHQbXCjGLhK2NeWQUy03vQKlT5pn5hsn4/eKgwkjML0pSau/mQUKNUtqA2V1QXWOdD7960u1qkWq+aN0BmUIaO+FBoQXYAmQqjMNfneTmjTN1tUiUAMk4BNCS+LzPMN4jsFTyKitJSI4dYUpXIxtRBJ9iFyCBONPANyH+qF/DbXpWMGpnNZvPOx4RFMljh8g3eZwwgQ1hJNUkp72NTpHC7NJWLBZ7zihMOLGKVq1DawDlQEsGljGitsoHDJnyb96pj2iJniPZdMg+DEh+GKVUHRSSDT1yxfdWLyVB7WgJR0JiRsXEREIOWrYMMxzIZ+ymZ+zInAxpncB88kmnkYzLUaYRFzXHMORneedZARn0kQ+ZksDQ/IRMNGkiGKoYqWQsyzu5A52RYKe/l4pyZkZl75lVzhszJUGIbRM8jGeU5GbPQcngz1NUWY0VVV6D7UDNf1TgZR+LzMvOADNVaD49kXnOhJkdtNYpFpenb+OepDPVokTMtMAvJsEAtYYt0qgU4KOYjqG0EU4YRs/yFOA+STgzdj6DOU6f1YHAh5L2yZxSwstzwEdK9Q02pYbkeLeUlHcPNLgx0xQwLrkMN/SHSrWEYaQqScX2/4lYHgUGbbqFg0kCVotZQ0wpli3mDgoffTT11V3tNz1DHWsA0qGIOXYvhOdQiVNEt0zHxCJl9KwYVk+FWGuQMM73Ac0ChaXiZMTPQm4zY3ywTT1i2QmTFwSuvSGaZ1+NWJJ2pSorzzNMdSuzojBcAfnGuLeeilM6+Zs3DDc6WqCl5zVIojjDyMkP5cQBgvGniTbhBvhxINImbTDG4/Y8Hi7d6HL8wfKqI8cJLqZ7EF4GWTZIJm94NS2Yy1pN/BLjPOhuxVp6xPDsj53JkOUXik/wYLyRkngYipg6wbFDPmmXTxQqBOTW4obJCHAtv0eI9DLhNj2/jVzy4Yibk/QZqFH2os1PXd4jtqpZtxM+bOl+r89Vx078zNTNoYQeFMw4MMDJ6RCZaFMAVL9KTQYZM77kAM1WoXNNSqXUXM8gx3Y103tntLw1s9aAhCPYhL/JLgRvwuTUKUUIYfpiQXbRiQaMwjWkSSEhFjiRz9pBhbG4FnIyjBjQH+lKSLJj+A0ljzDAlF3voIMLfJW4+OWTwh6XqEDgwBz9esb8GvJZphTt+mN8tfdVsHwQzpfZDFEU2y0f8SvSQEDLTcugGbuuhZGOshSXfxWUoM6hUXCkKisGdbYcS3OGXW44FkjIYmJTpu5KOxL/kG0GpEVbNhOQMG5bvdU2DUZ8a0hfH0dwCpPNQnTpm1dVAXzrKNCxXNAfKndG0c0ZlcK+qoUUNx6EwUPu4UpWQagZ2WGEITxYUyjQP9Ytq1QqzS5EN9SxgxIqKBtUiyZsFkuG1Qv9uGDU0vkTt+NLQTgoVDjMqm7gp8C2vYbmtVnKG0aTU2QXpz3C1kDpuOc4fYt27JrQbTfWwA1HSDwoNbc32LwOcoboUyJh57ItaNTB1BSe0XahmsWx+rL76vQNOpHYYwAGOAd+i6HWXAL4PqE2qz8Anet5Cz+zuhrw6aaGLP+Jl9ca9zZWLVzAVmKSde5cR5hcs3COxEyTgKNEbAYSK7bl30B1tz6s0prilUxou9nJgmpuCQ6j9e8ODe3JTt6JRfjJJ+UJw1LINwwDNZRg2Sk6mwCewEU6yWKfJisHv4PcYORhx8Br+Z8jJexlQQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAYH34P4ZRagOhOwDhAAAAAElFTkSuQmCC",
      links: [
      ],
    },
    {
      title: "AWS online conference",
      dates: "June 8, 2023",
      location: "Online Conference",
      description:
        "AWS services",
      image:
        "https://yt3.googleusercontent.com/HRJKaJg70sqBrCNh7Tf2RSjXTb_5hCUn7Hht7mxUJMg77EWkihh55JklD-KhwAMhwY31ox5O=s900-c-k-c0x00ffffff-no-rj",
      links: [
      ],
    },
    {
      title: "My Digital World ",
      dates: "November 2022",
      location: "Online Conference",
      description:
        "KEMMCOM and Meta " ,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCWyooKXboNcbYUDY7_TOlyu6u08DJ7he91g&s",
      links: [
      ],
    },
  ],
} as const;
