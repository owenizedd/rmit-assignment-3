import './App.css';
import { useState } from 'react';
function App() {
  const [errorMessage, setErrorMessage] = useState('');
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
  
  const handleValidation = () => {
    const names = fullName.split('');
    const number = studentNumber;
    let errorHTML = '';
     
    if ( !(names.length === 2 
      && names[0][0].charCodeAt() < 97
      && names[1][0].charCodeAt() < 97) ){
      //add to error
      errorHTML += '<li>Fullname is invalid.</li>';
    }
    if (!(number.length === 7 && number[0] == '3')){
      errorHTML += '<li>Student Number is invalid.</li>';
    }
    if (programName[0] !== 'B'){
      errorHTML += '<li>Program name is invalid.</li>';
    }
    if (errorHTML.length === 0){
      alert('Data saved to localStorage');
      localStorage.setItem('fullName', fullName);
      localStorage.setItem('studentNumber', studentNumber);
      localStorage.setItem('programName', programName);
      localStorage.setItem('courseNames', JSON.stringify(courseNames));
      localStorage.setItem('courseScores', JSON.stringify(courseScores));
    }
    setErrorMessage(errorHTML);
    
    setTimeout(() => setErrorMessage(''), 4000);
  }

  const handleCourseNameChange = (e, index) => {
    const newArray = [...courseNames];
    newArray[index] = e.target.value;
    setCourseNames(newArray);
  }
  const handleCourseScoreChange = (e, index) => {
    const newArray = [...courseScores];
    newArray[index] = e.target.value;
    setCourseScores(newArray);
  }
  return (
    <div className="App">
      {
        errorMessage ?
          <div className='toast' dangerouslySetInnerHTML={{__html: errorMessage}}></div>
        :
        []
      }
      <h3>Assignment 3</h3>
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

      {
        courseNames.map((name, index) => {
          return (
            <div className='inline' key={index}>
              <input type='text' placeholder={'Course ' + (index + 1)} value={courseNames[index]} onChange={(e) => handleCourseNameChange(e,index)}/>
              <input type='number' placeholder='Score' value={courseScores[index]} onChange={(e) => handleCourseScoreChange(e,index)}/>
            </div>
          )
        })
      }

      <input type="submit" value="Submit" onClick={handleValidation}  />
      
    </div>
  );
}

export default App;
