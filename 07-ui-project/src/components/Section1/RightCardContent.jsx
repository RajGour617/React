
const RightCardContent = (props) => {
    return (
        <div className='p-7 absolute top-0 left-0 h-full w-full bg-black/0 flex flex-col justify-between text-white'>
            <h2 className='bg-white text-black text-2xl font-bold rounded-full h-12 w-12 flex items-center justify-center'>{props.id + 1}</h2>
            <div>
                <p className='leading-normal mb-5'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button style={{ backgroundColor: props.color || 'blue' }} className='px-8 py-2 rounded-full font-medium hover:bg-gray-200'>{props.tag}</button>
                    <button style={{ backgroundColor: props.color || 'blue' }} className='px-3 py-2 rounded-full font-medium hover:bg-gray-200'><i className='ri-arrow-right-line'></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
