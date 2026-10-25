import Footer from "@/tools/footer/footer"

function NutritionCards(){

    const Nutrition =[
        {
            name:'Onmiost',
            system:"Sistema Oseo",
            img:"",
            Description: "Este producto es a base de banano para fortalezer el sistema oseo y evitar la osteoporosis"

        },
        {
            name:'Power Maker',
            system:"Sistema Muscular",
            img:"",
            Description: "Este producto tiene la popiedad de conservar la masa muscular"
        }
    ]

    //Estado Inicial de las tarjetas
    const cardPoint = useState(0)
    const sendCardPoint = null;
    const totalCards = Nutrition.length

    //Deslizamiento de tarjetas a la izquierda (Next)
    const NextCard = () =>{
        if(cardPoint + 4 < totalCards ){
                sendCardPoint(cardPoint+4)
        }
    }

    //Deslizamiento de tarjetas a la izquierda (Preview)
    const PreviewCard = () =>{
        if(cardPoint-4<=0){
                sendCardPoint(cardPoint-4)
        }
        else{
            sendCardPoint(0)
        }
    }

    return(
        <>
            <div>
                {}
            </div>
            <Footer/>
        </>
    )

}

export default NutritionCards