import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import Candidate from '@/components/candidate'
import candidatesArray from '@/data/candidates' 

export const Route = createFileRoute('/')({
  component: App,
})


function App() {
  return (
    <div className="App">
      <h1>Lista de Candidatos</h1>
      <section className='candidates__section'>
      
      {candidatesArray.map((candidate, index) => (
        <Candidate
          key={index}
          name={candidate.name}
          age={candidate.age}
          experience={candidate.experience}
          status={candidate.status}
          skills={candidate.skills}
          working={candidate.working}
        />
      ))}
      
      </section>
    </div>
  )
}
