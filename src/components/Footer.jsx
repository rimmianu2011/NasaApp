export default function Footer(props){
    const {showModal, handleModal, data} = props
    return(
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>APOD Nasa</h1>  
                <h2>{data?.title}</h2>
            </div>
            <button onClick={handleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>

        </footer>
    )
}