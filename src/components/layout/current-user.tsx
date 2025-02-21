import { Popover, Button } from 'antd'
import React from 'react'
import { useState } from 'react'
import CustomAvatar from '../custom-avatar'
import { useGetIdentity } from '@refinedev/core'
import type {User} from "@/graphql/schema.types"
import { Text } from '../text'
import { SettingOutlined } from '@ant-design/icons'
import { AccountSettings } from './account-settings'

const CurrenUser = () => {
  const [isOpen, setIsOpen]=useState(false)
    const {data:user}=useGetIdentity<User>()
    const content=(
      <div style={{display:"flex", flexDirection:"column"}}>
       <Text strong style={{padding :"12px 20px"}}>
        {user?.name}
       </Text>
       <div style={{border:"1px solid #d9d9d9", 
        padding:"4px", display:"flex", flexDirection:"column", gap:"4px"}}>
        <Button style={{ textAlign:"left" }} 
        icon={<SettingOutlined/>} type="text" onClick={()=>setIsOpen(true)}>
          Account Settings
        </Button>
       </div>
      </div>
    )

  return (
    <>
    <Popover
  placement="bottomRight"
  trigger="click"
  styles={{ body: { padding: 0 } }} // Replaces overlayInnerStyle
  overlayStyle={{ zIndex: 999 }}
  content={content}
>
        <CustomAvatar
        name={user?.name}
        src={user?.avatarUrl}
        size="small"
        style={{cursor:'pointer'}}/>
    </Popover>
    {user && (
      <AccountSettings
      opened={isOpen}
      setOpened={setIsOpen}
      userId={user.id}
      />)}
    </>
  )
}

export default CurrenUser