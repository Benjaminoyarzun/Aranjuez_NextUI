import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

export const Menudrop = () => {
    return ( 
        <>
        <div className="flex w-full flex-col">
            <Tabs aria-label="Options" className="justify-center my-2.5">
                <Tab key="desayuno" title="Desayuno">
                <Card>
                    <CardBody>
                    Desayuno continental LIBRE: Yogur, soda, café, leche, té, mate cocido. Tostadas, medialunas caseras, galletitas dulces, mermeladas y manteca. Jamón, queso, ensalada de frutas, bizcochuelos.                    
                    </CardBody>
                </Card>  
                </Tab>
                <Tab key="m1" title="Menú Día 1">
                <Card>
                    <CardBody>
                    Salpicón, lentejas, ensaladas, berenjena a la napolitana, milanesa con puré, tirabuzón con crema o pesto.
                    </CardBody>
                </Card>  
                </Tab>
                <Tab key="m2" title="Menú Día 2">
                <Card>
                    <CardBody>
                    Arroz primavera, fiambres surtidos, zapallitos rellenos, pan de carne con portuguesa, papas al natural, fideos con tuco.
                    </CardBody>
                </Card>  
                </Tab>
                <Tab key="m3" title="Menú Día 3">
                <Card>
                    <CardBody>
                    Huevos rellenos, pionono salado, bifes a la Marsala, arroz blanco con queso, canelones.
                    </CardBody>
                </Card>  
                </Tab>
                <Tab key="m4" title="Menú Día 4">
                <Card>
                    <CardBody>
                    Tomates rellenos, porotos a la vinagreta, soufflé con salsa blanca, carne al horno con papas, ñoquis con salsa rosa.
                    </CardBody>
                </Card>  
                </Tab>
                <Tab key="m5" title="Menú Día 5">
                <Card>
                    <CardBody>
                    Rusa y lengua a la vinagreta, empanadas de jamón y queso, bifes a la criolla con panaché, milanesas.
                    </CardBody>
                </Card>  
                </Tab>
                <Tab key="m6" title="Menú Día 6">
                <Card>
                    <CardBody>
                    Escabeche, mondongo provenzal, zapallitos a la romana, riñones al vino, pastel de papas.
                    </CardBody>
                </Card>  
                </Tab>
                <Tab key="m7" title="Menú Día 7">
                <Card>
                    <CardBody>
                    Fiambre alemán, pizza, pimientos rellenos, tortilla de papas, ravioles de ricotta y verdura.
                    </CardBody>
                </Card>  
                </Tab>
            </Tabs>
        </div>  
      </>
      );
}