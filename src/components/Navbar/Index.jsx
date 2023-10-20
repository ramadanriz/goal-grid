import { Box, Flex, Button, useColorModeValue, Menu, Stack, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Brand from "./Brand";
import DarkMode from "./DarkMode";
import List from "./List";
import { menuList } from "../../utils";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={[4, 6, 10]}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Brand />
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={3}>
              <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
              <Menu autoSelect={false}>
                {({ isOpen }) => (
                  <>
                    <DarkMode button={Button} open={isOpen} />
                    <List menuList={menuList} colorMode={colorMode} />
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
