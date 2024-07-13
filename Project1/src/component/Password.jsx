import React, { useCallback, useEffect, useRef, useState } from 'react'

const Password = () => {
    const [length, setLength] = useState(8);

    const [numAllo, setNumAllo] = useState(false);

    const [charAllo, setCharAllo] = useState(true);

    const [password, setPassword] = useState("");

    const passwordRef = useRef(null)

    const passwordGenerater = useCallback(() => {
        let password = "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (numAllo) {
            str += "0123456789"
        }
        if (charAllo) {
            str += "!@#$%^&*()"
        }
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            password += str.charAt(char)
        }
        setPassword(password);

    }, [length, numAllo, charAllo, setPassword])

    const copyPassword = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 100)
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => {
        passwordGenerater();
    }, [length, numAllo, charAllo, passwordGenerater])
    return (
        <>
            <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
                <h1 className='text-white text-center my-3'>password Generater</h1>
                <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
                    <input type='text'
                        value={password}
                        className='outline-none w-full py-1 px-3'
                        placeholder='password'
                        readOnly
                        ref={passwordRef}
                    />

                    <button
                        onClick={copyPassword}
                        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
                        copy
                    </button>



                </div>
                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type="range"
                            min={8}
                            max={100}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                        <label >langth:{length}</label>

                    </div>

                    <div className='flex items-center gap-x-1'>
                        <input
                            type='checkbox'
                            defaultChecked={numAllo}
                            id='numberInput'
                            onChange={() => {
                                setNumAllo((prev) => !prev)
                            }}
                        />
                        <label >Number</label>

                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type='checkbox'
                            defaultChecked={charAllo}
                            id='charInput'
                            onChange={() => {
                                setCharAllo((prev) => !prev)
                            }}
                        />
                        <label >charcter</label>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Password