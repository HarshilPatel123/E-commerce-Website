import Image from "next/image";
import { client} from "../lib/sanity";
import { urlFor } from "../lib/sanity";


import Link from "next/link";

async function getData() {
    const query = "*[_type == 'heroImage'][0]"

    const data = await client.fetch(query);

    return data;
}



export default async function Hero(){

    const data = await getData()
    return (
        <section className=" mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
            <div className="mb-8 flex justify-between md:mb-16">
                <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 max-lg:w-1/3 lg:pb-24 ld:pt-48">
                    <h1 className="mb-8 text-3xl font-bold text-black sm:text-5xl md:text-3xl">
                        Top Fashion For a Top Price !!!
                   </h1>
                   <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
                     We sell only the most exclusive and high quality products for you and your family.
                     We are the best so come and shop with us.
                   </p>
                </div>

                <div className="mb-12 flex w-full md:mb-16 lg:w-full ">
                    <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100">
                        <Image src={urlFor(data.image1).url()}
                        alt=" Hero Image"
                        className="h-full w-full object-cover object-center pt-10"
                        priority
                        width={500}
                        height={500}
                        ></Image>
                    </div>
                    <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg">
                        <Image src={urlFor(data.image2).url()}
                        alt=" Hero Image"
                        className="h-full w-full object-cover object-center pb-10 "
                        width={500}
                        height={500}
                        
                    ></Image>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center float-left justify-center gap-12 md:flex-row">
                <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
                   <Link href="/Men" className="flex w-1/3 items-center justify-center text-gray-600 transition duration-100 hover:bg-gray-300 active:bg-gray-400">
                    Men 
                    </Link> 
                    <Link href="/Men" className="flex w-1/3 items-center justify-center text-gray-600 transition duration-100 hover:bg-gray-300 active:bg-gray-400">
                    Women 
                    </Link> 
                    <Link href="/Men" className="flex w-1/3 items-center justify-center text-gray-600 transition duration-100 hover:bg-gray-300 active:bg-gray-400">
                    Teens 
                    </Link> 
                </div>
            </div>
        </section>
    )
}