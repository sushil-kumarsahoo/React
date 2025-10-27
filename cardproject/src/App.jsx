
import './App.css'
import Card from './components/card.jsx'
function App() {
  
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Cloud Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    companyName: "IBM",
    datePosted: "4 weeks ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/accenture.com",
    companyName: "Accenture",
    datePosted: "1 week ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/zoho.com",
    companyName: "Zoho",
    datePosted: "2 days ago",
    post: "Software Tester",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "6 weeks ago",
    post: "Graphic Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/intel.com",
    companyName: "Intel",
    datePosted: "3 weeks ago",
    post: "Hardware Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/infosys.com",
    companyName: "Infosys",
    datePosted: "5 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time", 
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Kolkata, India"
  }
];

console.log(jobOpenings);

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}><Card company={elem.companyName} post={elem.post}/>
        </div>
      })}
    </div>
  )
}

export default App
