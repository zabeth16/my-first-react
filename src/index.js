import { mainCSS } from "./css/index.css";
import { listPageCSS } from "./css/listPage.css"

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "welcome"
        };
        this.handleClick = this.handleClick.bind(this);
        this.backHome = this.backHome.bind(this)
    };
    handleClick() {
        this.setState({currentPage: "game"}, () => {
            this.render();
         });
    }
    backHome() {
        this.setState({currentPage: "welcome"}, () => {
            this.render();
         });
        this.componentDidUpdate();
    };
    submit = () => {
        const value = document.querySelector("input").value;
        const messageContainer = document.querySelector(".message-container");
        const newMessage = document.createElement("div");
        const deleteMessage = document.createElement("button");
        deleteMessage.className = "delete";     
        newMessage.innerText = value;
        messageContainer.appendChild(newMessage);
        newMessage.appendChild(deleteMessage);  
        deleteMessage.innerText = "刪除反動言論";
        deleteMessage.addEventListener("click", function() {
            messageContainer.removeChild(newMessage);
          });
    };
    componentDidUpdate() {
        if (this.state.currentPage === "game") {
            document.body.style.backgroundImage = "url('./0e116b06ce9f7e64d769.png')";
        }
        else{
            document.body.style.backgroundImage = "url('3d39a6bfaba77d0346a3.png')";
        }
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
    };    
    render() {
        let content;
        if (this.state.currentPage === "welcome"){            
            content = 
            React.createElement(
                "div",
                { className: "title" },
                "♣ ♦ ♥ ♠ ようこそ，今際の国 ♣ ♦ ♥ ♠ ",              
                    React.createElement(
                        "pre",
                        {className: "penquin"},
                            React.createElement(
                            "code",
                            null,
                            `
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
                            )
                    ),
                    React.createElement(
                        "button",
                        { className: "start" , onClick: this.handleClick},
                        "ゲームスタート"
                    )
            ) //content end
        
        }else{
            content = 
            React.createElement("div", {className: "list-title"} , "保密防諜人人有責",
            React.createElement("pre",{className : "TW-father"},
            React.createElement("code", null,
            `
            xxxxkxxxkOkOK00K00ko:,...''''';:lodddddddddoolllll
            ddxxxxxkkOO0000Oxc,........''.',,;:codddddooolllll
            xxxxkkkkkOOO0ko;.....',;:cloolloolc:clddddoooollll
            xxxkkkkkOOOOd,.....';lodxxkO0OOO000Odlclddddooolll
            kkkkkkOOOk0k;.  .,:loxkOO00KXXXXXXNNN0lcoddoooollo
            OOOkkOOOOOOl.  .,codxkO0000KKKXXXNNNNN0olddlloollo
            OOOOOOOOOOk:  .'coddxkOOOOO000KKXXXNNNNkclolloooll
            O0000OOOO0O,  .,lodxxkOO000000KKXXXNNNN0l:ccllllll
            00000OOOO0O, .':::::ccodkOO00OOOO000KXNXdcccllcccc
            00000OOOxdd,..,;.......,cldkkxoc;,;cdk0XOoc:cccllc
            OOOOOOOx:,,'',::;'''',,:clok0Oo;..;cokKX0Okxlcllcc
            kkkkkOOkc;,.':ccccloodxkxdxOKX0kooxOO0XNXKOkolcccc
            kxxxxkkko;'.,::ldxkkkkkkxxxOXNXXK0KXNWNXkOXOlclllc
            xxxxxxkkd;'',;:lodkkOOkdddxOXXXXNNNXXNNX00Xxccllcc
            xxxxxxxxxl;'';:ccldkkkdllloxO00OO0XXXXXXXKOl;:ccc:
            xdddddddddoc,':cccoddxdc;,,cxxdkkxO0KXXK0xc,,:::::
            xddddddodddd:.,cccllooxddodk0XXNX00KKXXkc,;;;;;;:;
            dddddddoododc',:cccc:;::::coxOOkk0KKKX0o;,,;;;;;;;
            ddddddoooddl' .';;::;;:cc::cldxxxxO0K0o:;;;;;;;;;,
            dxxddoooodc.   ...,;:clddxxkOO00K00Oxc;;;;;;,'',,'
            ddddollc;'.       .',;coddxkkOO00Odc;,,,,''''..'''
            ool:,..             ..',;;;;:ldxOOo,',''''......''
            ,'..                   .',;:lxO00kdcclcc:;;,'''...
            .......                  ..'cdxdoddddxxddddolcc:;'
            .........                    .,:looddxddoooloooool
            .............. ..           ..',coolooooolcclloool
            ,''''..... .....'''.  ....',,,. 'lddolooolllooolll
            ;',;,'.',,'....''',;,.  ...';:'..;lolllllllloollcc
            ;,',;,'',:;'...''.';:;,.... .'';;:llllolllllllllcc
            ;;'.;:'.';:;''',,..';:::;;,..,,;cloooololloolclllc
            ':;..:,.';c:;,;;,'..';cc:;;'.':collllllllooolccllc
            .,;'.;;'',::;;:c:,...;clc:;'..,cclcccllllllolc:ccc
            ..,,';:,.',;;;:ll:,'',:lllc;'.';,;::cllclccccc:;cc
            '.,,.;:,'',,,;:ll:,'',:loooc'.''',;:cllcccc::c:;::

            `)            
            ),
            React.createElement("input" , {type : "input" , placeholder : "革命尚未成功", }) ,
            React.createElement("button", {type : "submit" , onClick : this.submit , className:"submit"}, "同志仍須努力"),
            React.createElement("hr", null),
            React.createElement("div", {className : "message-container"}),
            React.createElement("button", { className: "back-home" , onClick: this.backHome}, "夢醒淑芬")
               

            ); //content end
        }
        return content         
    }
}

window.addEventListener("load" , () =>{
    // 1. 建立我自訂的react
    let Component = React.createElement(MyComponent , null);
    // 2. 將我的react渲染到畫面中!
    ReactDOM.render(Component , document.body);
})


