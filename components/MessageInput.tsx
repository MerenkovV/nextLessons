'use client'
import React, { useEffect, useRef, useState } from 'react'
import style from '@/styled/MessageInput.module.css'

const MessageInput = () => {

    const [height, setHeight] = useState<number>(0)
    const [message, setMessage] = useState<string>('')

    const textareaDOM = useRef<null | HTMLDivElement>(null)

    useEffect(()=>{
        if(textareaDOM?.current?.offsetHeight !== undefined) setHeight(textareaDOM?.current?.offsetHeight)

    }, [textareaDOM?.current?.offsetHeight])

  return (
    <div className={style.inputWrapper} style={{height: `${height + 20}px`}}>
        <div className={style.input} 
        contentEditable role='textbox' ref={textareaDOM} 
        onInput={(e)=>{e.currentTarget.textContent !== null && setMessage(e.currentTarget.textContent)}}
        style={{overflowY: `${height === 150 ? 'auto' : 'visible'}`}}
        >{message}</div>
    </div>
  )
}

export default MessageInput