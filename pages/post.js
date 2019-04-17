import { withRouter } from 'next/router';

import { getLabels, getPost } from '../config/api';

import Layout from '../components/Layout';

const SinglePost = withRouter(({ singlePost, labels }) => <Layout labels={labels}>{singlePost.body}</Layout>);

SinglePost.getInitialProps = async ({ query }) => {
    const labels = await getLabels();
    const labelsJson = await labels.json();

    const post = await getPost(query.number);
    const postJson = await post.json();
    console.log(postJson);
    return { singlePost: postJson, labels: labelsJson };
};

export default SinglePost;
