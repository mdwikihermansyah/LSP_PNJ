import React from "react";
import InputTextMessage from "../../component/TextField/InputTextField";
import { Container } from "@mui/material";
import '../../App.css'
import Buttons from "../../component/Button/Button";
// import "./App.css";




function HalamanLogin(params) {
    return (
        <Container maxWidth="sm" className="bg-primary-blue">
          
          <div className="textLogin" >
                <text style={{color:'#008797', fontSize: 42, fontFamily: 'Poppins'  }}>Login disini</text>
          </div>

          <div className="textLogin" mb="20px">
                <text style={{}}>Selamat Datang Kembali !!!</text>
          </div>

          <div className="textLogin"
          >   <div>
                <img
                src="/assets/images/gambar1.jpg" 
                alt="gambar depan"
                width={170}
                height={160}
                content="center">
                </img>

              </div>

          </div>

          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "500",
          }} >
                <text style={{color:'#008797', fontSize: 42, fontFamily: 'Poppins'  }}>ASESOR</text>
          </div>
                    

          Username
          <InputTextMessage
          id="username"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          autautoFocus
          name="username"
          type="text" />

          Password
          <InputTextMessage
          id="password"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          autautoFocus
          name="password"
          type="password" />

          <div className="buttonLogin">
              <div>
                <Buttons //CLASS NAME
                //SAMAIN DENGAN FIGMA
                //BUTTON FLEX SESUAI UKURAN
                type="submit" 
                size="large" 
                variant="contained"
                color="success"
                label="Log IN">
                Log IN
                </Buttons>

              </div>
              <div>
                <Buttons className="buttonLogin"
                type="submit" 
                size="large" 
                variant="contained"
                color="success"
                label="PANDUAN ASESOR">
              
                </Buttons>

              </div>
          </div>

          <div>
                <text style={{height: "40vh"}}>Hubungi contact service di 022-62111111 apabila memiliki kendala login.
                </text>
          </div>

          <text>test</text>
        </Container>
    
        );
        
        
}

export default HalamanLogin;