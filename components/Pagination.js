import { Fragment } from 'react';
import Link from 'next/link';

import { postPerPage } from '../config/data';

function Pagination({ total, active }) {
    const numberOfPages = Math.ceil(total / postPerPage);
    const activePage = parseInt(active);
    const showPrevious = activePage * postPerPage < total;
    return (
        <Fragment>
            <div className="pagination-box">
                <div className="previous">
                    {showPrevious && (
                        <Link href={`/page/${activePage + 1}`}>
                            <a>← Previous Page</a>
                        </Link>
                    )}
                </div>
                <div className="older">
                    {activePage > 1 && (
                        <Link href={`/page/${activePage - 1}`}>
                            <a>Next Page →</a>
                        </Link>
                    )}
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
