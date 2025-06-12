import './App.css';
import Header from './components/Header';
import List from './components/List';
import Card from './components/Card';

const schoolTasks = [
  "Read JS Book",
  "Study Algebra",
  "Do Homework",
  "Create expeses spreadsheet",
];

const schoolTasksTitle = "schoolTasks";

const workTasks = [
"Create new project",
"Write informative email",
"Organize documents",
"Prepare budget spreadsheet",
];

const workTasksTitle = "WorksTasks";  


function App() {

  return (
    <div className="App" style={{
      with: "700px",
      border: "1px solid",
      padding: "8px",
      margin: "8px auto 8px auto",
      backgroundColor: "lightblue",
    }}>
      <Header/>
      <h1>Minha Lista de Tarefas</h1>
      <List type = "ordered" title={workTasksTitle} items={workTasks}/>
      <List type = "unordered" title={schoolTasksTitle} items={schoolTasks}/>

      <List title="Custom Work tasks">
        <div style={{display: "flex", justifyContent: "space-between"}}>
          {workTasks.map((item, i) => (
            <Card key={i} content={item} title="Custom item"/>
          ))}
        </div>
      </List>
    </div>
  );
}

export default App;
