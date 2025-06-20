import type { CandidateType } from "@/types/candidates";

const Candidate = (props: CandidateType) => {
    const {name, age, experience, status, skills, working} = props;
    return (<div>
        <h2>Nombre: {name?.toUpperCase()}</h2>
        <p>Age: {age} </p>
        <p>Experience: {experience} </p>
        <p>Status: {status} </p>
        <p>Skill: {skills.join(', ')} </p>
        <p>Working: {working ? 'Laborando actualmente✅' : 'Disponibilidad inmediata❌'} </p>
        <p>Random Number:{randomNumber()} </p>

    </div>
    );

    function randomNumber() {
        return Math.floor(Math.random()*100);
    }
};

export default Candidate;