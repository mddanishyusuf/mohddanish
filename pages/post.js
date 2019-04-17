import { withRouter } from 'next/router';

import { getLabels, getPost } from '../config/api';

import Layout from '../components/Layout';
import ReadMore from '../components/ReadMore';

const SinglePost = withRouter(({ single, labels }) => (
    <Layout labels={labels}>
        <ReadMore post={single} />
    </Layout>
));

SinglePost.getInitialProps = async ({ query }) => {
    const labels = await getLabels();
    const labelsJson = await labels.json();

    const post = await getPost(query.number);
    const postJson = await post.json();
    console.log(postJson);
    return { single: postJson, labels: labelsJson };
};

export default SinglePost;
