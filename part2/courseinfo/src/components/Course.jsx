const Header = ({ name }) => {
  return (
    <h2>{name}</h2>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Total = ({ total }) => {
  return (
    <p>
      <strong>total of {total} {total === 1 ? 'exercise' : 'exercises'}</strong>
    </p>
  )
}

const Course = ({ course }) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </>
  )
}

export default Course
