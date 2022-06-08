import useGym from '../hooks/useGym'

const Error = () => {

  const {error}  = useGym();

  return (
    <div className='border text-center border-red-400 bg-red-100 py-3 text-red-700 font-bold uppercase'>
        <p>{error}</p>
    </div>
  )
}

export default Error