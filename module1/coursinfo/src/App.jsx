import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Total from './components/total/total';
const parts = [
  {
      part: 'Fundamentals of React',
      nbrExercices:10
  },
  {
      part: 'Using props to pass data',
      nbrExercices:7
  },
  {
      part: 'State of a component',
      nbrExercices:14
  }
]

const App = () => {
  let nbrTotalExos = 0;
  const course = 'Half Stack application development';
  return (
    <div>
      <Header course={course} />
      {parts.map((part ,index) => {
        nbrTotalExos += part.nbrExercices;
        return <Content key={index} part={part} />;
      })}
      <Total nbrTotalExos={nbrTotalExos} />
    </div>
    
  );
};

export default App;