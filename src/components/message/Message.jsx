import React, { useContext } from "react";
import { MessageContext } from "../../contexts/MessageContext";
import styles from "./Message.module.css";
export default function Message(props) {
  const getContext = useContext(MessageContext);
  const { hasError, setHasError } = getContext;
  const successMsg = "Produtos carregados com sucesso";
  const errorMsg = "Erro ao carregar produtos";
  return (
    <section className={styles.message}>
      {hasError && <h1>{errorMsg}</h1>}

      {!hasError && <h1>{successMsg}</h1>}
    </section>
  );
}
