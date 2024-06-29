import { useState } from 'react';
import PropTypes from "prop-types";
import './App.css';
import { InputWithDisplay } from './';

function App() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    return (
        <>
            <Header />
            <HeaderText text="abc" />
            A to jest children
            <p>abc</p>
            <HeaderText text="abc"/>
            <div>
                <a href="" target="_blank">
                    <img src={nazwaImg} className="logo" alt="" />
                </a>
            </div>
            <InputWithDisplay/>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    Count is {count}
                </button>
            </div>
        </>
    )
};

// --------------------

import { useState } from 'react';

export const InputWithDisplay = () => {
    const [name, setName] = useState('')

    return (
        <>
            <p>{name}</p>
            <input value={name} onChange={e => setName(e.target.value)} />
        </>
    )
};

// ---------------------- propsy , children

export const HeaderText = ({ text = "Wartośc domyślna", children }) => { //props.text
    return <>
        <h1>{text}</h1>
        <h2>A to jest CHILDREN: {children} </h2>
    </>
};

HeaderText.propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

// ------------------------- Renderowanie warunkowe

export const HeaderText = ({ props: HeaderTextProps }) => { // TypeScript
    const { text = "" } = props

    if (text === "") return <h1>brak wartości</h1>

    return <>
        <h1>{text}</h1>

        {text === "" ? <h1>{text}</h1> : <h1>brak wartości</h1>} //alternatywny zapis dla linijki 67 i niepotrzebna jest linijka 70 i 67 
    </>
}