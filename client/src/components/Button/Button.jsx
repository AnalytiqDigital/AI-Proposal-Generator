export default function Button({

children

}){

return(

<button

className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3"

>

{children}

</button>

)

}