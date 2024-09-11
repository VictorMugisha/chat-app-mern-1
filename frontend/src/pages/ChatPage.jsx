import { Box, Flex, Spacer } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";

export default function ChatPage() {
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        <Flex>
          {user && <MyChats />}
          <Spacer />
          {user && <ChatBox />}
        </Flex>
      </Box>
    </div>
  );
}
