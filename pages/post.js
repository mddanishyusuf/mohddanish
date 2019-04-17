import { withRouter } from 'next/router';

import { getLabels, getPost, getComments } from '../config/api';

import Layout from '../components/Layout';
import ReadMore from '../components/ReadMore';

const SinglePost = withRouter(({ single, labels, comments }) => (
    <Layout labels={labels}>
        <ReadMore post={single} comments={comments} />
    </Layout>
));

SinglePost.getInitialProps = async ({ query }) => {
    const labels = await getLabels();
    const labelsJson = await labels.json();

    const post = await getPost(query.number);
    const postJson = await post.json();

    const comments = await getComments(query.number);
    const commentsJson = await comments.json();
    console.log(postJson);
    return { single: postJson, labels: labelsJson, comments: commentsJson };
};

export default SinglePost;
