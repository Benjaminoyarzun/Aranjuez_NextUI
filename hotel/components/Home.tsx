import React from "react";
import {Card, CardBody, Image, CardHeader, CardFooter} from "@nextui-org/react";
import { Reservasection } from './reservasection';

export default function App() {
  const [liked, setLiked] = React.useState(false);

  return (
    <>
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
              <h1 className="text-large font-medium mt-2">Conózcanos</h1>
              <p className="text-medium text-foreground/80">Con una amplia trayectoria en el mercado de servicios turísticos, el Hotel Aranjuez lleva consigo años de tradición familiar en la atención a sus huéspedes que cada temporada nos elijen para disfrutar de sus vacaciones de verano en Villa Carlos Paz.</p>
              <br/>
              <p className="text-medium text-foreground/80">Es por ello que cada día nos esforzamos en mejorar nuestra atención y cumplir con las expectativas de nuestros visitantes, mejorando nuestros servicios y comodidades.</p>
                
             </div>
          </div>
        </div>
        <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src="https://www.hotelaranjuez.com.ar/hotel-aranjuez-villa-carlos-paz-fachada.jpg"
              width="100%"
            />
          </div>
        </div>
      </CardBody>
    
    </Card>
    <div className="flex flex-row gap-6 justify-center home-items">
      <Card className="py-4 ">
        <CardBody className="overflow-visible py-2 justify-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://www.hotelaranjuez.com.ar/cyber-gratis-hotel-aranjuez.jpg"
            width={270}
          />
        </CardBody>
        <CardFooter className="pb-0 pt-2 px-4 flex-col items-start ">
          <h3 className="font-bold text-large">Cyber ¡gratis!</h3>
          <p className="text-tiny font-bold ">Tenemos habilitado un cyber con cinco PCs completas para que navegues gratis por Internet. Además contamos con WI-FI en todo el hotel.</p>
        </CardFooter>
      </Card>
      <Card className="py-4">
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl "
            src="https://www.hotelaranjuez.com.ar/piscina-descubierta-hotel-aranjuez.jpg"
            width={270}
          />
        </CardBody>
        <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
          <h3 className="font-bold text-large">Piscina descubierta</h3>
          <p className="text-tiny font-bold">En el verano podrá deleitarse con tardes de sol a pleno en nuestra piscina y solarium con reposeras y sillas y dejar que los más chicos se diviertan en nuestros juegos infantiles.</p>
        </CardFooter>
      </Card>
      <Card className="py-4">
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://www.hotelaranjuez.com.ar/piscina-climatizada-hotel-carlos-paz.jpg"
            width={270}
          />
        </CardBody>
        <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
          <h3 className="font-bold text-large">Piscina climatizada cubierta</h3>
          <p className="text-tiny font-bold">Acabamos de inaugurar nuestra nueva piscina climatizada cubierta de 6x3 mts (con temperatura de 32ºC) con hidrojet disponible todo el año.</p>
        </CardFooter>
      </Card>
      </div>
      <Reservasection/>
    </>
  );
}
