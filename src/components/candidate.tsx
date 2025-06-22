import type { CandidateType } from "@/types/candidates";
import './candidate.css';

const Candidate = (props: CandidateType) => {
    const {name, age, experience, status, skills, working} = props;
    
    return (
    <div className="candidate__container">
        <span className="candidate__name">
            <h2>{name?.toUpperCase()}</h2>
        </span>
        <p>ID: {randomNumber()}</p>
        <p>Age: {age} </p>
        <p>Experience: {experience} years</p>
        <p>Status: {status} </p>
        <p>Working: {working ? 'Yes ✅' : 'No ❌'} </p>
        <div className="candidate__skills">
            <p>Skills:</p>
            <ul>
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))} 
            </ul>
        </div>
        <div className="candidate__actions">
            <button className="candidate__action" onClick={copyToClipboard}>Copiar datos 📋</button>

        </div>
    </div>
    );

    function randomNumber() {
        return Math.floor(Math.random()*100);
    }

    function copyToClipboard() {
        const textToCopy = `Name: ${name}, Age: ${age}, Experience: ${experience}, Status: ${status}, Skills: ${skills.join(', ')}`;

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('Los datos han sido copiados exitosamente ✅');
            })
            .catch(err => {
                console.error('Error al copiar los datos: ', err);
            });
    }
};

export default Candidate;