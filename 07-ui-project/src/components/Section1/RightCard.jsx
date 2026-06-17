import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
    return (
        <div className='h-full w-1/3 overflow-hidden relative rounded-4xl shrink-0'>
            <img className='h-full w-full object-cover' src={props.img} alt="image" />
            <RightCardContent id={props.id} intro={props.intro} tag={props.tag} color={props.color} />
        </div>
    )
}

export default RightCard
