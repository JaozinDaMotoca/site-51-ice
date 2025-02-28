import React, { useState } from 'react';
import styles from './style.module.css';
import Original from '../../imagens/original.webp';
import Mango from '../../imagens/mango.webp';
import Limao from '../../imagens/limao.webp';
import ice1 from '../../imagens/ice1.png'
import ice2 from '../../imagens/ice2.png'
import ice3 from '../../imagens/ice3.png'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

export default function Carrossel() {
  const slides = [
    {
      titulo: 'Ice Limão',
      descricao:
        ' A ice de limão é uma bebida refrescante e saborosa, geralmente feita com suco de limão, açúcar e água, servida gelada. Ela é uma opção popular em dias quentes por seu sabor ácido e refrescante, sendo frequentemente consumida em festas, lanches ou como acompanhamento de refeições. Algumas versões podem incluir gelo triturado ou até mesmo ser preparada com um toque de gás, criando uma mistura efervescente. É uma bebida simples, porém deliciosa, que combina o frescor do limão com a doçura equilibrada do açúcar.',
      imagem: ice1,
      cor: '#C8D2D1',
      corh2:'#8ABE54',
      link: '#'
    },
    {
      titulo: 'Ice Malada',
      descricao:
        'A Ice Malada é uma bebida alcoólica refrescante, com sabor cítrico e doce, baseada na mistura de rum, suco de frutas e, geralmente, água gaseificada. Ela é famosa por seu sabor tropical, muitas vezes associada ao limão, maracujá ou laranja, e tem um toque levemente alcoólico, tornando-a uma opção popular em festas e confraternizações. A Ice Malada é servida gelada, o que a torna uma escolha ideal para dias quentes. Seu equilíbrio entre o doce e o ácido oferece uma experiência saborosa e descontraída.',
      imagem: ice2,
      cor: '#D88F28',
      corh2:'#B96808',
      link: '#'
    },
    {
      titulo: 'Ice Morango',
      descricao:
        'A Ice de Morango é uma bebida refrescante e doce, feita com suco de morango, açúcar e água, geralmente servida bem gelada. É uma opção popular durante o verão por seu sabor leve e frutado, com a acidez característica do morango combinada à doçura da bebida. Algumas versões podem incluir gelo triturado ou até mesmo ser gaseificada, criando uma sensação ainda mais refrescante. É uma opção deliciosa e perfeita para quem busca uma bebida saborosa e energizante em dias quentes.',
      imagem: ice3,
      cor: '#FD4E49',
      corh2:'#BA080E',

      link: '#'
    }
  ];

  const [indiceAtual, setIndiceAtual] =useState(0);

  function irParaProximo() {
    if(indiceAtual === slides.length - 1) {
      setIndiceAtual(0);
    } else{
      setIndiceAtual(indiceAtual + 1);
    }
  }

  function irParaAnterior() {
    if (indiceAtual === 0) {
      setIndiceAtual(slides.length - 1);
    } 
    else {
      setIndiceAtual(indiceAtual -1);
    }
  }

  return (
    <div className={styles.carrosselContainer}>

      <div className={styles.carrosselSlide} style={{ background: slides[indiceAtual].cor }}>
        <div className={styles.carrosselTexto}>
          <h2 style={{color: slides[indiceAtual].corh2}}>{ slides[indiceAtual].titulo}</h2>
          <p>{ slides[indiceAtual].descricao}</p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.botaoComprar}
            style={{color :slides[indiceAtual].cor}}
          >
            Comprar
          </a>
        </div>
        <img
          src={ slides[indiceAtual].imagem}
          alt={slides[indiceAtual].titulo}
        />
      </div>
      <div className={styles.controlesCarrossel}>
        <button className={styles.btnAnterior} onClick={irParaAnterior} >
          <FaChevronCircleLeft color='#e8e3e3' size={60} />
        </button>
        <button className={styles.btnProximo} onClick={irParaProximo} >
          <FaChevronCircleRight color='#e8e3e3' size={60} />
        </button>
      </div>
    </div>
  );
}
