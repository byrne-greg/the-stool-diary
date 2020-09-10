import React from 'react';
import GlobalContextProvider from '../../context/GlobalContextProvider'
import GlobalTheme from '../theme/GlobalTheme'

// This API allows wrapping of the root Component in Gatsby
// Use: Wrapping a global Context for web app state management
// Use: Wrapping a global Theme for the web app
const AppWrapper = ({ children }) => {
  const [isClient, setClient] = React.useState(false);
  const key = isClient ? "client" : "server";
  React.useEffect(() => {
    setClient(true);
    console.log(`Rendering in ${key} mode`);
  }, []);

  return (
    <div key={key}>
      <GlobalContextProvider>
        <GlobalTheme>
          {children}
        </GlobalTheme>
      </GlobalContextProvider>
    </div>
  )
}
export default AppWrapper
