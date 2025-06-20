import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import Candidate from '@/components/candidate'
import type { CandidateType } from '@/types/candidates'

export const Route = createFileRoute('/')({
  component: App,
})

const candidatesArray: CandidateType[] = [
{ name: 'Emanuel', age: 26, experience: 3, status: 'Pending', skills: ['JavaScript', 'React'], working: true },
{ name: 'Lucía', age: 32, experience: 8, status: 'Hired', skills: ['Photoshop', 'Illustrator'], working: false },
{ name: 'Martín', age: 24, experience: 2, status: 'Reviewing', skills: ['Python', 'Django'], working: false },    
{ name: 'Ana', age: 29, experience: 5, status: 'Interviewing', skills: ['HTML', 'CSS', 'JavaScript', 'Figma'], working: false },
{ name: 'Carlos', age: 31, experience: 7, status: 'Refused', skills: ['Node.js', 'Python'], working: true },
{ name: 'Sofía', age: 28, experience: 4, status: 'Pending', skills: ['JavaScript', 'React'], working: true },
{ name: 'Diego', age: 35, experience: 9, status: 'Hired', skills: ['Photoshop', 'Illustrator'], working: false },     
]

function App() {
  return (
    <div className="App">

      <h1>Lista de Candidatos</h1>
      <p>Cantidad de candidatos: {candidatesArray.length}</p>

      {/* //Rendelizar el array de candidatos */}
      {candidatesArray.map((candidate, index) => (
        <div>
           <p>Candidato #{index}</p>
        <Candidate
          key={index}
          name={candidate.name}
          age={candidate.age}
          experience={candidate.experience}
          status={candidate.status}
          skills={candidate.skills}
          working={candidate.working}
        />
       
        </div>
      ))}

      {/* Agregar más candidatos */}  
{/* 
      <Candidate
      name= "Melanie"
      age= {27}
      experience={5}
      status='Pending'
      skills={['JavaScript', 'React']}
      working={true}
      />

      <Candidate
      name= "Javier"
      age= {37}
      experience={10}
      status='Hired'
      skills={['Photoshop', 'Illustrator']}
      working={false}
      />

      <Candidate
      name= "Sebastián"
      age= {22}
      experience={1}
      status='Reviewing'
      skills={['Python', 'Django']}
      working={false}
      />

      <Candidate
      name= "Juana"
      age= {30}
      experience={11}
      status='Interviewing' Refused
      skills={['HTML', 'CSS', 'JavaScript', 'Figma']}
      working={false}
      />

      <Candidate
      name= "Daniel"
      age= {29}
      experience={8}
      status='Refused'
      skills={['Node.js', 'Python']}
      working={true}
      />
   */}
      
    </div>
  )
}
