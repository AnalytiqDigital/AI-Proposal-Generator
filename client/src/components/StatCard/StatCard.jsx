import Card from "@/components/Card/Card";

export default function StatCard({

    title,

    value,

    icon

}){

    return(

        <Card>

            <div className="flex justify-between items-start">

                <div>

                    <p className="text-sm text-slate-500">

                        {title}

                    </p>

                    <h2 className="text-3xl font-bold mt-3">

                        {value}

                    </h2>

                    <p className="text-green-600 text-sm mt-2">

                        ↑ 12% this month

                    </p>

                </div>

                <div className="text-3xl text-blue-600">

                    {icon}

                </div>

            </div>

        </Card>

    )

}