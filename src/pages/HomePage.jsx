import { NavLink } from 'react-router-dom';
import React from "react";




const HomePage = () => {
    return (
    <div className="title">♣ ♦ ♥ ♠ ようこそ，今際の国 ♣ ♦ ♥ ♠
    <pre className="penquin">
        <code>
        
            ⠀⠀⠀⠀⣀⣤⣤⣤⣤⣤⣀⠀⠀⠀
            ⠀⠀⢀⠊⠀⠀⠀⠉⢻⣿⣿⣷⡄⠀
            ⠀⢀⣴⣆⠀⢀⣀⣶⠀⢿⣿⣿⣷⠀
            ⠐⠈⠡⠤⠀⠈⠛⠋⠀⢸⣿⣿⣿⡆
            ⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⡇
            ⢀⡆⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿
            ⣼⡇⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿
            ⣿⠇⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿
            ⠀⢀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿
            ⠀⠘⡀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⡏
            ⠀⠀⠀⠒⠂⠀⠀⠀⠀⠈⠛⠛⠉⠀
                   
        </code>
    </pre>
    <NavLink to="/list" className="start">ゲームスタート</NavLink>

    </div>)
};
  
// export default { HomePage }

export default HomePage