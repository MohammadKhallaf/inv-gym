import { useEffect, useState } from "react";
import Layout from "./layout/index";

import axios from "axios";
import "./styles/app.scss";
import ListPage from "./views/ListPage";

function App() {
 
  return (
    <Layout>
      <ListPage />
    </Layout>
  );
}

export default App;
