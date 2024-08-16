const NewsItem = (NewsItemData) => {
    return (
        <div className="items-center">
            <img className="mb-5 mx-auto" src={NewsItemData.data.image_url ? NewsItemData.data.image_url : "https://picsum.photos/200"} alt="" />
            <h1 className="text-xl font-bold">
                {NewsItemData.data.title}
            </h1>
            <p className="mb-5">{NewsItemData.data.description ? NewsItemData.data.description.slice(0, 250) : ""}</p>
            <a href={NewsItemData.data.link} target="_blank" className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 hover:border hover:border-black hover:text-white rounded p-2 px-4">Read More</a>
        </div>
    )
}

export default NewsItem;