
import { Footer } from "./_components/footer";
import {Heading} from "./_components/heading";
import {Heroes} from "./_components/heroes";
import MarketingLayout from "./layout";

const MarketingPage = () => {
    return(
        <MarketingLayout>
            <div className="min-h-full flex flex-col ">
                <div className="flex flex-col items-center justify-center 
                md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
                    <Heading/>
                    <Heroes/>
                    <Footer/>
                </div>
            </div>
        </MarketingLayout>
    );
}


export default MarketingPage;