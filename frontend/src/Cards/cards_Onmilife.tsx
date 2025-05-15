import {
    Card,
    CardHeader
}from "@material-tailwind/react"
//import Image from "next/image";
export default function OnmilifeCard(){
    return (
        <Card
            shadow={false}
            placeholder={false}
            className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
            <CardHeader title="Encabezado"/>    
        </Card>
    )
}