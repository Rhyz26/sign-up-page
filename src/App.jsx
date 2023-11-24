import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import SignUp from "./components/signup";
import { useState } from 'react';
import { Input, CloseButton } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';



function App(){
  return(
    <MantineProvider>

      

    <div>
      <SignUp
      />
    </div>
      </MantineProvider>

  )
}
export default App;