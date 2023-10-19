import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown';

function App() {

  const selections = [
    {value:"Oliver Hansen", label: "Oliver Hansen"},
    { value:"Van Henry", label: "Van Henry"},
    { value:"April Tucker", label: "April Tucker"},
    { value:"Ralph Hubbard", label: "Ralph Hubbard"},
]

const multiSelections = [
  {value:"Select All", label: "Select All"},
  {value:"Oliver Hansen", label: "Oliver Hansen"},
  { value:"Van Henry", label: "Van Henry"},
  { value:"April Tucker", label: "April Tucker"},
  { value:"Ralph Hubbard", label: "Ralph Hubbard"},
]

  return (
    <div className='container'>
   <Dropdown default="Select" multi={true} selections={multiSelections} />
   <Dropdown default="Select" multi={false} selections={selections} />
   </div>
  );
}

export default App;
