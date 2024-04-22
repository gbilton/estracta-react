import React from "react";

import { Box, Container } from "@mui/material";

import PaginationTable from "../components/PaginationTable";

function PaginationTablePage() {
  return (
    <Container>
      <Box
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <PaginationTable />
      </Box>
    </Container>
  );
}

export default PaginationTablePage;
