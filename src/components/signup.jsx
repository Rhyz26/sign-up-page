import React from "react";
import { MantineProvider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PasswordInput, Stack } from "@mantine/core";
import { useState } from "react";
import { Input, CloseButton } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { Checkbox } from '@mantine/core';
import { Button } from "@mantine/core";


function SignUp() {
  const [value, setValue] = useState("Clear me");
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <MantineProvider>
      <div className="flex flex-col bg-purple-700 border-x-8 pt-6 border-4" flex-wrap>
      <div className="text-center">Sign up page</div>

      <br></br>
      <div className="flex justify-center gap-14">
        <Input size="md" radius="md" placeholder="First Name" />

        <br></br>
        <Input size="md" radius="md" placeholder="Last Name" />
      </div>

      <br></br>
  

      <div className="mx-16 pr-96 pl-96 ">
        <Input placeholder="Your email" leftSection={<IconAt size={16} />} />
      </div>
      <br></br>

      <Stack>
        <div className="mx-16 pr-96 pl-96">
          <PasswordInput
            label="Password"
            defaultValue="secret"
            visible={visible}
            onVisibilityChange={toggle}
            />
        </div>

        <div className="mx-16 pr-96 pl-96">
          <PasswordInput
            label="Confirm password"
            defaultValue="secret"
            visible={visible}
            onVisibilityChange={toggle}
            />
        </div>
            

        <div className="flex justify-center">


        <Checkbox
      defaultChecked
      label="I accept  the Terms of Use & Privacy Policy"
      />
      </div>
        
            <div className="flex justify-center">
        <Button variant="default" color="yellow" size="lg" radius="lg">
          Sign Up
        </Button>
        </div>

        <br></br>

        <div className="flex justify-center">
          Already have an account? Login here
        </div>
        <div className="flex justify-center">
          Copyright@Jamii Vizuri
        </div>



      </Stack>
      </div>
          
    </MantineProvider>
  );
}

export default SignUp;





