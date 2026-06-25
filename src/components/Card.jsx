const Card = ({ elem, onSelect }) => {
    return (
        <button
            type='button'
            onClick={() => onSelect(elem)}
            className='group flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 text-left transition duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-[0_20px_60px_rgba(15,23,42,0.35)] focus:outline-none focus:ring-4 focus:ring-amber-400/20'
        >
            <div className='relative overflow-hidden bg-slate-900'>
                <img
                    src={elem.download_url}
                    alt={`Photo by ${elem.author}`}
                    className='h-72 w-full object-cover transition duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/95 to-transparent px-4 py-4'>
                    <p className='text-xs uppercase tracking-[0.32em] text-amber-300'>Photo by</p>
                    <h2 className='mt-1 text-lg font-semibold text-white'>{elem.author}</h2>
                    <p className='mt-1 text-xs text-slate-400'>{elem.width} × {elem.height}</p>
                </div>
            </div>
            <div className='flex items-center justify-between gap-2 px-4 py-4'>
                <span className='text-sm text-slate-300'>Tap to preview</span>
                <span className='rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300'>Preview</span>
            </div>
        </button>
    )
}

export default Card