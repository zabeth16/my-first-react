import { NavLink } from 'react-router-dom';
import React,{ useState, useEffect, useMemo, memo }  from "react";
import { getFirestore , Firestore, collection, addDoc } from "firebase/firestore";
import { doc, setDoc, getDocs, updateDoc, deleteField, deleteDoc, onSnapshot } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; 
import   db  from "../firebase-servise.js"
import { async } from '@firebase/util';

// 換背景製作
function componentDidUpdate() {
    document.body.style.backgroundImage = "url('3d39a6bfaba77d0346a3.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    
};

// 國父
const fatherTW = `
               
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

`

const ListPage = () => {

    // 先定義初始化我的所有留言
    const [message, setMessage] = useState([]);
    // 輸入留言與上傳用
    const [InputValue, setInputValue] = useState('');
    // 紀錄我們每一筆id，能夠刪除使用
    const [docId, setDocId] = useState([]);
    // 用 getListData 函数，把留言裝到陣列裡面去下面做迴圈跑出來
    const getListData = async () => {
        const getMessage = await getDocs(collection(db, 'users'))
        let data = []
        let id = []
        getMessage.forEach(doc =>{
            // console.log(doc.data())
            // console.log(doc.id)
            // 裝到陣列裡
            id.push(doc.id)
            data.push(doc.data())
            
        })
        // 放到setMessage去做應用
        setMessage(data);
        setDocId(id)
    };
    

    // 首次載入，拿取原本既有留言
    useEffect(() => {
        getListData();
    }, []); // useEffect空陣列不可或缺，不然會有無限迴圈
    
    // 使用map 或是 for 迴圈 或是 forEach

    return (
        <div className="list-title">保密防諜人人有責
        <pre className="TW-father">
            <code>
            {fatherTW}
            </code>
        </pre>
        <input type="input" placeholder="革命尚未成功" required 
            onChange={e => setInputValue(e.target.value)} />
        <button type="submit" className='submit' 
            onClick={async() => {
                console.log(InputValue);
                await addDoc(collection(db, "users"), {
                    InputValue
                    });
                setMessage([...message,InputValue])
                setInputValue('');
                getListData();
            }}>同志仍須努力</button>
        <hr/>
        
        <div className="message-container">
            <div className='newMessage' ></div>

            {/* 在這渲染把所有留言、刪除按鈕放進來 */}
            {message.map((data, value , id) => (
                <div key={value}>
                    {data.value}
                    {data.InputValue}
                    <button className='delete' 
                        onClick={async () =>{
                            await deleteDoc(doc(db, "users", docId[value]))
                            // console.log(docId)
                            // console.log(value)    
                            // // 這是純刪除field的作法
                            // let deleteMessage = id.splice(value)
                            // console.log("看看刪得如何: ", id)
                            // setMessage([...message, deleteMessage])
                            getListData();
                            
                    }}>
                        刪除反動言論
                    </button>
                </div>
            ))}
            
        </div>
        <NavLink to="/" className="back-home" onClick={componentDidUpdate}>夢醒淑芬</NavLink>

        </div>
        
    )
};


export default memo(ListPage) ;
