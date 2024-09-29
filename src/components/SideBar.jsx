export default function SideBar(props) {
    const {handleModal, data} = props
    return(
        <div className="sidebar">
            <div onClick={handleModal} className="bgOverLay"></div>
            <div className="sidebarContents">
                <h2>{data?.title}</h2>
                <div className="descContainer">
                    <p className="description">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleModal}>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}