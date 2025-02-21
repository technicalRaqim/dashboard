import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd"
import Header from "./header"
import { useDocumentTitle } from "@refinedev/react-router-v6"


const Layout = ({children}:React.PropsWithChildren) => {
  useDocumentTitle("LiveGrid")
  return (
    <ThemedLayoutV2
    Header={Header}
    Title={(titleProps)=><ThemedTitleV2 {...titleProps} text="LiveGrid" />}
    >
     
        {children}
    </ThemedLayoutV2>
  )
}

export default Layout