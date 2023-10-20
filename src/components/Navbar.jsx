import { Box, Flex, Button, useColorModeValue, Image, Menu, MenuButton, MenuList, MenuItem, Stack, useColorMode } from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import { Spin as Hamburger } from "hamburger-react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={[4, 6, 10]}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image src={Logo} alt="Logo" width={150} />
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton isActive={isOpen} as={Button} _hover={false} px="8px">
                      <Hamburger toggled={isOpen} size={20} rounded />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Download</MenuItem>
                      <MenuItem onClick={() => alert("Kagebunshin")}>Create a Copy</MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
