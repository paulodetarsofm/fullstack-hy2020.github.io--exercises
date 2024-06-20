const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.title} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part title={props.content[0].title} exercises={props.content[0].exercises} />
      <Part title={props.content[1].title} exercises={props.content[1].exercises} />
      <Part title={props.content[2].title} exercises={props.content[2].exercises} />
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const content = [
    { title: 'Fundamentals of React', exercises: 10 },
    { title: 'Using props to pass data', exercises: 7 },
    { title: 'State of a component', exercises: 14 },
  ]

  const total = content[0].exercises + content[1].exercises + content[2].exercises

  return (
    <>
      <Header course={course} />
      <Content content={content} />
      <Total total={total} />
    </>
  )
}

export default App
