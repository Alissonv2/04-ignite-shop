import Image from "next/image"
import { useKeenSlider } from 'keen-slider/react'
import { HomeContainer, Product } from "../styles/pages/home"

import Shirt1 from '../assets/Shirts/Shirt-1.png'
import Shirt2 from '../assets/Shirts/Shirt-2.png'
import Shirt3 from '../assets/Shirts/Shirt-3.png'
import Shirt4 from '../assets/Shirts/Shirt-4.png'

import 'keen-slider/keen-slider.min.css'


export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={Shirt1} width={520} height={480} alt="" />

        <footer>
          <strong>
            Camiseta x
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={Shirt2} width={520} height={480} alt="" />

        <footer>
          <strong>
            Camiseta x
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={Shirt3} width={520} height={480} alt="" />

        <footer>
          <strong>
            Camiseta x
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={Shirt4} width={520} height={480} alt="" />

        <footer>
          <strong>
            Camiseta x
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={Shirt4} width={520} height={480} alt="" />

        <footer>
          <strong>
            Camiseta x
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

    </HomeContainer>
  )
}
