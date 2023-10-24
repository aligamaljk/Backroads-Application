import Title from "../Title/Title"
import "./Tours.scss"
import { tours } from '../../../Data/Data'
import Tour from "./Tour"
const Tours = () => {
  return (
    <section className="tours"  id='tours'>
      <Title title='featured' subTitle='tours' />
      <div className='section-center featured-center'>
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id} />
        })}
      </div>
    </section>
  )
}

export default Tours