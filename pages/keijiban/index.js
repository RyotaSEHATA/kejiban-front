import Head from 'next/head';
import Header from './header.js';
import Content from './content.js';
import Nav from './bottom-nav.js';
import SideNav from './side-nav.js';

function index() {
    return (
        <div>
            <Head>
                <title>Dicer Keijiban</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            {/* import header */}
            <div className="sticky top-0 z-50">
                <Header />
            </div>

            <div className="grid grid-cols-12">
                <div className="col-span-1 sticky left-0">
                    <SideNav />
                </div>
                <div className="col-span-11">
                    {/* import main content */}
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                </div>
            </div>



            {/* import bottom navigation */}
            <div className="sticky inset-x-0 bottom-0 z-50 shadow-xl">
                <Nav />
            </div>
                
        </div>
    );
}

export default index;