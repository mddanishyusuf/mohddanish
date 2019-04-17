import Link from 'next/link';

export function Navbar({ labels }) {
    return (
        <ul>
            {labels.map(label => (
                <li key={label.id}>
                    <Link href="/">
                        <a>{label.name}</a>
                    </Link>
                </li>
            ))}
            <style jsx>
                {`
                    ul {
                        margin: 0;
                        padding: 0;
                        list-style: none;
                    }
                    ul li {
                        display: inline-block;
                        font-family: 'Shadows Into Light', cursive;
                        padding: 3px 20px;
                        font-size: 1.1rem;
                        font-weight: 700;
                    }
                    ul li a {
                        color: #707070;
                        text-decoration: none;
                    }
                `}
            </style>
        </ul>
    );
}

export function PostCard({ post }) {
    return (
        <div className="post-card">
            <div className="post-title">{post.title}</div>
            <div className="post-title" />
            <div className="post-title" />
            <div className="post-title" />
        </div>
    );
}
