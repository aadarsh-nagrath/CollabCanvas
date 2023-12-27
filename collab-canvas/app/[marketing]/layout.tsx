import { Navbar } from "./_components/navbar";
import { ReactNode } from "react";

const MarketingLayout =({children}: {children:ReactNode;}) => {
    return(
        <div className="h-full">
            <Navbar/>
            <main className="h-full pt-40">
                {children}
            </main>
        </div>
    );
}

export default MarketingLayout;