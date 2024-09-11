/* eslint-disable no-unused-vars */
import { Box, Button, Text, Tooltip } from "@chakra-ui/react";
import { useState } from "react";

export default function SideDrawer() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  return (
    <>
      <Box>
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant={"ghost"}>
            <i className="fa fa-search" aria-hidden="true"></i>
            <Text d={{ base: "none", md: 'flex' }} px={'4px'}>Search Users</Text>
          </Button>
        </Tooltip>
      </Box>
    </>
  );
}
