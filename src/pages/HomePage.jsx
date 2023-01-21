import { NavLink } from 'react-router-dom';
import React from "react";
// 換背景製作
function componentDidUpdate() {
    document.body.style.backgroundImage = "url('fly.png')"
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
};

// penquin
const penquin = `
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
`

const HomePage = () => {
    return (
    <div className="title">♣ ♦ ♥ ♠ ようこそ，今際の国 ♣ ♦ ♥ ♠
    <pre className="penquin">
        <code>
        {penquin}                   
        </code>
    </pre>
    <NavLink to="/list" className="start" onClick={componentDidUpdate}>ゲームスタート</NavLink>

    </div>)
};
  
// export default { HomePage }

export default HomePage