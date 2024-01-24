import Link  from "next/link";
import { Button } from "@/components/ui/button";

export default function Error404() {
    return (
        <div className="flex items-center h-screen p-16">
            <div className="container flex flex-col items-center ">
                <div className="flex flex-col gap-6 max-w-md text-center">
                    <h2 className="font-extrabold text-9xl text-blue-500">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl md:text-3xl text-purple-900">Sorry, we couldn´t find this page.</p>
                    <div className="container-button relative inline-flex group mx-auto mt-40 mb-20">
                        <Link href="/">
                        <Button type='button' className='inline-block px-12 h-12 w-auto py-3 text-sm font-medium border-purple-900 rounded active:text-violet-500 bg-transparent text-violet-700 hover:text-white hover:bg-purple-900 border focus:outline-none focus:ring'>Back To Home</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
