export default function ReviewCard({text, user, alt}) {
    return (
        <div className={`col-span-4 md:col-span-6 lg:col-span-8 m-4 lg:mx-0 bg-gray-100 my-8 ${alt ? "md:col-start-3 lg:col-start-4" : "lg:col-start-2"}`}>
            <div className="p-4">
                {text}
            </div>
            <div className="flex justify-between items-center p-2 font-bold uppercase" style={{'background': "#1971CB", 'color': 'white'}}>
                <p>{user}</p>
                <span className="">
                    <img className="h-8" src="/images/stars.svg" alt="5 gold stars" />
                </span>
            </div>
        </div>
    )
}