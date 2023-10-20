import { Box, Flex, Button, useColorModeValue, Text, Menu, MenuButton, MenuList, MenuItem, Stack, useColorMode, Link as ChakraLink } from "@chakra-ui/react";
import { Spin as Hamburger } from "hamburger-react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { menuList } from "../utils";
import { NavLink as ReactRouterLink } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={[4, 6, 10]}>
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
                    <MenuButton as={Button} _hover={false} px="1px">
                      <Hamburger toggled={isOpen} size={20} rounded />
                    </MenuButton>
                    <MenuList>
                      {menuList.map((menu, index) => (
                        <ChakraLink key={index} as={ReactRouterLink} to={menu.link}>
                          {({ isActive }) => <MenuItem bgColor={isActive ? "#171923" : ""}>{menu.name}</MenuItem>}
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
