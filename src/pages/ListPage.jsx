import { NavLink } from 'react-router-dom';
import React from "react";

function submit(){
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

const ListPage = () => {
    return (
        <div className="list-title">保密防諜人人有責
        <pre className="TW-father">
            <code>
                
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

            </code>
        </pre>
        <input type="input" placeholder="革命尚未成功" required></input>
        <button type="submit" className='submit' onClick={submit}>同志仍須努力</button>
        <hr/>
        <div className="message-container"></div>
        <NavLink to="/" className="back-home">夢醒淑芬</NavLink>

        </div>
        
    )
};

export default ListPage ;
