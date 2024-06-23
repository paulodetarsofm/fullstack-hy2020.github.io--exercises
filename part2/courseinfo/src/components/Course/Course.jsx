import Header from './Header'
import Content from './Content/Content'
import Total from './Total'

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
