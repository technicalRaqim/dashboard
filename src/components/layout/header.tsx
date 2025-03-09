import React from 'react'
import CurrenUser from './current-user'
import { Space, Layout } from 'antd'

const Header = () => {

  const headerStyles: React.CSSProperties={
    background:"#fff",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    // position:"sticky",
    position:'relative',
    top:0,
    padding:"0 24px",
    zIndex:999
  }
  return (
    <Layout.Header style={headerStyles}>
     
      <h2
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          margin: 0,
          color:"green",
          lineHeight:"1"
          
        }}
      >LiveGrid: A hub for insights & analytics</h2>



    <Space align='center' size="middle" style={{ flex: 1, justifyContent: "flex-end" }}>
        <CurrenUser/>
    </Space>
    </Layout.Header>
  )
}

export default Header