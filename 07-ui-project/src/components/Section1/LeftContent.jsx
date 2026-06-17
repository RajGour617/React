import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
    return (
        <div className='px-7 h-full w-3/10 flex flex-col justify-between'>
            <HeroText />
            <Arrow />
        </div>
    )
}

export default LeftContent
