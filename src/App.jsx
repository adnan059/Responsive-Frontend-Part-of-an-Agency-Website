import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import AgencyWS from "./AgencyWS/AgencyWS";

const App = () => {
  return (
    <ChakraProvider>
      <AgencyWS />
    </ChakraProvider>
  );
};

export default App;
