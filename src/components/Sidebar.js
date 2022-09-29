export default function Sidebar(props) {
    return (
        <div className="sb-container">
            <div className="create">
                <a href="./newpost"><button type="button" className="create-b">Create Post</button></a>
            </div>
            <div className="boards">
                <a href="./boards"><button type="button" className="create-b">Boards</button></a>
            </div>
            <div className="premium">
                <a href="./upgrade"><button type="button" className="create-b">Upgrade</button></a>
            </div>
            <div className="languages">
                <a href="./language"><button type="button" className="create-b">Change Language</button></a>
            </div>
        </div>
    )
}
  
