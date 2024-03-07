import React from 'react'
import style from '@/styled/Chat.module.css'

const Chat = () => {
  return (
    <ul className={style.list}>
        <li className={`${style.message} ${style.right_message}`}><div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div></li>
        <li className={`${style.message} ${style.left_message}`}><div>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</div></li>
        <li className={`${style.message} ${style.right_message}`}><div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsum.</div></li>
        <li className={`${style.message} ${style.left_message}`}><div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, amet dicta.</div></li>
        <li className={`${style.message} ${style.right_message}`}><div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsum.</div></li>
        <li className={`${style.message} ${style.left_message}`}><div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, amet dicta.</div></li>
        <li className={`${style.message} ${style.left_message}`}><div>Lorem ipsum dolor sit amet consectetur adipisicing.</div></li>
        <li className={`${style.message} ${style.left_message}`}><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, inventore odit minima ex nullaaaa delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, inventore odit minima ex nullaaaa delectus.</div></li>
    </ul>
  )
}

export default Chat