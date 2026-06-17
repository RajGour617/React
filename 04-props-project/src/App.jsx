import Card from './components/Card'

const App = () => {
  const jobPostings = [
    {
      id: 1,
      logoUrl: "https://icon2.cleanpng.com/20180803/ubx/5ba055fe0b3b79a8f55892cc8186c6b6.webp",
      companyName: "Amazon",
      postedTime: "5 days ago",
      jobTitle: "Senior UI/UX Designer",
      jobType: "Part-time",
      level: "Senior Level",
      salary: "$120/hr",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      logoUrl: "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571048.jpg",
      companyName: "Google",
      postedTime: "30 day ago",
      jobTitle: "Graphic Designer",
      jobType: "Full-time",
      level: "Flexible schedule",
      salary: "$150-220k",
      location: "Mountain View, CA"
    },
    {
      id: 3,
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zdLpQ1XogOHnpR9MuW1MD9oXYxuPS5FCgQ&s",
      companyName: "Dribble",
      postedTime: "18 days ago",
      jobTitle: "Senior Motion Designer",
      jobType: "Contract",
      level: "Remote",
      salary: "$85/hr",
      location: "London, UK"
    },
    {
      id: 4,
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHPyUgCEL64IDo5eElnEFljn7RYcMay4iMg&s",
      companyName: "Meta",
      postedTime: "3 months ago",
      jobTitle: "UX Designer",
      jobType: "Full-time",
      level: "In office",
      salary: "$200-250k",
      location: "Menlo Park, USA"
    },
    {
      id: 5,
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujOkdW7NbL4MGxKaqcyXe-N5_T_TaXBNc5w&s",
      companyName: "Airbnb",
      postedTime: "1 day ago",
      jobTitle: "Junior UI/UX Designer",
      jobType: "Contract",
      level: "Remote",
      salary: "$100/hr",
      location: "Berlin, Germany"
    },
    {
      id: 6,
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVrW3WGYFVE_Lv_xxU6JLMyg2bHKiY2vHUg&s",
      companyName: "Apple",
      postedTime: "6 days ago",
      jobTitle: "Graphic Designer",
      jobType: "Full-time",
      level: "Flexible schedule",
      salary: "$85-120k",
      location: "Cupertino, USA"
    }
  ]

  return (
    <div className="parent">
      {jobPostings.map((job) => (
        <Card
          key={job.id}
          logoUrl={job.logoUrl}
          companyName={job.companyName}
          postedTime={job.postedTime}
          jobTitle={job.jobTitle}
          jobType={job.jobType}
          level={job.level}
          salary={job.salary}
          location={job.location}
        />
      ))}
    </div>
  )
}

export default App