import { Fragment } from 'react';
import Link from 'next/link';

function Pagination() {
    return (
        <Fragment>
            <div className="pagination-box">
                <div className="previous">
                    <Link href="/">
                        <a>← Previous Page</a>
                    </Link>
                </div>
                <div className="older">
                    <Link href="/">
                        <a>Next Page →</a>
                    </Link>
                </div>
                <style jsx>{`
                    .pagination-box {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                    }
                    .pagination-box a {
                        color: #3832dc;
                        font-size: 1.2rem;
                        text-decoration: none;
                    }
                    .older {
                        text-align: right;
                    }
                    @media screen and (min-width: 700px) {
                        .pagination-box {
                            width: 60%;
                            margin: 40px auto;
                        }
                    }
                `}</style>
            </div>
        </Fragment>
    );
}

export default Pagination;
