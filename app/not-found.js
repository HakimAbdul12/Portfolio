
export default function NotFound() {
  return (
    <>
    <div className='bg-slate-500 w-full h-screen'>
      <div className='flex justify-center items-center w-full h-screen'>
        <p className='text-4xl text-blue-700 font-bold mr-1'>404</p>
        <div className='border-s-2 border-slate-800 p-3'>
            <p className='text-lg'>The page you requested was not found 😟😟</p>
        </div>
      </div>
    </div>
    </>
  )
}
