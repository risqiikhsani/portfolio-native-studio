import Image from 'next/image'

export default function page() {
  return (
    <div>
        <div className='flex flex-col items-center py-6 gap-16'>
        <h2 className="text-4xl font-medium tracking-tight text-center">
        Workflow
        </h2>
        <Image src={"/pictures/How_it_Works.png"} alt="logo" width={1000} height={1000} className='rounded-2xl dark:invert'/>
        </div>
    </div>
  )
}
