export default function Card({
    children,
    className=""
}){

    return(

        <div

            className={`

                bg-white
                rounded-2xl
                p-6
                shadow-sm
                border
                border-gray-200
                hover:shadow-lg
                transition

                ${className}

            `}

        >

            {children}

        </div>

    )

}