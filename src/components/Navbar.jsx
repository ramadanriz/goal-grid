import { Box, Flex, Button, useColorModeValue, Image, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={[4, 6, 10]}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image src={Logo} alt="Logo" width={150} />
          </Box>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen} as={Button} _hover={false} px="8px">
                  <Hamburger toggled={isOpen} rounded />
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem onClick={() => alert("Kagebunshin")}>Create a Copy</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
