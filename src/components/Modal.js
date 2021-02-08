import Button from '@material-ui/core/Button';
import React, { useEffect, useRef, useState } from 'react';
import { test } from './lvq'

const Modal = ({ display, onClick, updateDataTest, weights }) => {
    const [inputs, setInputs] = useState([])
    const inputFields = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(),]

    let displayNone = onClick
    const onSave = () => {
        setInputs(inputFields.map(i => parseInt(i.current.value)))
    }

    useEffect(() => {
        if (inputs.length !== 0) {
            updateDataTest(d => [[inputs, test(inputs, weights)], ...d])
        }
    }, [inputs])

    const onExit = () => {
        displayNone()
        inputFields.map(e => e.current.value = '')
    }
    return (
        <div
            style={{
                display: display,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                backgroundColor: '#00000046',
                zIndex: 999,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* MODAL-CONTENT-CONTAINER */}
            <div style={{
                width: '80%',
                border: '2px solid gray',
                borderRadius: 10
            }}>
                {/* HEAD */}
                <div
                    style={{
                        borderBottom: '2px solid gray',
                        display: 'flex',
                        justifyContent: "space-around",
                        backgroundColor: '#0f0f0f',
                        borderRadius: '10px 10px 0 0',
                        padding: 10,
                        color: 'white',
                    }}>
                    Masukkan data Test
                </div>
                {/* BODY */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#161616',
                        borderRadius: '0 0 10px 10px',
                        padding: 10,
                        color: 'white',
                    }}>
                    {/* INPUT */}
                    {/* TEXTFIELDS */}
                    <div style={{ marginBottom: 10, ...styles.wraper }}>
                        {inputFields.map(input => {
                            return (<input ref={input} type="text" style={styles.input} />)
                        })}
                    </div>

                    {/* BUTTONS */}
                    <div style={styles.wraper}>
                        <Button
                            style={{ width: '60%', backgroundColor: '#03DAC6', ...styles.buttons }}
                            onClick={onSave}
                            variant="contained"
                            color="primary"
                        >
                            Send
                        </Button>
                        <Button
                            style={{ width: '40%', borderRadius: 0, ...styles.buttons }}
                            onClick={onExit}
                            variant="contained"
                            color="secondary"
                        >
                            Close
                        </Button>
                    </div>

                </div>
            </div>
        </div >
    )
}

const styles = {
    input: {
        backgroundColor: 'white',
        width: '15%',
        border: 'none',
        padding: 3,
        borderRadius: 3,
        fontSize: 18,
        textAlign: 'center'
    },
    wraper: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    buttons: {
        borderRadius: 0,
        padding: 3,
        fontSize: 14
    }
}

export default Modal
