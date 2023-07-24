import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./style.css";
import pessoaindividada from "../../../../assets/pessoa-individada.jpg";

const DebtProfile = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const listVariants = {
    visible: {
      opacity: 1,
      x: 0, 
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 2,
        delay: 1,
      },
    },
    hidden: {
      opacity: 0,
      x: -50, 
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`containerDebt ${inView ? "visible" : ""}`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h2>Perfil das pessoas endividadas no Brasil</h2>
      <p>
        O perfil das pessoas endividadas no Brasil é bastante diversificado e
        pode abranger diferentes faixas etárias, níveis de renda e regiões do
        país. No entanto, existem alguns padrões comuns que podem ser
        identificados:
      </p>
      <ul>
        <motion.li variants={listVariants}>
          Jovens e adultos jovens: Uma parcela significativa das pessoas
          endividadas no Brasil são jovens e adultos jovens, na faixa dos 18 aos
          35 anos. Isso ocorre muitas vezes devido à falta de experiência
          financeira e à facilidade de acesso ao crédito nessa faixa etária.
        </motion.li>
        <motion.li variants={listVariants}>
          Desemprego e instabilidade financeira: A crise econômica e o
          desemprego também são fatores que contribuem para o endividamento das
          pessoas no Brasil. A falta de renda e a instabilidade financeira
          tornam mais difícil o pagamento das dívidas.
        </motion.li>
        <motion.li variants={listVariants}>
          Dificuldade em lidar com imprevistos: Muitas pessoas enfrentam
          dificuldades para lidar com imprevistos financeiros, como gastos
          médicos ou reparos em casa, e acabam recorrendo ao crédito para
          resolver essas situações.
        </motion.li>
      </ul>
      <motion.img
        src={pessoaindividada}
        alt="Pessoa Endividada"
        className="endividada-img"
        whileHover={{ scale: 1.1 }} // Efeito de zoom na imagem ao passar o mouse
      />
    </motion.div>
  );
};

export default DebtProfile;
