function Header({title, tabs}) {
    return (
        <div style={{
            width: '100%',
            background: '#121212',
            color: "white",
            padding: '20px 25px',
            fontSize: 11,
        }}>
            <h1>{title}</h1>
        </div>
    )
}

export default Header
