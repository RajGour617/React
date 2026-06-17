import RightCard from "./RightCard"

const RightContent = (props) => {
    return (
        <div id="right" className='h-full p-6 w-3/4 flex flex-nowrap gap-10 overflow-x-auto items-center justify-between'>
            {props.users.map(function(elem, idx) {

                return <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag} color={elem.color} />
            })}
        </div>
    )
}

export default RightContent
