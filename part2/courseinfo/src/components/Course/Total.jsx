const Total = ({ total }) => {
  return (
    <p>
      <strong>total of {total} {total === 1 ? 'exercise' : 'exercises'}</strong>
    </p>
  )
}

export default Total
