import {Link} from "react-router-dom";

const Header = ()=>{
    return(
        <>
          <div className="mainNav">
            <Link to="/">Home</Link>
            <Link to="/add">ADD</Link>
            <Link to="/view">VIEW</Link>
          </div>

          <div className="allStats">
            <div className="statsWrap">
                <div className="statstop">
                    <h2>Stats top</h2>
                </div>
                <div className="statsmid">
                    <h2>Stats mid</h2>
                </div>
                <div className="statsbottom">
                    <h2>Stats bototom</h2>
                </div>

            </div>

          </div>
            
        </>
    )   
}

export default Header;