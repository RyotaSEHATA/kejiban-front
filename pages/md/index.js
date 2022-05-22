import Head from 'next/head';
import Header from './header.js';

import matter from "gray-matter";

export async function getStaticProps() {

    const data = await import(`../../data/first.md`);
    const singleDocument = matter(data.default);

    return {
        props: {
            frontmatter: singleDocument.data,         
            markdownBody: singleDocument.content,      
        }
    };
}

function index(props) {
    return (
        <div>
            <Head>
                <title>Keijiban</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            {/* import header */}
            <div className="sticky top-0 z-50">
                <Header />
            </div>

            <button className="btn btn-active btn-secondary"
                    onClick={
                        async () => 
                        {
                            console.log("button start");
                            const response = await fetch(
                                '/api/md', 
                                {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({ name: props.markdownBody }),
                                }
                            );
                            const data = await response.json();
                            console.log(data.jsonPath);
                        }
                    }
                    
                    >
                Button
            </button>
                
        </div>
    );
}

export default index;