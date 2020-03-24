import React from 'react';
import './App.css';
import { LoadSkills, SaveSkills } from './service/skills.service';
import CheckBox from './components/checkbox/checkbox.component';

function App() {
  const [skills, setSkills] = React.useState([]);

  // React.useEffect(() => {
  //   LoadSkills().then(skills =>
  //     setSkills(skills));
  // }, []);

  // function handleCheckChieldElement(event) {
  //   let tmpSkills = skills
  //   tmpSkills.forEach(skill => {
  //     if (skill.value === event.target.value)
  //       skill.isChecked = event.target.checked
  //   })
  //   setSkills(tmpSkills)
  // }

  // function save() {
  //   let resSkills = [];

  //   skills.forEach(skill => {
  //     if (skill.isChecked) {
  //       resSkills.push(skill.value);
  //     }
  //   })

  //   let selectedSkills = resSkills.join('\n');
  //   SaveSkills(selectedSkills);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Select your skills.
        </h1>
      </header>
      <div className="skills-container">
        <ul>
          {
            // skills.map(skill => {
            //   return (<CheckBox handleCheckChieldElement={handleCheckChieldElement} {...skill} />)
            // })
          }
        </ul>
      </div>
      {/* <button onClick={save}>Save to file</button> */}
    </div>
  );
}

export default App;
