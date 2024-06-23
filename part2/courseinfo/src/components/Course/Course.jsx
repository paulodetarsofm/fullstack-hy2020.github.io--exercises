import Header from './Header'
import Content from './Content/Content'
import Total from './Total'

const Course = ({ course }) => {
  let total = 0

  course.parts.forEach(part => {
    total += part.exercises
  })

  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </>
  )
}

export default Course
