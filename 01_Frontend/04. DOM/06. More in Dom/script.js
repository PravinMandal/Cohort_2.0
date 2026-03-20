const users = [
  {
    fullName: "Emma Thompson",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "UX Designer",
    description:
      "A creative UX designer focused on crafting intuitive digital experiences with human-centered design principles.",
    tags: ["Design", "User Experience", "UI/UX", "Prototyping"]
  },
  {
    fullName: "Michael Carter",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Software Engineer",
    description:
      "Full-stack engineer with a passion for building scalable applications and exploring next-gen web technologies.",
    tags: ["JavaScript", "Backend", "Frontend", "Cloud"]
  },
  {
    fullName: "Sophia Martinez",
    image: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Digital Marketer",
    description:
      "Digital marketing specialist experienced in SEO, paid campaigns, and brand growth strategy across social platforms.",
    tags: ["Marketing", "SEO", "Branding", "Analytics"]
  },
  {
    fullName: "Daniel Nguyen",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Data Scientist",
    description:
      "Data scientist skilled in machine learning, predictive modeling, and transforming data into actionable insights.",
    tags: ["Data Science", "Machine Learning", "AI", "Python"]
  },
  {
    fullName: "Ava Reynolds",
    image: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsfGVufDB8fDB8fHww",
    profession: "Content Creator",
    description:
      "Content creator producing high-engagement media across video, social, and emerging digital channels.",
    tags: ["Content", "Video", "Social Media", "Storytelling"]
  }
];

let sum = ''
let main = document.querySelector('main')

users.forEach(function(elem) {
    sum += `
        <div class="card">
            <img src= ${elem.image}>
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>
    `
})

console.log(sum)

main.innerHTML = sum

