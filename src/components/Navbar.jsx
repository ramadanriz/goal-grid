import { Box, Flex, Button, useColorModeValue, Menu, Stack, useColorMode, Text, MenuButton, MenuList, Link as ChakraLink, MenuItem } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { NavLink as ReactRouterLink } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import { menuList } from "../utils";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={[4, 6, 10]} position="sticky" top={0} zIndex={1}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Text as="b" fontSize="2xl">
              GoalGrid
            </Text>
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={3}>
              <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
              <Menu autoSelect={false}>
                {({ isOpen }) => (
                  <>
                    <MenuButton as={Button} px="1px">
                      <Hamburger toggled={isOpen} size={20} rounded />
                    </MenuButton>
                    <MenuList>
                      {menuList.map((menu, index) => (
                        <ChakraLink key={index} as={ReactRouterLink} to={menu.link}>
                          {({ isActive }) => <MenuItem bgColor={isActive ? (colorMode === "light" ? "gray.100" : "gray.900") : ""}>{menu.name}</MenuItem>}
                        </ChakraLink>
                      ))}
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
