import React from "react";


function Footer (){
    const footerStyle = {
        backgroundColor: '#71807B',
        height: '100px',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
      }
    return(
        <footer style={footerStyle}>
            Little Lemon Restaurant Copyright
        </footer>
    )
}

export default Footer