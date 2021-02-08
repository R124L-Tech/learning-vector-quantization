const Panel = ({ titles, data }) => {
    return (
        <div
            style={{
                width: '100%',
                color: 'white',
                borderRadius: 10,
                marginBottom: 15,
            }}
        >
            {/* CONTENT-HEAD */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: "space-around",
                    backgroundColor: '#121212',
                    borderRadius: '10px 10px 0 0',
                    padding: 10,
                }}
            >
                {/* Title maper */}
                {titles.map(title => (<div style={styles.center}>{title}</div>))}
            </div>

            {/* CONTENT */}
            <div
                style={{
                    backgroundColor: '#161616',
                    borderRadius: '0 0 10px 10px',
                    padding: 10,
                }}
            >
                {/* MENAMPILKAN DATA PANEL */}
                {data.map(col => (
                    <div style={{ display: 'flex' }}>

                        {/* ROWS */}
                        {col.map((row, i) => {
                            let space = typeof (row) === 'object' ? 5 : 0
                            let textColor = 'gray'

                            // VECTOR - CLASS
                            if (titles.includes("Vector")) {
                                if (row === 1) {
                                    textColor = '#03DAC6'
                                } else if (row === 2) {
                                    textColor = '#FFC400'
                                }
                            }

                            // ALFA - EPOCH - ERROR
                            if (titles.includes("Alfa") && i === 2) {
                                textColor = '#00B5A4'
                            }

                            return (
                                <div
                                    style={{
                                        width: '100%',
                                        textAlign: "center",
                                        color: textColor,
                                        letterSpacing: space
                                    }}>
                                    {row}
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
        </div >
    )
}

const styles = {
    center: { width: '100%', textAlign: "center" },
    vector: { width: '100%', textAlign: "center", color: 'gray', letterSpacing: 5 },
}

export default Panel
