import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"

import Shirt1 from '../assets/Shirts/Shirt-1.png'
import Shirt2 from '../assets/Shirts/Shirt-2.png'
import Shirt3 from '../assets/Shirts/Shirt-3.png'
import Shirt4 from '../assets/Shirts/Shirt-4.png'


export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={Shirt1} width={520} height={480} alt="" />

        <footer>
          <strong>
            Camiseta x
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={Shirt2} width={520} height={480} alt="" />

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
