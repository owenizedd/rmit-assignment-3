import './App.css';
import { useState } from 'react';
function App() {
  const [fullName, setFullName] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [programName, setProgramName] = useState('');

  //       
  const [courseNames, setCourseNames] = useState([
    'Workplace Communication A',
    'User-Centred Design (AD)',
    'Networking 1',
    'Introduction to Computer Systems and Platform Technologies',
    'Web Programming',
    'Networking 2',
    'Database Concepts',
    'Introduction to Programming',
  ]);
  const [courseScores, setCourseScores] = useState([83,82,92,87,91,95,83,88]);
  

  return (
    <div className="App">
      <input 
        type="text" 
        placeholder="Full name"
        value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <input 
        type="number"  
        placeholder="Student number"
        value={studentNumber} onChange={(e) => setStudentNumber(e.target.value)} />
      <input 
        type="text" 
        placeholder="Program name"
        value={programName} onChange={(e) => setProgramName(e.target.value)} />

     
      
    </div>
  );
}

export default App;
