import React, { useState, useEffect } from "react";
import { MessageContext } from "../../contexts/MessageContext";
import { fetchCategories } from "../../services/CategoriesService";
import { menuItem } from "./menuItem/menuItem";
export function Menu() {
  const [data, setData] = useState();
  const MessageContext = useContext(contextValue);
}
