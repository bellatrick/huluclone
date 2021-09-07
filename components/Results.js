import Thubmnail from "./Thubmnail"
import FlipMove from 'react-flip-move'
const Results = ({results}) => {
    return (
        <p className='px-5 my-10 sm:grid
         md:grid-cols-2 
        xl:grid-cols-3 
        3xl:flex flex-wrap 
        justify-center'>
            
            {results.map((res)=> <Thubmnail key={res.id} result={res}/>)}
        </p>
    )
}

export default Results
