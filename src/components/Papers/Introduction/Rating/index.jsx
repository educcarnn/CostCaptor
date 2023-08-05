import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick-custom.css";

export default function Rating() {
  const avaliacoesFicticias = [
    {
      index: 1,
      nome: "João Silva",
      foto: "caminho/para/imagem1.jpg",
      texto: "Excelente produto! Recomendo a todos.",
    },
    {
      index: 2,
      nome: "Maria Souza",
      foto: "caminho/para/imagem2.jpg",
      texto: "Ótimo atendimento e entrega rápida.",
    },
    {
      index: 3,
      nome: "Pedro Santos",
      foto: "caminho/para/imagem3.jpg",
      texto: "Estou satisfeito com a qualidade do serviço.",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef();

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % avaliacoesFicticias.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? avaliacoesFicticias.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      sliderRef.current.slickNext();
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    beforeChange: (current, next) => setSlideIndex(next),
  };

  return (
    <div className="containerRating">
      <div>Avaliações</div>
      <Slider ref={sliderRef} {...settings}>
        {avaliacoesFicticias.map((avaliacao) => (
          <div key={avaliacao.index} className="slide">
            <div className="slide-content">
              <img
                src={avaliacao.foto}
                alt={`Foto de ${avaliacao.nome}`}
                className="slide-image"
              />
              <h3 className="slide-name">{avaliacao.nome}</h3>
              <p className="slide-text">{avaliacao.texto}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
